<style>
.val-c-p {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
<template>
  <v-container fluid style="padding-left: 0; padding-right: 0;">
    <div style="padding: 60px 0;">
      <p v-if="loading" class="center val-c-p">Validating. This should take just a few seconds.</p>
      <template v-else>
        <div v-if="!isvalid" class="center val-c-p">
          <p>
            Validation unsuccessful, please request a new
            validation email on <a href="/account">your profile page</a>.
          </p>
          <p>
            It's also possible that you have already verified
            your email. In that case, you are good to go!
          </p>
        </div>
        <div v-else class="main-cont-small" style="max-width: 420px;">
          <div style="padding: 25px 20px">
            <h3 class="headline mb-0 mt-0 center" style="color: #4d4d4d;">Thanks for verifying! You're all set!</h3>
          </div>
          <template v-if="isLoggedIn">
            <div  v-if="wasEditingJob" class="general-submit" @click="goTo('/createjob')">
              <div class="general-submit-default">
                  <span v-if="readyToPost">POST YOUR JOB</span>
                  <span v-else>CONTINUE EDITING YOUR JOB</span>
              </div>
            </div>
            <div v-else class="general-submit" @click="goTo('/account')">
              <div class="general-submit-default">
                  <span>GO TO YOUR ACCOUNT</span>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="general-submit" @click="goTo('/login')">
              <div class="general-submit-default">
                  <span>LOG INTO YOUR ACCOUNT</span>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </v-container>
</template>
<script>
import axios from 'axios';

export default {
  props: ['code'],
  data() {
    return {
      loading: true,
      isvalid: false,
      isLoggedIn: true,
      dne: null,
      wasEditingJob: false,
      readyToPost: false,
    };
  },
  activated() {
    Object.assign(this.$data, this.$options.data.call(this));
    if (this.$store.state) {
      if (this.$store.state.currentJobProgress.jobId) {
        this.wasEditingJob = true;
        if (this.$store.state.currentJobProgress.postOnOpen) {
          this.readyToPost = true;
        }
      }
    }
    this.validateCode();
  },
  methods: {
    validateCode() {
      axios.post('/auth/verify', { code: this.code }).then((res) => {
        this.completeValidation(res.data.success);
      }).catch(() => {
        this.loading = false;
      });
    },
    completeValidation(success) {
      this.loading = false;
      this.isvalid = success;

      if (this.isvalid && this.$store.state.userID) {
        // update email verification status in store
        if (this.$store.userdata) {
          const udata = this.$store.userdata;
          udata.email_verified = true;
          this.$store.commit({ type: 'keepUserdata', userdata: udata });
        }
        this.isLoggedIn = true;
        // Redirect to Account page
        // this.redirecting = true;
        // setTimeout(() => {
        //   this.$router.push('/account');
        // }, 1000);
      }
    },
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
