<template>
  <v-app>
    <v-toolbar fixed class="main-navbar" height="64px" v-bind:class="{ black: (acct == 2), white: (acct != 2) }">
      <router-link to="/">
            <div id="nav-logo">
              <!--<img id="nav-logo-svg" :src="svgs.kunvetLogoNav"></img>-->
                <svg id="nav-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="312 0 2384 1024">
                    <path d="M506.16,577.25c-46.35,0-92.71.29-139.05-.42-5.78-.09-14.6-4.23-16.72-8.9-20.71-45.61-37.64-92.35-37.34-143.58.29-50,19-91.57,62.15-117.12,76.17-45.1,158.71-61.61,246-41.22,45,10.51,70.88,42.05,79.76,86.87C711.62,406.7,699.19,458.25,682.9,509c-6.12,19.06-14.73,37.32-21.06,56.32-3.23,9.7-8.61,12.17-18.16,12.09C597.84,577,552,577.27,506.16,577.25Z"
                    />
                    <path d="M510,824.51c-21.76-30.53-41.24-57.45-60.25-84.7C438.55,723.78,412.5,683,412.5,683a46,46,0,0,1,5.66-6.22c54.42-44.31,128.54-42.73,185.28,7.29Z"
                    />
                    <path d="M810.57,376.87h49.36v75.23l88.73-75.23h38.11L886.65,461.53l127,115.59H954.15l-94.22-85.78v85.78H810.57Z" />
                    <path d="M1028,376.87h49.22V505.54a65.43,65.43,0,0,0,3.59,21.87A53.44,53.44,0,0,0,1091,545.2a48.44,48.44,0,0,0,16.24,12,53.62,53.62,0,0,0,42.68,0,48.68,48.68,0,0,0,16.17-12,53.49,53.49,0,0,0,10.27-17.79,65.43,65.43,0,0,0,3.59-21.87V376.87h30.94V505.54a81.69,81.69,0,0,1-5.27,29.32,63.8,63.8,0,0,1-16.45,24.26q-11.18,10.41-28.83,16.45t-42.26,6q-22.08,0-38.88-6T1051,559.05a69.13,69.13,0,0,1-17.23-24.4,75.59,75.59,0,0,1-5.84-29.53Z"
                    />
                    <path d="M1260.15,376.87h31.36L1405.7,504.28V376.87h30.8V580.22h-21.23l-124-140.62V577.12h-31.08Z" />
                    <path d="M1511.87,376.87l66.23,138.37,61.31-138.37h31.64l-90.14,203.34h-23.06L1461.1,376.87Z" />
                    <path d="M1845.15,376.87v17H1744.74V460h83.39v17.16h-83.39v79.45h100.41v20.53H1695.67V376.87Z" />
                    <path d="M2059.6,376.87v17h-69.33V577.12H1941.2V393.89h-69.33v-17Z" />
                </svg>
            </div>
        </router-link>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-up">
          <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </div>
        <v-toolbar-items v-if="acct === 0" class="hidden-xs">
          <router-link v-for="item in items[acct]" :to="item.href" class="toolbar__items">
            <v-btn flat>{{ item.title }}</v-btn>
          </router-link>
        </v-toolbar-items>

        <v-toolbar-items v-else class="hidden-xs">
          <router-link v-for="item in items[acct]" :to="item.href" :key="item.title" class="toolbar__items">
            <v-menu offset-y v-if="item.subItems" left open-on-hover>
              <v-btn flat style="width: 10px;" slot="activator">
                <img class="nav-img notranslate" :src="item.icon"></img>
                <div class="nav-text" style="color:#818181; text-transform: none;">{{ item.title }}</div>
              </v-btn>
              <Notifications v-if="item.title === 'Notifications'" isNavbar/>
              <v-list v-if="item.subItems.length > 0 && item.title !== 'Notifications'" dense>
                <v-list-tile v-for="(subitem, index) in item.subItems" :key="index" @click="routeTo(subitem.route)">
                  <v-list-tile-title style="font-size: 14px;">{{ subitem.text }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-btn v-else flat>
              <img class="nav-img" :src="item.icon"></img>
              <div class="nav-text" style="color:#818181">{{ item.title }}</div>
            </v-btn>
          </router-link>
        </v-toolbar-items>
    </v-toolbar>
    <v-toolbar
      dense flat
      v-if="isJobPostRoute && acct !== 0"
      class="job-post__helper-nav-bar"
    >
      <v-toolbar-items>
        <v-btn flat small :ripple="false" :to="'/'" :class="isActiveJobPostLink('/')">
          <span class="job-post__helper-nav-bar__btn-text">
            Search
          </span>
        </v-btn>
        <v-btn flat small :ripple="false" :to="'/savedjobs'" :class="isActiveJobPostLink('/savedjobs')">
          <span class="job-post__helper-nav-bar__btn-text">
            Saved
          </span>
        </v-btn>
        <v-btn flat small :ripple="false" :to="'/appliedjobs'" :class="isActiveJobPostLink('/appliedjobs')">
          <span class="job-post__helper-nav-bar__btn-text">
            Applied
          </span>
        </v-btn>
        <span class="job-post__helper-nav-bar__divider" />
        <v-btn flat small :ripple="false" :to="'/myjobs'" :class="isActiveJobPostLink('/myjobs')">
          <span class="job-post__helper-nav-bar__btn-text">
            Posted
          </span>
        </v-btn>
        <v-btn flat small :to="'/applicants'" :class="isActiveJobPostLink('/applicants')">
          <span class="job-post__helper-nav-bar__btn-text">
            Applicants
          </span>
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-btn flat small :ripple="false" class="job-post__helper-nav-bar__post-a-job" :to="'/createnewjob'">
          <i class="fa fa-edit job-post__helper-nav-bar__post-a-job__icon" /><span>Post a Job</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer absolute temporary right light v-model="drawer" overflow>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile>
            <v-list-tile-content style="flex: 0 1 85%;">
              <v-list-tile-title>Menu</v-list-tile-title>
            </v-list-tile-content>
            <v-btn icon @click.stop="drawer = !drawer">
                <v-icon>clear</v-icon>
              </v-btn>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <router-link :to="item.href" v-for="item in sidebarItems[acct]" :key="item.title">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <main>
      <router-view></router-view>
    </main>

    <div id="bottom">
      <div id="bottom-content">
        <div id="bottom-brand">
          <img :src="svgs.kunvetLogoFooter"></img>
        </div>
        <div id="bottom-columns">
          <div id="bottom-left">
            <div><router-link to="/">Home</router-link></div>
            <div><router-link to="/AboutUs">About us</router-link></div>
            <div><router-link to="/Terms">Terms &amp; Policy</router-link></div>
          </div>
          <div id="bottom-right" v-if="!$store.state.userID">
            <div><router-link to="/login">Login</router-link></div>
            <div><router-link to="/signup">Sign up</router-link></div>
          </div>
        </div>
        <p id="bottom-footer">Kunvet 2017 &copy; All rights reserved.</p>
      </div>
    </div>
  </v-app>
</template>

<script>
import 'font-awesome/scss/font-awesome.scss';
import '@/stylus/main.styl';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Store from '@/store';
import VuexLS from '@/store/persist';
import gql from 'graphql-tag';

import StringHelper from '@/utils/StringHelper';
import Notifications from '@/components/Notifications';

// svgs
import sfw from './assets/navbar/suitcase_full_white.svg';
import sfg from './assets/navbar/suitcase_full_gray.svg';
import bellw from './assets/navbar/bell_full_white.svg';
import bellg from './assets/navbar/bell_full_gray.svg';
import peopleFullWhite from './assets/navbar/people_full_white.svg';
import personSvgG from './assets/navbar/person_gray.svg';
import logoNav from './assets/navbar/kunvet_logo_nav.svg';
import logoFooter from './assets/navbar/kunvet_logo_footer.svg';

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2', // '#616161',
    secondary: '#b0bec5',
    accent: '#4d4d4d',
    error: '#ff0000',
  },
  options: {
    minifyTheme(val) {
      return process.env.NODE_ENV === 'production' ? val.replace(/[\s|\r\n|\r|\n]/g, '') : null;
    },
  },
});

