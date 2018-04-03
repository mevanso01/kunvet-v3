<style>
</style>
<template>
  <v-container fluid class="job-post__container">
    <div class="main-cont-large">
      <v-layout>
        <v-flex xs12>
          <router-link v-if="jobsAndApplications.length === 0" to="/">
            <p style="text-decoration: none;">
              You have not yet applied for any jobs. Click me to go to the jobs dashboard.
            </p>
          </router-link>
          <h1 v-else="jobsAndApplications.length > 0" style="margin-bottom: 10px; color: #A7A7A7;">
            <span>
              <span class="kunvet-red">
                {{ jobsAndApplications.length }}
              </span> Applied {{ getAppliedJobsString }}
            </span>
          </h1>
        </v-flex>
      </v-layout>
      <v-layout row wrap style="padding-bottom: 32px;">
        <div class="post-card" v-for="{ job, application } in jobsAndApplications" style="height: auto;">
          <v-layout align-center row spacer slot="header">
            <v-flex xs12>
              <v-avatar size="36px" slot="activator" style="float: left; margin-right: 10px;">
                <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
              </v-avatar>
              <div style="color: #A7A7A7; line-height: 36px;">
                {{ job.posted_by }}
              </div>
            </v-flex>
          </v-layout>

          <router-link :to="'JobDetail/'+job._id">
            <v-layout>
              <v-flex xs12 style="padding-top: 0px;">
                <div class="new-applicant-card__info">
                  <div><h3 class="post-title">{{ job.title }}</h3></div>
                  <p>
                    <span class="new-applicant-card__address">
                      <img class="new-applicant-card__regular-icon" :src="svgs.locationMarker" />{{ job.address }}
                    </span>
                  </p>
                  <div class="carditem">
                    <p><v-icon>info</v-icon>{{ parseJobIntoMainJobInfo(job) }}</p>
                  </div>
                  <div class="carditem">
                    <p>
                      <span class="carditem-image">
                        <img :src="svgs.student" class="new-applicant-card__regular-icon" />
                      </span>{{ job.studentfriendly ? 'S' : 'Not s' }}tudent-friendly
                      <span>{{ job.experience ? '&bull; Experience required' : '' }}</span>
                    </p>
                  </div>
                </div>
                <div class="btn-holder">
                  <h3 :style="`font-weight: normal; color: ${getStatusColor(application)}; margin-bottom: 0; height: auto;`">
                    {{ getStatusFromApplication(application) }}
                  </h3>
                </div>
              </v-flex>
            </v-layout>
          </router-link>
        </div>
      </v-layout>
    </div>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import VuexLS from '@/store/persist';

  import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
  import ReviewsSvg from '@/assets/job_posts/messages_1.svg';
  import StudentSvg from '@/assets/job_posts/user_1.svg';

  import DisplayTextHelper from '@/utils/DisplayTextHelper';
  import StringHelper from '@/utils/StringHelper';

  import ApplicationConstants from '@/constants/application';

  export default {
    data() {
      return {
        settingsoption1: '',
        addorg: false,
        jobsAndApplications: [],
        svgs: {
          locationMarker: LocationMarkerSvg,
          reviews: ReviewsSvg,
          student: StudentSvg,
        },
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
        const jobPromises = Promise.all(applications.map(this.getPairForEachApplication));
        this.jobsAndApplications = (await jobPromises).filter(({ job }) => job);
      },
      async getPairForEachApplication({ job_id: jobId, ...application }) {
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
              experience
              type
              type2
              salary
              pay_type
              pay_denomination
            }
          }`),
          variables: {
            jobId,
          },
        });
        return {
          job: job.length > 0 ? job[0] : undefined,
          application: { _id: jobId, ...application },
        };
      },
      parseJobIntoMainJobInfo(job) {
        return DisplayTextHelper.getMainJobInfo(job);
      },
      getStatusFromApplication(application) {
        const str = ApplicationConstants.status[application.status];
        return str || ApplicationConstants.status.submitted;
      },
      getStatusColor({ status }) {
        if (status === 'accepted') return 'green';
        if (status === 'rejected') return '#e53935';
        return '#A7A7A7';
      },
    },
    computed: {
      getAppliedJobsString() {
        return StringHelper.pluralize('Job', this.jobsAndApplications.length);
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
