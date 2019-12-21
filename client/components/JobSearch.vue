<style lang="scss" scoped>
  .search_bar_head{
    width: 68px;
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 0.12em;
    padding-left: 24px;
    padding-top: 20px;
    margin-bottom: 0px;
  }
  .search_bar_field{
    width: 100%;
    height: 100%;
    background-color: none;
    z-index: 1000;
  }
  .search_bar_text_field{
    height: 52px;
    caret-color: #3c3c3c !important;
  }
  .search_bar_icon{
    margin-top: auto;
    margin-bottom: auto;
    font-size: 16px;
    margin-right: 24px;
    margin-left: 10px;
    color: lightgrey;
    z-index: 1000;
    :hover{
      color: grey;
    }
  }
  .search_results_div {
    background-color: #f4f4f4;
    font-size: 16px;
    position: absolute;
    z-index: 1000;
    width: 100%;
    ._use_current_location {
      margin-bottom: 0;
      user-select: none;
    }
    span.search_result_item_main{
      white-space: nowrap;
    }
    span.search_result_item_secondary{
      white-space: nowrap;
      color: grey;
    }
    .search_result_item{
      white-space: nowrap;
      display: inline-block;
      text-overflow: ellipsis;
      user-select: none;
      overflow-x: hidden;
      overflow-y: visible;
      height: 100%;
      padding-top: 16px;
    }
    ._v-list__tile{
      padding: 0 8px;
      width: 100%;
      background-color: #f4f4f4;
      font-size: 12px;
      font-weight: 300;
      line-height: 100%;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      color: #000000;
    }
    ._v-list__tile:hover, ._use_current_location:hover{
      background-color: #e4e4e4;
    }
    ._v-list__tile:nth-child(4), ._v-list__tile:nth-child(5) {
      display: none;
    }
  }
  .search_bar_icon_cross{
    font-size: 14px;
    margin-left: 24px;
    color: #5a8cff;
  }
  .search_bar_current{
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    padding-left: 8px;
    padding-top: 22px;
    margin-bottom: 0px;
    font-size: 14px;
    color: #5a8cff;
  }
  .search_btn{
    width: 100%;
    height: 64px !important;
    line-height: 64px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px;
    letter-spacing: 0.12em;
    line-height: 120%;
    font-weight: 600;
  }
  .search_bar_container{
    width: 100%;
    height: 64px;
    background-color: #f4f4f4;
    box-shadow: 0;
    font-size: 16px;
    display: flex;
  }
  ._dropdown-overlay {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    z-index: 999;
  }
  // big desktop
  @media (min-width: 1025px){
    .search_bar_head{
      width: unset;
    }
    .search_bar_field{
      width: 292px;
    }
    .search_results_div {
      width: 400px;
      ._v-list__tile:nth-child(4), ._v-list__tile:nth-child(5) {
        display: block !important;
      }
    }
    .search_bar_icon_cross{
      font-size: 16px;
    }
    .search_bar_current{
      font-weight: 600;
      font-size: 16px;
      padding-top: 20px;
      padding-left: 10px;
    }
    .search_btn{
      margin-top: 0px;
    }
    .search_bar_container{
      width: 400px;
    }
  }
  // medium desktop
  @media (min-width: 801px) and (max-width: 1024px) {
    .search_bar_field{
      width: 248px;
    }
  }
  // mobile
  @media (min-width: 601px) and (max-width: 800px) {
    .search_bar_field{
      width: 444px;
    }
  }
  // small
  @media (min-width: 451px) and (max-width: 600px) {
  }
  // extra small
  @media (max-width: 450px) {
  }
</style>

<style lang="scss">
// overrides here
.search_results_div {
  .v-list__tile--link:hover {
    background-color: transparent !important;
    cursor: default;
  }
}
</style>

