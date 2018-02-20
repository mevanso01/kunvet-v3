<style>
.view-applicant-page-toolbar-button {
  height: 36px !important; /* I'd prefer not to do importants :/ */
  margin: 15px 5px !important;
}
</style>
<template>
<v-btn
  :style="style"
  @click="onClick"
  class="view-applicant-page-toolbar-button"
>
  {{ text }}
</v-btn>
</template>
<script>
export default {
  props: ['onClick', 'color', 'text', 'isFilled'],
  computed: {
    style() {
      const { color, isFilled } = this;
      const filledStyle = `background-color: ${color}; color: white;`;
      const style = `text-transform: none; ${isFilled ? filledStyle : `border: 1px solid ${color}; color: ${color};`}`;
      return style;
    },
  },
};
</script>