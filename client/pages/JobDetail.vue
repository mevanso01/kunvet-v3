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
.small-p {
  font-size: 10pt;
  color: #9e9e9e;
  margin-bottom: 3px;
}
@media (max-width: 600px) {
  .flex {
    padding: 10px 1px;
  }
  .post-title-cont {
    height: 32px;
    margin-top: 8px;
  }
    .post-title {
      font-size: 240px;
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
    height: 40px;
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
              <v-avatar size="38px" slot="activator" style="float: left; margin-right: 10px;">
                <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
              </v-avatar>
            </div>
      		  <div class="float-left" style="color: #A7A7A7; margin-right: 1px;">
              <h3>{{ findJob.posted_by }}</h3>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="post-title-cont">
            <h2 class="post-title">{{ findJob.title }}</h2>
          </div>
          <div class="post-address" style="color: #A7A7A7; padding: -10px 1px;">time position</div>
          <div class="carditem" style="color: #A7A7A7; text-decoration: underline;"><v-icon style="color: #A7A7A7; padding-right: 10px;">location_city</v-icon> {{ findJob.address }}</div>

          <div class="blue-row">
          <img style="width: 15px;" :src="Internship"></img> Blue Icons
          <img style="width: 15px;" :src="Internship"></img> Blue Icons
          <img style="width: 15px;" :src="Internship"></img> Blue Icons
          <img style="width: 15px;" :src="Internship"></img> Blue Icons</div>
          <div class="orange-row">
          <img style="width: 15px;" :src="Internship"></img> Green Icons
      </div>
          <div class="orange-row">
          <img style="width: 15px;" :src="Internship"></img> Orange Icons
          <img style="width: 15px;" :src="Internship"></img> Orange Icons
          <img style="width: 15px;" :src="Internship"></img> Orange Icons</div>
          <p class="post-intro" style="margin-top: 10px;">Categories:</p>
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
            <div style="margin: hidden;">
              <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
                <img style="width: 90%;" :src="ffull"></img>
              </v-btn>
              <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
                <img style="width: 90%;" :src="fstroke"></img>
              </v-btn>
              <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
                <v-icon class="bookmark-icon">bookmark_border</v-icon>
              </v-btn>
              <v-btn round outline class="red--text darken-1" @click="apply">Apply</v-btn>
            </div>
          </div>
      </div>
    </div>

    <v-dialog v-model="applydialog">
      <v-card style="padding: 20px;">
        <h3>Select resume to send</h3>
        <v-select style="padding-top: 0;"
          v-bind:items="resumenames"
          v-model="selectedResume"
          single-line
          hide-details
        >
        </v-select>
        <br>
        <p style="margin-bottom: 8px;">My info:</p>
        <p class="small-p">{{ userdata.firstname }} {{ userdata.lastname}}</p>
        <p class="small-p">{{ userdata.display_email }}</p>
        <p class="small-p">{{ userdata.school }}</p>
        <p class="small-p">{{ userdata.degree }}</p>
        <br>
        <v-card-actions style="padding-bottom: 0;">
          <v-btn flat style="margin: auto;" class="kunvet-red-bg white--text" @click="createApplication">Apply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>
<script>
import gql from 'graphql-tag';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueApollo from 'vue-apollo';
import InternshipSvg from '@/assets/jobdetail/internship.svg';
import ffullSvg from '@/assets/jobdetail/facebook_full.svg';
import fstrokeSvg from '@/assets/jobdetail/facebook_stroke.svg';
import sanitizeHtml from 'sanitize-html';
import VuexLS from '@/store/persist';

Vue.use(Vuetify);
Vue.use(VueApollo);


export default {
  props: ['id'],
  data() {
    return {
      // id: this.$route.params.id,
      findJob: '',
      Internship: InternshipSvg,
      ffull: ffullSvg,
      fstroke: fstrokeSvg,
      uid: null,
      applydialog: false,
      userdata: {
        firstname: null,
        lastname: null,
        school: null,
        degree: null,
        display_email: null,
      },
      resumes: [],
      resumenames: [],
      selectedResume: null,
      userdatafetched: false,
    };
  },
  computed: {
    sanitizedDescription() {
      return sanitizeHtml(this.findJob.description);
    },
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
        console.log(this.findJob);
      });
    },
    apply() {
      this.applydialog = true;
      if (!this.userdatafetched) {
        this._getUserData();
      }
    },
    _getUserData() {
      this.$apollo.query({
        query: (gql`query ($uid: MongoID) {
          findAccount (filter: {
            _id: $uid
          }) {
            firstname
            lastname
            school
            degree
            display_email
            resumes {
              name
              filename
              resumeid
            }
          }
        }`),
        variables: {
          uid: this.uid,
        },
      }).then((data) => {
        const res = data.data.findAccount;
        console.log(res);
        this.userdata.firstname = res.firstname;
        this.userdata.lastname = res.lastname;
        this.userdata.school = res.school;
        this.userdata.degree = res.degree;
        this.userdata.display_email = res.display_email;
        this.resumes = res.resumes;
        for (var r in res.resumes) {
          if (res.resumes[r].name) {
            this.resumenames.push(res.resumes[r].name);
          }
        }
        if (this.resumenames.length > 0) {
          this.selectedResume = this.resumenames[0];
        }
        console.log(this.resumenames);
        this.userdatafetched = true;
      }).catch((error) => {
        console.error(error);
      });
    },
    createApplication() {
      // validate
      if (this.uid && this.userdata) {
        const index = this.resumenames.indexOf(this.selectedResume);
        const application = {
          user_id: this.uid,
          job_id: this.id,
          name: `${this.userdata.firstname} ${this.userdata.lastname}`,
          school: this.userdata.school,
          degree: this.userdata.degree,
          email: this.userdata.display_email,
          resume: {
            filename: this.resumes[index].filename,
            resumeid: this.resumes[index].resumeid,
          },
        };
        this.$apollo.mutate({
          mutation: (gql`mutation ($application: CreateOneApplicantInput!) {
            createApplication (record: $application) {
              recordId
              record {
                user_id
                job_id
                school
                degree
                email
              }
            }
          }`),
          variables: { application },
        }).then((data) => {
          console.log(data);
        }).catch((error) => {
          console.error(error);
        });
      }
    },
  },
  created() {
    this.getData();
    if (this.$store.state.userID) {
      this.uid = this.$store.state.userID;
    } else {
      VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
        if (data.userID) {
          this.uid = data.userID;
        }
      });
    }
  },
};
</script>
