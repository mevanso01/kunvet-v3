<template>
  <v-card>
      <v-card-title>
      <div v-if="state === 'INITIAL' || state === 'UPLOADING'">
      <form enctype="multipart/form-data" novalidate style="width: 100%;">
        <h1>Add Pictures</h1>
        <div class="dropbox">
          <input
            type="file"
            :disabled="state === 'UPLOADING'"
            @change="updateFile($event.target.files)"
            accept="application/*"
            class="input-file"
          >
            <p v-if="state === 'INITIAL'">
              Drag your pictures here<br> or click to browse
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
        placeholder="Resume name"
      ></v-text-field>
      </div>
      <div style="min-height: 40px;" v-if="state === 'FAILED'">
        <h3 style="display: inline-block;">
          Oops! Something went wrong on our end. Please try again later
        </h3>
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
      curId: null,
      files: null,
      chosenFile: null,
      client: null,
      resumeName: '',
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
        this.files = files;
        // this.chosenFile = files[0].name;
      }
    },
    async upload() {
      this.state = 'UPLOADING';
      if (!this.curId) {
        // Create a new file slot
        try {
          this.curId = await this.client.createFileSlot(this.file.name, this.file.type);
        } catch (e) {
          this.state = 'FAILED';
          console.error(e);
          return;
        }
        this.$emit('created', this.curId);
      }
      try {
        await this.client.uploadFile(this.curId, this.file);
      } catch (e) {
        this.state = 'FAILED';
        console.error(e);
        return;
      }

      this.state = 'SUCCESSFUL';
      this.$emit('uploaded', fileIds);
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
