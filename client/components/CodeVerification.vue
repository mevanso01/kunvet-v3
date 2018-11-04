<style lang="scss">
  .codeverbox {
    max-width: 420px;
    margin: auto;
    border: 1px solid #eee;
    text-align: center;
    h2 {
      margin-bottom: 8px; margin-top: 4px; color: #333; font-weight: 500;
    }
    .inner {
      padding: 20px;
    }
    .input-container {
      width: 200px;
      height: 60px;
      margin: auto;
      margin-bottom: 16px;
      input {
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        width: 40px;
        height: 50px;
        margin: 5px;
        padding: 5px;
        font-size: 20px;
        text-align: center;
        float: left;
      }
      input:focus {
        outline: none;
        box-shadow: 0 0 3pt 1pt #c8c8c8;
        // border: 1px solid #ef5350;
        // box-shadow: 0 0 3pt 1pt #ef5350;
      }
    }
    i.material-icons {
      font-size: 16px;
      vertical-align: middle;
      position: relative;
      top: -1px;
    }
  }
  @media only screen and (max-width: 420px) {
    .codeverbox {
      .l-break { display: none; }
    }
  }
</style>
<template>
  <div class="codeverbox" v-on:keyup.enter="verifyCode">
    <div class="inner" v-show="isVerified">
      <h2 style="margin-bottom: 16px; margin-top: 16px; color: #333; font-weight: 500;">Your email is verified.</h2>
    </div>
    <!-- default window -->
    <div v-show="!isVerified && !changingEmail">
      <div class="inner">
        <h2>Verify your email</h2>
        <div style="width: 100%; padding: 10px 0;" v-if="!email">
          <!-- in case initial request takes a long time to load -->
          <div v-if="loading">
            <v-progress-circular indeterminate :size="32" :width="3" color="red darken-1"></v-progress-circular>
          </div>
          <!-- the user should not have to see and click this button, but it's there just in case -->
          <v-btn v-else outline @click="lookForAndSendCode">Send verification email</v-btn>
        </div>
        <div v-show="email">
          <p>We sent a temporary code to <strong>{{ email }}</strong> to make<span class="l-break"><br></span> sure you own it. Please enter it below:</p>
          <div class="input-container" v-on:keydown.delete="backspace" v-on:keydown.enter="verifyCode">
            <input id="box1" v-model="box1" ref="box1" maxlength="1" @input="inputEntered" />
            <input id="box2" v-model="box2" ref="box2" maxlength="1" @input="inputEntered" />
            <input id="box3" v-model="box3" ref="box3" maxlength="1" @input="inputEntered" />
            <input id="box4" v-model="box4" ref="box4" maxlength="1" @input="inputEntered" />
          </div>
          <p v-show="invalidCode" style="color: red;">Invalid code. Please try again.</p>
          <a @click="sendVerificationCode" style="color: gray !important; display: inline-block;">
            <i class="material-icons" style="margin-right: 3px;">refresh</i>Send a new code
          </a><br>
          <a @click="openChangeEmail" style="color: gray !important; margin-top: 4px; display: inline-block;">
            <i class="material-icons" style="margin-right: 3px;">edit</i>Edit email address
          </a>
        </div>
      </div>
      <div v-show="email && !isVerified " class="general-submit" @click="verifyCode">
        <div class="general-submit-default">
            <span>VERIFY</span>
        </div>
      </div>
    </div>
    <!-- change email window -->
    <div v-show="!isVerified && changingEmail">
      <div class="inner">
        <h2>Edit email address</h2>
        <p style="margin-bottom: 0px !important;">Enter a new email:</p>
        <div style="width: 100%;">
          <v-text-field
            label="Email"
            type="email"
            :rules="[
              v => !!v || 'Email is required',
              v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w+)+$/.test(v) || 'Invalid email format'
            ]"
            v-model="newEmail">
          </v-text-field>
        </div>
        <p v-if="loading">
          <span style="padding: 0 4px;">
            <v-progress-circular indeterminate :size="16" :width="2" color="grey darken-1"></v-progress-circular>
          </span>
          Loading...
        </p>
        <p style="color: red;" class="mb-0">{{ changeEmailError }}</p>
      </div>
      <v-layout row>
        <v-flex xs12 style="padding-left: 16px; padding-right: 4px;">
          <v-btn flat block @click="changingEmail = false;">
            Cancel
          </v-btn>
        </v-flex>
        <v-flex xs12 style="padding-right: 16px; padding-left: 4px;">
          <v-btn flat block @click="changeEmail">
            Change
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  // props: [],
  data() {
    return {
      box1: '',
      box2: '',
      box3: '',
      box4: '',
      isVerified: false,
      invalidCode: false,
      loading: false,
      email: '',
      changingEmail: false,
      newEmail: '',
      changeEmailError: '',
    };
  },
  methods: {
    inputEntered(e) {
      const input = e.data;
      const srcId = e.srcElement.id;
      if ('0123456789'.indexOf(input) !== -1 && srcId) {
        if (srcId !== 'box4') {
          const srcIdNum = parseInt(srcId.slice(3), 10); // strip 'box' from the id
          this.$refs[`box${srcIdNum + 1}`].focus();
        }
      }
    },
    backspace(e) {
      const input = e.key;
      const srcId = e.srcElement.id;
      if (input === 'Backspace' && srcId) {
        const srcIdNum = parseInt(srcId.slice(3), 10); // strip 'box' from the id
        if (srcIdNum > 1 && (!this[srcId] || this[srcId].length === 0)) {
          this.$refs[`box${srcIdNum - 1}`].focus();
        }
      }
    },
    lookForAndSendCode() {
      axios.post('/auth/lookForAndSendCode').then((res) => {
        if (res.data.success) {
          this.loading = false;
          if (res.data.alreadyVerified) {
            this.isVerified = true;
            this.$emit('verified');
            return;
          }
          this.email = res.data.email;
        }
      }).catch((err) => {
        this.$error(err);
      });
    },
    /** sends a new verification code regardless of status */
    sendVerificationCode() {
      this.loading = true;
      axios.post('/auth/sendVerificationCode').then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.loading = false;
          // if (res.data.email) { this.email = res.data.email; }
        } else if (res.data.message && res.data.message === 'Already verified') {
          this.isVerified = true;
          this.$emit('verified');
        }
      }).catch((err) => {
        this.loading = false;
        this.$error(err);
      });
    },
    verifyCode() {
      const code = `${this.box1}${this.box2}${this.box3}${this.box4}`; // should be a 4-character string
      if (code.length !== 4) { return; }
      this.loading = true;
      this.invalidCode = false;
      axios.post('/auth/verifyUsingCode', { code: code }).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.isVerified = true;
          this.$emit('verified');
        } else if (res.data.message && res.data.message === 'Already verified') {
          this.isVerified = true;
          this.$emit('verified');
        } else if (res.data.message && res.data.message === 'Invalid code') {
          this.invalidCode = true;
        }
      }).catch((err) => {
        this.loading = false;
        this.$error(err);
      });
    },
    openChangeEmail() {
      this.newEmail = this.email;
      this.changeEmailError = '';
      this.changingEmail = true;
      this.invalidCode = false;
    },
    changeEmail() {
      if (this.loading) { return; }
      const data = { newemail: this.newEmail, sendcode: true };
      this.loading = true;
      this.changeEmailError = '';
      axios.post('/auth/changeEmail', data).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.email = this.newEmail;
          // this.openSnackbar('Success! Check your inbox.');
          this.changingEmail = false;
        } else if (res.data && res.data.message) {
          this.changeEmailError = `Error: ${res.data.message}`;
        } else {
          this.changeEmailError = 'Something went wrong, please try again.';
        }
      }, (error) => {
        this.loading = false;
        this.changeEmailError = 'Something went wrong, please try again.';
        this.$error(error);
      });
    },
    init() {
      this.lookForAndSendCode();
    },
    showLoadingIcon() {
      this.loading = true; // force loading icon to show
    },
  },
};
</script>
