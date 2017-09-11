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
.search .flex {
  padding: 10px 15px;
}
.input-group--select {
  height: 66px;
}
.search .input-group__details{
  display: none !important;
}
.search .input-group--select .input-group__input {
  padding: 0 16px;
  height: 48px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.list__tile__action .checkbox .input-group__input {
  padding-top: 6px;
}
.list__tile__title {
  color: #616161 !important;
}
.search .input-group--select i.icon {
  padding: 8px 0;
}
.search .input-group__selections {
  padding-top: 3px;
  padding-bottom: 3px;
  overflow: auto !important;
}
.search .input-group--select label {
  top: 26px;
  left: 16px;
}
.input-group--text-field.input-group--dirty.input-group--select label,
.input-group--text-field.input-group--dirty:not(.input-group--textarea) label {
      transform: translate3d(0,-28px,0) scale(.75);
}
.chip--select-multi {
  margin: 5px 5px 5px 0;
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
                  <div id="select-city">
                    <v-select
                      label="Please select city"
                      v-bind:items="availableCities"
                      v-model="selectedCities"
                      multiple
                      autocomplete
                      chips
                      single-line
                      hide-details>
                    </v-select>
                  </div>
                  <div id="select-type">
                    <v-select
                      label="Type of jobs"
                      v-bind:items="firstSearchTypes"
                      v-model="firstSearchType"
                      single-line
                      hide-details>
                    </v-select>
                  </div>
                    <!--<v-layout>
                      <v-flex xs12 sm6 :key="1">

                      </v-flex>

                      <v-flex :key="2">
                              <v-select
                                label="Latest Jobs"
                                v-bind:items="firstSearchTypes"
                                v-model="firstSearchType"
                                chips>
                              </v-select>
                      </v-flex>
                    </v-layout>-->

                    <!--<div id="select-city">

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
                    </div>-->
                </section>

                <section v-if="!firstSearch" class="search">
                  <v-layout row wrap>
                    <v-flex xs12 sm6 :key="1">
                      <v-select
                        label="Select city"
                        v-bind:items="availableCities"
                        v-model="selectedCities"
                        chips
                        autocomplete
                        multiple>
                      </v-select>
                    </v-flex>
                    <v-flex xs12 sm6 :key="2">
                      <v-select
                        label="Select types"
                        v-bind:items="availableTypes"
                        v-model="selectedTypes"
                        chips
                        autocomplete
                        multiple>
                      </v-select>
                    </v-flex>
                    <v-flex xs12 sm6 :key="3">
                      <v-select
                        label="Select positions"
                        v-bind:items="availablePositions"
                        v-model="selectedPositions"
                        chips
                        autocomplete
                        multiple>
                      </v-select>
                    </v-flex>
                    <v-flex xs12 sm6 :key="4">
                      <v-select
                        label="Select shifts"
                        v-bind:items="availableShifts"
                        v-model="selectedShifts"
                        chips
                        autocomplete
                        multiple>
                      </v-select>
                    </v-flex>
                  </v-layout>
                  <!--<div class="search-block">
                    <v-select
                      label="Select city"
                      v-bind:items="availableCities"
                      v-model="selectedCities"
                      chips
                      multiple>
                    </v-select>
                  </div>
                  <div class="search-block">
                    <v-select
                      label="Select types"
                      v-bind:items="availableTypes"
                      v-model="selectedTypes"
                      chips
                      multiple>
                    </v-select>
                  </div>-->
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
      firstSearchTypes: [
        'Latest jobs',
      ],
      availableCities: [
        'Irvine, CA',
        'Los Angeles, CA',
        // load from database
      ],
      availablePositions: [
        'Frontend developer',
        'Vue.js developer',
        // load from database
      ],
      availableTypes: [
        'Full time',
        'Part time',
        'Internship',
        'Freelance',
        'Contract',
        'Temporary',
        'Seasonal',
      ],
      availableShifts: [
        'Morning',
        'Noon',
        'Afternoon',
        'Evening',
        'Mid-night',
      ],
      firstSearch: true,
      firstSearchType: 'Latest Jobs',
      selectedCities: [],
      selectedTypes: [],
      selectedPositions: [],
      selectedShifts: [],
    };
  },
  methods: {
    searchGo() {
      if (this.selectedCities[0]) {
        this.firstSearch = false;
      }
    },
  },
};

</script>
<!--<script src="../Component.js"></script>-->
