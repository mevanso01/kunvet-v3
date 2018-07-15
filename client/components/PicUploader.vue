<style>
  .croppa-container {
    /* background-color: #f0f0f0; */
    margin: 0 auto;
    border-radius: 5px;
  }
  .croppa-container svg.icon-remove {
    -webkit-filter: none !important;
    filter: none !important;
  }
  .croppa-container svg.icon-remove path {
    fill: #ef5350 !important;
  }
</style>
<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ title }}</span>
    </v-card-title>
    <v-card-text>
      <div v-if="state === 'INITIAL' || state === 'UPLOADING'" style="width: 100%; text-align: center;">
        <VueCroppa
          :width="300"
          :height="300"
          :placeholder-font-size="14"
          v-model="cropper"
          show-loading
          placeholder="Drag your pictures here or click to browse"
        >
        </VueCroppa>
      </div>
      <div style="min-height: 40px;" v-if="state === 'FAILED'">
        <h3 style="display: inline-block;">
          Oops! Something went wrong on our end. Please try again later
        </h3>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn flat="flat" @click="cancel">Cancel</v-btn>
      <v-btn :disabled="!cropper || !cropper.hasImage()" flat="flat" @click="upload">Upload</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import FileClient from '@/utils/FileClient';
import VueCroppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';

export default {
  props: {
    id: String,
    croppedId: String,
    title: {
      type: String,
      default: 'Add Picture',
    },
    filename: {
      type: String,
      default: 'image',
    },
  },
  components: {
    VueCroppa: VueCroppa.component,
  },
  data() {
    return {
      state: 'INITIAL',
      cropper: null,
      curId: null,
      curCroppedId: null,
      croppedFiles: [],
      client: null,
      cropped: null,
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
    upload() {
      this.state = 'UPLOADING';

      setImmediate(() => {
        this.uploadCroppedOnly();
      });
    },
    async uploadCroppedOnly() {
      const mimeType = 'image/jpeg';
      if (!this.curCroppedId) {
        // Create a new file slot
        try {
          this.curCroppedId = await this.client.createFileSlot(this.filename, mimeType);
        } catch (e) {
          this.state = 'FAILED';
          this.$error(e);
          return;
        }
        this.$emit('created', this.curCroppedId);
      }
      try {
        const blob = await this.cropper.promisedBlob(mimeType);
        await this.client.uploadFile(this.curCroppedId, blob);
      } catch (e) {
        this.state = 'FAILED';
        this.$error(e);
        return;
      }
      this.state = 'SUCCESSFUL';
      this.$emit('uploaded', this.curCroppedId);
      this.reset();
    },
    cancel() {
      this.$emit('cancel');
      this.reset();
    },
    reset() {
      this.curId = null;
      this.curCroppedId = null;
      this.state = 'INITIAL';
    },
  },
  watch: {
    id(newId) {
      this.curId = newId;
    },
  },
};
</script>
