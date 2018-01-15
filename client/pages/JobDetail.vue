<style>
  .sub-container {
    padding: 10px 15px;
  }
  #job-company-logo img {
    border-radius: 50%;
  }
  #job-star {
    font-size: 16pt;
    padding: 0 0 0 8px;
    float: right;
  }
  .job-star-icon {
    color: #e0e0e0;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .job-star-icon-starred {
    color: #ef5350;
  }
  .job-time,
  .job-address,
  .job-desc {
    font-size: 9pt;
    color: #9e9e9e;
  }
  #job-shifts .general-tag {
    display: none;
  }
  #job-shifts svg {
    width: 100%;
  }
  #job-shifts svg text {
    fill: #fff;
    opacity: 0;
  }
  #job-shift-morning {
    fill: #29b6f6;
    opacity: 0.0625;
  }
  #job-shift-noon {
    fill: #fbc02d;
    opacity: 0.0625;
  }
  #job-shift-afternoon {
    fill: #f57c00;
    opacity: 0.0625;
  }
  #job-shift-evening {
    fill: #0d47a1;
    opacity: 0.0625;
  }
  #job-shift-midnight {
    fill: #1a237e;
    opacity: 0.0625;
  }
  #job-shift-moon {
    fill: #ffeb3b;
    opacity: 0;
  }
  #job-shift-curve {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 2px;
    opacity: 0.2;
  }
  #job-threes {
    position: relative;
    height: 256px;
  }
  #job-education,
  #job-age,
  #job-language {
    position: absolute;
    width: calc(100% / 3);
    height: calc(100% - 96px);
    padding: 16px;
    box-sizing: border-box;
    text-align: center;
  }
  #job-education i,
  #job-age i,
  #job-language i {
    font-size: 48pt;
  }
  #job-education {
    left: 0;
  }
  #job-age {
    left: calc(100% / 3);
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
  }
  #job-language {
    left: calc(100% / 3 * 2);
  }
  #job-images {
    padding: 0;
  }
  .job-image {
    background-size: 8px 8px;
    background-position: center center;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 128px;
    cursor: pointer;
    text-align: center;
}
.job-image img {
    position: relative;
    top: 0;
    width: 100%;
    max-width: 100%;
    height: 128px;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.2s ease;
}
.job-image img:hover {
    transform: scale(1.0625);
}
.post-title-cont {
  margin-top: 16px;
  height: 48px;
  width: auto;
}
.post-title {
  font-size: 30px;
  line-height: 1.2;
  float: left;
  width: 100%;
  margin-bottom: 0;
  position: absolute;
}
.top-container {
  margin-bottom: 8px;
}
@media (max-width: 600px) {
    .post-title-cont {
      height: 32px;
      margin-top: 8px;
    }
    .post-title {
      font-size: 24px;
      line-height: 1.2;
    }
    #job-shifts {
        padding: 16px 16px;
        background-color: #fafafa;
    }
    #job-shifts svg {
        display: none;
    }
    #job-shifts .general-tag {
        display: inline;
    }
    #job-threes {
        height: 192px;
    }
    #job-education,
    #job-age,
    #job-language {
        height: calc(100% - 32px);
        font-size: 9pt;
    }
  }
  @media (min-width: 961px) {
    .job-detail-container {
      /* -webkit-box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
      box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12); */
      border: 1px solid #e0e0e0;
    }
  }
  .top-container {
    width: 100%;
    height: 48px;
  }
  .bottom-container {
    display: flex;
    height: 48px;
  }
  .blue-row {
    /* color: white;
    background-color: rgba(0, 152, 227, 0.25); */
    padding: 4px;
    margin-bottom: 5px;
  }
  .orange-row {
    /* color: white;
    background-color: rgba(227, 148, 0, 0.25); */
    padding: 4px;
    margin-bottom: 5px;
  }
  .bookmark-btn .icon {
    font-size: 24px !important;
    height: 24px !important;
    width: 24px !important;
  }
  .bookmark-btn {
    height: 36px !important;
    width: 36px !important;
  }
