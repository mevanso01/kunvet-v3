<style lang="scss">
  .codeverbox {
    max-width: 420px;
    margin: auto;
    border: 1px solid #eee;
    text-align: center;
    .inner {
      padding: 20px;
    }
    .input-container {
      width: 200px;
      height: 60px;
      margin: auto;
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
  <div class="codeverbox">
    <div class="inner" v-show="!isVerified">
      <h2 style="margin-bottom: 8px; margin-top: 4px; color: #333; font-weight: 500;">Verify your email</h2>
      <!-- the user should not have to see and click this button, but it's there just in case -->
      <div style="width: 100%; padding: 10px 0;" v-show="!email">
        <v-btn outline @click="lookForAndSendCode">Send verification email</v-btn>
      </div>
      <div v-show="email">
        <p>We sent a temporary code to <strong>{{ email }}</strong> to make<span class="l-break"><br></span> sure you own it. Please enter it below:</p>
        <div class="input-container">
          <input id="box1" v-model="box1" maxlength="1" @input="inputEntered" />
          <input id="box2" v-model="box2" maxlength="1" @input="inputEntered" />
          <input id="box3" v-model="box3" maxlength="1" @input="inputEntered" />
          <input id="box4" v-model="box4" maxlength="1" @input="inputEntered" />
        </div>
        <a @click="sendVerificationCode" style="color: gray !important; margin-top: 16px; display: inline-block;">
          <i class="material-icons" style="margin-right: 3px;">refresh</i>Send a new code
        </a>
      </div>
    </div>
    <div class="inner" v-show="isVerified">
      <h2 style="margin-bottom: 16px; margin-top: 16px; color: #333; font-weight: 500;">Your email is verified.</h2>
    </div>
    <div v-show="email && !isVerified" class="general-submit" @click="">
      <div class="general-submit-default">
          <span>VERIFY</span>
      </div>
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
      loading: true,
      email: '',
    };
  },
  methods: {
    inputEntered(e) {
      const input = e.data;
      const srcId = e.srcElement.id;
      if ('0123456789'.indexOf(input) !== -1 && srcId) {
        if (srcId !== 'box4') {
          const srcIdNum = parseInt(srcId.slice(3), 10); // strip 'box' from the id
          const nextInput = document.getElementById(`box${srcIdNum + 1}`);
          if (nextInput) { // should always be true, but just in case
            nextInput.focus();
          }
        }
      }
    },
    lookForAndSendCode() {
      axios.post('/auth/lookForAndSendCode').then((res) => {
        console.log('res', res.data);
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
        console.log(err);
      });
    },
    sendVerificationCode() {
      axios.post('/auth/sendVerificationCode').then((res) => {
        console.log('res', res.data);
        if (res.data.success) {
          this.loading = false;
          this.email = res.data.email;
        } else if (res.data.message && res.data.message === 'Already verified') {
          this.isVerified = true;
          this.$emit('verified');
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
