<template>
  <v-layout align-center row style="padding-bottom: 10px;">
    <v-flex xs12 md6>
      <img style="max-width: 80%;" :src="image"></img>
    </v-flex>
    <v-flex xs12 md6>
      <slot></slot>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['image'],
  data() {
    return {
    };
  },
};
</script>
