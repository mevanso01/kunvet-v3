<template>
  <v-container fluid>
    <h1>Sandbox</h1>
    <div>
      Play with me on <code>client/pages/Sandbox.vue</code>!
    </div>
    <PdfFrame href="https://s3.amazonaws.com/kunvet-prod-assets/HW1.pdf" page="1">
    </PdfFrame>
  </v-container>
</template>
<script>
import PdfFrame from '@/components/PdfFrame';

export default {
  components: {
    PdfFrame,
  },
  data() {
    return {
      text: 'Default text',
    };
  },
};
</script>
