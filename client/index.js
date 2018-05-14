import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import Vuex from 'vuex';
import VueTimeago from 'vue-timeago';
import TimeagoLocale from 'vue-timeago/locales/en-US.json';

import Client from '@/apollo/client';

import '@/options/axios';
import '@/options/googleMaps';
import '@/options/raven';

import App from '@/App';
import Title from '@/Title';
import Logger from '@/Logger';
import store from '@/store';

import VueCroppie from 'vue-croppie';

Vue.use(Title);
Vue.use(Logger);
Vue.use(VueCroppie);
Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(Vuex);
Vue.use(VueTimeago, {
  locale: 'en-US',
  locales: {
    'en-US': TimeagoLocale,
  },
});

const apolloProvider = new VueApollo({
  defaultClient: Client,
});

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/Index'),
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/Index'),
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/Login'),
    },
    {
      path: '/signup',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/SignUp'),
    },
    {
      path: '/job/:id',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/JobDetail'),
      props: true,
    },
    {
      path: '/validate/:code',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/Validate'),
      props: true,
    },
    {
      path: '/reset-password/:code',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/ResetPassword'),
      props: true,
    },
    {
      path: '/myjobs',
      component: () => import(/* webpackChunkName: "poster" */ '@/pages/MyJobs'),
    },
    {
      path: '/savedjobs',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/SavedJobs'),
    },
    {
      path: '/appliedjobs',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/AppliedJobs'),
    },
    {
      path: '/notifications',
      component: () => import(/* webpackChunkName: "notifications" */ '@/pages/NotificationPage'),
    },
    {
      path: '/account',
      component: () => import(/* webpackChunkName: "account" */ '@/pages/Account'),
    },
    {
      path: '/settings',
      component: () => import(/* webpackChunkName: "settings" */ '@/pages/Settings'),
    },
    {
      path: '/settings/:command',
      component: () => import(/* webpackChunkName: "settings" */ '@/pages/Settings'),
    },
    {
      path: '/createnewjob/:id',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/CreateNewJob'),
      props: { id: null },
    },
    {
      path: '/createnewjob',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/CreateNewJob'),
    },
    {
      path: '/view-applicant/:id',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/ViewApplicant'),
      props: true,
    },
    {
      path: '/myorg',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/MyOrg'),
    },
    {
      path: '/applicants',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/Applicants'),
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/AboutUs'),
    },
    {
      path: '/terms',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Terms'),
    },
    {
      path: '/join',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/JoinUs'),
    },
  ],
});

router.afterEach(() => {
  Vue.nextTick(() => {
    document.title = Title.getTitle('');
  });
});

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const Sandbox = require('@/pages/Sandbox').default;
  router.addRoutes([
    {
      path: '/sandbox',
      component: Sandbox,
    },
  ]);
}

// Version
Logger.log(`Kunvet Client ${process.env.COMMIT} (${process.env.NODE_ENV})`);

// Recruitment ad
Logger.log('Hey there! Interested in joining us? Shoot us an email at bz@kunvet.com.');
Logger.log("Be sure to mention 'console.'");

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App),
});
