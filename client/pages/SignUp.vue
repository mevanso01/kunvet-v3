<style scoped lang="scss">
.pos-bottom {
  position: absolute;
  width: calc(100% - 32px);
  bottom: 16px;
}
.bottom-text {
  margin: 6px 0;
  color: #999;
  text-align: center;
}
.bottom-text a {
  cursor: pointer;
  font-size: 16px;
}
.bio .input-group__input {
  padding-bottom: 4px;
}
#signup .kunvet-red-bg.btn--disabled {
  background-color: rgba(239,83,80,0.4) !important;
  color: #fff;
}
.student-signup-color {
  // color: #3089fc;
  // color: #019de1;
  color: #3488fc;
}
.business-signup-color {
  color: #ffc370;
}
.individual-signup-color {
  color: #e491ff;
}
.flex {
  padding: 8px;
}
.choose-account-section {
  text-align: center;
  h2 {
    font-weight: bold;
  }
}
@media (min-width: 960px) {
  h2 {
    margin-bottom: 12px;
  }
}
@media (min-width: 601px) {
  .choose-account-section {
    padding-bottom: 32px;
  }
  .choose-account-section .v-card__text  {
    padding-left: 32px;
    padding-right: 32px;
  }
  .choose-account-section .v-card {
    height: 230px;
  }
  .pos-bottom {
    width: calc(100% - 64px);
  }
  .main-cont-large-clear {
    margin-bottom: 48px;
  }
  .mobile-hr {
    display: none;
  }
}
@media (max-width: 600px) {
  .choose-account-section {
    padding: 16px 0;
  }
  .v-card {
    box-shadow: none !important;
  }
  .mobile-hr {
    display: block;
    margin: 16px auto 20px auto;
  }
  .text-xs-center.pos-bottom {
    padding-right: 16px;
    padding-left: 16px;
  }
}
</style>

<template>
  <v-container fluid class="page-height">
    <div id="signup" class="main-cont-large-clear" v-show="!alreadyloggedin">
      <section v-if="chosenForm === ''" class="choose-account-section">
          <div class="text-xs-center">
            <h1>Select an account</h1>
          </div>
          <v-layout row wrap>
            <v-flex sm4>
              <v-card>
                <v-card-text>
                  <div style="margin-bottom: 84px;">
                    <h2 class="student-signup-color">Applicants</h2>
                    <p>Are you looking to apply for jobs? Sign up here!</p>
                  </div>
                  <div class="text-xs-center pos-bottom">
                    <k-btn color="#3488fc" block @click="chooseSignup('student')">Applicant Sign Up</k-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex sm4>
              <v-divider class="mobile-hr" />
              <v-card>
                <v-card-text>
                  <div style="margin-bottom: 84px;">
                    <h2 class="business-signup-color">Business</h2>
                    <p>If you are looking to hire for your business or organization, choose this option</p>
                  </div>
                  <div class="text-xs-center pos-bottom">
                    <k-btn color="#ffc370" block @click="chooseSignup('business')">Business Sign Up</k-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex sm4>
              <v-divider class="mobile-hr" />
              <v-card>
                <v-card-text>
                  <div style="margin-bottom: 84px;">
                    <h2 class="individual-signup-color">Personal Hiring</h2>
                    <p>If you're an individual looking to hire someone, choose this option</p>
                  </div>
                  <div class="text-xs-center pos-bottom">
                    <k-btn color="#e491ff" block @click="chooseSignup('individual')">Individual Sign Up</k-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
      </section>

      <section v-if="chosenForm === 'signup'">
        <SignupComponent :type="signupType" :fname="fname" :lname="lname" :email="email" :password="password" @success="onSuccess" style="max-width: 420px; margin: auto;"></SignupComponent>
        <!-- <a style="text-align: center; margin: auto; display: block;" @click="chosenForm = ''">Choose a different kind of account</a> -->
      </section>

      <div class="bottom-text">
        <router-link :to="loginPath">
          Already have an account? <span style="text-decoration: underline;">Log in</span>
        </router-link>
      </div>
    </div>

    <div class="main-cont-large-clear" v-show="alreadyloggedin">
      <section>
        <v-layout>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-card-text>
                <h2>You're already logged in!</h2>
                <p>
                  Please log out if you want to sign up with a new account.<br>
                  If you need assistance, please <a href="/contact">contact support</a>.
                </p>
                <v-btn style="margin-left: 0;" outline @click="logout" :disabled="loading">Log out</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </section>
    </div>
  </v-container>
