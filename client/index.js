import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import Vuex from 'vuex';

import Client from '@/apollo/client';

import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import Terms from '@/pages/Terms';

// no login
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import JobPost from '@/pages/JobPost';
import JobDetail from '@/pages/JobDetail';

// employee pages
import Employee from '@/pages/Employee';
import AppliedJobs from '@/pages/AppliedJobs';
import SavedJobs from '@/pages/SavedJobs';
import Messages from '@/pages/Messages'; // does sharing one page for employee and business conflict with UI
import Account from '@/pages/Account';
import Resume from '@/pages/Resume';
import CreateResume from '@/pages/CreateResume';
import Validate from '@/pages/Validate';
import CreateNewJob from '@/pages/CreateNewJob';

// individual job pages
import Personalhp from '@/pages/Personalhp';
import CreateNewJobI from '@/pages/CreateNewJob_i';
import JobPostsI from '@/pages/JobPosts_i';
import ApplicantsI from '@/pages/Applicants_i';

// Business pages
import Business from '@/pages/Business';
import PhotoGallery from '@/pages/PhotoGallery';

// Business job pages
import Businesshp from '@/pages/Businesshp';
import CreateNewJobB from '@/pages/CreateNewJob_b';
import JobPostsB from '@/pages/JobPosts_b';
import ApplicantsB from '@/pages/Applicants_b';

import App from '@/App';

Vue.use(Vuetify);
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
      path: '/jobposts',
      component: JobPost,
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
      path: '/appliedjobs',
      component: AppliedJobs,
    },
    {
      path: '/savedjobs',
      component: SavedJobs,
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
      path: '/personalhp',
      component: Personalhp,
    },
    {
      path: '/createnewjob',
      component: CreateNewJob,
    },
    {
      path: '/jobposts_i',
      component: JobPostsI,
    },
    {
      path: '/createnewjob_i',
      component: CreateNewJobI,
    },
    {
      path: '/applicants_i',
      component: ApplicantsI,
    },
    {
      path: '/business',
      component: Business,
    },
    {
      path: '/photogallery',
      component: PhotoGallery,
    },
    {
      path: '/businesshp',
      component: Businesshp,
    },
    {
      path: '/createnewjob_b',
      component: CreateNewJobB,
    },
    {
      path: '/jobposts_b',
      component: JobPostsB,
    },
    {
      path: '/applicants_b',
      component: ApplicantsB,
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

Vue.prototype.$firstS = true;
new Vue({
  apolloProvider,
  el: '#app',
  router,
  render: h => h(App),
});
