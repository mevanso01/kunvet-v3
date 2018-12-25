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
  display: inline-block;
}
.pr-10 { padding-right: 10px; }
.job-detail-container .top-container {
  width: 100%;
  height: 48px;
}
.job-detail-container .bottom-container {
  display: flex;
  height: 48px;
  background-color: #fff;
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
  margin-top: 10px;
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
.job-detail-container .long-text-cont {
  margin-bottom: 16px;
}

/*fonts_here*/

.job-detail-container .long-text-cont,
.job-detail-container .long-text-cont span,
.job-detail-container .long-text-cont p,
.job-detail-container .long-text-cont li {
  color: #616161 !important;
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
  .job-detail-container .bottom-container {
    height: 64px;
  }
  .job-detail-container .bottom-container.stick-to-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 64px;
    padding: 0 15px 16px 15px;
  }
  .job-detail-container .height-helper {
    width: 100%;
    height: 64px;
  }
  .job-detail-container .bottom-container.stick-to-bottom .gradient-bar {
    position:absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(transparent, white);
    background: -moz-linear-gradient(transparent, white); /* FF 3.6+ */
    background: -ms-linear-gradient(transparent, white); /* IE10 */
    background: -webkit-linear-gradient(transparent, white); /* Safari 5.1+, Chrome 10+ */
    background: -o-linear-gradient(transparent, white);
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
@media (max-width: 960px) {
}
/*NEW CODE BELOW*/
.mobile-show {
  display: none;
}

@media only screen and (max-width: 600px) {
  .mobile-show {
    display: block;
    padding: 0;
  }
  .mobile-hide {
    display: none !important;
  }
  .job-detail-container .long-text-cont,
  .job-detail-container .long-text-cont span,
  .job-detail-container .long-text-cont p,
  .job-detail-container .long-text-cont li {
    line-height: 1.6;
  }
  .sub-container{
    padding: 24px 24px 0 24px;
  }

  .sub-container h2{
    font-size: 22px;
  }

  .mobile-show li{
    list-style: square;
  }
}

.mobile-button-container {
  margin: 40px 0;
  height: 55px;
  width: 100%;
  position: relative;
}

.apply-button {
  box-shadow: 0 10px 12px -4px #eaeaf9;
  padding: 16px 0;
  width: 31%;
  background-color: red;
  border-radius: 4px;
  font-size: 1.1em;
  color: white;
}

.find-button {
  box-shadow: 0 10px 12px -4px #eaeaf9;
  padding: 16px 0;
  width: 53%;
  color: red;
  border-radius: 4px;
  border: 1px solid red;
  margin: 0 4px;
  font-size: 1.1em;
}

.bookmark-button {
  height: 100%;
  width: 13%;
  position: absolute;
  bottom: 0;
}
.header-icon-container {
  color: white;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.header-splash {
  background-image: linear-gradient(to right, #EA596B, #F6BE6A);
  height: 206px;
}

.header-text {
  line-height: 1.2;
  color: white;
  position: relative;
  padding: 0 24px;
  font-weight: 600;
}

</style>
<template>
  <v-container fluid style="padding-left: 0; padding-right: 0;" id="job-detail-container">

    <div class="main-cont-large job-detail-container">
      <div class="header-splash mobile-show" style="margin-top: -70px">
        <div class="header-icon-container">
          <div style="padding: 12px 0 0 24px; ">
            <img src="../assets/job_detail/whitelogo.svg" alt="" style="height: 26px; width: 128px;">
          </div>
          <div style="padding: 12px 24px 0 0;">
            <img src="../assets/job_detail/sandwich.svg" alt="" style="height: 32px; width: 40px;">
          </div>

        </div>
        <h1 class="header-text" style="top: 46%; font-size: 1.8em; padding-right: 34px; margin: 0;">
          {{ findJob.title }}
        </h1>
        <!--42%-->
        <p class="header-text" style="top: 52%; font-size: 12px;">
          Posted by {{ findJob.posted_by }}
        </p>
      </div>

      <div class="sub-container">
          <!--<router-link to="/">Back</router-link>-->
        <div class="top-container mobile-hide">
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
        <v-divider class="mobile-hide"></v-divider>

        <h2 class="post-title mobile-hide">{{ findJob.title }}</h2>

        <div class="carditem mobile-hide" style="color: #A7A7A7; margin-bottom: 10px; font-size: 11px;"><timeago :since="findJob.date"></timeago></div>
        <!--mobile job descriptions-->
        <div class="mobile-hide">
          <div class="carditem" style="color: #A7A7A7;">
            <p>
              <!--<v-icon style="color: #A7A7A7; padding-right: 5px; font-size: 18px; transform: translateY(-1px);">location_city</v-icon>-->
              <img class="job-info-icon" style="transform: translateY(2px);" :src="svgs.building"></img>
              <span style="padding-top: 2px;">
                {{ findJob.address }}<template v-if="findJob.address2"> {{ findJob.address2 }}</template>
              </span>
            </p>
            <p v-if="findJob.university" style="margin-left: 24px;">
              {{ findJob.university }}
            </p>
          </div>

          <div style="margin-top: 8px;">
            <div v-if="findJob.type2 && computedType2" class="blue-row float-left pr-10">
              <img class="job-info-icon" :src="svgs.Internship"></img>
              <span> {{ computedType2 }}</span>
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

          <div style="min-height: 42px" v-show="
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

          <div class="blue-row" style="clear: both; margin-bottom: 16px;" v-if="findJob.shift && findJob.shift.length > 0">
            <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Working hours (shifts):</p>
            <img class="job-info-icon" :src="svgs.Clock"></img>
            <span v-for="(shift, index) in findJob.shift"> {{ shift }}<span v-if="index + 1 < findJob.shift.length">,</span></span>
          </div>
          <div v-else style="width: 100%; height: 16px;"></div>
      </div>
        <div class="mobile-show" style="font-size: 16px">
            <ul>
              <li>Posted <timeago :since="findJob.date"></timeago></li>
              <li>{{ findJob.address }}<template v-if="findJob.address2"> {{ findJob.address2 }}</template></li>
              <li v-if="findJob.university">{{ findJob.university }}</li>
            </ul>
            <div>
              <p v-show="findJob.type2 && computedType2 || findJob.studentfriendly || jobType" class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Basic Overview:</p>
              <ul>
                <li v-if="findJob.type2 && computedType2"> {{ computedType2 }} </li>
                <li v-if="findJob.studentfriendly">Student Friendly</li>
                <li><span v-for="(type, index) in jobType"> {{ type }}<span v-if="index + 1 < jobType.length">,</span></span></li>
              </ul>
            </div>
            <div v-show=" (findJob.education && findJob.education !== 'None') || findJob.preferred_major || findJob.language">
              <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Preferences:</p>
              <ul>
                <li v-if="findJob.education">Degree: {{ findJob.education.replace("_", " ") }}</li>
                <li v-if="findJob.preferred_major"> Majors preferred: {{ findJob.preferred_major }} </li>
                <li v-if="findJob.language"> Additional language: {{ findJob.language }} </li>
                <li v-if="findJob.age"> Age: {{ findJob.age }} </li>
              </ul>
            </div>

            <div v-if="findJob.shift && findJob.shift.length > 0" style="margin-bottom: 16px;">
              <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Working hours (shifts):</p>
              <ul>
                <li v-for="(shift, index) in findJob.shift"> {{ shift }}<span v-if="index + 1 < findJob.shift.length">,</span></li>
              </ul>
            </div>
            <div v-else style="width: 100%; height: 16px;"></div>
            <div class="v-divider"></div>
          </div>

      </div>

      <div class="sub-container job-desc-subcontainer">
          <h2 style="margin-bottom: 8px;">Job Overview</h2>
          <div class="long-text-cont" v-html="findJob.description"></div>

          <h2 style="margin-bottom: 8px;">Experience & Requirements</h2>
          <div class="long-text-cont" v-html="findJob.experience"></div>

          <h2 style="margin-bottom: 8px;">Responsibilities</h2>
          <div class="long-text-cont" v-html="findJob.responsibilities"></div>

          <v-container v-if="findJob.images && findJob.images.length > 0" fluid grid-list-sm style="margin: 20px 0;">
            <v-layout row wrap>
              <v-flex xs4 sm3 md2 class="image-container" v-for="image in findJob.images">
                <img class="image" :src="`${serverUrl}/file/get/${image.cropped}`" alt="loading image" width="100%">
              </v-flex>
            </v-layout>
          </v-container>

          <!--mobile buttons-->

        <div class="mobile-button-container mobile-show">
          <button class="apply-button">Apply</button>
          <button class="find-button">Find Similar Jobs</button>
          <button class="bookmark-button">
            <img src="../assets/job_detail/bookmark.svg" alt=""
                 style="box-shadow: 0 10px 12px -4px #eaeaf9;
                         border-radius:4px; width: 100%; height: 96%; padding: 8px; background-color: orange;">
          </button>
        </div>
          <!--find-->

          <div class="bottom-container mobile-hide" v-bind:class="{ 'stick-to-bottom': stickToBottom }" id="bottom-container">
            <!-- <div class="gradient-bar" v-show="stickToBottom">
            </div> -->
            <v-btn :disabled="applied" v-if="uid !== findJob.user_id"
              outline class="red--text darken-1" @click="apply">
              {{ applied ? 'Applied' : 'Apply' }}
            </v-btn>
            <a class="svg-button" style="margin: 6px 8px;" @click="saveJob(findJob._id)">
              <img v-if="saved" :src="svgs.savedIcon"/>
              <img v-else :src="svgs.notSavedIcon"/>
            </a>
          </div>

          <!-- in order to retain document height when bottom container is fixed -->
          <div class="height-helper" v-show="stickToBottom"></div>
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
            <strong>Special instruction from this employer:</strong><br>
            {{ findJob.notes }}
            </p>
          </div>
          <p style="margin-bottom: 5px;">This particular employer prefers you apply through this simple form:</p>
          <a :href="formattedFormLink" target="_blank"><u>{{ formattedFormLink }}</u></a>
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
              <strong>Special instruction from this employer:</strong><br>
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
            <h3>Select files to send</h3>
            <div v-if="resumes.length > 0">
              <v-checkbox v-for="resume in resumes" class="kunvet-red"
                :label="resume.name" v-model="selectedResumes" :value="resume.filename" hide-details>
              </v-checkbox>
            </div>
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
              <p style="line-height: 30px; color: #9e9e9e;" class="center">Upload new resume or cover letter</p>
            </div>
            <br>
            <br>
          </div>
          <div v-else-if="applyState === 'CONFIRM'">
            <div v-if="findJob.notes">
              <p>
              <strong>Special instruction from this employer:</strong><br>
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
            <div v-if="selectedResumes.length > 0" class="pb-3">
              Selected files:
              <p class="small-p" v-for="file in selectedResumeNames">{{ file }}</p>
            </div>
            <div v-else class="pb-3" style="color: #f00;">
              No resume selected!
            </div>
          </div>
          <div v-else-if="applyState === 'SUCCESS'">
            <h3>What's next?</h3>
            <p>
              Look out for follow-up emails from the employer.<br>
              You can find your application’s status under <router-link to="/appliedjobs">Applied Jobs</router-link>.
            </p>
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
          <v-progress-circular indeterminate v-if="loading" class="ma-3" size="30" color="white"></v-progress-circular>
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
import { degreeStringToDb } from '@/constants/degrees';
import Config from 'config';
import ProfilePicHelper from '@/utils/GetProfilePic';
import FileClient from '@/utils/FileClient';
import queries from '@/constants/queries';
import parseUrl from 'url-parse';
import userDataProvider from '@/userDataProvider';

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
      selectedResumes: [], // file id
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
      stickToBottom: true,
    };
  },
  computed: {
    sanitizedDescription() {
      return sanitizeHtml(this.findJob.description);
    },
    selectedResumeNames() {
      if (this.selectedResumes.length > 0) {
        /* (const index = this.resumes.findIndex(resume => this.selectedResume === resume.filename);
        if (index !== -1) {
          return this.resumes[index].name;
        } */
        return this.resumes.filter(r => this.selectedResumes.indexOf(r.filename) !== -1).map(r => r.name);
      }
      return [];
      // return null;
    },
    formattedFormLink() {
      if (!this.findJob.gform_link) {
        return '';
      }
      const link = parseUrl(this.findJob.gform_link, {});
      if (!link.protocol) {
        link.set('protocol', 'http');
      }
      return link.href;
    },
    computedType2() {
      if (Array.isArray(this.findJob.type2) && this.findJob.type2.length > 0) {
        return this.findJob.type2.join(', ');
      }
      return '';
    },
  },
  methods: {
    handleScroll() {
      this.stickToBottom = this.isNotAtBottom();
    },
    isNotAtBottom() {
      const footer = document.getElementById('bottom');

      const el = document.scrollingElement || document.documentElement;
      var distanceToBottom = document.documentElement.scrollHeight - document.documentElement.offsetHeight - el.scrollTop;

      if (distanceToBottom < (footer.offsetHeight + 26)) {
        return false;
      }
      return true;
    },
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
        this._getUserData();
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
      userDataProvider.getUserData().then(data => {
        if (data.acct === 0) {
          this.$store.commit({ type: 'setAcctID', id: null }); // reset userID to prevent infinite redirect loop
          this.$router.push('/login');
        } else {
          this.uid = data.uid;
          this.userdata = data.userdata;
          this.email_verified = data.userdata.email_verified;
          this.resumes = this.userdata.resumes.concat(); // not sure if needed but just in case
          if (this.resumes.length > 0) {
            this.selectedResume = this.resumes[0].filename;
          }
        }
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
        // const index = this.resumes.findIndex(resume => this.selectedResume === resume.filename);
        /* resume: this.resumes.length > 0 ? ({
          filename: this.resumes[index].filename,
          resumeid: this.resumes[index].resumeid,
        }) : null, */
        const _resumes = this.resumes
          .map(r => ({ filename: r.filename, resumeid: r.resumeid }))
          .filter(r => this.selectedResumes.indexOf(r.filename) !== -1);
        const application = {
          user_id: this.uid,
          job_id: this.id,
          name: `${this.userdata.firstname} ${this.userdata.lastname}`,
          school: this.userdata.school,
          degree: degreeStringToDb(this.userdata.degree),
          major: this.userdata.major,
          email: this.userdata.email,
          resumes: _resumes,
          wechat_id: this.userdata.wechat_id,
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
                resumes {
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
    if (document.documentElement.offsetWidth <= 600) {
      this.stickToBottom = true;
      setTimeout(() => {
        this.stickToBottom = this.isNotAtBottom();
      }, 150);
    } else {
      this.stickToBottom = false;
    }
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    if (this.$store.state.userID) {
      this.uid = this.$store.state.userID;
      this._checkIsApplied();
      this.getSavedJobs();
    }
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
  },
};
</script>