</template>
<script>
import axios from 'axios';
import EventBus from '@/EventBus';
import userDataProvider from '@/userDataProvider';
import SignupComponent from '@/components/SignupComponent';

export default {
  metaInfo: {
    title: 'Get an Account | Kunvet',
    meta: [
      { name: 'description', content: 'Get an account and start exploring all the new jobs or talents near you.' },
    ],
  },
  props: {
    stage: {
      type: String,
      default: '',
    },
    fname: {
      type: String,
      default: '',
    },
    lname: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      e1: true,
      valid: false,
      chosenForm: '',
      loading: false,
      error: null,
      alreadyloggedin: false,
      signupType: '',
    };
  },
  components: {
    SignupComponent,
  },
  watch: {
    $route(to) {
      if (to.path === '/sign-up') {
        this.chosenForm = '';
        this.signupType = '';
      }
    },
  },
  methods: {
    chooseSignup(type) {
      this.signupType = type;
      this.chosenForm = 'signup';
      // this.$router.push(`/sign-up?type=${type}`);
      this.$router.push(`/sign-up/${type}`);
    },
    onSuccess() {
      // if (this.$ga) {
      //   this.$ga.event('account', 'create', 'applicant', 1);
      //   console.log('ga: account/create/applicant/1');
      // }
      if (window.dataLayer) {
        if (this.signupType === 'student') {
          window.dataLayer.push({ 'event': 'create-applicant-account' });
          console.log('gtm: create-applicant-account');
        } else {
          window.dataLayer.push({ 'event': 'create-employer-account' });
          console.log('gtm: create-employer-account');
        }
      }
      console.log('----------------------');
      console.log(this.signupType);
      if (this.signupType === 'business') {
        this.$router.push('/myorg');
      } else {
        this.$router.push('/account');
      }
    },
    goToLogin() {
      this.$router.push('/login');
    },
    commitUserdata(udata) {
      this.$store.commit({
        type: 'keepUserdata',
        userdata: udata,
      });
    },
    commitID(_id) {
      this.$store.commit({
        type: 'setAcctID',
        id: _id,
      });
    },
    commitBusinessID(_id) {
      this.$store.commit({
        type: 'setBusinessID',
        id: _id,
      });
    },
    logout() {
      this.loading = true;
      EventBus.$emit('logout');
      this.$store.commit({
        type: 'resetState',
      });
      axios.get('/auth/logout').then(() => {
        this.loading = false;
        this.alreadyloggedin = false;
      }, (error) => {
        this.loading = false;
        this.$error(error);
      });
    },
    resetData() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },
  activated() {
    this.resetData();
    console.log('Activated');
    if (this.$route.query.type) {
      this.signupType = this.$route.query.type;
      this.chosenForm = 'signup';
    } else if (this.stage) {
      this.signupType = this.stage;
      this.chosenForm = 'signup';
    } else {
      this.chosenForm = '';
    }
    userDataProvider.getUserData().then(data => {
      if (data.acct !== 0) {
        this.alreadyloggedin = true;
      } else {
        this.alreadyloggedin = false;
      }
    });
  },
  computed: {
    loginPath() {
      return {
        path: '/login',
        query: {
          redirect: this.$route.query.redirect,
        },
      };
    },
  },
};
</script>
