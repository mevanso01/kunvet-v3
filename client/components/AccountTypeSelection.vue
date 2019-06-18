<style scoped lang="scss">
.pos-bottom {
  position: absolute;
  width: calc(100% - 32px);
  bottom: 16px;
}
.student-signup-color {
  // color: #3089fc;
  // color: #019de1;
  color: #3488fc;
}
.business-signup-color {
  color: #ffc370;
}
.individual-signup-color {
  color: #e491ff;
}
.flex {
  padding: 8px;
}
.choose-account-section {
  text-align: center;
  h2 {
    font-weight: bold;
  }
}
@media (min-width: 960px) {
  h2 {
    margin-bottom: 12px;
  }
}
@media (min-width: 601px) {
  .choose-account-section {
    padding-bottom: 32px;
  }
  .choose-account-section .v-card__text  {
    padding-left: 32px;
    padding-right: 32px;
  }
  .choose-account-section .v-card {
    height: 230px;
  }
  .pos-bottom {
    width: calc(100% - 64px);
  }
  .mobile-hr {
    display: none;
  }
}
@media (max-width: 600px) {
  .choose-account-section {
    padding: 16px 0;
  }
  .v-card {
    box-shadow: none !important;
  }
  .mobile-hr {
    display: block;
    margin: 16px auto 20px auto;
  }
  .text-xs-center.pos-bottom {
    padding-right: 16px;
    padding-left: 16px;
  }
}
</style>
<template>
  <v-layout row wrap class="choose-account-section">
    <v-flex sm4 v-show="!forbiddenTypes || !forbiddenTypes.includes('student')">
      <v-card>
        <v-card-text>
          <div style="margin-bottom: 84px;">
            <h2 class="student-signup-color">Students</h2>
            <p>Are you looking to apply for jobs? Sign up here!</p>
          </div>
          <div class="text-xs-center pos-bottom">
            <k-btn color="#3488fc" block @click="chooseSignup('student')">Student Sign Up</k-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex sm4 v-show="!forbiddenTypes || !forbiddenTypes.includes('business')">
      <v-divider class="mobile-hr" />
      <v-card>
        <v-card-text>
          <div style="margin-bottom: 84px;">
            <h2 class="business-signup-color">Business</h2>
            <p>If you are looking to hire for your business or organization, choose this option</p>
          </div>
          <div class="text-xs-center pos-bottom">
            <k-btn color="#ffc370" block @click="chooseSignup('business')">Business Sign Up</k-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex sm4 v-show="!forbiddenTypes || !forbiddenTypes.includes('individual')">
      <v-divider class="mobile-hr" />
      <v-card>
        <v-card-text>
          <div style="margin-bottom: 84px;">
            <h2 class="individual-signup-color">Personal Hiring</h2>
            <p>If you're an individual looking to hire someone, choose this option</p>
          </div>
          <div class="text-xs-center pos-bottom">
            <k-btn color="#e491ff" block @click="chooseSignup('individual')">Individual Sign Up</k-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['forbiddenTypes'],
  methods: {
    chooseSignup(type) {
      this.$emit('select', type);
    },
  },
};
</script>