<template>
  <div :id="prefix + '-pdfframe'" :style="frameStyle" class="frame">
    <div v-for="n in pages">
      <canvas :id="prefix + '-page-' + n" class="page">
      </canvas>
    </div>
    <transition name="slide-y-transition">
      <div class="more" v-if="clipped" @click="clipped = false">
        <span>View More</span>
      </div>
    </transition>
  </div>
</template>
<script>
import PdfJs from 'pdfjs-dist/webpack';
import uuidv1 from 'uuid/v1';
import mutexify from 'mutexify';
import debounce from 'lodash/debounce';

export default {
  props: ['href', 'clipResult'],
  data() {
    return {
      prefix: 'pdf',
      pdf: null,
      pages: 0,
      containerWidth: 0,
      pageLimit: 3,
      clipped: false,
      pageHeights: [],
      frameStyle: {},
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
    clipped() {
      this.updateClipping();
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
      const href = this.href;
      try {
        this.pdf = await PdfJs.getDocument(href);
      } catch (e) {
        this.$error(e);
        this.$emit('failed', e);
        throw e;
      }

      if (this.href !== href) {
        this.$debug('The URL changed while we were loading the PDF');
        return;
      }

      if (!document.getElementById(`${this.prefix}-pdfframe`)) {
        this.$debug('The frame is gone while we were loading the PDF');
        return;
      }

      this.pages = this.pdf.numPages;
      if (this.clipResult) {
        this.clipped = this.pages > this.pageLimit;
      } else {
        this.clipped = false;
      }
      this.$emit('loaded', this.pdf);
    },
    render() {
      window.setImmediate(() => {
        this.renderLock(async (release) => {
          this.pageHeights = [];

          for (let i = 1; i <= this.pages; ++i) {
            const pageId = `${this.prefix}-page-${i}`;
            const pageCanvas = document.getElementById(pageId);
            await this.renderPage(i, pageCanvas);
          }

          release();
        });
      });
    },
    async renderPage(n, canvas) {
      if (!canvas) {
        this.$debug('The canvas is gone. Giving up...');
        return;
      }

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

      this.pageHeights[n - 1] = viewport.height;
      this.updateClipping();

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    },
    updateClipping() {
      if (!this.clipped || !this.pageHeights.length) {
        this.frameStyle = {};
        return;
      }

      const height = this.pageHeights.slice(0, this.pageLimit).reduce(
        (a, c) => a + c,
      );

      this.frameStyle = {
        height: `${height}px`,
        'overflow-y': 'hidden',
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.frame {
  transition: height .2s;
}
.page {
  pointer-events: none;
}
.more {
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  font-size: 20px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, .80) 60%, rgba(255, 255, 255, 0));
  cursor: pointer;

  span {
    margin: 0 auto;
    align-self: flex-end;
  }
}
</style>
