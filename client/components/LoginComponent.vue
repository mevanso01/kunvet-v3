<style scoped>
  .link {
    cursor:pointer;
    text-align:center;
    text-decoration: none;
    font-size: 15px;
  }
  .link:hover{
    cursor:pointer;
    text-decoration: underline;
  }
  section {
    padding: 0 !important;
  }
  h2 {
    font-size: 24px;
  }
  .login-section p a{
    text-decoration: none !important;
  }
  .auth-form{
    border: none;
    /* width: 80%; */
    margin: 0 auto;
  }

</style>
<template>
  <div>
    <div v-if="forgetpwd==0" v-on:keyup.enter="submit">
      <v-form class="auth-form" v-model="valid" ref="form">
        <section>
          <h2 class="kunvet-red" style="margin-bottom: 32px">Welcome Back!</h2>
          <p v-if="bad_login" style="color: #f00; margin-bottom: 0">The email or password you entered is incorrect</p>
          <k-text-field
            label="E-mail"
            v-model="email"
            type="email"
            :rules="emailRules"
            @change="bad_login = false;"
            required
          ></k-text-field>
          <k-text-field
            label="Password"
            v-model="password"
            :rules="passwordRules"
            min="8"
            toggleVisibility
            @change="bad_login = false;"
            required
          ></k-text-field>
          <p id="ask-sign-up" style="color: #616161; margin-bottom: 4px; margin-top: 38px">
            <a @click="$emit('toSignup')" class="link">Don't have an account? <span style="font-weight:bold;">Sign Up</span></a>
          </p>
          <p id="forgot-password" style="margin-bottom: 38px">
            <a @click="forgetpwd=1" class="link">Forgot your password?</a>
          </p>

        </section>
        <!-- <div v-if="loggedIn==0" id="general-submit" @click="submit" style="border-radius: 4px; box-shadow: 0 10px 12px -4px #eaeaf9;">
          <div id="general-submit-default">
            <v-progress-circular indeterminate v-if="loading" size="30" color="white"></v-progress-circular>
            <span  v-else>Login</span>
          </div>
        </div> -->
        <k-btn block @click="submit" :working="loading" v-show="loggedIn==0">Login</k-btn>
        <v-alert
            color="green darken-1"
            icon="priority_high"
            :value="loggedIn"
            transition="slide-x-transition">
          Logged in successfully!
        </v-alert>
      </v-form>
    </div>


    <div v-if="forgetpwd==1" class="auth-form" v-on:keyup.enter="requestPasswordReset">
      <section class="login-section">
        <h2 class="kunvet-red">Reset Password</h2>
        <div v-if="!sent">
          <p style="margin-bottom: 16px">
            Please enter the email associated with your account, and we’ll email you a verfication code.
          </p>
          <v-form v-model="valid" ref="form2">
            <k-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                    style="margin-bottom: 64px"
            ></k-text-field>
          </v-form>
        </div>
        <div v-if="sent">
          <p style="margin-bottom: 64px;">
            Success!<br>If <b>{{ email }}</b> exists in our database you will receive an email for resetting your password shortly.
          </p>
          <!-- <p id="forgot-password" class="center" style="color: #616161;">
            <a @click="forgetpwd=0;" class="link">Back to log in <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
          </p> -->
        </div>
      </section>

      <k-btn block @click="requestPasswordReset" :working="loading" v-show="!sent" class="mb-2">Request Password Reset</k-btn>
      <k-btn block @click="forgetpwd=0; sent=false;" color="#ff8f8f">Back to Login</k-btn>
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
            let acctType = udata.account_type;
            if (udata.default_org) {
              this.commitBusinessID(udata.default_org);
            }
            if (acctType === 'business' && !udata.default_org) {
              // TODO: create better solution for business accounts that dont have an org
              acctType = 'individual';
            }
            EventBus.$emit('login', acctType); // emit globally
            this.$emit('loggedIn'); // emit from component
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
