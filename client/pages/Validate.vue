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
        <div v-else style="max-width: 600px; margin: auto;">
          <v-card style="margin: 15px;">
            <v-card-text>
              You're all set!
              <template v-if="redirecting">
                We are taking you to the account page where you can finish
                creating your account.
              </template>
              <template v-else>
                Now you can log in with the email and password you provided,
                and finish creating your account.
              </template>
            </v-card-text>
          </v-card>
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
      redirecting: false,
      dne: null,
    };
  },
  activated() {
    Object.assign(this.$data, this.$options.data.call(this));
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
        // Redirect to Account page
        this.redirecting = true;
        setTimeout(() => {
          this.$router.push('/account');
        }, 1000);
      }
    },
  },
};
</script>
