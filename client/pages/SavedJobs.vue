<style>

</style>
<template>
  <v-container fluid class="job-post__container">
    <div class="main-cont-large" style="background: none">
      <v-layout>
        <v-flex xs12>
          <h1 style="margin-bottom: 10px; color: #A7A7A7;"><span class="kunvet-red">{{ counter }}</span> Saved Job{{ plural }}</h1>
        </v-flex>
      </v-layout>
      <v-layout style="padding-bottom: 32px;">
        <v-flex xs12 class="no-padding">
          <div v-for="job in findJobs" :key="job._id">
            <MainJobCard
              :job="job"
              :saveJobFunc="unsaveJob"
              :isSaved="true"
            />
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import VuexLS from '@/store/persist';
  import StudentSvg from '@/assets/job_posts/user_1.svg';
  import MainJobCard from '@/components/MainJobCard';
  import queries from '@/constants/queries';

  const FindJobQuery = gql`query ($id: MongoID) {
    findJob (filter: { _id: $id, is_deleted: false }) {
      ${queries.FindJobRecordForJobCard}
    }
  }`;

  export default {
    components: {
      MainJobCard,
    },
    data() {
      return {
        findJobs: [],
        saved_jobs: [],
        uid: null,
        counter: 0,
        svgs: {
          student: StudentSvg,
        },
      };
    },
    computed: {
      plural() {
        return this.saved_jobs.length === 1 ? '' : 's';
      },
    },
    methods: {
      getSavedJobs() {
        this.$apollo.query({
          query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
              _id
              saved_jobs
            }
          }`),
          variables: {
            uid: this.uid,
          },
        }).then(async (data) => {
          const res = data.data.findAccount;
          if (res.saved_jobs) {
            this.findJobs = [];
            this.counter = 0;
            this.saved_jobs = res.saved_jobs.concat([]);
            for (var i in this.saved_jobs) {
              if (this.saved_jobs[i]) {
                const jobid = this.saved_jobs[i];
                this.$apollo.query({
                  query: FindJobQuery,
                  variables: { id: jobid },
                }).then((d) => {
                  const findJob = d.data.findJob;
                  if (findJob && !findJob.is_deleted) {
                    this.counter += 1;
                    // console.log(findJob.title, findJob.date);
                    this.findJobs.push(findJob);
                    this.findJobs = this.findJobs.sort((a, b) => this.sortFunction(a, b));
                  }
                });
              }
            }
          } else {
            this.saved_jobs = [];
            this.findJobs = [];
            this.counter = 0;
          }
        }).catch((error) => {
          console.error(error);
        });
      },
      sortFunction(a, b) {
        return a.date < b.date;
      },
      updateSavedJobs() {
        this.$apollo.mutate({
          mutation: (gql`
            mutation ($uid: MongoID, $record: UpdateOneAccountInput!)
          {
            updateAccount (
              filter: { _id: $uid },
              record: $record,
            ) {
              recordId
            }
          }`),
          variables: {
            uid: this.uid,
            record: {
              saved_jobs: this.saved_jobs,
            },
          },
          refetchQueries: [{
            query: (gql`query ($uid: MongoID) {
              findAccount (filter: {
                _id: $uid
              }) {
                _id
                saved_jobs
              }
            }`),
            variables: {
              uid: this.uid,
            },
          }],
        }).catch((error) => {
          console.error(error);
        });
      },
      unsaveJob(id) {
        const index = this.saved_jobs.indexOf(id);
        if (index !== -1) {
          this.saved_jobs.splice(index, 1);
          this.findJobs = this.findJobs.filter(x => x._id !== id);
          this.counter -= 1;
          this.updateSavedJobs();
        }
      },
    },
    activated() {
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
