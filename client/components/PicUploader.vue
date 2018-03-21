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
      </div>
      <div style="min-height: 40px;" v-if="state === 'FAILED'">
        <h3 style="display: inline-block;">
          Oops! Something went wrong on our end. Please try again later
        </h3>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat="flat" @click="cancel">Cancel</v-btn>
      <v-btn :disabled="files.length < 1" flat="flat" @click="upload">Upload</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import FileClient from '@/utils/FileClient';

export default {
  props: {
    id: String,
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      state: 'INITIAL',
      curId: null,
      files: [],
      client: null,
    };
  },
  mounted() {
    this.client = new FileClient();
    this.curId = this.id;
  },
  methods: {
    updateFile(files) {
      if (files.length > 0 && this.state !== 'UPLOADING') {
        for (var i = 0; i < files.length; i++) {
          this.files.push(files[i]);
        }
      }
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
