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

</style>

<template>
  <div class="signup-card">
    <div v-show="state == 'initial'" class="container">
      <h1><span v-if="email != null && fname != null">Hi, {{fname}}! </span>Sign Up to Our Newsletter!</h1>

      <v-form ref="form">
        <!-- requireFullName -->
        <div v-if="email == null || fname == null">
          <k-text-field label="First Name"
            v-model="fname" :rules="requiredRules"
            required
          ></k-text-field>

          <k-text-field v-model="email" label="Email Address" :rules="emailRules" required></k-text-field>
        </div>
        <h4 class="cust-subheader mb-1">Position tags</h4>
        <p>Please select at least one category that is relevant to this job</p>
        <v-layout row wrap>
          <v-flex xs12 sm9 md6 class="no-padding">
            <v-autocomplete class="mt-0"
              :items="availablePositions"
              v-model="position_tags"
              multiple
              attach
              required
              placeholder="Select one or more..."
              :rules="[(v) => (v && v.length > 0) || 'required']"
              >
            </v-autocomplete>
          </v-flex>
        </v-layout>
        <k-btn @click="addMemberToMailChimp">Sign Up</k-btn>
      </v-form>
    </div>
    <div v-show="state == 'success'" class="container">
      Successful!
    </div>

  </div>
</template>
<script>
import axios from 'axios';
import positions from '@/constants/positions';
import userDataProvider from '@/userDataProvider';

export default {
  data() {
    return {
      fname: '',
      email: '',
      state: 'initial',
      position_tags: [],
      availablePositions: positions,
      loggedIn: true,
      userdata: null,
      requiredRules: [
        v => !!v || 'Required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w+)+$/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  mounted() {
    userDataProvider.getUserData().then(data => {
      if (data.acct === 0) {
        console.log('not logged in');
      } else {
        this.uid = data.uid;
        this.email = data.userdata.email;
        this.fname = data.userdata.firstname;
        console.log(this.email);
        console.log(this.fname);
      }
    });
    console.log('I am activated');
  },
  methods: {
    addMemberToMailChimp() {
      // console.log(postData);
      if (!this.$refs.form.validate()) {
        this.$debug('Failed validation');
        return;
      }
      var postData = {
        email_address: this.email,
        fname: this.fname,
        tags: this.position_tags,
        status: 'subscribed',
      };
      console.log(postData);

      axios.post('/mailchimp/addMember', postData).then(() => {
        console.log('posted on mailchimp');
      }, (error) => {
        this.$error(error);
      });
    },
  },
};
</script>
