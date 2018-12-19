<template>
  <v-container fluid>
    <h1>Sandbox</h1>
    <div>
      Play with me on <code>client/pages/Sandbox.vue</code>!
    </div>
    <br>
    <CodeVerification email="test" />
    <br>
    <h2>List of jobs</h2>
    <p>Page {{ page }} - Displaying {{ pageSize }} jobs at a time</p>
    <ul>
      <li v-for="job in findJobs">
        {{ job.title }}
      </li>
    </ul>
    <v-btn @click="page--; reloadPage()" v-if="page > 0">Prev</v-btn>
    <v-btn @click="page++; reloadPage()">Next</v-btn>
  </v-container>
</template>
<script>
import gql from 'graphql-tag';
import CodeVerification from '@/components/CodeVerification';

export default {
  data() {
    return {
      pageSize: 10,
      page: 0,
    };
  },
  apollo: {
    findJobs: {
      query: gql`
        query ($limit: Int!, $skip: Int!) {
          findJobs (limit: $limit, skip: $skip) {
            _id
            title
          }
        }`,
      variables: {
        limit: 10,
        skip: 0,
      },
    },
  },
  components: {
    CodeVerification,
  },
  methods: {
    reloadPage() {
      this.$apollo.queries.findJobs.fetchMore({
        variables: {
          limit: this.pageSize,
          skip: this.pageSize * this.page,
        },
        updateQuery(previousResult, { fetchMoreResult }) {
          return fetchMoreResult;
        },
      });
    },
  },
};
</script>
