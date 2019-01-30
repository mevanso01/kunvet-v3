<template>
  <div class="input-container">
    <input
      :class="{ input: 1, invalid: invalid }"
      ref="input"
      @input="updateInput"
      @blur="updateInput"
      :type="type" :value="value"
      :placeholder="placeholder"
    >
  </div>
</template>
<script>
export default {
  name: 'k-text-field-2',
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: Array,
      default() {
        return [
          (value, required = false) => (required ? !!value : true),
        ];
      },
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mounted: false,

      invalid: false,
      reason: '',

    };
  },
  mounted() {
    this.mounted = true;

    // register with <v-form>
    if (this.$parent.$options.name === 'v-form') {
      this.$parent.register(this);
    }
  },
  methods: {
    updateInput() {
      this.$emit('input', this.$refs.input.value);
      this.validate();
    },
    validate() {
      this.invalid = false;
      for (const rule of this.rules) {
        const result = rule(this.$refs.input.value, this.required);
        if (!result || typeof result === 'string') {
          this.invalid = true;
          this.reason = typeof result === 'string' ? result : 'Invalid';
          break;
        }
      }
      return !this.invalid;
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
