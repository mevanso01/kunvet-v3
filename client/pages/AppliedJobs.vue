<style>

</style>
<template>
  <v-container fluid>
    <div class="main-cont-large">
    <v-layout>

      <v-flex xs12 style="" class="no-padding">
        <h1>
          <span class="kunvet-red">
            {{ applications.length }}
          </span> <span style="color: grey;">Applied Jobs</span>
        </h1>
        <div style="max-height: 68vh; overflow: auto;">
          <div class="post-card">
              <a href="/JobDetail/59be0c0f3077d224476ba3cd" class="">
                <div><h1 style="font-weight: normal;">hi</h1></div>
                <p class="post-address">123 sesame street</p>
                <p class="post-intro">desc</p> <div class="image-row">
                <img src="https://pbs.twimg.com/profile_images/575042635171172352/kP-VewoF_400x400.png" style="max-width: 100%;"></div>
              </a>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import VuexLS from '@/store/persist';

  export default {
    data() {
      return {
        settingsoption1: '',
        addorg: false,
        applications: [],
        jobs: [],
      };
    },
    methods: {
      async getData() {
        const { data: { findApplicants: applications } } = await this.$apollo.query({
          query: (gql`query ($user_id: MongoID) {
            findApplicants (filter: {
              user_id: $user_id
            }) {
                _id
                job_id
                status
                date
            }
          }`),
          variables: {
            user_id: this.$store.state.userID,
          },
        });
        this.applications = applications;
        this.jobs = applications.map(this.getJobForEachApplication);
      },
      async getJobForEachApplication({ job_id: jobId }) {
        const { data: { findJobs: job } } = await this.$apollo.query({
          query: (gql`query ($jobId: MongoID) {
            findJobs (filter: { _id: $jobId, active: true }){
              _id
              user_id
              posted_by
              title
              address
              date
            }
          }`),
          variables: {
            jobId,
          },
        });
        return job;
      },
    },
    created() {
      if (!this.$store.state.acct) {
        console.log('restore state');
        VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
          if (data.bdata && data.acct === 2) {
            this.user = data.bdata.business_name;
            this.getData();
          } else if (data.userdata && data.acct === 1) {
            this.user = `${data.userdata.firstname} ${data.userdata.lastname}`;
            this.getData();
          } else {
            this.$router.push('/login');
          }
        });
      } else if (this.$store.state.acct === 2) {
        this.user = this.$store.state.bdata.business_name;
        this.getData();
      } else if (this.$store.state.acct === 1) {
        this.user = this.$store.state.userdata.firstname + this.$store.state.userdata.lastname;
        this.getData();
      } else {
        this.$router.push('/login');
      }
    },
  };
</script>
