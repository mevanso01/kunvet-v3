<style>
.general-dropdown-items select, .general-dropdown-items label {
  width: 100%;
  height: 100%;
  padding: 5px 20px;
}
</style>
<template>
  <v-container fluid>
      <div class="main-cont-large">
            <div id="banner">
            </div>
            <form method="get" action="https://www.kunvet.com/job/posts">
                <section id="search">

                    <h1>Jobs For Students</h1>

                    <div id="select-city">
                        <div class="general-input general-input-for-dropdown">
                            <div id="city-dropdown" class="general-dropdown">
                                <div class="general-dropdown-icon">
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </div>
                                <div class="general-dropdown-items">
                                  <select v-model="selectedCity">
                                    <option disabled>Please select city</option>
                                    <option>Irvine</option>
                                    <option>B</option>
                                    <option>C</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="select-type">
                        <div class="general-input general-input-for-dropdown">
                            <div id="type-dropdown" class="general-dropdown">
                                <div class="general-dropdown-icon">
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </div>
                                <div class="general-dropdown-items">
                                  <select v-model="selectedType">
                                    <option>Latest Jobs</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <input class="hidden-input" id="submit" type="submit" value="GO">
                <div id="general-submit">
                    <div id="general-submit-default">
                        <span>GO</span>
                    </div>
                    <div id="general-submit-error">
                        <span id="general-submit-error-msg"></span>
                    </div>
                </div>
            </form>
        </div>
    <h2>Search for All Jobs</h2>
    <router-link to="/login">Login</router-link>
    <router-link to="/jobposts">All Job Posts</router-link>
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
      selectedCity: 'Please select city',
      selectedType: 'Latest Jobs',
    };
  },
};
</script>
<!--<script src="../Component.js"></script>-->
