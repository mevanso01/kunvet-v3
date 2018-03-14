<template>
  <v-container fluid>
    <h1>Sandbox</h1>
    <div>
      Play with me on <code>client/pages/Sandbox.vue</code>!
    </div>
    <FileUploader
      @created="onCreated"
      @uploaded="onUploaded"
    />
  </v-container>
</template>
<script>
import FileUploader from '@/components/FileUploader';

export default {
  components: {
    FileUploader,
  },
  data() {
    return {
    };
  },
  methods: {
    onCreated(id) {
      console.log(`✨ File slot created: ${id}`);
    },
    onUploaded(id) {
      console.log(`☁ File uploaded: ${id}`);
    },
  },
};
</script>
