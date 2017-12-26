<style>
.container {
  background-color: #fff;
}
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
.firstSearch .input-group__details{
  display: none !important;
}
.search .input-group--select .input-group__input {
  padding: 0 16px;
  height: 48px;
  flex: 1 0 100%;
}
.search .input-group--select {
  padding-top: 0;
  height: 48px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.list__tile__action .checkbox .input-group__input {
  padding-top: 6px;
}
.home-page-cont .list__tile__title {
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
.search .input-group--select.input-group--single-line label {
  top: 8px;
  left: 16px;
}
/* .input-group--multiple .input-group__selections > div {
  position: absolute;
  top: 4px;
} */

.input-group--text-field.input-group--dirty.input-group--select label,
.input-group--text-field.input-group--dirty:not(.input-group--textarea) label {
      transform: translate3d(0,-28px,0) scale(.75);
}
.chip--select-multi {
  margin: 5px 5px 5px 0;
}
.firstSearch {
  padding: 32px 64px;
}
.fsGoBtn {
  height: 48px;
  background-color: #ef5350;
  text-align: center;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
}
.fsSelect {
  height: 48px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  border-radius: 6px 0 0 6px;
  margin-left: 1px;
}
.firstSearch .fsSelect .input-group__input {
  padding-left: 16px !important;
}
.firstSearch .fsSelect label {
  top: 7px;
  left: 16px;
}
.firstSearch .fsSelect i {
  padding: 8px !important;
}
.firstSearch h1 {
  font-weight: 400;
}
.no-padding {
  padding: 0;
}
@media (min-width: 601px) {
  .firstSearch h1 {
    font-size: 32px;
  }
}
@media (max-width: 600px) {
  .firstSearch {
    padding: 32px 10px;
  }
  #banner {
    display: none;
  }
}
</style>

<template>
  <v-container fluid class="home-page-cont">
      <div class="main-cont-large">
            <form>
              <section class="firstSearch" v-if="firstSearch">
                <div style="padding-bottom: 30px; text-align: right;">
                  <h1 style="color: #ef5350;">Kunvet</h1>
                  <h1 style="color: #333;">Nearby jobs for students like you</h1>
                </div>
                <v-layout v-if="firstSearch" align-center row spacer slot="header" style="padding-bottom: 10px;">
                  <v-flex xs8 sm6 offset-sm4
                  no-wrap class="grey--text no-padding" ellipsis>
                      <v-select class="no-padding fsSelect"
                        label="Please select city"
                        v-bind:items="availableCities"
                        v-model="selectedCities"
                        autocomplete
                        single-line
                        hide-details
                      >
                      </v-select>
                  </v-flex>
                  <v-flex xs4 sm2 class="no-padding fsGoBtn" @click="searchGo">
                    <p style="color: white; line-height: 48px; font-size: 16px;">Go</p>
                  </v-flex>
                </v-layout>
              </section>

                <section v-if="!firstSearch" class="search">
                  <v-layout row wrap>
                    <v-flex xs12 sm6 :key="1">
                      <v-select
                        label="Select city"
                        v-bind:items="availableCities"
                        v-model="selectedCities"
                        single-line
                        hide-details
                        autocomplete>
                      </v-select>
                    </v-flex>
                    <v-flex xs12 sm6 :key="2">
                      <v-select
                        label="Select types"
                        v-bind:items="availableTypes"
                        v-model="selectedTypes"
                        chips
                        autocomplete
                        single-line
                        hide-details
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
                        single-line
                        hide-details
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
                        single-line
                        hide-details
                        multiple>
                      </v-select>
                    </v-flex>
                  </v-layout>
                </section>

                <input v-if="!firstSearch" class="hidden-input" id="submit" type="submit" value="GO">
                <div v-if="!firstSearch" id="general-submit" @click="searchGo">
                    <div id="general-submit-default">
                        <span>GO</span>
                    </div>
                    <div id="general-submit-error">
                        <span id="general-submit-error-msg"></span>
                    </div>
                </div>
            </form>

      <v-layout row wrap v-if="!firstSearch">
        <div class="post-card" v-for="(job, index) in findJobs" :key="index" xs12>
          <v-layout align-center row spacer slot="header" style="padding-bottom: 10px;">
            <v-flex xs2 class="no-padding">
              <v-avatar size="36px" slot="activator">
                <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
              </v-avatar>
            </v-flex>
            <v-flex no-wrap class="grey--text no-padding" ellipsis>
              <strong>{{ job.posted_by }}</strong>
            </v-flex>
          </v-layout>

          <router-link :to="'JobDetail/'+job._id">
          <div class="top-container">
          <div class="float-left">
            <h1 style="font-weight: normal;">{{ job.title }}</h1>
          </div>
          <div class="float-right">
            <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
              <v-icon class="bookmark-icon">bookmark_border</v-icon>
            </v-btn>
          </div>
        </div>
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


          <p class="post-address"><v-icon>location_city</v-icon> {{ job.address }}</p>
          <p class="post-intro"><v-icon>sms</v-icon> {{ job.description }}</p>
          <p class="post-intro"><v-icon>info</v-icon> {{ job.description }}</p>
          <p class="post-intro"><v-icon>account_circle</v-icon> {{ job.description }}</p>
          <div class="image-row">
              <!-- insert gallary here -->
              <img style="max-width: 100%;" src="https://pbs.twimg.com/profile_images/575042635171172352/kP-VewoF_400x400.png"></img>
          </div>
          </router-link>
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
import Store from '../store';
import VuexLS from '../store/persist';

Vue.use(Vuetify);
Vue.use(VueApollo);

export default {
  apollo: {
    findJobs: gql`{
      findJobs {
          _id
          posted_by
          title
          description
          type
          address
      }
    }`,
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
      firstSearch: Store.state.firstSearch,
      firstSearchType: 'Latest Jobs',
      selectedCities: Store.state.selectedCities,
      selectedTypes: Store.state.selectedTypes,
      selectedPositions: Store.state.selectedPositions,
      selectedShifts: Store.state.selectedShifts,
      vuextest: Store.state.count,
    };
  },
  methods: {
    searchGo() {
      if (this.selectedCities[0]) {
        this.firstSearch = false;
        Store.commit('go');
        this.commitData();
      }
    },
    commitData() {
      Store.commit({
        type: 'keepSearch',
        sCities: this.selectedCities,
        sTypes: this.selectedTypes,
        sPositions: this.selectedPositions,
        sShifts: this.selectedShifts,
      });
    },
  },
  beforeDestroy() {
    this.commitData();
  },
  created() {
    VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
      if (data) {
        this.firstSearch = data.firstSearch;
        this.selectedCities = data.selectedCities;
        this.selectedPositions = data.selectedPositions;
      }
    });
  },
};

</script>
