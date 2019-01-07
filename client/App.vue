<template>
  <v-app>
    <div v-if="devmode" class="devmode">
      Development mode
    </div>
    <!--desktop version position: absolute; top: 0; -->
    <v-toolbar flat fixed class="main-navbar mobile-hide" :class="{ 'white-bg': navHasBg }" style="z-index: 200; background-color: inherit;">
      <router-link to="/search">
        <img src="./assets/job_detail/whitelogo.svg" alt="" style="height: 26px; width: 128px;">
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="acct === 0">
        <v-btn flat v-for="item in items[acct]" :to="item.href" :key="item.title" style="background-color: inherit;" class="text-capitalize white--text">
          {{ item.title }}
        </v-btn>
        <div style="padding-top: 18px; padding-left: 16px;">
          <router-link to="/createjob">
            <v-btn class="post-a-job-button" outline>Post a Job</v-btn>
          </router-link>
        </div>
      </v-toolbar-items>
      <!--logged in but not a job-route-->
      <v-toolbar-items v-if="!isJobPostRoute && acct !== 0">
        <v-btn flat v-for="item in items[acct]" :to="item.href" :key="item.title" style="background-color: inherit;" class="text-capitalize white--text">
          <!--TODO: make the notifications button and profile pic actually work-->
          {{ item.title }}
        </v-btn>

      </v-toolbar-items>
      <!--logged in but is a job-route-->
      <v-toolbar-items v-if="isJobPostRoute && acct !== 0">
        <v-btn flat href="/search" style="background-color: inherit;" class="text-capitalize white--text">Search</v-btn>
        <v-btn flat href="/myjobs" style="background-color: inherit;" class="text-capitalize white--text">My Jobs</v-btn>

        <!--TODO: notification mark-->

        <v-btn flat href="/notifications" style="background-color: inherit;" class="text-capitalize white--text">Notifications</v-btn>
        <v-btn flat href="/settings" style="background-color: inherit;" class="text-capitalize white--text">Settings</v-btn>
        <v-btn flat href="/account" class="white--text" style="background-color: inherit;">
          <img style="width: 28px; border-radius: 50%; top: 10px;" :src="profilePic">
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <!--mobile version-->
    <div class="mobile-show">
      <div class="header-icon-container " style="z-index: 100; ">
        <div style="padding: 12px 0 0 24px; ">
          <a href="/search">
            <img src="./assets/job_detail/whitelogo.svg" style="height: 26px; width: 128px;">
          </a>
        </div>
        <button style="padding: 12px 24px 0 0;" @click="drawer = !drawer">
          <img src="./assets/job_detail/sandwich.svg" style="height: 32px; width: 40px;">
        </button>
      </div>
    </div>

    <!--this is the old mobile menu-->

    <!--<v-navigation-drawer class="hidden-sm-and-up mobile-menu" v-show="drawer" absolute temporary right light v-model="drawer" overflow>-->
      <!--<v-toolbar flat class="transparent">-->
        <!--<v-list class="pa-0">-->
          <!--<v-list-tile>-->
            <!--<v-list-tile-content style="flex: 0 1 85%;">-->
              <!--<v-list-tile-title>Menu</v-list-tile-title>-->
            <!--</v-list-tile-content>-->
            <!--<v-btn icon @click.stop="drawer = !drawer">-->
                <!--<v-icon>clear</v-icon>-->
              <!--</v-btn>-->
          <!--</v-list-tile>-->
        <!--</v-list>-->
      <!--</v-toolbar>-->
      <!--<v-list class="pt-0" dense>-->
        <!--<div v-for="category in sidebarItems[acct]" style="border: solid 1px #E7E7E7; margin: 0 0 20px 0;">-->
          <!--<div>-->
            <!--<router-link :to="item.href" v-for="item in category" :key="item.title">-->
              <!--<v-list-tile>-->
                <!--<v-list-tile-content>-->
                  <!--<v-list-tile-title>{{ item.title }}</v-list-tile-title>-->
                <!--</v-list-tile-content>-->
              <!--</v-list-tile>-->
            <!--</router-link>-->
          <!--</div>-->
        <!--</div>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->

    <div id="d-menu" class="d-menu mobile-show" v-show="drawer">
      <div class="d-menu-inner">
        <div v-for="(item, idx) in dmenuItems[acct]" style="background-color: #fff">
          <div class="d-menu-item" @click="handleDMenuClick(item)" :class="`idx-${idx}`" :key="item.title">
            {{ item.title }}
            <!--TODO: replace with user's name-->
            <p v-if="item.isTop" style="font-size: 16px; margin: 0; color: white; font-weight: normal">Edit Profile</p>
          </div>
          <div v-if="item.subItems">
            <div v-for="subItem in item.subItems" v-show="openSubitem === item.title"
                 @click="drawer = false;" :key="subItem.title" class="d-menu-item" :class="`idx-${idx}`">
              {{ subItem.title }}
            </div>
          </div>
        </div>
        <div class="d-menu-close">
          <button @click="drawer = false;">
            <i class="fa fa-times-circle " style="font-size: 46px; color: #FFE2E2;"></i>
          </button>
        </div>
      </div>
    </div>

    <main v-bind:class="{ 'dn': isJobPostRoute && acct !== 0 }">
      <transition name="fade-transition">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </main>

    <div id="bottom">
      <div id="bottom-content">
        <v-layout row wrap>
          <v-flex class="footer-big-text">
            <p class="kunvet-red">Kunvet 2018 &copy; All rights reserved.</p>
          </v-flex>
          <v-flex>
            <router-link to="/about"><p style="color: #b3b3b3">About Us</p></router-link>
          </v-flex>
          <v-flex>
            <router-link to="/join"><p style="color: #b3b3b3">Join Us</p></router-link>
          </v-flex>
          <v-flex>
            <router-link to="/contact"><p style="color: #b3b3b3">Contact Us</p></router-link>
          </v-flex>
          <v-flex>
            <router-link to="/terms"><p style="color: #b3b3b3">Terms & Policy</p></router-link>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';
