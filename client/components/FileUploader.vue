<template>
  <v-card>
    <v-card-text>
      <input
        type="file"
        @change="updateFile($event.target.files)"
        accept="application/*"
      >
      <div>
        <ul>
          <li>State: {{ state }}</li>
          <li>Slot ID: <code>{{ curId }}</code></li>
          <li>Chosen: {{ !!file }}</li>
          <li v-if="file">Type: {{ file.type }}</li>
        </ul>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn flat @click="upload">Upload</v-btn>
      <v-btn flat :href="client.getLink(curId)">Download</v-btn>
      <span v-if="curId">You are uploading to an existing file slot</span>
      <span v-else>You are creating a new file slot</span>
    </v-card-actions>
  </v-card>
</template>
<script>
import FileClient from '@/utils/FileClient';

export default {
  props: ['id'],
  data() {
    return {
      state: 'READY',
      curId: '',
      file: null,
      client: null,
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
          this.$error(e);
          return;
        }

        this.$emit('created', this.curId);
      }

      try {
        await this.client.uploadFile(this.curId, this.file);
      } catch (e) {
        this.state = 'FAILED';
        this.$error(e);
        return;
      }

      this.state = 'SUCCESSFUL';
      this.$emit('uploaded', this.curId);
    },
  },
  watch: {
    id(newId) {
      this.curId = newId;
    },
  },
};
</script>
