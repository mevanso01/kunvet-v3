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

.reminder-dropdown {
  font-size:10px;
  color: red;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0px;
  margin-left: 10px;
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
      :tag_list="category"
      v-on:list-changed="dropdownListChange">
    </k-dropdown>
    <p v-if="!ifSelectedCategory" class = "reminder-dropdown">Please select at least one field</p>
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
          <k-btn @click="addGroupToMailChimp" class="signup-button">Add to mailchimp</k-btn>
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
import categoryPositionMap from '@/constants/categoryPositionMap';
import category from '@/constants/categoryList';
import userDataProvider from '@/userDataProvider';
import userdata from '@/constants/userdata';
import userdata1 from '@/constants/userdata1';

export default {
  props: {
    banner: {
      type: Boolean,
      default: false,
    },
    unsubscribed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fname: '',
      email: '',
      state: 'initial',
      category_tags: [],
      position_tags: [],
      availablePositions: positions,
      category: category,
      categoryPositionMap: categoryPositionMap,
      userData: userdata,
      userData1: userdata1,
      loggedIn: true,
      userdata: null,
      useBanner: false,
      success: false,
      ifSelectedCategory: true,
      application_bool: false,
      jobExpired_bool: false,
      preferences: null,
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
        this.preferences = data.userdata.preferences;
        this.application_bool = (this.preferences.applicationStatusEmails === 'All');
        this.jobExpired_bool = (this.preferences.jobExpiredEmails === 'All');
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
      if (!this.$refs.form.validate() || this.category_tags.length < 1) {
        if (this.category_tags.length < 1) { this.ifSelectedCategory = false; }
        this.$debug('Failed validation');
        return;
      }

      var postData = {
        email_address: this.email,
        fname: this.fname,
        tags: this.categoryToTags(),
        status: 'subscribed',
      };
      console.log(postData);
      if (!this.loggedIn) {
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
      } else {
        var currentStatus = 'subscribed';
        var postDt = {
          email_address: this.email,
          status: currentStatus,
        };
        console.log(postDt);

        axios.post('/mailchimp/updatePreference', postDt).then(() => {
          console.log('updated on mailchimp');
        }, (error) => {
          this.$error(error);
        });
        this.preferences.getNewsletters = true;
        this.preferences.applicationStatusEmails = (this.application_bool) ? 'All' : 'Off';
        this.preferences.jobExpiredEmails = (this.jobExpired_bool) ? 'All' : 'Off';
        console.log('preferences:');
        console.log(this.preferences.getNewsletters);
        userDataProvider.setUserData({
          preferences: {
            getNewsletters: this.preferences.getNewsletters,
            jobExpiredEmails: this.preferences.jobExpiredEmails,
            applicationStatusEmails: this.preferences.applicationStatusEmails,
          },
        });
        setTimeout(() => {
          this.$emit('post', 'finished');
        });
      }
    },
    addGroupToMailChimp() {
      var k = 0;
      for (var i = 0; i < this.userData1.length; i++) {
        var tagsToAdd;
        console.log(this.userData1[i].email);
        if (this.userData1[i].tags.length === 0) {
          tagsToAdd = ['no preference'];
        } else {
          tagsToAdd = this.userData1[i].tags;
        }
        var postData = {
          email: this.userData1[i].email,
          tags: tagsToAdd,
        };
        console.log(postData);
        axios.post('/mailchimp/addTags', postData).then(() => {
          console.log('posted on mailchimp');
          console.log(postData.email_address);
        }, (error) => {
          this.$error(error);
          console.log('An error Occured');
        });
        for (var j = 0; j < 700000000; j++) {
          k += 1;
        }
      }
      console.log(k);
    },
    categoryToTags() {
      console.log(category);
      var tempList = [];
      for (var i = 0; i < this.category_tags.length; i++) {
        for (var j = 0; j < this.categoryPositionMap.length; j++) {
          if (this.category_tags[i] === this.categoryPositionMap[j].category) {
            tempList = tempList.concat(this.categoryPositionMap[j].positions);
            console.log(tempList);
          }
        }
      }
      var toSet = new Set(tempList);
      var retArray = Array.from(toSet);
      console.log(retArray);
      return retArray;
    },
    dropdownListChange(value) {
      console.log('called');
      this.category_tags = value;
      if (this.category_tags.length > 0) {
        this.ifSelectedCategory = true;
      }
    },
  },
  computed: {
    ifUseBanner() {
      return this.banner;
    },
  },
};
</script>
