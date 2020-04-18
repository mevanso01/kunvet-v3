<style lang="scss">
.promo-block {
  p {
    font-size: 1.2em;
  }
  h2 {
    font-size: 1.5em;
  }
}
section.search,
section.search > .main-cont-large {
  background-color: white;
}
section.search {
  width: 100%;
  margin: 0 0 10px 0;
  .custom-select-2,
  .search-params-field {
    // box-shadow: 3px 6px 20px rgba(177, 176, 176, .1);
    border-radius: 4px;
    height: 56px;
    border: 1px solid rgba(177, 176, 176, 0.4);
    .v-input__control {
      height: 54px; // to help with border
    }
    // box-shadow: 0 10px 12px -4px #eaeaf9;
    // -webkit-box-shadow: 0px 0px 5px 0px rgba(77,77,77,0.5);
    // -moz-box-shadow: 0px 0px 5px 0px rgba(77,77,77,0.5);
    // box-shadow: 0px 0px 5px 0px rgba(77,77,77,0.5);
    // outline: none !important;
    // border-radius: none;
  }
  .custom-select-2-wrapper,
  .v-input__slot {
    height: 56px;
  }
  .custom-select-2 .inner {
    height: 56px;
    max-height: 56px;
  }
  .custom-select-2 span {
    line-height: 56px;
  }
  .custom-select-2 .v-btn {
    top: 4px;
  }
  .search-row {
    padding-top: 16px;
    display: flex;
    flex-direction: row;
  }
  .search-field-cont,
  .search-go-cont {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .search-go-cont {
    width: 56px;
  }
  .search-field-cont {
    width: calc(50% - 26px); // 26px for go btn, 15 for padding
    padding-right: 15px;
  }
}
.job-distance-indicator {
  clear: both;
  display: inline-block;
  background: #ef5350; // as fallback
  background: linear-gradient(to right, #ef5350, #ef5350 25%, #ffc26f);
  color: #fff;
  margin-top: 16px;
  padding-left: 24px;
  // vvv mobile styles vvv
  padding-right: 24px;
  height: 28px;
  line-height: 28px;
  border-radius: 0 14px 14px 0;
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
/* --- old selects --- */
.search .v-input-group--select .v-input-group__input {
  padding: 0 16px;
  height: 48px;
  flex: 1 0 100%;
}
.search .v-input-group--select {
  padding-top: 0;
  height: 48px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.v-list__tile__action .checkbox .v-input-group__input {
  padding-top: 6px;
}
.home-page-cont .list__tile__title {
  color: #616161 !important;
}
.search .v-input-group--select i.icon {
  padding: 8px 0;
}
.search .v-input-group__selections {
  padding-top: 3px;
  padding-bottom: 3px;
  overflow: auto !important;
}
.search .v-input-group--select.v-input-group--single-line label {
  top: 8px;
  left: 16px;
}
/* --- new selects --- */
.search .menu {
  width: 100%;
}

.input-group--text-field.input-group--dirty.input-group--select label,
.input-group--text-field.input-group--dirty:not(.input-group--textarea) label {
      transform: translate3d(0,-28px,0) scale(.75);
}
.chip--select-multi {
  margin: 5px 5px 5px 0;
}
// .small-thats-it, .large-thats-it {
//   background-color: #fafafa;
// }
@media only screen and (max-width: 480px) {
  .fs-select-positions {
    display: none !important;
  }
}
@media only screen and (min-width: 481px) {
  .fs-select-cities,
  .fs-select-positions {
    width: 50%;
    float: left;
    display: inline-block;
  }
  .fs-select-cities {
    width: 100%; /* use only when positions is not present */
  }
  .firstSearch .fsSelect .input-group__input {
    padding-top: 3px;
  }
  .fs-select-cities .input-group__selections {
    height: 40px !important;
  }
}
.fs-select-positions {
  width: 50%;
  display: inline-block;
}
.fs-select-positions .input-group__selections {
  height: 38px;
  overflow: auto !important;
}
.no-padding {
  padding: 0;
}
.search .input-group__details {
  display: none;
}
.city-img-holder {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
.bottom-row {
  position: absolute;
  bottom: 30px;
  width: calc(100% - 52px);
}
.bottom-img {
  position: absolute;
  bottom: 0;
  width: calc(100% - 52px);
}
.bottom-row .skew-div {
  margin: auto;
  padding: 8px 0;
  width: 400px;
  position: relative;
}
.bottom-row .skew-div p {
  margin: 0;
}
.bottom-row .skew-div::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(0,0,0,.05);
  right: 0;
  top: 0;
  transform: skew(-30deg);
}
.no-jobs-found-box {
  width: 100%;
  height: 125px;
  // background: linear-gradient(135deg, #fafafa, #f5f5f5);
  // background-image: linear-gradient(135deg, rgb(250, 250, 250), rgb(245, 245, 245));
}
.search-params-field {
  height: 48px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 16px rgba(177, 176, 176, .1);
  position: relative;
  overflow-y: hidden;
  transition: all 0.3s ease;
  // padding: 0 24px;
  .v-input__slot {
    padding-right: 14px !important; // weird hack I need to do to align icon
  }
}

@media (min-width: 601px) {
  .large-thats-it {
    width: 100% !important;
  }
  .bottom-row {
    width: calc(100% - 128px);
  }
  .bottom-img {
    width: calc(100% - 128px);
  }
  .banner-mobile {
    display: none;
  }
}
@media (max-width: 600px) {
  section.search {
    .search-row {
      display: block;
    }
    .search-field-cont,
    .search-go-cont {
      padding: 10px 8px;
      width: 100%;
    }
  }
  .firstSearch {
    padding-left: 26px;
    padding-right: 26px;
    height: calc(100vh - 56px);
  }
  .banner-desktop {
    display: none;
  }
  #banner {
    display: none;
  }
  .home-page-cont {
    padding-left: 0;
    padding-right: 0;
  }
  .no-jobs-found-box {
    padding: 0 20px;
    height: 150px;
  }
  .suggestions-card {
    display: none;
  }
}
@media (min-width: 961px) {
  .job-distance-indicator {
    padding-left: calc(50% - 456px); // - 480 plus an extra 24px to align properly with job cards
    height: 32px;
    line-height: 32px;
    border-radius: 0 16px 16px 0;
    padding-right: 48px;
    background: linear-gradient(to right, #ef5350, #ef5350 60%, #ffc26f);
  }
  .firstSearch {
    height: calc(100vh - 64px);
  }
  .city-img-holder {
    padding: 0 48px;
  }
  section.search {
    padding: 16px 16px 16px 16px;
  }
  .bottom-img {
    width: calc(100% - 208px);
    margin: 0 40px;
  }
}
@media (min-width: 601px) and (max-width: 960px) {
  .firstSearch {
    height: calc(100vh - 64px);
  }
}
.algoliaLogo {
  // width: 960px;
  margin: 0 auto;
  padding: 4px 40px 8px 40px;
  opacity: 0.1;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.chip-container {
  display: inline-block;
  margin: 8px 2px;
}

.search-chip:hover{
  background-color: #ff6969;
  color: white;
  cursor: pointer;
}

.search-chip {
  border: 1px solid #ff6969;
  display: inline;
  padding: 6px;
  border-radius: 6px;
  color: #ff6969;
}

.suggestions-card {
  position: fixed;
  z-index: 1;
}

.job-alert-banner-columns{
  max-width: 1000px;
}

</style>

<template>
  <v-container fluid class="home-page-cont pa-0">
    <section class="search" style="padding-top: 64px;" v-on:keyup.enter="search()">
      <div class="main-cont-large">
        <div class="search-row d-none">
          <div class="search-field-cont">
            <div class="custom-select-2-wrapper">
              <div class="custom-select-2" v-bind:class="{ 'active': openSelectField === 'city' }">
                <div class="inner" @click="openSelect('city')">
                  <span v-if="selectedCity">{{ selectedCity }}</span>
                  <span v-else style="color: rgba(0,0,0,.54);">Select city or school</span>
                  <v-btn icon v-if="openSelectField === 'city'"><v-icon>keyboard_arrow_up</v-icon></v-btn>
                  <v-btn icon v-else><v-icon>keyboard_arrow_down</v-icon></v-btn>
                </div>

                <v-list dense class="custom-select-menu">
                  <v-list-tile style="padding: 0 8px;" @click="updateAndClose(item.name)" v-for="(item, i) in availableCities" :key="i">{{item.name}}</v-list-tile>
                </v-list>
              </div>
            </div>
          </div>
          <div class="search-field-cont" id="dropdown-header">
            <v-text-field
              class="search-params-field"
              solo
              flat
              hide-details
              :placeholder="searchPlaceholder"
              clearable
              v-model="query"
              @focus="searchFocus=true"
              @blur="searchFocus=false"
            ></v-text-field>
            <!--v-if="searchFocus && !query"-->
            <v-card v-show="searchFocus && !query" class="suggestions-card">
              <!--{{width}}-->
              <v-card-title>Try searching for...</v-card-title>
              <div style="padding: 0 0 20px 14px; max-width: 70%; position:
              absolute;">
                <div v-for="(job, index) in suggestedJobs"
                  :key="index"
                  class="chip-container"
                  @mousedown="query=job"
                >
                  <p class="search-chip">{{job}}</p>
                </div>
              </div>
            </v-card>
            <!--<p v-if="searchFocus && query">AUTOCOMPLETE</p>-->
            <!--<p v-if="searchFocus && !query">SUGGESTIONS UI</p>-->

          </div>


          <div class="search-go-cont">
            <button @click="search()" v-ripple class="mobile-hide kunvet-search-icon-btn small">
              <img src="@/assets/magnifier.svg" height="24px" style="margin-top:5px"/>
            </button>
            <k-btn @click="search()" block v-ripple class="mobile-show kunvet-search-btn">
              Search
            </k-btn>
          </div>
        </div>
        <div class="search-row">
          <JobSearch :inline_mode="true" :onClick="onClickJobSearch" ref="jobSearchForm" class="job-search" />
        </div>
      </div>
    </section>
    <div>
      <!-- <input class="hidden-input" id="submit" type="submit" value="GO">
      <div id="general-submit" @click="search()" v-ripple>
        <div id="general-submit-default">
          <span>SEARCH</span>
        </div>
        <div id="general-submit-error">
          <span id="general-submit-error-msg"></span>
        </div>
      </div> -->
      <v-layout row wrap>
        <div v-if="loadingJobs" style="width: 100%;">
          <h3 style="text-align: center; margin-top: 25px; margin-bottom: 25px;">Loading jobs...</h3>
        </div>
        <v-flex xs12 class="no-padding">
          <div v-if="displayedJobs[0].length > 0" style="clear: both;">
            <div class="job-distance-indicator">
              5 miles away
            </div>
            <div class="main-cont-large">
              <div v-for="(job, idx) in displayedJobs[0]" :key="`1-${idx}`">
                <MainJobCard
                  :job="job"
                  :saveJobFunc="saveJob"
                  :isSaved="isSaved(job._id)"
                  :fromCoordinates="selectedCoordinates"
                />
              </div>
            </div>
          </div>
          <div v-if="displayedJobs[1].length > 0" style="clear: both;">
            <div class="job-distance-indicator">
              10 miles away
            </div>
            <div class="main-cont-large">
              <div v-for="(job, idx) in displayedJobs[1]" :key="`2-${idx}`">
                <MainJobCard
                  :job="job"
                  :saveJobFunc="saveJob"
                  :isSaved="isSaved(job._id)"
                  :fromCoordinates="selectedCoordinates"
                />
              </div>
            </div>
          </div>
          <div v-if="displayedJobs[2].length > 0" style="clear: both;">
            <div class="job-distance-indicator">
              15 miles away
            </div>
            <div class="main-cont-large">
              <div v-for="(job, idx) in displayedJobs[2]" :key="`3-${idx}`">
                <MainJobCard
                  :job="job"
                  :saveJobFunc="saveJob"
                  :isSaved="isSaved(job._id)"
                  :fromCoordinates="selectedCoordinates"
                />
              </div>
            </div>
          </div>
          <div v-if="displayedJobs[3].length > 0" style="clear: both;">
            <div class="job-distance-indicator">
              20+ miles away
            </div>
            <div class="main-cont-large">
              <div v-for="(job, idx) in displayedJobs[3]" :key="`4-${idx}`">
                <MainJobCard
                  :job="job"
                  :saveJobFunc="saveJob"
                  :isSaved="isSaved(job._id)"
                  :fromCoordinates="selectedCoordinates"
                />
              </div>
            </div>
          </div>
        </v-flex>
        <div v-if="!loadingJobs && loadingJobs != null && !hasJobsShown" class="no-jobs-found-box">
          <h3 style="text-align: center; margin-top: 50px; color: #797979;">No matching jobs found. Please type in a different query or select a different location.</h3>
        </div>
        <div class="algoliaLogo" style="color: grey;">
          <ais-powered-by ></ais-powered-by>
        </div>
      </v-layout>

      <!-- <div v-if="newsLetterSignedUp===false && newsLetterProcessFinished === false" class="banner-desktop">
        <div class="main-cont-large">
          <div class="job-alert-banner-columns" style="padding: 60px 80px; border-top:5px solid red; background-color: #f6f6f8;">
            <div style="vertical-align: middle; column-width: 300px;  display: table-cell;">
              <img src="@/assets/woman with phone.png" style="width:300px; height: 396px; padding-right: 60px;"/>
            </div>
            <div style="width: 500px; display: table-cell; vertical-align: middle;">
              <NewsletterForm banner @post="onPost"/>
            </div>
          </div>
        </div>
      </div>
      <div v-if="newsLetterSignedUp===false && newsLetterProcessFinished === false" class="banner-mobile">
          <v-layout row wrap style="padding: 0px; border-top:5px solid red;">
            <v-flex xs12 md4 style="padding: 0px">
              <img src="@/assets/woman with phone gradiant.png" style="width: 100%;"/>
            </v-flex>
            <v-flex xs12 md8 style="padding:0px 50px 50px 50px; background-color: linear-gradient(to bottom, #ffffff, #f8f8f8));">
              <NewsletterForm banner @post="onPost"/>
            </v-flex>
          </v-layout>
      </div> -->
    </div>

    <!-- <v-dialog v-if="newsLetterSignedUp===false && newsLetterProcessFinished === false" v-model="dialogs.showJobAlertForm" max-width="500px">
      <v-card>
        <v-card-text style="margin: 0px; padding: 0px;">
          <NewsletterForm @close="onClickChild" @post="onPost"/>
        </v-card-text>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>
<script>
import { startCase, toLower } from 'lodash';
import apolloClient from '@/apollo/client';
import store from '@/store';
import Logger from '@/Logger';
import gql from 'graphql-tag';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import InformationSvg from '@/assets/job_posts/information.svg';
import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
import Asset70 from '@/assets/icons/Asset(70).svg';
import vc from '@/assets/vc.svg';
import MainJobCard from '@/components/MainJobCard';
import DisplayTextHelper from '@/utils/DisplayTextHelper';
import DistanceHelper from '@/utils/DistanceHelper';
import NewsletterForm from '@/components/newsLetterSubscribe';
import Coordinates from '@/constants/coordinates';
import positions from '@/constants/positions';
import locations from '@/constants/locations';
import searchTexts from '@/constants/search';
import intersection from 'lodash/intersection';
import difference from 'lodash/difference';
import findIndex from 'lodash/findIndex';
import uniq from 'lodash/uniq';
import queries from '@/constants/queries';
import EventBus from '@/EventBus';
import Config from 'config';
import algoliasearch from 'algoliasearch';
import userDataProvider from '@/userDataProvider';
import JobSearch from '@/components/JobSearch';

const algoliaConfig = Config.get('algolia');

let algoliaClient = null;
if (algoliaConfig.appId) {
  algoliaClient = algoliasearch(algoliaConfig.appId, algoliaConfig.searchApiKey);
}

Vue.use(VueApollo);

export default {
  metaInfo: {
    title: 'Search for Jobs | Kunvet',
    meta: [
      {
        name: 'description',
        content: 'Searching for jobs, but getting nowhere? Find only the most recent, up-to-date jobs near you, posted by employers hiring immediately!',
      },
    ],
  },
  components: {
    MainJobCard,
    NewsletterForm,
    JobSearch,
  },
  mounted() {
    const el = document.querySelector('#dropdown-header .v-input__slot');
    el.addEventListener('click', () => {
      this.setSearchWidth();
    });
    window.onresize = () => {
      this.setSearchWidth();
    };
    if (this.$route.query.p == null) {
      this.$route.query.p = 0;
    }
    // window.setTimeout(() => { this.dialogs.showJobAlertForm = true; }, 3000);
  },
  data() {
    return {
      width: 0,
      searchFocus: false,
      searchHasText: false,
      searchWidth: 0,
      uid: null,
      account_type: null,
      search_history: [],
      // findJobs: [],
      saved_jobs: [],
      filteredJobs: [],
      openSelectField: null,
      suggestedJobs: ['Developer', 'Marketing', 'Brand Ambassador', 'Caretaker', 'Tutor'],
      firstSearchTypes: [
        'Latest jobs',
      ],
      availableCities: locations.search_locations,
      filterPositions: '',
      availablePositions: positions,
      availableTypes: [
        { text: 'Full time', value: 'fulltime' },
        { text: 'Part time', value: 'parttime' },
        { text: 'Internship', value: 'internship' },
        { text: 'Contract', value: 'contract' },
      ],
      availableShifts: [
        { text: 'Morning', value: 'morning' },
        { text: 'Noon', value: 'noon' },
        { text: 'Afternoon', value: 'afternoon' },
        { text: 'Evening', value: 'evening' },
        { text: 'Mid-night', value: 'midnight' },
      ],
      // firstSearch: this.$store.state.firstSearch,
      firstSearchType: 'Latest Jobs',
      selectedCity: this.$store.state.selectedCity || 'Irvine - UC Irvine', // { lat: 33.6846, long: -117.8265 }, // this.$store.state.selectedCity,
      selectedTypes: this.$store.state.selectedTypes || [],
      selectedPositions: this.$store.state.selectedPositions || [],
      selectedShifts: this.$store.state.selectedShifts || [],
      selectedLat: Coordinates.uci.latitude,
      selectedLong: Coordinates.uci.longitude,
      dialogs: {
        showJobAlertForm: false,
      },
      svgs: {
        information: InformationSvg,
        locationMarker: LocationMarkerSvg,
        kunvetDude: Asset70,
        citySvg: vc,
      },
      selectedPositionsInital: 'All / Any',
      loadingJobs: null,
      inUsePositions: [],
      inUseTypes: [],
      pageSize: 12,
      query: '',
      page: 0,
      displayedJobs: [[], [], [], []],
      searchPlaceholder: '',
      newsLetterSignedUp: false,
      newsLetterProcessFinished: false,
    };
  },
  apollo: {
    findJobs: {
      query: gql`query ($limit: Int!, $skip: Int!) {
        findJobs (filter: { active: true, is_deleted: false, expired: false }, limit: $limit, skip: $skip ){
          ${queries.FindJobRecordForJobCard}
        }
      }`,
      variables: {
        limit: 20,
        skip: 0,
      },
    },
  },
  computed: {
    filteredAvailablePositionsObj() {
      let str = this.filterPositions;
      if (!str || str === '') {
        return this.availablePositionsObj;
        // return this.selectedPositions.concat(difference(this.availablePositions, this.selectedPositions));
      }
      str = str.toLowerCase();
      return this.availablePositionsObj.filter(item => item.text.toLowerCase().indexOf(str) !== -1);
    },
    availablePositionsObj() {
      // if we are manually supplying the positions in use
      // also gets updated by jobs that are fetched
      if (this.inUsePositions.length > 10) {
        return this.availablePositions.map((position) => {
          const disabled = (this.inUsePositions.indexOf(position) === -1);
          return {
            text: position,
            disabled,
          };
        });
      }
      // default return: return everything
      return this.availablePositions.map((position) => ({ text: position, disabled: false }));
    },
    availableTypesObj() {
      if (this.inUseTypes.length > 0) {
        return this.availableTypes.map((typeObj) => {
          typeObj.disabled = (this.inUseTypes.indexOf(typeObj.value) === -1);
          return typeObj;
        });
      }
      return this.availableTypes.map((typeObj) => {
        typeObj.disabled = false;
        return typeObj;
      });
    },
    availableShiftsObj() {
      return this.availableShifts.map((shiftObj) => {
        shiftObj.disabled = !this.filteredJobs.find(
          job => Array.isArray(job.shift) && job.shift.indexOf(shiftObj.value) !== -1,
        );
        return shiftObj;
      });
    },
    selectedCoordinates() {
      if (!this.selectedLat || !this.selectedLong) {
        return Coordinates.uci;
      }
      return { latitude: this.selectedLat, longitude: this.selectedLong };
    },
    hasJobsShown() {
      return !!this.displayedJobs.find(jobs => jobs.length);
    },
  },
  methods: {
    setSearchWidth() {
      const el = document.querySelector('#dropdown-header .v-input__slot');
      const width = window.getComputedStyle(el, null).width;
      if (document.querySelector('.suggestions-card')) {
        document.querySelector('.suggestions-card').style.width = width;
      }
    },
    onClickChild (value) {
      console.log('onClickChild is clicked');
      console.log(value); // someValue
      window.setTimeout(() => { this.dialogs.showJobAlertForm = false; }, 200);
    },
    onPost (value) {
      console.log('onPost is clicked');
      console.log(value); // someValue
      window.setTimeout(() => { this.newsLetterProcessFinished = true; });
    },
    // Randomly pick search search placeholder text
    getSearchPlaceholderText() {
      const textList = searchTexts.placeholderList;
      const idx = Math.floor(Math.random() * textList.length);
      return `Try: ${textList[idx]}`;
    },
    augmentedResults(results) {
      return results;
    },
    updateAndClose(city) {
      this.selectedCity = city;
      this.openSelectField = null;
    },
    openSelect(name) {
      this.filterPositions = null; // clear job filter text
      if (this.openSelectField === 'city') {
        // this.search();
        // this.filterJobs(); // filter jobs when city is closed
      }
      if (this.openSelectField === name) {
        this.openSelectField = null;
      } else {
        this.openSelectField = name;
      }
    },
    documentClick(e) {
      const selects = document.getElementsByClassName('custom-select-2-wrapper');
      const target = e.target;
      for (var el of selects) {
        if (el === target || el.contains(target)) { return; } // do not close
      }
      this.openSelect(null); // otherwise, close
    },
    // setSelectedLatlongs() {
    //   const latlongs = this.getCityCoordinates();
    //   this.selectedLat = latlongs.latitude;
    //   this.selectedLong = latlongs.longitude;
    // },
    getCityCoordinates() {
      const selected = locations.search_locations.find(el => el.name === this.selectedCity);
      if (!selected) {
        this.$debug('Location not found');
        return Coordinates.uci;
      }
      this.$debug('Selected', selected);
      return { latitude: selected.latitude, longitude: selected.longitude };
    },
    findAndFilterJobs() {
      // process user's filters
      this.commitData();
      let selectedTypes = [];
      let selectedTypes2 = [];
      if (this.selectedTypes.length === 0) {
        selectedTypes = ['fulltime', 'parttime'];
        selectedTypes2 = ['internship', 'contract'];
      } else {
        for (let i = 0; i < this.selectedTypes.length; i++) {
          if (['fulltime', 'parttime'].indexOf(this.selectedTypes[i]) >= 0) {
            selectedTypes.push(this.selectedTypes[i]);
          }
          if (['internship', 'contract'].indexOf(this.selectedTypes[i]) >= 0) {
            selectedTypes2.push(this.selectedTypes[i]);
          }
        }
      }
      // refilter filteredJobs
      if (this.filteredJobs && this.filteredJobs.length > 0) {
        for (var index = 0; index < this.filteredJobs.length; index++) {
          const job = this.filteredJobs[index];
          if (!job) {
            this.$debug('filteredJobs index out of bounds');
            break;
          }
          if (!this.filterJobByInfo(job, selectedTypes, selectedTypes2)) {
            this.filteredJobs.splice(index, 1);
            index -= 1;
          }
        }
      }
      // fetch the jobs
      this.$apollo.queries.findJobs.fetchMore({
        variables: {
          limit: 12,
          skip: 12 * this.page,
        },
        updateQuery(previousResult, { fetchMoreResult }) {
          return fetchMoreResult;
        },
      }).then((res) => {
        this.loadingJobs = false;
        const fetchedJobs = res.data.findJobs;
        this.page += 1;
        if (fetchedJobs.length > 0) {
          // const newFilteredJobs = [];
          const newPositions = [];
          for (var job of fetchedJobs) {
            if (
              this.filterJobByInfo(job, selectedTypes, selectedTypes2) &&
              (findIndex(this.filteredJobs, { '_id': job._id }) === -1)
            ) {
              // newFilteredJobs.push(job);
              const distance = this.computeDistance(job.latitude, job.longitude);
              if (distance <= 5) {
                this.displayedJobs[0].push(job);
              } else if (distance <= 10) {
                this.displayedJobs[1].push(job);
              } else if (distance <= 20) {
                this.displayedJobs[2].push(job);
              } else {
                this.displayedJobs[3].push(job);
              }
            }
            for (var pos of job.position_tags) {
              newPositions.push(pos);
            }
          }
          this.inUsePositions = uniq(this.inUsePositions.concat(newPositions));
          // this.filteredJobs = this.filteredJobs.concat(newFilteredJobs);
          // this.filteredJobs.sort((a, b) => this.compareDistanceAndDate(a, b));
          // find more jobs there are more to be found
          if (fetchedJobs.length === this.pageSize) {
            this.findAndFilterJobs();
          } else {
            // NEW
            this.insertDistanceLabels();
          }
        }
      });
    },
    filterJobByInfo(job, selectedTypes, selectedTypes2) {
      if (
        !intersection(selectedTypes, job.type).length &&
        !intersection(selectedTypes2, job.type2).length
      ) {
        return false;
      }
      if (this.selectedPositions.length > 0) {
        if (!intersection(this.selectedPositions, job.position_tags).length) {
          return false;
        }
      }
      if (this.selectedShifts.length > 0) {
        if (!intersection(this.selectedShifts, job.shift).length) {
          return false;
        }
      }
      return true;
    },
    reorderAvailablePositions() {
      this.availablePositions = this.selectedPositions.concat(difference(this.availablePositions, this.selectedPositions));
    },
    computeSelectString(property, original = null) {
      let items = property;
      if (typeof items[0] === 'object') {
        items = items.map(x => x.text);
      } else if (original && typeof original === 'string') {
        items = property.map(val => {
          const obj = this[original].find(el => el.value === val);
          return obj.text;
        });
      }
      if (items.length <= 2) {
        return items.join(', ');
      }
      return `${items[0]}, ${items[1]}, +${items.length - 2}`;
    },
    getDistance(lat, long) {
      return `${this.computeDistance(lat, long)} miles away`;
    },
    computeDistance(lat, long) {
      const coordinates = this.selectedCoordinates;
      return DistanceHelper.computeDistance(
        {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        },
        {
          latitude: lat,
          longitude: long,
        },
      );
    },
    compareDistanceAndDate(a, b) {
      const distanceA = this.computeDistance(a.latitude, a.longitude);
      const distanceB = this.computeDistance(b.latitude, b.longitude);
      if ((distanceA <= 10 && distanceB <= 10) || (distanceA > 10 && distanceB > 10)) {
        return Date.parse(b.date) - Date.parse(a.date);
      }
      return distanceA - distanceB;
    },
    filterJobByDistance(job) {
      const distance = this.computeDistance(job.latitude, job.longitude);
      if (distance > 20) {
        this.removeJob(job);
        return false;
      }
      return true;
    },
    removeJob(job) {
      if (this.filteredJobs) {
        const index = findIndex(this.filteredJobs, { '_id': job._id });
        if (index !== -1) {
          this.filteredJobs.splice(index, 1);
        }
      }
    },
    sanitizeSalary(salary) {
      if (typeof salary === 'number') {
        return salary.toFixed(2).toString();
      }
      return '';
    },
    parseJobIntoMainInfo(job) {
      return DisplayTextHelper.getMainJobInfo(job);
    },
    commitData() {
      this.$store.commit({
        type: 'keepSearch',
        sCities: this.selectedCity,
        query: this.query,
      });
    },
    async saveJob(id) {
      const userData = await userDataProvider.getUserData();

      if (userData.acct === 0) {
        this.$log('Could not save - No user ID');
        return;
      }
      if (this.saved_jobs.indexOf(id) === -1) {
        this.saved_jobs.push(id);
      } else {
        const index = this.saved_jobs.indexOf(id);
        if (index !== -1) {
          this.saved_jobs.splice(index, 1);
        }
      }
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
      }).then(() => {
        this.$store.commit({
          type: 'keepUserdata',
          userdata: {
            saved_jobs: this.saved_jobs,
          },
        });
      }).catch((error) => {
        this.$error(error);
      });
    },
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
      }).then((data) => {
        const res = data.data.findAccount;
        if (res.saved_jobs) {
          this.saved_jobs = res.saved_jobs.concat([]);
        }
      }).catch((error) => {
        this.$error(error);
      });
    },
    isSaved(id) {
      return this.saved_jobs.indexOf(id) > -1;
    },
    async algoliaSearch() {
      const coordinates = this.selectedCoordinates;
      const query = this.query || '';
      this.$debug(coordinates);
      const requests = [{
        params: {
          query: `${query}`,
          page: this.page,
          aroundLatLng: `${coordinates.latitude}, ${coordinates.longitude}`,
        },
        indexName: 'jobs',
      }];
      const results = await algoliaClient.search(requests);
      const res = results.results[0];
      // if (res.page === 0) {
      //   this.filteredJobs = res.hits;
      // } else {
      //   this.filteredJobs = this.filteredJobs.concat(res.hits);
      // }
      for (const job of res.hits) {
        if (job.active && !job.expired && !job.is_deleted) {
          job.date = new Date(Number(job.date) * 1000);
          const distance = this.computeDistance(job.latitude, job.longitude);
          if (distance <= 5) {
            this.displayedJobs[0].push(job);
          } else if (distance <= 10) {
            this.displayedJobs[1].push(job);
          } else if (distance <= 20) {
            this.displayedJobs[2].push(job);
          } else {
            this.displayedJobs[3].push(job);
          }
        }
      }
      this.loadingJobs = false;
      if (res.page < (res.nbPages - 1) && this.page < 3) {
        this.page += 1;
        this.algoliaSearch();
      }
      // else {
      //   this.insertDistanceLabels();
      // }
    },
    insertDistanceLabels() {
      let miles = 10;
      let idx = 0;
      if (this.filteredJobs.length > 0 && this.computeDistance(this.filteredJobs[0].latitude, this.filteredJobs[0].longitude) < 10) {
        this.filteredJobs.splice(0, 0, { miles_away: '10' });
        idx += 1;
        miles += 10;
      }
      for (; idx < this.filteredJobs.length; idx++) {
        const job = this.filteredJobs[0];
        if (this.computeDistance(job.latitude, job.longitude) > miles) {
          this.filteredJobs.splice(idx, 0, { miles_away: miles.toString() });
          miles += 10;
        }
      }
      this.$debug(this.filteredJobs);
    },
    rawSearch() {
      this.$debug('Started rawSearch');
      // this.setSelectedLatlongs();
      this.loadingJobs = true;
      this.displayedJobs = [[], [], [], []];

      if (process.env.NODE_ENV === 'development') {
        // Local DB
        console.log('Loading jobs from local db'); // this is left as console.log on purpose
        this.findAndFilterJobs();
      } else if (algoliaClient) {
        // Algolia
        this.algoliaSearch();
      } else {
        // No usable backend is available
        this.$error('No usable search backend');
        this.loadingJobs = false;
      }
    },
    onClickJobSearch(job, query) {
      const isValidAddress = job.addressValid && job.address && job.addressList.length > 0;
      if (!isValidAddress) return;
      this.query = query;
      if (job.latitude && job.longitude) {
        this.selectedLat = job.latitude;
        this.selectedLong = job.longitude;
      } else {
        this.selectedLat = Coordinates.uci.latitude;
        this.selectedLong = Coordinates.uci.longitude;
      }
      this.page = 0;
      let title = 'Search for Jobs';
      if (this.query && job.address) {
        title = `${startCase(toLower(this.query))} jobs near ${job.address}`;
      }
      this.$setTitle(title);
      this.rawSearch();
      // save search location if logged in
      if (((!isNaN(job.latitude) && !isNaN(job.longitude)) || query) && this.uid && this.account_type === 'student') {
        this.search_history.unshift({
          'latitude': !isNaN(job.latitude) ? Number(job.latitude) : '',
          'longitude': !isNaN(job.longitude) ? Number(job.longitude) : '',
          'query': query || '',
        });
        if (this.search_history.length > 20) {
          this.search_history.pop();
        }
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
              search_history: this.search_history,
            },
          },
          refetchQueries: [{
            query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
              _id
              search_history {
                latitude
                longitude
                query
              }
            }
          }`),
            variables: {
              uid: this.uid,
            },
          }],
        }).then(() => {
          this.$store.commit({
            type: 'keepUserdata',
            userdata: {
              search_history: this.search_history,
            },
          });
        }).catch((error) => {
          this.$error(error);
        });
      }
    },
    getSearchHistory() {
      this.$apollo.query({
        query: (gql`query ($uid: MongoID) {
        findAccount (filter: {
          _id: $uid
        }) {
          _id
          search_history {
            latitude
            longitude
            query
          }
        }
      }`),
        variables: {
          uid: this.uid,
        },
      }).then((data) => {
        const res = data.data.findAccount;
        if (res && res.search_history) {
          this.search_history = res.search_history.concat([]);
        }
      }).catch((error) => {
        this.$error(error);
      });
    },
  },
  deactivated() {
    this.commitData();
    document.removeEventListener('click', this.documentClick, { passive: true });
  },
  created() {
    EventBus.$on('deletedJob', id => {
      if (this.filteredJobs && this.filteredJobs.length > 0) {
        const index = findIndex(this.filteredJobs, { '_id': id });
        if (index !== -1) {
          this.filteredJobs.splice(index, 1);
        }
      }
      if (this.displayedJobs) {
        for (let i = 0; i < 4; i++) {
          const index = findIndex(this.displayedJobs[i], { '_id': id });
          if (index !== -1) {
            this.displayedJobs[i].splice(index, 1);
          }
        }
      }
    });
  },
  activated() {
    // this.setSelectedLatlongs();
    if (this.$route.params.query) {
      // Do SearchForm Init && Job Search
      this.selectedLat = this.$route.query.latitude || Coordinates.uci.latitude;
      this.selectedLong = this.$route.query.longitude || Coordinates.uci.longitude;
      this.page = 0;

      const [position, location] = this.$route.params.query.split('-jobs-near-');
      if (position && location) {
        this.$refs.jobSearchForm.setDefaultValues({
          q: position.split('/').join('-').split('-').join(' '),
          address: location.split(',').join('').split('-').join(' '),
        });
      }
      this.rawSearch();
    }
    document.addEventListener('click', this.documentClick, { passive: true });
    this.searchPlaceholder = this.getSearchPlaceholderText();
  },
  async beforeRouteEnter (to, from, next) {
    userDataProvider.getUserData().then(udata => {
      if (!to.params.query) {
        return next({ name: 'Homepage' });
      }

      const getSavedJobs = uid => apolloClient.query({
        query: (gql`query ($uid: MongoID) {
          findAccount (filter: {
            _id: $uid
          }) {
            _id
            saved_jobs
          }
        }`),
        variables: { uid },
      });

      const getSearchHistory = uid => apolloClient.query({
        query: (gql`query ($uid: MongoID) {
        findAccount (filter: {
          _id: $uid
        }) {
          _id
          search_history {
            latitude
            longitude
            query
          }
        }
      }`),
        variables: { uid },
      });

      next(async (vm) => {
        const { state } = store;
        console.log('state', state);
        if (state) {
          if (state.firstSearch) {
            vm.firstSearch = state.firstSearch;
          }
          if (state.selectedCity && state.selectedCity.length > 0) {
            vm.selectedCity = state.selectedCity;
          }
          if (state.selectedPositions) {
            vm.selectedPositions = state.selectedPositions;
          }
          if (state.selectedShifts) {
            vm.selectedShifts = state.selectedShifts;
          }
          if (state.selectedTypes) {
            vm.selectedTypes = state.selectedTypes;
          }
          if (state.selectedPositions && Array.isArray(state.selectedPositions)) {
            vm.selectedPositions = state.selectedPositions;
          }
          if (state.userdata && state.userdata.preferences && state.userdata.preferences.getNewsletters === true) {
            vm.newsLetterSignedUp = true;
          } else {
            vm.newsLetterSignedUp = false;
          }
        }

        vm.uid = udata.uid;
        vm.account_type = state.userdata.account_type;
        if (udata.userdata.saved_jobs && udata.userdata.saved_jobs.length > 0) {
          vm.saved_jobs = udata.userdata.saved_jobs.concat([]);
        } else {
          try {
            const { data } = await getSavedJobs(udata.uid);

            const res = data.findAccount;
            if (res.saved_jobs) {
              vm.saved_jobs = res.saved_jobs.concat([]);
            }
          } catch (error) {
            Logger.error(error);
          }
        }

        if (udata.userdata.search_history && udata.userdata.search_history.length > 0) {
          vm.search_history = udata.userdata.search_history.concat([]);
        } else {
          try {
            const { data } = await getSearchHistory(udata.uid);

            const res = data.findAccount;
            if (res && res.search_history) {
              vm.search_history = res.search_history.concat([]);
            }
          } catch (error) {
            Logger.error(error);
          }
        }
      });
      return null;
    });
  },
};
</script>
