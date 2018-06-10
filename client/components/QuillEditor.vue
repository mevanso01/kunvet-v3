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
    const trimmedText = quill.getText().replace(/[ \r\n]$/, '');

    if (options.wordLimit) {
      const wordCount = trimmedText.split(/\s+/).length;
      if (wordCount > options.wordLimit) {
        // TODO: Do something
      }
      options.vueInstance.setWordCount(wordCount);
    }
    if (options.charLimit) {
      if (trimmedText.length > options.charLimit) {
        // quill.deleteText(options.charLimit, quill.getLength());
      }
      options.vueInstance.setCharCount(trimmedText.length);
    }
  });
});

export default {
  props: ['placeholder', 'wordLimit', 'charLimit', 'value'],
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
    };
  },
  computed: {
    computedValue() {
      if (!this.value) {
        return '';
      }
      return `${this.value}`;
    },
    editorOptions() {
      return {
        modules: {
          wordLimit: {
            wordLimit: this.wordLimit,
            charLimit: this.charLimit,
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
  },
};
</script>
