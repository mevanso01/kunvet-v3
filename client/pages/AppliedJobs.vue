<style>

</style>
<template>
  <v-container fluid>
    <div class="main-cont-large">
      <h1>
        <span class="kunvet-red">
          {{ applications.length }}
        </span> <span style="color: grey;">Applied Jobs</span>
      </h1>
      <v-layout row wrap>
        <div class="post-card" v-for="job in jobs" :key="index">
            <v-layout align-center row spacer slot="header">
              <v-flex xs8>
                <v-avatar size="36px" slot="activator" style="float: left; margin-right: 10px;">
                  <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
                </v-avatar>
                <!--<div style="color: #A7A7A7; width: calc(100% - 46px); padding-top: 7px;">{{ job.posted_by }}</div>-->
                <div style="color: #A7A7A7; line-height: 36px;">{{ job.posted_by }}</div>
              </v-flex>
              <v-flex xs4>

              <div class="float-right">
                <v-avatar size="36px" slot="activator">
                  <v-icon class="whatshot">whatshot</v-icon>
                </v-avatar>
              </div>
              </v-flex>
            </v-layout>

          <router-link :to="'JobDetail/'+job._id">
            <v-layout>
              <v-flex xs12 style="padding-top: 0px;">
                <div><h3 class="post-title">{{ job.title }}</h3></div>
                <div class="carditem" style="color: #A7A7A7;"><timeago :since="job.date"></timeago></div>
                <div class="carditem" style="color: #A7A7A7; text-decoration: underline;">
                  <p><v-icon style="color: #A7A7A7;">location_city</v-icon>{{ job.address }}</p>
                </div>
                <div class="carditem">
                  <p><v-icon>info</v-icon></p>
                </div>
                <div class="carditem">
                  <p><span class="carditem-image"><img /></span>{{ job.studentfriendly ? '' : 'Not ' }}Student Friendly</p>
                </div>

                <div class="image-row">
                  <!-- insert gallary here -->
                  <img style="max-width: 100%;" src="https://pbs.twimg.com/profile_images/575042635171172352/kP-VewoF_400x400.png"></img>
                </div>
              </v-flex>
            </v-layout>
          </router-link>
        </div>
      </v-layout>

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
              studentfriendly
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
