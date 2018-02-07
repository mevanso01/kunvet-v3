<style>
  .applicant-page .job-title {
      z-index: 1;
  }
  .applicant-card {
    height: 160px;
    color: #5D5D5D;
  }
  .applicant-card > .inner {
    padding: 10px;
    background-color: #f2f2f2;
  }
  .applicant-card h2,
  .applicant-card p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .applicant-card h2 {
    margin-bottom: 10px;
    color: #5D5D5D;
    font-weight: normal;
  }
  .applicant-card p {
    margin-bottom: 6px;
  }
  .applicant-card i {
    color: rgb(63, 169, 245);
    margin-right: 5px;
    margin-left: 5px;
    width: 18px;
    font-size: 13px;
  }
  .applicant-card .button-holder {
    border-top: 1px solid rgb(214, 214, 214);
    background-color: #f2f2f2;
    padding: 3px 5px 4px 5px;
    height: 30px;
  }
  .applicant-page .button-holder a {
    padding: 0 5px;
    cursor: pointer;
    display: block;
    float: right;
  }
  @media (min-width: 601px) {
    .applicant-card {
      width: calc(50% - 15px);
      margin: 10px 0 0px 10px;
      float: left;
    }
    .applicant-card:nth-last-child(1) {
      margin-bottom: 10px;
    }
    .applicant-page .job-title {
      padding-left: 10px;
    }
  }
  @media (max-width: 600px) {
    .applicant-card {
      margin: 10px;
    }
  }
</style>
<template>
  <v-container fluid class="applicant-page">
    <div class="main-cont-large">
      <v-layout>
        <v-flex xs-0 md2 dark class="no-padding">
         <!--<v-card width="100%" height="100%">-->
        <v-navigation-drawer permanent dark style="position: relative; width: 100%; z-index: 1;">
          <v-list dense style="padding-top: 64px;">
            <v-list-tile v-for="item in jobs" :key="item.title" @click="">
              <v-list-tile-content @click="selectedJob = item">
                <v-list-tile-title class="center">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
                 <!--</v-card>-->
        </v-flex>

        <v-flex xs9 md10 style="" class="no-padding">
          <v-toolbar card class="job-title">
           <v-toolbar-title>{{ selectedJob.title }}</v-toolbar-title>
          </v-toolbar>

          <div style="max-height: 68vh; overflow: auto;">
            <div v-for="item in applicants[selectedJob.id]" class="applicant-card">
              <div class="inner">
                  <router-link :to="'view-applicant/'+item._id">
                    <h2>{{ item.name }}</h2>
                    <p><i class="fa fa-graduation-cap" aria-hidden="true"></i>{{ item.school }}</p>
                    <p style="margin-left: 28px;" class="post-intro">{{ item.notes }}</p>
                  </router-link>
              </div>
              <div class="button-holder">
                <a class="reject" @click="">Reject</a>
                <a class="accept" @click="">Accept</a>
              </div>
            </div>
          </div>

          <h3 v-if="!loading && applicants[selectedJob.id].length == 0" style="color: #b0b0b0; text-align: center; margin-top: 48px;">
            No applicants for this job, yet!
          </h3>
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
        loading: true,
        user: null,
        jobs: [],
        selectedJob: { title: null, id: null },
        applicants: {},
        job_titles: [],
        fakedata: [
          { name: 'Guillaume Rocheteau', school: 'University of California, Irvine' },
          { name: 'Peter the Anteater', school: 'idk UCLA probably' },
          { name: 'Bill Kunvet', school: 'Paul Merage School of Business' },
        ],
        settingsoption1: '',
        addorg: false,
      };
    },
    methods: {
      getData() {
        console.log('GETTING DATA for', this.user);
        this.$apollo.query({
          query: (gql`query ($user: String) {
            findJobs (filter: { posted_by: $user, active: true }){
              _id
              posted_by
              title
            }
          }`),
          variables: {
            user: this.user,
          },
        }).then((data) => {
          const jobs = data.data.findJobs;
          // console.log(this.jobs);
          if (jobs[0]._id) {
            this.selectedJob = { title: jobs[0].title, id: jobs[0]._id };
          }
          for (var i in jobs) {
            if (jobs[i]._id) {
              var jobId = jobs[i]._id;
              this.addApplicants(jobId);
              this.jobs.push({ title: jobs[i].title, id: jobId });
            }
          }
        });
      },
      addApplicants(jobId) {
        this.applicants[jobId] = null;
        this.$apollo.query({
          query: (gql`query ($JobId: String) {
            findApplicants (filter: {
              job_id: $JobId
            }) {
                _id
                name
                school
                degree
                notes
                job_id
            }
          }`),
          variables: {
            JobId: jobId,
          },
        }).then((d) => {
          // add to array
          var applicants = d.data.findApplicants;
          this.applicants[jobId] = applicants;
          this.loading = false;
          console.log(this.applicants);
        });
      },
    },
  };
</script>
