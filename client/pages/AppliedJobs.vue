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
    <div class="main-cont-large">
      <v-layout row wrap style="border-bottom-color: black;">>
        <v-flex xs7>
          <p style="color:grey">kunvet</p>
          <h2 style="font-weight:bold; margin-bottom:0px;">Coding Intern</h2>
        </v-flex>
        <v-flex xs2>
          <p style="color:grey">Applied</p>
          <p style="color:#ff9897"><span style="font-size:20px">7</span> minutes ago</p>
        </v-flex>
        <v-flex xs2>
          <p style="color:grey">status</p>
          <h2 style="color:#ffc46a">Seen</h2>
        </v-flex>
      </v-layout>
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
      <div v-for="({ job, application }, idx) in jobsAndApplications" class="aj-card" :key="`aj-${idx}`">
        <div class="aj-status" style="text-align: center;">
          <h3 :style="`font-weight: normal; color: ${getStatusColor(application)}; margin-bottom: 0; height: auto;`">
            <span class="mobile-hide">Status: </span>{{ getStatusFromApplication(application) }}
          </h3>
        </div>
        <MainJobCard :job="job"></MainJobCard>
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
        if (job.deleted) {
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
