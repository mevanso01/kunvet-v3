<template>
  <v-layout align-center row wrap style="padding: 10px 0;">
    <v-flex xs12 sm3 md2>
      <img class="first-search-img" :src="image"></img>
    </v-flex>
    <v-flex xs12 sm9 md10>
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