Vue.mixin({
  methods: {
    capitalize: StringHelper.capitalize,
  },
});

const Bus = new Vue();
export default {
  data() {
    return {
      acct: 0,
      drawer: false,
      items: [
        [
          { title: 'Login', icon: null, href: '/login' },
          { title: 'Sign up', icon: null, href: '/signup' },
        ],
        [
          {
            title: 'Jobs',
            icon: sfg,
            href: '/',
            subItems: [
              { text: 'Search', route: '/' },
              { text: 'Applied Jobs', route: '/appliedjobs' },
              { text: 'Saved Jobs', route: '/savedjobs' },
              { text: 'My Posted Jobs', route: '/myjobs' },
            ],
          },
          { title: 'Notifications', icon: bellg, href: '/notifications', subItems: [] },
          { title: 'Account', icon: personSvgG, href: '/account', subItems: [{ text: 'Settings', route: '/settings' }] },
        ],
        [
          {
            title: 'Jobs',
            icon: sfw,
            href: '/myjobs',
            subItems: [
              { text: 'My Jobs',  route: '/myjobs' },
              { text: 'Post New Job',  route: '/createnewjob' },
              { text: 'Applicants', route: '/applicants' },
            ],
          },
          { title: 'Notifications', icon: bellw, href: '/notifications', subItems: [] },
          { title: 'Account', icon: peopleFullWhite, href: '/myorg', subItems: [{ text: 'Settings', route: '/settings' }, { text: 'Personal Bio', route: '/account' }] },
        ],
      ],
      sidebarItems: [
        [
          { title: 'Login', icon: null, href: '/login' },
          { title: 'Sign up', icon: null, href: '/signup' },
        ],
        [
          { title: 'Applied Jobs', href: '/appliedjobs' },
          { title: 'Saved Jobs', href: '/savedjobs' },
          { title: 'Notifications', href: '/notifications' },
          { title: 'Account', href: '/account' },
          // { title: 'Post Individual Job', href: '/createnewjob' },
          // { title: 'My Individual Jobs', href: '/myjobs' },
          // { title: 'Applicants', href: '/applicants' },
        ],
        [
          { title: 'Post New Job',  href: '/createnewjob' },
          { title: 'My Jobs',  href: '/myjobs' },
          { title: 'Applicants', href: '/applicants' },
          { title: 'Notifications', href: '/notifications' },
          { title: 'Account', href: '/account' },
        ],
      ],
      svgs: { kunvetLogoNav: logoNav, kunvetLogoFooter: logoFooter },
      right: true,
    };
  },
  components: {
    Notifications,
  },
  methods: {
    firstSearch() {
      Bus.$emit('firstSearch');
      this.firstS = false;
    },
    lo() {
      this.acct = 0;
      Store.commit({
        type: 'setAcct',
        acct: 0,
      });
      Store.state.firstSearch = true;
    },
    logout() {
      Bus.$emit('logout');
    },
    login_i() {
      Bus.$emit('individual');
    },
    login_b() {
      Bus.$emit('business');
    },
    l1() {
      this.acct = 1;
      Store.commit({
        type: 'setAcct',
        acct: 1,
      });
      console.log(this.acct);
    },
    l2() {
      this.acct = 2;
      Store.commit({
        type: 'setAcct',
        acct: 2,
      });
      console.log(this.acct);
    },
    routeTo(route) {
      this.$router.push(route);
    },
    async getNotifications() {
      if (this.acct === 0) { return []; }
      try {
        // console.log(this.$store.state.userID);
        const { data: { findAccount } } = await this.$apollo.query({
          query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
              _id
              notifications {
                text
                route
                notification_type
                date
              }
            }
          }`),
          variables: {
            uid: this.$store.state.userID,
          },
        });
        if (findAccount) {
          return findAccount.notifications;
        }
      } catch (e) {
        console.error(e);
      }
      return [];
    },
    isActiveJobPostLink(link) {
      return link === this.$route.path ? 'job-post__helper-nav-bar__active-link' : '';
    },
  },
  created() {
    Bus.$on('logout', this.lo);
    Bus.$on('individual', this.l1);
    Bus.$on('business', this.l2);
    Bus.$on('firstSearch', this.fs1);
    VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
      if (data) {
        this.acct = data.acct;
        if (this.acct !== 0) {
          // TODO: make this better
          this.getNotifications().then((n) => {
            for (var i = 0; i < this.items[this.acct].length; i++) {
              if (this.items[this.acct][i].title === 'Notifications') {
                this.items[this.acct][i].subItems = n;
                break;
              }
            }
          });
        }
      }
    });
  },
  computed: {
    isJobPostRoute() {
      return (this.$route.path === '/myjobs') ||
        (this.$route.path === '/applicants') ||
        (this.$route.path === '/savedjobs') ||
        (this.$route.path === '/appliedjobs') ||
        (this.$route.path === '/');
    },
  },
};
</script>
<style lang="scss">
@import 'app.css';
@import 'account.css';
@import 'applicants.css';
@import 'buttons.css';
@import 'job_pages.css';
@import 'nav.css';
@import 'postsAndSearch.css';
body, html {
  height: 100%;
  width: 100%;
}
@media only screen and (min-width:600px) {
  .hidden-sm-and-up { display:none !important; }
}
</style>
