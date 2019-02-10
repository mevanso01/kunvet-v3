<style lang="scss" scoped>
.k-btn {
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 10px 12px -4px #eaeaf9;
  // position: relative;
  display: inline-block;
  height: 56px;
  line-height: 56px;
  text-align: center;
  overflow: hidden;
  .k-btn--text {
    font-size: 17px;
    padding: 0 24px;
  }
}
.k-btn.block {
  width: 100%;
}
.k-btn.icon {
  width: 56px;
  .k-btn--text {
    padding: 0;
  }
  img {
    max-width: 30px;
    margin: 0 8px;
    vertical-align: middle;
  }
}
</style>
<template>
  <div
    class="k-btn"
    @click="click"
    :class="{ 'block': block, 'icon': icon }"
    :style="buttonStyle"
  >
    <span v-if="working">
      <v-progress-circular indeterminate></v-progress-circular>
    </span>
    <span class="k-btn--text" v-else>
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
      default: '#ff6969',
    },
    dark: {
      type: Boolean,
      default: true,
    },
    block: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
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
