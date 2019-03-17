<style lang="scss">
.appliedjobs {
  padding: 0;
  .main-cont-large {
    padding: 0 16px;
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
.list-post{
  .list-post-job-name{
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 21px;
  color: #4d4d4d;
  // white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  }

  .list-title{
    color: grey;
  }
  .post-time{
    color:#ff9897;
  }
  .post-expired{
    color:grey;
    font-size: 14px;
  }
  .post-valid{
    color:#ffc46a;
    font-size: 14px;
  }
  .post-submitted{
    color:pink;
    font-size: 14px;
  }
}
</style>
<template>
  <v-container fluid class="appliedjobs">
    <div class="header-splash">
      <div class="main-cont-large bottom">
        <span v-if="jobsAndApplications.length > 0" class="header-text">
          <span class="counter-text">{{ jobsAndApplications.length }}</span>
          <span>
            Applied {{ getAppliedJobsString }}
          </span>
        </span>
        <span v-else class="header-text">
          You have not applied for any jobs yet!
          <router-link to="/" style="font-weight: bold;">
            Lets go!
          </router-link>
        </span>
      </div>
    </div>
    <div class="main-cont-large list-bounds">
      <div v-for="({ job, application }, idx) in jobsAndApplications">
          <v-layout row wrap class="list-post">
            <v-flex xs12 sm7>
              <router-link :to="`/job/${job._id}`">
              <p class="list-title">{{ job.posted_by }}</p>
              <h2 class="list-post-title">{{ job.title }}</h2>
              </router-link>
            </v-flex>
            <v-flex xs4 sm2>
              <p class="list-title">Applied</p>
              <timeago class="post-time":since="job.date" />
            </v-flex>
            <v-flex xs2 sm2>
              <p class="list-title">status</p>
              <h2 v-if="application.status === 'submitted'" class="post-submitted">Submitted</h2>
              <h2 v-else-if="application.status === 'opened'" class="post-valid">Seen</h2>
              <h2 v-else class="post-expired">Expired</h2>
            </v-flex>
          </v-layout>
          <hr v-if= "idx < jobsAndApplications.length - 1" style="size:20; width:88%;">
      </div>
    </div>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
  import ReviewsSvg from '@/assets/job_posts/messages_1.svg';
  import StudentSvg from '@/assets/job_posts/user_1.svg';

  import DisplayTextHelper from '@/utils/DisplayTextHelper';
  import StringHelper from '@/utils/StringHelper';
  import ProfilePicHelper from '@/utils/GetProfilePic';

  import ApplicationConstants from '@/constants/application';
  import queries from '@/constants/queries';

  import MainJobCard from '@/components/MainJobCard';

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
    components: {
      MainJobCard,
    },
    methods: {
      async getData() {
        const { data: { findMyApplications: applications } } = await this.$apollo.query({
          query: (gql`query {
            findMyApplications (filter: {}) {
              _id
              job_id
              status
              date
              expiry_date
            }
          }`),
        });
        const jobPromises = Promise.all(applications.map(this.getPairForEachApplication));
        this.jobsAndApplications = (await jobPromises).filter(({ job }) => job);
      },
      async getPairForEachApplication({ job_id: jobId, ...application }) {
        let { data: { findJob: job } } = await this.$apollo.query({
          query: (gql`query ($jobId: MongoID) {
            findJob (filter: { _id: $jobId, active: true }){
              ${queries.FindJobRecordForJobCard}
            }
          }`),
          variables: {
            jobId,
          },
        });
        if (!job) {
          return {
            job: null,
            application: { _id: jobId, ...application },
          };
        }
        // TODO:
        if (job.is_deleted) {
          job = Object.assign({}, job);
          return {
            job: job,
            application: { _id: jobId, ...application },
          };
        }
        job = Object.assign({}, job);
        job.profilePic = await this.getProfilePic(job);
        return {
          job: job,
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
      async getProfilePic(job) {
        const { business_id: businessID, user_id: userID } = job;
        const profilePic = await ProfilePicHelper.getProfilePic(userID, businessID);
        return profilePic;
      },
    },
    computed: {
      getAppliedJobsString() {
        return StringHelper.pluralize('Job', this.jobsAndApplications.length);
      },
    },
    created() {
      if (this.$store.state.acct) {
        if (this.$store.state.acct === 2) {
          // this.user = this.$store.state.bdata.business_name;
          this.getData();
        } else if (this.$store.state.acct === 1) {
          // this.user = this.$store.state.userdata.firstname + this.$store.state.userdata.lastname;
          this.getData();
        } else {
          this.$router.push('/login');
        }
      }
    },
  };
</script>
