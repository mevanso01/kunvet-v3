<template>
  <v-app>
    <div v-if="devmode" class="devmode">
      Development mode
    </div>
    <v-toolbar fixed class="main-navbar" :height="64" v-bind:class="{ black: (acct == 2), white: (acct != 2) }">
      <router-link to="/search">
            <div id="nav-logo">
              <!--<img id="nav-logo-svg" :src="svgs.kunvetLogoNav"></img>-->
                <svg id="nav-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="312 0 2384 1024">
                    <path fill="var(--navbar-icon-color)" d="M506.16,577.25c-46.35,0-92.71.29-139.05-.42-5.78-.09-14.6-4.23-16.72-8.9-20.71-45.61-37.64-92.35-37.34-143.58.29-50,19-91.57,62.15-117.12,76.17-45.1,158.71-61.61,246-41.22,45,10.51,70.88,42.05,79.76,86.87C711.62,406.7,699.19,458.25,682.9,509c-6.12,19.06-14.73,37.32-21.06,56.32-3.23,9.7-8.61,12.17-18.16,12.09C597.84,577,552,577.27,506.16,577.25Z"
                    />
                    <path fill="var(--navbar-icon-color)" d="M510,824.51c-21.76-30.53-41.24-57.45-60.25-84.7C438.55,723.78,412.5,683,412.5,683a46,46,0,0,1,5.66-6.22c54.42-44.31,128.54-42.73,185.28,7.29Z"
                    />
                    <path fill="var(--navbar-wordmark-color)" d="M810.57,376.87h49.36v75.23l88.73-75.23h38.11L886.65,461.53l127,115.59H954.15l-94.22-85.78v85.78H810.57Z" />
                    <path fill="var(--navbar-wordmark-color)" d="M1028,376.87h49.22V505.54a65.43,65.43,0,0,0,3.59,21.87A53.44,53.44,0,0,0,1091,545.2a48.44,48.44,0,0,0,16.24,12,53.62,53.62,0,0,0,42.68,0,48.68,48.68,0,0,0,16.17-12,53.49,53.49,0,0,0,10.27-17.79,65.43,65.43,0,0,0,3.59-21.87V376.87h30.94V505.54a81.69,81.69,0,0,1-5.27,29.32,63.8,63.8,0,0,1-16.45,24.26q-11.18,10.41-28.83,16.45t-42.26,6q-22.08,0-38.88-6T1051,559.05a69.13,69.13,0,0,1-17.23-24.4,75.59,75.59,0,0,1-5.84-29.53Z"
                    />
                    <path fill="var(--navbar-wordmark-color)" d="M1260.15,376.87h31.36L1405.7,504.28V376.87h30.8V580.22h-21.23l-124-140.62V577.12h-31.08Z" />
                    <path fill="var(--navbar-wordmark-color)" d="M1511.87,376.87l66.23,138.37,61.31-138.37h31.64l-90.14,203.34h-23.06L1461.1,376.87Z" />
                    <path fill="var(--navbar-wordmark-color)" d="M1845.15,376.87v17H1744.74V460h83.39v17.16h-83.39v79.45h100.41v20.53H1695.67V376.87Z" />
                    <path fill="var(--navbar-wordmark-color)" d="M2059.6,376.87v17h-69.33V577.12H1941.2V393.89h-69.33v-17Z" />
                </svg>
            </div>
        </router-link>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-up">
          <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </div>
        <v-toolbar-items v-if="acct === 0" class="hidden-xs">
          <router-link v-for="item in items[acct]" :to="item.href" :key="item.title" class="nav-items">
            <v-btn flat>{{ item.title }}</v-btn>
          </router-link>
          <div style="padding-top: 18px; padding-left: 16px;">
            <router-link to="/employers">
              <v-btn class="kunvet-red post-a-job-button" outline>Post a Job</v-btn>
            </router-link>
          </div>
        </v-toolbar-items>

        <v-toolbar-items v-else class="hidden-xs">
          <router-link v-for="item in items[acct]" :to="item.href" :key="item.title" class="nav-items">

            <v-menu fixed offset-y v-if="item.subItems" left open-on-hover :close-on-content-click="false">

              <template v-if="item.title === 'Notifications'">
                <v-btn flat style="width: 10px;" slot="activator">
                  <img class="nav-img notranslate" :src="item.icon"></img>
                  <div class="nav-notification-mark" v-show="numNotifications > 0">{{ numNotifications }}</div>
                  <div class="nav-text" style="color:#818181; text-transform: none;">{{ item.title }}</div>
                </v-btn>
                <Notifications :isNavbar="true" />
              </template>

              <template v-else>
                <v-btn flat style="width: 10px;" slot="activator">
                  <img v-if="['Account', 'My Profile'].includes(item.title)" class="nav-img nav-profile-pic" :src="profilePic"></img>
                  <img v-else class="nav-img" :src="item.icon"></img>
                  <div class="nav-text" style="color:#818181; text-transform: none;">{{ item.title }}</div>
                </v-btn>
                <v-list v-if="item.subItems.length > 0" dense>
                  <div v-for="(subitem, index) in item.subItems" :key="index">
                    <v-list-tile v-if="subitem.text" @click="routeTo(subitem.route)">
                      <v-list-tile-title style="font-size: 14px;">{{ subitem.text }}</v-list-tile-title>
                    </v-list-tile>
                    <div v-else-if="subitem === 'SwitchAccount'">
                      <SwitchAccount :isNavbar="true"/>
                    </div>
                    <v-list-tile v-else-if="subitem === 'Logout'" @click="logout">
                      <v-list-tile-title style="font-size: 14px;">Log out</v-list-tile-title>
                    </v-list-tile>
                  </div>
                </v-list>
              </template>
            </v-menu>

            <!--<v-btn v-else flat>
              <img class="nav-img" :src="item.icon"></img>
              <div class="nav-text" style="color:#818181">{{ item.title }}</div>
            </v-btn>-->
          </router-link>
        </v-toolbar-items>
    </v-toolbar>
    <v-toolbar
      dense flat
      v-if="isJobPostRoute && acct !== 0"
      class="job-post__helper-nav-bar"
    >
      <v-toolbar-items>
        <v-btn flat small :ripple="false" :to="'/search'" :class="isActiveJobPostLink('/search')">
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
            My Jobs
          </span>
        </v-btn>
        <v-btn flat small :ripple="false" :to="'/applicants'" :class="isActiveJobPostLink('/applicants')">
          <span class="job-post__helper-nav-bar__btn-text">
            My Applicants
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

    <v-navigation-drawer class="hidden-sm-and-up mobile-menu" v-show="drawer" absolute temporary right light v-model="drawer" overflow>
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
        <div v-for="category in sidebarItems[acct]" style="border: solid 1px #E7E7E7; margin: 0 0 20px 0;">
          <div>
            <router-link :to="item.href" v-for="item in category" :key="item.title">
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </router-link>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>

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
      sidebarItems: [
        [
          [
            { title: 'Login', icon: null, href: '/login' },
            { title: 'Sign up', icon: null, href: '/signup' },
            { title: 'Post a Job', icon: null, href: '/employers' },
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
            { title: 'Post Individual Job',  href: '/createnewjob' },
            { title: 'My Posted Jobs', href: '/myjobs' },
            { title: 'My Applicants', href: '/applicants' },
          ],
        ],
        [
          [
            { title: 'Post New Job',  href: '/createnewjob' },
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
    };
  },
  components: {
    Notifications,
    SwitchAccount,
  },
  methods: {
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

    axios.get('auth/status').then(async (res) => {
      if (res.data.success) {
        if (!res.data.status) {
          this.lo();
        } else if (res.data.user.default_org) {
          this.l2();
        } else {
          this.l1();
        }

        if (res.data.status) {
          this.setProfilePic(res.data.user._id, res.data.user.default_org);
        }
      } else {
        this.lo();
      }
    });
  },
  computed: {
    devmode() {
      return process.env.NODE_ENV !== 'production';
    },
    isJobPostRoute() {
      const jobPostRoutes = ['/myjobs', '/applicants', '/savedjobs', '/appliedjobs', '/search', '/'];
      return jobPostRoutes.indexOf(this.$route.path) !== -1;
    },
  },
};
</script>
<style lang="scss">
// @import '../node_modules/vuetify/dist/vuetify.min.css';
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
