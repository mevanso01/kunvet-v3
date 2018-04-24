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
  height: 28px;
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
    min-width: 350px !important;
  }
  .job-detail-posted-by {
    max-width: calc(99% - 204px);
  }
}
@media (min-width: 961px) {
  .job-detail-container {
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
                <img :src="profilePic" alt="">
              </v-avatar>
            </div>
      		  <div class="float-left job-detail-posted-by" style="color: #A7A7A7; margin-right: 1px;">
              <h3 style="color: #616161;" class="one-line ellipsis">{{ findJob.posted_by }}</h3>
            </div>
            <div class="float-right">
              <a class="svg-button" flat style="margin: 6px 8px;" @click="saveJob(findJob._id)">
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
            <p v-if="findJob.university" style="margin-left: 23px;">
              {{ findJob.university }}
            </p>
          </div>

          <div class="blue-row" style="margin-top: 8px;">
            <span v-if="findJob.type2" class="pr-8">
              <img class="job-info-icon" :src="svgs.Internship"></img>
              <span v-for="type in findJob.type2"> {{ type }}</span>
            </span>
            <span v-if="findJob.studentfriendly" class="pr-8">
              <img class="job-info-icon" :src="svgs.sfSvg"></img> student friendly
            </span>
            <span class="pr-8">
              <img class="job-info-icon" :src="svgs.Clock"></img>
              <span v-for="(type, index) in jobType"> {{ type }}<span v-if="index + 1 < jobType.length">,</span></span>
            </span>
            <span>
              <img class="job-info-icon" :src="svgs.sSvg"></img> {{ salary }}
            </span>
          </div>

          <div v-show="(findJob.education && findJob.education !== 'None') || findJob.preferred_major">
            <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Preferences:</p>
            <div v-show="findJob.education && findJob.education !== 'None'" class="blue-row" >
              <img class="job-info-icon" :src="svgs.degree"></img>
              <span v-if="findJob.education">Degree: {{ findJob.education.replace("_", " ") }}</span>
            </div>
            <div v-show="findJob.preferred_major" class="blue-row">
              <img class="job-info-icon" :src="svgs.majorPreferred"></img>
              <span>Majors preferred: {{ findJob.preferred_major }}</span>
            </div>
          </div>

          <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Working hours (shifts):</p>
          <div class="blue-row" style="margin-bottom: 16px;">
            <img class="job-info-icon" :src="svgs.Clock"></img>
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

    <v-dialog v-model="applydialog">
      <v-card class="no-border-radius apply-card" v-show="email_verified">
        <div style="padding: 20px;" v-if="!showSuccessMessage">
          <h3>Select resume to send</h3>
          <v-radio-group class="kunvet-red" v-if="resumes.length > 0" v-model="selectedResume" hide-details>
            <v-radio v-for="(resume, index) in resumes"
              class="kunvet-red"
              :key="index"
              :label="resume.name"
              :value="resume.filename">
            </v-radio>
          </v-radio-group>
          <p v-else>You have no resumes yet!</p>
          <p v-if="state === 'ERROR'" style="color: red; font-size: 12px; text-align: center; margin-bottom: 5px;">Error uploading resume</p>
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
          <p style="margin-bottom: 2px;">My info:</p>
          <p class="small-p">{{ userdata.firstname }} {{ userdata.lastname}}</p>
          <p class="small-p">{{ userdata.email }}</p>
          <p class="small-p">{{ userdata.school }}</p>
          <p class="small-p">{{ userdata.degree }}</p>
          <p class="small-p">{{ userdata.major }}</p>
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
import sanitizeHtml from 'sanitize-html';
import VuexLS from '@/store/persist';
import { degreeDbToString, degreeStringToDb } from '@/constants/degrees';
import Config from 'config';
import ProfilePicHelper from '@/utils/GetProfilePic';
import FileClient from '@/utils/FileClient';
import queries from '@/constants/queries';

const DefaultPic = 'https://github.com/leovinogradov/letteravatarpics/blob/master/Letter_Avatars/default_profile.jpg?raw=true';

export default {
  props: ['id'],
  data() {
    return {
      findJob: {},
      jobType: [],
      serverUrl: Config.get('serverUrl'),
      profilePic: DefaultPic,
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
      },
      resumes: [],
      selectedResume: null,
      userdatafetched: false,
      applied: false,
      saved: false,
      saved_jobs: [],
      loading: false,
      showSuccessMessage: false,
      file: null,
      fileName: null,
      state: 'INITIAL',
      client: null,
      email_verified: true,
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
            ${queries.FindJobRecord}
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
        this.fetchProfilePic();
      });
    },
    apply() {
      this.applydialog = true;
      this.state = 'INITIAL';
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
          this.saved_jobs = res.saved_jobs.concat([]);
          this.saved = false;
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
          console.error(error);
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
        // this.resumes = res.resumes;
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
        console.error(error);
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
        console.log('my application data', data);
        if (data.data.findMyApplication) {
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
        const index = this.resumes.findIndex(resume => this.selectedResume === resume.filename);
        const application = {
          user_id: this.uid,
          job_id: this.id,
          name: `${this.userdata.firstname} ${this.userdata.lastname}`,
          school: this.userdata.school,
          degree: degreeStringToDb(this.userdata.degree),
          major: this.userdata.major,
          email: this.userdata.email,
          resume: this.resumes.length > 0 ? ({
            filename: this.resumes[index].filename,
            resumeid: this.resumes[index].resumeid,
          }) : null,
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
                resume {
                  filename
                  resumeid
                }
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
            this.showSuccessMessage = true;
            this.applied = true;
          } else {
            console.error('no data returned when creating application');
            this.applydialog = false;
          }
        }).catch((error) => {
          this.loading = false;
          console.error(error);
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
    async uploadResume() {
      let curId = null;
      if (!this.file) {
        return;
      }
      this.state = 'UPLOADING';
      try {
        curId = await this.client.createFileSlot(this.file.name, this.file.type);
      } catch (e) {
        console.error(e);
        this.state = 'ERROR';
        return;
      }
      try {
        await this.client.uploadFile(curId, this.file);
      } catch (e) {
        console.error(e);
        this.state = 'ERROR';
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
      }).catch(console.error);
    },
  },
  activated() {
    this.client = new FileClient();
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
