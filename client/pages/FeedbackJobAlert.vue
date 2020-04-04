<style lang="scss" scoped>
  // overall
  .content {
    width: 100%;
    min-height: 100vh;
    padding-left: 8%;
    padding-right: 8%;
    background-color: rgb(110, 203, 255);
    .sub-content {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 150px;
    }
    .title {
      font-size: 36px !important;
      font-family: proxima-nova !important;
      color: #ffffff;
      font-weight: bold;
      line-height: 120% !important;
    }
    .sub-title {
      font-size: 18px !important;
      font-family: proxima-nova !important;
      color: #ffffff;
      font-weight: normal;
      line-height: 120% !important;
    }
    textarea {
      width: 500px;
      height: 150px;
      padding: 16px;
      font-size: 16px;
      font-family: proxima-nova !important;
      color: #ffffff;
      font-weight: normal;
      line-height: 120% !important;
      border: 1px solid #fff;
      &:focus {
        outline: none !important;
      }
    }
    .btn-send {
      color: white;
      line-height: 120%;
      font-weight: bold;
      font-size: 16px;
      height: 50px;
      width: 100px;
      font-family: proxima-nova !important;
      letter-spacing: 0.06em;
      border: 1px solid white;
      margin: 0;
    }
    .err-msg {
      color: black;
      font-family: proxima-nova !important;
      line-height: 120%;
      font-size: 16px;
      margin-top: 20px;
    }
  }
  // big desktop
  @media (min-width: 1025px){
  }
  // medium desktop
  @media (min-width: 801px) and (max-width: 1024px) {
  }
  // mobile
  @media (min-width: 601px) and (max-width: 800px) {
  }
  // small
  @media (min-width: 451px) and (max-width: 600px) {
  }
  // extra small
  @media (max-width: 450px) {
  }
  // custom
  @media (max-width: 400px) {
    .content {
      .sub-content {
        padding-top: 110px;
      }
    }
  }
</style>

<style lang="scss">
  // overrides here
  .chk-white .v-input--selection-controls__input + label.v-label {
    color: white !important;
    font-size: 16px;
    font-family: proxima-nova !important;
    font-weight: normal;
    line-height: 120%;
  }
  .chk-white .v-input--selection-controls__input > .v-input--selection-controls__ripple {
    color: rgba(255,255,255,0.87) !important;
    display: none;
  }
  .chk-white .v-input--selection-controls__input > i.v-icon {
    color: white !important;
  }
</style>

<template>
  <div class="content">
    <form autocomplete="off" v-show="!unavailable && !form.success" @submit.prevent="onSendFeedback">
      <div class="sub-content" v-if="type==='yes'">
        <div class="title">
          Thank you for your feedback!
        </div>
        <div class="sub-title" style="margin-top: 16px;">
          What did you like about the job recommendation?
        </div>
        <textarea v-model="note" required style="margin-top: 10px;">
        </textarea>
        <div class="err-msg" v-if="form.error">Something went wrong! Please try again.</div>
        <v-btn
          type="submit"
          class="btn-send"
          style="margin-top: 20px;"
          outline
          :working="form.loading"
          :disabled="form.loading">SEND</v-btn>
      </div>
      <div class="sub-content" v-if="type==='no'">
        <div class="title">
          We're sorry to hear that.
        </div>
        <div class="sub-title" style="margin-top: 16px;">
          Please tell us what went wrong:
        </div>
        <v-checkbox v-for="(item, i) in reason" :key="i" class="chk-white" style="margin-top: 10px;"
          :label="item.label"
          v-model="item.checked"
          hide-details
        ></v-checkbox>
        <textarea v-model="note" required v-if="reason[4].checked" style="margin-top: 10px;">
        </textarea>
        <div class="err-msg" v-if="form.error">Something went wrong! Please try again.</div>
        <v-btn
          type="submit"
          class="btn-send"
          style="margin-top: 20px;"
          outline
          :working="form.loading"
          :disabled="form.loading">SEND<i v-if="form.loading" class="fas fa-circle-notch fa-spin" style="font-size: 20px;"></i></v-btn>
      </div>
    </form>
    <div class="sub-content" v-show="!unavailable && form.success">
      <div class="title">
        Your feedback was sent.
      </div>
      <div class="sub-title" style="margin-top: 16px;">
        Thank you for your input. Your response helps us cultivate the best customer experience possible.
      </div>
    </div>
    <div class="sub-content" v-show="unavailable">
      <div class="title">
        Feedback unavailable
      </div>
      <div class="sub-title" style="margin-top: 16px;">
        You have already submitted feedback for this particular email.
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  metaInfo: {
    title: 'Kunvet Feedback',
  },
  data() {
    return {
      unavailable: false,
      reason: [
        {
          label: 'Jobs were above/below my experience level',
          checked: false,
        },
        {
          label: 'Jobs didn’t match my preference',
          checked: false,
        },
        {
          label: 'Jobs were too far away',
          checked: false,
        },
        {
          label: 'I\'ve already seen these jobs',
          checked: false,
        },
        {
          label: 'Other',
          checked: false,
        },
      ],
      form: {
        loading: false,
        success: false,
        error: false,
      },
      note: '',
      type: '',
      userHash: '',
      jobIds: '',
      alert_date: '',
    };
  },
  methods: {
    onSendFeedback() {
      this.form.loading = true;
      this.form.success = false;
      this.form.error = false;
      const postData = {
        userHash: this.userHash,
        type: this.type,
        note: this.note,
        jobs: this.jobIds,
        reason: this.reason.filter(item => item.checked).map(item => item.label),
        alert_date: this.alert_date,
      };
      Axios.post('/account/feedback/job-recommendation', postData).then((res) => {
        this.form.loading = false;
        if (res.data.success) {
          this.form.success = true;
        } else if (res.data.message === 'duplicated') {
          this.unavailable = true;
        } else {
          this.form.error = true;
        }
      }, (error) => {
        this.$error(error);
        this.form.loading = false;
        this.form.success = false;
        this.form.error = true;
      });
    },
  },
  watch: {
  },
  activated() {
    this.type = this.$route.query.q1;
    this.userHash = this.$route.query.q2;
    this.jobIds = this.$route.query.q3;
    this.alert_date = this.$route.query.q4;
    if (!this.type || !this.userHash || !this.jobIds || !this.alert_date) {
      this.$router.push({
        path: '/error',
      });
    }
    this.$router.push({
      path: '',
    });
  },
};
</script>
