<template>
  <v-container style="background-color: #f8f8f8; max-width: unset;">
    <div class="notification-container">
      <Notifications :max="100"/>
    </div>
  </v-container>
</template>
<script>
import Notifications from '@/components/Notifications';

export default {
  data() {
    return {
    };
  },
  components: {
    Notifications,
  },
};
</script>
