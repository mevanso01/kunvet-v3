import Vue from 'vue';
// import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import Vuex from 'vuex';

import Client from '@/apollo/client';

import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import Terms from '@/pages/Terms';

// Axios config
import '@/axios';

// no login
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';

// general pages
import JobDetail from '@/pages/JobDetail';
import Employee from '@/pages/Employee';
import Messages from '@/pages/Messages'; // does sharing one page for employee and business conflict with UI
import Resume from '@/pages/Resume';
import Validate from '@/pages/Validate';

// both types of acct pages
import Account from '@/pages/Account';
import CreateNewJob from '@/pages/CreateNewJob';
import Settings from '@/pages/Settings';
import MyJobs from '@/pages/MyJobs';
import Applicants from '@/pages/Applicants';
import ViewApplicant from '@/pages/ViewApplicant';

// individual acct pages
import SavedJobs from '@/pages/SavedJobs';
import AppliedJobs from '@/pages/AppliedJobs';
import CreateResume from '@/pages/CreateResume';

// Business acct pages
import MyOrg from '@/pages/MyOrg';
import PhotoGallery from '@/pages/PhotoGallery';


import App from '@/App';
import store from '@/store';


// Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(Vuex);

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
      component: Index,
    },
    {
      path: '*',
      component: Index,
    },
    {
      path: '/employee',
      component: Employee,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/signup',
      component: SignUp,
    },
    {
      path: '/jobdetail/:id',
      component: JobDetail,
      props: true,
    },
    {
      path: '/validate/:code',
      component: Validate,
      props: true,
    },
    {
      path: '/resume',
      component: Resume,
    },
    {
      path: '/createresume',
      component: CreateResume,
    },
    {
      path: '/myjobs',
      component: MyJobs,
    },
    {
      path: '/savedjobs',
      component: SavedJobs,
    },
    {
      path: '/appliedjobs',
      component: AppliedJobs,
    },
    {
      path: '/messages',
      component: Messages,
    },
    {
      path: '/account',
      component: Account,
    },
    {
      path: '/settings',
      component: Settings,
    },
    {
      path: '/createnewjob/:id',
      component: CreateNewJob,
      props: { id: null },
    },
    {
      path: '/createnewjob',
      component: CreateNewJob,
    },
    {
      path: '/view-applicant/:id',
      component: ViewApplicant,
      props: true,
    },
    {
      path: '/myorg',
      component: MyOrg,
    },
    {
      path: '/photogallery',
      component: PhotoGallery,
    },
    {
      path: '/applicants',
      component: Applicants,
    },
    {
      path: '/AboutUs',
      component: AboutUs,
    },
    {
      path: '/Terms',
      component: Terms,
    },
  ],
});

/* eslint-disable no-new */

new Vue({
  apolloProvider,
  el: '#app',
  router,
  store,
  render: h => h(App),
});
