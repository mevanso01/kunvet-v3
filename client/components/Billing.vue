<template>
  <div>
    <div class="dropin-container"></div>
    <k-btn @click="confirmPayment">Confirm</k-btn>
  </div>
</template>
<script>
import Axios from 'axios';

function loadBraintreeDropin() {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://js.braintreegateway.com/web/dropin/1.17.1/js/dropin.min.js';
    script.addEventListener('load', resolve);
    document.head.appendChild(script);
  });
}

export default {
  data() {
    return {
      instance: null,
    };
  },
  async mounted() {
    if (!window.braintree) {
      await loadBraintreeDropin();
    }

    const tokenResponse = await Axios.get('/billing/getAuthorization');

    window.braintree.dropin.create({
      authorization: tokenResponse.data,
      container: '.dropin-container',
    }, (createErr, instance) => {
      this.instance = instance;
    });
  },
  methods: {
    confirmPayment() {
      this.instance.requestPaymentMethod((err, payload) => {
        console.log(err, payload);
      });
    },
  },
};
</script>
