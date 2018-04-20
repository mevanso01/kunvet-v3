<template>
  <div>
    <div v-for="n in pages">
      <canvas :id="prefix + '-page-' + n" class="page">
      </canvas>
    </div>
  </div>
</template>
<script>
import PdfJs from 'pdfjs-dist';
import uuidv1 from 'uuid/v1';
import mutexify from 'mutexify';
import debounce from 'lodash/debounce';

export default {
  props: ['href'],
  data() {
    return {
      prefix: 'pdf',
      pdf: null,
      pages: 0,
      containerWidth: 0,
      renderLock: mutexify(),
      debouncedResize: debounce(this.onResize, 500),
    };
  },
  created() {
    this.prefix = uuidv1();
    window.addEventListener('resize', this.debouncedResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.debouncedResize);
  },
  mounted() {
    if (this.href) {
      this.onResize();
      this.initialLoad();
    }
  },
  watch: {
    href() {
      this.pages = 0;
      this.initialLoad();
    },
  },
  methods: {
    onResize() {
      this.containerWidth = this.$el.clientWidth;
      this.render();
    },
    async initialLoad() {
      await this.load();
      this.render();
    },
    async load() {
      try {
        this.pdf = await PdfJs.getDocument(this.href);
      } catch (e) {
        this.$emit('failed', e);
        throw e;
      }
      this.pages = this.pdf.numPages;
      this.$emit('loaded', this.pdf);
    },
    render() {
      this.renderLock(async (release) => {
        for (let i = 1; i <= this.pages; ++i) {
          const pageId = `${this.prefix}-page-${i}`;
          const pageCanvas = document.getElementById(pageId);
          await this.renderPage(i, pageCanvas);
        }
        release();
      });
    },
    async renderPage(n, canvas) {
      const context = canvas.getContext('2d');

      if (!this.pdf) {
        context.fillText(0, 0, 'Loading');
        return;
      }

      const page = await this.pdf.getPage(n);
      const pageWidth = page.pageInfo.view[2];
      const scale = this.containerWidth / pageWidth;
      const viewport = page.getViewport(scale);

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  pointer-events: none;
}
</style>
