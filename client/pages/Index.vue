<style lang="scss" scoped>
// big desktop
@media (min-width: 961px){
  .home_content{
    width: 100vw;
    padding-top: 64px;
  }
  .index_top{
    width: 960px;
    height: 1000px;
    margin-left: calc( (100vw - 960px) / 2);
  }
  .interview_woman{
    padding-top: 100px;
    width: 680px;
    margin-left: -214px;
    float: left;
  }
  .search_area{
    margin-top: 60px;
    width: 494px;
    height: 520px;
    background-color: white;
    float:right;
  }
  .search_title{
    padding-top: 76px;
    padding-left: 80px;
    font-family: proxima-nova, sans-serif;
    font-weight: bold;
    font-size: 50px;
    line-height: 140%;
    color: #ff6969;
    letter-spacing: 3px;
    text-align: left;
  }
  .search_bar_container{
    margin-left: 80px;
    width: 400px;
    height: 64px;
    background-color: #F8F8F8;
  }
  .search_bar_head{
    font-weight: bold;
    font-size: 16px;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 2px;
    padding-left: 24px;
    padding-top: 20px;
    width: 80px;
    float:left;
  }
  .search_bar_field{
    float: right;
    width: 320px;
    padding-right: 12px;
    height: 100%;
    background-color: none;
  }
  .search_bar_text_field{
    height: 52px;
  }
  .search_btn{
    margin-left: 80px; 
    margin-top: 20px;
    width: 150px;
    height: 64px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px; 
    letter-spacing: 2px; 
    font-weight: bold;
  }
}
// small desktop
@media (min-width: 801px) and (max-width: 960px) {
  .large_hide{
    display: none !important;
  }
  .home_content{
    width: 100vw;
    padding-top: 64px;
  }
  .index_top{
    width: 800px;
    height: 1000px;
    margin-left: calc((100vw - 800px));
  }
  .interview_woman{
    padding-top: 60px;
    margin-left: -166px;
    width: 520.181px;
    float: left;
  }
  .search_area{
    margin-top: 60px;
    width: 444px;
    background-color: white;
    float:right;
  }
  .search_title{
    padding-top: 50px;
    padding-left: 60px;
    font-family: proxima-nova, sans-serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 140%;
    color: #ff6969;
    letter-spacing: 3px;
    text-align: left;
  }
  .search_bar_container{
    margin-left: 60px;
    width: 360px;
    height: 64px;
    background-color: #F8F8F8;
  }
  .search_bar_head{
    font-weight: bold;
    font-size: 16px;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 2px;
    padding-left: 24px;
    padding-top: 20px;
    width: 80px;
    float:left;
  }
  .search_bar_field{
    float: right;
    width: 260px;
    padding-right: 12px;
    height: 100%;
    background-color: none;
  }
  .search_bar_text_field{
    height: 52px;
  }
  .search_btn{
    margin-left: 60px; 
    margin-top: 20px;
    width: 150px;
    height: 64px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px; 
    letter-spacing: 2px; 
    font-weight: bold;
  }
}
// tablet
@media (min-width: 661px) and (max-width: 800px) {
  .medium_hide{
    display: none !important;
  }
  .home_content{
    width: 100vw;
    padding-top: 64px;
  }
  .index_top{
    width: 660px;
    height: 700px;
    margin-left: calc((100vw - 660px));
  }
  .interview_woman{
    padding-top: 60px;
    margin-left: -140px;
    width: 405.01px;
    float: left;
  }
  .search_area{
    margin-top: 60px;
    width: 394px;
    background-color: white;
    float:right;
  }
  .search_title{
    padding-top: 30px;
    padding-left: 54px;
    font-family: proxima-nova, sans-serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 140%;
    color: #ff6969;
    letter-spacing: 3px;
    text-align: left;
  }
  .search_bar_container{
    margin-left: 54px;
    width: 320px;
    height: 58px;
    background-color: #F8F8F8;
  }
  .search_bar_head{
    font-weight: bold;
    font-size: 16px;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 2px;
    padding-left: 20px;
    padding-top: 20px;
    width: 80px;
    float:left;
  }
  .search_bar_field{
    float: right;
    width: 220px;
    padding-right: 8px;
    height: 100%;
    background-color: none;
  }
  .search_bar_text_field{
    height: 52px;
  }
  .search_btn{
    margin-left: 54px; 
    margin-top: 20px;
    width: 150px;
    height: 58px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px; 
    letter-spacing: 2px; 
    font-weight: bold;
  }
}
// mobile
@media (max-width: 660px) {
  .small_hide{
    display: none !important;
  }
  .home_content{
    width: 100vw;
  }
  .home_page_top{
    background-color: #FF6969;
    width: 100vw;
  }
  .search_title{
    padding-top: calc(120px + 64px);
    padding-left: calc( 100vw - 90vw );
    padding-bottom: calc( 32px + 20px);
    font-family: proxima-nova, sans-serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 140%;
    color: white;
    letter-spacing: 3px;
    text-align: left;
  }
 .search_bar_container{
    margin-left: 10vw;
    width: 80vw;
    height: 64px;
    background-color: #F8F8F8;
  }
  .search_bar_head{
    font-weight: bold;
    font-size: 16px;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 2px;
    padding-left: 20px;
    padding-top: 20px;
    width: 68px;
    float:left;
  }
  .search_bar_field{
    float: right;
    width: calc(80vw - 68px);
    padding-right: 8px;
    height: 100%;
    background-color: none;
  }
  .search_bar_text_field{
    height: 52px;
  }
  .search_btn{
    margin-left: 10vw; 
    margin-top: 20px;
    width: 80vw;
    height: 64px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px; 
    letter-spacing: 2px; 
    font-weight: bold;
  }
}
//titles
@media (max-width: 640px) {
  .search_title{
    font-size: 34px;
  }
}
@media (max-width: 560px) {
  .search_title{
    font-size: 28px;
  }
}
@media (max-width: 470px) {
  .search_title{
    font-size: 24px;
  }
}
@media (max-width: 420px) {
  .search_title{
    font-size: 24px;
    padding-right: 45px;
  }
  .search_bar_field{
    padding-right: 4px;
  }
  .search_bar_head{
    padding-left: 16px;
  }
}
@media (max-width: 418px) {
  .search_title{
    font-size: 36px;
  }
}
@media (max-width: 330px) {
  .search_title{
    font-size: 34px;
  }
}
// These are the 'shows'
@media (min-width: 961px) {
  .large_show{
    display: none !important;
  }
}
@media (min-width: 801px) {
  .medium_show{
    display: none !important;
  }
}
@media (min-width: 961px) {
  .small_show{
    display: none !important;
  }
}
</style>

