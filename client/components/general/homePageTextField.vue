<style lang="scss">
.home-text-field {
  // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  //box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  //border-radius: 3px;
  height: 64px;
  background-color: #e6e6e6;
  text-transform: uppercase;
  .v-input__slot,
  .v-text-field__details {
    margin-bottom: 8px;
    padding: 2px 20px 0px !important;
  }
  .v-input__slot,
  .v-input__slot:hover {
    border: none !important;
  }
  .v-input__slot{
    margin-top: 0px;
  }
  .v-input__append-inner > .v-input__icon.v-input__icon--append > .error--text{
    color: #ff6969 !important;
  }
  .v-input__append-inner > .v-input__icon.v-input__icon--append > .primary--text{
    color: #808080 !important;
  }
  .v-input__append-inner > .v-input__icon.v-input__icon--append{
    color: #c0c0c0 !important;
  }

  .v-label{
    font-size: 16px;
    color: #808080 !important;
    font-weight: 300;
    line-height: 120%;
    letter-spacing: 0.12em;
  }
  .v-label--active {
    transform: translateY(-10px) scale(0.75);
    color: #808080 !important;
    font-weight: 300;
    line-height: 120%;
    letter-spacing: 0.12em;
  }
  input {
    margin-top: 24px;
    height: 34px;
    max-height: 34px;
    margin-bottom: 6px;
    padding: 0;
    caret-color: #3c3c3c;
  }
}
.home-text-field.has-label {
  input {
    margin-top: 18px;
  }
}
.home-text-field.v-text-field.v-text-field--enclosed {
  //margin-top: 8px;
  //margin-bottom: 16px;
  .v-messages.error--text{
    color: #ff6969 !important;
    letter-spacing: 0.12em;
  }
}
.home-text-field.v-text-field.v-text-field--enclosed.error--text {
  margin-bottom: 26px;
  background-color: #ffe2e2;
  color: #808080 !important;
  caret-color: #3c3c3c !important;
}

</style>
<template>
  <v-text-field
    class="home-text-field"
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
    :disabled="disabled"
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
  name: 'home-text-field',
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
      default: true,
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
    disabled: {
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
  //border-radius: 4px;
  outline: none;
  //border: 1px solid transparent;
  //box-shadow: 0 1px 16px -5px rgba(59, 51, 59, 1);
}
.input:focus {
  border: 1px solid #999;
}
.invalid {
  box-shadow: 0 1px 16px -5px rgba(255, 0, 0, 1);
}
</style>
