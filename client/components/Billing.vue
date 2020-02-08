<style>
  .billing-component .bi-cont {
    border-bottom: 1px solid #e1e4e8;
  }
  .dropin-container .braintree-placeholder {
    display: none !important;
  }
  .dropin-container .braintree-upper-container:before {
    background-color: white !important;
  }
</style>
<template>
  <div class="billing-component" v-show="!completed">
    <!-- <div v-if="true || hasPostJobAction">
      Post your job ($5.99)
    </div> -->
    <div class="bi-cont mb-2">
      <h2 class="mb-1">{{computeTitleText}}</h2>
      <p>Your job will be displayed for {{daysToExpire}} days before expiring. The payment is powered by PayPal services and we do not store sensitive payment information on our servers.</p>
    </div>
    <div class="bi-cont mb-3">
      <h2 class="mt-3 mb-3">Due today: {{ totalPriceString }}</h2>
    </div>
    <div ref="dropin" class="dropin-container"></div>
    <div class="mt-5 mb-2"><span v-if="showError" style="font-size: 20px; color: red;">{{ errMsg }}</span></div>
    <k-btn class="mt-3" :disabled="instance == null" @click="confirmPayment" :working="loading">Confirm</k-btn>
  </div>
</template>
<script>

import Axios from 'axios';
import Config from 'config';

// Drop-in documentation
// https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html#~cardPaymentMethodPayload
const dropin = require('braintree-web-drop-in');

export default {
  data() {
    return {
      jobId: '',
      title: '',
      buttonText: '',
      completed: true,
      instance: null,
      actions: [],
      postJobPrice: 9.00,
      nonceUsed: false,
      loading: false,
      showError: false,
      errMsg: '',
    };
  },
  mounted() {
  },
  computed: {
    confirmButtonText() {
      return this.buttonText || 'Confirm';
    },
    hasPostJobAction() {
      return this.actions && this.actions.find(x => x.name === 'activateJob' && x.jobId);
    },
    totalPriceString() {
      const total = this.postJobPrice; // later will be combined with promote job price and stuff
      return `$${total}`;
    },
    computeTitleText() {
      return this.title || 'Post your job';
    },
    daysToExpire() {
      return Config.get('daysToExpire') || 30;
    },
  },
  methods: {
    async show(jobId, buttonText = '', title = '') {
      console.log('show me the money');
      this.jobId = jobId;
      this.buttonText = buttonText;
      this.title = title;

      this.$refs.dropin.innerHTML = ''; // just in case
      const tokenResponse = await Axios.get('/billing/getAuthorization');
      dropin.create({
        authorization: tokenResponse.data,
        container: this.$refs.dropin,
        vaultManager: true,
      }, (createErr, instance) => {
        this.instance = instance;
        console.log(createErr);
      });

      this.completed = false;
    },

    refreshDropIn() {
      if (this.nonceUsed === true) {
        // console.log('this.$refs.dropin ', this.$refs.dropin);
        // console.log('AAAAAAAAAH');
        this.$refs.dropin.innerHTML = '';
      }
      this.completed = false;
    },

    confirmPayment() {
      this.actions = [{
        name: 'activateJob',
        jobId: this.jobId,
      }];
      this.showError = false;
      this.loading = true;
      this.$debug(this.instance);
      // TODO: remove 'production' case when deploying to 'prod' branch
      if (process.env.NODE_ENV === 'development') {
        this.chargeUser({});
        return;
      }
      this.instance.requestPaymentMethod((err, payload) => {
        // console.log(err, payload);
        if (err) { this.loading = false; }
        // console.log('payload nonce ', payload.nonce);
        const creditCardNonce = payload.nonce;
        this.chargeUser(creditCardNonce);
      });
    },
    chargeUser(nonce) {
      // const testAction = {
      //   name: 'activateJob',
      //   jobId: '5bd24ada2f0af760a64acf56',
      // };
      const paymentData = {
        actions: this.actions,
        paymentMethodNonce: nonce,
      };
      Axios.post('/billing/createTransaction', paymentData).then((res => {
        this.loading = false;
        if (res.data.success) {
          this.showError = false;
          this.$emit('success');
          // show them thanks for creating a job/promoting
          this.nonceUsed = true;
          console.log('true');
        } else {
          this.showError = true;
          this.errMsg = res.data.message;
          console.log('error');
        }
      })).catch(error => {
        const errbody = error.response.data;
        this.showError = true;
        this.loading = false;
        this.errMsg = errbody.message;
      });
    },
  },
};
</script>
