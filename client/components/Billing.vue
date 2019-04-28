<template>
  <div>
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
    actions: Array,
    buttonText: String,
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
  computed: {
    confirmButtonText() {
      return this.buttonText || 'confirm';
    },
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
