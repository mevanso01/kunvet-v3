<template>
  <v-card>
    <v-card-title>
      <div v-if="state === 'INITIAL' || state === 'UPLOADING'" style="width: 100%;">
        <form enctype="multipart/form-data" novalidate style="width: 100%;">
          <h1 style="margin-bottom: 10px;">{{ title }}</h1>
          <div class="dropbox">
            <input
              type="file" ref="file_input"
              :disabled="state === 'UPLOADING'"
              @change="updateFile($event.target.files)"
              accept="image/*"
              class="input-file"
              :multiple="multiple"
            >
              <p v-if="state === 'INITIAL'">
                Drag your pictures here<br> or click to browse
              </p>
              <p v-if="state === 'UPLOADING'">
                Uploading files...
              </p>
          </div>
        </form>
        <p style="margin-bottom: 5px" v-if="this.files[0] && keepOriginal">Create a preview for this image:</p>
        <div id="cropper-container" v-show="!cropped && this.files.length > 0" style="width: 100%; padding: 0 16px;">
          <vueCropper v-if="this.files.length > 0"
            ref="cropper"
            :img="cropperOptions.img"
            :outputSize="cropperOptions.size"
            :outputType="cropperOptions.outputType"
            :fixedBox="true"
            :autoCrop="cropperOptions.autoCrop"
            :autoCropWidth="cropperOptions.autoCropWidth"
            :autoCropHeight="cropperOptions.autoCropHeight"
            :info="false"
            :canMove="false"
            :canScale="true"
            >
          </vueCropper>
        </div>
        <div v-show="cropped" style="display: flex;">
          <img style="margin: auto;" v-bind:src="cropped">
        </div>
        <div v-if="this.files[0]">
          <v-btn style="margin-left: 0;" v-if="!cropped" @click="cropSingle()">Crop</v-btn>
          <v-btn style="margin-left: 0;" v-else @click="cropped = null;">Redo Crop</v-btn>
        </div>
      </div>
      <div style="min-height: 40px;" v-if="state === 'FAILED'">
        <h3 style="display: inline-block;">
          Oops! Something went wrong on our end. Please try again later
        </h3>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat="flat" @click="cancel">Cancel</v-btn>
      <v-btn  v-if="multiple" :disabled="files.length < 1" flat="flat" @click="upload">Upload</v-btn>
      <v-btn  v-else :disabled="files.length < 1 || !cropped" flat="flat" @click="upload">Upload</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import FileClient from '@/utils/FileClient';
// import { Croppie } from 'croppie';
// import 'croppie/croppie.css';
import vueCropper from 'vue-cropper';

const _URL = window.URL || window.webkitURL;

