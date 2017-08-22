<template>
  <v-container fluid>
    <h2>Jobs</h2>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card v-for="(job, index) in jobs" :key="index" xs12>
          <v-card-title>
            <div class="headline">{{ job.name }}</div>
          </v-card-title>
          <v-card-text class="pt-0">
            <v-layout row wrap>
              <!-- Job type -->
              <v-chip v-if="job.type === 'fulltime'" class="green lighten-2">
                Full time
              </v-chip>
              <v-chip v-else-if="job.type === 'parttime'" class="indigo lighten-2">
                Part time
              </v-chip>
              <v-chip v-else>
                Other
              </v-chip>

              <!-- Document ID -->
              <v-chip>
                {{ job._id }}
              </v-chip>
            </v-layout>
            {{ job.description }}
            <v-subheader></v-subheader>
            {{ job.address }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import gql from 'graphql-tag';

export default {
  apollo: {
    jobs: gql`
      {
        jobs {
          _id
          name
          description
          type
          address
        }
      }
    `,
  },
  data() {
    return {
      jobs: [],
    };
  },
};
</script>
