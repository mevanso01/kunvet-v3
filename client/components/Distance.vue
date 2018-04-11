<style>
</style>
<template>
  <span>{{ distance }} miles away<span v-if="equalToUCICoordinates"> from UC Irvine</span></span>
</template>
<script>
import DistanceHelper from '@/utils/DistanceHelper';
import Coordinates from '@/constants/coordinates';

export default {
  props: ['first', 'second'],
  computed: {
    distance() {
      return DistanceHelper.computeDistance(this.first, this.second);
    },
    equalToUCICoordinates() {
      return (
        this.first.latitude === Coordinates.uci.latitude &&
        this.first.longitude === Coordinates.uci.longitude
      );
    },
  },
};
</script>
