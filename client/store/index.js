import Vue from 'vue';
import Vuex from 'vuex';
import VuexLS from './persist';
// import Cookies from 'js-cookie';

Vue.use(Vuex);


const Store = new Vuex.Store({
  state: {
    userID: null,
    businessID: null,
    acct: 0,
    firstSearch: true,
    selectedCities: [],
    selectedTypes: [],
    selectedPositions: [],
    selectedShifts: [],
    bdata: null,
    userdata: {
      firstname: null,
      lastname: null,
      school: null,
      degree: null,
      display_email: null,
      org_list: [],
    },
  },
  mutations: {
    go(state) {
      state.firstSearch = false;
    },
    setAcct(state, payload) {
      state.acct = payload.acct;
    },
    setAcctID(state, payload) {
      state.userID = payload.id;
    },
    setBusinessID(state, payload) {
      state.businessID = payload.id;
    },
    keepSearch(state, payload) {
      state.selectedCities = payload.sCities;
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
    resetState(state) {
      state.userID = null;
      state.acct = 0;
      state.firstSearch = true;
      state.selectedCities = [];
      state.selectedTypes = [];
      state.selectedPositions = [];
      state.selectedShifts = [];
      state.bdata = null;
      state.userdata = {
        firstname: null,
        lastname: null,
        school: null,
        degree: null,
        display_email: null,
      };
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
