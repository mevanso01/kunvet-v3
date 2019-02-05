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
    <div v-if="state == 'initial'" class="container">
      <h1 :style="headerStyle">{{ accountTypeInfo.header }}</h1>
      <p v-if="error === 'UserExistsError'" style="color: #f00">
        An account with this email already exists. Would you like to <router-link to="/login" style="text-decoration: underline;">login?</router-link>
      </p>
      <v-form ref="form">
        <!-- requireFullName -->
        <k-text-field label="First Name"
          v-model="fname" v-if="accountTypeInfo.requireFullName"
          :rules="requiredRules"
          required
        ></k-text-field>
        <k-text-field label="Last Name"
          v-model="lname" v-if="accountTypeInfo.requireFullName"
          :rules="requiredRules"
          required
        ></k-text-field>

        <!-- requireBusinessName -->
        <k-text-field label="Name of Organization / Business"
          v-model="business_name" v-if="accountTypeInfo.requireBusinessName"
          required
        ></k-text-field>

        <k-text-field v-model="email" label="Email Address" :rules="emailRules" required></k-text-field>
        <k-text-field v-model="password" toggleVisibility label="Password" :rules="passwordRules" required></k-text-field>

        <k-btn @click="signup" :working="loading" :color="accountTypeInfo.color">Sign Up</k-btn>
      </v-form>
    </div>
    <div v-if="state == 'error'" class="container">
      Error!
    </div>
    <div v-if="state == 'success'" class="container">
      Successful!
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import KunvetError from '#/KunvetError';
import EventBus from '@/EventBus';

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

      loading: false,
      state: 'initial',
      error: '',

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
          header: 'Individual Sign Up',
          color: '#e391ff',
          requireFullName: true,
          requireBusinessName: false,
        },
      },

      // Validation
      requiredRules: [
        v => !!v || 'Required',
      ],
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
        return;
      }

      this.loading = true;

      const headers = { emulateJSON: true };
      const data = {
        email: this.email,
        pwd: this.password,
      };

      if (this.accountTypeInfo.requireFullName) {
        data.fname = this.fname;
        data.lname = this.lname;
      }

      if (this.accountTypeInfo.requireBusinessName) {
        data.business_name = this.business_name;
      }

      Axios.post('/auth/register', data, headers).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.state = 'success';
          this.$emit('success');
          this.logIntoAcct(this.email, this.password);
        } else if (res.data.message === 'User already exists') {
          this.error = 'UserExistsError';
        } else if (res.data.message === 'Email exists but not verified') {
          this.error = 'UserExistsError';
        } else {
          this.state = 'error';
          this.$emit('error');
          this.$error(new KunvetError(res.data));
        }
      }, (error) => {
        this.state = 'error';
        this.$error(error);
      });
    },
    logIntoAcct(email, password) {
      // step 2 of signing up
      Axios.post('/auth/login', {
        email: email,
        password: password,
      }).then((response) => {
        this.$debug('login response', response);
        if (response.data.success) {
          // logged in successfully
          this.fetchAcctData();
        } else {
          this.loading = false;
          this.$error(new KunvetError(response.data));
        }
      }).catch((err) => {
        this.loading = false;
        this.$error(err);
      });
    },
    fetchAcctData() {
      // step 3 of signing up (final step)
      Axios.get('/auth/status').then((response) => {
        this.loading = false;
        if (!response.data.success) {
          // Unsuccessful
          this.$error(new KunvetError(response.data));
          return;
        }
        if (!response.data.status) {
          // Logged out
          this.$debug('Logged out', response.data);
          return;
        }
        const udata = response.data.user;
        this.commitUserdata(udata);
        this.commitID(udata._id);

        if (udata.default_org === '' || !udata.default_org) {
          // login individual
          EventBus.$emit('individual');
          // this.$router.push('/account');
        } else {
          // login business
          this.commitBusinessID(udata.default_org);
          EventBus.$emit('business');
          // this.$router.push('/myorg');
        }
        this.$router.push('/validate'); // make all users verify their email with code immediately
      }).catch((error) => {
        this.loading = false;
        this.$error(error);
      });
    },
    commitUserdata(udata) {
      this.$store.commit({
        type: 'keepUserdata',
        userdata: udata,
      });
    },
    commitID(_id) {
      this.$store.commit({
        type: 'setAcctID',
        id: _id,
      });
    },
    commitBusinessID(_id) {
      this.$store.commit({
        type: 'setBusinessID',
        id: _id,
      });
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
