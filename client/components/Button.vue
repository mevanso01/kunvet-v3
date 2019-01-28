<template>
  <div
    class="general-submit button"
    @click="click"
    :style="buttonStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'k-btn',
  props: {
    color: {
      type: String,
      default: '#ef5350',
    },
    dark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
  computed: {
    buttonStyle() {
      return {
        background: this.color,
        color: this.dark ? '#fff' : 'inherit',
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.button {
  border-radius: 4px;
  box-shadow: 0 10px 12px -4px #eaeaf9;
  cursor: pointer;
}
</style>
