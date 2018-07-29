<style>
  .quill-editor {
    padding-top: 21px;
    padding-bottom: 21px;
  }
  .quill-editor .ql-editor span,
  .quill-editor .ql-editor p,
  .quill-editor .ql-editor li {
    color: #333;
  }
  .quill-editor .error-text {
    color: red !important;
  }
</style>
<template>
  <div class="quill-editor">
    <h3 v-if="title" style="margin-top: 0;" :class="{ 'error-text': hasError }">{{ title }}</h3>
    <vue-editor
      ref="editor"
      :id="id"
      :editorOptions="editorOptions"
      :editorToolbar="editorToolbar"
      :value="computedValue"
      @input="input"
      @blur="blur"
    ></vue-editor>
    <div class="error-text" style="float: left;" v-if="errorMsgs[0]">{{ errorMsgs[0] }}</div>
    <div v-if="charLimit" style="float: right;" :class="{ 'error-text': charCount > charLimit }">
      {{ charCount }} / {{ charLimit }}
    </div>
    <div v-if="wordLimit" style="float: right;" :class="{ 'error-text': wordCount > wordLimit }">
      {{ wordCount }} / {{ wordLimit }}
    </div>
  </div>
</template>
<script>
/* eslint no-unused-vars: 0 */
import { VueEditor, Quill } from 'vue2-editor';
import VTextField from 'vuetify/src/components/VTextField';

Quill.register('modules/wordLimit', (quill) => {
  // quill.on('text-change', () => {
  // });
});

export default {
  name: 'quill-editor',
  extends: VTextField,
  props: {
    value: String,
    placeholder: String,
    title: String,
    charLimit: Number,
    wordLimit: Number,
    required: { type: Boolean, default: false },
    id: String, // id is required if you have multiple editors on one page!
  },
  components: {
    VueEditor,
  },
  data() {
    return {
      editorToolbar: [
        ['bold', 'italic', 'underline'], // toggled buttons
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['clean'],
      ],
      wordCount: 0,
      charCount: 0,
      valid: false,
      errorMsgs: [],
      touched: false,
    };
  },
  computed: {
    editorOptions() {
      return {
        modules: {
          wordLimit: {
            wordLimit: this.wordLimit,
            charLimit: this.charLimit,
            required: this.required,
          },
        },
      };
    },
    computedValue() {
      const value = this.value ? this.value : '';
      return value;
    },
    hasError() {
      return this.errorMsgs.length > 0;
    },
  },
  methods: {
    genInput() {
      return this.$createElement('input', {
        staticClass: 'quill-editor',
      });
    },
    input(v) {
      this.touched = true;
      this.validate();
      console.log('emitting', v);
      this.$emit('input', v);
    },
    setWordCount(wordCount) {
      this.wordCount = wordCount;
    },
    setCharCount(charCount) {
      this.charCount = charCount;
    },
    // overrides VTextField validate function
    validate(force = false, value = this.$refs.editor.editor.innerText) {
      let validated = true;
      this.errorMsgs = [];
      if (!force && !this.touched) {
        return true; // validate only after touch
      }
      const trimmedText = value ? value.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ' ') : '';
      const options = {
        required: this.required,
        wordLimit: this.wordLimit,
        charLimit: this.charLimit,
      };
      console.log(this.computedValue, this.computedValue.length);
      if (options.required) {
        if (validated && trimmedText.length === 0) {
          validated = false;
          this.errorMsgs.push('Required');
        }
      }
      if (options.wordLimit) {
        const wordCount = trimmedText ? trimmedText.split(/\s+/).length : 0;
        this.wordCount = wordCount;
        if (validated && wordCount > options.wordLimit) {
          validated = false;
          this.errorMsgs.push('Text exceeds word limit');
        }
      }
      if (options.charLimit) {
        const charCount = trimmedText.length;
        this.charCount = charCount;
        if (validated && charCount > options.charLimit) {
          validated = false;
          this.errorMsgs.push('Text exceeds character limit');
        }
      }
      this.valid = validated;
      console.log(validated);
      return validated;
    },
  },
};
</script>
