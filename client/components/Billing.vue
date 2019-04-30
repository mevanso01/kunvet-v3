<style>
  .billing-component .bi-cont {
    border-bottom: 1px solid #e1e4e8;
  }
  .dropin-container .braintree-placeholder {
    display: none !important;
  }
</style>
<template>
  <div class="billing-component">
    <!-- <div v-if="true || hasPostJobAction">
      Post your job ($5.99)
    </div> -->
    <div class="bi-cont mb-2">
      <h2 class="mb-1">Post your job</h2>
      <p>Your job will be displayed for 30 days before expiring</p>
    </div>
    <div class="bi-cont mb-3">
      <h2 class="mt-3 mb-3">Due today: {{ totalPriceString }}</h2>
    </div>
    <div class="dropin-container"></div>
    <k-btn @click="confirmPayment">{{ confirmButtonText }}</k-btn>
  </div>
</template>
<script>
import Axios from 'axios';

// Drop-in documentation
// https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html#~cardPaymentMethodPayload
const dropin = require('braintree-web-drop-in');

export default {
  props: {
    // actions: Array,
    jobId: String,
    buttonText: String,
  },
  data() {
    return {
      instance: null,
      actions: [],
      postJobPrice: 4.99,
    };
  },
  async mounted() {
    const tokenResponse = await Axios.get('/billing/getAuthorization');
    dropin.create({
      authorization: tokenResponse.data,
      container: '.dropin-container',
      vaultManager: true,
    }, (createErr, instance) => {
      this.instance = instance;
    });
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
  },
  methods: {
    confirmPayment() {
      this.actions = [{
        name: 'activateJob',
        jobId: this.jobId,
      }];
      this.instance.requestPaymentMethod((err, payload) => {
        console.log(err, payload.description);
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
        if (res.data.success) {
          console.log('success');
          this.$emit('success');
          // show them thanks for creating a job/promoting
        } else {
          console.log('error');
        }
      }));
    },
  },
};
</script>
