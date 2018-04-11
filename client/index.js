import Vue from 'vue';
// import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import Vuex from 'vuex';
import VueTimeago from 'vue-timeago';
import TimeagoLocale from 'vue-timeago/locales/en-US.json';

import Client from '@/apollo/client';

import '@/options/axios';
import '@/options/googleMaps';

import App from '@/App';
import store from '@/store';

import VueCroppie from 'vue-croppie';

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
      component: () => import('@/pages/Index'),
    },
    {
      path: '*',
      component: () => import('@/pages/Index'),
    },
    {
      path: '/employee',
      component: () => import('@/pages/Employee'),
    },
    {
      path: '/login',
      component: () => import('@/pages/Login'),
    },
    {
      path: '/signup',
      component: () => import('@/pages/SignUp'),
    },
    {
      path: '/jobdetail/:id',
      component: () => import('@/pages/JobDetail'),
      props: true,
    },
    {
      path: '/validate/:code',
      component: () => import('@/pages/Validate'),
      props: true,
    },
    {
      path: '/reset-password/:code',
      component: () => import('@/pages/ResetPassword'),
      props: true,
    },
    {
      path: '/resume',
      component: () => import('@/pages/Resume'),
    },
    {
      path: '/createresume',
      component: () => import('@/pages/CreateResume'),
    },
    {
      path: '/myjobs',
      component: () => import('@/pages/MyJobs'),
    },
    {
      path: '/savedjobs',
      component: () => import('@/pages/SavedJobs'),
    },
    {
      path: '/appliedjobs',
      component: () => import('@/pages/AppliedJobs'),
    },
    {
      path: '/messages',
      component: () => import('@/pages/Messages'),
    },
    {
      path: '/notifications',
      component: () => import('@/pages/NotificationPage'),
    },
    {
      path: '/account',
      component: () => import('@/pages/Account'),
    },
    {
      path: '/settings',
      component: () => import('@/pages/Settings'),
    },
    {
      path: '/createnewjob/:id',
      component: () => import('@/pages/CreateNewJob'),
      props: { id: null },
    },
    {
      path: '/createnewjob',
      component: () => import('@/pages/CreateNewJob'),
    },
    {
      path: '/view-applicant/:id',
      component: () => import('@/pages/ViewApplicant'),
      props: true,
    },
    {
      path: '/myorg',
      component: () => import('@/pages/MyOrg'),
    },
    {
      path: '/photogallery',
      component: () => import('@/pages/PhotoGallery'),
    },
    {
      path: '/applicants',
      component: () => import('@/pages/Applicants'),
    },
    {
      path: '/AboutUs',
      component: () => import('@/pages/AboutUs'),
    },
    {
      path: '/Terms',
      component: () => import('@/pages/Terms'),
    },
  ],
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App),
});
