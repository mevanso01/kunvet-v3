<template>
  <v-card>
    <v-card-title>
      <div v-if="state === 'INITIAL' || state === 'UPLOADING'" style="width: 100%;">
        <form enctype="multipart/form-data" novalidate style="width: 100%;">
          <h1>Add Pictures</h1>
          <div class="dropbox">
            <input
              type="file"
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
          <div style="min-height: 21px; margin: 10px 0;">
            <p style="margin: 0;" v-for="file in files">{{ file.name }}</p>
          </div>
        </form>
        <div id="cropper-container" v-show="!multiple" style="width: 100%;">
          <vueCropper v-show="!cropped"
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
            :canScale="false"
            >
          </vueCropper>
          <div v-show="cropped" style="display: flex;">
            <img style="margin: auto;" v-bind:src="cropped">
          </div>
        </div>
        <button @click="changeScale(1)" class="btn">+</button>
				<button @click="changeScale(-1)" class="btn">-</button>
        <button @click="crop()">Crop Via Callback</button>
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
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    vueCropper,
  },
  data() {
    return {
      state: 'INITIAL',
      curId: null,
      file: null,
      files: [],
      client: null,
      cropped: null,
      cropperOptions: {
        img: undefined,
        size: 1,
        full: false,
        outputType: 'jpg',
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
    /* this.$refs.croppieRef.bind({
      url: 'http://i.imgur.com/Fq2DMeH.jpg',
    }); */
  },
  methods: {
    result(output) {
      this.cropped = output;
    },
    changeScale(num) {
      var n = num || 1;
      this.$refs.cropper.changeScale(n);
    },
    crop() {
      this.$refs.cropper.getCropBlob((data) => {
        // preview image
        console.log(data);
        const file = new File([data], this.files[0].name, { type: this.files[0].type, lastModified: Date.now() });
        this.files[0] = file;
        console.log('FILES', this.files);
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
        }
      }
      if (this.files[0]) {
        console.log(this.files);
        this.updateCropperImg(this.files[0]);
      }
    },
    updateCropperImg(file) {
      this.loadImg(file).then((img) => {
        this.cropperOptions.img = img.src;
        var cc = document.getElementById('cropper-container');
        const width = cc.offsetWidth;
        const newHeight = Math.round(width * (img.height / img.width));
        cc.style.height = `${newHeight}px`;
        const square = Math.min(width, newHeight);
        this.cropperOptions.autoCropWidth = square;
        this.cropperOptions.autoCropHeight = square;
        // console.log('Width', width);
        // console.log('Height', newHeight);
        // console.log('Square', square);
      });
    },
    loadImg(file) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = _URL.createObjectURL(file);
      });
    },
    upload() {
      if (this.multiple) {
        this.uploadMultiple();
      } else {
        this.uploadSingle();
      }
    },
    async uploadSingle() {
      this.state = 'UPLOADING';

      if (!this.curId) {
        // Create a new file slot
        try {
          this.curId = await this.client.createFileSlot(this.files[0].name, this.files[0].type);
        } catch (e) {
          this.state = 'FAILED';
          console.error(e);
          return;
        }
        this.$emit('created', this.curId);
      }
      try {
        await this.client.uploadFile(this.curId, this.files[0]);
      } catch (e) {
        this.state = 'FAILED';
        console.error(e);
        return;
      }
      this.state = 'SUCCESSFUL';
      this.$emit('uploaded', this.curId);
    },
    async uploadMultiple() {
      this.state = 'UPLOADING';
      var fileIds = [];
      for (const file of this.files) {
        try {
          const curId = await this.client.createFileSlot(file.name, file.type);
          this.client.uploadFile(curId, file);
          fileIds.push(curId);
        } catch (e) {
          this.state = 'FAILED';
          console.error(e);
          return;
        }
      }
      Promise.all(fileIds).then((res) => {
        this.state = 'SUCCESSFUL';
        this.$emit('uploaded', res);
      });
    },
    cancel() {
      this.$emit('cancel');
    },
  },
  watch: {
    id(newId) {
      this.curId = newId;
    },
  },
};
</script>