export default {
  props: {
    id: String,
    croppedId: String,
    multiple: {
      type: Boolean,
      default: false,
    },
    keepOriginal: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Add Picture',
    },
  },
  components: {
    vueCropper,
  },
  data() {
    return {
      state: 'INITIAL',
      curId: null,
      curCroppedId: null,
      file: null,
      files: [],
      croppedFiles: [],
      client: null,
      cropped: null,
      cropperOptions: {
        img: undefined,
        size: 1,
        full: false,
        outputType: undefined,
        canMove: true,
        fixedBox: true,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        autoCropWidth: 300,
        autoCropHeight: 300,
      },
      currentlyCropping: 0,
    };
  },
  mounted() {
    this.client = new FileClient();
    this.curId = this.id;
    this.curCroppedId = this.croppedId;
  },
  methods: {
    result(output) {
      this.cropped = output;
    },
    changeCropBox(num) {
      // doesnt work
      var n = num || 1;
      this.cropperOptions.autoCropWidth += n;
      this.cropperOptions.autoCropHeight += n;
    },
    changeScale(num) {
      var n = num || 1;
      this.$refs.cropper.changeScale(n);
    },
    cropSingle() {
      this.$refs.cropper.getCropBlob((data) => {
        const file = new File([data], this.files[0].name, { type: this.files[0].type, lastModified: Date.now() });
        this.croppedFiles[0] = file;
        // preview image
        this.cropped = _URL.createObjectURL(data);
      });
    },
    updateFile(files) {
      if (files.length > 0 && this.state !== 'UPLOADING') {
        if (this.multiple) {
          for (var i = 0; i < files.length; i++) {
            this.files.push(files[i]);
          }
        } else {
          this.files = [files[0]];
          this.updateCropperImg(this.files[0]);
        }
      }
    },
    upload() {
      this.state = 'UPLOADING';

      setImmediate(() => {
        if (this.keepOriginal) {
          this.uploadOriginalAndCropped();
        } else {
          this.uploadCroppedOnly();
        }
      });
    },
    async updateCropperImg(file) {
      this.cropperOptions.outputType = file.type;
      const img = await this.loadImg(file);
      this.cropperOptions.img = null;
      this.cropperOptions.img = img.src;
      var cc = document.getElementById('cropper-container');
      const width = cc.offsetWidth - 32;
      let newHeight = 0;
      if (img.height > img.width) {
        newHeight = width;
      } else {
        newHeight = Math.round(width * (img.height / img.width));
      }
      cc.style.height = `${newHeight}px`;
      const square = Math.min(width, newHeight);
      this.cropperOptions.autoCropWidth = square;
      this.cropperOptions.autoCropHeight = square;
    },
    loadImg(file) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = _URL.createObjectURL(file);
      });
    },
    async uploadCroppedOnly() {
      if (!this.curCroppedId) {
        // Create a new file slot
        try {
          this.curCroppedId = await this.client.createFileSlot(this.croppedFiles[0].name, this.croppedFiles[0].type);
        } catch (e) {
          this.state = 'FAILED';
          this.$error(e);
          return;
        }
        this.$emit('created', this.curCroppedId);
      }
      try {
        await this.client.uploadFile(this.curCroppedId, this.croppedFiles[0]);
      } catch (e) {
        this.state = 'FAILED';
        this.$error(e);
        return;
      }
      this.state = 'SUCCESSFUL';
      this.$emit('uploaded', this.curCroppedId);
      this.reset();
    },
    async uploadOriginalAndCropped() {
      try {
        if (!this.curCroppedId) {
          this.curCroppedId = await this.client.createFileSlot(this.croppedFiles[0].name, this.croppedFiles[0].type);
        }
        if (!this.curId) {
          this.curId = await this.client.createFileSlot(this.files[0].name, this.files[0].type);
        }
        await this.client.uploadFile(this.curCroppedId, this.croppedFiles[0]);
        await this.client.uploadFile(this.curId, this.files[0]);
      } catch (e) {
        this.state = 'FAILED';
        this.$error(e);
        return;
      }
      this.$emit('uploaded', { original: this.curId, cropped: this.curCroppedId });
      this.reset();
    },
    _secretCrop(originalFile) {
      return new Promise((resolve, reject) => {
        try {
          this.$refs.cropper.getCropBlob((data) => {
            const croppedfile = new File([data], originalFile.name, { type: originalFile.type, lastModified: Date.now() });
            // this.cropped = _URL.createObjectURL(data);
            resolve(croppedfile);
          });
        } catch (e) {
          this.$error(e);
          reject(e);
        }
      });
    },
    cancel() {
      this.$emit('cancel');
      this.reset();
    },
    reset() {
      // document.getElementById('file-input').value = '';
      this.$refs.file_input.value = '';
      this.curId = null;
      this.curCroppedId = null;
      this.files = [];
      this.croppedFiles = [];
      this.cropped = null;
      this.state = 'INITIAL';
      this.cropperOptions.img = undefined;
    },
  },
  watch: {
    id(newId) {
      this.curId = newId;
    },
  },
};
</script>
