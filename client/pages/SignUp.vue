<style>
.pos-bottom {
  position: absolute;
  width: calc(100% - 32px);
  bottom: 16px;
}
.bottom-text {
  margin: 4px 0; color: #999;
}
.bottom-text a {
  cursor: pointer;
  margin-right: 20px;
  margin-left: 8px;
}
.bio .input-group__input {
  padding-bottom: 4px;
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
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Post indivual jobs or requests for help</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Create your unique resume, share it through QRcode or personalized link</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Custom job search, now much easier to locate a match</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Save interested jobs, and review them later</p>
                    <p><i class="fa fa-check-square-o" aria-hidden="true"></i> Your information is mobile optimized, view them or edit them on any devices without interruptions</p>
                    </div>
                    <div class="text-xs-center pos-bottom">
                      <v-btn error dark @click="chooseFormI()">Sign up as individual</v-btn>
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
                      <v-btn error dark @click="chooseFormB()">Sign up as business</v-btn>
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
                <h2>Just enter your email to get started</h2>
                <v-form v-model="valid" ref="form">
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
                  <div class="text-xs-center">
                    <v-btn error dark @click="submit">Sign up!</v-btn>
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

      <section v-if="chosenForm === 'business'">
        <v-layout>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-card-text>
                <h2>Lets get started</h2>
                <v-form v-model="valid" ref="form">
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
                  <div class="text-xs-center">
                    <v-btn error dark @click="submit">Create business account</v-btn>
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

      <section v-if="chosenForm === 'submitted'">
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

    </div>
  </v-container>
</template>
<script>
/* import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource); */

export default {
  data() {
    return {
      e1: true,
      valid: false,
      chosenForm: '',
      submitClicked: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters',
      ],
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate();
      this.submitClicked = true;
      if (this.valid) {
        this.chosenForm = 'submitted';

        Vue.http.get('http://jsonplaceholder.typicode.com/users').then((res) => {
          console.log(res);
        }, (error) => {
          console.log(error);
        });
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
  },
};
</script>
