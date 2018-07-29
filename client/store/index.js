import Vue from 'vue';
import Vuex from 'vuex';
import VuexLS from './persist';
// import Cookies from 'js-cookie';

Vue.use(Vuex);


const Store = new Vuex.Store({
  state: {
    userID: null,
    default_org: null,
    businessID: null,
    acct: 0,
    firstSearch: true,
    selectedCity: null,
    selectedTypes: [],
    selectedPositions: [],
    selectedShifts: [],
    bdata: null,
    userdata: null,
    currentJobProgress: {
      jobId: null,
      part1Complete: false,
      part2Complete: false,
      part3Complete: false,
    },
  },
  mutations: {
    go(state) {
      state.firstSearch = false;
    },
    setAcct(state, payload) {
      state.acct = payload.acct;
      if (payload.acct === 0) {
        state.default_org = null;
        state.userdata = null;
        state.bdata = null;
        state.userID = null;
      }
    },
    setAcctID(state, payload) {
      state.userID = payload.id;
    },
    setBusinessID(state, payload) {
      state.businessID = payload.id;
    },
    setDefaultOrg(state, payload) {
      state.default_org = payload.id;
    },
    unsetBusinessID(state) {
      state.businessID = null;
    },
    keepSearch(state, payload) {
      state.selectedCity = payload.sCities;
      state.selectedTypes = payload.sTypes;
      state.selectedPositions = payload.sPositions;
      state.selectedShifts = payload.sShifts;
    },
    keepUserdata(state, payload) {
      state.userdata = payload.userdata;
    },
    keepBdata(state, payload) {
      state.bdata = payload.bdata;
    },
    setJobProgress(state, payload) {
      state.currentJobProgress.jobId = payload.id;
      state.currentJobProgress.part1Complete = payload.part1;
      state.currentJobProgress.part2Complete = payload.part2;
      state.currentJobProgress.part3Complete = payload.part3;
    },
    resetJobProgress(state) {
      state.currentJobProgress = {
        jobId: null,
        part1Complete: false,
        part2Complete: false,
        part3Complete: false,
      };
    },
    resetState(state) {
      state.userID = null;
      state.acct = 0;
      state.default_org = null;
      state.firstSearch = true;
      state.selectedCity = null;
      state.selectedTypes = [];
      state.selectedPositions = [];
      state.selectedShifts = [];
      state.bdata = null;
      state.userdata = null;
      state.currentJobProgress = {
        jobId: null,
        part1Complete: false,
        part2Complete: false,
        part3Complete: false,
      };
    },
  },
  plugins: [VuexLS.plugin],
  getters: {
    /* userdata(state) {
      return state.userdata;
    }, */
    /* LSstate() {
      return new Promise(resolve => {
        VuexLS.restoreState('vuex', window.localStorage).then((data) => {
          resolve(data);
        });
      });
    }, */
  },
});

export default Store;
