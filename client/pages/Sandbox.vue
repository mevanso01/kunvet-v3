<style lang="scss" scoped>

</style>
<template>
  <v-carousel
    style="margin-top: 100px;"
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
       <v-card :color="colors[i]">
          <div class="display-3">{{ slide }} Slide</div>
       </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { VSheet, VRow } from 'vuetify';

export default {
  components: {
    VSheet,
    VRow,
  },
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    };
  },
};
</script>