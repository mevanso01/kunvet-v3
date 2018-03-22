<style lang="scss">
.card {
  box-shadow: none;
}
.saved {
  color: #ffcc00 !important;
}
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
/* .input-group--select {
  height: 66px;
} */
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
  position: relative;
}
.fsGoBtn {
  height: 48px;
  background-color: #ef5350;
  text-align: center;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
}
.fsSelect {
  /* height: 48px; */
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-radius: 6px 0px 0px 6px;
}
.firstSearch .fsSelect .input-group__input {
  padding-left: 16px !important;
  padding-top: 3px;
}
.firstSearch .fsSelect .input-group__input .input-group__selections {
  padding-top: 2px;
}
.firstSearch .fsSelect label {
  top: 9px;
  left: 16px;
}
.firstSearch .fsSelect i {
  padding: 8px !important;
}
.firstSearch h1 {
  font-weight: 300;
  font-size: 32px;
  margin-bottom: 0;
}
@media only screen and (max-width: 480px) {
  .fs-select-positions {
    display: none !important;
  }
}
@media only screen and (min-width: 480px) {
  .fs-select-cities {
    width: 50%;
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
@media (min-width: 601px) {
  .search .flex {
    padding: 10px 15px;
  }
}
@media (max-width: 600px) {
  .firstSearch {
    padding: 32px 10px;
    height: calc(100vh - 65px);
  }
  #banner {
    display: none;
  }
}
@media (min-width: 961px) {
  .firstSearch {
    height: calc(100vh - 70px);
  }
  .city-img-holder {
    padding: 0 48px;
  }
  section.search {
    padding: 32px 48px 48px 48px;
  }
}
@media (min-width: 601px) and (max-width: 960px) {
  .firstSearch {
    height: calc(100vh - 75px);
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
  <v-container fluid class="home-page-cont">
      <div class="main-cont-large">
            <form>
              <section class="firstSearch" v-if="firstSearch">
                <div style="padding-bottom: 30px; text-align: right;">
                  <h1 style="color: #ef5350;">Kunvet (con-vit)</h1>
                  <h2 style="color: #333;">Find nearby jobs for students like you</h2>
                </div>
                <v-layout v-if="firstSearch" align-center justify-space-between row spacer slot="header" style="padding-bottom: 10px;">
                  <v-flex xs10 sm10 md11 style="height: 48px;"
                    no-wrap class="grey--text no-padding fsSelect">
                    <v-select class="no-padding fs-select-cities" style="display: inline-block; border-right: 1px solid #eee; height: 47px;"
                      label="City or School"
                      v-bind:items="availableCities"
                      v-model="selectedCities"
                      autocomplete
                      single-line
                      hide-details
                    >
                    </v-select>
                    <v-select class="no-padding fs-select-positions"
                      label="Positions (all)"
                      :items="availablePositions"
                      v-model="selectedPositions"
                      autocomplete
                      single-line
                      hide-details
                      multiple>
                    </v-select>
                  </v-flex>
                  <v-flex xs2 sm2 md1 class="no-padding fsGoBtn" @click="searchGo">
                    <p style="color: white; line-height: 48px; font-size: 16px;">Go</p>
                  </v-flex>
                </v-layout>
                <div class="city-img-holder">
                  <img style="width: 100%;" :src="svgs.cityImage"></img>
                </div>
              </section>
              <div v-if="firstSearch">
                  <FirstViewCard1/>
                  <FirstViewCardRText/>
                  <FirstViewCardLText/>
                  <FirstViewCardRText/>
              </div>

                <section v-if="!firstSearch" class="search">
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <v-select
                        label="Select city"
                        v-bind:items="availableCities"
                        v-model="selectedCities"
                        single-line
                        hide-details
                        autocomplete>
                      </v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        label="Select types"
                        v-bind:items="availableTypes"
                        v-model="selectedTypes"
                        autocomplete
                        single-line
                        hide-details
                        multiple>
                      </v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        label="Select positions"
                        :items="availablePositions"
                        v-model="selectedPositions"
                        autocomplete
                        single-line
                        hide-details
                        multiple>
                      </v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        label="Select shifts"
                        :items="availableShifts"
                        v-model="selectedShifts"
                        autocomplete
                        single-line
                        hide-details
                        multiple>
                      </v-select>
                    </v-flex>
                  </v-layout>
                </section>

                <input v-if="!firstSearch" class="hidden-input" id="submit" type="submit" value="GO">
                <div v-if="!firstSearch" id="general-submit" @click="filterJobs">
                    <div id="general-submit-default">
                        <span>GO</span>
                    </div>
                    <div id="general-submit-error">
                        <span id="general-submit-error-msg"></span>
                    </div>
                </div>
            </form>

      <v-layout row wrap v-if="!firstSearch">
        <v-flex xs12 class="no-padding">
          <div v-for="job in filteredJobs" :key="job._id">
              <MainJobCard
                :job="job"
                :saveJobFunc="saveJob"
                :isSaved="isSaved(job._id)"
                :fromCoordinates="{ latitude: selectedLat, longitude: selectedLong }"
              />
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>
<script>
import gql from 'graphql-tag';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import Store from '@/store';
import VuexLS from '@/store/persist';
import CitySvg from '@/assets/vc.svg';
import InformationSvg from '@/assets/job_posts/information.svg';
import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
import StudentSvg from '@/assets/job_posts/user_1.svg';
import FirstViewCard1 from '@/components/FirstViewCard1';
import FirstViewCardRText from '@/components/FirstViewCardRText';
import FirstViewCardLText from '@/components/FirstViewCardLText';
import MainJobCard from '@/components/MainJobCard';
import DisplayTextHelper from '@/utils/DisplayTextHelper';
import DistanceHelper from '@/utils/DistanceHelper';
import Coordinates from '@/constants/coordinates';

Vue.use(VueApollo);

const findJobQuery = gql`query ($id: MongoID) {
  findJob (filter: { active: true, _id: $id }){
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
  /* apollo: {
    findJobs: gql`{
      findJobs (filter: { active: true }){
        _id
        latitude
        longitude
        type
        studentfriendly
        type2
        shift
        age
        pay_type
        date
      }
    }`,
  }, */
  components: {
    FirstViewCard1,
    FirstViewCardRText,
    FirstViewCardLText,
    MainJobCard,
  },
  data() {
    return {
      uid: null,
      findJobs: undefined,
      saved_jobs: [],
      filteredJobs: [],
      firstSearchTypes: [
        'Latest jobs',
      ],
      availableCities: [
        'Irvine, CA',
        'UC Irvine',
        'Los Angeles, CA',
        'UCLA',
      ],
      availablePositions: [
        'All / Any',
        'Frontend developer',
        'Vue.js developer',
        'Something else',
      ],
      availableTypes: [
        { text: 'Full time', value: 'fulltime' },
        { text: 'Part time', value: 'parttime' },
        { text: 'Internship', value: 'internship' },
        { text: 'Contract', value: 'contract' },
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
      selectedCities: 'Irvine, CA', // { lat: 33.6846, long: -117.8265 }, // this.$store.state.selectedCities,
      selectedTypes: Store.state.selectedTypes,
      selectedPositions: Store.state.selectedPositions,
      selectedShifts: Store.state.selectedShifts,
      selectedLat: Coordinates.uci.latitude,
      selectedLong: Coordinates.uci.longitude,
      vuextest: Store.state.count,
      svgs: {
        cityImage: CitySvg,
        information: InformationSvg,
        locationMarker: LocationMarkerSvg,
        student: StudentSvg,
      },
      selectedPositionsInital: 'All / Any',
    };
  },
  methods: {
    searchGo() {
      if (this.selectedCities && this.selectedCities[0]) {
        this.filterJobs();
        this.firstSearch = false;
        Store.commit('go');
        this.commitData();
      }
    },
    async filterJobs() {
      // job types
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
      const sortedJobs = this.findJobs.concat();
      if (this.selectedLat && this.selectedLong) {
        sortedJobs.sort((a, b) => this.compareDistance(a, b));
      }
      let endIndex = sortedJobs.length;
      if (endIndex > 99) {
        endIndex = 99;
      }
      if (endIndex > 0) {
        const promises = Promise.all(
          sortedJobs.map(({ _id: id }) =>
            this.$apollo.query({
              query: findJobQuery,
              variables: {
                id,
              },
            }),
          ),
        );

        this.filteredJobs = (await promises).map(el => el.data.findJob);
      }
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
    compareDistance(a, b) {
      // should we use the more accurate computeDistance function?
      const distanceA = Math.sqrt(((this.selectedLat - a.latitude) ** 2) + ((this.selectedLong - a.longitude) ** 2));
      const distanceB = Math.sqrt(((this.selectedLat - b.latitude) ** 2) + ((this.selectedLong - b.longitude) ** 2));
      return distanceA - distanceB;
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
      Store.commit({
        type: 'keepSearch',
        sCities: this.selectedCities,
        sTypes: this.selectedTypes,
        sPositions: this.selectedPositions,
        sShifts: this.selectedShifts,
      });
    },
    saveJob(id) {
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
        console.error(error);
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
          const x = this.saved_jobs.concat(res.saved_jobs);
          this.saved_jobs = x;
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    isSaved(id) {
      return this.saved_jobs.indexOf(id) > -1;
    },
    async loadInitialJobs() {
      const { data: { findJobs } } = await this.$apollo.query({
        query: gql`{
          findJobs (filter: { active: true }){
            _id
            latitude
            longitude
            type
            studentfriendly
            type2
            shift
            age
            pay_type
            date
          }
        }`,
      });
      this.findJobs = findJobs;
      this.filterJobs();
    },
  },
  beforeDestroy() {
    this.commitData();
  },
  created() {
    this.loadInitialJobs();
    VuexLS.restoreState('vuex', window.localStorage).then((data) => {
      if (data) {
        console.log(data);
        this.firstSearch = data.firstSearch;
        this.selectedCities = data.selectedCities;
        /* if (data.selectedCities && data.selectedCities[0]) {
          this.selectedCities = data.selectedCities;
        } */
        console.log(this.selectedCities);
        if (data.selectedPositions && Array.isArray(data.selectedPositions)) {
          this.selectedPositions = data.selectedPositions;
        }
        if (data.userID) {
          this.uid = data.userID;
          this.getSavedJobs();
        }
      }
    });
  },
};

</script>
