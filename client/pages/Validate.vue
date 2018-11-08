<style>
.val-c-p {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
<template>
  <v-container fluid style="padding-left: 0; padding-right: 0;">
    <div style="padding: 60px 0;">
      <CodeVerification v-if="!validated" ref="codever" @verified="codeValidated" />
      <div v-if="validated" style="text-align: center;">
        <h2>Your email is verified!</h2>
        <v-btn dark class="kunvet-red-bg" @click="goTo('/account')">
          Go to your account
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
<script>
import CodeVerification from '@/components/CodeVerification';
import userDataProvider from '@/userDataProvider';

export default {
  props: ['code'],
  data() {
    return {
      validated: false,
      isLoggedIn: true,
      wasEditingJob: false,
      readyToPost: false,
      jobId: null,
    };
  },
  components: {
    CodeVerification,
  },
  activated() {
    // Reset data
    Object.assign(this.$data, this.$options.data.call(this));
    // Init code verifications
    if (this.$store.state.userID) {
      this.$refs.codever.init();
    } else {
      // must be authenticated
      userDataProvider.getUserData().then(data => {
        if (data.acct !== 0) {
          this.$refs.codever.init();
        } else {
          this.$router.push('/login');
        }
      });
    }
  },
  methods: {
    codeValidated() {
      if (this.$store.state.userID && this.$store.state.userdata) {
        const udata = this.$store.state.userdata;
        udata.email_verified = true;
        this.$store.commit({ type: 'keepUserdata', userdata: udata });
      }
      this.validated = true;
    },
    goTo(_route) {
      var route = '/';
      if (_route === '/createjob' && this.jobId) {
        route = `/createjob/${this.jobId}`;
      } else {
        route = _route;
      }
      this.$router.push(route);
    },
  },
};
</script>
