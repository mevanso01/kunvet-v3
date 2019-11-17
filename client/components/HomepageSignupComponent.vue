<style scoped>
.signup-card {
  display: flex;
  flex-direction: column;
  /* height: 500px; */
  width: 100%;
}
.container {
  /* margin: 50px auto; */
  padding: 0;
  text-align: center;
  /* width: 80%; */
}
h1 {
  height: 24px;
  text-align: center;
  margin: 5px 0 25px 0;
  font-size: 24px;
  font-weight: bold;
}
.back_button_style{
  width: 102.5px;
}
.next_job_title{
  margin-top: 80px;
  font-size: 40px;
  line-height: 120%;
  font-weight: 600;
  letter-spacing: 0;
  color: #ff6969;
  font-family: proxima-nova, sans-serif; 
  margin-bottom: 0px;
}
.next_job_text{
  font-size: 22px;
  line-height: 150%;
  font-weight: 300;
  letter-spacing: 0;
  color: black;
  font-family: proxima-nova, sans-serif; 
  padding-top: 20px;
  padding-bottom: 40px;
  margin-bottom: 0px;
}
.next_job_text_div{
  width: 440px;
}
.next_job_btn{
  margin-top: 24px;
  width: 440px;
  height: 64px !important;
  line-height: 64px !important;
  box-shadow: none !important;
  border-radius: 0px !important;
  background-color: #ff6969;
}
.next_job_btn_text{
  font-family: proxima-nova, sans-serif;
  font-size: 16px; 
  color: white;
  letter-spacing: 0em; 
  line-height: 120%;
  font-weight: 600;
}
.next_job_btn_undertext{
  margin-top: -6px;
  font-size: 14px;
  line-height: 120%;
  font-weight: 300;
  letter-spacing: 0;
  font-family: proxima-nova, sans-serif; 
  padding-top: 8px;
  padding-bottom: 150px;
  margin-bottom: 0px;
}
.next_job_btn_undertext_terms{
  font-weight: 600;
  text-decoration: none;
}
.next_job_btn_undertext_terms:hover{
  text-decoration: underline;
}
.next_job_text_field{
  margin-bottom: 8px;
  font-family: proxima-nova, sans-serif; 
}

</style>

<template>
  <div class="signup-card">
    <div v-show="state == 'initial'" class="container">
        <h2 class="next_job_title">Your Next Job is Waiting</h2>
        <p class="next_job_text">With a free account, you have access to all the newest jobs near you. Get yours now.</p>
        <div class="next_job_field">
        <v-form ref="form">
            <home-text-field required v-model="fname" v-if="accountTypeInfo.requireFullName"
            :rules="requiredRules" label="First Name" class="next_job_text_field"/>
            <home-text-field required v-model="lname" v-if="accountTypeInfo.requireFullName"
            :rules="requiredRules" label="Last Name" class="next_job_text_field"/>
            <home-text-field required v-model="email" :rules="emailRules" label="Email" class="next_job_text_field"/>
            <home-text-field required v-model="password" toggleVisibility :rules="passwordRules" label="Password" class="next_job_text_field" style="margin-bottom: 0px;"/>
        </v-form>
        <k-btn @click="signup" class="next_job_btn"><span class="next_job_btn_text">
            Create Free Applicant Account</span></k-btn>
        <p class="next_job_btn_undertext">I have read and agreed to the <span class="next_job_btn_undertext_terms">
            <router-link to="terms" target="_blank">Terms and Conditions</router-link></span>.</p>
        </div>
    </div>
    <div v-show="state == 'error'" class="container">
      Error!
    </div>
    <div v-show="state == 'verify'" class="container">
      <CodeVerification ref="codever" @verified="codeValidated" />
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import KunvetError from '#/KunvetError';
import CodeVerification from '@/components/HomeCodeVerification';
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
    doRedirect: {
      type: Boolean,
      default: false,
    },
    dontValidate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fname: '',
      lname: '',
      email: '',
      password: '',
      business_name: '',
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
          requireFullName: true,
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
  components: {
    CodeVerification,
  },
  mounted() { // emits the proper account color to the login button in JobDetail
    this.$emit('account', this.accountTypes[this.type]);
  },
  methods: {
    chooseSignup(type) {
      this.$emit('select', type);
    },
    addTagToMailChimp() {
      var postData = {
        email_address: this.email,
        fname: this.fname,
        tags: ['no preference'],
        status: 'subscribed',
      };
      console.log(postData);

      Axios.post('/mailchimp/addMember', postData).then(() => {
        console.log('posted on mailchimp');
      }, (error) => {
        this.$error(error);
      });
    },
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
        account_type: this.type,
      };

      if (this.accountTypeInfo.requireFullName) {
        data.fname = this.fname;
        data.lname = this.lname;
      }

      if (this.accountTypeInfo.requireBusinessName) {
        data.business_name = this.business_name;
      }

      Axios.post('/auth/register', data, headers).then((res) => {
        if (res.data.success) {
          console.log('after success');
          console.log(this.type);
          if (this.type === 'student') {
            this.addTagToMailChimp();
          }
          this.logIntoAcct(this.email, this.password); // go to step 2
        } else {
          this.loading = false;
          if (res.data.message === 'User already exists') {
            this.error = 'UserExistsError';
          } else if (res.data.message === 'Email exists but not verified') {
            this.error = 'UserExistsError';
          } else {
            this.state = 'error';
            this.$emit('error');
            this.$error(new KunvetError(res.data));
          }
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
          this.fetchAcctData(); // go to step 3
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

        if (udata.default_org) {
          this.commitBusinessID(udata.default_org);
        }
        EventBus.$emit('login', udata.account_type); // should be same as this.type
        if (this.doRedirect) {
          // redirect to validate page
          this.$router.push('/validate');
        } else if (!this.dontValidate) {
          // show code verification component inside this component
          this.state = 'verify';
          this.$refs.codever.init();
        } else {
          // emit success and let the parent take the next action
          this.$emit('success');
        }
      }).catch((error) => {
        this.loading = false;
        this.$error(error);
      });
    },
    codeValidated() {
      this.state = 'success';
      this.$emit('success');
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
