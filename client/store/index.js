import Vue from 'vue';
import Vuex from 'vuex';
import VuexLS from './persist';
// import Cookies from 'js-cookie';

Vue.use(Vuex);


const Store = new Vuex.Store({
  state: {
    count: 0,
    acct: 0,
    firstSearch: true,
    selectedCities: [],
    selectedTypes: [],
    selectedPositions: [],
    selectedShifts: [],
    loggedin: false,
    userdata: {
      school: null,
      degree: null,
      email: null,
    },
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    go(state) {
      state.firstSearch = false;
    },
    setAcct(state, payload) {
      state.acct = payload.acct;
    },
    keepSearch(state, payload) {
      state.selectedCities = payload.sCities;
      state.selectedTypes = payload.sTypes;
      state.selectedPositions = payload.sPositions;
      state.selectedShifts = payload.sShifts;
    },
    saveUserdata(state, payload) {
      state.userdata.school = payload.school;
      state.userdata.degree = payload.degree;
      state.userdata.email = payload.email;
    },
  },
  plugins: [VuexLS.plugin],
  getters: {
    test(state) {
      return state;
    },
  },
});

export default Store;
