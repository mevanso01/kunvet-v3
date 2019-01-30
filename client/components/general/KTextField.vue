<style lang="scss">
.k-text-field {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  height: 56px;
  .v-input__slot {
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
  margin-bottom: 8px;
}
</style>
<template>
  <v-text-field
    class="k-text-field"
    :class="{ 'has-label': Boolean(label) }"
    :label="label"
    outline
    :clearable="clearable"
    :type="type" :value="value"
    :placeholder="placeholder"
    :rules="rules"
  ></v-text-field>
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
  computed: {
    hasRules() {
      return this.rules && this.rules.length > 0;
    },
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
