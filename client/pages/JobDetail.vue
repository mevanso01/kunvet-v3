<style lang="scss" scoped>
  .file-icon {
    width: 85px;
    margin: 0 15px;
    transform: translateY(15%);
  }

  .smaller-file-icon {
    height: 20px;
    width: 20px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 5%;
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

  .pr-10 {
    padding-right: 10px;
  }

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

  .job-detail-container .long-text-cont,
  .job-detail-container .long-text-cont span,
  .job-detail-container .long-text-cont p,
  .job-detail-container .long-text-cont li {
    color: #616161 !important;
  }

  .bottom-button-container {
    display: flex;
    height: 53px;
    width: 60%;
    margin: 40px 0;
  }

  .apply-button {
    width: 80%;
    min-width: 65px;
    margin-right: 4px;
  }

  .bookmark-button {
    margin-left: 4px;
    height: 100%;
    width: 13%;
    min-width: 43px;
  }

  .bookmark-button img {
    border-radius: 4px;
    height: 100%;
    padding: 8px;
    background-color: orange;
    box-shadow: 0 10px 12px -4px #eaeaf9;
    width: 100%;
  }

  .mobile-show {
    display: none;
  }

  .header-text-container {
    padding: 0 24px;
    margin: 0 auto;
    max-width: 1008px;
  }

  .job-detail-nav .v-toolbar__content {
    padding: 0;
    margin: 0;
  }

  .job-detail-padding {
    padding: 0 18%
  }

  .dialog-button {
    color: white;
    box-shadow: 0 10px 12px -4px #eaeaf9;
    height: 56px;
    font-size: 18px;
    border-radius: 2px;
    /*background-color: #EA596B !important;*/
    width: 80%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  /*resume uploader*/
  .apply-text {
    color: #EA596B;
    font-size: 48px;
    width: 80%;
    margin: 0 auto;
    padding: 40px 20px 20px 0;
    font-weight: bold;
    line-height: 1.3
  }

  .login-card {
    // margin: 150px auto !important;
    height: 100%;
    border: none !important;
    padding: 48px 24px;
  }

  @media (min-width: 961px) {
    .job-detail-container {
      margin: 0 18%;
    }
    .apply-card {
      min-width: 400px !important;
    }
  }

  @media (max-width: 960px) {
  }

  @media (min-width: 601px) {
    .job-detail-container {
      margin: 0 auto;
      padding: 0 24px 24px 24px;
      max-width: 1008px;
    }
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
    .header-splash {
      min-height: 276px;
    }
    .header-splash p {
      padding-top: 20px;
    }
    .login-card {
      padding: 48px 48px;
    }
  }

  @media (max-width: 600px) {
    .sub-container .overview-container div {
      display: block;
      float: unset;
    }
    .apply-text {
      font-size: 32px;
      margin-bottom: 16px;
    }
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
      position: absolute;
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
    .job-detail-container {
      padding: 0 24px 0 24px;
    }
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
    .sub-container {
      padding: 0;
    }
    .sub-container h2 {
      font-size: 22px;
    }
    .header-splash {
      min-height: 206px;
    }
    /*buttons*/
    .bottom-button-container {
      height: 55px;
      width: 100%;
    }
    .apply-button {
      font-size: 1.1em;
      min-width: auto;
    }
    .find-button {
      font-size: 1.1em;
      min-width: 130px;
    }
    .bookmark-button {
      min-width: auto;

    }
    .other-dialog {
      max-width: 600px !important;
      background-color: white !important;
    }
    .dialog-card {
      width: 100%;
    }
  }

  .header-text {
    line-height: 1.2;
    color: white;
    font-weight: 600;
  }

  .header-splash h1 {
    padding-top: 160px;
  }

  .header-splash p {
    padding-bottom: 20px;
  }

  /*new*/
  .job-detail-nav .v-toolbar__content {
    padding: 0;
    margin: 0;
  }

  .job-detail-padding {
    padding: 0 18%
  }

  .dialog-button {
    color: white;
    box-shadow: 0 10px 12px -4px #eaeaf9;
    height: 56px;
    font-size: 18px;
    border-radius: 2px;
    width: 80%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  /*resume uploader*/
  .existing-container {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 500px;
    margin: 0 auto;
  }

  .existing-file {
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    background-color: #eee;
    width: 100%;
    height: 70px;
  }

  .existing-file p {
    line-height: 70px;
    transform: translateX(50px);
  }

  .uploader-checkbox {
    position: absolute;
    right: 10%;
    transform: translateY(19px);
  }

  .location_link {
    text-decoration: underline;
  }
</style>
<template>
  <v-container fluid style="padding: 0" id="job-detail-container"
               class=" page-height">
    <div class="header-splash mobile-hide">
      <div class="header-text-container">
        <h1 class="header-text" style="font-size: 2.7em;">
          {{ findJob.title }}
        </h1>
        <p class="header-text" style="font-size: 12px;">
          Posted by {{ findJob.posted_by }}
        </p>
      </div>
    </div>
    <!--mobile-->
    <div class="header-splash mobile-show" style="padding: 0 24px;">
      <h1 class="header-text" style="font-size: 1.8em;">
        {{ findJob.title }}
      </h1>

      <p class="header-text" style="font-size: 12px;">
        Posted by {{ findJob.posted_by }}
      </p>


    </div>
    <div class="job-detail-container">
      <div class="sub-container">
        <div class="overview-container">
          <p class="small-p">Basic Overview</p>
          <div class="carditem" style="font-size: 15px; color: #666;">
            <img class="job-info-icon" :src="svgs.Pushpin"/>
            Posted
            <timeago :since="findJob.date"></timeago>
          </div>
          <div class="carditem blue-row">
            <p style="margin-bottom: 0">
              <img class="job-info-icon" style="transform: translateY(2px);"
                   :src="svgs.building"></img>
              <span style="padding-top: 2px;">
                <a class="location_link" @click="changeLocation()" target="_blank">
                  {{ fullAddress }}
                </a>
              </span>
            </p>
            <p v-if="findJob.university" style="margin-bottom: 0;">
              <img class="job-info-icon" :src="svgs.Book"/>
              {{ findJob.university }}
            </p>
          </div>

          <div>
            <div v-if="findJob.type2 && computedType2"
                 class="blue-row float-left pr-10">
              <img class="job-info-icon" :src="svgs.Internship"/>
              <span> {{ computedType2 }}</span>
            </div>
            <div v-if="findJob.studentfriendly"
                 class="blue-row float-left pr-10">
              <img class="job-info-icon" :src="svgs.sfSvg"/>
              <span>student friendly</span>
            </div>
            <div class="blue-row float-left pr-10">
              <img class="job-info-icon" :src="svgs.Clock"/>
              <span v-for="(type, index) in jobType"> {{ type }}<span
                v-if="index + 1 < jobType.length">,</span></span>
            </div>
            <div class="blue-row">
              <img class="job-info-icon" :src="svgs.sSvg"/>
              <span>{{ salary }} </span>
            </div>
          </div>

          <div style="min-height: 42px" v-show="
            (findJob.education && findJob.education !== 'None')
            || findJob.preferred_major || findJob.language">
            <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">
              Preferences:</p>
            <div v-show="findJob.education && findJob.education !== 'None'"
                 class="blue-row float-sm-up">
              <img class="job-info-icon" :src="svgs.degree"/>
              <span v-if="findJob.education">Degree: {{ findJob.education.replace("_", " ") }}</span>
            </div>
            <div v-show="findJob.preferred_major" class="blue-row float-sm-up">
              <img class="job-info-icon" :src="svgs.majorPreferred"/>
              <span>Majors preferred: {{ findJob.preferred_major }}</span>
            </div>
            <div v-show="findJob.language" class="blue-row">
              <img class="job-info-icon" :src="svgs.languages"/>
              <span>Additional language: {{ findJob.language }}</span>
            </div>
            <div v-show="findJob.age" class="blue-row">
              <img class="job-info-icon" :src="svgs.age"/>
              <span>Age: {{ findJob.age }}</span>
            </div>
          </div>

          <div class="blue-row" style="clear: both; margin-bottom: 16px;"
               v-if="findJob.shift && findJob.shift.length > 0">
            <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">
              Working hours (shifts):</p>
            <img class="job-info-icon" :src="svgs.Clock"/>
            <span v-for="(shift, index) in findJob.shift"> {{ shift }}<span
              v-if="index + 1 < findJob.shift.length">,</span></span>
          </div>
          <div v-else style="width: 100%; height: 16px;"></div>
        </div>

      </div>
      <div class="v-divider" style="color: #9e9e9e;"></div>
      <div class="sub-container job-desc-subcontainer"
           style="padding-top: 24px; word-wrap: break-spaces;">
        <h2 style="margin-bottom: 8px;">Job Overview</h2>
        <div class="long-text-cont" v-html="findJob.description"></div>

        <h2 style="margin-bottom: 8px;">Experience & Requirements</h2>
        <div class="long-text-cont" v-html="findJob.experience"></div>

        <h2 style="margin-bottom: 8px;">Responsibilities</h2>
        <div class="long-text-cont" v-html="findJob.responsibilities"></div>

        <v-container v-if="findJob.images && findJob.images.length > 0" fluid
                     grid-list-sm
                     style="margin: 20px 0;">
          <v-layout row wrap>
            <v-flex xs4 sm3 md2 class="image-container"
                    v-for="image in findJob.images">
              <img class="image" :src="`${serverUrl}/file/get/${image.cropped}`"
                   alt="loading image"
                   width="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <div class="bottom-button-container">
          <v-tooltip bottom :disabled="!findJob.expired">
            <template slot="activator">
              <k-btn style="padding: 0 32px;" @click="openApplyDialog"
                     :disabled="applied || findJob.expired">{{ findJob.expired ?
                'Expired': applied ?
                'Applied'
                : 'Apply' }}
              </k-btn>
            </template>
            <span>This job is not taking new
              applications
              at the
              moment</span>

          </v-tooltip>

          <v-tooltip bottom v-if="this.$store.state.acct === 0">
            <template slot="activator">
              <k-btn icon outline
                     color="#b3b3b3" class="ml-2">
                <img src="../assets/icons/Asset(36).svg" alt="">
              </k-btn>
            </template>
            <span>Please log in</span>
          </v-tooltip>
          <div v-else>
            <k-btn icon outline v-if="isSaved(findJob._id)"
                   @click="saveJob(findJob._id)" color="orange"
                   class="ml-2">
              <img src="../assets/job_detail/bookmark_full.svg" alt="">
            </k-btn>
            <k-btn v-else icon outline
                   @click="saveJob(findJob._id)"
                   color="#b3b3b3" class="ml-2">
              <img src="../assets/icons/Asset(36).svg" alt="">
            </k-btn>
          </div>
        </div>
        <!--dialog for apply job flow-->
        <v-dialog class="other-dialog" v-model="applyDialog"
                  :fullscreen="$vuetify.breakpoint.xsOnly" max-width="500">
          <v-card v-if="loginState === 'start'" flat class="dialog-card"
                  style="height: 500px; display: flex; flex-direction: column;">
            <div style="height: 40%">
              <p class="kunvet-red apply-text" style="text-align: center;">Welcome to Kunvet!</p>
              <p class="apply-text" style="font-size: 16px; text-align: center;"> Please sign up or login to continue the process.</p>
            </div>

            <div style="height: 60%; text-align: center">
              <button @click="handleSignup" class="kunvet-v-btn dialog-button"
                      style="width: 80%; position: relative;top: 42%">Sign Up
              </button>
              <button @click="handleLogin" class="loginRedButton dialog-button"
                      style=" width: 80%; position: relative;top: 46%">Log In
              </button>

            </div>
            <button class="mobile-show" style="position: relative; bottom: 0;"
                    @click="applyDialog=false">
              <i class="fa fa-times-circle"
                 style="font-size: 48px; color: lightgrey;"></i>
            </button>
          </v-card>

          <v-card flat class="dialog-card" v-else-if="loginState === 'login'"
                  color="white">
            <div class="login-card">
              <LoginComponent @toSignup="handleSignup"
                              @loggedIn="handleResume()"></LoginComponent>
              <div style="width: 50px; background-color: blue"></div>
            </div>
            <button class="mobile-show"
                    style="position: relative; bottom: 25%; left: 50%; transform: translateX(-50%)"
                    @click="applyDialog=false">
              <i class="fa fa-times-circle"
                 style="font-size: 48px; color: lightgrey;"></i>
            </button>
          </v-card>

          <v-card flat class="dialog-card" v-else-if="loginState === 'signup'">
            <SignupComponent @account="getColor" @success="handleResume(true)"
                             style="padding: 30px"></SignupComponent>
            <!--<k-btn @click="loginState='login'" :color="accountColor"-->
            <!--style="display: inline-block; position: absolute; left: 30px; transform: translate(0, -30px); width: 40%;">-->
            <!--Back to Login-->
            <!--</k-btn>-->
            <div style="text-align: center; padding-bottom: 30px;">
              Already have an account?
              <a @click="loginState='login'"
                 style="text-decoration: underline;">Log in</a>
            </div>
            <button class="mobile-show"
                    style="position: relative; bottom: -50px; left: 50%; transform: translateX(-50%)"
                    @click="applyDialog=false">
              <i class="fa fa-times-circle"
                 style="font-size: 48px; color: lightgrey;"></i>
            </button>
          </v-card>

          <v-card flat class="dialog-card" v-else-if="loginState === 'verify'">
            <CodeVerification ref="cver" @verified="handleVerified"
                              style="margin-top: 32px; margin-bottom: 32px;"></CodeVerification>
            <button class="mobile-show"
                    style="position: relative; left: 50%; transform: translateX(-50%)"
                    @click="applyDialog=false">
              <i class="fa fa-times-circle"
                 style="font-size: 48px; color: lightgrey;"></i>
            </button>
          </v-card>

          <v-card flat class="dialog-card" v-else-if="loginState==='resume'">
            <div class="existing-container" enctype="multipart/form-data"
                 novalidate>
              <div style="padding-top: 20px" v-if="this.resumes.length > 0">
                <h2>Select Existing Files or Upload More</h2>
                <p v-if="resumeExists">{{selectedResumes.length}}
                  {{selectedResumes.length | plural}}
                  selected</p>
                <div v-for="(file, index) in this.resumes"
                     :style="{'background-color' : (file.selected ? '#f6e3e3' : '#eee')}"
                     class="existing-file">
                  <img class="smaller-file-icon"
                       src="../assets/job_detail/pdf-icon.svg" alt="">
                  <p>
                    <span v-if="file.name.length < 30">{{file.name}}</span>
                    <span v-else>{{file.name | truncate}}</span>
                  </p>
                  <v-checkbox color="#ef5350" class="uploader-checkbox"
                              v-model="file.selected"></v-checkbox>
                </div>
              </div>
              <ResumeUploader :small="resumeExists" @uploaded="resumeUploaded"
                              style="width: 100%;" type="Job"></ResumeUploader>
                <ApplyBtn v-if="resumeExists && selectedResumes.length" @click="createApplication"
                      :working="loading"
                      color="#FF6969"
                      style="margin: 20px auto; color:white">Apply
                </ApplyBtn>
              <button class="mobile-show"
                      style="position: relative; bottom: 0; left: 50%; transform: translateX(-50%)"
                      @click="applyDialog=false">
                <i class="fa fa-times-circle"
                   style="font-size: 48px; color: lightgrey;"></i>
              </button>
            </div>
          </v-card>

          <v-card flat style="height: 500px;" class="dialog-card" v-else-if="loginState === 'success'">
            <v-card-title class="kunvet-red apply-text">
              Thank you! Your application has been submitted.
            </v-card-title>
            <div
              style="text-align: center; width: 100%; margin: 0 auto 24px auto;">
              <k-btn to="/jobs/search">Back to Search</k-btn>
            </div>
            <button class="mobile-show"
                    style="position: relative; left: 50%; transform: translateX(-50%)"
                    @click="applyDialog=false">
              <i class="fa fa-times-circle"
                 style="font-size: 48px; color: lightgrey;"></i>
            </button>
          </v-card>

          <v-card flat style="height: 300px;" class="dialog-card"
                  v-else-if="loginState === 'error'">
            <v-card-title style="padding-left: 150px; padding-top: 50px;">
              <h2>Oops, an error occured. </h2>
            </v-card-title>
            <v-card-text style="padding-left: 150px;">
              Please refresh or try again later<br>
              If you need any support, <a style="text-decoration: underline;" href="/contact" target="_blank">click here</a> for help!<br>
              We are more than willing to assist you!
            </v-card-text>
            <div
              style="text-align: center; width: 100%; margin: 0 auto 24px auto;">
              <k-btn to="/jobs/search">Back to Search</k-btn>
            </div>
            <button class="mobile-show"
                    style="position: relative; left: 50%; transform: translateX(-50%)"
                    @click="applyDialog=false">
              <i class="fa fa-times-circle"
                 style="font-size: 48px; color: lightgrey;"></i>
            </button>
          </v-card>

        </v-dialog>
      </div>
    </div>
    <script v-if="true || !findJob.expired" v-html="jsonld" type="application/ld+json"></script>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import BookSvg from '@/assets/job_detail/open-magazine.svg';
  import PushpinSvg from '@/assets/job_detail/pushpin.svg';
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
  import queries from '@/constants/queries';
  import userDataProvider from '@/userDataProvider';
  import MobileMenu from '@/components/MobileMenu';
  import LoginComponent from '@/components/LoginComponent';
  import SignupComponent from '@/components/SignupComponent';
  import ResumeUploader from '@/components/ResumeUploader';
  import CodeVerification from '@/components/CodeVerification';
  import ApplyBtn from '@/components/general/ApplyBtn';
  import axios from 'axios';
  import StringHelper from '@/utils/StringHelper';
  import TimeAgo from 'javascript-time-ago';
  import en from 'javascript-time-ago/locale/en';
  import DateHelper from '@/utils/DateHelper';

  export default {
    filters: {
      plural(amount) {
        return amount > 1 ? 'resumes' : 'resume';
      },
      truncate(s) {
        return `${s.substring(0, 30)} ...`;
      },
    },
    components: {
      MobileMenu,
      LoginComponent,
      SignupComponent,
      ResumeUploader,
      CodeVerification,
      ApplyBtn,
    },
    props: ['id', 'isapplied'],
    data() {
      return {
        jsonld: {},
        job_dest_url: '',
        selected: [],
        findJob: {},
        jobType: [],
        resumes: [],
        serverUrl: Config.get('serverUrl'),
        applyDialog: false,
        loginState: 'start',
        profilePic: null,
        salary: null,
        jobsAndApplications: [],
        svgs: {
          Book: BookSvg,
          Pushpin: PushpinSvg,
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
        accountColor: '#3488fc',
      };
    },
    computed: {
      getAppliedJobsString() {
        return StringHelper.pluralize('Job', this.jobsAndApplications.length);
      },
      sanitizedDescription() {
        return sanitizeHtml(this.findJob.description);
      },
      resumeExists() {
        return this.resumes.length > 0;
      },
      computedType2() {
        if (Array.isArray(this.findJob.type2) && this.findJob.type2.length > 0) {
          return this.findJob.type2.join(', ');
        }
        return '';
      },
      /* This computed function finds all resumes in this.resumes that are 'selected'
          and returns them as an array.
          */
      selectedResumes() {
        const selected = [];
        for (var i = 0; i < this.resumes.length; ++i) {
          if (this.resumes[i].selected) {
            selected.push(this.resumes[i]);
          }
        }
        return selected;
      },
      fullAddress() {
        let value = '';
        if (this.findJob) {
          value = this.findJob.address;
          if (this.findJob.address2) {
            value = `${value} ${this.findJob.address2}`;
          }
          if (this.findJob.city) {
            value = `${value}, ${this.findJob.city}`;
          }
          if (this.findJob.state) {
            value = `${value}, ${this.findJob.state}`;
          }
        }
        return value;
      },
    },
    metaInfo () {
      TimeAgo.addLocale(en);
      var timeAgo = new TimeAgo('en-US');
      // `Posted ${timeAgo.format(Date.now() - this.findjob.date)} ${this.findJob.description.substring(0, 30)} ...`
      var str = 'Posted ';
      var date = new Date(Date.now() - 50000); // some mock date
      var milliseconds = date.getTime();
      str += timeAgo.format(milliseconds);
      if (this.findJob.description) {
        str += '. ';
        str += this.findJob.title;
        str += ': ';
      }
      if (this.findJob.description) {
        var temp = this.findJob.description.replace(/<\/?[^>]+>/ig, '');
        str += temp.match(/^(\w+\s?){1,12}/ig);
      }
      str += '… See this and similar jobs on Kunvet.';
      console.log(str);
      return {
        meta: [
          { name: 'description', content: str },
        ],
      };
    },
    methods: {
      urlChange() {
        this.isapplied = true;
        // this.$router.push(`/jobs/detail/${this.id}/applied=${this.isapplied}`);
      },
      getColor(info) {
        this.accountColor = info.color;
      },
      async getPairForEachApplication({ job_id: jobId, ...application }) {
        let { data: { findJob: job } } = await this.$apollo.query({
          query: (gql`query ($jobId: MongoID) {
            findJob (filter: { _id: $jobId, active: true }){
              ${queries.FindJobRecordForJobCard}
            }
          }`),
          variables: {
            jobId,
          },
        });
        if (!job) {
          return {
            job: null,
            application: { _id: jobId, ...application },
          };
        }
        // TODO:
        if (job.is_deleted) {
          job = Object.assign({}, job);
          return {
            job: job,
            application: { _id: jobId, ...application },
          };
        }
        job = Object.assign({}, job);
        return {
          job: job,
          application: { _id: jobId, ...application },
        };
      },
      resumeUploaded(_filename, _resumename) {
        const newResume = {
          name: _resumename,
          filename: _filename,
          resumeid: null,
        };
        newResume.selected = true;
        this.resumes.push(newResume);
        this.updateAccount();
        console.log(this.resumes);
        console.log('message from JobDetail');
      },
      isSaved(id) {
        return this.saved_jobs.indexOf(id) > -1;
      },
      handleLogin() {
        this.loginState = 'login';
      },
      handleSignup() {
        this.loginState = 'signup';
      },
      handleResume(verif) {
        var verifSuccess = false;
        if (verif) {
          // if (this.$ga) {
          //   this.$ga.event('account', 'create', 'applicant', 1);
          //   console.log('ga: account/create/applicant/1');
          // }
          if (window.dataLayer) {
            window.dataLayer.push({ 'event': 'create-applicant-account' });
            console.log('gtm: create-applicant-account');
          }
          verifSuccess = verif;
        }
        // called after signup or login, and from openApplyDialog()
        this.loginState = 'resume';
        if (verifSuccess === true) {
          this.$router.push(`/jobs/detail/${this.id}`);
        }
        this._getUserData();
      },
      handleVerified() {
        this.email_verified = true;
        this.loginState = 'resume';
        if (!this.userdata) {
          this._getUserData();
        }
      },
      showCodeValidation() { // use only for very rare edge cases
        this.loginState = 'verify';
        this.$refs.cver.init();
      },
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
          // this.job_dest_url = 'https://maps.google.com/?q=';
          // this.job_dest_url += String(this.findJob.address).replace(/\s+/g, '+');
          // this.$debug(this.job_dest_url);
          this.$debug(this.findJob.address);
          this.jobType = [];
          const employmentType = [];
          for (const i in this.findJob.type) {
            if (typeof this.findJob.type[i] === 'string') {
              const type = this.findJob.type[i];
              if (type === 'fulltime') {
                this.jobType.push('full time');
                employmentType.push('FULL_TIME');
              } else if (type === 'parttime') {
                this.jobType.push('part time');
                employmentType.push('PART_TIME');
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
            this.findJob.salary_min = this.findJob.salary_min || 0;
            this.findJob.salary_max = this.findJob.salary_max || 0;
            const salMin = this.findJob.salary_min.toFixed(2);
            const salMax = this.findJob.salary_max.toFixed(2);
            let pdenom = ` ${this.findJob.pay_denomination}`;
            if (this.findJob.pay_denomination === 'per hour') {
              pdenom = '/hr';
            }
            this.salary = `${salMin.toString()} ~ ${salMax.toString()}${pdenom}`;
          } else {
            this.salary = this.findJob.pay_type;
          }
          let baseSalaryUnitText = '';
          let baseSalaryValue = 0;
          let baseSalaryMinValue = 0;
          let baseSalaryMaxValue = 0;
          if (this.findJob.pay_type === 'paid') {
            baseSalaryValue = this.findJob.salary.toFixed(2);
          } else if (this.findJob.pay_type === 'negotiable') {
            baseSalaryMinValue = this.findJob.salary_min.toFixed(2);
            baseSalaryMaxValue = this.findJob.salary_max.toFixed(2);
          }
          if (this.findJob.pay_denomination === 'per hour') {
            baseSalaryUnitText = 'HOUR';
          } else if (this.findJob.pay_denomination === 'per week') {
            baseSalaryUnitText = 'WEEK';
          } else if (this.findJob.pay_denomination === 'per month') {
            baseSalaryUnitText = 'MONTH';
          } else if (this.findJob.pay_denomination === 'per quarter') {
            baseSalaryUnitText = 'YEAR';
            if (this.findJob.pay_type === 'paid') {
              baseSalaryValue *= 4;
            } else if (this.findJob.pay_type === 'negotiable') {
              baseSalaryMinValue *= 4;
              baseSalaryMaxValue *= 4;
            }
          } else if (this.findJob.pay_denomination === 'per year') {
            baseSalaryUnitText = 'YEAR';
          } else {
            baseSalaryUnitText = '';
          }
          // var parsed = this.parseAddress(this.findJob.address);
          let description1 = this.findJob.description.replace(/<\/p>/ig, '<br>').replace(/<\/ul><p>/ig, '</ul>').replace(/<\/?\b(?!(ul|li|br)\b)\w+>/ig, '');
          let experience1 = this.findJob.experience.replace(/<\/p>/ig, '<br>').replace(/<\/ul><p>/ig, '</ul>').replace(/<\/?\b(?!(ul|li|br)\b)\w+>/ig, '');
          let responsibilities1 = this.findJob.responsibilities.replace(/<\/p>/ig, '<br>').replace(/<\/ul><p>/ig, '</ul>').replace(/<\/?\b(?!(ul|li|br)\b)\w+>/ig, '');
          if (!description1.endsWith('<br>')) {
            description1 += '<br>';
          }
          if (!experience1.endsWith('<br>')) {
            experience1 += '<br>';
          }
          if (!responsibilities1.endsWith('<br>')) {
            responsibilities1 += '<br>';
          }
          this.jsonld = {
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            'baseSalary': {
              '@type': 'MonetaryAmount',
              'currency': 'USD',
              'value': {
              },
            },
            'datePosted': this.findJob.date,
            'description': `Job Overview:<br>${description1}<br>Experience Requirements:<br>${experience1}<br>Responsibilities:<br>${responsibilities1}`,
            'employmentType': employmentType,
            'title': this.findJob.title,
            'jobLocation': {
              '@type': 'Place',
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': this.findJob.latitude,
                'longitude': this.findJob.longitude,
              },
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': this.findJob.address,
                'addressLocality': this.findJob.city || '',
                'addressRegion': this.findJob.state || '',
                'postalCode': this.findJob.zip || '',
                'addressCountry': 'US',
              },
            },
            'validThrough': this.findJob.expiry_date || DateHelper.getExpiryDate(this.findJob.date, Config.get('daysToExpire')).toISOString(),
          };
          if (this.findJob.business_id != null) {
            this.jsonld.hiringOrganization = this.findJob.posted_by;
          }
          if (this.findJob.pay_type === 'paid') {
            this.jsonld.baseSalary.value = {
              '@type': 'QuantitativeValue',
              'unitText': baseSalaryUnitText,
              'value': baseSalaryValue,
            };
          } else if (this.findJob.pay_type === 'negotiable') {
            this.jsonld.baseSalary.value = {
              '@type': 'QuantitativeValue',
              'minValue': baseSalaryMinValue,
              'maxValue': baseSalaryMaxValue,
              'unitText': baseSalaryUnitText,
            };
          } else {
            this.jsonld.baseSalary.value = {
              '@type': 'QuantitativeValue',
              'unitText': 'HOUR',
              'value': 0,
            };
          }
          if (this.findJob.category === 'business') {
            this.jsonld.hiringOrganization = {
              '@type': 'Organization',
              'name': this.findJob.posted_by,
            };
          } else if (this.findJob.category === 'individual') {
            this.jsonld.hiringOrganization = {
              '@type': 'Organization',
              'name': 'Kunvet',
            };
          }
          if (this.findJob.expired) {
            this.jsonld = null;
          }
          console.log(this.findJob);
          this.fetchProfilePic();
        }).catch((error) => {
          console.log(error);
        });
      },
      changeLocation() {
        let jobDestUrl = 'https://maps.google.com/?q=';
        jobDestUrl += String(this.fullAddress).replace(/\s+/g, '+');
        this.$debug(jobDestUrl);
        window.open(jobDestUrl, '__blank');
      },
      openApplyDialog() {
        this.applyDialog = true;
        if (this.uid) { // user is already logged in
          this.handleResume();
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
          }).then(() => {
            this.$store.commit({
              type: 'keepUserdata',
              userdata: {
                saved_jobs: this.saved_jobs,
              },
            });
          }).catch((error) => {
            this.$error(error);
          });
        } else {
          console.log('id was null everything failed');
        }
      },
      async fetchProfilePic() {
        const { business_id: businessID, user_id: userID } = this.findJob;
        this.profilePic = await ProfilePicHelper.getProfilePic(userID, businessID);
      },
      _getUserData() {
        this.$debug('RETRIEVEING USER DATA');
        userDataProvider.getUserData().then(data => {
          if (data.acct === 0) {
            this.$store.commit({ type: 'setAcctID', id: null }); // reset userID to prevent infinite redirect loop
            this.uid = 0;
          } else {
            this.uid = data.uid;
            this.userdata = data.userdata;
            this.email_verified = data.userdata.email_verified;
            this.resumes = this.userdata.resumes.concat(); // not sure if needed but just in case
            if (this.resumes.length > 0) {
              this.selectedResume = this.resumes[0].filename;
            }
            this._checkIsApplied();
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
            this.applyDialog = false;
          }
        }).catch((error) => {
          this.$error(error);
        });
      },
      createApplication() {
        // verify email if it isnt verified at this point for some reason
        console.log('Hello from CreateApplication');
        console.log(this.email_verified);
        if (!this.email_verified) {
          this.showCodeValidation();
          return;
        }

        // testing
        console.log(this.findJob.position_tags);
        console.log(this.jobsAndApplications.length);

        /* const i = 6;
        if (i < 10) {
          return;
        } */

        // validate
        if (this.uid && this.userdata && !this.loading && !this.applied) {
          console.log('creating application');
          this.loading = true;
          // const index = this.resumes.findIndex(resume => this.selectedResume === resume.filename);
          /* resume: this.resumes.length > 0 ? ({
                            filename: this.resumes[index].filename,
                            resumeid: this.resumes[index].resumeid,
                          }) : null, */
          // const _resumes = this.resumes
          //   .map(r => ({ filename: r.filename, resumeid: r.resumeid }))
          //   .filter(r => this.selectedResumes.indexOf(r.filename) !== -1);
          const _resumes = this.selectedResumes
            .map(r => ({ filename: r.filename, resumeid: r.resumeid }));
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
            // if (this.$ga) {
            //   this.$ga.event('job', 'apply', 'jobs', 1);
            //   console.log('ga: job/apply/jobs/1');
            // }
            if (window.dataLayer) {
              window.dataLayer.push({ 'event': 'apply-for-job' });
              console.log('gtm: apply-for-job');
            }
            this.loading = false;
            if (data) {
              this.loginState = 'success';
              this.applied = true;
              if (this.jobsAndApplications.length < 5) {
                this.deleteTags();
              }
              this.addTags();
            } else {
              this.$debug('no data returned when creating application');
              this.loginState = 'success';
              this.applied = true;
              // this.applydialog = false;
            }
          }).catch((error) => {
            this.loading = false;
            this.loginState = 'error';
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
      deleteTags() {
        const data = {
          email: this.userdata.email,
        };
        axios.post('/mailchimp/deleteTags', data).then(() => {
          console.log('delete Tags');
        }, (error) => {
          this.$error(error);
        }).then(() => {
          console.log('tag successfully deleted');
        });
      },
      addTags() {
        const data = {
          email: this.userdata.email,
          tags: this.findJob.position_tags,
        };
        console.log('tags in add Tags');
        console.log(this.findJob.position_tags);
        axios.post('/mailchimp/addTags', data).then(() => {
          console.log('add Tags');
        }, (error) => {
          this.$error(error);
        }).then(() => {
          console.log('tag successfully added');
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
        }).then(() => {
          this.$store.commit({
            type: 'keepUserdata',
            userdata: {
              resumes: _resumes,
            },
          });
        }).catch(this.$error);
      },
      resetData() {
        Object.assign(this.$data, this.$options.data.call(this));
      },
      parseAddress(add) {
        // Make sure the address is a string.
        if (typeof add !== 'string') return 1;
        // Trim the address.
        var address = add.slice(0, add.length - 5);
        console.log(address);
        address = address.trim();
        var returned = {};
        var comma = address.indexOf(',');
        returned.street = address.slice(0, comma);
        console.log(returned.street);
        var after = address.substring(comma + 2);
        var comma2 = after.indexOf(',');
        returned.city = after.slice(0, comma2);
        var state = after.substring(comma2 + 2);
        var space = state.lastIndexOf(' ');
        returned.state = state.slice(0, space);
        returned.zip = state.substring(space + 1);
        console.log(returned);
        return returned;
      },
    },
    activated() {
      this.resetData();
      this.getData();
      // this.getApplication();
      this._getUserData();
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