import gql from 'graphql-tag';
import axios from 'axios';
import EventBus from '@/EventBus';
import ProfilePicHelper from '@/utils/GetProfilePic';
import userDataProvider from '@/userDataProvider';
import StringHelper from '@/utils/StringHelper';
import Notifications from '@/components/Notifications';
import SwitchAccount from '@/components/SwitchAccount';

import 'font-awesome/scss/font-awesome.scss';
import '@/stylus/main.styl';
// import 'vuetify/dist/vuetify.min.css';

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
      return process.env.NODE_ENV === 'production' ? val.replace(/[\s|\r\n|\r|\n]/g, '') : val;
    },
  },
});

Vue.mixin({
  methods: {
    capitalize: StringHelper.capitalize,
  },
});

export default {
  data() {
    return {
      acct: 0,
      profilePic: '',
      drawer: false,
      // TODO:modify subitems and stuff for items
      items: [
        [
          { title: 'Login', icon: null, href: '/login' },
          { title: 'Sign up', icon: null, href: '/signup' },
        ],
        [
          {
            title: 'Jobs',
            icon: sfg,
            href: '/search',
            subItems: [],
          },
          { title: 'Notifications', icon: bellg, href: '/notifications', subItems: [] },
          { title: 'My Profile', icon: personSvgG, href: '/account', subItems: ['SwitchAccount', { text: 'Settings', route: '/settings' }, 'Logout'] },
        ],
        [
          {
            title: 'My Jobs',
            icon: sfw,
            href: '/myjobs',
            subItems: [],
          },
          { title: 'Notifications', icon: bellw, href: '/notifications', subItems: [] },
          { title: 'Account', icon: peopleFullWhite, href: '/myorg', subItems: ['SwitchAccount', { text: 'Settings', route: '/settings' }, 'Logout'] },
        ],
      ],
      dmenuItems: [
        [
          { title: 'Login', href: '/login' },
          { title: 'Sign up', href: '/signup' },
          { title: 'Post a Job', href: '/createjob' },
        ],
        [
          { title: 'User\'s Name', href: '/account', isTop: true },
          { title: 'Search', href: '/search' },
          {
            title: 'My Jobs',
            subItems: [
              { title: 'Saved Jobs', href: '/savedjobs' },
              { title: 'Applied Jobs', href: '/appliedjobs' },
            ],
          },
          { title: 'Notifications', href: '/account' },
          {
            title: 'Settings',
            subItems: [
              { title: 'Email & Password' },
              { title: 'Email Preferences' },
              { title: 'Billing Info' },
              { title: 'Delete Account' },
            ],
          },
          { title: 'Log Out', href: '/account' },
        ],
        [
          [
            { title: 'Post New Job',  href: '/createjob' },
            { title: 'My Posted Jobs', href: '/myjobs' },
            { title: 'Applicants', href: '/applicants' },
          ],
          [
            { title: 'Notifications', href: '/notifications' },
            { title: 'Account', href: '/myorg' },
            { title: 'Settings', href: '/settings' },
          ],
          [
            { title: 'Job Search', href: '/' },
            { title: 'Applied Jobs', href: '/appliedjobs' },
            { title: 'Saved Jobs', href: '/savedjobs' },
          ],
        ],
      ],
      // TODO: sidebaritems still needed
      sidebarItems: [
        [
          [
            { title: 'Login', icon: null, href: '/login' },
            { title: 'Sign up', icon: null, href: '/signup' },
            { title: 'Post a Job', icon: null, href: '/createjob' },
          ],
        ],
        [
          [
            { title: 'Search', href: '/search' },
            { title: 'Applied Jobs', href: '/appliedjobs' },
            { title: 'Saved Jobs', href: '/savedjobs' },
          ],
          [
            { title: 'Notifications', href: '/notifications' },
            { title: 'My Profile', href: '/account' },
            { title: 'Settings', href: '/settings' },
          ],
          [
            { title: 'Post Individual Job',  href: '/createjob' },
            { title: 'My Posted Jobs', href: '/myjobs' },
            { title: 'My Applicants', href: '/applicants' },
          ],
        ],
        [
          [
            { title: 'Post New Job',  href: '/createjob' },
            { title: 'My Posted Jobs', href: '/myjobs' },
            { title: 'Applicants', href: '/applicants' },
          ],
          [
            { title: 'Notifications', href: '/notifications' },
            { title: 'Account', href: '/myorg' },
            { title: 'Settings', href: '/settings' },
          ],
          [
            { title: 'Job Search', href: '/' },
            { title: 'Applied Jobs', href: '/appliedjobs' },
            { title: 'Saved Jobs', href: '/savedjobs' },
          ],
        ],
      ],
      svgs: { kunvetLogoNav: logoNav, kunvetLogoFooter: logoFooter },
      right: true,
      numNotifications: 0,
      openSubitem: '',
    };
  },
  components: {
    Notifications,
    SwitchAccount,
  },
  methods: {
    handleDMenuClick(item) {
      if (item.subItems) {
        this.openSubitem = this.openSubitem === item.title ? '' : item.title;
      } else {
        this.$router.push(item.href);
        this.drawer = false;
      }
    },
    firstSearch() {
      EventBus.$emit('firstSearch');
      this.firstS = false;
    },
    lo() {
      this.acct = 0;
      this.$store.commit({ type: 'logout' });
      this.$store.commit({ type: 'setDefaultOrg', payload: { id: null } });
    },
    logout() {
      EventBus.$emit('logout');
      this.$store.commit({ type: 'resetState' });
      axios.get('/auth/logout').then(() => {
      }, (error) => {
        this.$error(error);
      });
      this.$router.push('/');
    },
    emitSetNumNotifications(n) {
      EventBus.$emit('setNotifications', n);
    },
    async setProfilePic(uid = null, bid = null) {
      const userID = uid || this.$store.state.userID;
      const businessID = bid || this.$store.state.default_org;
      if (userID) {
        this.profilePic = await ProfilePicHelper.getProfilePic(userID, businessID);
      } else {
        this.profilePic = '';
      }
    },
    l1() {
      this.acct = 1;
      this.$store.commit({
        type: 'setAcct',
        acct: 1,
      });
      this.$store.commit('go');
      this.$store.commit({ type: 'setDefaultOrg', payload: { id: null } });
      this.setProfilePic();
    },
    l2() {
      this.acct = 2;
      this.$store.commit({
        type: 'setAcct',
        acct: 2,
      });
      this.$store.commit('go');
      this.setProfilePic();
    },
    routeTo(route) {
      this.$router.push(route);
    },
    getNumNotifications() {
      if (this.acct === 0 || !this.$store.state.userID) {
        this.numNotifications = 0;
        return;
      }
      this.$apollo.query({
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
      }).then((res) => {
        const n = res.data.findAccount.notifications;
        this.numNotifications = n.length;
      }).catch(this.$error);
    },
    isActiveJobPostLink(link) {
      return link === this.$route.path ? 'job-post__helper-nav-bar__active-link' : '';
    },
    updateAccount(defaultOrgId) {
      this.$apollo.mutate({
        mutation: (gql`
          mutation ($uid: MongoID, $record: UpdateOneAccountInput!)
        {
          updateAccount (
            filter: { _id: $uid },
            record: $record,
          ) {
            recordId
          }
        }`),
        variables: {
          uid: this.$store.state.userID,
          record: {
            default_org: defaultOrgId,
          },
        },
        refetchQueries: [{
          query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
                _id
                firstname
                lastname
                school
                degree
                major
                email
                profile_pic
                org_list
                default_org
                resumes {
                  name
                  filename
                  resumeid
                }
            }
          }`),
          variables: {
            uid: this.uid,
          },
        }],
      }).catch((error) => {
        this.$error(error);
      });
    },
  },
  created() {
    EventBus.$on('logout', this.lo);
    EventBus.$on('login', this.setProfilePic);
    EventBus.$on('individual', this.l1);
    EventBus.$on('business', this.l2);
    EventBus.$on('firstSearch', this.fs1);
    EventBus.$on('setNotifications', notifications => {
      const n = Array.isArray(notifications) ? notifications.length : 0;
      if (typeof n === 'number') {
        this.numNotifications = n;
      } else {
        this.numNotifications = 0;
      }
    });

    userDataProvider.getUserData().then((res) => {
      if (res.acct === 0) { // userDataProvider returns acct = 0 by default
        // user not logged in
        this.lo();
      } else {
        // user logged in
        if (res.acct === 1) {
          this.l1();
        } else if (res.acct === 2) {
          this.l2();
        }
        if (res.userdata && res.userdata._id) {
          this.setProfilePic(res.userdata._id, res.userdata.default_org);
        }
      }
    });
    // axios.get('auth/status').then(async (res) => {
    //   if (res.data.success) {
    //     if (!res.data.status) {
    //       this.lo();
    //     } else if (res.data.user.default_org) {
    //       this.l2();
    //     } else {
    //       this.l1();
    //     }
    //     if (res.data.status) {
    //       this.setProfilePic(res.data.user._id, res.data.user.default_org);
    //     }
    //   } else {
    //     this.lo();
    //   }
    // });
  },
  computed: {
    devmode() {
      return process.env.NODE_ENV !== 'production';
    },
    isJobPostRoute() {
      const jobPostRoutes = ['/myjobs', '/applicants', '/savedjobs', '/appliedjobs', '/search', '/'];
      return jobPostRoutes.indexOf(this.$route.path) !== -1;
      // it is found
    },
    navHasBg() {
      // change this to set to white bg based on scroll position as well
      console.log(this.$route.path, this.$route.path.indexOf('/job/'));
      return this.$route.path === '/' || this.$route.path.indexOf('/job/') === -1;
    },
  },
};
</script>
<style lang="scss">
// @import '../node_modules/vuetify/dist/vuetify.min.css';
@import 'css/app.css';
@import 'css/account.css';
@import 'css/applicants.css';
@import 'css/buttons.css';
@import 'css/nav.css';
// @import 'css/postsAndSearch.css';
@import 'css/JobsAndSearch.scss';

body, html {
  height: 100%;
  width: 100%;
}
.header-icon-container {
  color: white;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.mobile-show {
  display: none ;
}
@media only screen and (min-width:600px) {
  .hidden-sm-and-up { display:none !important; }
}
@media only screen and (max-width: 600px) {
  .mobile-show {
    display: block ;
    padding: 0;
  }
  .mobile-hide {
    display: none !important;
  }
}
</style>
