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
#signup .btn--disabled {
  background-color: rgba(239,83,80,0.4) !important;
  color: #fff;
}
</style>

<template>
  <v-container fluid>
    <div id="signup" class="main-cont-large-clear">
      <section v-if="chosenForm === ''">
          <div class="text-xs-center">
               <h1>Select an account</h1>
          </div>
          <v-layout row wrap>
            <v-flex d-flex xs12 md6>
              <v-card>
                <v-card-text>
                    <div style="margin-bottom: 64px;">
                    <h2>Individual</h2>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Post individual jobs or requests for help</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Create your unique resume, share it through QRcode or personalized link</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Custom job search, now much easier to locate a match</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Save interested jobs, and review them later</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Your information is mobile optimized, view them or edit them on any devices without interruptions</p>
                    </div>
                    <div class="text-xs-center pos-bottom">
                      <v-btn class="kunvet-red-bg" dark @click="chooseFormI()">Sign up as individual</v-btn>
                    </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 md6>
              <v-card>
                <v-card-text>
                  <div style="margin-bottom: 64px;">
                    <h2>Business</h2>
                        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Intelligent job posting system that will post a job for every address under your account</p>
                        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Share your job listing page, or individual job page through QRcode, let others locate your job easily</p>
                        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Save interested resumes, and review them later</p>
                        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Easily customize your business home page</p>
                        <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Manage your account, view or edit your jobs on mobile devices without any interruptions</p>
                  </div>
                    <div class="text-xs-center pos-bottom">
                      <v-btn class="kunvet-red-bg" dark @click="chooseFormB()">Sign up as business</v-btn>
                    </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
      </section>

      <section v-if="chosenForm === 'individual'">
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
                    autocomplete
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

      <section v-if="chosenForm === 'business'">
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
                    autocomplete
                    hide-details
                  ></v-select>
                  <br>
                  <div class="text-xs-center">
                    <v-btn class="kunvet-red-bg" :disabled="loading" dark @click="submit">Create business account</v-btn>
                    <p v-show="loading" style="color: #999">Loading...</p>
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

      <section v-if="chosenForm === 'success'">
        <v-layout>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-card-text>
                <h2>Thank you!</h2>
                <br>
                <p style="margin-bottom: 8px;">We've sent a verification email to {{ email }}</p>
                <p>Please click the link in your email to complete the sign up process</p>
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
                <v-btn flat @click="resendEmail">Send another email</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </section>

    </div>
  </v-container>
</template>
<script>
import Vue from 'vue';
import VueResource from 'vue-resource';
import Config from 'config';

Vue.use(VueResource);

export default {
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
        v => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
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
        'Flyers', 'Word of mouth', 'Email', 'Instagram', 'Wechat', 'Other',
      ],
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
      Vue.http.post(`${Config.get('serverUrl')}/auth/register`, data, headers).then((res) => {
        this.loading = false;
        if (res.body.success) {
          this.chosenForm = 'success';
        } else if (res.body.message === 'User already exists') {
          this.error = 'UserExistsError';
        } else if (res.body.message === 'Email exists but not verified') {
          this.error = 'Not Verified';
          this.chosenForm = 'not verified';
        }
      }, (error) => {
        console.error(error);
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
      Vue.http.post(`${Config.get('serverUrl')}/auth/register`, bdata, headers).then((res) => {
        this.loading = false;
        if (res.body.success) {
          this.chosenForm = 'success';
        } else if (res.body.message === 'User already exists') {
          this.error = 'UserExistsError';
        } else if (res.body.message === 'Email exists but not verified') {
          this.error = 'Not Verified';
          this.chosenForm = 'not verified';
        }
      }, (error) => {
        console.error(error);
      });
    },
    resendEmail() {
      const headers = { emulateJSON: true };
      const data = {
        email: this.email,
      };
      Vue.http.post(`${Config.get('serverUrl')}/auth/resendVerificationEmail`, data, headers).then((res) => {
        this.loading = false;
        if (res.body.success) {
          this.chosenForm = 'success';
        }
      }, (error) => {
        console.error(error);
      });
    },
  },
};
</script>
