<style>

</style>
<template>
  <v-container fluid>
    <div class="main-cont-large" style="background: none">
      <v-layout>
        <v-flex xs12>
          <h3><span class="kunvet-red">{{ counter }}</span> Saved Jobs</h3>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 class="no-padding">
          <div class="post-card" v-for="(job, index) in findJobs" :key="index" xs12>
              <v-layout align-center row spacer slot="header">
                <v-flex xs8>
                  <v-avatar size="36px" slot="activator" style="float: left; margin-right: 10px;">
                    <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
                  </v-avatar>
                  <div style="color: #A7A7A7; width: calc(100% - 46px); padding-top: 7px;">A certain inc</div>
                </v-flex>
                <v-flex xs4>
                <div class="float-right">
                  <v-avatar size="36px" slot="activator">
                    <v-icon class="whatshot">whatshot</v-icon>
                  </v-avatar>
                  <v-avatar size="36px" slot="activator" @click="saveJob(job._id)">
                    <v-icon class="bookmark-icon" v-bind:class="{ saved: saved_jobs.indexOf(job._id) !== -1 }">bookmark_border</v-icon>
                  </v-avatar>
                </div>
                </v-flex>
              </v-layout>
            <router-link :to="'JobDetail/'+job._id">
              <v-flex xs12 style="padding-top: 0px;">
                <div><p style="font-size: 150%;">{{ job.title }}</p></div>
                <!--<div class="carditem" style="color: #A7A7A7;"><timeago since="February 14, 2005"></timeago></div>-->
                <div class="carditem" style="color: #A7A7A7; text-decoration: underline;"><v-icon style="color: #A7A7A7; padding-right: 10px;">location_city</v-icon> {{ job.address }}</div>
                <div class="carditem"><v-icon style="font-size: 17px; padding-right: 10px;">sms</v-icon> Average review</div>
                <div class="carditem"><v-icon style="font-size: 17px; padding-right: 10px;">info</v-icon> Part time / Full time ~Internship ~ 10.50 per hour</div>
                <div class="carditem"><v-icon style="font-size: 17px; padding-right: 10px;">account_circle</v-icon> Not student friendly ~ experience required</div>

                <div class="image-row">
                  <!-- insert gallary here -->
                  <img style="max-width: 100%;" src="https://pbs.twimg.com/profile_images/575042635171172352/kP-VewoF_400x400.png"></img>
                </div>
              </v-flex>
            </router-link>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import VuexLS from '@/store/persist';

  const FindJobQuery = gql`query ($id: MongoID) {
    findJob (filter: { _id: $id }) {
        _id
        title
        description
        type
        address
    }
  }`;

  export default {
    data() {
      return {
        findJobs: [],
        saved_jobs: [],
        uid: null,
        counter: 0,
      };
    },
    methods: {
      getSavedJobs() {
        this.$apollo.query({
          query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
                saved_jobs
            }
          }`),
          variables: {
            uid: this.uid,
          },
        }).then((data) => {
          const res = data.data.findAccount;
          if (res.saved_jobs) {
            const x = this.saved_jobs.concat(res.saved_jobs);
            this.saved_jobs = x;
          }
          for (var job in this.saved_jobs) {
            if (job) {
              this.$apollo.query({
                query: FindJobQuery,
                variables: { job },
              }).then((d) => {
                this.counter += 1;
                this.findJobs.push(d.data.findJob);
              });
            }
          }
        }).catch((error) => {
          console.error(error);
        });
      },
    },
    created() {
      if (this.$store.state.userID) {
        this.uid = this.$store.state.userID;
        this.getSavedJobs();
      } else {
        VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
          if (data.userID) {
            this.uid = data.userID;
            this.getSavedJobs();
          }
        });
      }
    },
  };
</script>
