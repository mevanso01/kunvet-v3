import '@babel/polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import Vuex from 'vuex';
import VueTimeago from 'vue-timeago';
import TimeagoLocale from 'vue-timeago/locales/en-US.json';
import InstantSearch from 'vue-instantsearch';

import Client from '@/apollo/client';
import SearchHighlight from '@/components/SearchHighlight';
import KButton from '@/components/general/KButton';
import KTextField from '@/components/general/KTextField';

import '@/options/axios';
import '@/options/googleMaps';
import '@/options/raven';

import App from '@/App';
import Title from '@/Title';
import Logger from '@/Logger';
import store from '@/store';

import Config from 'config';

import gtagjs from 'vue-gtagjs';

Vue.use(Title);
Vue.use(Logger);
Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(Vuex);
Vue.use(VueTimeago, {
  locale: 'en-US',
  locales: {
    'en-US': TimeagoLocale,
  },
});
Vue.use(InstantSearch);
Vue.component('highlight', SearchHighlight);
Vue.component('k-btn', KButton);
Vue.component('k-text-field', KTextField);

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
      path: '/search',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/Search'),
    },
    {
      path: '/newSearch',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/NewSearch'),
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
      path: '/signup/:stage',
      component: () => import(/* webpackChunkName: "auth" */ '@/pages/SignUp'),
      props: true,
    },
    {
      path: '/job/:id',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/JobDetail'),
      props: true,
    },
    {
      path: '/job/:id/applied=:isapplied',
      component: () => import(/* webpackChunkName: "employee" */ '@/pages/JobDetail'),
      props: true,
    },
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
      path: '/createjob',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/CreateJob'),
    },
    {
      path: '/createjob/:id',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/CreateJob'),
      props: { id: null },
    },
    {
      path: '/editjob/:id',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/EditJob'),
      props: { id: null },
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
      path: '/applicants',
      component: () => import(/* webpackChunkName: "employer" */ '@/pages/Applicants'),
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
      path: '/join',
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
    // Debug pages
    {
      path: '/debug/triggerError',
      component: () => import(/* webpackChunkName: "debug" */ '@/pages/TriggerError'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authRoutes = ['/login', '/signup'];
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
  if (Config.get('analytics.googleAnalytics')) {
    gtagjs(router, 'UA-93340207-1');
  }

  if (Config.get('analytics.googleTagManager')) {
    // eslint-disable-next-line
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0];
      var j = d.createElement(s);
      var temp = l;
      temp += '&l=';
      var dl = l !== 'dataLayer' ? (temp) : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=';
      j.src += i;
      j.src += dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-KMXJH5V');
  }

  if (Config.get('analytics.hotjar')) {
    const hotjar = document.createElement('script');
    hotjar.text = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:469762,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.body.append(hotjar);
  }
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
