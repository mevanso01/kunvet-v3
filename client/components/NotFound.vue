<template>
  <v-container class="page-not-found">
    <div class="main-cont-small">
      <h1>{{message}}</h1>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  activated() {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.getElementsByTagName('head')[0].appendChild(meta);
  },
};
</script>

<style lang="scss">
.main-cont-small {
  text-align: center;
}
</style>
