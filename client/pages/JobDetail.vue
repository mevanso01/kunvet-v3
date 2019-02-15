<style lang="scss">
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
  .header-splash {
    background-image: linear-gradient(to right, #EA596B, #F6BE6A);
    position: relative;
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

  /*.find-button {*/
    /*padding: 16px 0;*/
    /*line-height: 100%;*/
    /*min-width: 135px;*/
    /*width: 47%;*/
    /*color: red;*/
    /*border-radius: 4px;*/
    /*border: 1px solid red;*/
    /*margin: 0 4px;*/
    /*font-size: 1.2em;*/
  /*}*/

  .bookmark-button {
    margin-left: 4px;
    height: 100%;
    width: 13%;
    min-width: 43px;
  }

  .bookmark-button img {
    border-radius:4px;
    height: 100%;
    padding: 8px;
    background-color: orange;
    box-shadow: 0 10px 12px -4px #eaeaf9;
    width: 100%;
  }

  .mobile-show {
    display: none;
  }
  /*desktop version*/
  .dialog-card {
    width: 500px;
  }

  .header-icon-container {
    color: white;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .header-text {
    line-height: 1.2;
    color: white;
    position: absolute;
    font-weight: 600;
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
    /*background-color: #EA596B !important;*/
    width: 80%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .v-dialog--active {
    background-color: white;
  }

  /*resume uploader*/
  .existing-container {
    width: 90%;
    height: 500px;
    margin: 0 auto;
  }
  .existing-file {
    margin-bottom: 20px;
    display: flex;
    justify-content: start;
    background-color: #eee;
    width: 99%;
    height: 70px;
  }
  .existing-file p {
    line-height: 70px;
    transform: translateX(50px);
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
      margin: 0 18%;
      padding-top: 24px;
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
      height: 276px;
    }
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
    .job-detail-container{
      padding: 24px 24px 0 24px;
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
    .sub-container{
      padding: 0;
    }

    .sub-container h2{
      font-size: 22px;
    }

    .mobile-show li{
      list-style: square;
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
    }
    .dialog-card {
      width: 100%;
    }
    .login-card {
      margin: 150px auto !important;
    }
  }

  .header-icon-container {
    color: white;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .header-text {
    line-height: 1.2;
    color: white;
    position: absolute;
    font-weight: 600;
  }
  /*new*/
  .job-detail-nav .v-toolbar__content{
    padding: 0;
    margin: 0;
  }

  .job-detail-padding{
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
  .v-dialog--active {
    background-color: white;
  }

  /*resume uploader*/

  .existing-container{
    width: 90%;
    height: 500px;
    margin: 0 auto;
  }
  .existing-file{
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    background-color: #eee;
    width: 99%;
    height: 70px;
  }
  .existing-file p{
    line-height: 70px;
    transform: translateX(50px);
  }
  .uploader-checkbox{
    position: absolute;
    right: 10%;
    transform: translateY(19px);
  }
</style>
<template>
  <v-container fluid style="padding: 0" id="job-detail-container">
    <div class="header-splash job-detail-padding mobile-hide" >
      <h1 class="header-text" style="top: 44%; font-size: 2.7em; margin: 0; min-height: 60px">
        {{ findJob.title }}
      </h1>
      <p class="header-text" style="bottom: 5%; padding: 0; font-size: 12px;">
        Posted by {{ findJob.posted_by }}
      </p>
    </div>
    <!--mobile-->
    <div class="header-splash mobile-show">
      <!--<div class="header-icon-container">-->
      <!--<div style="padding: 12px 0 0 24px; ">-->
      <!--<a href="/search">-->
      <!--<img src="../assets/job_detail/whitelogo.svg" style="height: 26px; width: 128px;">-->
      <!--</a>-->
      <!--</div>-->
      <!--<div style="padding: 12px 24px 0 0;">-->
      <!--<img src="../assets/job_detail/sandwich.svg" style="height: 32px; width: 40px;">-->
      <!--</div>-->
      <!--</div>-->


      <h1 class="header-text" style="top: 40%; font-size: 1.8em; padding: 0 24px">
        {{ findJob.title }}
      </h1>


      <p class="header-text" style="bottom: 4%; font-size: 12px; padding: 0 24px">
        Posted by {{ findJob.posted_by }}
      </p>
    </div>
    <div class="job-detail-container">
      <div class="sub-container">
        <!--<router-link to="/">Back</router-link>-->
        <!--<div class="top-container mobile-hide">-->
        <!--<div class="float-left">-->
        <!--<v-avatar size="38px" slot="activator" style="float: left; margin-right: 10px;">-->
        <!--<img :src="profilePic" alt="">-->
        <!--</v-avatar>-->
        <!--</div>-->
        <!--<div class="float-left job-detail-posted-by" style="color: #A7A7A7; margin-right: 1px;">-->
        <!--<h3 style="color: #616161;" class="one-line ellipsis">{{ findJob.posted_by }}</h3>-->
        <!--</div>-->
        <!--<div class="float-right">-->
        <!--<a class="svg-button" flat @click="saveJob(findJob._id)">-->
        <!--<img v-if="saved" :src="svgs.savedIcon"/>-->
        <!--<img v-else :src="svgs.notSavedIcon"/>-->
        <!--</a>-->
        <!--</div>-->
        <!--<div class="float-right hidden-xs-only">-->
        <!--<v-btn :disabled="applied" v-if="uid !== findJob.user_id"-->
        <!--outline class="red&#45;&#45;text darken-1"-->
        <!--style="margin: 2px 8px;"-->
        <!--@click="apply">-->
        <!--{{ applied ? 'Applied' : 'Apply' }}-->
        <!--</v-btn>-->
        <!--</div>-->
        <!--</div>-->

        <!--<h2 class="post-title mobile-hide">{{ findJob.title }}</h2>-->


        <!--mobile job descriptions-->
        <div class="mobile-hide">
          <div class="carditem mobile-hide " style="">Posted <timeago :since="findJob.date"></timeago></div>
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
              <img class="job-info-icon" :src="svgs.Internship"/>
              <span> {{ computedType2 }}</span>
            </div>
            <div v-if="findJob.studentfriendly" class="blue-row float-left pr-10">
              <img class="job-info-icon" :src="svgs.sfSvg"/>
              <span>student friendly</span>
            </div>
            <div class="blue-row float-left pr-10">
              <img class="job-info-icon" :src="svgs.Clock"/>
              <span v-for="(type, index) in jobType"> {{ type }}<span v-if="index + 1 < jobType.length">,</span></span>
            </div>
            <div class="blue-row">
              <img class="job-info-icon" :src="svgs.sSvg"/>
              <span>{{ salary }} </span>
            </div>
          </div>

          <div style="min-height: 42px" v-show="
            (findJob.education && findJob.education !== 'None')
            || findJob.preferred_major || findJob.language">
            <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Preferences:</p>
            <div v-show="findJob.education && findJob.education !== 'None'" class="blue-row float-sm-up">
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

          <div class="blue-row" style="clear: both; margin-bottom: 16px;" v-if="findJob.shift && findJob.shift.length > 0">
            <p class="small-p" style="margin-bottom: 2px; margin-top: 5px;">Working hours (shifts):</p>
            <img class="job-info-icon" :src="svgs.Clock"/>
            <span v-for="(shift, index) in findJob.shift"> {{ shift }}<span v-if="index + 1 < findJob.shift.length">,</span></span>
          </div>
          <div v-else style="width: 100%; height: 16px;"></div>
        </div>

        <div class="mobile-show" style="font-size: 1.1em">
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

        </div>

      </div>
      <div class="v-divider"></div>
      <div class="sub-container job-desc-subcontainer" style="padding-top: 24px; word-wrap: break-spaces;">
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



        <div class="bottom-button-container">
          <k-btn style="padding: 0 32px;" @click="openApplyDialog" :disabled="applied">{{ applied ? 'Applied' : 'Apply' }}</k-btn>
          <k-btn icon outline v-if="isSaved(findJob._id)" @click="saveJob(findJob._id)" color="orange" class="ml-2">
            <img src="../assets/job_detail/bookmark_full.svg" alt="">
          </k-btn>
          <k-btn v-else icon outline @click="saveJob(findJob._id)" color="#b3b3b3" class="ml-2">
            <img src="../assets/icons/Asset(36).svg" alt="">
          </k-btn>
        </div>

        <!-- in order to retain document height when bottom container is fixed -->
        <div class="height-helper" v-show="stickToBottom"></div>
      </div>

    </div>
    <!--<v-dialog v-model="applydialog" max-width="500">-->
      <!--<v-card v-if="findJob.apply_method === 'Through Google Forms' && findJob.gform_link"-->
              <!--class="no-border-radius apply-card" v-show="email_verified">-->
        <!--<div @click="applyDismissiveButton">-->
          <!--<v-btn icon><v-icon>close</v-icon></v-btn>-->
        <!--</div>-->
        <!--<div class="px-3 pb-4">-->
          <!--<div v-if="findJob.notes">-->
            <!--<p>-->
              <!--<strong>Special instruction from this employer:</strong><br>-->
              <!--{{ findJob.notes }}-->
            <!--</p>-->
          <!--</div>-->
          <!--<p style="margin-bottom: 5px;">This particular employer prefers you apply through this simple form:</p>-->
          <!--<a :href="formattedFormLink" target="_blank"><u>{{ formattedFormLink }}</u></a>-->
        <!--</div>-->
      <!--</v-card>-->
      <!--<v-card v-else class="no-border-radius apply-card" v-show="email_verified">-->
        <!--<div @click="applyDismissiveButton">-->
          <!--<v-btn icon v-if="applyState === 'CONFIRM'"><v-icon>arrow_back</v-icon></v-btn>-->
          <!--<v-btn icon v-else><v-icon>close</v-icon></v-btn>-->
        <!--</div>-->
        <!--<div class="px-3">-->
          <!--<div v-if="applyState === 'MAIN'">-->
            <!--<div v-if="findJob.notes">-->
              <!--<p>-->
                <!--<strong>Special instruction from this employer:</strong><br>-->
                <!--{{ findJob.notes }}-->
              <!--</p>-->
            <!--</div>-->
            <!--<h3>Select files to send</h3>-->
            <!--<div v-if="resumes.length > 0">-->
              <!--<v-checkbox v-for="resume in resumes" class="kunvet-red"-->
                          <!--:label="resume.name" v-model="selectedResumes" :value="resume.filename" hide-details>-->
              <!--</v-checkbox>-->
            <!--</div>-->
            <!--<p v-else>You have no resumes yet!</p>-->
            <!--<div style="font-size: 12px; text-align: center; margin-bottom: 5px;">-->
              <!--<span v-if="state === 'ERROR'" style="color: red;">{{ errorMessage }}</span>-->
              <!--<span v-if="state === 'UPLOADING'">Uploading...</span>-->
            <!--</div>-->
            <!--<div class="new-resume-box">-->
              <!--<input-->
                      <!--type="file"-->
                      <!--:disabled="state === 'UPLOADING'"-->
                      <!--@change="updateFile($event.target.files)"-->
                      <!--accept="application/pdf, application/msword,-->
                  <!--application/vnd.openxmlformats-officedocument.wordprocessingml.document,-->
                  <!--application/vnd.oasis.opendocument.text"-->
                      <!--class="input-file"-->
              <!--&gt;-->
              <!--<p style="line-height: 30px; color: #9e9e9e;" class="center">Upload new resume or cover letter</p>-->
            <!--</div>-->
            <!--<br>-->
            <!--<br>-->
          <!--</div>-->
          <!--<div v-else-if="applyState === 'CONFIRM'">-->
            <!--<div v-if="findJob.notes">-->
              <!--<p>-->
                <!--<strong>Special instruction from this employer:</strong><br>-->
                <!--{{ findJob.notes }}-->
              <!--</p>-->
            <!--</div>-->
            <!--<h3>Review Application</h3>-->
            <!--<div class="pb-2">-->
              <!--My info:-->
              <!--<p class="small-p">{{ userdata.firstname }} {{ userdata.lastname}}</p>-->
              <!--<p class="small-p">{{ userdata.email }}</p>-->
              <!--<p class="small-p">{{ userdata.wechat_id }}</p>-->
              <!--<p class="small-p">{{ userdata.school }}</p>-->
              <!--<p class="small-p">{{ userdata.degree }}</p>-->
              <!--<p class="small-p">{{ userdata.major }}</p>-->
            <!--</div>-->
            <!--&lt;!&ndash;<div v-if="message" class="pb-2">-->
              <!--Message body:-->
              <!--<p class="small-p">{{ message }}</p>-->
            <!--</div>-->
            <!--<div v-else class="pb-2">-->
              <!--No message body-->
            <!--</div>&ndash;&gt;-->
            <!--<div v-if="selectedResumes.length > 0" class="pb-3">-->
              <!--Selected files:-->
              <!--<p class="small-p" v-for="file in selectedResumeNames">{{ file }}</p>-->
            <!--</div>-->
            <!--<div v-else class="pb-3" style="color: #f00;">-->
              <!--No resume selected!-->
            <!--</div>-->
          <!--</div>-->
          <!--<div v-else-if="applyState === 'SUCCESS'">-->
            <!--<h3>What's next?</h3>-->
            <!--<p>-->
              <!--Look out for follow-up emails from the employer.<br>-->
              <!--You can find your application’s status under <router-link to="/appliedjobs">Applied Jobs</router-link>.-->
            <!--</p>-->
          <!--</div>-->
          <!--<div v-else-if="applyState === 'ERROR'">-->
            <!--<h3>Oh no, an error occured!</h3>-->
            <!--<p>Please try again later.</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div v-if="applyState !== 'SUCCESS'"-->
             <!--class="bottom-dialog-button"-->
             <!--v-bind:class="{'disabled': loading}"-->
             <!--@click="applyAffirmativeButton">-->
          <!--<v-progress-circular indeterminate v-if="loading" class="ma-3" size="30" color="white"></v-progress-circular>-->
          <!--<span v-else-if="applyState === 'CONFIRM'">Apply</span>-->
          <!--<span v-else>Continue</span>-->
        <!--</div>-->
        <!--<router-link v-else to="/">-->
          <!--<div class="bottom-dialog-button">Keep browsing jobs</div>-->
        <!--</router-link>-->
      <!--</v-card>-->
      <!--<v-card class="no-border-radius apply-card" v-if="!email_verified">-->
        <!--<v-card-text>-->
          <!--You need to verify your email before you can apply to jobs!-->
        <!--</v-card-text>-->
        <!--<v-card-actions>-->
          <!--<v-btn flat @click="applydialog = false;">-->
            <!--Okay-->
          <!--</v-btn>-->
        <!--</v-card-actions>-->
      <!--</v-card>-->
    <!--</v-dialog>-->


    <v-dialog class="other-dialog" color="white" style="background-color: white;" v-model="otherdialog"
              :fullscreen="$vuetify.breakpoint.xsOnly" max-width="500">
      <v-card v-if="loginState === 'start'" class="dialog-card" style="height: 500px; display: flex; flex-direction: column;">
        <div style="height: 40%">
          <p style="color: #EA596B; font-size: 48px; width: 80%; margin: 0 auto; padding: 40px 20px 20px 0; font-weight: bold; line-height: 1.3">Welcome to Kunvet!</p>
          <!--<p style="font-size: 14px; width: 80%; margin: 0 auto; padding-right: 20px;">Lorem Ipsum</p>-->
        </div>

        <div style="height: 60%; text-align: center">
          <button @click="handleSignup" class="kunvet-v-btn dialog-button" style="width: 80%; position: relative;top: 42%">Sign Up</button>
          <button @click="handleLogin" class="loginRedButton dialog-button" style=" width: 80%; position: relative;top: 46%">Log In</button>

        </div>
        <button class="mobile-show" style="position: relative; bottom: 15%;" @click="otherdialog=false" >
          <i class="fa fa-times-circle" style="font-size: 48px; color: lightgrey;"></i>
        </button>
      </v-card>

      <v-card flat class="dialog-card" v-else-if="loginState === 'login'">
        <div class="main-cont-small login-card" style="height: 100%; border: none !important; margin: 48px 0 !important;">
          <LoginComponent @toSignup="handleSignup" @loggedIn="handleResume"></LoginComponent>

        </div>
        <button class="mobile-show" style="position: relative; bottom: 25%; left: 50%; transform: translateX(-50%)" @click="otherdialog=false" >
          <i class="fa fa-times-circle" style="font-size: 48px; color: lightgrey;"></i>
        </button>
      </v-card>

      <v-card flat class="dialog-card" v-else-if="loginState === 'signup'">
        <SignupComponent @success="handleResume"></SignupComponent>
        <button class="mobile-show" style="position: relative; left: 50%; transform: translateX(-50%)" @click="otherdialog=false" >
          <i class="fa fa-times-circle" style="font-size: 48px; color: lightgrey;"></i>
        </button>
      </v-card>

      <v-card flat class="dialog-card" v-else-if="loginState === 'verify'">
        <CodeVerification ref="cver" @verified="handleVerified" style="margin-top: 32px; margin-bottom: 32px;"></CodeVerification>
        <button class="mobile-show" style="position: relative; left: 50%; transform: translateX(-50%)" @click="otherdialog=false" >
          <i class="fa fa-times-circle" style="font-size: 48px; color: lightgrey;"></i>
        </button>
      </v-card>

      <v-card flat class="dialog-card" style="overflow-y: scroll" v-else-if="loginState==='resume'">
        <div class="existing-container"  enctype="multipart/form-data" novalidate>

          <div style="margin-top: 20px" v-if="this.resumes.length > 0">
            <h2>Select Existing Files or Upload More</h2>
            <p v-if="resumeExists">{{selectedResumes.length}} {{selectedResumes.length | plural}} selected</p>
            <div :style="{'background-color' : (file.selected ? '#f6e3e3' : '#eee')}" class="existing-file" v-for="(file, index) in this.resumes">
              <img class="smaller-file-icon" src="../assets/job_detail/pdf-icon.svg" alt="">
              <p v-if="file.name.length < 30">{{file.name}}</p>
              <p v-else>{{file.name | truncate}}</p>
              <v-checkbox class="uploader-checkbox" v-model="file.selected"></v-checkbox>
            </div>
          </div>

          <ResumeUploader :smalldropbox="resumeExists" @uploaded="resumeUploaded" style="width: 100%;"></ResumeUploader>
          <k-btn v-if="resumeExists" @click="createApplication" :disabled="!selectedResumes.length" style="margin: 20px auto;">Confirm Files</k-btn>
        </div>
      </v-card>

      <v-card flat class="dialog-card" v-else-if="loginState === 'success'">
        <h2>Thank you! Your application was selected</h2>
        <button class="mobile-show" style="position: relative; left: 50%; transform: translateX(-50%)" @click="otherdialog=false" >
          <i class="fa fa-times-circle" style="font-size: 48px; color: lightgrey;"></i>
        </button>
      </v-card>

      <v-card flat class="dialog-card" v-else-if="loginState='success'">
        <v-card-title>Complete!</v-card-title>
        <p>Thank you for sending in an application. It is currently under review.
          We will notify you once your application is viewed. Thanks for using Kunvet!</p>
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
    // import FileClient from '@/utils/FileClient';
    import queries from '@/constants/queries';
    import parseUrl from 'url-parse';
    import userDataProvider from '@/userDataProvider';
    import MobileMenu from '@/components/MobileMenu';
    import LoginComponent from '@/components/LoginComponent';
    import SignupComponent from '@/components/SignupComponent';
    import ResumeUploader from '@/components/ResumeUploader';
    import CodeVerification from '@/components/CodeVerification';
    // const DefaultPic = 'https://github.com/leovinogradov/letteravatarpics/blob/master/Letter_Avatars/default_profile.jpg?raw=true';

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
      },
      props: ['id'],
      data() {
        return {
          selected: [],
          findJob: {},
          jobType: [],
          resumes: [],
          serverUrl: Config.get('serverUrl'),
          otherdialog: false,
          loginState: 'start',
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
        resumeExists() {
          return this.resumes.length > 0;
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
      },
      methods: {
        resumeUploaded(_filename, _resumename) {
          const newResume = {
            name: _resumename,
            filename: _filename,
            resumeid: null,
          };
          newResume.selected = true;
          this.resumes.push(newResume);
          this.updateAccount();
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
        handleResume() {
          this.loginState = 'resume';
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
        openApplyDialog() {
          this.dialog = true;
          if (this.uid) {
            // this.state = 'INITIAL';
            // this.applyState = 'MAIN';
            // this.applydialog = true;
            // this._getUserData();
            this.otherdialog = true;
            this.handleResume();
          } else {
            this.otherdialog = true;
            this.start = true;
            // this.$router.push('/login');
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
        createApplication() {
          // verify email if it isnt verified at this point for some reason
          if (!this.email_verified) {
            this.showCodeValidation();
            return;
          }
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
              this.loading = false;
              if (data) {
                this.loginState = 'success';
                this.applied = true;
              } else {
                this.$debug('no data returned when creating application');
                this.applydialog = false;
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
        // here
        // uploadResume() {
        //   this.client = new FileClient();
        //   let curId = null;
        //   if (!this.file) {
        //     return;
        //   }
        //   this.state = 'UPLOADING';
        //
        //   setImmediate(async () => {
        //     try {
        //       curId = await this.client.createFileSlot(this.file.name, this.file.type);
        //     } catch (e) {
        //       this.$error(e);
        //       this.state = 'ERROR';
        //       this.errorMessage = e.message;
        //       return;
        //     }
        //     try {
        //       await this.client.uploadFile(curId, this.file);
        //     } catch (e) {
        //       this.$error(e);
        //       this.state = 'ERROR';
        //       this.errorMessage = e.message;
        //       return;
        //     }
        //     this.resumes.push({
        //       name: this.file.name,
        //       filename: curId,
        //       resumeid: null,
        //     });
        //     this.selectedResume = curId;
        //     this.file = null;
        //     this.fileName = null;
        //     this.state = 'UPLOADED';
        //     this.updateAccount();
        //   });
        // },
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
