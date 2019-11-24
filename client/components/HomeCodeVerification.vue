<style lang="scss" scoped>
  .codeverbox {
    max-width: 100%;
    text-align: left;
    //background-color: white;
    margin: auto;
    //border: 1px solid #eee;
    .verify_email_header{
      margin-top: 70px;
      margin-bottom: 20px;
      font-size: 32px;
      font-weight: 600;
      color: #3c3c3c;
      line-height: 120%;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif; 
    }
    .inner {
      //padding: 20px;
      margin-top: 50%;
    }
    input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .input-container {
      background-color: #e6e6e6;
      width: 100%;
      height: 80px;
      display: flex;
      input {
        font-size: 32px;
        font-weight: 800;
        color: #3c3c3c;
        line-height: 120%;
        letter-spacing: 0.6em;
        width: 100%;
        height: 80px;
        margin-left: 32px;
        margin-right: 0px;
        text-align: left;
        font-family: proxima-nova, sans-serif;
      }
      input:focus {
        outline: none;
        //box-shadow: 0 0 3pt 1pt #c8c8c8;
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
    .change-email{
      background-color: #e6e6e6;
      color: gray !important;
      margin-top: 10px;
      margin-right: 10px;
      display: inline-block;
      width: 180px;
      height: 28px;
      text-align: center;
      font-family: proxima-nova, sans-serif;
      cursor: pointer !important;
    }
    .send-verif{
      background-color: #e6e6e6;
      color: gray !important; 
      margin-top: 10px;
      display: inline-block; 
      margin-right: 10px;
      width: 132px;
      height: 28px;
      text-align: center;
      font-family: proxima-nova, sans-serif;
      cursor: pointer !important; 
    }
    .verif-btn-red{
      width: 140px;
      background-color: #ff6969;
      // background-color: #b4b4b4;
      text-align: center;
      cursor: pointer !important;
    }
    .verif-btn-loading{
      width: 140px !important;
      background-color: #ff6969;
      // background-color: #b4b4b4;
      text-align: center;
      line-height: 80px;
      cursor: disabled !important;
    }
    .verif-btn-text{
      width: 140px;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      line-height: 80px;
      letter-spacing: 0.12em;
      font-family: proxima-nova, sans-serif;
      text-transform: uppercase;
    }
    .verified_header{
      font-size: 38px;
      font-weight: 600;
      color: #ff6969;
      line-height: 120%;
      letter-spacing: 0;
      margin-bottom: 20px;
      font-family: proxima-nova, sans-serif;
    }
    .verified_text{
      font-size: 22px;
      font-weight: 300;
      color: #3c3c3c;
      line-height: 150%;
      letter-spacing: 0;
      margin-bottom: 40px;
      font-family: proxima-nova, sans-serif;
    }
    .search_jobs_btn{
      width:210px;
      height:64px;
      background-color: #ff6969;
      text-align: center;
      border: none;
      box-shadow: 0;
      font-size: 22px;
      font-weight: 600;
      color: white;
      line-height: 64px;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-right: 20px;
      cursor: pointer !important;
    }
    .view_profile_btn {
      width:210px;
      height:64px;
      text-align: center;
      font-family: proxima-nova, sans-serif;
      background-color: none;
      border: 2px solid #ff6969;
      box-shadow: 0;
      font-size: 22px;
      font-weight: 600;
      color: #ff6969;
      line-height: 64px;
      letter-spacing: 0;
      cursor: pointer !important;
    }
    .valid_email_text{
      font-size: 22px;
      font-weight: 300;
      color: #3c3c3c;
      line-height: 150%;
      letter-spacing: 0;
      margin-bottom: 0;
      font-family: proxima-nova, sans-serif;
    }
    .change-btn{
      width:120px;
      height:64px;
      background-color: #ff6969;
      text-align: center;
      border: none;
      box-shadow: 0;
      font-size: 16px;
      font-weight: 600;
      color: white;
      line-height: 64px;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-right: 10px;
      cursor: pointer !important;
    }
    .cancel-btn{
      width:120px;
      height:64px;
      background-color: #f4f4f4;
      text-align: center;
      border: none;
      box-shadow: 0;
      font-size: 16px;
      font-weight: 600;
      color: #808080;
      line-height: 64px;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-right: 10px;
      cursor: pointer !important;
    }
    .green_warning{
      color: #15cda8;
      font-weight: 600;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0;
    }
    .red_warning{
      color: #ff6969;
      font-weight: 600;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0;
    }
  }
</style>
<template>
  <div class="codeverbox" v-on:keyup.enter="verifyCode">
    <div class="inner" v-show="isVerified">
      <h2 class="verified_header">Congratulations!</h2>
      <p class="verified_text">You are now signed in. We are thrilled to have you here. Good luck on your job searching!</p>
      <div style="display: flex">
        <div class="search_jobs_btn" @click="routetoSeach">Search for Jobs</div>
        <div class="view_profile_btn" @click="routetoProfile">View My Profile</div>
      </div>
    </div>
    <!-- default window -->
    <div v-show="!isVerified && !changingEmail">
      <div class="inner">
        <h2 class="verify_email_header">Verify your email</h2>
        <div style="width: 100%; padding: 10px 0;" v-if="!email"  >
          <!-- in case initial request takes a long time to load -->
        </div>
        <div>
          <p class="valid_email_text" style="margin-bottom: 40px;">We sent a code to <span style="font-weight: 600;">{{ email }}
            </span> to make sure it is valid. Please enter the code below.</p>
          <p v-show="sendCode" class="green_warning">We sent you a new code.</p>
          <p v-show="invalidCode && !loading" class="red_warning">Invalid code. Please try again.</p>
          <div class="input-container" v-on:keydown.enter="verifyCode" v-on:keydown.backspace="invalidCode = false">
            <input type="number" v-model="code" ref="code" @input="inputEntered" max="9999" min="0"
                onKeyDown="if(this.value.length==4 && event.keyCode>47 && event.keyCode < 58)return false;"
            />
            <div v-if="loading" class="verif-btn-loading">
              <div style="width: 140px;">
              <v-progress-circular indeterminate :size="26" :width="3" color="white darken-1"/>
              </div>
            </div>
            <div v-else class="verif-btn-red" @click="verifyCode"><div class="verif-btn-text">verify</div></div>
          </div>
          <div @click="openChangeEmail" class="change-email">
            <p style="margin-top: 5px;">Change My Email Address</p>
          </div>
          <div @click="sendVerificationCode" class="send-verif">
            <p style="margin-top: 5px;">Send a new code</p>
          </div>

        </div>
      </div>
    </div>
    <!-- change email window -->
    <div v-show="!isVerified && changingEmail">
      <div class="inner">
        <h2 class="verify_email_header">Change Email Address</h2>
        <p class="valid_email_text">Please enter your new email below.
          Once changed, a new code will be sent to the following email address.</p>
        <p class="red_warning">{{ changeEmailError }}</p>
        <div style="width: 100%;">
          <home-text-field required v-model="newEmail" label="Email" class="next_job_text_field" type="email"
          :rules="[
              v => !!v || 'Email is required',
              v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w+)+$/.test(v) || 'Invalid email format'
            ]"/>
        </div>
      </div>
      <div style="display: flex; margin-bottom: 70px; margin-top: 20px;">
        <div v-if="loading" class="change-btn" style="cursor: disabled !important;">
          <v-progress-circular indeterminate :size="26" :width="3" color="white darken-1"/>
        </div>
        <div v-else class="change-btn" @click="changeEmail">Change</div>
        <div class="cancel-btn"  @click="changingEmail = false;">Cancel</div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import Store from '@/store';

  export default {
    props: ['emailProp'],
    data() {
      return {
        code: '',
        sendCode: false,
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
      routetoSeach() {
        this.$router.push('/search');
      },
      routetoProfile() {
        this.$router.push('/account');
      },
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
        this.loading = true;
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
        this.sendCode = true;
        this.loading = true;
        axios.post('/auth/sendVerificationCode').then((res) => {
          this.loading = false;
          if (res.data.success) {
            this.loading = false;
            console.log('code sent correctly');
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
        this.sendCode = false;
        const code = this.code; // should be a 4-character string
        if (code.length !== 4) {
          return;
        }
        this.loading = true;
        this.invalidCode = false;
        axios.post('/auth/verifyUsingCode', { code: code }).then((res) => {
          this.loading = false;
          if (res.data.success) {
            this.isVerified = true;
            // this.$emit('verified');
          } else if (res.data.message && res.data.message === 'Already verified') {
            this.isVerified = true;
            // this.$emit('verified');
          } else if (res.data.message && res.data.message === 'Invalid code') {
            this.invalidCode = true;
          }
          if (this.isVerified) {
            Store.commit({
              type: 'keepUserdata',
              userdata: { email_verified: true },
              updateLastFetched: false,
            });
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
        this.sendCode = false;
      },
      changeEmail() {
        if (this.loading) {
          return;
        }
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
    },
  };
</script>