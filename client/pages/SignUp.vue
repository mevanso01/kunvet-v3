<style>
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
  margin-right: 20px;
  margin-left: 8px;
}
.bio .input-group__input {
  padding-bottom: 4px;
}
#signup .kunvet-red-bg.btn--disabled {
  background-color: rgba(239,83,80,0.4) !important;
  color: #fff;
}
</style>

<template>
  <v-container fluid>
    <div id="signup" class="main-cont-large-clear" v-show="!alreadyloggedin">
      <section v-if="chosenForm === ''">
          <div class="text-xs-center">
               <h1>Select an account</h1>
          </div>
          <v-layout row wrap>
            <v-flex d-flex xs12 md6 class="padding-10px-sm-up">
              <v-card>
                <v-card-text>
                  <div style="margin-bottom: 64px;">
                    <h2>Personal</h2>
                    <p>Choose if you're:</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> A professor looking for an assistant</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> An applicant searching for jobs</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> An individual searching for a tutor</p>
                  </div>
                  <div class="text-xs-center pos-bottom">
                    <v-btn class="kunvet-red-bg" dark @click="chooseFormI()">Get a personal account</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 md6 class="padding-10px-sm-up">
              <v-card>
                <v-card-text>
                  <div style="margin-bottom: 64px;">
                    <h2>Organization</h2>
                    <p>Choose if you're:</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> A school club offering a position</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> A startup searching for other students</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> A small business hiring students</p>
                  </div>
                  <div class="text-xs-center pos-bottom">
                    <v-btn class="kunvet-red-bg" dark @click="chooseFormB()">Get an organization account</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
      </section>

      <section style="padding-top: 0px" v-if="chosenForm === 'individual'">
        <v-layout>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-card-text>
                <h2>Just enter your name and email to get started</h2>
                <p v-if="error === 'UserExistsError'" style="color: #f00">
                  Someone is using this email already. Would you like to <router-link to="/login" style="text-decoration: underline;">login?</router-link>
                </p>
                <v-form v-model="valid" ref="form">
                  <v-text-field
                    label="First name"
                    v-model="fname"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Last name"
                    v-model="lname"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Create password"
                    v-model="password"
                    :rules="passwordRules"
                    min="8"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    required
                  ></v-text-field>
                  <v-select class="optional"
                    label="(Optional) How did you hear of Kunvet?"
                    v-model="howDidYouHear"
                    v-bind:items="howDidYouHearItems"
                    hide-details
                  ></v-select>
                  <br>
                  <div class="text-xs-center">
                    <v-btn class="kunvet-red-bg" :disabled="loading" dark @click="submit">Sign up!</v-btn>
                    <p v-show="loading" style="color: #999">Loading...</p>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
            <div class="bottom-text">
              <router-link to="/login">Already have an account? Log in</router-link>
            </div>
          </v-flex>
        </v-layout>
      </section>

      <section style="padding-top: 0px" v-if="chosenForm === 'business'">
        <v-layout>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-card-text>
                <h2>Let's get started</h2>
                <v-form v-model="valid" ref="form">
                  <v-text-field
                    label="First name"
                    v-model="fname"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Last name"
                    v-model="lname"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Name of organization / business"
                    v-model="business_name"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    type="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Create password"
                    v-model="password"
                    :rules="passwordRules"
                    min="8"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    required
                  ></v-text-field>
                  <v-select class="optional"
                    label="(Optional) How did you hear of Kunvet?"
                    v-model="howDidYouHear"
                    v-bind:items="howDidYouHearItems"
                    hide-details
                  ></v-select>
                  <br>
                  <div class="text-xs-center">
                    <v-btn class="kunvet-red-bg" :disabled="loading" dark @click="submit">Create business account</v-btn>
                    <p v-show="loading" style="color: #999; margin-bottom: 0;">Loading...</p>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
            <div class="bottom-text">
              <a @click="back">Back</a>
            </div>
          </v-flex>
        </v-layout>
      </section>

      <section v-if="chosenForm === 'error'">
        <v-layout>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-card-text>
                <h2>Oh no, an error occured</h2>
                <br>
                <p>Please try again later</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </section>

      <section v-if="chosenForm === 'success'">
        <v-layout>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-card-text>
                <h2>Thank you!</h2>
                <br>
                <p style="margin-bottom: 8px;">We've sent a verification email to {{ email }}</p>
                <p style="margin-bottom: 8px;">Please click the link in your email to complete the sign up process</p>
                <p>Routing you to your account page...</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </section>

      <section v-if="chosenForm === 'not verified'">
        <v-layout>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-card-text>
                <p style="margin-bottom: 8px;">It looks like <strong>{{ email }}</strong> already exists, but is not verified.</p>
                <p>Would you like us to send verification another email?</p>
                <v-btn style="margin-left: 0;" flat @click="resendEmail" :disabled="loading">Send another email</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </section>
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
import KunvetError from '#/KunvetError';
import EventBus from '@/EventBus';
import userDataProvider from '@/userDataProvider';

