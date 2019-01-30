<template>
  <div
    class="general-submit button"
    @click="click"
    :style="buttonStyle"
  >
    <span v-if="working">
      <v-progress-circular indeterminate></v-progress-circular>
    </span>
    <span v-else>
      <slot></slot>
    </span>
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
    working: {
      type: Boolean,
      default: false,
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
