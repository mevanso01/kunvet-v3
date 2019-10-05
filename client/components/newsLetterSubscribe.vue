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
.back_button_style{
  width: 102.5px;
}

.selection-list {
  overflow: scroll;
  overflow-x: hidden;
  height: 200px;
  background-color: #efefef;
  cursor: pointer;
}

.list-item:hover {
  background-color: #dfdfdf;

}
.list-item {
  padding: 0px;
  margin: 0 16px;
}
.list-item-selected {
  padding: 0px;
  margin: 0 16px;
  color: lightgrey;
}
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 24px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #999;
}

.chip{
    display: inline-flex;
    flex-direction: row;
    background-color: #e5e5e5;
    border: none;
    cursor: default;
    height: 36px;
    outline: none;
    padding: 0;
    font-size: 14px;
    font-color: #333333;
    font-family:"Open Sans", sans-serif;
    white-space: nowrap;
    align-items: center;
    border-radius: 16px;
    vertical-align: middle;
    text-decoration: none;
    justify-content: center;
}
.chip-content{
    cursor: inherit;
    display: flex;
    align-items: center;
    user-select: none;
    white-space: nowrap;
    padding-left: 12px;
    padding-right: 12px;
}
.chip-svg{
        color: #999999;
    cursor: pointer;
    height: auto;
    margin: 4px 4px 0 -8px;
  fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
}
.chip-svg:hover{
    color: #666666;
}
</style>

<template>
  <div :class="[ifUseBanner?'signup-card-banner' : 'signup-card']">
    <div v-show="state == 'initial'" class="container">
      <h1>Never again miss the ideal job.</h1>
      <p><!--<span v-if="email != null && fname != null">Hi, {{fname}}! </span>-->The ideal job of your choice will reach out to <b>you first</b> — before it is found by others!</p>
      <div style="margin-bottom: 20px;">
      <v-layout style="background-color: #efefef; min-height:60px;">
        <v-flex xs10 sm11>
          <template v-if="position_tags.length > 0">
            <div style="text-align: left; padding-left: 10px;">
              <div class="chip" v-for="tags in position_tags" :key="tags" style="margin: 3px;">
                <div class="chip-content">{{tags}}</div>
                <div class="chip-close">
                  <svg class="chip-svg" @click="changeList(tags)" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
                </div>
              </div>
            </div>
          </template>
          <p v-else style="margin: 0 16px;"><b>What Interests You?</b></p>
        </v-flex>
        <v-flex sm1  @click="changeTagState()" style="cursor: pointer; padding-top: 0px;">
          <img v-if="!isEditing" :src="svgs.plus" style="margin-top:8px;width: 18px; margin-right: 10px;"/>
          <img v-else :src="svgs.minus" style="width: 18px; margin-right: 10px;"/>
        </v-flex>
      </v-layout>
      <div v-if="isEditing" height="200">
        <v-list class="selection-list">
          <v-list-tile :class="[position_tags.includes(item)?'list-item-selected' : 'list-item']" style="padding: 0 0px;" v-for="(item, i) in availablePositions" :key="i" @click="changeList(item)">{{item}}</v-list-tile>
        </v-list>
      </div>
    </div>
      <v-form ref="form">
        <!-- requireFullName -->
        <!--<v-autocomplete
              v-model="position_tags"
              :items="availablePositions"
              filled
              chips
              color="#898b8e"
              :label="`${isEditing ? 'Editable' : ' What Interests You?'}`"
              :rules="[(v) => (v && v.length > 0) || 'required']"
              background-color="#efefef"
              multiple
              flat
              solo-inverted
              style="font-weight: bold;"
              maxHeight=200
          >
        </v-autocomplete>-->

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
import Plus from '@/assets/plus.svg';
import Minus from '@/assets/minus.svg';

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
      isEditing: false,
      useBanner: false,
      svgs: {
        plus: Plus,
        minus: Minus,
      },
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
    changeTagState() {
      this.isEditing = !this.isEditing;
      console.log(this.isEditing);
    },
    onClickLater () {
      console.log('onClickLater');
      this.$emit('notNow', 'later');
    },
    changeList(item) {
      for (var i = 0; i < this.position_tags.length; i++) {
        if (this.position_tags[i] === item) {
          this.position_tags.splice(i, 1);
          console.log(this.position_tags);
          return;
        }
      }
      this.position_tags.push(item);
      console.log(this.position_tags);
    },
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
  computed: {
    ifUseBanner() {
      return this.banner;
    },
  },
};
</script>
