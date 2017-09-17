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
.firstSearch {
  padding: 32px;
}
.no-padding {
  padding: 0;
}
@media (max-width: 600px) {
  .firstSearch {
    padding: 32px 0px;
  }
  #banner {
    display: none;
  }
}
</style>

<template>
  <v-container fluid>
      <div class="main-cont-large">
            <div v-if="firstSearch" id="banner">
            </div>
            <form>
                <section v-if="firstSearch" class="search firstSearch">

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

      <v-layout row wrap v-if="!firstSearch">
          <div class="post-card" v-for="(job, index) in jobs" :key="index" xs12>
            <v-layout align-center row spacer slot="header" style="padding-bottom: 10px;">
              <v-flex xs2 class="no-padding">
                <v-avatar size="36px" slot="activator">
                  <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
                </v-avatar>
              </v-flex>
              <v-flex no-wrap class="grey--text no-padding" ellipsis>
                <strong>John Leider inc</strong>
              </v-flex>
            </v-layout>
            <div>
              <h1 style="font-weight: normal;">{{ job.name }}</h1>
            </div>
            <p class="post-intro">{{ job.description }}</p>
            <v-layout row wrap class="image-row">
              <v-flex xs6 style="padding-left: 0;">
                <p class="post-address">{{ job.address }}</p>
              </v-flex>
              <v-flex xs6 style="padding-right: 0;">
                <!-- insert gallary here -->
                <img style="max-width: 100%;" src="https://pbs.twimg.com/profile_images/575042635171172352/kP-VewoF_400x400.png"></img>
              </v-flex>
            </v-layout>
          </div>
      </v-layout>

    </div>
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
        console.log(this.jobs);
      }
    },
  },
};

</script>
<!--<script src="../Component.js"></script>-->
