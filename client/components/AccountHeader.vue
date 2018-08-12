<style>
</style>
<template>
  <div class="acct-header">
    <img class="acct-icon" :src="svg">
    <h3 class="acct-h3">
      {{ text }}
    </h3>
  </div>
</template>
<script>
export default {
  props: ['svg', 'text'],
};
</script>