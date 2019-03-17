import VuexPersist from 'vuex-persist/dist/umd/index';

const vuexLS = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
});

export default vuexLS;
