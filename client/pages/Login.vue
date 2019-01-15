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
<v-container fluid class="white-bg">
  <LoginComponent @loggedIn="triggerRedirect"></LoginComponent>
</v-container>

</template>
<script>
// import App from '@/App';
import Axios from 'axios';
// import KunvetError from '#/KunvetError';
// import EventBus from '@/EventBus';
import LoginComponent from '@/components/LoginComponent';

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
    };
  },
  components: {
    LoginComponent,
  },
  methods: {
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
    triggerRedirect() {
      let target = this.$route.query.redirect;
      // check if target is a restricted redirect page
      const i = ['/signup', '/login', '/validate'].indexOf(target);
      if (!target || i !== -1) {
        target = this.$store.state.acct === 2 ? '/myorg' : '/';
      }
      this.$router.push(target);
    },
  },
  activated() {
    if (this.$store.state.userID) {
      this.triggerRedirect();
    }
    // this.resetData();
  },
};
</script>
