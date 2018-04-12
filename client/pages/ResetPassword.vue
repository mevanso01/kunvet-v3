<style>
</style>
<template>
  <v-container fluid style="padding-left: 0; padding-right: 0;">
    <div style="padding: 60px 0;">
      <div style="max-width: 600px; margin: auto;">
        <v-card style="margin: 15px;">
          <v-form v-model="valid" ref="form">
            <section>
                <h2>Reset password</h2>
                <v-text-field
                    label="New password"
                    v-model="password"
                    :rules="passwordRules"
                    min="8"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    required
                ></v-text-field>
                <v-text-field
                    label="Confirm password"
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    @blur="blur = true;"
                    required
                ></v-text-field>
                <div style="height: 21px; width: 100%; margin: 6px 0;">
                  <p v-show="blur && password !== confirmPassword" style="color: #f00; margin: 0;">
                    Passwords do not match
                  </p>
                </div>
            </section>
            <div id="general-submit" v-show="!successAlert" @click="submit">
                <div id="general-submit-default">
                    <span>Reset Password</span>
                </div>
            </div>


            <v-alert
              color="green darken-1" type="success"
              v-model="successAlert"
              transition="slide-x-transition">
                Password reset successfully. <router-link style="text-decoration: underline" to="/login">Login</router-link>
            </v-alert>
          </v-form>
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
      e1: true,
      loading: true,
      isvalid: false,
      dne: null,
      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'Required',
        v => v.length >= 8 || 'Must be at least 8 characters',
      ],
      confirmPassword: '',
      confirmPasswordRules: [
        v => !!v || 'Required',
      ],
      successAlert: false,
      blur: false,
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
    submit() {
      this.$refs.form.validate();
      if (this.valid && this.password === this.confirmPassword) {
        this.resetPassword();
      }
    },
    resetPassword() {
      // send request to server
    },
  },
};
</script>
