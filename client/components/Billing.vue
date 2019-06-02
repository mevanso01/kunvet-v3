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
      <p>Your job will be displayed for 60 days before expiring</p>
    </div>
    <div class="bi-cont mb-3">
      <h2 class="mt-3 mb-3">Due today: {{ totalPriceString }}</h2>
    </div>
    <div ref="dropin" class="dropin-container"></div>
    <k-btn class="mt-3" @click="confirmPayment" :working="loading">{{ confirmButtonText }}</k-btn>
  </div>
</template>
<script>
import Axios from 'axios';

// Drop-in documentation
// https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html#~cardPaymentMethodPayload
const dropin = require('braintree-web-drop-in');

export default {
  data() {
    return {
      jobId: '',
      buttonText: '',
      title: '',
      completed: true,
      instance: null,
      actions: [],
      postJobPrice: 0.40,
      nonceUsed: false,
      loading: false,
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
  },
  methods: {
    async show(jobId, buttonText = '', title = '') {
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
        console.log('this.$refs.dropin ', this.$refs.dropin);
        this.$refs.dropin.innerHTML = '';
        this.init();
      }
    },

    confirmPayment() {
      this.actions = [{
        name: 'activateJob',
        jobId: this.jobId,
      }];
      this.loading = true;
      this.instance.requestPaymentMethod((err, payload) => {
        console.log(err, payload);
        if (err) { this.loading = false; }
        console.log('payload nonce ', payload.nonce);
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
          this.$emit('success');
          // show them thanks for creating a job/promoting
          this.nonceUsed = true;
        } else {
          console.log('error');
        }
      }));
    },
  },
};
</script>
