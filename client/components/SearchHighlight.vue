<template>
  <ais-highlight :result="result" :attribute-name="attribute" v-if="result._highlightResult"/>
  <span v-else>{{ result[attribute] }}</span>
</template>
<script>
export default {
  name: 'highlight',
  props: ['result', 'attribute'],
};
</script>
<style lang='scss'>
.ais-highlight em {
  background: yellow;
  font-style: normal;
}
</style>
