<style>
.sub-container {
    padding: 10px 15px;
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
.post-title {
  font-size: 30px;
  line-height: 1.2;
  margin-top: 12px;
  margin-bottom: 2px;
}
.job-info-icon {
  height: 15px;
  margin-left: 1px;
  margin-right: 3px;
  transform: translateY(1px);
}
.blue-row {
  font-size: 15px;
  color: #666;
}
.small-p {
  font-size: 12px;
  color: #9e9e9e;
  margin-bottom: 0px;
}
.pr-8 {
  padding-right: 8px;
}
.top-container {
  width: 100%;
  height: 48px;
}
.bottom-container {
  display: flex;
  height: 48px;
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
.svg-button {
  width: 36px;
  height: 36px;
  display: inline-flex;
  flex: 0 1 auto;
}
.svg-button img {
  height: inherit;
  display: block;
  margin: auto;
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
    font-size: 24px;
    line-height: 1.2;
  }
}
@media (min-width: 961px) {
  .job-detail-container {
    /* -webkit-box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
      box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12); */
    border: 1px solid #e0e0e0;
  }
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
              <h3 style="color: #616161;">{{ findJob.posted_by }}</h3>
            </div>
            <div class="float-right">
              <a class="svg-button" flat style="margin: 2px 8px;" @click="saveJob(findJob._id)">
                <img v-if="saved" :src="savedIcon"/>
                <img v-else :src="notSavedIcon"/>
              </a>
            </div>
            <div class="float-right hidden-xs-only">
              <v-btn :disabled="applied"
                outline class="red--text darken-1"
                style="margin: 2px 8px;"
                @click="apply">
                {{ applied ? 'Applied' : 'Apply' }}
              </v-btn>
            </div>
          </div>
          <v-divider></v-divider>
          <h2 class="post-title">{{ findJob.title }}</h2>
          <div class="carditem" style="color: #A7A7A7; margin-bottom: 10px; font-size: 11px;"><timeago :since="findJob.date"></timeago></div>
          <div class="carditem" style="color: #A7A7A7;">
            <p class="small-p">
              <v-icon style="color: #A7A7A7; padding-right: 5px; font-size: 18px; transform: translateY(-1px);">location_city</v-icon><span style="padding-top: 2px; text-decoration: underline;">{{ findJob.address }}</span>
            </p>
          </div>
          <div class="blue-row" style="margin-top: 8px;">
            <span v-if="findJob.type2" class="pr-8">
              <img class="job-info-icon" :src="Internship"></img>
              <span v-for="type in findJob.type2"> {{ type }}</span>
            </span>
            <span v-if="findJob.studentfriendly" class="pr-8">
              <img class="job-info-icon" :src="sfSvg"></img> student friendly
            </span>
            <span class="pr-8">
              <img class="job-info-icon" :src="Clock"></img>
              <span v-for="(type, index) in jobType"> {{ type }}<span v-if="index + 1 < jobType.length">,</span></span>
            </span>
            <span>
              <img class="job-info-icon" :src="sSvg"></img> {{ salary }}
            </span>
          </div>
          <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Working hours (shifts):</p>
          <div class="blue-row" style="margin-bottom: 16px;">
            <img class="job-info-icon" :src="Clock"></img>
            <span v-for="(shift, index) in findJob.shift"> {{ shift }}<span v-if="index + 1 < findJob.shift.length">,</span></span>
          </div>
          <v-divider></v-divider>
      </div>
      <div class="sub-container">
          <h2 style="margin-bottom: 8px;">Job Overview:</h2>
          <div v-html="findJob.description"></div>

          <h2 style="margin-bottom: 8px;">Needed Experience:</h2>
          <div v-html="findJob.experience"></div>

          <h2 style="margin-bottom: 8px;">Responsibilities:</h2>
          <div v-html="findJob.responsibilities"></div>

          <div class="bottom-container">
              <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
                <img style="width: 90%;" :src="FBfull"></img>
              </v-btn>
              <v-btn outline small fab class="grey--text lighten-2 bookmark-btn">
                <img style="width: 90%;" :src="FBstroke"></img>
              </v-btn>
              <v-btn :disabled="applied" outline class="red--text darken-1" @click="apply">
                {{ applied ? 'Applied' : 'Apply' }}
              </v-btn>
              <a class="svg-button" style="margin: 6px 8px;" @click="saveJob(findJob._id)">
                <img v-if="saved" :src="savedIcon"/>
                <img v-else :src="notSavedIcon"/>
              </a>
          </div>
      </div>
    </div>

    <v-dialog v-model="applydialog">
      <v-card class="no-border-radius">
        <div style="padding: 20px;" v-if="!showSuccessMessage">
          <h3>Select resume to send</h3>
          <v-radio-group v-model="selectedResumeName" hide-details>
            <v-radio v-for="(resume, index) in resumes"
              class="kunvet-red"
              :key="index"
              :label="resume.name"
              :value="resume.name">
            </v-radio>
          </v-radio-group>
          <br>
          <p style="margin-bottom: 2px;">My info:</p>
          <p class="small-p">{{ userdata.firstname }} {{ userdata.lastname}}</p>
          <p class="small-p">{{ userdata.email }}</p>
          <p class="small-p">{{ userdata.school }}</p>
          <p class="small-p">{{ userdata.degree }}</p>
          <br>
        </div>
        <div style="padding: 20px;" v-else>
          <h3>Success!</h3>
          <p>You can track the status of your application in the <router-link to="/appliedjobs">applied jobs</router-link> page</p>
        </div>
        <div v-if="!showSuccessMessage"
          class="bottom-dialog-button"
          v-bind:class="{'disabled': loading}"
          @click="createApplication">
          Apply
        </div>
        <router-link v-else to="/">
          <div class="bottom-dialog-button">Keep browsing jobs</div>
        </router-link>
      </v-card>
    </v-dialog>

  </v-container>
</template>
<script>
import gql from 'graphql-tag';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueApollo from 'vue-apollo';
import InternshipSvg from '@/assets/job_detail/internship.svg';
import StudentFriendlySvg from '@/assets/job_detail/student_friendly.svg';
import SalarySvg from '@/assets/job_detail/salary.svg';
import ClockSvg from '@/assets/job_detail/clock.svg';
import FBfullSvg from '@/assets/job_detail/facebook_full.svg';
import FBstrokeSvg from '@/assets/job_detail/facebook_stroke.svg';
import nsiSvg from '@/assets/icons/Asset(36).svg';
import siSvg from '@/assets/icons/Asset(37).svg';
import sanitizeHtml from 'sanitize-html';
import VuexLS from '@/store/persist';

Vue.use(Vuetify);
Vue.use(VueApollo);


export default {
  props: ['id'],
  data() {
    return {
      findJob: [],
      jobType: [],
      salary: null,
      Internship: InternshipSvg,
      Clock: ClockSvg,
      sfSvg: StudentFriendlySvg,
      sSvg: SalarySvg,
      FBfull: FBfullSvg,
      FBstroke: FBstrokeSvg,
      savedIcon: siSvg,
      notSavedIcon: nsiSvg,
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
      selectedResumeName: null,
      userdatafetched: false,
      applied: false,
      saved: false,
      saved_jobs: [],
      loading: false,
      showSuccessMessage: false,
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
              address
              latitude
              longitude
              type
              studentfriendly
              type2
              shift
              age
              pay_type
              salary
              pay_denomination
              date
              education
              language
              experience
              responsibilities
              notes
          }
        }`),
        variables: {
          JobId: this.id,
        },
      }).then((data) => {
        this.findJob = data.data.findJob;
        for (const i in this.findJob.type) {
          if (typeof this.findJob.type[i] === 'string') {
            const type = this.findJob.type[i];
            if (type === 'fulltime') {
              this.jobType.push('full time');
            } else if (type === 'parttime') {
              this.jobType.push('part time');
            } else {
              this.jobType.push(type);
            }
          }
        }
        if (this.findJob.pay_type === 'paid') {
          const sal = this.findJob.salary.toFixed(2);
          let pdenom = '';
          if (this.findJob.pay_denomination === 'per hour') {
            pdenom = '/hour';
          } else if (this.findJob.pay_denomination === 'per month') {
            pdenom = '/month';
          }
          this.salary = `${sal.toString()}${pdenom}`;
        } else if (this.findJob.pay_type === 'negotiable') {
          this.salary = 'pay negotiable';
        } else {
          this.salary = this.findJob.pay_type;
        }
      });
    },
    apply() {
      this.applydialog = true;
      if (this.uid) {
        if (!this.userdatafetched) {
          this._getUserData();
        }
      } else {
        this.$router.push('/login');
      }
    },
    getSavedJobs() {
      this.$apollo.query({
        query: (gql`query ($uid: MongoID) {
          findAccount (filter: {
            _id: $uid
          }) {
            _id
            saved_jobs
          }
        }`),
        variables: {
          uid: this.uid,
        },
      }).then((data) => {
        const res = data.data.findAccount;
        if (res && res.saved_jobs) {
          const x = this.saved_jobs.concat(res.saved_jobs);
          this.saved_jobs = x;
          for (const i in this.saved_jobs) {
            if (this.saved_jobs[i] === this.id) {
              this.saved = true;
            }
          }
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    saveJob(id) {
      if (this.uid) {
        if (this.saved_jobs.indexOf(id) === -1) {
          this.saved_jobs.push(id);
        } else {
          const index = this.saved_jobs.indexOf(id);
          if (index !== -1) {
            this.saved_jobs.splice(index, 1);
          }
        }
        this.saved = !this.saved;
        this.$apollo.mutate({
          mutation: (gql`
            mutation ($uid: MongoID, $record: UpdateOneAccountInput!)
          {
            updateAccount (
              filter: { _id: $uid },
              record: $record,
            ) {
              recordId
            }
          }`),
          variables: {
            uid: this.uid,
            record: {
              saved_jobs: this.saved_jobs,
            },
          },
        }).catch((error) => {
          console.error(error);
        });
      }
    },
    _getUserData() {
      this.$apollo.query({
        query: (gql`query ($uid: MongoID) {
          findAccount (filter: {
            _id: $uid
          }) {
            _id
            firstname
            lastname
            school
            degree
            email
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
        this.userdata.email = res.email;
        // this.resumes = res.resumes;
        for (var r in res.resumes) {
          if (res.resumes[r].name) {
            this.resumes.push(res.resumes[r]);
          }
        }
        if (this.resumes.length > 0) {
          this.selectedResumeName = this.resumes[0].name;
        }
        this.userdatafetched = true;
      }).catch((error) => {
        console.error(error);
      });
    },
    _checkIsApplied() {
      this.$apollo.query({
        query: (gql`query ($uid: MongoID, $id: MongoID) {
          findApplicant (filter: {
            user_id: $uid,
            job_id: $id
          }) {
            _id
          }
        }`),
        variables: {
          uid: this.uid,
          id: this.id,
        },
      }).then((data) => {
        if (data.data.findApplicant) {
          this.applied = true;
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    createApplication() {
      // validate
      if (this.uid && this.userdata && !this.loading && !this.applied) {
        this.loading = true;
        const index = this.resumes.findIndex(resume => this.selectedResumeName === resume.name);
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
                resume {
                  filename
                  resumeid
                }
              }
            }
          }`),
          variables: { application },
        }).then((data) => {
          this.loading = false;
          if (data) {
            this.showSuccessMessage = true;
            this.applied = true;
          } else {
            console.log(data);
          }
        }).catch((error) => {
          this.loading = false;
          console.error(error);
        });
      }
    },
  },
  created() {
    this.getData();
    if (this.$store.state.userID) {
      this.uid = this.$store.state.userID;
      this._checkIsApplied();
      this.getSavedJobs();
    } else {
      VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
        if (data.userID) {
          this.uid = data.userID;
          this._checkIsApplied();
        }
      });
    }
  },
};
</script>
