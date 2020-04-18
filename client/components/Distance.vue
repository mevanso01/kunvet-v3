<template>
  <span>{{ distance }} miles away from you</span>
</template>

<script>
import DistanceHelper from '@/utils/DistanceHelper';

export default {
  name: 'Distance',
  props: ['first', 'second'],
  computed: {
    distance() {
      return DistanceHelper.computeDistance(this.first, this.second);
    },
  },
};
</script>
