<style>
</style>
<template>
  <div class="acct-counters">
    <router-link to="/myjobs"><p style="margin-bottom: 2px;">
      <strong>Jobs:</strong> <span class="kunvet-red">{{ counters.jobs.unfinished }}</span> unfinished &bull; <span class="kunvet-red">{{ counters.jobs.active }}</span> active &bull; <span class="kunvet-red">{{ counters.jobs.expired }}</span> expired
    </p></router-link>
    <router-link to="/applicants"><p style="margin-bottom: 0;">
      <strong>Applicants:</strong> <span class="kunvet-red">{{ counters.applications.unread }}</span> unread &bull; <span class="kunvet-red">{{ counters.applications.applied }}</span> applied &bull; <span class="kunvet-red">{{ counters.applications.expired }}</span> about to expire
    </p></router-link>
  </div>
</template>
<script>
export default {
  props: ['counters'],
};
</script>
