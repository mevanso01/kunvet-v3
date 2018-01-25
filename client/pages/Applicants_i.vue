<template>
  <v-container fluid>
    <!--<div>
      <h2>All Applicants</h2> 
    </div>-->
    <div class="main-cont-large">
      <pdf
            v-for="i in numPages"
            :key="i"
            :src="src"
            :page="i"
      ></pdf>
    </div>
  </v-container>
</template>
<script>
  import pdf from 'vue-pdf';

  const loadingTask = pdf.createLoadingTask('../../server/uploads/5a4081c6aafda36afb0bc423-1514266624436.pdf');

  export default {
    components: {
      pdf,
    },
    data() {
      return {
        src: loadingTask,
        numPages: undefined,
      };
    },
    methods: {
      loaded() {
        // alert('loaded');
      },
    },
    mounted() {
      this.src.then(_pdf => {
        this.numPages = _pdf.numPages;
      });
    },
  };
</script>
