<style scoped>
  .link{
    cursor:pointer;
    text-align:center;
    text-decoration: none;
  }

  .link:hover{
    text-decoration: underline;
  }

  a:hover{
    cursor:pointer;
    text-decoration: underline;
  }
  /*.login-section {*/
    /*padding: 16px 0;*/
  /*}*/
  /*@media (min-width: 600px) {*/
    /*.login-section {*/
      /*padding: 16px 32px;*/
    /*}*/
  /*}*/

  section{
    padding: 0 !important;
  }

  .login-section p a{
    text-decoration: none !important;
  }

  .auth-form{
    border: none;
    width: 80%;
    margin: 0 auto;
  }


</style>
<template>
  <div v-on:keyup.enter="submit">
    <div v-show="forgetpwd==0" >
      <v-form class="auth-form" v-model="valid" ref="form">
        <section >
          <h2 class="kunvet-red" style="font-size: 24px; margin: 48px 0">Welcome Back!</h2>
          <p v-if="bad_login" style="color: #f00; margin-bottom: 0">The email or password you entered is incorrect</p>
          <!-- <k-text-field
            label="Im a label"
            required
            v-model="test"
            :rules="[
              v => !!v || 'E-mail is required',
              v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w+)+$/.test(v) || 'E-mail must be valid',
            ]"
          ></k-text-field> -->
          <k-text-field
            label="E-mail"
            v-model="email"
            type="email"
            :rules="emailRules"
            @change="bad_login = false;"
            required
          ></k-text-field>
          {{ email }}
          <k-text-field
            label="Password"
            v-model="password"
            :rules="passwordRules"
            min="8"
            toggleVisibility
            @change="bad_login = false;"
            required
          ></k-text-field>



          <p id="ask-sign-up" style="color: #616161; margin-bottom: 8px; margin-top: 36px">
            <span @click="$emit('toSignup')" class="link">Create an account</span>

          </p>
          <p id="forgot-password" style="margin-bottom: 60px">
            <a @click="forgetpwd=1" class="link">Forgot your password?</a>
          </p>

        </section>
        <div v-if="loggedIn==0" id="general-submit" @click="submit" style="border-radius: 4px; box-shadow: 0 10px 12px -4px #eaeaf9;">
          <div id="general-submit-default">
            <v-progress-circular indeterminate v-if="loading" size="30" color="white"></v-progress-circular>
            <span  v-else>Login</span>
          </div>
        </div>


        <v-alert
            color="green darken-1"
            icon="priority_high"
            :value="loggedIn"
            transition="slide-x-transition">
          Logged in successfully!
        </v-alert>
      </v-form>
    </div>


    <div v-show="forgetpwd==1" class="auth-form">
      <section v-if="!sent" class="login-section">
        <h2>Forgot Password?</h2>
        <p style="margin-bottom: 40px">No worries! Simply fill out the email of your account to reset it.</p>
        <v-form v-model="valid" ref="form2">
          <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                  style="margin-bottom: 150px"
          ></v-text-field>
        </v-form>
      </section>

      <section v-if="sent" class="login-section">
        <p>
          Success! If <b>{{ email }}</b> exists in our database you will receive an email shortly.
        </p>
        <p id="forgot-password" class="center" style="color: #616161;">
          <a @click="forgetpwd=0;" class="link">Back to log in <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
        </p>

      </section>

      <div v-show="!sent" id="general-submit" @click="requestPasswordReset" style="margin-bottom: 14px; border-radius: 4px;">
        <div id="general-submit-default">
          <v-progress-circular indeterminate v-if="loading" size="30" style="margin-top: 17px" color="white"></v-progress-circular>
          <span v-else>Request Password Reset</span>
        </div>
      </div>
      <div v-show="!sent" id="general-submit" @click="forgetpwd=0">
        <div id="general-submit-default" style="background-color: #f36865 !important; border-radius: 4px;">
          <span >Back To Login</span>
        </div>
      </div>
      <!--<v-alert
          color="green darken-1" style="margin-bottom: 0;"
          icon="check_circle"
          :value="sent"
          transition="slide-x-transition"
      >
          Request password email sent.
      </v-alert>-->

    </div>
  </div>
</template>
<script>
    // import App from '@/App';
    import Axios from 'axios';
    import KunvetError from '#/KunvetError';
    import EventBus from '@/EventBus';

    export default {
      data() {
        return {
          e1: true,
          valid: false,
          forgetpwd: 0,
          bad_login: false,
          loggedIn: false,
          sent: false,
          email: '',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w+)+$/.test(v) || 'E-mail must be valid',
          ],
          password: '',
          passwordRules: [
            v => !!v || 'Required',
          ],
          loading: false,
          test: '',
        };
      },
      methods: {
        submit() {
          this.loading = true;
          Axios.post('/auth/login', {
            email: this.email,
            password: this.password,
          }).then((response) => {
            if (response.data.success) {
              this.loggedIn = true;
              this.fetchData();
            } else {
              this.bad_login = true;
              this.loading = false;
            }
          }).catch((err) => {
            this.loading = false;
            if (err.response.status === 401) {
              this.bad_login = true;
            } else {
              this.$error(err);
            }
          });
        },
        requestPasswordReset() {
          const valid = this.$refs.form2.validate();
          if (!this.loading && valid) {
            this.loading = true;
            Axios.post('/reset-password/request-reset', { email: this.email }).then((res) => {
              this.loading = false;
              if (res.data.success) {
                this.sent = true;
              } else {
                // not successful
                this.sent = true; // mark as true anyway
              }
            }).catch((error) => {
              // Network error
              this.loading = false;
              this.$error(error);
            });
          }
        },
        fetchData() {
          Axios.get('/auth/status').then((response) => {
            if (!response.data.success) {
              // Unsuccessful
              this.$debug('Server error');
              this.$error(new KunvetError(response.data));
              EventBus.$emit('logout');
              return;
            } else if (!response.data.status) {
              // Logged out
              this.$debug('Logged out', response.data);
              EventBus.$emit('logout');
              return;
            }
            const udata = response.data.user;
            this.commitUserdata(udata);
            this.commitID(udata._id);
            this.loading = false; // dont forget to stop spinner
            if (udata.default_org === '' || !udata.default_org) {
              // login individual
              EventBus.$emit('individual');
              this.$emit('loggedIn');
            } else {
              // login business
              this.commitBusinessID(udata.default_org);
              EventBus.$emit('business');
              this.$emit('loggedIn');
            }
          }).catch((error) => {
            // Network error
            this.$error(error);
          });
        },
        commitUserdata(udata) {
          // IMPROVE
          this.$store.commit({
            type: 'keepUserdata',
            userdata: udata,
          });
          this.$store.commit({
            type: 'setDefaultOrg',
            id: udata.default_org,
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
        resetData() {
          Object.assign(this.$data, this.$options.data.call(this));
        },
      },
      activated() {
        this.resetData();
      },
    };
</script>
