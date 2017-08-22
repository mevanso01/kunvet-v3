import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';

import Client from '@/apollo/client';
import Index from '@/pages/Index';
import App from '@/App';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: Client,
});

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
    },
  ],
});

/* eslint-disable no-new */
new Vue({
  apolloProvider,
  el: '#app',
  router,
  render: h => h(App),
});
