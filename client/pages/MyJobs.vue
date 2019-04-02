<style lang="scss">
  .post-jobs {
    padding: 0;
    .main-cont-large {
      padding: 0 16px;
      hr{
          margin-top: 20px;
          margin-bottom: 20px;
          size:20px;
        }
    }
    .header-splash {
      height: 230px;
      .header-text {
        font-size: 18px;

        // font-weight: bold;
      }
      .counter-text {
        font-size: 84px;
        margin-right: 8px;
        font-weight: bold;
        line-height: 84px;
      }
    }
    .list-bounds{
      margin-top: 30px;
    }
    @media (min-width: 601px) {
      .aj-card {
        width: 50%;
        float: left;
        .jp-card {
          width: 100% !important;
        }
      }
    }
    @media (max-width: 600px) {
      .header-splash {
        height: 215px;
      }
    }
  }


</style>
<template>
  <v-container fluid class="post-jobs list-post page-height">
    <div class="header-splash" style="margin-bottom:50px;">
      <div class="main-cont-large bottom">
        <span class="counter-text">{{ unpostedJobs.length + activeJobs.length + expiredJobs.length }}</span>
        <span class="header-text">
          Job{{plural}}
        </span>
      </div>
    </div>

    <div style="margin-bottom:30px;">
      <div v-if="(unpostedJobs.length + activeJobs.length + expiredJobs.length) > 0" >
        <!--Unposted Jobs-->
        <div class="main-cont-large">
          <div v-if="unpostedJobs.length > 0"
                    v-for="(job, idx) in unpostedJobs">
            <v-layout row wrap class="new-applicant-card">
              <v-flex xs12 sm6 md7>
                <p><timeago :since="job.date"/></p>
                <router-link :to="`/job/${job._id}`">
                  <h2 class="list-post-title">{{ job.title }}</h2>
                </router-link>
                <v-layout>
                  <v-flex xs12 sm12 md4>
                    <router-link :to="`/createjob/${job._id}`" style="margin-right: 10px;">
                      <k-btn color="#808080" small>
                        Edit
                      </k-btn>
                    </router-link>
                    <k-btn color="Salmon" small @click="onShowJobDialog(job)">
                      Delete
                    </k-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md5>
                <v-layout>
                  <v-flex xs7 sm7  style="padding: 0px">
                    <p>Applicants</p>
                    <h2 style="color: grey; padding-bottom: 10px;">-</h2>
                    <k-btn color="#448ef6" small disabled>
                      View Applicants
                    </k-btn>
                  </v-flex>
                  <v-flex xs5git  sm5  style="padding: 0px">
                    <p>Status</p>
                    <h2 style="color: orange; padding-bottom: 10px;">Unposted</h2>
                    <router-link :to="`/createjob/${job._id}`">
                      <k-btn color="orange" small>
                        Post It
                      </k-btn>
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <hr v-if= "idx < unpostedJobs.length - 1"  >
          </div>
          <hr v-if= "unpostedJobs.length > 0"  >
        </div>

        <!--Active Jobs-->
        <div class="main-cont-large">
          <div v-if="activeJobs.length > 0" v-for="(job, idx) in activeJobs">
            <v-layout row wrap class="new-applicant-card">
              <v-flex xs12 sm6 md7>
                <p><timeago :since="job.date"/></p>
                <router-link :to="`/job/${job._id}`">
                  <h2 class="list-post-title">{{ job.title }}</h2>
                </router-link>
                <v-layout>
                <v-flex xs12 sm12 md4>
                  <router-link :to="`/editjob/${job._id}`" style="margin-right: 10px;">
                    <k-btn color="grey" small>
                      Edit
                    </k-btn>
                  </router-link>
                  <k-btn color="Salmon" small @click="onShowJobDialog(job)">
                    Delete
                  </k-btn>
                </v-flex>
              </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md5>
                <v-layout>
                  <v-flex xs7 sm7  style="padding: 0px">
                    <p>Applicants</p>
                    <h2 style="color: #448ef6; padding-bottom: 10px;">{{getApplicantsFromJobs(job._id)}}</h2>
                    <router-link :to="`/applicants/`">
                      <k-btn v-if="getApplicantsFromJobs(job._id) > 0" color="#448ef6" small>
                        View Applicants
                      </k-btn>
                      </router-link>
                      <k-btn v-if="getApplicantsFromJobs(job._id) === 0" disabled small>
                        View Applicants
                      </k-btn>
                  </v-flex>

                  <v-flex xs5 sm5  style="padding: 0px">
                    <p>Status</p>
                    <h2 style="color: #6effbf; padding-bottom: 10px;">Active</h2>
                    <k-btn disabled small>
                      Re-post Job
                    </k-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <hr v-if= "idx < activeJobs.length - 1"  >
          </div>
        </div>

        <!--Expired Jobs-->
        <div class="main-cont-large">
          <hr v-if="expiredJobs.length > 0 && activeJobs.length > 0">
          <div v-if="expiredJobs.length > 0" v-for="(job, idx) in expiredJobs">
            <v-layout row wrap class="new-applicant-card">
              <v-flex xs12 sm6 md7>
                <p><timeago :since="job.date"/></p>
                <router-link :to="`/job/${job._id}`">
                  <h2 class="list-post-title">{{ job.title }}</h2>
                </router-link>
                <v-layout>
                  <v-flex xs12 sm12 md4>
                    <router-link :to="`/editjob/${job._id}`" style="margin-right: 10px;">
                      <k-btn color="grey" small>
                        Edit
                      </k-btn>
                    </router-link>

                    <k-btn color="Salmon" small @click="onShowJobDialog(job)">
                      Delete
                    </k-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md5>
                <v-layout>
                  <v-flex xs7 sm7  style="padding: 0px">
                    <p>Applicants</p>
                    <h2 style="color: #448ef6; padding-bottom: 10px;">{{getApplicantsFromJobs(job._id)}}</h2>
                    <router-link :to="`/applicants/`">
                      <k-btn v-if="getApplicantsFromJobs(job._id) > 0" color="#448ef6" small>
                        View Applicants
                      </k-btn>
                    </router-link>
                  </v-flex>
                  <v-flex xs5 sm5  style="padding: 0px">
                    <p>Status</p>
                    <h2 style="color: grey; padding-bottom: 10px;">Expired</h2>
                    <k-btn small color="grey" @click="repostJob(job._id)">
                      Re-post Job
                    </k-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <hr v-if= "idx < expiredJobs.length - 1">
          </div>
        </div>
      </div>

      <div v-else>
        <div class="main-cont-large" style="text-align: center;">
          <p>You have not posted any jobs yet,
          <router-link :to="`/createjob/`" style="font-weight: bold;">
            click here
          </router-link> to post one.</p>
        </div>
      </div>

    </div>

    <v-dialog v-model="dialogs.showDelete" width="380">
      <v-card>
        <v-card-title class="headline">
          Are you sure you want to delete this job?
        </v-card-title>
        <v-card-actions>
          <v-btn color="red darken-1" flat="flat" @click.native="onJobDelete">
            Yes, delete it
          </v-btn>
          <v-btn flat="flat" @click.native="dialogs.showDelete = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogs.showRepost">
      <v-card>
        <v-card-title class="headline">
          Repost this job
        </v-card-title>
        <v-card-text class="pt-0">
          This will re-activate your job and display it again for another 30 days
        </v-card-text>
        <v-card-text v-if="dialogs.errorOccured" class="pt-0" style="color: red;">
          Some kind of error occured. Please try again later.
        </v-card-text>
        <v-card-text v-else-if="dialogs.success" class="pt-0" style="color: green;">
          Successfully reposted!
        </v-card-text>
        <v-card-actions v-if="dialogs.success && !dialogs.errorOccured">
          <v-btn flat="flat" @click.native="dialogs.showRepost = false">
            Close
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn flat="flat" @click.native="repostJob(dialogs.currentJobId)">
            Repost
          </v-btn>
          <v-btn flat="flat" @click.native="dialogs.showRepost = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import InformationSvg from '@/assets/job_posts/information.svg';
  import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
  import StudentSvg from '@/assets/job_posts/user_1.svg';
  import DateHelper from '@/utils/DateHelper';
  import DisplayTextHelper from '@/utils/DisplayTextHelper';
  // import JobHelper from '@/utils/JobHelper';
  import StringHelper from '@/utils/StringHelper';
  import queries from '@/constants/queries';
  import EventBus from '@/EventBus';
  import axios from 'axios';
  // import findIndex from 'lodash/findIndex';

  const findJobsQuery = gql`
    query($userId: MongoID, $businessId: MongoID) {
      findJobs(filter: { user_id: $userId, business_id: $businessId }) {
        ${queries.FindJobRecordForJobCard}
        expiry_date
      }
    }`;

  export default {
    activated() {
      if (this.$store.state.acct === 0) {
        this.$router.push('/login');
        return;
      }
      this.getData();
    },
    data() {
      return {
        tab: 0,
        user: null,
        jobs: [],
        applicants: [],
        applicantLength: 0,
        dialogs: {
          currentJob: null,
          showDelete: false,
          currentJobId: null,
          showRepost: false,
          errorOccured: false,
          success: false,
        },
        svgs: {
          information: InformationSvg,
          locationMarker: LocationMarkerSvg,
          student: StudentSvg,
        },
      };
    },
    methods: {
      async getData(networkOnly = false) {
        // console.log(`
        //   query($userId: MongoID, $businessId: MongoID) {
        //     findJobs(filter: { user_id: $userId, business_id: $businessId }) {
        //       ${queries.FindJobRecordForJobCard}
        //       expired
        //       expiry_date
        //     }
        //   }`);
        const { data } = await this.$apollo.query({
          fetchPolicy: networkOnly ? 'network-only' : 'cache-first',
          query: findJobsQuery,
          variables: {
            userId: this.$store.state.userID,
            businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
          },
        });
        this.jobs = data.findJobs.concat();
        const jobs = this.jobs.filter(x => !x.is_deleted);
        const jobIds = jobs.map(({ _id }) => _id);
        const resolved = await Promise.all(jobIds.map(this.getApplicationsFromJob));
        this.applicants = resolved.reduce((total, curr) => total.concat(curr), []);
      },
      onShowJobDialog(job) {
        this.dialogs.errorOccured = false;
        this.dialogs.currentJob = job;
        this.dialogs.showDelete = true;
      },
      async onJobDelete() {
        const { currentJob: { _id: jobId } } = this.dialogs;
        const res = await this.$apollo.mutate({
          mutation: gql`mutation($jobId: MongoID, $uid: MongoID) {
            updateJob(filter: { _id: $jobId }
              record: {
                user_id: $uid,
                is_deleted: true,
              }
            ){
              recordId
            }
          }
          `,
          variables: {
            jobId: jobId,
            uid: this.$store.state.userID,
          },
          refetchQueries: [
            {
              query: findJobsQuery,
              variables: {
                userId: this.$store.state.userID,
                businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
              },
            },
            { // from applicants page
              query: (gql`query ($userId: MongoID, $businessId: MongoID) {
                findJobs (filter: { user_id: $userId, business_id: $businessId, active: true, is_deleted: false }){
                  _id
                  user_id
                  posted_by
                  title
                  address
                  date
                }
              }`),
              variables: {
                userId: this.$store.state.userID,
                businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
              },
            },
          ],
        });
        const { recordId } = res.data.updateJob;
        EventBus.$emit('deletedJob', recordId);
        this.jobs = this.jobs.filter(({ _id }) => _id !== recordId);
        this.resetDialogState();
      },
      resetDialogState() {
        this.dialogs.showDelete = false;
      },
      getRepostDaysString(date) {
        const daysDiff = this.getExpiredDaysDiff(date);
        return `${daysDiff} ${StringHelper.pluralize('day', daysDiff)}`;
      },
      getExpiredDaysDiff(date) {
        const expiryDate = DateHelper.getExpiryDate(date, 30); // this is what determines if job is expired atm
        const daysDiff = DateHelper.getDifferenceInDays(Date.now(), expiryDate);
        return daysDiff;
      },
      parseJobIntoMainInfo(job) {
        return DisplayTextHelper.getMainJobInfo(job);
      },
      getJobCountString(jobType, length) {
        return `${jobType} ${StringHelper.pluralize('Job', length)}`;
      },
      openRepostDialog(jobId) {
        this.dialogs.errorOccured = false;
        this.dialogs.success = false;
        this.dialogs.currentJobId = jobId;
        this.dialogs.showRepost = true;
      },
      repostJob(jobId) {
        axios.post(`job/repost/${jobId}`).then(res => {
          if (res.data.success) {
            this.dialogs.success = true;
            this.getData(true); // fetches using networkOnly
            window.setTimeout(() => { this.dialogs.showRepost = false; }, 2000);
          } else {
            this.dialogs.errorOccured = true;
          }
        }).catch(err => {
          this.$error(err);
          this.dialogs.showRepost = false;
          this.dialogs.errorOccured = true;
        });
      },
      async getApplicants(jobId, useCache = true) {
        return this.$apollo.query({
          fetchPolicy: useCache ? 'cache-first' : 'network-only',
          query: (gql`query ($JobId: MongoID) {
            findApplicants (filter: {
              job_id: $JobId,
            }) {
              ${queries.FindApplicantRecord}
              notes
            }
          }`),
          variables: {
            JobId: jobId,
          },
        });
      },
      async getApplicationsFromJob(jobId, useCache = true) {
        const { data: { findApplicants: applicants } } = await this.getApplicants(jobId, useCache);
        return applicants;
      },
      getApplicantsFromJobs(jobId) {
        const applicants = this.applicants;
        return applicants.filter(({ job_id: id }) => id === jobId).length;
      },
    },
    computed: {
      activeJobs() { // and unexpired
        return this.jobs.filter(x => x.active && !x.is_deleted && this.getExpiredDaysDiff(x.date) > 0);
      },
      unpostedJobs() {
        return this.jobs.filter(x => !x.active && !x.is_deleted && !x.expired);
      },
      expiredJobs() {
        // you can also use JobHelper.isJobExpired if you have expiry_date
        return this.jobs.filter(x => this.getExpiredDaysDiff(x.date) <= 0 && !x.is_deleted);
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
      plural() {
        return (this.expiredJobs.length + this.unpostedJobs.length + this.activeJobs.length) === 1 ? '' : 's';
      },
    },
  };
</script>
