<template>
  <v-app>
    <v-toolbar fixed class="indigo darken-3" light>
      <v-toolbar-title class="white--text">Kunvet</v-toolbar-title>
    </v-toolbar>
    <main>
      <transition name="slide-y-transition">
        <router-view></router-view>
      </transition>
    </main>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css';

export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
body, html {
  height: 100%;
  width: 100%;
}
</style>
