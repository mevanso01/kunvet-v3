<style lang="scss" scoped>
@import url("https://use.typekit.net/bfb5jiv.css");

.choose_page{
  padding-top: 162px;
  padding-left: 280px;
  max-width: 960px;
}

.choose_title{
  margin-top: 4px;
  font-family: proxima-nova, sans-serif;
  font-weight: bold;
  font-size: 52px;
  color: #FF6969;
}

.title_bottom{
  padding-top: 26px;
  font-size: 22px;
  color: black;
  font-family: proxima-nova, sans-serif;
}

.title_bottom_login{
    color: #FF6969;
    font-weight: bold;
}

.pricing_employer{
  width: 960px;
}

.emp_personal{
  width: 470px;
  height: 830px;
  top: 20px;
  display: block;
  float: left;
}

.emp_business{
  width: 470px;
  height: 830px;
  top: 20px;
  float: right;
}

.card_title{
  padding-top: 44px;
  font-weight: bold;
  padding-left: 46px;
  font-family: proxima-nova, sans-serif;  
  font-size: 24px;
}

.card_title_btm{
  padding-left: 46px;
  color: grey;
  font-size: 16px;
  font-family: proxima-nova, sans-serif;
  margin: none;
  float: left;
}

.card_title_img{
  height:36px; 
  margin-top: -18px; 
  margin-right:44px; 
  float: right;
}

.card_get_account{
  margin-left: 44px;
  width: 380px;
  height: 46px !important;
  line-height: 46px !important;
}

.card_list{
  padding-top: 42px;
  padding-left: 44px;
  font-size: 16px;
  margin-bottom: 0px;
  font-family: proxima-nova, sans-serif;
}

.card_list_icon{
  padding-right: 14px; 
  line-height: 22px; 
  font-weight: bolder;
}

.emp_pricing_page_bottom{
  width: 960px;
  padding-top: 30px;
}


</style>

<template>
<div class="choose_page">
  <h2 class="choose_title">Choose Your Account</h2>
  <p class="title_bottom">Already have an account? <span class="title_bottom_login"><router-link to="/login">Log In</router-link></span> instead.</p>
  <div class="pricing_employer">
    <v-card class="emp_personal">
      <h2 class="card_title">Personal</h2>
      <p class="card_title_btm"> Perfect for personal hiring. </p>
      <img class="card_title_img" :src="svgs.personal">
      <router-link to="/signup/individual"><k-btn class="card_get_account">Get Personal Account</k-btn></router-link>
      <p class="card_list" style="padding-top: 48px;"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>$5 per job posting</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Posting stays active for 60 days</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">info_outline</v-icon>Basic Job Posting</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Receive Resume Through Email</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Save a Copy of All Appliations on the Website</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">info_outline</v-icon>Basic Applicant Management on the Website</p>
    </v-card>
    <v-card class="emp_business">
      <h2 class="card_title">Business</h2>
      <p class="card_title_btm"> Perfect for startup & small organization. </p>
      <img class="card_title_img" :src="svgs.business">
      <router-link to="/signup/business"><k-btn class="card_get_account">Get Business Account</k-btn></router-link>
      <strike style="color:red;"><p class="card_list" style="padding-top: 24px; color: black; padding-left: 86px;">$15</p></strike>
      <p class="card_list" style="padding-top: 0px;"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>$10 per job posting<span style="font-weight: bold; color: #FF6766;"> - Early Bird Price!</span></p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Posting stays active for 60 days</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Advanced Job Posting</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Receive Resume Through Email</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Save a Copy of All Appliations on the Website</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Advanced Applicant Management on the Site</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Public Business Profile</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Ask for Cover Letter</p>
      <p class="card_list" style="color: grey; font-style: italic"><v-icon color="grey" size="28px" class="card_list_icon">schedule</v-icon>Analytics - Coming Soon</p>
    </v-card>
  </div>
  <div style="height: 940px;" />
</div>
</template>

<script>
    import empperson from '@/assets/pricing/pricing_personal.svg';
    import empbusiness from '@/assets/pricing/pricing_business.svg';

    export default {
      data() {
        return {
          svgs: {
            personal: empperson,
            business: empbusiness,
          },
        };
      },
    };
</script>
