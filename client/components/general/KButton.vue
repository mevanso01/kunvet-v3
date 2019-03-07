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
    font-size: 16px;
    padding: 0 24px;
  }
  .k-btn--text.working {
    visibility: hidden;
  }
  .k-btn-spinner {
    position: absolute;
    top: calc(50% - 16px);
    left: calc(50% - 16px);
  }
}
.k-btn.outline {
  border: 2px solid;
  box-shadow: none;
  img {
    margin-bottom: 2px;
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
    margin-left: 8px;
    margin-right: 8px;
    vertical-align: middle;
  }
}
.k-btn.disabled {
  background-color: rgba(0,0,0,0.12) !important; // #e0e0e0
  color: rgba(0,0,0,0.26) !important; // #a6a6a6
  box-shadow: none;
}

.spinner-overlay {
  position: absolute;
  /* opacity: 0; */
}
.spinner-overlay.working {
  /* opacity: 1; */
}

.k-btn--text.working {
  /* opacity: 0; */
}
</style>
<template>
  <div
    class="k-btn"
    @click="click"
    :class="{ 'block': block, 'icon': icon, 'outline': outline, 'disabled': disabled }"
    :style="buttonStyle"
  >
    <!--class="spinner-overlay" :class="{ 'working': working }"-->
    <div style="position: relative;">
      <span class="k-btn--text" :class="{ 'working': showSpinner }">
        <slot></slot>
      </span>
      <v-progress-circular v-if="showSpinner" class="k-btn-spinner" indeterminate></v-progress-circular>
    </div>
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
    darkText: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    working: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default: '',
    },
    autoSpin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      autoSpinWorking: false,
    };
  },
  methods: {
    click() {
      if (this.disabled) {
        return;
      }
      if (this.autoSpin) {
        this.autoSpinWorking = true;
        setTimeout(() => {
          if (this && this.autoSpinWorking) {
            this.autoSpinWorking = false; // turn off just in case component does not re-render
          }
        }, 250);
      }
      if (this.to) {
        this.$router.push(this.to);
      }
      this.$emit('click');
    },
  },
  computed: {
    showSpinner() {
      return this.working || this.autoSpinWorking;
    },
    buttonStyle() {
      return {
        background: this.outline ? 'transparent' : this.color,
        color: this.darkText ? '#333' : '#fff',
        'border-color': this.outline ? this.color : 'none',
      };
    },
  },
};
</script>
