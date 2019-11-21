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
  data() {
    return {
    };
  },
  components: {
    LoginComponent,
  },
  methods: {
    goToSignup() {
      this.$router.push('/signup');
    },
    triggerRedirect() {
      let target = this.$route.query.redirect;
      // check if target is a restricted redirect page
      const i = ['/signup', '/login', '/validate', '/settings'].indexOf(target);
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
