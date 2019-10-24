<style scoped>
.signup-card {
  display: flex;
  flex-direction: column;
  padding: 50px 50px 40px 50px;
}
.signup-card-banner {
  display: flex;
  flex-direction: column;
  padding: 0px;
  vertical-align: middle;
}
.container {
  /* margin: 50px auto; */
  padding: 0;
  text-align: center;

  /* width: 80%; */
}
.input-box {
  background-color: #efefef;
  color: #898b8e;
  box-shadow: 0 0 0;
  border-radius: 0px;
  height: 60px;
}
.newsletter-buttons {
  text-align: right;
  margin-top: 10px;
}
h1 {
  text-align: left;
  font-size: 32px;
  font-family: proxima nova;
  font-weight: 600;
  color: #3c3c3c;
  line-height: 120%;
  letter-spacing: 0;
  padding-bottom: 10px;
}
p {
   font-size: 20px;
   font-family: proxima nova;
   font-weight: 300;
   color: #3c3c3c;
   line-height: 150%;
   letter-spacing: 0;
   text-align: left;
   margin-bottom: 20px;
 }

 .signup-button {
   width: 500px;
   height: 64px;
   font-size: 16px;
   font-family: proxima nova;
   font-weight: 600;
   font-color: #ffffff;
   line-height: 120%;
   letter-spacing: 0;
   background-color: #ff6969;
   box-shadow: 0;
   border-radius: 0;
 }

</style>

<template>
  <div :class="[ifUseBanner?'signup-card-banner' : 'signup-card']">
    <div v-if="!success" class="container">
      <h1>Never again miss the ideal job.</h1>
      <p>The ideal job of your choice will reach out to <span style='font-weight: 600'>you first</span> — before it is found by others!</p>

    <k-dropdown
      style="margin-bottom: 4px"
      title="Job Preference"
      :tag_list="availablePositions"
      v-on:list-changed="position_tags = $event">
    </k-dropdown>

      <v-form ref="form">
        <div v-if="!loggedIn">
          <k-text-field label="FIRST NAME"
            v-model="fname" :rules="requiredRules"
            required
            class="input-box"
            style="margin-bottom: 0px; margin-top: 0px"
            placeholder="FIRST NAME"
          ></k-text-field>

          <k-text-field v-model="email" label="EMAIL" :rules="emailRules" required class="input-box" style="margin-top: 4px" placeholder="EMAIL"></k-text-field>
        </div>

        <div class="newsletter-buttons" >
          <k-btn v-if="!ifUseBanner" @click="onClickLater()" style="background-color: white; color: #ff6969; border: 1px solid; border-color: #ff6969; font-weight: bold;">Not Now</k-btn>
          <k-btn v-if="!ifUseBanner" @click="addMemberToMailChimp" style="margin-left: 20px; font-weight: bold;">Active for Free</k-btn>
          <k-btn v-if="ifUseBanner" @click="addMemberToMailChimp" class="signup-button">Active for Free</k-btn>
        </div>

      </v-form>
    </div>
    <div v-else>
      <h1>{{title}}</h1>
      <p>{{message}}</p>
    </div>

  </div>
</template>
<script>
import axios from 'axios';
import positions from '@/constants/positions';
import userDataProvider from '@/userDataProvider';

export default {
  props: {
    banner: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fname: '',
      email: '',
      state: 'initial',
      position_tags: [],
      availablePositions: positions,
      loggedIn: true,
      userdata: null,
      useBanner: false,
      success: false,
      title: 'You Are Subscribed',
      message: 'We will notify you when there are new jobs that match your preferences! Cancel anytime.',
      preferenceChanged: false,
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
        this.loggedIn = false;
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
    onClickLater () {
      console.log('onClickLater');
      this.$emit('close', 'later');
    },
    addMemberToMailChimp() {
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
        this.title = 'You Are Subscribed';
        this.message = 'We will notify you when there are new jobs that match your preferences! Cancel anytime.';
        this.preferenceChanged = true;
        this.success = true;
        setTimeout(() => {
          this.preferenceChanged = false;
          this.success = false;
          console.log('emitting close');
          this.$emit('post', 'finished');
        },
        1500);
      }, (error) => {
        this.$error(error);
        this.title = 'An Error Occured';
        this.message = 'An error occured, please try again or contact us for help!';
        this.preferenceChanged = true;
        this.success = true;
        setTimeout(() => {
          this.preferenceChanged = false;
          this.success = false;
          console.log('emitting close');
          this.$emit('error', 'later');
        },
        1500);
      });
    },
  },
  computed: {
    ifUseBanner() {
      return this.banner;
    },
  },
};
</script>
