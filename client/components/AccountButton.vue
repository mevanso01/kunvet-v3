<style>
</style>
<template>
<v-btn
  :style="style"
  @click="getOnClick"
>
  {{ text }}
</v-btn>
</template>
<script>
export default {
  props: ['text', 'onClick'],
  computed: {
    style() {
      return 'text-transform: none; border: 1px solid black;';
    },
    getOnClick() {
      const { onClick } = this;
      // Silences undefined error while allowing us to write shorter component code.
      return onClick || (() => {});
    },
  },
};
</script>