<template>
  <div class="home_page">
    <!-- xxl size -->
    <div class="home_content small_hide medium_hide large_hide">
      <div class="index_top">
          <img class="interview_woman" :src="pngs.woman" alt="Female Job Applicant Waiting for Job Interview">
          <div class="search_area">
            <h2 class="search_title">Fresh Job<br>Opportunities<br>Near You.</h2>
            <div class="search_bar_container" style="margin-top: 40px;">
              <div class="search_bar_head">FIND</div>
              <div class="search_bar_field">
                <v-text-field
                  solo flat hide-details clearable
                  label="Part time web developer"
                  v-model="query"
                  class="search_bar_text_field"
                ></v-text-field>
              </div>
            </div>
            <div class="search_bar_container" style="margin-top: 10px;">
              <div class="search_bar_head">NEAR</div>
              <div class="search_bar_field">
                <v-select
                  label="School or City"
                  item-text="name"
                  item-value="name"
                  v-bind:items="availableCities"
                  v-model="selectedCity"
                  solo flat hide-details autocomplete
                  class="search_bar_text_field"
                >
                </v-select>
              </div>
            </div>
            <router-link :to="searchDestination"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
          </div>
      </div>
    </div>
    <!-- large size -->
    <div class="home_content small_hide medium_hide large_show">
      <div class="index_top">
          <img class="interview_woman" :src="pngs.woman" alt="Female Job Applicant Waiting for Job Interview">
          <div class="search_area">
            <h2 class="search_title">Fresh Job<br>Opportunities<br>Near You.</h2>
            <div class="search_bar_container" style="margin-top: 30px;">
              <div class="search_bar_head">FIND</div>
              <div class="search_bar_field">
                <v-text-field
                  solo flat hide-details clearable
                  label="Part time web developer"
                  v-model="query"
                  class="search_bar_text_field"
                ></v-text-field>
              </div>
            </div>
            <div class="search_bar_container" style="margin-top: 10px;">
              <div class="search_bar_head">NEAR</div>
              <div class="search_bar_field">
                <v-select
                  label="School or City"
                  item-text="name"
                  item-value="name"
                  v-bind:items="availableCities"
                  v-model="selectedCity"
                  solo flat hide-details autocomplete
                  class="search_bar_text_field"
                >
                </v-select>
              </div>
            </div>
            <router-link :to="searchDestination"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
          </div>
      </div>
    </div>
    <!-- medium size -->
    <div class="home_content small_hide medium_show large_hide">
      <div class="index_top">
          <img class="interview_woman" :src="pngs.woman" alt="Female Job Applicant Waiting for Job Interview">
          <div class="search_area">
            <h2 class="search_title">Fresh Job<br>Opportunities<br>Near You.</h2>
            <div class="search_bar_container" style="margin-top: 26px;">
              <div class="search_bar_head">FIND</div>
              <div class="search_bar_field">
                <v-text-field
                  solo flat hide-details clearable
                  label="Part time design intern"
                  v-model="query"
                  class="search_bar_text_field"
                ></v-text-field>
              </div>
            </div>
            <div class="search_bar_container" style="margin-top: 10px;">
              <div class="search_bar_head">NEAR</div>
              <div class="search_bar_field">
                <v-select
                  label="School or City"
                  item-text="name"
                  item-value="name"
                  v-bind:items="availableCities"
                  v-model="selectedCity"
                  solo flat hide-details autocomplete
                  class="search_bar_text_field"
                >
                </v-select>
              </div>
            </div>
            <router-link :to="searchDestination"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
          </div>
      </div>
    </div>
    <!-- small size -->
    <div class="home_content small_show medium_hide large_hide">
      <div class="home_page_top_section">
        <div class="home_page_top">
          <h2 class="search_title">Fresh Job Opportunities <br>Near You.</h2>
        </div>
        <div class="search_bar_container" style="margin-top: -38px;">
          <div class="search_bar_head">FIND</div>
          <div class="search_bar_field">
          <v-text-field
            solo flat hide-details clearable
            label="Part time web developer"
            v-model="query"
            class="search_bar_text_field"
          ></v-text-field>
          </div>
        </div>
        <div class="search_bar_container" style="margin-top: 10px;">
          <div class="search_bar_head">NEAR</div>
          <div class="search_bar_field">
            <v-select
              label="School or City"
              item-text="name"
              item-value="name"
              v-bind:items="availableCities"
              v-model="selectedCity"
              solo flat hide-details autocomplete
              class="search_bar_text_field"
            >
            </v-select>
          </div>
        </div>
        <router-link :to="searchDestination"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import phone from '@/assets/index/iphone.png';
