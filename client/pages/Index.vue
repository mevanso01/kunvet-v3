<style>
.general-dropdown-items select, .general-dropdown-items label {
  width: 100%;
  height: 100%;
  padding: 5px 20px;
}
.expansion-panel--popout .expansion-panel__container  {
  margin: 0;
  max-width: 100%;
}
.search label {
  padding: 8px 280px 8px 5px;
}
</style>
<template>
  <v-container fluid>
      <div class="main-cont-large">
            <div v-if="firstSearch" id="banner">
            </div>
            <form>
                <section v-if="firstSearch" class="search">

                    <h1>Jobs For Students</h1>
                    <!--<v-expansion-panel popout>
                        <div id="select-city">
                          <v-expansion-panel-content v-bind:value="item === 1">
                            <div slot="header" v-if="!selectedCities[0]">
                              Select City
                            </div>
                            <div slot="header" v-else>
                              {{ selectedCities[0] }}
                            </div>
                            <v-card v-for="item in availableCities">
                              <v-card-text class="lighten-3">
                                <input type="checkbox" :value="item.name" v-model="selectedCities">
                                {{ item.name }}
                              </input>
                              </v-card-text>
                            </v-card>
                          </v-expansion-panel-content>
                        </div>
                        <div id="select-type">
                          <v-expansion-panel-content v-bind:value="item === 2">
                            <div slot="header">
                              Latest Jobs
                            </div>
                            <v-card>
                              <v-card-text class="lighten-3">
                                <input type="checkbox" value="Latest Jobs" >
                                Latest Jobs
                              </v-card-text>
                            </v-card>
                          </v-expansion-panel-content>
                        </div>
                      </v-expansion-panel>-->
                    <div id="select-city">
                        <div class="general-input general-input-for-dropdown">
                            <div id="city-dropdown" class="general-dropdown">
                                <div class="general-dropdown-icon">
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </div>
                                <div class="general-dropdown-items">
                                  <select v-model="selectedCities[0]">
                                    <option disabled>Please select city</option>
                                    <option v-for="item in availableCities">{{item.name}}</option>
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
                                  <select v-model="firstSearchType">
                                    <option>Latest Jobs</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section v-if="!firstSearch" class="search">

                  <v-expansion-panel popout>
                    <div class="search-block">
                      <v-expansion-panel-content v-bind:value="item === 1" :key="1">
                        <div slot="header" v-if="!selectedCities[0]">
                          Select City
                        </div>
                        <div slot="header" v-else-if="selectedCities.length > 1">
                          {{ selectedCities.length }} cities selected
                        </div>
                        <div slot="header" v-else>
                          {{ selectedCities[0] }}
                        </div>
                        <v-card v-for="(item, index) in availableCities">
                          <v-card-text class="lighten-3">
                            <input v-bind:id="'c'+index"type="checkbox" :value="item.name" v-model="selectedCities">
                            <label v-bind:for="'c'+index">{{ item.name }}</label>
                          </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                    </div>
                    <div class="search-block">
                      <v-expansion-panel-content v-bind:value="item === 2" :key="2">
                        <div slot="header" v-if="!selectedTypes[0]">
                          Select type
                        </div>
                        <div slot="header" v-else-if="selectedTypes.length > 1">
                          {{ selectedTypes.length }} types selected
                        </div>
                        <div slot="header" v-else>
                          {{ selectedTypes[0] }}
                        </div>
                        <v-card v-for="(item, index) in availableTypes">
                          <v-card-text class="lighten-3">
                            <input v-bind:id="'t'+index" type="checkbox" :value="item.name" v-model="selectedTypes">
                            <label v-bind:for="'t'+index">{{ item.name }}</label>
                          </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                    </div>
                    <div class="search-block">
                      <v-expansion-panel-content v-bind:value="item === 3" :key="3">
                        <div slot="header" v-if="!selectedPositions[0]">
                          Select positions
                        </div>
                        <div slot="header" v-else-if="selectedPositions.length > 1">
                          {{ selectedPositions.length }} positions selected
                        </div>
                        <div slot="header" v-else>
                          {{ selectedPositions[0] }}
                        </div>
                        <v-card v-for="(item, index) in availablePositions">
                          <v-card-text class="lighten-3">
                            <input v-bind:id="'p'+index" type="checkbox" :value="item.name" v-model="selectedPositions">
                            <label v-bind:for="'p'+index">{{ item.name }}</label>
                          </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                    </div>
                    <div class="search-block">
                      <v-expansion-panel-content v-bind:value="item === 4" :key="4">
                        <div slot="header" v-if="!selectedShifts[0]">
                          Select shifts
                        </div>
                        <div slot="header" v-else-if="selectedShifts.length > 1">
                          {{ selectedShifts.length }} shifts selected
                        </div>
                        <div slot="header" v-else>
                          {{ selectedShifts[0] }}
                        </div>
                        <v-card v-for="(item, index) in availableShifts">
                          <v-card-text class="lighten-3">
                            <input v-bind:id="'s'+index" type="checkbox" :value="item.name" v-model="selectedShifts">
                            <label v-bind:for="'s'+index">{{ item.name }}</label>
                          </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                    </div>
                  </v-expansion-panel>

                </section>

                <input class="hidden-input" id="submit" type="submit" value="GO">
                <div id="general-submit" @click="searchGo">
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
    <button >Test</button>
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
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueApollo from 'vue-apollo';

Vue.use(Vuetify);
Vue.use(VueApollo);

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
      availableCities: [
        { name: 'Irvine, CA' },
        { name: 'Los Angeles, CA' },
        // load from database
      ],
      availablePositions: [
        { name: 'Frontend developer' },
        { name: 'Vue.js developer' },
        // load from database
      ],
      availableTypes: [
        { name: 'Full time' },
        { name: 'Part time' },
        { name: 'Internship' },
        { name: 'Freelance' },
        { name: 'Contract' },
        { name: 'Temporary' },
        { name: 'Seasonal' },
      ],
      availableShifts: [
        { name: 'Morning' },
        { name: 'Noon' },
        { name: 'Afternoon' },
        { name: 'Evening' },
        { name: 'Mid-night' },
      ],
      firstSearch: true,
      firstSearchType: 'Latest Jobs',
      selectedCities: ['Please select city'],
      selectedTypes: [],
      selectedPositions: [],
      selectedShifts: [],
    };
  },
  methods: {
    searchGo() {
      if (this.selectedCities !== []) {
        this.firstSearch = false;
      }
    },
  },
};

</script>
<!--<script src="../Component.js"></script>-->
