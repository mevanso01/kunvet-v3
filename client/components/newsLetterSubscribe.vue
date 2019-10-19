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
  margin-top: 50px;
}
h1 {
  text-align: left;
  margin: 0 0 14px 0;
  font-size: 28px;
  font-weight: bold;
}
p {
  text-align: left;
  font-size: 16px;
  margin: 0 0 30px 0;
}

</style>

<template>
  <div :class="[ifUseBanner?'signup-card-banner' : 'signup-card']">
    <div v-show="state == 'initial'" class="container">
      <h1>Never again miss the ideal job.</h1>
      <p><!--<span v-if="email != null && fname != null">Hi, {{fname}}! </span>-->The ideal job of your choice will reach out to <b>you first</b> — before it is found by others!</p>

    <k-dropdown
      title="What interests you?"
      :tag_list="availablePositions"
      v-on:list-changed="position_tags = $event">
    </k-dropdown>
      <v-form ref="form">
        <div v-if="!loggedIn">
          <k-text-field label="FIRST NAME"
            v-model="fname" :rules="requiredRules"
            required
            class="input-box"
          ></k-text-field>

          <k-text-field v-model="email" label="EMAIL" :rules="emailRules" required class="input-box" style="margin-top: 20px"></k-text-field>
        </div>

        <div class="newsletter-buttons" >
          <k-btn v-if="!ifUseBanner" @click="onClickLater()" style="background-color: white; color: #ff6969; border: 1px solid; border-color: #ff6969; font-weight: bold;">Not Now</k-btn>
          <k-btn @click="addMemberToMailChimp" style="margin-left: 20px; font-weight: bold;">Active for Free</k-btn>
        </div>

        <v-alert
            dense
            text
            type="success"
            :value="preferenceChanged"
            transition="slide-x-transition">
          {{message}}
        </v-alert>
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
      message: 'Successfully posted on Mailchimp!',
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
        this.message =  'Successfully posted on Mailchimp!';
        this.preferenceChanged = true;
        setTimeout(() => {
          this.preferenceChanged = false;
          console.log('emitting close');
          this.$emit('close', 'later');
        },
        1500);
      }, (error) => {
        this.$error(error);
        this.message = 'An error occured, please try again or contact us for help!';
        this.preferenceChanged = true;
        setTimeout(() => {
          this.preferenceChanged = false;
          console.log('emitting close');
          this.$emit('close', 'later');
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
