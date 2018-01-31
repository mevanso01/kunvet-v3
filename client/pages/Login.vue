<style scoped>
.link{
    color: #ef5350;
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
<v-container fluid class="white-bg">
    <div class="main-cont-small">

        <div v-show="forgetpwd==0">
            <section class="login-section">
                <h2>Welcome Back!</h2>
                <v-form v-model="valid" ref="form">
                    <v-text-field
                        label="E-mail"
                        v-model="email"
                        :rules="emailRules"
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
                        required
                    ></v-text-field>
                </v-form>

                <router-link to="/signup" class="link">
                    <p id="ask-sign-up">Create an account<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>
                </router-link>
                <a @click="forgetpwd=1">
                    <p id="forgot-password" class="link">Forgot your password?<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>
                </a>
            </section>

            <div v-show="loggedIn==0" id="general-submit" @click="submit()">
                <div id="general-submit-default">
                    <span>LOGIN</span>
                </div>
            </div>

            <v-alert
                style="background-color: green"
                icon="priority_high"
                :value="loggedIn"
                transition="slide-x-transition"
            >
                This is a success alert.
            </v-alert>
        </div>


        <div v-show="forgetpwd==1">
            <section>
                <h2>Forget Password?</h2>
                    <p>No worries! We can help you find it back. Simply fill out the email of you account.</p>
                    <v-form v-model="valid" ref="form2">
                        <v-text-field
                            label="E-mail"
                            v-model="email"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                    </v-form>

                    <a @click="forgetpwd=0" class="link">
                        <p id="forgot-password">Back to log in<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>
                    </a>
                    <router-link to="/signup" class="link">
                        <p id="ask-sign-up">Create an account<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>
                    </router-link>
            </section>

            <div v-show="sent == 0" id="general-submit" @click="send()">
                <div id="general-submit-default">
                    <span>Send Message</span>
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
import Config from 'config';
import Axios from 'axios';

export default {
  data() {
    return {
      e1: true,
      valid: false,
      forgetpwd: 0,
      loggedIn: false,
      sent: 0,
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
        console.log(response.data);
        if (response.data.success) {
          this.loggedIn = true;
          this.fetchData();
        } else {
          // forgot password
        }
      });
    },
    send() {
      this.sent = true;
    },
    fetchData() {
      Axios.get(`${Config.serverUrl}/auth/status`).then((response) => {
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
        const udata = response.data;
        console.log(udata);
        this.commitUserdata(udata.user);
        this.commitID(udata._id);

        if (udata.user.default_org == null || !udata.user.default_org) {
          // login individual
          App.methods.login_i();
        } else {
          // login business
          this.commitBusinessID(udata.user.default_org);
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
