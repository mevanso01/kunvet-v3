import VuexPersist from 'vuex-persist';

const vuexLS = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
});

export default vuexLS;