</style>
<template>
  <v-container fluid style="padding-left: 0; padding-right: 0;">
    <div class="main-cont-large job-detail-container">
      <div class="sub-container">
          <!--<router-link to="/">Back</router-link>-->
          <div class="top-container">
            <div class="float-left">
              <p style="line-height: 48px; color: #666">{{ findJob.posted_by }}</p>
            </div>
            <div class="float-right">
              <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
                <v-icon class="bookmark-icon">bookmark_border</v-icon>
              </v-btn>
              <v-btn round outline class="red--text darken-1">Apply</v-btn>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="post-title-cont">
            <h2 class="post-title">{{ findJob.title }}</h2>
          </div>
          <p class="post-address">{{ findJob.address }}</p>
          <div class="blue-row">Blue Icons</div>
          <div class="orange-row">Orange Icons</div>
          <p class="post-intro" style="margin-top: 10px;">Catagories:</p>
      </div>
      <!-- <v-divider></v-divider> -->
      <div class="general-stripe">
          <div id="job-shifts" class="general-stripe-cont">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 64">
                        <rect id="job-shift-morning" x="0" width="192" height="64" style="opacity: 1;"></rect>
                        <text x="96" y="48" text-anchor="middle" style="opacity: 1;">Morning</text>
                        <rect id="job-shift-noon" x="192" width="192" height="64" style="opacity: 1;"></rect>
                        <text x="288" y="48" text-anchor="middle" style="opacity: 1;">Noon</text>
                        <rect id="job-shift-afternoon" x="384" width="192" height="64" style="opacity: 1;"></rect>
                        <text x="480" y="48" text-anchor="middle" style="opacity: 1;">Afternoon</text>
                        <rect id="job-shift-evening" x="576" width="192" height="64" style="opacity: 1;"></rect>
                        <text x="672" y="48" text-anchor="middle" style="opacity: 1;">Evening</text>
                        <rect id="job-shift-midnight" x="768" width="192" height="64"></rect>
                        <text x="864" y="48" text-anchor="middle">Mid-night</text>
                        <circle id="job-shift-moon" cx="944" cy="16" r="8"></circle>
                    <path id="job-shift-curve" d="M0,32A1588.55,1588.55,0,0,1,288,8c105.5.84,169.85,11.9,288,24,90.91,9.31,222,20.09,384,24"></path>
                </svg>
                <span class="general-tag" name="job-shift">Morning</span>
                <span class="general-tag" name="job-shift">Noon</span>
                <span class="general-tag" name="job-shift">Afternoon</span>
                <span class="general-tag" name="job-shift">Evening</span>
          </div>
      </div>
      <div class="sub-container">
          <h2>Description</h2>
          <div v-html="findJob.description"></div>
          <h2>Requirements</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.</p>
          <div class="bottom-container">
            <div style="margin: auto;">
              <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
                <v-icon class="bookmark-icon"></v-icon>
              </v-btn>
              <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
                <v-icon class="bookmark-icon"></v-icon>
              </v-btn>
              <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
                <v-icon class="bookmark-icon">bookmark_border</v-icon>
              </v-btn>
              <v-btn round outline class="red--text darken-1">Apply</v-btn>
            </div>
          </div>
      </div>
    </div>

  </v-container>
</template>
<script>
import gql from 'graphql-tag';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueApollo from 'vue-apollo';

Vue.use(Vuetify);
Vue.use(VueApollo);


export default {
  created() {
    this.getData();
  },
  props: ['id'],
  /* apollo: {
    findJob: {

    },
  }, */
  data() {
    return {
      // id: this.$route.params.id,
      findJob: '',
    };
  },
  methods: {
    getData() {
      this.$apollo.query({
        query: (gql`query ($JobId: MongoID) {
          findJob (filter: {
            _id: $JobId
          }) {
              _id
              posted_by
              title
              description
              type
              address
          }
        }`),
        variables: {
          JobId: this.id,
        },
      }).then((data) => {
        this.findJob = data.data.findJob;
      });
    },
  },
};
</script>
