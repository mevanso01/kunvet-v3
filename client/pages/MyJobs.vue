<style>
  .myjobs-container ul {
    border: 1px solid rgba(0,0,0,.12);
    padding: 0;
  }
  .myjobs-container .no-jobs-tile .list__tile,
  .myjobs-container .no-jobs-tile .list__tile__content {
    height: 54px;
  }
</style>
<template>
  <v-container fluid class="white-bg myjobs-container">
    <div class="main-cont-large">
    <v-layout>


      <v-flex xs12 md8 offset-md2>
        <v-card flat>
        <v-list two-line subheader v-if="unposted_jobs.length > 0">
          <v-subheader><h3>Unposted jobs</h3></v-subheader>
          <template v-for="(job, index) in unposted_jobs" v-if="!job.active">
            <v-list-tile :key="index">
              <v-list-tile-content>
                <v-list-tile-title>{{ job.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ job.date }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn flat style="color: green" @click="editJob(job._id)">Continue editing</v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn flat error>Delete</v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < unposted_jobs.length" :key="job._id"></v-divider>
          </template>
        </v-list>
        <br>
        <v-list two-line subheader>
          <v-subheader><h3>Active jobs</h3></v-subheader>
          <template v-for="(job, index) in active_jobs" v-if="job.active">
            <v-list-tile :key="index">
              <v-list-tile-content>
                <v-list-tile-title>{{ job.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ job.date }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn flat>View</v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn flat>Edit</v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < active_jobs.length" :key="job._id"></v-divider>
          </template>
          <v-list-tile v-if="active_jobs.length == 0" class="no-jobs-tile">
            <v-list-tile-content>
              <v-list-tile-title>You have no active jobs</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        </v-card>
      </v-flex>

    </v-layout>
    </div>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import VuexLS from '@/store/persist';

  export default {
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
    data() {
      return {
        tab: 0,
        user: null,
        unposted_jobs: [],
        active_jobs: [],
        expired_jobs: [],
      };
    },
    methods: {
      editJob(id) {
        this.$router.push({ path: `/createnewjob/${id}` });
      },
      getData() {
        this.$apollo.query({
          query: (gql`query ($user: String) {
            findJobs (filter: { posted_by: $user }){
              _id
              posted_by
              title
              active
              date
            }
          }`),
          variables: {
            user: this.user,
          },
        }).then((data) => {
          const jobs = data.data.findJobs;
          for (var i in jobs) {
            if (jobs[i].active) {
              this.active_jobs.push(jobs[i]);
            } else if (!jobs[i].active) {
              this.unposted_jobs.push(jobs[i]);
            }
          }
        });
      },
    },
  };
</script>
