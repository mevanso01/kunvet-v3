<template>
  <v-app>
    <div v-if="devmode" class="devmode">
      Development mode
    </div>
    <!--desktop version position: absolute; top: 0; -->
    <v-toolbar flat fixed class="main-navbar mobile-hide" :class="{ 'white-bg': navHasBg }" style="z-index: 200; background-color: inherit;">
      <router-link to="/search">
        <img v-if="navHasBg" src="./assets/logo/redlogo.svg" alt="" style="height: 26px; width: 128px;">
        <img v-else src="./assets/job_detail/whitelogo.svg" alt="" style="height: 26px; width: 128px;">
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="acct > 0">
        <template v-for="item in currentMenuItems">
          <v-btn
            flat @click="goTo(item.href)" style="background-color: inherit;" class="text-capitalize white--text">
            {{ item.title }}
          </v-btn>
        </template>
        <!-- <v-btn flat @click="goTo('/search');">Search</v-btn> -->
        <!-- <v-btn flat @click="goTo('/myjobs');" style="background-color: inherit;" class="text-capitalize white--text">My Jobs</v-btn> -->
        <!--TODO: notification mark-->
        <!-- <v-btn flat @click="goTo('/notifications');" style="background-color: inherit;" class="text-capitalize white--text">Notifications</v-btn> -->
        <!-- <v-btn flat @click="goTo('/settings');" style="background-color: inherit;" class="text-capitalize white--text">Settings</v-btn> -->
        <v-menu fixed offset-y left :close-on-content-click="false">
          <v-btn flat style="min-width: 64px;" slot="activator" class="white--text nav-notifications-btn">
            <img v-if="navHasBg" class="nav-img notranslate" src="./assets/navbar/bell4_red.svg"></img>
            <img v-else class="nav-img notranslate" src="./assets/navbar/bell4_white.svg"></img>
            <div class="nav-notification-mark" v-show="numNotifications > 0">{{ numNotifications }}</div>
            <!-- <div class="nav-text" style="color:#818181; text-transform: none;">Notifications</div> -->
          </v-btn>
          <Notifications isNavbar />
        </v-menu>
        <v-btn flat @click="goToAccount();" class="white--text" style="min-width: 64px; background-color: inherit;">
          <img style="width: 28px; border-radius: 50%; top: 10px;" :src="profilePic">
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <!-- :to="item.href" -->
        <v-btn flat v-for="item in currentMenuItems" @click="goTo(item.href)" :key="item.title" style="background-color: inherit;" class="text-capitalize white--text">
          {{ item.title }}
        </v-btn>
        <div style="padding-top: 18px; padding-left: 16px;">
          <router-link to="/createjob">
            <v-btn class="post-a-job-button" outline>Post a Job</v-btn>
          </router-link>
        </div>
      </v-toolbar-items>
    </v-toolbar>

    <!-- mobile menu icon -->
    <div class="mobile-show mobile-navbar">
      <div class="header-icon-container" :class="{ 'white-bg': navHasBg }" style="z-index: 100;">
        <div style="padding: 12px 0 0 24px; ">
          <router-link to="/search">
            <img v-if="navHasBg" src="./assets/logo/redlogo.svg" alt="" style="height: 26px; width: 128px;">
            <img v-else src="./assets/logo/whitelogo.svg" alt="" style="height: 26px; width: 128px;">
          </router-link>
        </div>
        <button style="padding: 12px 24px 12px 0;" @click="drawer = !drawer">
          <img v-if="navHasBg" src="./assets/mobile/menu-icon-red.svg" style="height: 32px; width: 40px;">
          <img v-else src="./assets/mobile/menu-icon-white.svg" style="height: 32px; width: 40px;">
        </button>
      </div>
    </div>


    <div id="d-menu" class="d-menu mobile-show" v-show="drawer">
      <div class="d-menu-inner">
        <div v-if="acct > 0" class="d-menu-item idx-0" @click="goToAccount()">
          My account
          <p style="font-size: 16px; margin: 0; color: white; font-weight: normal">Edit Profile</p>
        </div>
        <div v-for="(item, idx) in dmenuItems[acct]" style="background-color: #fff">
          <div class="d-menu-item" @click="handleDMenuClick(item)" :class="`idx-${indexOffset(idx)}`" :key="item.title">
            {{ item.title }}
          </div>
          <div v-if="item.subItems">
            <div v-for="subItem in item.subItems" v-show="openSubitem === item.title"
                 @click="handleDMenuClick(subItem)" :key="subItem.title" class="d-menu-subitem" :class="`subitem-${indexOffset(idx)}`">
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
// import sfw from './assets/navbar/suitcase_full_white.svg';
// import sfg from './assets/navbar/suitcase_full_gray.svg';
// import bellw from './assets/navbar/bell_full_white.svg';
// import bellg from './assets/navbar/bell_full_gray.svg';
// import peopleFullWhite from './assets/navbar/people_full_white.svg';
// import personSvgG from './assets/navbar/person_gray.svg';
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
      dmenuItems: [
        [
          { title: 'Login', href: '/login' },
          { title: 'Sign up', href: '/signup' },
          { title: 'Post a Job', href: '/createjob' },
        ],
        [
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
            title: 'Settings', href: '/settings',
            // subItems: [ // WILL IMPLEMENT LATER
            //   { title: 'Email & Password' },
            //   { title: 'Email Preferences' },
            //   { title: 'Billing Info' },
            //   { title: 'Delete Account' },
            // ],
          },
          { title: 'Log Out', href: '/settings?o=logout' },
        ],
        [
          { title: 'Post New Job',  href: '/createjob' },
          { title: 'My Posted Jobs', href: '/myjobs' },
          { title: 'My Applicants', href: '/applicants' },
          { title: 'Notifications', href: '/notifications' },
          { title: 'Account', href: '/myorg' },
          { title: 'Settings', href: '/settings' },
        ],
      ],
      newMenuItems: [
        [
          { title: 'Login', href: '/login' },
          { title: 'Sign up', href: '/signup' },
        ],
        [
          { title: 'Search', href: '/search' },
          { title: 'Applied Jobs', href: '/appliedjobs' },
          { title: 'Saved Jobs', href: '/savedjobs' },
          { title: 'Settings', href: '/settings' },
        ],
        [
          { title: 'Search', href: '/search' },
          { title: 'Post New Job', href: '/createjob' },
          { title: 'My Jobs', href: '/myjobs' },
          { title: 'Applicants', href: '/applicants' },
          { title: 'Settings', href: '/settings' },
        ],
      ],
      svgs: { kunvetLogoNav: logoNav, kunvetLogoFooter: logoFooter },
      right: true,
      numNotifications: 0,
      openSubitem: '',
      isAtTop: true,
      acctType: '',
    };
  },
  components: {
    Notifications,
    SwitchAccount,
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
      // console.log(this.$route.path, this.$route.path.indexOf('/job/'));
      // console.log(this.$route.path);
      const isTransparentPage = (this.$route.path !== '/' && this.$route.path.indexOf('/job/') !== -1) ||
        ['/', '/appliedjobs', '/settings', '/myjobs', '/savedjobs'].indexOf(this.$route.path) !== -1;
      return !this.isAtTop || !isTransparentPage;
    },
    currentMenuItems() {
      let idx = this.acct;
      if (this.acct === 1 && this.acctType === 'individual') {
        idx = 2; // same as business
        console.log('TEST');
      }
      return this.newMenuItems[idx];
    },
  },
  methods: {
    indexOffset(idx) {
      // calculate offset for mobile menu classes. 6 is the size of the largest dmenu item
      return (6 - this.dmenuItems[this.acct].length) + idx;
    },
    handleDMenuClick(item) {
      if (item.subItems) {
        this.openSubitem = this.openSubitem === item.title ? '' : item.title;
      } else {
        this.$router.push(item.href);
        this.drawer = false;
        this.openSubitem = '';
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
    setAcctData(acct, acctType) {
      this.acct = acct;
      this.acctType = acctType;
      this.$store.commit({
        type: 'setAcct',
        acct: this.acct,
      });
      this.$store.commit('go');
      if (this.acct === 1) {
        this.$store.commit({ type: 'setDefaultOrg', payload: { id: null } });
      }
      this.setProfilePic();
    },
    goTo(route) {
      this.$router.push(route);
    },
    goToAccount() {
      switch (this.acct) {
        case 0:
          this.$router.push('/login');
          break;
        case 1:
          this.$router.push('/account');
          break;
        case 2:
          this.$router.push('/myorg');
          break;
        default:
          this.$router.push('/account');
          break;
      }
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
    handleScroll() {
      const el = document.scrollingElement || document.documentElement;
      if (el.scrollTop > 30) {
        this.isAtTop = false;
      } else {
        this.isAtTop = true;
      }
    },
  },
  created() {
    EventBus.$on('logout', this.lo);
    EventBus.$on('login', acctType => {
      const acct = acctType === 'business' ? 2 : 1; // 2 for business, 1 for individual and student
      this.setAcctData(acct, acctType);
    });
    // EventBus.$on('individual', this.l1);
    // EventBus.$on('business', this.l2);
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
      } else if (res.userdata && res.userdata._id) {
        // user logged in
        this.setProfilePic(res.userdata._id, res.userdata.default_org);
        this.setAcctData(res.acct, res.userdata.account_type);
      }
    });
    window.addEventListener('scroll', this.handleScroll, { passive: true });
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
@media only screen and (min-width: 601px) {
  .hidden-sm-and-up,
  .mobile-show {
    display: none !important;
  }
}
@media only screen and (max-width: 600px) {
  .mobile-hide {
    display: none !important;
  }
}
</style>
