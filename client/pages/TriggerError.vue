<template>
  <p>
    An error will be thrown.
  </p>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    setTimeout(() => {
      throw Error('Error triggered');
    }, 1000);
  },
};
</script>