export default {
  props: ['stage'],
  data() {
    return {
      e1: true,
      valid: false,
      chosenForm: '',
      submitClicked: false,
      email: '',
      business_name: null,
      fname: '',
      lname: '',
      requiredRules: [
        v => !!v || 'Required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters',
      ],
      loading: false,
      error: null,
      howDidYouHear: null,
      howDidYouHearItems: [
        'Flyers & posters', 'Social media', 'Word of mouth', 'Email campaign', 'Other',
      ],
      alreadyloggedin: false,
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate();
      this.submitClicked = true;
      if (this.valid) {
        this.loading = true;
        if (this.business_name && this.business_name !== '') {
          this.createBusinessAcct();
        } else {
          this.createIndividualAcct();
        }
      }
    },
    checkStage() {
      if (this.stage === 'personal') {
        this.chooseFormI();
      } else if (this.stage === 'organization') {
        this.chooseFormB();
      }
    },
    chooseFormI() {
      this.chosenForm = 'individual';
    },
    chooseFormB() {
      this.chosenForm = 'business';
    },
    back() {
      this.chosenForm = '';
    },
    createIndividualAcct() {
      const headers = { emulateJSON: true };
      const data = {
        email: this.email,
        business_name: null,
        hdyh: this.howDidYouHear,
        fname: this.fname,
        lname: this.lname,
        pwd: this.password,
        reqtype: 'validate',
      };
      axios.post('/auth/register', data, headers).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.chosenForm = 'success';
          this.logIntoAcct(this.email, this.password);
        } else if (res.data.message === 'User already exists') {
          this.error = 'UserExistsError';
        } else if (res.data.message === 'Email exists but not verified') {
          this.error = 'Not Verified';
          this.chosenForm = 'not verified';
        } else {
          this.chosenForm = 'error';
          this.$error(new KunvetError(res.data));
        }
      }, (error) => {
        this.chosenForm = 'error';
        this.$error(error);
      });
    },
    createBusinessAcct() {
      const headers = { emulateJSON: true };
      const bdata = {
        email: this.email,
        business_name: this.business_name,
        hdyh: this.howDidYouHear,
        fname: this.fname,
        lname: this.lname,
        pwd: this.password,
        reqtype: 'validate',
      };
      axios.post('/auth/register', bdata, headers).then((res) => {
        this.$debug('RES', res);
        this.loading = false;
        if (res.data.success) {
          this.chosenForm = 'success';
          this.logIntoAcct(this.email, this.password);
        } else if (res.data.message === 'User already exists') {
          this.error = 'UserExistsError';
        } else if (res.data.message === 'Email exists but not verified') {
          this.error = 'Not Verified';
          this.chosenForm = 'not verified';
        } else {
          this.chosenForm = 'error';
          this.$error(new KunvetError(res.data));
        }
      }, (error) => {
        this.chosenForm = 'error';
        this.$error(error);
      });
    },
    resendEmail() {
      const data = {
        email: this.email,
      };
      this.loading = true;
      axios.post('/auth/resendVerificationEmail', data).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.chosenForm = 'success';
        } else {
          this.chosenForm = 'error';
        }
      }, (error) => {
        this.chosenForm = 'error';
        this.$error(error);
        this.loading = false;
      });
    },
    logIntoAcct(email, password) {
      this.$debug('trying to log into new account');
      axios.post('/auth/login', {
        email: email,
        password: password,
      }).then((response) => {
        this.$debug('login response', response);
        if (response.data.success) {
          // logged in successfully
          this.fetchAcctData();
        } else {
          this.$error(new KunvetError(response.data));
        }
      }).catch(this.$error);
    },
    fetchAcctData() {
      axios.get('/auth/status').then((response) => {
        if (!response.data.success) {
          // Unsuccessful
          this.$error(new KunvetError(response.data));
          return;
        }
        if (!response.data.status) {
          // Logged out
          this.$debug('Logged out', response.data);
          return;
        }
        const udata = response.data.user;
        this.commitUserdata(udata);
        this.commitID(udata._id);

        if (udata.default_org === '' || !udata.default_org) {
          // login individual
          EventBus.$emit('individual');
          this.$router.push('/account');
        } else {
          // login business
          this.commitBusinessID(udata.default_org);
          EventBus.$emit('business');
          this.$router.push('/myorg');
        }
      }).catch((error) => {
        // Network error
        this.$error(error);
      });
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
    this.checkStage();
    userDataProvider.getUserData().then(data => {
      if (data.acct !== 0) {
        this.alreadyloggedin = true;
      } else {
        this.alreadyloggedin = false;
      }
    });
  },
};
</script>
