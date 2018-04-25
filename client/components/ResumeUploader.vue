<template>
  <v-card>
      <v-card-title>
      <div v-if="state === 'INITIAL' || state === 'UPLOADING'">
      <form enctype="multipart/form-data" novalidate style="width: 100%;">
        <h1>Upload Resume</h1>
        <div class="dropbox">
          <input
            type="file"
            :disabled="state === 'UPLOADING'"
            @change="updateFile($event.target.files)"
            accept="application/pdf, application/msword, 
              application/vnd.openxmlformats-officedocument.wordprocessingml.document,
              application/vnd.oasis.opendocument.text"
            class="input-file"
          >
            <p v-if="state === 'INITIAL'">
              Drag your file here<br> or click to browse
            </p>
            <p v-if="state === 'UPLOADING'">
              Uploading files...
            </p>
        </div>
        <div style="min-height: 21px; margin: 10px 0;">
          <p style="margin: 0;">{{ chosenFile }}</p>
        </div>
      </form>
      <v-text-field
        v-model="resumeName"
        style="padding: 0 2px;"
        name="edit-modal-input"
        hide-details
        single-line
        placeholder="Give this resume a name"
      ></v-text-field>
      </div>
      <div style="min-height: 40px;" v-if="state === 'FAILED'">
        <h3 style="display: inline-block;">
          Oops! Something went wrong.
        </h3>
        <p>{{ errorMessage }}</p>
      </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat="flat" @click="cancel">Cancel</v-btn>
        <v-btn :disabled="!file || !resumeName" flat="flat" @click="upload">Upload</v-btn>
      </v-card-actions>
  </v-card>
</template>
<script>
import FileClient from '@/utils/FileClient';

export default {
  props: ['id'],
  data() {
    return {
      state: 'INITIAL',
      curId: '',
      file: null,
      chosenFile: null,
      client: null,
      resumeName: '',
      errorMessage: '',
    };
  },
  mounted() {
    this.client = new FileClient();
    this.curId = this.id;
  },
  methods: {
    updateFile(files) {
      if (!files.length) {
        this.file = null;
      } else {
        this.file = files[0];
        this.chosenFile = files[0].name;
      }
    },
    async upload() {
      this.state = 'UPLOADING';
      if (!this.curId) {
        // Create a new file slot
        try {
          this.curId = await this.client.createFileSlot(this.file.name, this.file.type);
        } catch (e) {
          console.error(e);
          this.state = 'FAILED';
          this.errorMessage = e.message;
          return;
        }

        this.$emit('created', this.curId);
      }
      try {
        await this.client.uploadFile(this.curId, this.file);
      } catch (e) {
        console.error(e);
        this.state = 'FAILED';
        this.errorMessage = e.message;
        return;
      }

      this.$emit('uploaded', this.curId, this.resumeName);
      this.reset();
    },
    cancel() {
      this.$emit('cancel');
      this.reset();
    },
    reset() {
      this.curId =  '';
      this.file = null;
      this.chosenFile = null;
      this.resumeName = '';
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
