<template>
  <div>
    <vue-editor
      :placeholder="placeholder"
      :editorToolbar="editorToolbar"
      :editorOptions="editorOptions"
      :value="computedValue"
      @input="input"
    ></vue-editor>
    <div v-if="charLimit" :class="{ 'red--text': charCount > charLimit }">
      {{ charCount }} / {{ charLimit }}
    </div>
    <div v-if="wordLimit" :class="{ 'red--text': wordCount > wordLimit }">
      {{ wordCount }} / {{ wordLimit }}
    </div>
  </div>
</template>
<script>
import { VueEditor, Quill } from 'vue2-editor';

Quill.register('modules/wordLimit', (quill, options) => {
  // Options!
  // wordLimit: int
  // charLimit: int
  quill.on('text-change', () => {
    let validated = true;
    const trimmedText = quill.getText().replace(/[ \r\n]$/, '');

    if (options.required) {
      validated = validated && trimmedText.length;
    }
    if (options.wordLimit) {
      const wordCount = trimmedText ? trimmedText.split(/\s+/).length : 0;
      validated = validated && wordCount <= options.wordLimit;
      options.vueInstance.setWordCount(wordCount);
    }
    if (options.charLimit) {
      validated = validated && trimmedText.length <= options.charLimit;
      options.vueInstance.setCharCount(trimmedText.length);
    }

    options.vueInstance.setValidated(validated);
  });
});

export default {
  props: {
    placeholder: String,
    wordLimit: Number,
    charLimit: Number,
    value: String,
    required: Boolean,
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
      content: '',
      wordCount: 0,
      charCount: 0,
      validated: false,
    };
  },
  computed: {
    computedValue() {
      const value = this.value ? `${this.value}` : '';
      if (this.required && !value.length) {
        this.validated = false;
        this.$emit('validate', false);
      }
      return value;
    },
    editorOptions() {
      return {
        modules: {
          wordLimit: {
            wordLimit: this.wordLimit,
            charLimit: this.charLimit,
            required: this.required,
            vueInstance: this,
          },
        },
      };
    },
  },
  methods: {
    input(v) {
      this.$emit('input', v);
    },
    setWordCount(wordCount) {
      this.wordCount = wordCount;
    },
    setCharCount(charCount) {
      this.charCount = charCount;
    },
    setValidated(validated) {
      if (validated !== this.validated) {
        this.validated = validated;
        this.$emit('validate', validated);
      }
    },
  },
};
</script>
