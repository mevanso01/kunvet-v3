<style lang="scss">
.promo-block {
  p {
    font-size: 1.2em;
  }
  h2 {
    font-size: 1.5em;
  }
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
.small-thats-it, .large-thats-it {
  background-color: #fafafa;
}
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
  background: linear-gradient(135deg, #fafafa, #f5f5f5);
  background-image: linear-gradient(135deg, rgb(250, 250, 250), rgb(245, 245, 245));
}
@media (min-width: 601px) {
  .search .flex {
    padding: 10px 15px;
  }
  .large-thats-it {
    width: 100% !important;
  }
  .bottom-row {
    width: calc(100% - 128px);
  }
  .bottom-img {
    width: calc(100% - 128px);
  }
}
@media (max-width: 600px) {
  .firstSearch {
    padding-left: 26px;
    padding-right: 26px;
    height: calc(100vh - 56px);
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
}
@media (min-width: 961px) {
  .firstSearch {
    height: calc(100vh - 64px);
  }
  .city-img-holder {
    padding: 0 48px;
  }
  section.search {
    padding: 16px 16px 32px 16px;
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
#rua {
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: hidden;
  justify-content: center;
  background: #FCFCFC;
  .card {
    flex: 0 0 auto;
    width: 200px;
    margin: 10px;
  }
}
</style>

<template>
  <v-container fluid class="home-page-cont pa-0">
    <div class="main-cont-large">
      <section class="search">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <div class="custom-select-2-wrapper">

              <div class="custom-select-2"
                   v-bind:class="{ 'active': openSelectField === 'city' }">

                <div class="inner" @click="openSelect('city')">
                  <span v-if="this.selectedCity">{{ selectedCity }}</span>
                  <span v-else style="color: rgba(0,0,0,.54);">Select city or school</span>
                  <v-btn icon v-if="openSelectField === 'city'"><v-icon>keyboard_arrow_up</v-icon></v-btn>
                  <v-btn icon v-else><v-icon>keyboard_arrow_down</v-icon></v-btn>
                </div>

                <v-list
                  dense class="custom-select-menu">
                  <v-list-tile  @click="updateAndClose(item.name)" v-for="(item, i) in availableCities" :key="i">{{item.name}}</v-list-tile>
                </v-list>
              </div>

            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="custom-select-2-wrapper">
              <div class="custom-select-2" v-bind:class="{ 'active': openSelectField === 'types' }">
                <div class="inner" @click="openSelect('types');">
                  <span v-if="this.selectedTypes.length > 0">{{ computeSelectString(this.selectedTypes, 'availableTypes') }}</span>
                  <span v-else style="color: rgba(0,0,0,.54);">Filter by job type</span>
                  <v-btn icon v-if="openSelectField === 'types'"><v-icon>keyboard_arrow_up</v-icon></v-btn>
                  <v-btn icon v-else><v-icon>keyboard_arrow_down</v-icon></v-btn>
                </div>

                <v-list class="custom-select-menu">
                  <v-list-tile v-for="(item, i) in availableTypesObj" :key="i">
                    <v-checkbox :label="item.text" v-model="selectedTypes" :value="item.value" :disabled="item.disabled" hide-details></v-checkbox>
                  </v-list-tile>
                </v-list>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="custom-select-2-wrapper">
              <div class="custom-select-2" v-bind:class="{ 'active': openSelectField === 'positions' }">
                <div class="inner" @click="reorderAvailablePositions(); openSelect('positions');">
                  <span v-if="this.selectedPositions.length > 0">{{ computeSelectString(this.selectedPositions) }}</span>
                  <span v-else style="color: rgba(0,0,0,.54);">Filter by positions</span>
                  <v-btn icon v-if="openSelectField === 'positions'"><v-icon>keyboard_arrow_up</v-icon></v-btn>
                  <v-btn icon v-else><v-icon>keyboard_arrow_down</v-icon></v-btn>
                </div>

                <v-list dense class="custom-select-menu">
                  <div class="listFilterContainer" v-if="openSelectField === 'positions'">
                    <i class="material-icons" style="font-size: 16px;">search</i>
                    <input placeholder="search..." class="filterInput" v-model="filterPositions"/>
                  </div>
                  <v-list-tile v-if="openSelectField === 'positions'" v-for="(item, i) in filteredAvailablePositionsObj" :key="i">
                    <v-checkbox :label="item.text" v-model="selectedPositions" :value="item.text" :disabled="item.disabled" hide-details></v-checkbox>
                  </v-list-tile>
                </v-list>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="custom-select-2-wrapper">
              <div class="custom-select-2" v-bind:class="{ 'active': openSelectField === 'shifts' }">
                <div class="inner" @click="reorderAvailablePositions(); openSelect('shifts');">
                  <span v-if="this.selectedShifts.length > 0">{{ computeSelectString(this.selectedShifts, 'availableShifts') }}</span>
                  <span v-else style="color: rgba(0,0,0,.54);">Filter by shifts</span>
                  <v-btn icon v-if="openSelectField === 'shifts'"><v-icon>keyboard_arrow_up</v-icon></v-btn>
                  <v-btn icon v-else><v-icon>keyboard_arrow_down</v-icon></v-btn>
                </div>

                <v-list dense class="custom-select-menu">
                  <v-list-tile v-for="(item, i) in availableShiftsObj" :key="i">
                    <v-checkbox :label="item.text" v-model="selectedShifts" :value="item.value" :disabled="item.disabled" hide-details></v-checkbox>
                  </v-list-tile>
                </v-list>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </section>
      <input class="hidden-input" id="submit" type="submit" value="GO">
      <div id="general-submit" @click="searchAndFilter" v-ripple>
        <div id="general-submit-default">
          <span>SEARCH</span>
        </div>
        <div id="general-submit-error">
          <span id="general-submit-error-msg"></span>
        </div>
      </div>
      <v-layout row wrap>
        <div v-if="loadingJobs" style="width: 100%; height: 60px;">
          <h3 style="text-align: center; margin-top: 25px;">Loading jobs...</h3>
        </div>
        <v-flex xs12 class="no-padding">
          <div v-for="job in filteredJobs" :key="job._id">
              <MainJobCard
                :job="job"
                :saveJobFunc="saveJob"
                :isSaved="isSaved(job._id)"
                :fromCoordinates="selectedCoordinates"
              />
          </div>
          <div v-if="!loadingJobs && filteredJobs.length > 0 && filteredJobs.length % 2 === 1" class="post-card small-thats-it">
            <div style="width: 215px; margin: 32px auto;">
              <img :src="svgs.kunvetDude" style="width: 215px; padding-right: 30px;"/>
            </div>
            <p class="center">That's all.</p>
          </div>
          <div v-if="!loadingJobs && filteredJobs.length > 0 && filteredJobs.length % 2 === 0" class="post-card large-thats-it">
            <div style="width: 215px; margin: 32px auto;">
              <img :src="svgs.kunvetDude" style="width: 215px; padding-right: 30px;"/>
            </div>
            <p class="center">That's all.</p>
          </div>
        </v-flex>
        <div v-if="!loadingJobs && filteredJobs.length === 0" class="no-jobs-found-box">
          <h3 style="text-align: center; margin-top: 50px; color: #797979;">No matching jobs found. Please select different filters or a different location.</h3>
        </div>
      </v-layout>
    </div>
  </v-container>
</template>
<script>
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
import Coordinates from '@/constants/coordinates';
import positions from '@/constants/positions';
import locations from '@/constants/locations';
import intersection from 'lodash/intersection';
import difference from 'lodash/difference';
import findIndex from 'lodash/findIndex';
import uniq from 'lodash/uniq';
import queries from '@/constants/queries';
import EventBus from '@/EventBus';

Vue.use(VueApollo);

const findJobQuery = gql`query ($id: MongoID) {
  findJob (filter: { active: true, _id: $id }){
    ${queries.FindJobRecordForJobCard}
  }
}`;

export default {
  components: {
    MainJobCard,
  },
  data() {
    return {
      uid: null,
      // findJobs: [],
      saved_jobs: [],
      filteredJobs: [],
      openSelectField: null,
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
      svgs: {
        information: InformationSvg,
        locationMarker: LocationMarkerSvg,
        kunvetDude: Asset70,
        citySvg: vc,
      },
      selectedPositionsInital: 'All / Any',
      loadingJobs: false,
      inUsePositions: [],
      inUseTypes: [],
      pageSize: 12,
      page: 0,
    };
  },
  apollo: {
    findJobs: {
      query: gql`query ($limit: Int!, $skip: Int!) {
        findJobs (filter: { active: true }, limit: $limit, skip: $skip ){
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
          job => job.shift.indexOf(shiftObj.value) !== -1,
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
  },
  methods: {
    updateAndClose(city) {
      this.selectedCity = city;
      this.openSelectField = null;
    },
    openSelect(name) {
      this.filterPositions = null; // clear job filter text
      if (this.openSelectField === 'city') {
        this.filterJobs(); // filter jobs when city is closed
      }
      if (this.openSelectField === name) {
        this.openSelectField = null;
      } else {
        this.openSelectField = name;
      }
    },
    searchAndFilter() {
      this.openSelect(null);
      this.setSelectedLatlongs();
      this.page = 0;
      this.findAndFilterJobs();
      // this.loadInitialJobs();
    },
    documentClick(e) {
      const selects = document.getElementsByClassName('custom-select-2-wrapper');
      const target = e.target;
      for (var el of selects) {
        if (el === target || el.contains(target)) { return; } // do not close
      }
      this.openSelect(null); // otherwise, close
    },
    setSelectedLatlongs() {
      const latlongs = this.getCityCoordinates();
      this.selectedLat = latlongs.latitude;
      this.selectedLong = latlongs.longitude;
    },
    getCityCoordinates() {
      const selected = locations.search_locations.find(el => el.name === this.selectedCity);
      if (!selected) {
        return Coordinates.uci;
      }
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
          limit: this.pageSize,
          skip: this.pageSize * this.page,
        },
        updateQuery(previousResult, { fetchMoreResult }) {
          return fetchMoreResult;
        },
      }).then((res) => {
        this.loadingJobs = false;
        const fetchedJobs = res.data.findJobs;
        this.page += 1;
        if (fetchedJobs.length > 0) {
          const newFilteredJobs = [];
          const newPositions = [];
          for (var job of fetchedJobs) {
            if (
              this.filterJobByInfo(job, selectedTypes, selectedTypes2) &&
              (findIndex(this.filteredJobs, { '_id': job._id }) === -1)
            ) {
              newFilteredJobs.push(job);
            }
            for (var pos of job.position_tags) {
              newPositions.push(pos);
            }
          }
          this.inUsePositions = uniq(this.inUsePositions.concat(newPositions));
          this.filteredJobs = this.filteredJobs.concat(newFilteredJobs);
          this.filteredJobs.sort((a, b) => this.compareDistanceAndDate(a, b));
          // find more jobs there are more to be found
          if (fetchedJobs.length === this.pageSize) {
            this.findAndFilterJobs();
          }
        }
      });
    },
    async filterJobs() {
      // job types
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
      let jobsToFetch = this.findJobs.concat();
      if (this.selectedCity) { // should be always true?
        this.setSelectedLatlongs();
        jobsToFetch = jobsToFetch.filter(x => this.filterJobByDistance(x));
      }
      let endIndex = jobsToFetch.length;
      if (endIndex > 99) {
        endIndex = 99;
      }
      jobsToFetch = jobsToFetch.splice(0, endIndex);
      if (endIndex > 0) {
        for (var i = 0; i < endIndex; i++) {
          const index = findIndex(this.filteredJobs, { '_id': jobsToFetch[i]._id });
          if (index === -1) {
            this.$apollo.query({
              query: findJobQuery,
              variables: {
                id: jobsToFetch[i]._id,
              },
            }).then((data) => {
              this.loadingJobs = false;
              const job = data.data.findJob;
              if (
                this.filterJobByInfo(job, selectedTypes, selectedTypes2) &&
                (findIndex(this.filteredJobs, { '_id': job._id }) === -1)
              ) {
                this.filteredJobs.push(job);
                this.filteredJobs.sort((a, b) => this.compareDistanceAndDate(a, b));
              }
            });
          } else {
            const job = this.filteredJobs[index];
            if (!this.filterJobByInfo(job, selectedTypes, selectedTypes2)) {
              this.filteredJobs.splice(index, 1);
            }
          }
        }
      } else {
        this.loadingJobs = false;
      }
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
      return DistanceHelper.computeDistance(
        {
          latitude: this.selectedLat,
          longitude: this.selectedLong,
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
        sTypes: this.selectedTypes,
        sPositions: this.selectedPositions,
        sShifts: this.selectedShifts,
      });
    },
    saveJob(id) {
      if (!this.uid || this.$store.state.acct === 0) {
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
    fetchAvailableFilters() {
      this.$apollo.query({
        query: gql`{
          findAvailableFilters(filter: {}){
            in_use_positions
            in_use_types
          }
        }`,
      }).then(data => {
        if (data.data.findAvailableFilters) {
          this.inUsePositions = data.data.findAvailableFilters.in_use_positions;
          this.inUseTypes = data.data.findAvailableFilters.in_use_types;
        }
      });
    },
    async loadInitialJobs() {
      if (this.filteredJobs.length === 0) {
        this.loadingJobs = true;
      }
      const { data: { findJobs } } = await this.$apollo.query({
        fetchPolicy: 'network-only',
        query: gql`{
          findJobs (filter: { active: true, is_deleted: false }){
            _id
            latitude
            longitude
            date
            is_deleted
          }
        }`,
      });
      if (findJobs && this.findJobs.length !== findJobs.length) {
        this.findJobs = findJobs;
        this.filterJobs();
        this.fetchAvailableFilters();
      } else {
        this.loadingJobs = false;
        this.filterJobs();
        this.fetchAvailableFilters();
      }
    },
  },
  deactivated() {
    this.commitData();
    document.removeEventListener('click', this.documentClick, { passive: true });
  },
  created() {
    EventBus.$on('deletedJob', id => {
      const index = findIndex(this.filteredJobs, { '_id': id });
      if (index !== -1) {
        this.filteredJobs.splice(index, 1);
      }
    });
  },
  activated() {
    this.setSelectedLatlongs();
    if (this.filteredJobs.length === 0) {
      this.loadingJobs = true;
    }
    this.findAndFilterJobs();
    document.addEventListener('click', this.documentClick, { passive: true });
    const data = this.$store.state;
    if (data) {
      if (data.firstSearch) {
        this.firstSearch = data.firstSearch;
      }
      if (data.selectedCity && data.selectedCity.length > 0) {
        this.selectedCity = data.selectedCity;
      }
      if (data.selectedPositions) {
        this.selectedPositions = data.selectedPositions;
      }
      if (data.selectedShifts) {
        this.selectedShifts = data.selectedShifts;
      }
      if (data.selectedTypes) {
        this.selectedTypes = data.selectedTypes;
      }
      if (data.selectedPositions && Array.isArray(data.selectedPositions)) {
        this.selectedPositions = data.selectedPositions;
      }
      if (data.userID && data.acct !== 0) {
        this.uid = data.userID;
        this.getSavedJobs();
      }
    }
    // });
    // const data = this.$store.state;
    // console.log(data);
  },
};

</script>
