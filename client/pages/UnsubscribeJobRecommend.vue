<style lang="scss" scoped>
  // overall
  .content {
    width: 100%;
    min-height: 100vh;
    padding-left: 8%;
    padding-right: 8%;
    background-color: rgb(109, 201, 247);
    .sub-content {
      max-width: 400px;
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
      margin-top: 30px;
      text-align: center;
    }
    .sub-title {
      font-size: 20px;
      font-family: proxima-nova;
      color: #ffffff;
      font-weight: normal;
      line-height: 120%;
      margin-top: 10px;
      text-align: center;
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
</style>

<template>
  <div class="content">
    <div class="sub-content">
      <div style="display: flex; justify-content: center;">
        <img class="logo" :src="pngs.logo" alt="" style="height: 100px;">
      </div>
      <div class="title">
        See you later, alligator!
      </div>
      <div class="sub-title">
        You've been successfully unsubscribed from Kunvet's job recommendation emails
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import logo from '@/assets/unsubscribe/alligator.svg';

export default {
  metaInfo: {
    title: 'Kunvet Unsubscribe',
  },
  data() {
    return {
      pngs: {
        logo: logo,
      },
    };
  },
  methods: {
  },
  watch: {
  },
  activated() {
    const postData = {
      uid: this.$route.query.q,
    };
    console.log(postData);
    Axios.post('/account/unsubscribe/job-recommendation', postData).then(() => {
      console.log('unsubscribed');
    }, (error) => {
      this.$error(error);
    });
  },
};
</script>
