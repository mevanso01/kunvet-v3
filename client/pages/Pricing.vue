<style lang="scss" scoped>
.pricing_page{
  padding-top: 162px;
  padding-left: 280px;
  max-width: 960px;
}

.pricing_title{
  margin-top: 4px;
  display:inline-block;
  font-family: Lora,'Segoe UI', Tahoma, sans-serif;
  font-weight: 400;
  font-size: 46px !important;
  line-height: 90%;
  background: linear-gradient(to right, #FF5F6D 0%, #FFC371 100%) left bottom #fff no-repeat;
  padding-bottom: 4px;
  background-size: 100% 12px;
}

.title_bottom{
  padding-top: 26px;
  font-size: 22px;
  color: black;
  font-family: Lora ,'Segoe UI', Tahoma, sans-serif;
}

.choose_role_div{
  height: 122px;
  width: 960px;
  background: linear-gradient(to right, #FF5F6E, #FFC372 50%);
}

.choose_role_title{
  padding-left: 46px;
  padding-top: 24px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 0px;
}

.sel_btn_div{
  padding-left: 46px;
  padding-top: 6px;
  height: 50px;
}

.btn_sel{
  height: 42px !important;
  line-height: 42px !important;
  width: 122px;
  box-shadow: none !important;
  background-color: white !important;
  color: red !important;
}

.btn_not{
  height: 42px !important;
  line-height: 42px !important;
  width: 122px;
  box-shadow: none !important;
  background:none !important;
}

.pricing_employer{
  width: 960px;
}

.pricing_applicant{
  width: 960px;
  background-color: red;
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
  font-family: 'Roboto', sans-serif;  
  font-size: 24px;
}

.card_title_btm{
  padding-left: 46px;
  color: grey;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
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

.warning_title{
  font-size: 34px;
  color: #FF6766;
  font-weight: bold;
  font-family: 'Proxima Nova', sans-serif;
  padding-top: 30px;
}

.warning_text{
  font-size: 26px;
  color: black;
  font-family: 'Proxima Nova', sans-serif;
  padding-top: 20px;
}

.grey_warning{
  font-size: 16px;
  color: grey;
  font-family: 'Proxima Nova', sans-serif;
  padding-top: 20px;
}

.refund_title{
  font-size: 32px;
  color: #83ADFF;
  font-weight: bold;
  font-family: 'Proxima Nova', sans-serif;
  padding-top: 26px;
}

.refund_text{
  font-size: 26px;
  color: black;
  font-family: 'Proxima Nova', sans-serif;
  padding-top: 20px;
}

.question_title{
  font-size: 32px;
  color: #F9B81E;
  font-weight: bold;
  font-family: 'Proxima Nova', sans-serif;
  padding-top: 26px;
}

.question_text{
  font-size: 26px;
  color: black;
  font-family: 'Proxima Nova', sans-serif;
  padding-top: 20px;
}

.standard_pricing_page_bottom{
  width: 960px;
  padding-top: 30px;
}

.privacy_title{
  font-size: 32px;
  color: black;
  font-weight: bold;
  font-family: 'Proxima Nova', sans-serif;
  padding-top: 26px;
}

.privacy_text{
  font-size: 24px;
  color: black;
  font-family: 'Proxima Nova', sans-serif;
  padding-top: 20px;
}

</style>

<template>
<div class="pricing_page">
  <h2 class="pricing_title">Pricing and Refund</h2>
  <p class="title_bottom">Satisfacation guaranteed - Or money back.</p>
  <div class="choose_role_div">
    <p class="choose_role_title">Choose Your Role</p>
    <div class="sel_btn_div">
      <k-btn v-bind:class="{ 'btn_sel': price_toggle === true, 'btn_not': price_toggle === false}" @click="price_toggle = true">Employer</k-btn>
      <k-btn v-bind:class="{ 'btn_sel': price_toggle === false, 'btn_not': price_toggle === true}" @click="price_toggle = false">Applicant</k-btn>
    </div>
  </div>
  <div class="pricing_employer" v-if="price_toggle === true">
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
      <p class="card_list" style="padding-top: 48px;"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>$10 per job posting</p>
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
  <div class="pricing_applicant" v-else>
    <v-card class="emp_personal" style="height: 630px;">
      <h2 class="card_title">Standard</h2>
      <p class="card_title_btm"> A simple account for job applicants. </p>
      <img class="card_title_img" :src="svgs.standard">
      <router-link to="/signup/student"><k-btn class="card_get_account">Get Standard Account</k-btn></router-link>
      <p class="card_list" style="padding-top: 48px;"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Free</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Access to All Jobs</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Receive Notification of Application Status</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Upload Unlimted Resumes</p>
      <p class="card_list"><v-icon color="black" size="28px" class="card_list_icon">done</v-icon>Save Unlimited Job Posts</p>
    </v-card>
  </div>
  <div style="height: 940px;" v-if="price_toggle === true"></div>
  <div style="height: 750px;" v-else></div>
  <div class="emp_pricing_page_bottom" v-if="price_toggle === true">
    <!---warning section-->
    <img style="height: 68px;" :src="svgs.warning">
    <h2 class="warning_title">Stop Wasting Your Money or Effort!</h2>
    <p class="warning_text">The average cost of posting a job online is $124 for every 30 days*. However, with
        Kunvet, the starting price is only $5 per 60 days, or $2.5 per month. You could
        save yourself $121.5 every month, or $1,458 every year! Save that money for a new
        once table, a new advertising campaign, or a trip to Europe. Try Kunvet today.</p>
    <p class="warning_text" style="font-weight: bold;">Is Kunvet Right for Me?</p>
    <p class="warning_text">Kunvet is very effective for businesses hiring locally and offering entry-level,
        <br>part-time, temporary job, internship, and volunteering. If that describes your
        business, try Kunvet now. Stop wasting your money and effort on hiring.</p>
    <p class="grey_warning">* Average cost of posting jobs on popular US job websites in 2018.</p>
    <!---refund section-->
    <img style="height: 100px; margin-top: 100px;" :src="svgs.refund">
    <h2 class="refund_title">Get Full Refund Immediately. No Question Asked.</h2>
    <p class="refund_text">Our refund policy beats 99% of the job websites in the market. If you are not
      completely satisfied with the service you received, we issue a <span style="font-weight: bold">full refund</span>
      immediately on your inquiry. No question will be asked. To request for a refund,
      simply send us an email via refund@kunvet.com.</p>
    <p class="refund_text" style="padding-top: 30px;">We want to remind you that our website is designed for local hiring for small
      business, startup, non-profit, and individual. The popular opportunities on Kunvet
      are entry-level, part-time, temporary job, internship, and volunteering.</p>
    <!---Other questions section-->
    <img style="height: 94px; margin-top: 110px;" :src="svgs.question">
    <h2 class="question_title">Other Questions?</h2>
    <p class="question_text">To see what other employers are saying about Kunvet, please visit our <span style="font-weight: bold; color: #FF6766 !important;"><router-link to="/hire">Employer</router-link></span>
      page. There you can also see how Kunvet works in action.</p>
    <p class="question_text" style="padding-top: 30px; padding-bottom: 120px;">If you have any additional question or concern, please don't hesitate to contact us
      at info@kunvet.com. We will respond within a few hours.</p>
  </div>
  <div class="standard_pricing_page_bottom" v-else>
    <img style="height: 68px;" :src="svgs.shield">
    <h2 class="privacy_title">Privacy Policy That You Can Trust.</h2>
    <p class="privacy_text" style="padding-bottom: 120px;">We value your privacy. So, we built a strict privacy policy. We do not share your
      personal information with anyone besides the employer of the job to which
      you are applying. For more information on our privacy policy, please visit our
      <span style="font-weight: bold; color: #FF6766 !important;"><router-link to="/terms">Terms & Policy </router-link></span> page.</p>
  </div>
</div>
</template>

<script>
    import empperson from '@/assets/pricing/pricing_personal.svg';
    import empbusiness from '@/assets/pricing/pricing_business.svg';
    import empstandard from '@/assets/pricing/pricing_standard.svg';
    import warning from '@/assets/pricing/warning.svg';
    import refund from '@/assets/pricing/return.svg';
    import question from '@/assets/pricing/question.svg';
    import shield from '@/assets/pricing/shield.svg';

    export default {
      props: {
        price_toggle: {
          type: Boolean,
          default: true,
        },
      },
      data() {
        return {
          svgs: {
            personal: empperson,
            business: empbusiness,
            standard: empstandard,
            warning: warning,
            refund: refund,
            question: question,
            shield: shield,
          },
        };
      },
    };
</script>
