<style>
  .job-post-icon {
    width: 12px;
    height: 12px;
  }
</style>
<template>
  <v-container fluid class="white-bg job-post__container">
    <div class="main-cont-large">
      <v-layout row wrap>
        <v-flex xs-12 v-if="jobs.length === 0">
          You have no jobs.
        </v-flex>
        <v-flex xs12 v-if="unpostedJobs.length > 0">
          <h1><span class="kunvet-red">{{ unpostedJobs.length }}</span> {{ getUnpostedJobsString }}</h1>
        </v-flex>
        <v-flex xs12 sm6
          v-if="unpostedJobs.length > 0"
          v-for="job in unpostedJobs"
          class="new-applicant-card"
        >
          <div class="inner">
            <div class="new-applicant-card__info">
              <router-link :to="`/jobdetail/${job._id}`">
                <h2 class="new-applicant-card__title">
                  {{ job.title }}
                </h2>
              </router-link>
            </div>
            <div class="btn-holder">
              <div class="btn-holder__right-elements">
                <router-link :to="`/createnewjob/${job._id}`">
                  <v-btn class="kunvet-accept-small-btn">
                    Continue Editing
                  </v-btn>
                </router-link>
                <v-btn
                  class="kunvet-reject-small-btn"
                  @click="onShowJobDialog(job)"
                >
                  Delete
                </v-btn>
               </div>
            </div>
          </div>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 v-if="activeJobs.length > 0">
          <h1><span class="kunvet-red">{{ activeJobs.length }}</span> {{ getActiveJobsString }}</h1>
        </v-flex>
        <v-flex xs12 sm6
          v-if="activeJobs.length > 0"
          v-for="job in activeJobs"
          class="new-applicant-card"
        >
          <div class="inner">
            <div class="new-applicant-card__info">
              <router-link :to="`/jobdetail/${job._id}`">
                <h2 class="new-applicant-card__title">
                  {{ job.title }}
                </h2>
              </router-link>
              <div class="new-applicant-card__time-ago">
                <timeago :since="job.date" />
              </div>
              <p class="post-intro">
                <span class="new-applicant-card__address">
                  <img class="new-applicant-card__regular-icon" :src="svgs.locationMarker" />{{ job.address }}
                </span>
              </p>
              <div>
                <img
                  class="job-post-icon"
                  :src="svgs.information" /> {{ parseJobIntoMainInfo(job) }}
              </div>
              <div>
                <span><img
                  class="job-post-icon"
                  :src="svgs.student" /> {{ job.studentfriendly ? '' : 'Not ' }} Student Friendly</span>
                <span>{{ job.experience ? '&bull; Experience Required' : '' }}</span>
              </div>
            </div>
            <div class="btn-holder">
              <div class="btn-holder__right-elements">
                <span style="color: grey;">
                  Repost in {{ getRepostDaysString(job.date) }}
                </span>
                <router-link :to="`/createnewjob/${job._id}`">
                  <v-icon style="margin-left: 5px;">edit</v-icon>
                </router-link>
                <v-icon style="cursor: pointer; margin-left: 5px;" @click="onShowJobDialog(job)">delete</v-icon>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 v-if="expiredJobs.length > 0">
          <h1><span class="kunvet-red">{{ expiredJobs.length }}</span> {{ getExpiredJobsString }}</h1>
        </v-flex>
        <v-flex xs12 sm6
          v-if="expiredJobs.length > 0"
          v-for="job in expiredJobs"
          class="new-applicant-card"
        >
          <div class="inner">
            <div class="new-applicant-card__info">
              <router-link :to="`/jobdetail/${job._id}`">
                <h2 class="new-applicant-card__title">
                  {{ job.title }}
                </h2>
              </router-link>
            <div class="new-applicant-card__time-ago">
              <timeago :since="job.date" />
            </div>
            <p class="post-intro">
              <span class="new-applicant-card__address">
                <img class="new-applicant-card__regular-icon" :src="svgs.locationMarker" />{{ job.address }}
              </span>
            </p>
            <div>
              <img
                class="job-post-icon"
                :src="svgs.information" /> {{ parseJobIntoMainInfo(job) }}
            </div>
            <div>
              <span><img
                class="job-post-icon"
                :src="svgs.student" /> {{ job.studentfriendly ? '' : 'Not ' }} Student Friendly</span>
              <span>{{ job.experience ? '&bull; Experience Required' : '' }}</span>
            </div>
          </div>
          <div class="btn-holder">
            <div class="btn-holder__right-elements">
              <v-btn
                class="kunvet-black-small-btn"
                click=""
              >
                Repost
              </v-btn>
              <router-link :to="`/createnewjob/${job._id}`">
                <v-icon>edit</v-icon>
              </router-link>
              <v-icon @click="onShowJobDialog(job)">delete</v-icon>
            </div>
          </div>
        </div>
      </v-flex>
      </v-layout>
    </div>

    <v-dialog v-model="dialogs.showDelete">
      <v-card>
        <v-card-title class="headline">
          Delete Job
        </v-card-title>
        <v-card-actions>
          <v-btn color="green darken-1" flat="flat" @click.native="onJobDelete">
            Confirm
          </v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialogs.showDelete = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import VuexLS from '@/store/persist';

  import InformationSvg from '@/assets/job_posts/information.svg';
  import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
  import StudentSvg from '@/assets/job_posts/user_1.svg';

  import DateHelper from '@/utils/DateHelper';
  import DisplayTextHelper from '@/utils/DisplayTextHelper';
  import JobHelper from '@/utils/JobHelper';
  import StringHelper from '@/utils/StringHelper';

  const findJobsQuery = gql`
      query($userId: MongoID, $businessId: MongoID) {
        findJobs(filter: { user_id: $userId, business_id: $businessId }) {
          _id
          posted_by
          title
          active
          date
          expiry_date
          address
          type
          type2
          studentfriendly
          pay_type
          salary
          pay_denomination
          experience
      }
    }`;

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
        jobs: [],
        dialogs: {
          currentJob: null,
          showDelete: false,
        },
        svgs: {
          information: InformationSvg,
          locationMarker: LocationMarkerSvg,
          student: StudentSvg,
        },
      };
    },
    methods: {
      /* async getData() {
        const { data } = await this.$apollo.query(this.getFindJobsQuery());
        this.jobs = data.findJobs;
      }, */
      async getData() {
        const { data } = await this.$apollo.query({
          query: findJobsQuery,
          variables: {
            userId: this.$store.state.userID,
            businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
          },
        });
        this.jobs = data.findJobs;
      },
      onShowJobDialog(job) {
        this.dialogs.currentJob = job;
        this.dialogs.showDelete = true;
      },
      async onJobDelete() {
        const { currentJob: { _id: jobId } } = this.dialogs;
        const res = await this.$apollo.mutate({
          mutation: gql`mutation($jobId: MongoID) {
            removeJob(filter: { _id: $jobId }) {
              recordId
            }
          }
          `,
          variables: {
            jobId,
          },
          refetchQueries: [{
            query: findJobsQuery,
            variables: { userId: this.$store.state.userID },
          }],
        });
        const { recordId } = res.data.removeJob;
        this.jobs = this.jobs.filter(({ _id }) => _id !== recordId);
        this.resetDialogState();
      },
      resetDialogState() {
        this.dialogs.showDelete = false;
      },
      getRepostDaysString(date) {
        const expiryDate = DateHelper.getExpiryDate(date);
        const daysDiff = DateHelper.getDifferenceInDays(Date.now(), expiryDate);
        return `${daysDiff} ${StringHelper.pluralize('day', daysDiff)}`;
      },
      parseJobIntoMainInfo(job) {
        return DisplayTextHelper.getMainJobInfo(job);
      },
      getJobCountString(jobType, length) {
        return `${jobType} ${StringHelper.pluralize('Job', length)}`;
      },
    },
    computed: {
      activeJobs() { // and unexpired
        const { jobs } = this;
        return jobs.filter(JobHelper.isJobActive);
      },
      unpostedJobs() {
        return this.jobs.filter(({ active }) => !active);
      },
      expiredJobs() {
        const { jobs } = this;
        return jobs.filter(JobHelper.isJobExpired);
      },
      getUnpostedJobsString() {
        return this.getJobCountString('Unposted', this.unpostedJobs.length);
      },
      getActiveJobsString() {
        return this.getJobCountString('Active', this.activeJobs.length);
      },
      getExpiredJobsString() {
        return this.getJobCountString('Expired', this.expiredJobs.length);
      },
    },
  };
</script>
