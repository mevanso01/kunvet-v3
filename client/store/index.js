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
    // recheckLogin: null, // date object
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
    /* setRecheckLogin(state, payload) {
      if (payload.recheckLogin) {
        state.recheckLogin = payload.recheckLogin;
      } else {
        // two days by default
        var d = new Date();
        d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
        state.recheckLogin = d;
      }
    }, */
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
      // state.recheckLogin = null;
    },
  },
  plugins: [VuexLS.plugin],
  getters: {
    userdata(state) {
      return state.userdata;
    },
  },
});

export default Store;
