import Vue from 'vue';
import Vuex from 'vuex';
import VuexLS from './persist';

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
    prevSearchQuery: '',
    bdata: null,
    userdata: null,
    udataLastFetched: null,
    currentJobProgress: {
      jobId: null,
      part1Complete: false,
      part2Complete: false,
      part3Complete: false,
      postOnOpen: false,
    },
    newUser: true,
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
        state.udataLastFetched = null;
        state.newUser = true;
      } else {
        state.newUser = false;
      }
    },
    setAcctID(state, payload) {
      state.userID = payload.id;
      state.newUser = false;
    },
    setBusinessID(state, payload) {
      state.businessID = payload.id;
    },
    setDefaultOrg(state, payload) {
      state.default_org = payload.id;
    },
    unsetBusinessID(state) { // deprecated, use unsetBusinessData instead
      state.businessID = null;
    },
    keepSearch(state, payload) {
      state.selectedCity = payload.sCities;
      state.selectedTypes = payload.sTypes;
      state.selectedPositions = payload.sPositions;
      state.selectedShifts = payload.sShifts;
      if (payload.query && typeof payload.query === 'string') {
        state.prevSearchQuery = payload.query;
      }
    },
    keepUserdata(state, payload) {
      if (!state.userdata) {
        state.userdata = payload.userdata;
      } else {
        for (const key of Object.keys(payload.userdata)) {
          state.userdata[key] = payload.userdata[key];
        }
      }
      state.newUser = false;
      if (payload.updateLastFetched) {
        state.udataLastFetched = Date.now();
      }
    },
    keepBdata(state, payload) {
      state.bdata = payload.bdata;
    },
    unsetBusinessData(state) {
      state.businessID = null;
      state.bdata = null;
    },
    setJobProgress(state, payload) {
      state.currentJobProgress.jobId = payload.id;
      state.currentJobProgress.part1Complete = payload.part1;
      state.currentJobProgress.part2Complete = payload.part2;
      state.currentJobProgress.part3Complete = payload.part3;
      state.currentJobProgress.postOnOpen = payload.postOnOpen;
    },
    resetJobProgress(state) {
      state.currentJobProgress = {
        jobId: null,
        part1Complete: false,
        part2Complete: false,
        part3Complete: false,
        postOnOpen: false,
      };
    },
    notNewUser(state) {
      state.newUser = false;
    },
    logout(state) {
      state.userID = null;
      state.businessID = null;
      state.acct = 0;
      state.bdata = null;
      state.userdata = null;
      state.udataLastFetched = null;
    },
    resetState(state) {
      state.userID = null;
      state.businessID = null;
      state.acct = 0;
      state.default_org = null;
      state.firstSearch = true;
      state.selectedCity = null;
      state.selectedTypes = [];
      state.selectedPositions = [];
      state.selectedShifts = [];
      state.bdata = null;
      state.userdata = null;
      state.udataLastFetched = null;
      state.currentJobProgress = {
        jobId: null,
        part1Complete: false,
        part2Complete: false,
        part3Complete: false,
        postOnOpen: false,
      };
      state.newUser = true;
    },
  },
  plugins: [VuexLS.plugin],
  getters: {
    LS() {
      return VuexLS.restoreState('vuex', window.localStorage);
    },
  },
});

export default Store;
