<style scoped>
.signup-card {
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
}

.container {
  margin: 50px auto;
  padding: 0;
  text-align: center;
  width: 80%;
}

h1 {
  height: 24px;
  text-align: left;
  margin: 5px 0 25px 0;
  font-size: 24px;
  font-weight: bold;
}
</style>

<template>
  <div class="signup-card">
    <div class="container">
      <h1 :style="headerStyle">{{ accountTypeInfo.header }}</h1>
      <v-form ref="form">
        <!-- requireFullName -->
        <k-text-field placeholder="First Name"
          v-model="fname" v-if="accountTypeInfo.requireFullName"
          required
        ></k-text-field>
        <k-text-field placeholder="Last Name"
          v-model="lname" v-if="accountTypeInfo.requireFullName"
          required
        ></k-text-field>

        <!-- requireBusinessName -->
        <k-text-field placeholder="Name of Organization / Business"
          v-model="business_name" v-if="accountTypeInfo.requireBusinessName"
          required
        ></k-text-field>

        <k-text-field v-model="email" placeholder="Email Address" :rules="emailRules" required></k-text-field>
        <k-text-field v-model="password" type="password" placeholder="Password" :rules="passwordRules" required></k-text-field>

        <k-btn @click="signup" :color="accountTypeInfo.color">Sign Up</k-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
// import Axios from 'axios';
// import KunvetError from '#/KunvetError';
// import EventBus from '@/EventBus';

export default {
  props: {
    type: {
      type: String,
      default: 'student',
      validator(value) {
        return ['student', 'business', 'individual'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      fname: '',
      lname: '',
      business_name: '',
      email: '',
      password: '',

      // Account types
      accountTypes: {
        student: {
          header: 'Student Sign Up',
          color: '#3488fc',
          requireFullName: true,
          requireBusinessName: false,
        },
        business: {
          header: 'Business Sign Up',
          color: '#ffb85a',
          requireFullName: false,
          requireBusinessName: true,
        },
        individual: {
          header: 'Individual Poster Sign Up',
          color: '#e391ff',
          requireFullName: true,
          requireBusinessName: false,
        },
      },

      // Validation
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w+)+$/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters',
      ],
    };
  },
  methods: {
    signup() {
      if (!this.$refs.form.validate()) {
        this.$debug('Failed validation');
      }
    },
  },
  computed: {
    accountTypeInfo() {
      return this.accountTypes[this.type];
    },
    headerStyle() {
      return {
        color: this.accountTypeInfo.color,
      };
    },
  },
};
</script>
