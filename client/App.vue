<template>
  <v-app>
    <div v-if="devmode" class="devmode">
      Development mode
    </div>
    <!--desktop version position: absolute; top: 0;  :class="{ 'white-bg': navHasBg }"     -->
    <v-toolbar v-if="!fullScreenMode" flat fixed class="main-navbar mobile-hide white-bg" style="z-index: 1010; background-color: inherit;">
      <router-link to="/jobs/search">
        <img v-if="navHasBg" src="./assets/logo/redlogo.svg" alt="" style="height: 26px; width: 128px;">
        <img v-else src="./assets/job_detail/whitelogo.svg" alt="" style="height: 26px; width: 128px;">
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="acct > 0">
        <template v-for="(item, index) in currentMenuItems">
          <v-btn
            :key="index"
            flat
            @click="goTo(item.href)"
            style="background-color: inherit;"
            class="text-capitalize white--text"
          >
            {{ item.title }}
          </v-btn>
        </template>
        <!-- <v-btn flat @click="goTo('/jobs/search');">Search</v-btn> -->
        <!-- <v-btn flat @click="goTo('/jobs/posted');" style="background-color: inherit;" class="text-capitalize white--text">My Jobs</v-btn> -->
        <!--TODO: notification mark-->
        <!-- <v-btn flat @click="goTo('/account/notification');" style="background-color: inherit;" class="text-capitalize white--text">Notifications</v-btn> -->
        <!-- <v-btn flat @click="goTo('/account/settings');" style="background-color: inherit;" class="text-capitalize white--text">Settings</v-btn> -->
        <v-menu fixed offset-y left :close-on-content-click="false" dark>
          <v-btn flat style="min-width: 64px; text-transform: capitalize;" slot="activator" class="white--text nav-notifications-btn">
              Notifications
            <div class="nav-notification-mark" v-show="numNotifications > 0">{{ numNotifications }}</div>
          </v-btn>
          <Notifications isNavbar/>
        </v-menu>
        <v-menu fixed offset-y left>
          <v-btn flat slot="activator" class="white--text" style="min-width: 64px; background-color: inherit;">
            <img style="width: 28px; border-radius: 50%; top: 10px;" :src="profilePic">
          </v-btn>
          <v-list dense class="main-navbar-dropdown-list">
            <v-list-tile @click="goToAccount()">
              <p>View Account</p>
            </v-list-tile>
            <v-list-tile @click="goTo('/account/settings')">
              <p>Settings</p>
            </v-list-tile>
            <v-list-tile @click="logout()">
              <p>Logout</p>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- <v-btn flat @click="goToAccount();" class="white--text" style="min-width: 64px; background-color: inherit;">
          <img style="width: 28px; border-radius: 50%; top: 10px;" :src="profilePic">
        </v-btn> -->
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <!-- :to="item.href" -->
        <v-btn flat v-for="item in currentMenuItems" @click="goTo(item.href)" :key="item.title" style="background-color: inherit;" class="text-capitalize white--text">
          {{ item.title }}
        </v-btn>
        <div style="padding-top: 18px; padding-left: 16px;">
          <router-link to="/hire">
            <v-btn class="post-a-job-button" outline>Post a Job</v-btn>
          </router-link>
        </div>
      </v-toolbar-items>
    </v-toolbar>

    <!-- mobile menu icon -->
    <div v-if="!fullScreenMode" class="mobile-show mobile-navbar">
      <div class="header-icon-container" :class="{ 'white-bg': navHasBg }" style="z-index: 1010;">
        <div style="padding: 12px 0 0 21px;">
          <router-link to="/jobs/search">
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


    <div v-if="!fullScreenMode" id="d-menu" class="d-menu mobile-show" v-show="drawer">
      <div class="d-menu-inner">
        <div style="background-color: #fff">
          <div v-if="acct > 0" class="d-menu-item idx-0" @click="goToAccount()">
            {{ usersName || 'My account' }}
            <p style="font-size: 16px; margin: 0; color: white; font-weight: normal">Edit Profile</p>
          </div>
          <div v-for="(item, idx) in currentMobileMenuItems" style="background-color: #fff">
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
        </div>
        <div class="d-menu-close">
          <button @click="drawer = false;">
            <!-- <i class="fa fa-times-circle " style="font-size: 46px; color: #FFE2E2;"></i> -->
            <img src="./assets/mobile/close-white.svg" alt="" style="height: 46px; width: 46px;">
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

    <div v-if="!fullScreenMode" id="bottom">
      <div id="bottom-content">
        <v-layout row wrap>
          <v-flex class="footer-big-text">
            <p class="kunvet-red">Kunvet Inc. 2020 &copy; All rights reserved.</p>
          </v-flex>
          <v-flex>
            <router-link to="/about"><p style="color: #b3b3b3">About Us</p></router-link>
          </v-flex>
          <v-flex>
            <router-link to="/careers"><p style="color: #b3b3b3">Join Us</p></router-link>
          </v-flex>
          <v-flex>
            <router-link to="/contact"><p style="color: #b3b3b3">Contact Us</p></router-link>
          </v-flex>
          <v-flex>
            <router-link
              to="/career-guide"><p style="color: #b3b3b3">Career Guide</p></router-link>
          </v-flex>
          <v-flex>
            <router-link
              to="/terms"><p style="color: #b3b3b3">Terms and Conditions</p></router-link>
          </v-flex>
          <!-- <v-flex>
            <router-link
              to="/pricing"><p style="color: #b3b3b3">Pricing and Refunds</p></router-link>
          </v-flex> -->
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
          { title: 'Sign up', href: '/sign-up' },
          { title: 'Post a Job', href: '/hire' },
          { title: 'Learn', href: '/career-guide' },
        ],
        [
          { title: 'Search', href: '/jobs/search' },
          {
            title: 'My Jobs',
            subItems: [
              { title: 'Saved Jobs', href: '/jobs/saved' },
              { title: 'Applied Jobs', href: '/jobs/applied' },
            ],
          },
          { title: 'Notifications', href: '/account' },
          { title: 'Learn', href: '/career-guide' },
          {
            title: 'Settings', href: '/account/settings',
            // subItems: [ // WILL IMPLEMENT LATER
            //   { title: 'Email & Password' },
            //   { title: 'Email Preferences' },
            //   { title: 'Billing Info' },
            //   { title: 'Delete Account' },
            // ],
          },
          { title: 'Log Out', href: '/account/settings?o=logout' },
        ],
        [
          { title: 'Post New Job',  href: '/jobs/create' },
          { title: 'My Posted Jobs', href: '/jobs/posted' },
          { title: 'My Applicants', href: '/jobs/applicants' },
          { title: 'Notifications', href: '/account/notification' },
          { title: 'Account', href: '/myorg' },
          { title: 'Settings', href: '/account/settings' },
        ],
      ],
      newMenuItems: [
        [
          { title: 'Search', href: '/' },
          { title: 'Login', href: '/login' },
          { title: 'Sign up', href: '/sign-up' },
          { title: 'Learn', href: '/career-guide' },
        ],
        [
          { title: 'Search', href: '/jobs/search' },
          { title: 'Applied Jobs', href: '/jobs/applied' },
          { title: 'Saved Jobs', href: '/jobs/saved' },
          { title: 'Learn', href: '/career-guide' },
        ],
        [
          { title: 'Search', href: '/jobs/search' },
          { title: 'Post New Job', href: '/jobs/create' },
          { title: 'My Jobs', href: '/jobs/posted' },
          { title: 'Applicants', href: '/jobs/applicants' },
        ],
      ],
      svgs: { kunvetLogoNav: logoNav, kunvetLogoFooter: logoFooter },
      right: true,
      numNotifications: 0,
      openSubitem: '',
      isAtTop: true,
      acctType: '',
      usersName: '',
    };
  },
  components: {
    Notifications,
    SwitchAccount,
  },
  watch: {
    drawer() {
      if (this.drawer) {
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        document.querySelector('body').style.overflow = 'scroll';
      }
    },
  },
  computed: {
    devmode() {
      return process.env.NODE_ENV !== 'production';
    },
    isJobPostRoute() {
      const jobPostRoutes = ['/jobs/posted', '/jobs/applicants', '/jobs/saved', '/jobs/applied', '/jobs/search', '/'];
      return jobPostRoutes.indexOf(this.$route.path) !== -1;
      // it is found
    },
    fullScreenMode() {
      return this.isBlogRoute || this.isUnsubscribeRoute || this.isFeedbackRoute;
    },
    isFeedbackRoute() {
      if (this.$route.path === '/' && this.$route.name === null) {
        return true;
      }
      return this.$route.path.startsWith('/feedback');
    },
    isUnsubscribeRoute() {
      if (this.$route.path === '/' && this.$route.name === null) {
        return true;
      }
      return this.$route.path.startsWith('/unsubscribe');
    },
    isBlogRoute() {
      if (this.$route.path === '/' && this.$route.name === null) {
        return true;
      }
      const jobBlogRoutes = ['/career-guide'];
      return jobBlogRoutes.indexOf(this.$route.path) !== -1;
    },
    navHasBg() {
      // change this to set to white bg based on scroll position as well
      // console.log(this.$route.path, this.$route.path.indexOf('/jobs/detail/'));
      // console.log(this.$route.path);
      const isTransparentPage = (this.$route.path !== '/' && this.$route.path.indexOf('/jobs/detail/') !== -1);
      //  || ['/', '/jobs/applied', '/account/settings', '/jobs/posted', '/jobs/saved'].indexOf(this.$route.path) !== -1;
      return !this.isAtTop || !isTransparentPage;
    },
    currentMenuItems() {
      let idx = this.acct;
      if (this.acct === 1 && this.acctType === 'individual') {
        idx = 2; // same as business
      }
      return this.newMenuItems[idx];
    },
    currentMobileMenuItems() {
      let idx = this.acct;
      if (this.acct === 1 && this.acctType === 'individual') {
        idx = 2; // same as business
      }
      return this.dmenuItems[idx];
    },
  },
  methods: {
    indexOffset(idx) {
      // calculate offset for mobile menu classes. 6 is the size of the largest dmenu item
      // plus 6 + 1 to account for first item with account name
      return (7 - this.currentMobileMenuItems.length) + idx;
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
      this.usersName = '';
      this.$store.commit({ type: 'logout' });
      this.$store.commit({ type: 'setDefaultOrg', payload: { id: null } });
    },
    logout() {
      EventBus.$emit('logout'); // triggers lo() function
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
      var businessID = bid || this.$store.state.default_org;
      if (!businessID && this.acct === 2) {
        businessID = true;
      }
      if (userID) {
        this.profilePic = await ProfilePicHelper.getProfilePic(userID, businessID);
      } else {
        this.profilePic = '';
      }
    },
    setAcctData(acct, acctType) {
      console.log('Setting acct data', acct, acctType);
      this.acct = acct;
      this.acctType = acctType;
      this.$store.commit({
        type: 'setAcct',
        acct: this.acct,
      });
      // this.$store.commit('go'); // Firstsearch no longer used
      if (this.acct === 1) {
        this.$store.commit({ type: 'setDefaultOrg', payload: { id: null } });
      }
      this.setProfilePic();
      if (this.$store.state.userdata && this.$store.state.userdata.firstname && this.$store.state.userdata.lastname) {
        const name = `${this.$store.state.userdata.firstname} ${this.$store.state.userdata.lastname}`;
        if (name.length < 30 && name.length > 2) {
          this.usersName = name;
        }
      }
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
      this.drawer = false;
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
      if (acctType === 'update' && this.acctType) { // special case
        this.setAcctData(this.acct, this.acctType);
        return;
      }
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
        let acctType = res.userdata.account_type;
        if (acctType === 'business' && !res.userdata.default_org) {
          // TODO: create better solution for business accounts that dont have an org
          acctType = 'individual';
        }
        this.setAcctData(res.acct, acctType);
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
@import 'css/about.css';
@import 'css/share.min.css';

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
