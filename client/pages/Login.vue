<template>
  <v-container fluid class="white-bg">
    <div style="max-width: 400px; margin: auto; padding: 32px 8px;">
      <LoginComponent @toSignup="goToSignup" @loggedIn="triggerRedirect"></LoginComponent>
    </div>
  </v-container>
</template>
<script>
import LoginComponent from '@/components/LoginComponent';

export default {
  metaInfo: {
    title: 'Login | Kunvet',
    meta: [
      { name: 'description', content: 'Whether you are an employer or applicant, log into your account from here.' },
    ],
  },
  data() {
    return {
    };
  },
  components: {
    LoginComponent,
  },
  methods: {
    goToSignup() {
      this.$router.push('/sign-up');
    },
    triggerRedirect() {
      let target = this.$route.query.redirect;
      // check if target is a restricted redirect page
      const i = ['/sign-up', '/login', '/validate', '/account/settings'].indexOf(target);
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