<template>
  <div>
    <div class="search_bar_container">
      <div class="search_bar_head">FIND</div>
      <div class="search_bar_field">
        <v-text-field
          solo flat hide-details
          label="Part time web developer"
          v-model="query"
          class="search_bar_text_field"
          @click="onClickQuery"
        ></v-text-field>
      </div>
      <v-icon class="search_bar_icon" @click="onClearQueryInput" v-if="query && query.length > 0">fas fa-times-circle</v-icon>
    </div>
    <div class="search_bar_container" style="margin-top: 10px; margin-bottom: 10px;">
      <div class="search_bar_head">NEAR</div>
      <div class="search_bar_field">
        <v-text-field
          solo flat hide-details
          v-model="job.address"
          ref="addressField"
          class="search_bar_text_field"
          label="Address"
          @input="onChangeAddressSearchInput"
          @focus="searchFocus = true"
        ></v-text-field>
      </div>
      <v-icon class="search_bar_icon" @click="onClearAddressSearchInput" v-if="job.address && job.address.length > 0">fas fa-times-circle</v-icon>
    </div>
    <div v-if="searchFocus===true" class="search_results_div">
      <div class="search_bar_container _use_current_location" @click="onClickCurrentLocation">
        <v-icon class="search_bar_icon_cross">fas fa-crosshairs</v-icon>
        <p class="search_bar_current">Use Current Location</p>
      </div>
      <v-list class="py-0">
        <v-list-tile class="_v-list__tile" v-for="(item, i) in job.addressList" :key="i" @click="onClickAddressDropdownItem(i)">
          <div class="search_result_item">
            <span class="search_result_item_main">{{item.structured_formatting.main_text}}</span>&nbsp;
            <span class="search_result_item_secondary">{{item.structured_formatting.secondary_text}}</span>
          </div>
        </v-list-tile>
      </v-list>
    </div>
    <router-link :to="to"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
    <div v-show="searchFocus===true" class="_dropdown-overlay" @click="searchFocus=false"></div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
  props: {
    to: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      query: '',
      job: {
        address: '',
        addressList: [],
        latList: [],
        longList: [],
        latitude: null,
        longitude: null,
      },
      searchFocus: false,
      geocoder: null,
      autoCompleteService: null,
      addressValid: true,
      prevAutocompleteAddress: null,
    };
  },
  computed: {
  },
  components: {
  },
  mounted() {
    // Initialize Google maps
    VueGoogleMaps.loaded.then(() => {
      this.initGoogleMaps();
    });
  },
  methods: {
    initGoogleMaps() {
      if (!this.autocomplete || !this.geocoder) {
        const input = this.$refs.addressField.$el.getElementsByTagName('input')[0];
        input.setAttribute('placeholder', '');
        this.autoCompleteService = new window.google.maps.places.AutocompleteService();
        this.geocoder = new window.google.maps.Geocoder();
      }
      // if (this.job.address) {
      //   this.setLatLongs();
      // }
    },
    onChangeAddressSearchInput(value) {
      if (value === '') {
        this.job.addressList = [];
        return;
      }
      if (this.autoCompleteService) {
        this.autoCompleteService.getPlacePredictions({ input: value }, (results, status) => {
          if (status === 'OK') {
            this.searchFocus = true;
            this.job.addressList = results;
          } else {
            this.job.addressList = [];
          }
        });
      }
    },
    onClickAddressDropdownItem(index) {
      const addressItem = this.job.addressList[index];
      if (this.geocoder) {
        this.searchFocus = false;
        this.job.address = `${addressItem.structured_formatting.main_text} ${addressItem.structured_formatting.secondary_text}`;
        this.geocoder.geocode({ 'placeId': addressItem.place_id }, (results, status) => {
          if (status === 'OK' && results.length === 1) {
            this.job.latitude = results[0].geometry.location.lat();
            this.job.longitude = results[0].geometry.location.lng();
            this.job.addressValid = true;
            this.prevAutocompleteAddress = this.job.address;
            this.$refs.addressField.validate();
          } else {
            this.job.latitude = null;
            this.job.longitude = null;
            this.job.addressValid = false;
            this.$refs.addressField.validate();
          }
        });
      }
    },
    onClearAddressSearchInput() {
      this.job.address = '';
      this.job.latitude = null;
      this.job.longitude = null;
      this.job.addressValid = false;
      this.$refs.addressField.validate();
      this.searchFocus = false;
      this.job.addressList = [];
      this.prevAutocompleteAddress = '';
    },
    onClearQueryInput() {
      this.query = '';
      this.searchFocus = false;
    },
    onClickQuery() {
      this.searchFocus = false;
    },
    onClickCurrentLocation() {
      if (!navigator.geolocation) {
        return;
      }
      navigator.geolocation.getCurrentPosition(pos => {
        if (!this.geocoder) {
          return;
        }
        var latlng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        this.geocoder.geocode({ 'location': latlng }, (results, status) => {
          if (status === 'OK') {
            if (results[0]) {
              this.job.latitude = results[0].geometry.location.lat();
              this.job.longitude = results[0].geometry.location.lng();
              this.job.address = results[0].formatted_address;
              this.job.addressValid = true;
              this.prevAutocompleteAddress = '';
              this.$refs.addressField.validate();
              this.searchFocus = false;
            } else {
              console.log('No results found');
            }
          } else {
            console.log(`Geocoder failed due to: ${status}`);
          }
        });
      });
    },
  },
  activated() {
  },
};
</script>