<style>
.post-card {
  border-left: 3px solid #59e884;

}
.carditem {
  height: 50%;
  margin: 0;
  font-size: 11px
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
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  border-radius: 6px 6px 6px 6px;

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
  font-weight: 300;
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

  .top-container {
    width: 100%;
    height: 48px;
  }
  .top-container {
  margin-bottom: 8px;
}
</style>

<template>
  <v-container fluid class="home-page-cont">
      <div class="main-cont-large">
            <form>
              <section class="firstSearch" v-if="firstSearch">
                <div style="padding-bottom: 30px; text-align: right;">
                  <h1 style="color: #ef5350;">Kunvet (con-vit)</h1>
                  <h2 style="color: #333;">Find a job that match your search and is actually nearby</h2>
                </div>
                <v-layout v-if="firstSearch" align-center justify-space-between row spacer slot="header" style="padding-bottom: 10px;">



                  <v-flex xs10 sm10 offset-sm1 md8 offset-md3
                  no-wrap class="grey--text no-padding fsSelect" ellipsis>

                    <v-select class="no-padding" style="width: 50%; display: inline-block; border-right: 1px solid #eee;"
                      label="City or School"
                      v-bind:items="availableCities"
                      v-model="selectedCities"
                      autocomplete
                      single-line
                      hide-details
                    >
                    </v-select>
                    <v-select class="no-padding" style="width: 50%; display: inline-block;"
                      label="Positions"
                      v-bind:items="availablePositions"
                      v-model="selectedPositions"
                      autocomplete
                      single-line
                      hide-details
                    >
                    </v-select>

                  </v-flex>

                  <v-flex xs2 sm1 class="no-padding fsGoBtn" @click="searchGo">
                    <p style="color: white; line-height: 48px; font-size: 16px;">Go</p>
                  </v-flex>
                </v-layout>

                <v-layout v-if="firstSearch" align-center row spacer slot="header" style="padding-bottom: 10px;">
                <v-flex md15>
                  <img style="max-width: 100%;" :src="cityImage"></img>
                </v-flex>
                </v-layout>

                <v-layout v-if="firstSearch" align-center row spacer slot="header" style="padding-bottom: 10px;">
                  <v-flex xs12 md4>
                      <v-icon>keyboard_arrow_left</v-icon>
                  </v-flex>
                  <v-flex xs12 md8>

                  </v-flex>
                  <v-flex xs12 md8>

                  </v-flex>
                  <v-flex xs12 md4>
                      <v-icon>keyboard_arrow_right</v-icon>
                  </v-flex>


                </v-layout>


                <v-layout v-if="firstSearch" align-center row spacer slot="header" style="padding-bottom: 10px;">
                  <v-flex xs12 md8>
                      <img style="max-width: 80%;" src="http://i.telegraph.co.uk/multimedia/archive/02022/Jiang-Zemin-SUM_2022366a.jpg"></img>
                  </v-flex>
                  <v-flex xs12 md8>
                      <v-card-title><div class="headline">Who is Elder?</div></v-card-title>
                      <v-card-text>Jiang Zemin (born 17 August 1926) is a retired Chinese politician who served as General Secretary of the Communist Party of China from 1989 to 2002, as Chairman of the Central Military Commission from 1989 to 2004, and as President of the People's Republic of China from 1993 to 2003. Jiang has been described as ...</v-card-text>

                  </v-flex>


                </v-layout>

                <v-layout v-if="firstSearch" align-center row spacer slot="header" style="padding-bottom: 10px;">

                  <v-flex xs12 md8>
                      <v-card-title><div class="headline">Who is Elder?</div></v-card-title>
                      <v-card-text>Jiang Zemin (born 17 August 1926) is a retired Chinese politician who served as General Secretary of the Communist Party of China from 1989 to 2002, as Chairman of the Central Military Commission from 1989 to 2004, and as President of the People's Republic of China from 1993 to 2003. Jiang has been described as ...</v-card-text>


                  </v-flex>
                  <v-flex xs12 md8>
                      <img style="max-width: 80%;" src="http://i.telegraph.co.uk/multimedia/archive/02022/Jiang-Zemin-SUM_2022366a.jpg"></img>
                  </v-flex>


                </v-layout>

                <v-layout v-if="firstSearch" align-center row spacer slot="header" style="padding-bottom: 10px;">
                  <v-flex xs12 md8>
                      <img style="max-width: 80%;" src="http://i.telegraph.co.uk/multimedia/archive/02022/Jiang-Zemin-SUM_2022366a.jpg"></img>
                  </v-flex>
                  <v-flex xs12 md8>
                      <v-card-title>
                      <div class="headline">Who is Elder?</div>
                      </v-card-title>
                      <v-card-text>Jiang Zemin (born 17 August 1926) is a retired Chinese politician who served as General Secretary of the Communist Party of China from 1989 to 2002, as Chairman of the Central Military Commission from 1989 to 2004, and as President of the People's Republic of China from 1993 to 2003. Jiang has been described as ...</v-card-text>

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
              <v-flex xs12 sm2>
                <v-avatar size="36px" slot="activator">
                  <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
                </v-avatar>
              </v-flex>
              <v-flex xs12 sm4>
                <strong>A certain inc</strong>
              </v-flex>
              <v-flex xs12 sm6>
              <div class="float-right">
                <v-avatar size="36px" slot="activator">
                  <v-icon class="whatshot">whatshot</v-icon>
                </v-avatar>
                <v-avatar size="36px" slot="activator">
                  <v-icon class="bookmark-icon">bookmark_border</v-icon>
                </v-avatar>
              </div>
              </v-flex>
            </v-layout>

            <router-link :to="'JobDetail/'+job._id">
            <v-flex xs12>
              <h1>{{ job.title }}</h1>
              <p class="carditem">X mins ago</p>
              <p class="carditem"><v-icon>location_city</v-icon> {{ job.address }}</p>
              <p class="carditem"><v-icon>sms</v-icon> Average review</p>
              <p class="carditem"><v-icon>info</v-icon> Part time / Full time ~Internship ~ 10.50 per hour</p>
              <p class="carditem"><v-icon>account_circle</v-icon> Not student friendly ~ experience required</p>
            </v-flex>

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
import Store from '@/store';
import VuexLS from '@/store/persist';
import CitySvg from '@/assets/vc.svg';

Vue.use(Vuetify);
Vue.use(VueApollo);

export default {
  apollo: {
    findJobs: gql`{
      findJobs {
          _id
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
      cityImage: CitySvg,
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
<!--<script src="../Component.js"></script>--></v-avatar>
