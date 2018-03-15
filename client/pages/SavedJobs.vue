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
          <div v-for="job in findJobs" :index="job._id">
            <MainJobCard :job="job" :saveJobFunc="unsaveJob" :isSaved="true" />
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

  const FindJobQuery = gql`query ($id: MongoID) {
    findJob (filter: { _id: $id }) {
        _id
        posted_by
        title
        description
        address
        latitude
        longitude
        type
        studentfriendly
        type2
        shift
        age
        pay_type
        salary
        pay_denomination
        date
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
      async getSavedJobs() {
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
          for (var i in this.saved_jobs) {
            if (this.saved_jobs[i]) {
              const jobid = this.saved_jobs[i];
              this.$apollo.query({
                query: FindJobQuery,
                variables: { id: jobid },
              }).then((d) => {
                console.log(d);
                const findJob = d.data.findJob;
                if (findJob && findJob._id === jobid) {
                  this.counter += 1;
                  this.findJobs.push(findJob);
                }
              });
            }
          }
        }).catch((error) => {
          console.error(error);
        });
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
          this.findJobs.splice(index, 1);
          this.counter -= 1;
          this.updateSavedJobs();
        }
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
