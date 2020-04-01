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
  }
  .chk-white .v-input--selection-controls__input > i.v-icon {
    color: white !important;
  }
</style>

<template>
  <div class="content">
    <div class="sub-content">
      <div class="title">
        Thank you for your feedback!
      </div>
      <div class="sub-title" style="margin-top: 16px;">
        What did you like about the job recommendation?
      </div>
      <textarea style="margin-top: 10px;">
      </textarea>
      <v-btn class="btn-send" style="margin-top: 20px;" outline>SEND</v-btn>
    </div>
    <div class="sub-content">
      <div class="title">
        We're sorry to hear that.
      </div>
      <div class="sub-title" style="margin-top: 16px;">
        Please tell us what went wrong:
      </div>
      <v-checkbox class="chk-white" style="margin-top: 10px;"
        label="Jobs were above/below my experience level"
        checked
        hide-details
      ></v-checkbox>
      <v-checkbox class="chk-white" style="margin-top: 10px;"
        label="Jobs didn’t match my preference"
        hide-details
      ></v-checkbox>
      <v-checkbox class="chk-white" style="margin-top: 10px;"
        label="Jobs were too far away"
        hide-details
      ></v-checkbox>
      <v-checkbox class="chk-white" style="margin-top: 10px;"
        label="I've already seen these jobs"
        hide-details
      ></v-checkbox>
      <v-checkbox class="chk-white" style="margin-top: 10px;"
        label="Other"
        hide-details
      ></v-checkbox>
      <textarea style="margin-top: 10px;">
      </textarea>
      <v-btn class="btn-send" style="margin-top: 20px;" outline>SEND</v-btn>
    </div>
    <div class="sub-content">
      <div class="title">
        Your feedback was sent.
      </div>
      <div class="sub-title" style="margin-top: 16px;">
        Thank you for your input. Your response helps us cultivate the best customer experience possible.
      </div>
    </div>
    <div class="sub-content">
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

export default {
  metaInfo: {
    title: 'Kunvet Feedback',
  },
  data() {
    return {
      reason: {
        value: null,
        text: '',
      },
    };
  },
  methods: {
  },
  watch: {
  },
  activated() {
  },
};
</script>
