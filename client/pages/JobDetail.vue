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
.job-detail-container .job-image {
    background-size: 8px 8px;
    background-position: center center;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 128px;
    cursor: pointer;
    text-align: center;
}
.job-detail-container .job-image img {
    position: relative;
    top: 0;
    width: 100%;
    max-width: 100%;
    height: 128px;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.2s ease;
}
.job-detail-container .job-image img:hover {
    transform: scale(1.0625);
}
.job-detail-container .post-title {
  font-size: 30px;
  line-height: 1.2;
  margin-top: 12px;
  margin-bottom: 2px;
}
.job-info-icon {
  height: 15px;
  width: 16px;
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
.pr-10 { padding-right: 10px; }
.job-detail-container .top-container {
  width: 100%;
  height: 48px;
}
.job-detail-container .bottom-container {
  display: flex;
  height: 48px;
}
.orange-row {
  /* color: white;
  background-color: rgba(227, 148, 0, 0.25); */
  padding: 4px;
  margin-bottom: 5px;
}
.job-detail-container .bookmark-btn .icon {
  font-size: 24px !important;
  height: 24px !important;
  width: 24px !important;
}
.job-detail-container .bookmark-btn {
  height: 36px !important;
  width: 36px !important;
}
.job-detail-container .svg-button {
  height: 36px;
  margin: 2px 8px;
  display: inline-flex;
  flex: 0 1 auto;
}
.svg-button img {
  height: inherit;
  display: block;
  margin: auto;
}
.new-resume-box {
  height: 32px;
  width: 100%;
  position: relative;
  border: 1px solid rgb(231, 231, 231);
  margin-top: 5px;
}
.new-resume-box .input-file {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.job-detail-posted-by {
  max-width: calc(99% - 100px);
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
  .apply-card {
    min-width: 300px !important;
  }
}
@media (min-width: 601px) {
  .apply-card {
    min-width: 375px !important;
  }
  .job-detail-posted-by {
    max-width: calc(99% - 204px);
  }
  .job-detail-container .float-sm-up {
    float: left;
    padding-right: 10px;
  }
}
@media (min-width: 961px) {
  .job-detail-container {
    border: 1px solid #e0e0e0;
  }
  .apply-card {
    min-width: 400px !important;
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
                <img :src="profilePic" alt="">
              </v-avatar>
            </div>
      		  <div class="float-left job-detail-posted-by" style="color: #A7A7A7; margin-right: 1px;">
              <h3 style="color: #616161;" class="one-line ellipsis">{{ findJob.posted_by }}</h3>
            </div>
            <div class="float-right">
              <a class="svg-button" flat @click="saveJob(findJob._id)">
                <img v-if="saved" :src="svgs.savedIcon"/>
                <img v-else :src="svgs.notSavedIcon"/>
              </a>
            </div>
            <div class="float-right hidden-xs-only">
              <v-btn :disabled="applied" v-if="uid !== findJob.user_id"
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
            <p>
              <!--<v-icon style="color: #A7A7A7; padding-right: 5px; font-size: 18px; transform: translateY(-1px);">location_city</v-icon>-->
              <img class="job-info-icon" style="transform: translateY(2px);" :src="svgs.building"></img>
              <span style="padding-top: 2px;">{{ findJob.address }}</span>
            </p>
            <p v-if="findJob.university" style="margin-left: 24px;">
              {{ findJob.university }}
            </p>
          </div>

          <div style="margin-top: 8px;">
            <div v-if="findJob.type2" class="blue-row float-left pr-10">
              <img class="job-info-icon" :src="svgs.Internship"></img>
              <span v-for="type in findJob.type2"> {{ type }}</span>
            </div>
            <div v-if="findJob.studentfriendly" class="blue-row float-left pr-10">
              <img class="job-info-icon" :src="svgs.sfSvg"></img>
              <span>student friendly</span>
            </div>
            <div class="blue-row float-left pr-10">
              <img class="job-info-icon" :src="svgs.Clock"></img>
              <span v-for="(type, index) in jobType"> {{ type }}<span v-if="index + 1 < jobType.length">,</span></span>
            </div>
            <div class="blue-row">
              <img class="job-info-icon" :src="svgs.sSvg"></img>
              <span>{{ salary }} </span>
            </div>
          </div>

          <div v-show="
            (findJob.education && findJob.education !== 'None')
            || findJob.preferred_major || findJob.language">
            <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Preferences:</p>
            <div v-show="findJob.education && findJob.education !== 'None'" class="blue-row float-sm-up">
              <img class="job-info-icon" :src="svgs.degree"></img>
              <span v-if="findJob.education">Degree: {{ findJob.education.replace("_", " ") }}</span>
            </div>
            <div v-show="findJob.preferred_major" class="blue-row float-sm-up">
              <img class="job-info-icon" :src="svgs.majorPreferred"></img>
              <span>Majors preferred: {{ findJob.preferred_major }}</span>
            </div>
            <div v-show="findJob.language" class="blue-row">
              <img class="job-info-icon" :src="svgs.languages"></img>
              <span>Additional language: {{ findJob.language }}</span>
            </div>
            <div v-show="findJob.age" class="blue-row">
              <img class="job-info-icon" :src="svgs.age"></img>
              <span>Age: {{ findJob.age }}</span>
            </div>
          </div>

          <div class="blue-row" style="margin-bottom: 16px;">
            <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Working hours (shifts):</p>
            <img class="job-info-icon" :src="svgs.Clock"></img>
            <span v-for="(shift, index) in findJob.shift"> {{ shift }}<span v-if="index + 1 < findJob.shift.length">,</span></span>
          </div>
          <v-divider></v-divider>
      </div>
      <div class="sub-container">
          <h2 style="margin-bottom: 8px;">Job Overview:</h2>
          <div v-html="findJob.description"></div>

          <h2 style="margin-bottom: 8px;">Experience & Requirements:</h2>
          <div v-html="findJob.experience"></div>

          <h2 style="margin-bottom: 8px;">Responsibilities:</h2>
          <div v-html="findJob.responsibilities"></div>

          <v-container v-if="findJob.images && findJob.images.length > 0" fluid grid-list-sm style="margin: 20px 0;">
            <v-layout row wrap>
              <v-flex xs4 sm3 md2 class="image-container" v-for="image in findJob.images">
                <img class="image" :src="`${serverUrl}/file/get/${image.cropped}`" alt="loading image" width="100%">
              </v-flex>
            </v-layout>
          </v-container>

          <div class="bottom-container">
              <v-btn :disabled="applied" v-if="uid !== findJob.user_id"
                outline class="red--text darken-1" @click="apply">
                {{ applied ? 'Applied' : 'Apply' }}
              </v-btn>
              <a class="svg-button" style="margin: 6px 8px;" @click="saveJob(findJob._id)">
                <img v-if="saved" :src="svgs.savedIcon"/>
                <img v-else :src="svgs.notSavedIcon"/>
              </a>
          </div>
      </div>
    </div>

    <v-dialog v-model="applydialog" max-width="500">
      <v-card v-if="findJob.apply_method === 'Through Google Forms' && findJob.gform_link"
      class="no-border-radius apply-card" v-show="email_verified">
        <div @click="applyDismissiveButton">
          <v-btn icon><v-icon>close</v-icon></v-btn>
        </div>
        <div class="px-3 pb-4">
          <div v-if="findJob.notes">
            <p>
            <strong>Special Instruction from this employer:</strong><br>
            {{ findJob.notes }}
            </p>
          </div>
          <p style="margin-bottom: 5px;">This particular employer prefers you apply through this Google Form:</p>
          <a :href="findJob.gform_link" target="_blank"><u>{{ findJob.gform_link }}</u></a>
        </div>
      </v-card>
      <v-card v-else class="no-border-radius apply-card" v-show="email_verified">
        <div @click="applyDismissiveButton">
          <v-btn icon v-if="applyState === 'CONFIRM'"><v-icon>arrow_back</v-icon></v-btn>
          <v-btn icon v-else><v-icon>close</v-icon></v-btn>
        </div>
        <div class="px-3">
          <div v-if="applyState === 'MAIN'">
            <div v-if="findJob.notes">
              <p>
              <strong>Special Instruction from this employer:</strong><br>
              {{ findJob.notes }}
              </p>
            </div>
            <!--<h3 style="margin-bottom: 4px;">Message body</h3>
            <v-text-field
              v-model="message"
              class="no-padding" style="margin-bottom: 16px;"
              name="message"
              placeholder="Add a message to this application (optional unless specified otherwise)"
              multi-line
              auto-grow
              rows=3
              hide-details
            ></v-text-field>-->
            <h3>Select resume to send</h3>
            <v-radio-group class="kunvet-red no-padding" v-if="resumes.length > 0" v-model="selectedResume" hide-details>
              <v-radio v-for="(resume, index) in resumes"
                class="kunvet-red"
                :key="index"
                :label="resume.name"
                :value="resume.filename">
              </v-radio>
            </v-radio-group>
            <p v-else>You have no resumes yet!</p>
            <div style="font-size: 12px; text-align: center; margin-bottom: 5px;">
              <span v-if="state === 'ERROR'" style="color: red;">{{ errorMessage }}</span>
              <span v-if="state === 'UPLOADING'">Uploading...</span>
            </div>
            <div class="new-resume-box">
              <input
                type="file"
                :disabled="state === 'UPLOADING'"
                @change="updateFile($event.target.files)"
                accept="application/pdf, application/msword,
                  application/vnd.openxmlformats-officedocument.wordprocessingml.document,
                  application/vnd.oasis.opendocument.text"
                class="input-file"
              >
              <p style="line-height: 30px; color: #9e9e9e;" class="center">Upload new resume</p>
            </div>
            <br>
            <br>
          </div>
          <div v-else-if="applyState === 'CONFIRM'">
            <div v-if="findJob.notes">
              <p>
              <strong>Special Instruction from this employer:</strong><br>
              {{ findJob.notes }}
              </p>
            </div>
            <h3>Review Application</h3>
            <div class="pb-2">
              My info:
              <p class="small-p">{{ userdata.firstname }} {{ userdata.lastname}}</p>
              <p class="small-p">{{ userdata.email }}</p>
              <p class="small-p">{{ userdata.wechat_id }}</p>
              <p class="small-p">{{ userdata.school }}</p>
              <p class="small-p">{{ userdata.degree }}</p>
              <p class="small-p">{{ userdata.major }}</p>
            </div>
            <!--<div v-if="message" class="pb-2">
              Message body:
              <p class="small-p">{{ message }}</p>
            </div>
            <div v-else class="pb-2">
              No message body
            </div>-->
            <div v-if="selectedResume" class="pb-3">
              Selected resume:
              <p class="small-p">{{ selectedResumeName }}</p>
            </div>
            <div v-else class="pb-3" style="color: #f00;">
              No resume selected!
            </div>
          </div>
          <div v-else-if="applyState === 'SUCCESS'">
            <h3>What's next?</h3>
            <p>Look out for follow-up emails from the employer.</p>
            <!--<p>You'll recieve an email from us if the employer accepts or declines your application.</p>-->
            <p>You can find your application’s status under <router-link to="/appliedjobs">Applied Jobs</router-link>.</p>
          </div>
          <div v-else-if="applyState === 'ERROR'">
            <h3>Oh no, an error occured!</h3>
            <p>Please try again later.</p>
          </div>
        </div>
        <div v-if="applyState !== 'SUCCESS'"
          class="bottom-dialog-button"
          v-bind:class="{'disabled': loading}"
          @click="applyAffirmativeButton">
          <v-progress-circular indeterminate v-if="loading" class="ma-3" size="30" color="primary"></v-progress-circular>
          <span v-else-if="applyState === 'CONFIRM'">Apply</span>
          <span v-else>Continue</span>
        </div>
        <router-link v-else to="/">
          <div class="bottom-dialog-button">Keep browsing jobs</div>
        </router-link>
      </v-card>
      <v-card class="no-border-radius apply-card" v-if="!email_verified">
        <v-card-text>
          You need to verify your email before you can apply to jobs!
        </v-card-text>
        <v-card-actions>
          <v-btn flat @click="applydialog = false;">
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>
<script>
import gql from 'graphql-tag';
import InternshipSvg from '@/assets/job_detail/internship.svg';
import StudentFriendlySvg from '@/assets/job_detail/student_friendly.svg';
import SalarySvg from '@/assets/job_detail/salary.svg';
import ClockSvg from '@/assets/job_detail/clock.svg';
import FBfullSvg from '@/assets/job_detail/facebook_full.svg';
import FBstrokeSvg from '@/assets/job_detail/facebook_stroke.svg';
import majorPreferredSvg from '@/assets/job_detail/major_preferred.svg';
import degreeSvg from '@/assets/job_detail/degree.svg';
import buildingSvg from '@/assets/icons/Asset(71).svg';
import nsiSvg from '@/assets/icons/Asset(36).svg';
import siSvg from '@/assets/icons/Asset(37).svg';
import Asset46 from '@/assets/icons/Asset(46).svg';
import Asset41 from '@/assets/icons/Asset(41).svg';
import sanitizeHtml from 'sanitize-html';
import VuexLS from '@/store/persist';
import { degreeDbToString, degreeStringToDb } from '@/constants/degrees';
import Config from 'config';
import ProfilePicHelper from '@/utils/GetProfilePic';
import FileClient from '@/utils/FileClient';
import queries from '@/constants/queries';

// const DefaultPic = 'https://github.com/leovinogradov/letteravatarpics/blob/master/Letter_Avatars/default_profile.jpg?raw=true';

export default {
  props: ['id'],
  data() {
    return {
      findJob: {},
      jobType: [],
      serverUrl: Config.get('serverUrl'),
      profilePic: null,
      salary: null,
      svgs: {
        Internship: InternshipSvg,
        Clock: ClockSvg,
        sfSvg: StudentFriendlySvg,
        sSvg: SalarySvg,
        FBfull: FBfullSvg,
        FBstroke: FBstrokeSvg,
        savedIcon: siSvg,
        notSavedIcon: nsiSvg,
        majorPreferred: majorPreferredSvg,
        degree: degreeSvg,
        building: buildingSvg,
        languages: Asset46,
        age: Asset41,
      },
      uid: null,
      applydialog: false,
      userdata: {
        firstname: null,
        lastname: null,
        school: null,
        degree: null,
        major: null,
        student_type: null,
        email: null,
        wechat_id: null,
      },
      resumes: [],
      selectedResume: null, // file id
      userdatafetched: false,
      applied: false,
      saved: false,
      saved_jobs: [],
      loading: false,
      applyState: 'MAIN', // MAIN, CONFIRM, SUCCESS
      file: null,
      fileName: null,
      state: 'INITIAL',
      errorMessage: '',
      client: null,
      email_verified: true,
      message: null,
    };
  },
  computed: {
    sanitizedDescription() {
      return sanitizeHtml(this.findJob.description);
    },
    selectedResumeName() {
      if (this.selectedResume) {
        const index = this.resumes.findIndex(resume => this.selectedResume === resume.filename);
        if (index !== -1) {
          return this.resumes[index].name;
        }
      }
      return null;
    },
  },
  methods: {
    getData() {
      this.$apollo.query({
        query: (gql`query ($JobId: MongoID) {
          findJob (filter: {
            _id: $JobId
          }) {
            ${queries.FindJobRecord}
          }
        }`),
        variables: {
          JobId: this.id,
        },
      }).then((data) => {
        this.findJob = data.data.findJob;

        /*
          Or better, including more details for SEO:

          Node.js Developer at Kunvet in Irvine, CA
        */
        this.$setTitle(this.findJob.title);

        this.jobType = [];
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
          let pdenom = ` ${this.findJob.pay_denomination}`;
          if (this.findJob.pay_denomination === 'per hour') {
            pdenom = '/hr';
          }
          this.salary = `${sal.toString()}${pdenom}`;
        } else if (this.findJob.pay_type === 'negotiable') {
          this.salary = 'pay negotiable';
        } else {
          this.salary = this.findJob.pay_type;
        }
        this.fetchProfilePic();
      });
    },
    apply() {
      if (this.uid) {
        this.state = 'INITIAL';
        this.applyState = 'MAIN';
        this.applydialog = true;
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
          this.saved_jobs = res.saved_jobs.concat([]);
          this.saved = false;
          for (const i in this.saved_jobs) {
            if (this.saved_jobs[i] === this.id) {
              this.saved = true;
            }
          }
        }
      }).catch((error) => {
        this.$error(error);
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
          refetchQueries: [{
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
          }],
        }).catch((error) => {
          this.$error(error);
        });
      }
    },
    async fetchProfilePic() {
      const { business_id: businessID, user_id: userID } = this.findJob;
      this.profilePic = await ProfilePicHelper.getProfilePic(userID, businessID);
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
            major
            email
            wechat_id
            resumes {
              name
              filename
              resumeid
            }
            email_verified
          }
        }`),
        variables: {
          uid: this.uid,
        },
      }).then((data) => {
        const res = data.data.findAccount;
        this.userdata.firstname = res.firstname;
        this.userdata.lastname = res.lastname;
        this.userdata.school = res.school;
        this.userdata.degree = degreeDbToString(res.degree);
        this.userdata.major = res.major;
        this.userdata.email = res.email;
        this.userdata.wechat_id = res.wechat_id;
        this.resumes = [];
        for (var r in res.resumes) {
          if (res.resumes[r].name) {
            this.resumes.push(res.resumes[r]);
          }
        }
        if (this.resumes.length > 0) {
          this.selectedResume = this.resumes[0].filename;
        }
        this.email_verified = res.email_verified;
        this.userdatafetched = true;
      }).catch((error) => {
        this.$error(error);
      });
    },
    _checkIsApplied() {
      this.$apollo.query({
        query: (gql`query ($jid: MongoID, $uid: MongoID) {
          findMyApplication (filter: {
            job_id: $jid,
            user_id: $uid
          }) {
            _id
            job_id
            user_id
            date
            expiry_date
          }
        }`),
        variables: {
          jid: this.id,
          uid: this.uid,
        },
      }).then((data) => {
        this.$debug('my application data', data);
        if (data.data.findMyApplication) {
          this.applied = true;
        }
      }).catch((error) => {
        this.$error(error);
      });
    },
    applyAffirmativeButton() {
      // When the affirmative button is clicked...
      if (this.applyState === 'MAIN') {
        this.applyState = 'CONFIRM';
      } else {
        this.createApplication();
      }
    },
    applyDismissiveButton() {
      // When the back/dismissive button is clicked...
      if (this.applyState === 'CONFIRM') {
        this.applyState = 'MAIN';
      } else {
        this.applydialog = false;
      }
    },
    createApplication() {
      // validate
      if (this.uid && this.userdata && !this.loading && !this.applied) {
        this.loading = true;
        const index = this.resumes.findIndex(resume => this.selectedResume === resume.filename);
        const application = {
          user_id: this.uid,
          job_id: this.id,
          name: `${this.userdata.firstname} ${this.userdata.lastname}`,
          school: this.userdata.school,
          degree: degreeStringToDb(this.userdata.degree),
          major: this.userdata.major,
          email: this.userdata.email,
          wechat_id: this.userdata.wechat_id,
          resume: this.resumes.length > 0 ? ({
            filename: this.resumes[index].filename,
            resumeid: this.resumes[index].resumeid,
          }) : null,
          applicant_message: this.message,
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
                major
                email
                wechat_id
                resume {
                  filename
                  resumeid
                }
                applicant_message
              }
            }
          }`),
          variables: { application },
          refetchQueries: [
            {
              query: (gql`query ($jid: MongoID, $uid: MongoID) {
                findMyApplication (filter: {
                  job_id: $jid,
                  user_id: $uid
                }) {
                  _id
                  job_id
                  user_id
                  date
                  expiry_date
                }
              }`),
              variables: {
                jid: this.id,
                uid: this.uid,
              },
            },
            {
              query: (gql`query {
                findMyApplications (filter: {}) {
                  _id
                  job_id
                  status
                  date
                  expiry_date
                }
              }`),
            },
            {
              query: (gql`query ($jid: MongoID) {
                findJob (filter: { _id: $jid }){
                  ${queries.FindJobRecordForJobCard}
                }
              }`),
              variables: {
                jid: this.id,
              },
            },
          ],
        }).then((data) => {
          this.loading = false;
          if (data) {
            this.applyState = 'SUCCESS';
            this.applied = true;
          } else {
            this.$debug('no data returned when creating application');
            this.applydialog = false;
          }
        }).catch((error) => {
          this.loading = false;
          this.applyState = 'ERROR';
          this.$error(error);
        });
      }
    },
    updateFile(files) {
      if (!files.length) {
        this.file = null;
      } else {
        this.file = files[0];
        this.fileName = files[0].name;
        this.uploadResume();
      }
    },
    uploadResume() {
      this.client = new FileClient();
      let curId = null;
      if (!this.file) {
        return;
      }
      this.state = 'UPLOADING';

      setImmediate(async () => {
        try {
          curId = await this.client.createFileSlot(this.file.name, this.file.type);
        } catch (e) {
          this.$error(e);
          this.state = 'ERROR';
          this.errorMessage = e.message;
          return;
        }
        try {
          await this.client.uploadFile(curId, this.file);
        } catch (e) {
          this.$error(e);
          this.state = 'ERROR';
          this.errorMessage = e.message;
          return;
        }
        this.resumes.push({
          name: this.file.name,
          filename: curId,
          resumeid: null,
        });
        this.selectedResume = curId;
        this.file = null;
        this.fileName = null;
        this.state = 'UPLOADED';
        this.updateAccount();
      });
    },
    updateAccount() {
      // this is weird. Not sure why it adds the property '__typename' if I dont do this
      const _resumes = this.resumes.map(({
        name, filename, resumeid,
      }) => ({ name, filename, resumeid }));

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
            resumes: _resumes,
          },
        },
        refetchQueries: [{
          query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
                _id
                firstname
                lastname
                school
                degree
                major
                email
                wechat_id
                profile_pic
                org_list
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
        }],
      }).catch(this.$error);
    },
    resetData() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },
  activated() {
    this.resetData();
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
