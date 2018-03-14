<style scoped>
.link{
    cursor:pointer;
    text-align:center;
}
a:hover{
    cursor:pointer;
}
.login-section {
  padding: 16px 0;
}
@media (min-width: 600px) {
  .login-section {
    padding: 16px 32px;
  }
}
</style>
<template>
<v-container fluid class="white-bg" v-on:keyup.enter="submit">
    <div class="main-cont-small">

        <div v-show="forgetpwd==0">
          <v-form v-model="valid" ref="form">
            <section class="login-section">
                <h2>Welcome Back!</h2>
                <p v-if="bad_login" style="color: #f00; margin-bottom: 0">The email or password you entered is incorrect</p>
                    <v-text-field
                        label="E-mail"
                        v-model="email"
                        :rules="emailRules"
                        @change="bad_login = false;"
                        required
                    ></v-text-field>
                    <v-text-field
                        label="Password"
                        v-model="password"
                        :rules="passwordRules"
                        min="8"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (e1 = !e1)"
                        :type="e1 ? 'password' : 'text'"
                        @change="bad_login = false;"
                        required
                    ></v-text-field>


                    <p id="ask-sign-up" class="center" style="color: #616161; margin-bottom: 8px;">
                      <router-link to="/signup" class="link">Create an account <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></router-link>
                    </p>
                    <p id="forgot-password" class="center kunvet-red">
                      <a @click="forgetpwd=1" class="link">Forgot your password? <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                    </p>

            </section>
            <div v-if="loggedIn==0" id="general-submit" @click="submit">
                <div id="general-submit-default">
                    <span>LOGIN</span>
                </div>
            </div>


            <v-alert
              style="background-color: green"
              icon="priority_high"
              :value="loggedIn"
              transition="slide-x-transition">
                Logged in successfully!
            </v-alert>
          </v-form>
        </div>


        <div v-show="forgetpwd==1">
            <section class="login-section">
                <h2>Forgot Password?</h2>
                    <p>No worries! Simply fill out the email of your account to reset it.</p>
                    <v-form v-model="valid" ref="form2">
                        <v-text-field
                            label="E-mail"
                            v-model="email"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                    </v-form>

                    <p id="ask-sign-up" class="center" style="color: #616161; margin-bottom: 8px;">
                      <router-link to="/signup" class="link">
                        Create an account <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                      </router-link>
                    </p>
                    <p id="forgot-password" class="center" style="color: #616161;">
                      <a @click="forgetpwd=0" class="link">Back to log in <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                    </p>

            </section>

            <div v-show="!sent" id="general-submit" @click="send()">
                <div id="general-submit-default">
                    <span>Request password reset</span>
                </div>
            </div>

            <v-alert
                color="success"
                icon="check_circle"
                :value="sent"
                transition="slide-x-transition"
            >
                Sending Message.
            </v-alert>

        </div>
    </div>
</v-container>

</template>
<script>
import App from '@/App';
import Axios from 'axios';

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
        v => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Required',
      ],
    };
  },
  methods: {
    submit() {
      Axios.post('/auth/login', {
        email: this.email,
        password: this.password,
      }).then((response) => {
        if (response.data.success) {
          this.loggedIn = true;
          this.fetchData();
        } else {
          this.bad_login = true;
        }
      }).catch((err) => {
        if (err.message === 'Request failed with status code 401') {
          this.bad_login = true;
        } else {
          console.error(err);
        }
      });
    },
    send() {
      this.sent = true;
    },
    fetchData() {
      Axios.get('/auth/status').then((response) => {
        if (!response.data.success) {
          // Unsuccessful
          console.error('Server error', response.data);
          return;
        }
        if (!response.data.status) {
          // Logged out
          console.error('Logged out', response.data);
          return;
        }
        const udata = response.data.user;
        console.log('UDATA', udata);
        this.commitUserdata(udata);
        this.commitID(udata._id);

        if (udata.default_org === '' || !udata.default_org) {
          // login individual
          App.methods.login_i();
          this.$router.push('/');
        } else {
          // login business
          this.commitBusinessID(udata.default_org);
          App.methods.login_b();
          this.$router.push('/myorg');
        }
      }).catch((error) => {
        // Network error
        console.error(error);
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
  },
};
</script>
