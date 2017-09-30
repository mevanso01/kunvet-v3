import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    firstSearch: true,
    selectedCities: [],
    selectedTypes: [],
    selectedPositions: [],
    selectedShifts: [],
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    go(state) {
      state.firstSearch = false;
    },
    keepSearch(state, payload) {
      state.selectedCities = payload.sCities;
      state.selectedTypes = payload.sTypes;
      state.selectedPositions = payload.sPositions;
      state.selectedShifts = payload.sShifts;
    },
  },
});