import woman from '@/assets/index/female-job-applicant-waiting-for-job-interview.png';
import gql from 'graphql-tag';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import PromoTextContainer from '@/components/PromoTextContainer';
import Coordinates from '@/constants/coordinates';
import positions from '@/constants/positions';
import locations from '@/constants/locations';


Vue.use(VueApollo);

export default {
  components: {
    PromoTextContainer,
  },
  data() {
    return {
      svgs: {
      },
      pngs: {
        phone,
        woman,
      },
      first_city_guess: 'UC Irvine',
      uid: null,
      findJobs: [],
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
      selectedPositions: this.$store.selectedPositions || [],
      selectedLat: Coordinates.uci.latitude,
      selectedLong: Coordinates.uci.longitude,
      selectedPositionsInital: 'All / Any',
      loadingJobs: false,
      inUsePositions: [],
      inUseTypes: [],
      query: '',
    };
  },
  watch: {
    selectedCity() {
      this.commitData();
    },
  },
  computed: {
    searchDestination() {
      if (this.query) {
        return {
          path: '/search',
          query: {
            q: this.query,
          },
        };
      }
      return {
        path: '/search',
      };
    },
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
      if (this.inUsePositions.length > 0) {
        return this.availablePositions.map((position) => {
          const disabled = (this.inUsePositions.indexOf(position) === -1);
          return {
            text: position,
            disabled,
          };
        });
      }
      return this.availablePositions.map((position) => {
        const disabled = !this.filteredJobs.find(
          job => job.position_tags.indexOf(position) !== -1,
        );
        return {
          text: position,
          disabled,
        };
      });
    },
    availableTypesObj() {
      if (this.inUseTypes.length > 0) {
        return this.availableTypes.map((typeObj) => {
          typeObj.disabled = (this.inUseTypes.indexOf(typeObj.value) === -1);
          return typeObj;
        });
      }
      return this.availableTypes.map((typeObj) => {
        typeObj.disabled = !this.filteredJobs.find(
          job => job.type.indexOf(typeObj.value) !== -1 ||
            (job.type2 && job.type2.indexOf(typeObj.value) !== -1)
          ,
        );
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
      const selected = locations.search_locations.find(el => el.name === this.selectedCity);
      if (!selected) {
        return Coordinates.uci;
      }
      return { latitude: selected.latitude, longitude: selected.longitude };
    },
  },
  methods: {
    openSelect(name) {
      this.filterPositions = null;
      if (this.openSelectField === name) {
        this.openSelectField = null;
      } else {
        this.openSelectField = name;
      }
    },
    commitData() {
      this.$store.commit({
        type: 'keepSearch',
        sCities: this.selectedCity,
        // sTypes: this.selectedTypes,
        // sPositions: this.selectedPositions,
        // sShifts: this.selectedShifts,
      });
    },
    // unused, but could be useful later
    searchAndFilter() {
      this.openSelect(null);
      this.loadInitialJobs();
    },
    // unused, but could be useful later
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
  },
  activated() {
  },
};

// Define a new component called button-counter
Vue.component('button-counter', {
  template: '<button v-on:click="">Hello!</button>',
});
</script>
