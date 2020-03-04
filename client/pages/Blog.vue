<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,800,800i);
  
  // overall
  .content {
    max-width: 500px;
    margin: 0 auto;
    font-family: 'Open Sans';
    img.logo {
      height: 20px;
      margin: 46px auto;
      display: table;
    }
  }
  .category {
    margin-bottom: 40px;
    > img.cover-img {
      width: 100%;
      margin-bottom: 20px;
    }
    .sub-header {
      font-size: 24px;
      font-weight: 800;
      line-height: 120%;
      letter-spacing: 0;
    }
    .header, .description, .date, .name {
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.03em;
    }
    .sub-header, .description {
      color: #3c3c3c;
    }
    .header, .name, .date {
      color: #aaaaaa;
    }
    .header {
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .sub-header {
      margin-bottom: 6px;
    }
    .description {
      margin-bottom: 16px;
    }
    .date, .name {
      margin-bottom: 0;
    }
  }
  .coming-soon * {
    color: #aaaaaa !important;
  }
  .divider {
    height: 0;
    widows: 100%;
    border-top: 1px solid #e4e4e4;
  }
  .subscribe-content {
    font-family: 'Open Sans';
    background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #8ab4ff);
    padding: 50px 8% 80px;
    width: 100%;
    img.form-logo {
      height: 140px;
      display: table;
    }
    .header {
      font-size: 28px;
      color: #ffffff;
      font-weight: 800;
      line-height: 120%;
      letter-spacing: 0;
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
    }
    .footer {
      font-size: 12px;
      color: #ffffff;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0;
      text-align: center;
    }
    ._check-box {
      user-select: none;
      cursor: pointer;
      i {
        font-size: 14px;
        color: #f4f4f4;
        margin-top: auto;
        margin-bottom: auto;
        &.fa-square {
          color: rgba(255, 255, 255, 0.2);
        }
      }
      span {
        font-size: 16px;
        color: #ffffff;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: 0;
        margin-left: 4px;
      }
    }
    .input-field {
      caret-color: #fff !important;
      div.v-input__slot {
        background-color: rgba(255, 255, 255, 0.2) !important;
        label, input {
          letter-spacing: 0.03rem;
          font-weight: 400;
          color: #fff;
          font-size: 16px;
          line-height: 120%;
        }
      }
    }
    .submit-button {
      letter-spacing: 0.03rem;
      color: #fff;
      background-color: rgba(255, 255, 255, 0.5);
      font-size: 14px;
      font-weight: 700;
      line-height: 120%;
      margin: 0;
      height: 48px;
      border-radius: 0 !important;
    }
    .success-msg {
      padding: 6px 10px;
      margin-bottom: 20px;
      background-color: rgba(255, 255, 255, 0.2);
      font-size: 16px;
      color: #ffffff;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .temp-link {
    &:hover, &:active, &:focus {
      color: #888888 !important;
    }
  }
  // big desktop
  @media (min-width: 1025px){
  }
  // medium desktop
  @media (min-width: 801px) and (max-width: 1024px) {
  }
  // mobile
  @media (min-width: 601px) and (max-width: 800px) {
  }
  // small
  @media (min-width: 451px) and (max-width: 600px) {
  }
  // extra small
  @media (max-width: 450px) {
  }
</style>

<style lang="scss">
// overrides here
.subscribe-content {
  .input-field div.v-input__slot {
    background-color: rgba(255, 255, 255, 0.2) !important;
    padding-left: 16px !important;
    border-radius: 0 !important;
    label, input {
      letter-spacing: 0.03rem;
      font-weight: 400;
      color: #fff;
      font-size: 16px;
      line-height: 120%;
    }
  }
}
</style>

<template>
  <v-container fluid style="padding: 0;">
    <div style="margin: 0 8% -40px; 8%; padding-bottom: 40px;">
      <div class="content">
        <img class="logo" :src="pngs.logo" alt="">

        <div class="category">
          <img class="cover-img" :src="pngs.thumbnailMissingWork" alt="5-great-excuses-for-missing-work"><br>
          <div class="header">Careers</div>
          <div class="sub-header">
            <a class="temp-link mb-3" href="/blog/5-great-excuses-for-missing-work.html">
              5 Great Excuses for Missing Work
            </a>
          </div>
          <div class="description">
            Need to recharge and don't know what to tell your boss? Here are my personal top 5 excuses that got me out of work every single time!
          </div>
          <div class="name">Shannon Serpette</div>
          <div class="date">Mar 7, 2020 • 9 min read</div>
        </div>

        <div class="divider" style="margin-bottom: 30px;"></div>

        <div class="category coming-soon">
          <div class="header">coming soon</div>
          <div class="sub-header">3 Interview Techniques That Will Up Your Game</div>
          <div class="description">Today, I'm going to reveal to you 3 interview techniques that are used by current Google, Facebook employees.</div>
        </div>
      </div>
    </div>
    <div class="subscribe-content">
      <div style="max-width: 400px; margin: auto;">
        <img class="form-logo mx-auto" :src="pngs.nightOwl" alt="">
        <div class="header">Get Exclusive Content That Will Up Your Game</div>
        <form style="margin-bottom: 10px;" autocomplete="off" @submit.prevent="onClickBlogSubscribe">
          <div v-if="form.success" class="success-msg">Awesome! See you soon!</div>
          <!-- <div class="" style="display: flex; justify-content: center; margin-bottom: 10px;">
            <div class="_check-box" @click="form.isCareers = !form.isCareers" style="margin-right: 16px;">
              <i class="fas" :class="[form.isCareers ? 'fa-check-square' : 'fa-square']"></i><span>Careers</span>
            </div>
            <input type="checkbox" name="chk_validator" ref="chk_validator" v-model="form.chkValidatorOn"
              oninvalid="this.setCustomValidity('Please check at least one of the boxes.')"
              onchange="this.setCustomValidity('')"
              required
              style="position: absolute; opacity: 0;"/>
            <div class="_check-box" @click="form.isBusiness = !form.isBusiness">
              <i class="fas" :class="[form.isBusiness ? 'fa-check-square' : 'fa-square']"></i><span>Business</span>
            </div>
          </div> -->
          <div style="margin-bottom: 2px;">
            <v-text-field
              solo flat hide-details
              label="First name"
              class="input-field"
              v-model="form.fname"
              required
            ></v-text-field>
          </div>
          <div style="margin-bottom: 2px;">
            <v-text-field
              solo flat hide-details
              label="Email address"
              class="input-field"
              type="email"
              v-model="form.email"
              required
            ></v-text-field>
          </div>
          <div>
            <v-btn
              type="submit"
              block flat
              class="submit-button"
              :working="form.loading"
              :disabled="form.loading">
              <span v-if="!form.loading">LET'S DO THIS!</span>
              <i v-if="form.loading" class="fas fa-circle-notch fa-spin" style="font-size: 30px;"></i>
            </v-btn>
          </div>
        </form>
        <div class="footer">
          We're committed to your privacy. Kunvet uses the information you provide to us to contact you about our relevant content.
          You may unsubscribe from these communications at any time.
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Axios from 'axios';
import logo from '@/assets/blog/logo.svg';
import placeholder1 from '@/assets/blog/placeholder1.png';
import placeholder2 from '@/assets/blog/placeholder2.png';
import nightOwl from '@/assets/blog/night_owl.svg';
import thumbnailMissingWork from '@/assets/blog/5-great-excuses-for-missing-work-thumbnail.png';

export default {
  metaInfo: {
    title: 'Blog | Kunvet',
  },
  data() {
    return {
      pngs: {
        logo: logo,
        placeholder1: placeholder1,
        placeholder2: placeholder2,
        nightOwl: nightOwl,
        thumbnailMissingWork: thumbnailMissingWork,
      },
      form: {
        fname: '',
        email: '',
        loading: false,
        success: false,
        // isCareers: false,
        // isBusiness: false,
        // chkValidatorOn: false,
      },
    };
  },
  methods: {
    onClickBlogSubscribe() {
      this.form.loading = true;
      this.form.success = false;
      const postData = {
        email_address: this.form.email,
        fname: this.form.fname,
        tags: ['careers'],
        status: 'subscribed',
        type: 'blog',
      };
      // if (this.form.isBusiness) {
      //   postData.tags.push('business');
      // }
      // if (this.form.isCareers) {
      //   postData.tags.push('careers');
      // }
      Axios.post('/mailchimp/addMember', postData).then(() => {
        console.log('posted on mailchimp');
        this.form.loading = false;
        this.form.success = true;
        this.form.fname = '';
        this.form.email = '';
        this.form.isCareers = false;
        this.form.isBusiness = false;
      }, (error) => {
        this.$error(error);
        this.form.loading = false;
        this.form.success = false;
      });
    },
  },
  watch: {
    // 'form.isCareers'() {
    //   this.form.chkValidatorOn = this.form.isCareers || this.form.isBusiness;
    //   this.$refs.chk_validator.setCustomValidity(this.form.chkValidatorOn ? '' : 'Please check at least one of the boxes.');
    // },
    // 'form.isBusiness'() {
    //   this.form.chkValidatorOn = this.form.isCareers || this.form.isBusiness;
    //   this.$refs.chk_validator.setCustomValidity(this.form.chkValidatorOn ? '' : 'Please check at least one of the boxes.');
    // },
  },
  activated() {
  },
};
</script>
