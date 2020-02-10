<style lang="scss" scoped>
.codeverbox {
  max-width: 440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  //background-color: white;
  //border: 1px solid #eee;
  .verify_email_header{
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: 600;
    color: #ff6969;
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
    width: 440px;
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
    width: 132px;
    height: 28px;
    text-align: center;
    font-family: proxima-nova, sans-serif;
    cursor: pointer !important; 
  }
  .verif-btn-red{
    width: 118px;
    background-color: #ff6969;
    // background-color: #b4b4b4;
    text-align: center;
    cursor: pointer !important;
  }
  .verif-btn-loading{
    width: 118px !important;
    background-color: #ff6969;
    // background-color: #b4b4b4;
    text-align: center;
    line-height: 80px;
    cursor: disabled !important;
    > div {
      width: 118px;
    }
  }
  .verif-btn-text{
    width: 118px;
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
    margin-bottom: 10px;
    font-family: proxima-nova, sans-serif;
  }
  .verified_text{
    font-size: 22px;
    font-weight: 300;
    color: #3c3c3c;
    line-height: 150%;
    letter-spacing: 0;
    margin-bottom: 24px;
    font-family: proxima-nova, sans-serif;
  }
  .congratulation-action-content{
    display: flex;
    .search_jobs_btn{
      width: 160px;
      height: 64px;
      background-color: #ff6969;
      text-align: center;
      border: none;
      box-shadow: none;
      font-size: 16px;
      font-weight: 600;
      color: white;
      line-height: 64px;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-right: 10px;
      cursor: pointer !important;
    }
    .view_profile_btn {
      width: 160px;
      height: 64px;
      text-align: center;
      font-family: proxima-nova, sans-serif;
      background-color: transparent;
      border: 2px solid #ff6969;
      box-shadow: none;
      font-size: 16px;
      font-weight: 600;
      color: #ff6969;
      line-height: 64px;
      letter-spacing: 0;
      cursor: pointer !important;
    }
  }
  .valid_email_text{
    font-size: 22px;
    font-weight: 300;
    color: #3c3c3c;
    line-height: 150%;
    letter-spacing: 0;
    margin-bottom: 24px;
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
.codeverbox {
  .verify_email_header{
    text-align: center;
  }
  .valid_email_text{
    text-align: center;
  }
  .verify-action-content{
    display: flex;
    justify-content: center;
  }
  .verified_header{
    text-align: center;
  }
  .verified_text{
    text-align: center;
  }
  .congratulation-action-content{
    justify-content: center;
  }
  .green_warning, .red_warning{
    text-align: center;
  }
}
@media (min-width: 1025px) {
  .medium:not(.desktop), .mobile:not(.desktop), .small:not(.desktop), .extra_small:not(.desktop) {
    display: none !important;
  }
  .codeverbox {
    .verify_email_header{
      text-align: left;
    }
    .valid_email_text{
      text-align: left;
    }
    .verify-action-content{
      justify-content: start;
    }
    .verified_header{
      text-align: left;
    }
    .verified_text{
      text-align: left;
    }
    .congratulation-action-content{
      justify-content: start;
    }
    .green_warning, .red_warning{
      text-align: left;
    }
  }
}
@media (min-width: 801px) and (max-width: 1024px) {
  .desktop:not(.medium), .mobile:not(.medium), .small:not(.medium), .extra_small:not(.medium) {
    display: none !important;
  }
  .codeverbox {
    .inner {
      margin-top: 80px;
    }
  }
}
@media (min-width: 601px) and (max-width: 800px) {
  .desktop:not(.mobile), .medium:not(.mobile), .small:not(.mobile), .extra_small:not(.mobile) {
    display: none !important;
  }
  .codeverbox {
    .inner {
      margin-top: 60px;
    }
  }
}
@media (min-width: 451px) and (max-width: 600px) {
  .desktop:not(.small), .medium:not(.small), .mobile:not(.small), .extra_small:not(.small) {
    display: none !important;
  }
  .codeverbox {
    .inner {
      margin-top: 50px;
      .verified_header, .verify_email_header{
        font-size: 32px;
      }
      .valid_email_text, .verified_text{
        font-size: 18px;
      }
      .input-container{
        width: 100%;
        max-width: 440px;
      }
    }
  }
}
@media (max-width: 450px) {
  .desktop:not(.extra_small), .medium:not(.extra_small), .mobile:not(.extra_small), .small:not(.extra_small) {
    display: none !important;
  }
  .codeverbox {
    .inner {
      margin-top: 50px;
      .verified_header, .verify_email_header{
        font-size: 28px;
      }
      .valid_email_text, .verified_text{
        font-size: 16px;
      }
      .input-container{
        height: 64px;
        width: 100%;
        max-width: 440px;
        > input {
          height: 64px;
          margin-left: 24px;
        }
        .verif-btn-text{
          width: 110px;
          line-height: 64px;
        }
      }
      .verif-btn-red{
        width: 100px;
      }
      .verif-btn-loading{
        width: 100px !important;
        > div {
          width: 100px;
        }
      }
      .verif-btn-text{
        width: 100px;
      }
    }
  }
}
@media (max-width: 400px) {
  .codeverbox {
    .inner {
      .verify-action-content{
        flex-direction: column;
        .change-email, .send-verif{
          margin-left: auto;
          margin-right: auto;
          margin-top: 6px;
        }
      }
      .congratulation-action-content{
        flex-direction: column;
        .search_jobs_btn, .view_profile_btn{
          margin-left: auto;
          margin-right: auto;
          margin-top: 6px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="codeverbox" v-on:keyup.enter="verifyCode">
    <div class="inner" v-show="isVerified">
      <h2 class="verified_header">Congratulations!</h2>
      <p class="verified_text">You are now signed in. We are thrilled to have you here. Good luck on your job searching!</p>
      <div class="congratulation-action-content">
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
          <p class="valid_email_text">We sent a code to <span style="font-weight: 600;">{{ email }}</span>.
          <br class="desktop medium mobile"/>Please enter the code below.</p>
          <p v-show="sendCode" class="green_warning">We sent you a new code.</p>
          <p v-show="invalidCode && !loading" class="red_warning">Invalid code. Please try again.</p>
          <div class="input-container" v-on:keydown.enter="verifyCode" v-on:keydown.backspace="invalidCode = false">
            <input type="number" v-model="code" ref="code" @input="inputEntered" max="9999" min="0"
                onKeyDown="if(this.value.length==4 && event.keyCode>47 && event.keyCode < 58)return false;"
            />
            <div v-if="loading" class="verif-btn-loading">
              <div>
              <v-progress-circular indeterminate :size="26" :width="3" color="white darken-1"/>
              </div>
            </div>
            <div v-else class="verif-btn-red" @click="verifyCode"><div class="verif-btn-text">verify</div></div>
          </div>
          <div class="verify-action-content">
            <div @click="openChangeEmail" class="change-email">
              <p style="margin-top: 5px;">Change My Email Address</p>
            </div>
            <div @click="sendVerificationCode" class="send-verif">
              <p style="margin-top: 5px;">Send a new code</p>
            </div>
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
            this.$emit('verified');
          } else if (res.data.message && res.data.message === 'Already verified') {
            this.isVerified = true;
            this.$emit('verified');
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