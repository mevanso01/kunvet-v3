<style>
</style>
<template>
<span>
Jobs: <span class="kunvet-red">{{ counters.jobs.unfinished }}</span> unfinished &bull; <span class="kunvet-red">{{ counters.jobs.active }}</span> active &bull; <span class="kunvet-red">{{ counters.jobs.expired }}</span> expired<br />
Applications: <span class="kunvet-red">{{ counters.applications.unread }}</span> unread &bull; <span class="kunvet-red">{{ counters.applications.applied }}</span> applied &bull; <span class="kunvet-red">{{ counters.applications.expired }}</span> about to expire 
</span>
</template>
<script>
export default {
  props: ['counters'],
};
</script>