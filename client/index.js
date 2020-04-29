import '@babel/polyfill';

import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import Vuex from 'vuex';
import VueTimeago from 'vue-timeago';
import TimeagoLocale from 'vue-timeago/locales/en-US.json';
import InstantSearch from 'vue-instantsearch';
import Share from 'vue-social-share';
import { VueReCaptcha } from 'vue-recaptcha-v3';
// import VueAnalytics from 'vue-analytics';

import Client from '@/apollo/client';
import SearchHighlight from '@/components/SearchHighlight';
import KButton from '@/components/general/KButton';
import KTextField from '@/components/general/KTextField';
import KDropdownList from '@/components/general/KDropdownList';
import homePageTextField from '@/components/general/homePageTextField';

import '@/options/axios';
import '@/options/googleMaps';
import '@/options/raven';

import App from '@/App';
import Title from '@/Title';
import Logger from '@/Logger';
import store from '@/store';

import Config from 'config';

// import gtagjs from 'vue-gtagjs';

Vue.use(Title);
Vue.use(Logger);
Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(Vuex);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});
Vue.use(VueTimeago, {
  locale: 'en-US',
  locales: {
    'en-US': TimeagoLocale,
  },
});
Vue.use(InstantSearch);
Vue.use(Share);
// if (process.env.NODE_ENV === 'production') {
//   Vue.use(VueAnalytics, {
//     id: Config.get('analytics.trackingId') || 'UA-XXX-X',
//   });
// }
Vue.component('highlight', SearchHighlight);
Vue.component('k-btn', KButton);
Vue.component('k-text-field', KTextField);
Vue.component('home-text-field', homePageTextField);
Vue.component('k-dropdown', KDropdownList);
Vue.use(VueReCaptcha, { siteKey: Config.get('googleRecaptchaSITE_KEY') });

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
      name: 'Homepage',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/Index'),
      meta: {
        htmlMeta: {
          description: 'Welcome to Kunvet',
        },
      },
    },
    {
      path: '/search',
      redirect: '/',
    },
    {
      path: '/jobs/search',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/Search'),
      meta: {
        description: 'Bruh. U right.',
      },

    },
    {
      path: '/jobs/search/:query',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/Search'),
    },
    {
      path: '/newSearch',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/NewSearch'),
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/Login'),
    },
    {
      path: '/sign-up',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/SignUp'),
    },
    {
      path: '/sign-up/:stage',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/SignUp'),
      props: true,
    },
    {
      path: '/signup/:stage/:fname/:lname/:email/:password',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/SignUp'),
      props: true,
    },
    {
      path: '/jobs/detail/:id',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/JobDetail'),
      props: true,
    },
    /* {
    path: '/job/:id/applied=:isapplied',
    // component: () => import(/* webpackChunkName: "employee" */ // '@/pages/JobDetail'),
    // props: true,
    // },
    {
      path: '/validate',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/Validate'),
    },
    {
      path: '/validate-email/:code',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/ValidateOld'),
      props: true,
    },
    {
      path: '/forgot-password/:code',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/ResetPassword'),
      props: true,
    },
    {
      path: '/jobs/posted',
      component: () => import(/* webpackChunkName: "poster" */ '@/pages/MyJobs'),
    },
    {
      path: '/jobs/saved',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/SavedJobs'),
    },
    {
      path: '/jobs/applied',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/AppliedJobs'),
    },
    {
      path: '/account/notification',
      component: () => import(/* webpackChunkName: "notifications" */ '@/pages/NotificationPage'),
    },
    {
      path: '/account',
      component: () => import(/* webpackChunkName: "account" */ '@/pages/Account'),
    },
    {
      path: '/account/settings',
      component: () => import(/* webpackChunkName: "settings" */ '@/pages/Settings'),
    },
    {
      path: '/account/settings/:command',
      component: () => import(/* webpackChunkName: "settings" */ '@/pages/Settings'),
    },
    {
      path: '/jobs/createnew/:id',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/CreateNewJob'),
      props: { id: null },
    },
    {
      path: '/jobs/createnew',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/CreateNewJob'),
    },
    {
      path: '/jobs/create',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/CreateJob'),
    },
    {
      path: '/jobs/create/:id',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/CreateJob'),
      props: { id: null },
    },
    {
      path: '/jobs/edit/:id',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/EditJob'),
      props: { id: null },
    },
    {
      path: '/jobs/applicants',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/Applicants'),
    },
    {
      path: '/jobs/:id',
      redirect: '/jobs/detail/:id',
    },
    {
      path: '/view-applicant/:id',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/ViewApplicant'),
      props: true,
    },
    {
      path: '/view-resume/:id',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/ViewResume'),
      props: true,
    },
    {
      path: '/myorg',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/MyOrg'),
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/AboutUs'),
    },
    {
      path: '/contact',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Contact'),
    },
    {
      path: '/terms',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Terms'),
    },
    {
      path: '/pricing',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Pricing'),
    },
    {
      path: '/careers',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/JoinUs'),
    },
    {
      path: '/hire',
      component: () => import(/* webpackChunkName: "hiring" */ '@/pages/Hire'),
    },
    {
      path: '/choose',
      component: () => import(/* webpackChunkName: "hiring" */ '@/pages/Choose'),
    },
    {
      path: '/career-guide',
      component: () => import(/* webpackChunkName: "hiring" */ '@/pages/Blog'),
    },
    // {
    //   path: '/blog/detail',
    //   component: () => import(/* webpackChunkName: "hiring" */ '@/pages/BlogDetail'),
    // },
    {
      path: '/unsubscribe/job-recommendation',
      component: () => import(/* webpackChunkName: "hiring" */ '@/pages/UnsubscribeJobRecommend'),
    },
    {
      path: '/feedback/job-recommendation',
      component: () => import(/* webpackChunkName: "hiring" */ '@/pages/FeedbackJobAlert'),
    },
    // Debug pages
    {
      path: '/debug/triggerError',
      component: () => import(/* webpackChunkName: "debug" */ '@/pages/TriggerError'),
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '@/pages/PageNotFound'),
    },
    {
      path: '*',
      name: 'JobNotFound',
      component: () => import(/* webpackChunkName: "404" */ '@/pages/JobNotFound'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to.meta);
  const authRoutes = ['/login', '/sign-up'];
  if (authRoutes.includes(to.path) && !to.query.redirect) {
    next({
      path: to.path,
      query: {
        redirect: from.path,
      },
    });
  } else {
    next();
  }
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

// Tracking
//
// Always disabled for non-production NODE_ENVs
// FIXME: Move all tracking IDs to config
if (process.env.NODE_ENV === 'production' && Config.get('analytics')) {
  /* if (Config.get('analytics.googleAnalytics')) {
    gtagjs(router, 'UA-93340207-1');
  } */

  if (Config.get('analytics.googleTagManager')) {
    // eslint-disable-next-line
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0];
      var j = d.createElement(s);
      var dl = l !== 'dataLayer' ? `&l=${l}` : '';
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-P8RNK3S');
  }

  // if (Config.get('analytics.hotjar')) {
  //   const hotjar = document.createElement('script');
  //   hotjar.text = `
  //     (function(h,o,t,j,a,r){
  //       h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //       h._hjSettings={hjid:469762,hjsv:6};
  //       a=o.getElementsByTagName('head')[0];
  //       r=o.createElement('script');r.async=1;
  //       r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //       a.appendChild(r);
  //     })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  //   `;
  //   document.body.append(hotjar);
  // }
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

if (navigator.userAgent.match(/MicroMessenger/i)) {
  // HACK: Show thumbnail on WeChat
  const logo = document.createElement('img');
  logo.src = 'https://kunvet.com/favicon.png';
  logo.width = 0;
  logo.height = 0;
  logo.style.width = 0;
  logo.style.height = 0;
  logo.style.display = 'none';
  document.body.prepend(logo);
}
