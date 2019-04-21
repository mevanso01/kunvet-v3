<template>
  <div>
    <div class="dropin-container"></div>
    <k-btn @click="confirmPayment">Confirm</k-btn>
  </div>
</template>
<script>
// Drop-in documentation
// https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html#~cardPaymentMethodPayload
import Axios from 'axios';

const dropin = require('braintree-web-drop-in');

export default {
  props: {
    actions: Array,
  },
  data() {
    return {
      instance: null,
    };
  },
  async mounted() {
    const tokenResponse = await Axios.get('/billing/getAuthorization');
    dropin.create({
      authorization: tokenResponse.data,
      container: '.dropin-container',
    }, (createErr, instance) => {
      this.instance = instance;
    });
  },
  methods: {
    confirmPayment() {
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

      Axios.post('/postTransaction', paymentData).then((res => {
        if (res.data.success) {
          console.log('success');
          // show them thanks for creating a job/promoting
        } else {
          console.log('error');
        }
      }));
    },
  },
};
</script>
