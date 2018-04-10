<style>
</style>
<template>
  <v-container fluid style="padding-left: 0; padding-right: 0;">
    <div style="padding: 60px 0;">
      <p v-if="loading" class="center val-c-p">Validating. This should take just a few seconds.</p>
      <p v-if="!loading && !isvalid" class="center val-c-p">
        Validation unsuccessful, please check that you
        entered the link correctly and try again
      </p>
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
// import gql from 'graphql-tag';
// import axios from 'axios';


export default {
  created() {
    this.validateCode();
  },
  props: ['code'],
  data() {
    return {
      // id: this.$route.params.id,
      loading: true,
      isvalid: false,
      dne: null,
    };
  },
  methods: {
    validateCode() {
      // Check if code is valid

      /* axios.post('/auth/verify', { code: this.code }).then((res) => {
        this.loading = false;
        console.log(res);
        if (res.data.success) {
          this.isvalid = true;
        }
      }).catch(() => {
        this.loading = false;
        // console.error(error);
      }); */
    },
    resetPassword() {
      // send request to server
    },
  },
};
</script>
