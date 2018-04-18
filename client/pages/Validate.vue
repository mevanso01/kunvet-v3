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
      <div v-if="!loading && !isvalid" class="center val-c-p">
        <p>
          Validation unsuccessful, please request a new
          validation email on <a href="/account">your profile page</a>.
        </p>
        <p>
          It's also possible that you have already verified
          your email. In that case, you are good to go!
        </p>
      </div>
      <div v-if="!loading && isvalid" style="max-width: 600px; margin: auto;">
        <v-card style="margin: 15px;">
          <v-card-text>
              You're all set! Now you can log in with the email and password
              you provided, and finish creating your account
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<script>
import axios from 'axios';


export default {
  created() {
    this.validateCode();
  },
  props: ['code'],
  data() {
    return {
      loading: true,
      isvalid: false,
      dne: null,
    };
  },
  methods: {
    validateCode() {
      axios.post('/auth/verify', { code: this.code }).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.isvalid = true;
        }
      }).catch(() => {
        this.loading = false;
      });
    },
  },
};
</script>
