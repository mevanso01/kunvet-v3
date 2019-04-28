<template>
  <v-container fluid style="padding-right: 0; padding-left: 0;">
    <div style="max-width: 420px; margin: auto;">
      <Billing buttonText="Post job" />
    </div>
  </v-container>
</template>
<script>
/* eslint-disable no-unused-vars */
import gql from 'graphql-tag';
// import CodeVerification from '@/components/CodeVerification';

import Billing from '@/components/Billing';

export default {
  // data() {
  // },
  components: {
    Billing,
  },
  methods: {
  },
};
</script>
