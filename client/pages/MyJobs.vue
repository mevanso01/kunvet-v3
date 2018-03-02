<style>
  .myjobs-container ul {
    border: 1px solid rgba(0,0,0,.12);
    padding: 0;
  }
  .myjobs-container .no-jobs-tile .list__tile,
  .myjobs-container .no-jobs-tile .list__tile__content {
    height: 54px;
  }
  .job-post-icon {
    width: 12px;
    height: 12px;
  }
</style>
<template>
  <v-container fluid class="white-bg myjobs-container">
    <div class="main-cont-large">
      <v-layout row wrap>
        <v-flex xs12 v-if="unpostedJobs.length > 0">
          <h1><span class="kunvet-red">{{ unpostedJobs.length }}</span> {{ getUnpostedJobsString }}</h1>
        </v-flex>
        <v-flex xs12 sm6
          v-if="unpostedJobs.length > 0"
          v-for="job in unpostedJobs"
          class="new-applicant-card"
        >
          <div class="myjobs-container">
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
          </div>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 v-if="activeJobs.length > 0">
          <h1><span class="kunvet-red">{{ activeJobs.length }}</span> {{ getActiveJobsString }} </h1>
        </v-flex>
        <v-flex xs12 sm6
          v-if="activeJobs.length > 0"
          v-for="job in activeJobs"
          class="new-applicant-card"
        >
          <div class="myjobs-container">
            <div class="inner"> 
              <div class="new-applicant-card__info">
                <router-link :to="`/jobdetail/${job._id}`">
                  <h2 class="new-applicant-card__title">
                    {{ job.title }}
                  </h2>
                </router-link>
                <div class="new-applicant-card__time-ago">
                  <timeago :since="job.created_at" />
                </div>
                <p class="post-intro">
                  <span class="new-applicant-card__address">
                    <img class="new-applicant-card__regular-icon" :src="svgs.locationMarker" />{{ job.address }}
                  </span>
                </p>
                <div>
                  <img
                    class="job-post-icon"
                    :src="svgs.information" /> {{ getMainJobInfo(job) }}
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
                  <span style="color: grey">
                    Repost in {{ getRepostDaysString(job.created_at) }}
                  </span>
                  <router-link :to="`/createnewjob/${job._id}`">
                    <v-icon>edit</v-icon> 
                  </router-link>
                  <v-icon @click="onShowJobDialog(job)">delete</v-icon> 
                </div>
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
          <div class="myjobs-container">
            <div class="inner"> 
              <div class="new-applicant-card__info">
                <router-link :to="`/jobdetail/${job._id}`">
                  <h2 class="new-applicant-card__title">
                    {{ job.title }}
                  </h2>
                </router-link>
              <div class="new-applicant-card__time-ago">
                <timeago :since="job.created_at" />
              </div>
              <p class="post-intro">
                <span class="new-applicant-card__address">
                  <img class="new-applicant-card__regular-icon" :src="svgs.locationMarker" />{{ job.address }}
                </span>
              </p>
              <div>
                <img
                  class="job-post-icon"
                  :src="svgs.information" /> {{ getMainJobInfo(job) }}
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
  import StringHelper from '@/utils/StringHelper';

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
      async getData() {
        const { data } = await this.$apollo.query(this.getFindJobsQuery());
        this.jobs = data.findJobs;
      },
      onShowJobDialog(job) {
        this.dialogs.currentJob = job;
        this.dialogs.showDelete = true;
      },
      getFindJobsQuery() {
        const findJobsQuery = {
          query: gql`
            query($userId: MongoID) {
              findJobs(filter: { user_id: $userId }) {
                _id
                posted_by
                title
                active
                created_at
                address
                type
                type2
                studentfriendly
                pay_type
                salary
                pay_denomination
                experience
            }
          }
          `,
          variables: {
            userId: this.$store.state.userID,
          },
        };
        return findJobsQuery;
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
          refetchQueries: [this.getFindJobsQuery()],
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
      getJobTypeString(jobTypes) {
        if (!jobTypes) return '';
        if (jobTypes.length === 0) return 'Unknown'; // probably unnecessary
        return StringHelper.listToSlashString(jobTypes);
      },
      getMainJobInfo(job) {
        const jobType = this.getJobTypeString(job.type);
        const jobType2 = this.getJobTypeString(job.type2);
        const salary = this.getSalaryString(job);
        let result = '';
        if (jobType) result += jobType;
        if (jobType && jobType2) result += ` • ${jobType2}`;
        if (salary) result += ` • ${salary}`;
        return result;
      },
      getSalaryString(job) {
        if (job.pay_type === 'unpaid' || job.pay_type === 'negotiable' || job.pay_type === 'none') {
          return job.pay_type;
        }
        return `$${job.salary} ${job.pay_denomination}`;
      },
      getJobCountString(jobType, length) {
        return `${jobType} ${StringHelper.pluralize('Job', length)}`;
      },
    },
    computed: {
      activeJobs() {
        return this.jobs.filter(job => job.active);
      },
      unpostedJobs() {
        return this.jobs.filter(job => !job.active);
      },
      expiredJobs() {
        return this.jobs.filter(job => {
          const { created_at: date } = job;
          const expiryDate = DateHelper.getExpiryDate(date);
          const daysDiff = DateHelper.getDifferenceInDays(Date.now(), expiryDate);
          const expired = daysDiff <= 0; // daysDiff can be negative so this is good.
          return expired && job.active;
        });
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
