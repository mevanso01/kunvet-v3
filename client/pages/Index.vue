
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
/* .input-group--select {
  height: 66px;
} */
.firstSearch .input-group__details{
  display: none !important;
}
/* --- old selects --- */
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
.firstSearch {
  padding-top: 20vh !important;
  padding-left: 64px;
  padding-right: 64px;
  position: relative;
}

.bottom-text{
  font-size:2em;
  color:#ef5350;
  z-index:12;
  bottom:550px;
}

.category{
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #d2d2d3;
  padding-left: 10px;
  height: 48px;
}

.firstSearch .fsSelect {
  .v-input__slot {
    height: 48px;
    padding-left: 16px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    z-index: 11;
  }
  .v-input__control::before,
  .v-input__slot::before,
  .v-input__slot::after {
    display: none;
  }
  .v-input-group__input {
    padding-left: 16px !important;
  }
  .v-input-group__input .v-input-group__selections {
    padding-top: 2px;
  }
  .v-input__append-inner {
    margin-right: 8px;
  }
  // label {
  //   top: 9px;
  //   left: 16px;
  // }
}
.fsSelect-menu .v-list {
  padding-top: 0;
}
.firstSearch h1 {
  font-weight: 300;
  font-size: 32px;
  margin-bottom: 0;

}
.fs-select-cities.v-input {
  margin-top: 0;
  height: 46px;
  box-shadow: none !important;
  border-radius: 6px 0px 0px 6px;
}
.fs-select-cities .v-input-group__selections {
  padding: 0 !important;
  width: calc(100% - 36px) !important;
  text-overflow: ellipsis;
}
.fs-select-cities .v-input-group__input > div > div {
  padding: 0 !important;
}
.fs-select-cities .v-input-group__input::before {
  display: none;
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
    display: inline-block;
  }
  .fs-select-cities {
    height: 100%;
    width: 100%; /* use only when positions is not present */
  }
  .firstSearch .fsSelect .v-input-group__input {
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
.fs-select-positions .v-input-group__selections {
  height: 38px;
  overflow: auto !important;
}
.no-padding {
  padding: 0;
}
.search .v-input-group__details {
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
  left:0px;
  right:0px;
  top: 450px;
  width:100%;
  z-index: 10;
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
    width:100%;
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
  .bottom-row {
    bottom: 10px;
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
    width:100%;
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


//-------------------------------Implemented main classes----------------------------------------------
.main-container {
    position: relative;
    width: 100%;
    max-width: 960px;
    background-color: none;
    /* border: 1px solid #eeeeee; */
    box-sizing: border-box;
    margin-top: -36px;
    margin-left: auto;
    margin-right: auto;
}

.top_container_style{
    width: 100%; height: 60vh;
    background:  #ff8f8f;
    background: -webkit-linear-gradient(to bottom, #FF6969, #ff7f7f, #ff8f8f );
    background: linear-gradient(to bottom, #FF6969, #ff7f7f, #ff8f8f );
    position: relative;
}

.iconRedButton {
  display: block;
  height: 72px;
  width: 64px;
  background-color:#FF6969;
  text-align: center;
  box-shadow: 0 10px 12px -4px #F3E1E1;
  font-family: "Roboto";
  outline: none !important;
}

.iconRedButton:hover {
  background-color:#ef5350;
}

.postAJob {
  display: block;
  height: 56px;
  width: 200px;
  background-color:#FFFFFF;
  text-align: center;
  box-shadow: 0 5px 6px -2px #DF696C;
  font-family: "Roboto",sans-serif;
  color:#FF786D;
  font-weight:bold;
  font-size:16px;
  outline: none !important;
  margin-top:20px;
  margin-left:10%
}

.postAJob:hover {
  background-color:#F3E1E1;
}

.postAJob2 {
  display: block;
  height: 56px;
  width: 200px;
  background-color:#FFFFFF;
  text-align: center;
  box-shadow: 0 5px 6px -2px #5471F6;
  font-family: "Roboto",sans-serif;
  color:#5E85FD;
  font-weight:bold;
  font-size:16px;
  outline: none !important;
  margin-top:20px; 
  margin-left:auto; 
  margin-right:10%;
}

.postAJob2:hover {
  background-color:#F3E1E1;
}

.search_find_near{
  height: 72px;
  padding-top:24px;
  width: 10%;
  background-color:white;
  float:left;
}

.top_title_text{
  color: white;
  font-size: 3.9em;
  text-align: center;
}

.top_title_pos{
  position:absolute;
  width:100%;
  bottom:0;
  margin-bottom: 50px;
}

.searchBar{
  width:90%;
  float:left;
  background-color:white;
  box-shadow: 0 10px 12px -4px #eaeaf9;
  margin-right:10px;
}

.search_assist{
  margin-left:40%;
  color:grey;
  font-size:16px;
}

.search_text_field{
  height: 58px;
  width: 36%;
  outline:none !important;
  background-color:white;
  float:left;
  margin-top:12px;}

.search_select {
  height: 58px;
  width: 44%;
  outline:none !important;
  background-color:white;
  float:left;
  margin-top:12px;
}

.search_mobile {
  margin-left:10%;
  margin-right:10%;
  margin-bottom: 20px;
  box-shadow: 0 10px 12px -4px #eaeaf9;
}

.container-left {
  width: calc(100% + 8px);
}

.container-right {
  width: calc(100% + 8px);
    transform: translateX(-8px);
}

.search_hide{
  display:block;
}

.search_show{
  display:none;
}

.search_button_text{
  line-height: 56px; 
  font-size: 20px; 
  font-family: 'Roboto', sans-serif;
}

.artboard1_img{
  background-color: #ffe2e2;
  height: 400px; 
  text-align: right;
}

.artboard2_img{
  z-index:0; 
  height: 400px; 
  background-color: #dbefff; 
  text-align: left;
}

.artboard1_img_style{
  padding-right:50px; 
  margin-top: 80px; 
  max-width: 400px;
}

.artboard2_img_style{
  padding-left:50px; 
  margin-top: 80px; 
  max-width: 400px;
}

.hire_kunvet_container{
  height: 320px; margin-top:30px; 
  background:  #FFC371;
  background: -webkit-linear-gradient(to right,  #ff5f6d,#FFC371);
  background: linear-gradient(to right,  #ff5f6d, #FFC371);
  position: relative;
}

.hire_kunvet_title{
  padding-top: 3%; 
  padding-left:10%;
  color:white;
  font-size:38px;
}

.hire_kunvet_text{
  padding-top: 12px; 
  margin-left:10%; 
  color:white; 
  font-size:18px; 
  max-width: 400px; 
  line-height: 26px;
}

.loved_trusted_container{
  height: 320px; 
  margin-top:30px;
  background:  #2f89fc;
  background: -webkit-linear-gradient(to right,  #a57fff ,#2f89fc);
  background: linear-gradient(to right,  #a57fff , #2f89fc);
}

.loved_trusted_title{
  padding-top: 28px; 
  padding-right:10%;
  color:white;
  font-size:38px; 
  text-align:right;  
}

.loved_trusted_text{
  padding-top: 12px; 
  color:white; 
  font-size:18px; 
  max-width:400px; 
  padding-right: 10%; 
  text-align:right; 
  margin-left:auto; 
  padding-left: 30px;
}

.artboard1_img_mobile{
    height: 50vh; 
    width:100%; 
    background-color: #ffe2e2;
}

@media (min-width: 601px) and (max-width: 960px) {
  .top_title_text{
    font-size: 3.5em;
    text-align:left;
  }

  .top_title_pos{
    bottom:0;
    margin-bottom:50px;
  }
}

@media only screen and (max-width: 820px) {
  .search_show{
    display:block;
  }
  
  .search_hide{
    display:none;
  }
}

@media (min-width: 601px) and (max-width: 820px) {
    .top_title_text{
    font-size: 2.8em;
    line-height: 40px;
    text-align:left;
  }

  .top_title_pos{
    margin-left:10%;
    width:80%;
    bottom:0;
    margin-bottom:50px;
  }

  .main-container{
    margin-top:-36px;
  }

  .search_find_near{
    height: 56px;
    line-height:36px;
    padding-top:16px;
    width: 20%;
  }

  .search_text_field{
    height: 72px;
    width:auto;
    float:none;
    padding-top:10px;
  }

    .search_select{
    height: 72px;
    width:auto;
    float:none;
    padding-top:10px;
  }
}

@media only screen and (max-width: 601px) {
  .top_title_text{
    font-size: 2.2em;
    line-height: 40px;
    text-align:left;
  }

  .top_title_pos{
    margin-left:10%;
    width:80%;
    bottom:0;
    margin-bottom:20px;
  }

  .main-container{
    margin-top:-28px;
  }

  .search_find_near{
    height: 56px;
    line-height:16px;
    padding-top:16px;
    width: 20%;
  }

  .search_text_field{
    height: 56px;
    width:auto;
    float:none;
    margin-top:0px;
  }

    .search_select{
    height: 56px;
    width:auto;
    float:none;
    margin-top:0px;
  }

    .loved_trusted_title{
    padding-top: 3%;
    padding-left:8%;
    font-size:34px;
    text-align:left;
  }

  .loved_trusted_text{
    width: 80%; 
    padding-left:8%;
    font-size:16px;
    line-height: 26px;
    text-align:left; 
    margin-left:0;
    padding-right:0; 
  }

  .hire_kunvet_title{
    padding-top:3%;
    padding-left:8%;
    font-size:34px;
  }

  .hire_kunvet_text{
    width: 80%; 
    margin-left:8%; 
    font-size:16px;
    line-height: 26px;
  }

  .loved_trusted_container{
    height: 280px; 
    width:85%; 
    margin:auto;
    transform: translate(0px, -80px);
  }
  
  .hire_kunvet_container{
    height: 280px; 
    width:85%; 
    margin:auto;
    transform: translate(0px, -80px);
  }

  .postAJob{
    margin-top:20px; 
    margin-left:8%;
  }

  .postAJob2{
     margin-top:20px; 
     margin-left:8%;
  }

}


</style>

<template>
  <v-container fluid class="pa-0">
  <div class="top_container_style">
    <div class="top_title_pos">
     <h1 class="top_title_text">Latest Opportunities Near Your College.</h1>
    </div>
  </div>

<div class="main-container">
  <div class="searchBar search_hide">
      <div class="search_find_near">
        <strong class="search_assist">Find</strong>
      </div>
        <div class="search_text_field">
          <v-text-field
            solo
            flat
            hide-details
            label="part time design intern"
            clearable
            v-model="query"
          ></v-text-field>
        </div>
      <div class="search_find_near">
        <strong class="search_assist">Near</strong>
      </div>
      <div class="search_select" v-bind:class="{ 'active': openSelectField === 'city' }">
          <v-select
            label="School or City"
            item-text="name"
            item-value="name"
            v-bind:items="availableCities"
            v-model="selectedCity"
            solo
            flat
            hide-details
            content-class="fsSelect-menu"
            autocomplete
            >
          </v-select>
      </div>
  </div>

  <div class="search_mobile search_show">
        <div class="search_find_near">
          <strong class="search_assist" >Find</strong>
        </div>
        <div class="search_text_field">
          <v-text-field
            solo
            flat
            hide-details
            label="part time design intern"
            clearable
          ></v-text-field>
        </div>
  </div>

  <div class="search_mobile search_show">
        <div class="search_find_near">
          <strong class="search_assist" >Near</strong>
        </div>
        <div class="search_select" v-bind:class="{ 'active': openSelectField === 'city' }">
          <v-select
            label="School or City"
            item-text="name"
            item-value="name"
            v-bind:items="availableCities"
            solo
            flat
            hide-details
            content-class="fsSelect-menu"
            autocomplete
            >
          </v-select>
        </div>
    </div>

    <router-link :to="searchDestination">
      <button v-ripple class="search_hide kunvet-search-btn med">
        <img src="@/assets/magnifier.svg" height="24px" style="margin-top:5px"/>
      </button>
    </router-link>
    <router-link :to="searchDestination">
      <button v-ripple class="search_show kunvet-search-btn small block" style="width:80%; margin:auto;">
        <span class="search_button_text">
          Search
        </span>
      </button>
    </router-link>

  </div>

      <div style="width:100%; height:150px;">
      </div>

    <div class="mobile-show">
      <div class="artboard1_img_mobile">
        <img src="@/assets/artboard1.png" height="70%" style="margin-top:15%"/>
      </div>

      <div class="hire_kunvet_container">
        <div class="hire_kunvet_title"><strong>Hire on Kunvet</strong></div>
        <div class="hire_kunvet_text">Hiring on Kunvet is so simple and easy to use. Simply create an account, type in information about your job and hit post!</div>
        <router-link to="/createjob">
          <button v-ripple class="postAJob">Post a Job</button>
        </router-link>
      </div>

      <div style="width:100%; height:150px;">
      </div>

      <div style="height: 50vh; width:100%; background-color: #dbefff;">
        <img src="@/assets/artboard2.png" height="70%" style="margin-left:10%; margin-top:15%"/>
      </div>

      <div class="loved_trusted_container">
        <div class="loved_trusted_title"><strong>Loved & Trusted</strong></div>
        <div class="loved_trusted_text">Hiring on Kunvet is so simple and easy to use. Simply create an account, type in information about your job and hit post!</div>
        <router-link to="/createjob">
          <button v-ripple class="postAJob2">Post a Job</button>
        </router-link>
      </div>
    </div>

    <div id="promo" class="main-cont-large promo-block mobile-hide" style="max-width: 100%; background: white">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <div class="container-left artboard1_img">
              <img src="@/assets/artboard1.png" width="100%" class="artboard1_img_style" />
            </div>
          </v-flex>

          <v-flex xs12 sm6>
            <div class="container-right hire_kunvet_container">
                <div class="hire_kunvet_title"><strong>Hire on Kunvet</strong></div>
                <div class="hire_kunvet_text">Hiring on Kunvet is so simple and easy to use. Simply create an account, type in information about your job and hit post!</div>
                <router-link to="/createjob">
                  <button v-ripple class="postAJob">Post a Job</button>
                </router-link>
            </div>
          </v-flex>
        </v-layout>

      <div style="width:100%; height:150px;">
      </div>
        <v-layout row wrap>
          <v-flex xs12 sm6 style="z-index:5;">
            <div class="container-left loved_trusted_container">

                <div class="loved_trusted_title"><strong>Loved & Trusted</strong></div>
                <div class="loved_trusted_text">Hiring on Kunvet is so simple and easy to use. Simply create an account, type in information about your job and hit post!</div>
                <router-link to="/createjob">
                  <button v-ripple class="postAJob2">Post a Job</button>
                </router-link>
              </div>
            </v-flex>

          <v-flex xs12 sm6>
            <div class="container-right artboard2_img">
              <img src="@/assets/artboard2.png" width="100%" class="artboard2_img_style"/>
            </div>
          </v-flex>

        </v-layout>
          <div style="width:100%; height:150px;">
        </div>
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
import mag from '@/assets/magnifier.svg';

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
      svgs: {
        information: InformationSvg,
        locationMarker: LocationMarkerSvg,
        kunvetDude: Asset70,
        citySvg: vc,
        mag: mag,
      },
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
      return {
        path: '/search',
        query: {
          q: this.query,
        },
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
