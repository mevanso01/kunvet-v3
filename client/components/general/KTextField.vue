<style lang="scss">
.k-text-field {
  // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  height: 56px;
  .v-input__slot,
  .v-text-field__details {
    padding: 0 16px !important;
  }
  .v-input__slot,
  .v-input__slot:hover {
    border: none !important;
  }
  .v-label--active {
    transform: translateY(-12px) scale(0.75);
  }
  input {
    margin-top: 12px;
  }
}
.k-text-field.has-label {
  input {
    margin-top: 18px;
  }
}
.k-text-field.v-text-field.v-text-field--enclosed {
  margin-top: 8px;
  margin-bottom: 16px;
}
.k-text-field.v-text-field.v-text-field--enclosed.error--text {
  margin-bottom: 28px;
}
</style>
<template>
  <v-text-field
    class="k-text-field"
    :class="{ 'has-label': Boolean(label) }"
    :label="label"
    outline
    :clearable="clearable"
    :value="value"
    :placeholder="placeholder"
    @input="updateInput"
    @change="emitChange"
    :rules="rules"
    :required="required"
    ref="input"
    :append-icon="appendIcon"
    :append-icon-cb="() => (vis = !vis)"
    :type="isVisible ? 'text' : 'password'"
    :readonly="readonly"
  ></v-text-field>
  <!-- <input
    :class="{ input: 1, invalid: invalid }"
    ref="input"
    @input="updateInput"
    @blur="updateInput"
    :type="type" :value="value"
    :placeholder="placeholder"
  > -->
</template>
<script>
export default {
  name: 'k-text-field',
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default() {
        return [
          (value, required = false) => (required ? !!value : true),
        ];
      },
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    toggleVisibility: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mounted: false,
      vis: false,
      invalid: false,
      reason: '',
    };
  },
  mounted() {
    this.mounted = true;
    // register with <v-form>
    if (this.$parent.$options.name === 'v-form') {
      this.$parent.register(this.$refs.input);
    }
  },
  computed: {
    hasRules() {
      return this.rules && this.rules.length > 0;
    },
    appendIcon() {
      if (!this.toggleVisibility) {
        return '';
      }
      return this.vis ? 'visibility' : 'visibility_off';
    },
    isVisible() {
      return !this.toggleVisibility || this.vis;
    },
  },
  methods: {
    updateInput(v) {
      // this.value = this.$refs.input.value;
      // e.preventDefault();
      this.$emit('input', v);
      // this.$refs.input.validate();
      // this.validate();
    },
    emitChange() {
      this.$emit('change');
    },
    validate() {
      // this.invalid = false;
      // if (this.required && !this.value) {
      //   this.invalid = true;
      //   this.reason = 'Required';
      //   return false;
      // }
      // for (const rule of this.rules) {
      //   const result = rule(this.$refs.input.value, this.required);
      //   // const result = rule(this.value, this.required);
      //   if (!result || typeof result === 'string') {
      //     this.invalid2 = true;
      //     this.reason = typeof result === 'string' ? result : 'Invalid';
      //     break;
      //   }
      // }
      // return !this.invalid;
    },
  },
};
</script>
<style lang="scss" scoped>
.input {
  padding-left: 16px;
  height: 48px;
  width: 100%;
  margin: 5px 0;
  border-radius: 4px;
  outline: none;
  border: 1px solid transparent;
  box-shadow: 0 1px 16px -5px rgba(59, 51, 59, 1);
}
.input:focus {
  border: 1px solid #999;
}
.invalid {
  box-shadow: 0 1px 16px -5px rgba(255, 0, 0, 1);
}
</style>
