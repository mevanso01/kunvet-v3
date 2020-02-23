<style lang="scss" scoped>
  // overall
  .content {
    max-width: 500px;
    margin: 0 auto;
    .logo {
      margin: 46px auto;
      width: fit-content;
      > img {
        height: 35px;
      }
    }
  }
  .category {
    margin-bottom: 40px;
    > img.cover-img {
      width: 100%;
      margin-bottom: 30px;
    }
    .sub-header {
      font-size: 24px;
      color: #3c3c3c;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: 0;
    }
    .header, .description, .date, .name {
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0.03em;
    }
    .header {
      text-transform: uppercase;
    }
    .header, .description, .date {
      color: #808080;
    }
    .name {
      color: #3c3c3c;
    }
    .header {
      margin-bottom: 4px;
    }
    .sub-header {
      margin-bottom: 4px;
    }
    .description {
      margin-bottom: 16px;
    }
    .date, .name {
      margin-bottom: 0;
    }
  }
  .divider {
    height: 0;
    widows: 100%;
    border-top: 1px solid #e4e4e4;
  }
  .subscribe-content {
    background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #8ab4ff);
    padding-top: 30px;
    padding-bottom: 40px;
    width: 100%;
    img.form-logo {
      height: 140px;
    }
    .header {
      font-size: 30px;
      color: #ffffff;
      font-weight: 600;
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
      font-size: 14px;
      color: #f4f4f4;
      margin-top: auto;
      margin-bottom: auto;
    }
    ._check-box.fa-square {
      color: rgba(255, 255, 255, 0.2);
    }
    ._check-box+span {
      font-size: 16px;
      color: #ffffff;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0;
      margin-left: 4px;
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
      font-weight: 600;
      line-height: 120%;
      margin: 0;
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
  <v-container fluid>
    <div style="margin: -80px 8% -24px; 8%; padding-bottom: 40px;">
      <div class="content">
        <div class="logo">
          <img class="" :src="pngs.logo" alt="">
        </div>

        <div class="category">
          <img class="cover-img" :src="pngs.placeholder1" alt=""><br>
          <div class="header">category</div>
          <div class="sub-header">Lorem ipsum dolor sit amet consectetur</div>
          <div class="description">One-sentence catchy description.</div>
          <div class="name">Firstname Lastname</div>
          <div class="date">Jan 1, 2020 9 min read</div>
        </div>
        <div class="category">
          <img class="cover-img" :src="pngs.placeholder2" alt=""><br>
          <div class="header">category</div>
          <div class="sub-header">Lorem ipsum dolor sit amet consectetur</div>
          <div class="description">One-sentence catchy description.</div>
          <div class="name">Firstname Lastname</div>
          <div class="date">Jan 1, 2020 9 min read</div>
        </div>

        <div class="divider" style="margin-bottom: 30px;"></div>

        <div class="category">
          <div class="header">coming soon</div>
          <div class="sub-header" style="color: #808080;">Lorem ipsum dolor sit amet consectetur</div>
          <div class="description">One-sentence catchy description.</div>
        </div>

        <div class="subscribe-content">
          <div style="max-width: 310px; margin: auto;">
            <div class="mx-auto" style="width: fit-content;">
              <img class="form-logo" :src="pngs.nightOwl" alt=""><br>
            </div>
            <div class="header">Subscribe to Our Blog</div>
            <form style="margin-bottom: 10px;">
              <div class="" style="display: flex; justify-content: center; margin-bottom: 10px;">
                <i class="_check-box fas fa-square"></i><span style="margin-right: 16px;">Careers</span>
                <i class="_check-box fas fa-check-square"></i><span>Business</span>
              </div>
              <div style="margin-bottom: 2px;">
                <v-text-field
                  solo flat hide-details
                  label="First name"
                  class="input-field"
                  required
                ></v-text-field>
              </div>
              <div style="margin-bottom: 2px;">
                <v-text-field
                  solo flat hide-details
                  label="Email address"
                  class="input-field"
                  type="email"
                  required
                ></v-text-field>
              </div>
              <div>
                <v-btn
                  type="submit"
                  block flat
                  class="submit-button">
                  SUBSCRIBE
                </v-btn>
              </div>
            </form>
            <div class="footer">
              We're committed to your privacy. Kunvet uses the information you provide to us to contact you about our relevant content.
              You may unsubscribe from these communications at any time.
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import logo from '@/assets/blog/logo.svg';
import placeholder1 from '@/assets/blog/placeholder1.png';
import placeholder2 from '@/assets/blog/placeholder2.png';
import nightOwl from '@/assets/blog/night_owl.svg';

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
      },
    };
  },
};
</script>
