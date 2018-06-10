<style>
.color-red {
  color: red;
}
.createnewjob-container .ql-editor {
  min-height: 120px;
}
.ql-snow.ql-toolbar button, .ql-snow .ql-toolbar button {
  margin-bottom: 0;
}
.createnewjob-container h3 {
  margin-top: 1em;
  /* margin-bottom: 1.2em; */
  color: #4d4d4d;
  font-size: 1.5em;
}
.createnewjob-container .input-group--text-field {
  max-width: 500px;
}
.createnewjob-container .input-group--required label:after {
  content: '';
}
.createnewjob-container .input-group--text-field .input-group__details {
  min-height: 10px;
}
.createnewjob-container .input-group--text-field > label {
  color: #999;
}
.createnewjob-container .input-group--text-field .input-group__details:before {
  background-color: #999;
}
.createnewjob-container .cust-radio-box .input-group.radio-group.radio-group--row,
.createnewjob-container .cust-radio-box .input-group__input {
  display: block;
}
.createnewjob-container .cust-radio-box .input-group__details {
  /* min-height: 0;
  height: 10px; */
}
.createnewjob-container .cust-radio-box > p {
  margin-bottom: 2px;
  color: #999;
}
.createnewjob-container .cust-radio-box > div {
  padding-top: 0;
}
.createnewjob-container .cust-radio-box .input-group.input-group--selection-controls.radio,
.createnewjob-container .multi-checkbox .input-group.input-group--selection-controls {
  padding-top: 4px;
  max-width: 110px;
  height: 34px;
  float: left;
  /* background-color: #f8f8f8; *
  margin: 2px 2px;
  border-radius: 3px; */
  display: block !important;
}
.createnewjob-container .cust-radio-box .input-group.input-group--selection-controls label,
.createnewjob-container .multi-checkbox .input-group.input-group--selection-controls label {
  max-width: 100%;
  padding-left: 32px;
  text-align: left;
  left: 0;
}
.work-hours {
  min-height: 34px;
}
.createnewjob-container .cust-radio-box label:after,
.createnewjob-container .multi-checkbox label:after,
.createnewjob-container .radio-group label:after {
  content: '';
}
.requirements .flex {
  padding-top: 0;
  padding-bottom: 0;
}
.createnewjob-container .cflex_1 {
  padding: 16px 0 0 0;
}
.createnewjob-container .optional,
.createnewjob-container .optional_p,
.createnewjob-container .optional .input-group:not(.input-group--error) label,
.createnewjob-container .optional.input-group:not(.input-group--error) label,
.createnewjob-container .optional i,
.createnewjob-container .optional .input-group__input:not(.input-group--error) {
  color: #02bbd6 !important;
}
.createnewjob-container .optional.input-group:not(.input-group--error) .input-group__details:before,
.createnewjob-container .optional.input-group--text-field:not(.input-group--error) .input-group__details:before {
  background-color: #02bbd6 !important;
}
.error_h3 {
  color: #ff5252 !important;
  margin-bottom: 0.5em !important;
}
.error_h3_2 {
  color: #ff5252 !important;
}
.error_p {
  color: #ff5252;
  font-size: 12px;
}
.optional_p {
  margin-bottom: 5px;
}
.input-group--error, .input-group--error label {
  color: #f00 !important;
}
.bottom-error-message {
  color: #f00;
  transition: all 0.4s linear;
}
.createnewjob-container .image-container {
  position: relative;
}
.createnewjob-container .image-container .delete-img-btn {
  position: absolute;
  top: 2px;
  right: 0;
  color: rgba(255,255,255,0.75);
}
.createnewjob-container .custom-select-2-wrapper {
  height: auto;
}
.createnewjob-container .custom-select-2 {
  box-shadow: none;
  height: 31px;
}
.createnewjob-container .custom-select-2 .inner {
  border-bottom: 1px solid rgba(0,0,0,.42);
  height: 30px;
  transition: border-color 0.3s ease-out;
  padding: 0;
}
.createnewjob-container .custom-select-2 .inner span {
  font-size: 16px;
  line-height: 30px;
}
.createnewjob-container .custom-select-2 .inner .btn--icon {
  height: 24px;
  width: 24px;
  margin: 3px 6px;
}
.createnewjob-container .custom-select-2.active .inner {
  border-bottom: solid 2px rgb(24,103,192);
}
.createnewjob-container .custom-select-2.error-border .inner {
  border-bottom: solid 2px red !important;
}
@media (min-width: 600px) {
  .requirements .flex {
    padding: 0 15px;
  }
  .picUploaderDialog {
    min-width: 450px;
  }
}
@media (max-width: 700px) {
  .createnewjob-container .work-hours {
    min-height: 76px;
  }
}
@media (max-width: 435px) {
  .createnewjob-container .work-hours {
    min-height: 114px;
  }
}
</style>
<template>
  <v-container fluid class="createnewjob-container">
    <v-dialog v-model="introDialog">
      <v-card class="no-border-radius">
        <v-card-title class="headline">By the way...</v-card-title>

        <v-card-text>
          <p>
            For your safety, please try not to include any contact info in your job description.
            Every time an applicant applies, their information and resume will be sent to your account's email.
          </p>
          <p>
            You can also view your applicants through Kunvet itself. Your applicants will be organized under the <router-link to="/applicants">Applicants</router-link> page.
          </p>
          <p>
            If you prefer recieving your applicants through Google Forms, scroll down to "Application options" and check the Google Forms checkbox.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="introDialog = false" flat>Got it!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="main-cont-large">
      <section v-show="!email_verified" class="no-padding-xs" style="min-height: 350px; padding-top: 10px;">
        <h3>You need to verify your email before you can post a job!</h3>
      </section>
      <section v-show="email_verified" class="no-padding-xs" style="padding-top: 10px;">
        <div style="width: 100%; height: 50px;">
          <div class="float-left">
            <h2 style="margin-bottom: 0; line-height:48px;">
              <span v-if="this.$route.params.id">Edit job</span>
              <span v-else>Create new job</span>
            </h2>
          </div>
          <div class="float-right">
            <v-btn flat @click="saveForLater" v-if="!active">Save for later</v-btn>
            <v-btn v-else style="margin-left: 0;" @click="updateActiveJob">Save</v-btn>
          </div>
        </div>
        <v-divider></v-divider>
        <br>
        <h2>Posting as {{ posted_by }}</h2>
        <br>

        <v-form v-model="valid" ref="form">

        <h3>Title and Address</h3>
        <v-text-field
          v-model="title"
          label="Job Title"
          :rules="[(title) => !!(title) || 'Required']"
          required
        ></v-text-field>
        <v-layout row wrap>
          <v-flex xs12 class="padding-15px-right-sm-up">
            <v-text-field
              v-model="address"
              ref="addressField"
              label="Address"
              required
              @change="setLatLongs"
              :rules="[() => !!(address) || !submitted || 'Required',
                       () => (!!(latitude) && !!(longitude)) || addressValid || 'Invalid address']"
            ></v-text-field>
            <v-text-field
              class="optional"
              v-model="address2"
              ref="addressField2"
              placeholder="Apt, Suite, Bldg. (Optional)"
              label="Address Line 2"
            ></v-text-field>
            <v-checkbox class="optional" style="margin-top: 16px;"
              label="Is this job on a school campus?"
              v-model="isUniversity"
              hide-details
            ></v-checkbox>
            <v-select class="optional no-padding-select"
              v-if="isUniversity"
              label="Which one?"
              v-model="university"
              v-bind:items="schools"
              autocomplete
              hide-details
              single-line
            ></v-select>
          </v-flex>
        </v-layout>

        <br>
        <h3>Categories</h3>
        <v-flex xs12 sm10 md8 class="no-padding">
          <div class="cust-radio-box">
            <v-radio-group v-model="type"
              row class="no-padding"
              hide-details
              :rules="[(type) => !!(type) || !submitted || 'Required']"
              requred>
              <v-radio label="Full time" value="fulltime"></v-radio>
              <v-radio label="Part time" value="parttime"></v-radio>
              <v-radio label="Both" value="both"></v-radio>
            </v-radio-group>
          </div>
        </v-flex>
        <v-flex xs12 class="cflex_1">
          <div class="cust-radio-box">
            <v-radio-group v-model="studentfriendly" row required hide-details>
              <v-radio label="Student friendly" :value="true" style="max-width: 160px;" selected></v-radio>
              <v-radio label="Not student friendly" :value="false" style="max-width: 180px;"></v-radio>
            </v-radio-group>
          </div>
        </v-flex>
        <v-flex xs12 class="cflex_1">
          <p class="optional_p">(Optional)</p>
          <div class="cust-radio-box">
            <v-radio-group v-model="type2_current" @change="changeRadio(0)"
              row class="optional" :mandatory="false" hide-details>
              <v-radio label="internship" style="max-width: 140px;" value="internship"></v-radio>
              <v-radio label="contract" value="contract"></v-radio>
            </v-radio-group>
          </div>
        </v-flex>

        <br>
        <h3 class="optional">Working Hours</h3>

        <div class="multi-checkbox optional work-hours">
            <v-checkbox style="max-width: 110px;"
              label="morning" v-model="shift" value="morning"
              required></v-checkbox>
            <v-checkbox style="max-width: 85px;" label="noon" v-model="shift" value="noon"></v-checkbox>
            <v-checkbox style="max-width: 115px;" label="afternoon" v-model="shift" value="afternoon"></v-checkbox>
            <v-checkbox style="max-width: 100px;" label="evening" v-model="shift" value="evening"></v-checkbox>
            <v-checkbox label="night" v-model="shift" value="night"></v-checkbox>
        </div>

        <br>
        <h3>Salary</h3>
        <v-layout row wrap>
          <v-flex xs12 sm12 md6 class="no-padding">
            <div class="cust-radio-box">
              <v-radio-group
              v-model="salary_select"
              row
              :rules="[v => !!(v) || !submitted || 'Required']"
              hide-details
              required>
                <v-radio style="max-width: 95px;" label="Paid" value="paid"></v-radio>
                <v-radio style="max-width: 120px;" label="Unpaid" value="unpaid"></v-radio>
                <v-radio label="Negotiable" value="negotiable"></v-radio>
              </v-radio-group>
            </div>
          </v-flex>
          <v-flex xs6 sm3 md2 class="no-padding">
            <v-text-field class="no-padding"
              v-model="salary"
              :disabled = "salary_select != 'paid'"
              prefix="$"
              :required = "salary_select === 'paid'"
              :rules="[(salary) => (!!(salary/1) || salary_select != 'paid') || 'Required, must be a number']"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm3 md2 class="no-padding" style="padding-left: 15px !important;">
            <v-select class="no-padding"
              v-model="pay_denomination"
              :disabled = "salary_select != 'paid'"
              :items="[ 'per hour', 'per week', 'per month', 'per year', 'per task' ]"
              >
            </v-select>
          </v-flex>
        </v-layout>


        <br>
        <h3 class="optional" style="margin-bottom: 0.5em;">Optional requirements</h3>
        <v-layout class="requirements" row wrap>
          <v-flex xs12 sm6 md5>
            <v-select class="optional"
              v-model="education"
              label="Education"
              v-bind:items="educationOptions">
            </v-select>
          </v-flex>
          <v-flex xs12 sm6 md5>
            <v-text-field class="optional"
              name="preferred-major"
              v-model="major"
              label="Preferred major"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md5>
            <v-text-field class="optional"
              name="language"
              v-model="language"
              label="Language"
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm2>
            <v-text-field class="optional"
            v-model="age"
            label="Age"
            :rules="[(age) => (!!(age/1) || !age)  || 'Must be a number']">
          </v-text-field>
          </v-flex>
        </v-layout>

        <br>

        <h3 v-bind:class="{ error_h3: !validations.description }">Description</h3>
        <p class="error_p" v-if="!validations.description">Required</p>
        <QuillEditor v-model="description" required :charLimit="300" @validate="v => validations.description = v"></QuillEditor>

        <br>

        <h3 v-bind:class="{ error_h3: !validations.experience }">Required Experience / Qualifications</h3>
        <p class="error_p" v-if="!validations.experience">Required</p>
        <QuillEditor v-model="experience" required :charLimit="900" @validate="v => validations.experience = v"></QuillEditor>

        <br>

        <h3 v-bind:class="{ error_h3: !validations.responsibilities }">Responsibilities</h3>
        <p class="error_p" v-if="!validations.responsibilities">Required</p>
        <QuillEditor v-model="responsibilities" required :charLimit="900" @validate="v => validations.responsibilities = v"></QuillEditor>

        <br>

        <div style="display: flex">
        <h3 class="optional" style="margin: 7px 10px 6px 0;">Pictures</h3>
        <v-btn v-if="images.length === 0"
          @click="picUploaderDialog = true"
          flat small outline
          class="optional">Upload</v-btn>
        <v-btn v-else
          @click="picUploaderDialog = true"
          flat small outline class="optional">Upload Another</v-btn>
        </div>

        <v-dialog v-model="picUploaderDialog" width="100%">
          <PicUploader @uploaded="picsUploaded" @cancel="picUploaderDialog = false" keepOriginal />
        </v-dialog>

        <v-container fluid grid-list-sm style="margin-top: 8px;">
          <v-layout row wrap>
            <v-flex xs4 md3 class="image-container" v-for="image in images">
              <v-btn icon small ripple class="delete-img-btn" @click="showDeletePictureModal(image.cropped)">
                <v-icon>cancel</v-icon>
              </v-btn>
              <img class="image" :src="`${serverUrl}/file/get/${image.cropped}`" alt="loading image" width="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <br>

        <h3 style="margin-bottom: 5px;">Position tags</h3>
        <p>Please select at least one category that is relevant to this job</p>

        <div class="custom-select-2-wrapper" style="max-width: 500px;">
          <div class="custom-select-2" v-bind:class="{ 'active': openSelectField === 'positions', 'error-border': submitted && selectedPositions.length === 0 }">
            <div class="inner" @click="reorderAvailablePositions(); openSelect('positions');">
              <span v-if="this.selectedPositions.length > 0">{{ computeSelectString(this.selectedPositions) }}</span>
              <span v-else style="color: rgba(0,0,0,.54);">Select one or more...</span>
              <v-btn icon v-if="openSelectField === 'positions'"><v-icon>keyboard_arrow_up</v-icon></v-btn>
              <v-btn icon v-else><v-icon>keyboard_arrow_down</v-icon></v-btn>
            </div>

            <v-list dense class="custom-select-menu">
              <div class="listFilterContainer" v-if="openSelectField === 'positions'">
                <i class="material-icons" style="font-size: 16px;">search</i>
                <input placeholder="search..." class="filterInput" v-model="filterPositions"/>
              </div>
              <v-list-tile v-if="openSelectField === 'positions'" v-for="(item, i) in filteredAvailablePositions" :key="i">
                <v-checkbox :label="item" v-model="selectedPositions" :value="item" hide-details></v-checkbox>
              </v-list-tile>
            </v-list>
          </div>
        </div>
        <br>
        <br>
        <div style="margin-top: 1em; margin-bottom: 5px;">
          <h3 style="display: inline;">Application options</h3>
        </div>
        <p>The applicant's info and resume will be sent to your email when they apply.<br>
           You can also browse through all your applicants in the applicants page.</p>
        <!--<v-select class="no-padding-select"
            v-bind:items="['Through Kunvet', 'Through Google Forms', 'Through email']"
            v-model="applyMethod"
            bottom
            required
            :rules="[(v) => !!v || !submitted || 'Required']">
        </v-select>-->
        <v-checkbox
          class="optional"
          label="Don't send resumes to my email. I have an online form that doesn't require sign-up."
          v-model="useGForm"
          hide-details
        ></v-checkbox>
        <div v-if="applyMethod === 'Through Google Forms'">
          <v-text-field
            v-model="gformLink"
            label="My form url"
            placeholder="Paste your form url here"
            required
            :rules="[(v) => applyMethod != 'Through Google Forms' || !!v || 'Required']">
          ></v-text-field>
        </div>


        <div>
          <p class="optional" style="margin-top: 16px; margin-bottom: 0;">(Optional) Do you have any special instuctions for applicants?</p>
          <v-text-field
            v-model="notes"
            style="padding: 0 2px;"
            class="optional"
            placeholder="e.g. Please walk-in from 11 - 2pm for interviews"
            hide-details
            multi-line
            rows=1
          ></v-text-field>
        </div>
        </v-form>

        <br>
        <v-layout v-if="!active">
          <v-btn style="margin-left: 0;" @click="saveForLater">Save for later</v-btn>
          <v-btn @click="validateBeforePosting(true)">Save and Post</v-btn>
        </v-layout>
        <v-layout v-else>
          <v-btn style="margin-left: 0;" @click="updateActiveJob">Save</v-btn>
        </v-layout>

        <br>
        <p style="opacity: 0;" class="bottom-error-message" id="bottom-error-message">Looks like you still have a few invalid fields.</p>
        <!--<br>
        <p style="color: #f00;" v-show="submitted && !valid">There are still a few fields you need to fill out</p>-->

        <br>

        <v-dialog class="no-border-radius" v-model="confirmPost">
          <v-card flat class="no-border-radius" style="max-width: 350px;">
            <v-card-title>
              <div class="headline">All seems good, you can now post your job!</div>
              <br>
              <p>(You can still edit certain parts of your job even when it's active)</p>
            </v-card-title>
            <div class="bottom-dialog-button" @click="saveAndPost">
              Save and Post
              <v-progress-circular indeterminate v-if="loading" class="ma-3" size="30" color="primary"></v-progress-circular>
            </div>
          </v-card>
        </v-dialog>

        <v-dialog v-model="errorOccured">
          <v-card>
            <v-card-title>
              Oh no, an error occured
            </v-card-title>
            <v-card-text>
              Please try again later
            </v-card-text>
            <v-card-actions>
              <v-btn flat="flat" @click.native="errorOccured = false;">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="deletePictureModal.show">
          <v-card>
            <v-card-title>
              <div class="headline" style="margin-bottom: 10px;">Delete this picture?</div>
              <img v-if="deletePictureModal.croppedID"
                class="image" :src="`${serverUrl}/file/get/${deletePictureModal.croppedID}`"
                width="100%">
            </v-card-title>
            <v-card-actions>
              <v-btn flat="flat" @click.native="cancelDeletePictureModal">Cancel</v-btn>
              <v-btn flat="flat" @click.native="deletePicture">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-alert type="success" dismissible v-model="successAlert" style="position: fixed; bottom: 0; z-index: 5;">
          <p style="color: #fff; margin-bottom: 0; min-width: 250px;">
            Saved! <router-link :to="`/job/${id}`">View job</router-link>
          </p>
        </v-alert>

      </section>
    </div>
  </v-container>
</template>
<script>
import gql from 'graphql-tag';
// import VuexLS from '@/store/persist';
// import Delta from 'quill-delta';
import * as VueGoogleMaps from 'vue2-google-maps';
import Schools from '@/constants/schools';
import PicUploader from '@/components/PicUploader';
import QuillEditor from '@/components/QuillEditor';
import Config from 'config';
import { degreesReduced, degreeReducedDbToString, degreeReducedStringToDb } from '@/constants/degrees';
import positions from '@/constants/positions';
import queries from '@/constants/queries';
import difference from 'lodash/difference';
import userDataProvider from '@/userDataProvider';

import every from 'lodash/every';

const createJobMutation = gql`
  mutation ($job: CreateOneJobInput!) {
    createJob (record: $job) {
      recordId
      record {
        user_id
        business_id
        posted_by
        title
        description
        address
        address2
        university
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
        education
        preferred_major
        language
        experience
        responsibilities
        apply_method
        notes
        gform_link
        images {
          original
          cropped
        }
        position_tags
      }
    }
  }
`;
const updateJobMutation = gql`
  mutation ($id: MongoID, $job: UpdateOneJobInput!) {
    updateJob (filter: {_id: $id}, record: $job) {
      recordId
      record {
        user_id
        posted_by
        title
        description
        address
        university
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
        education
        preferred_major
        language
        experience
        responsibilities
        apply_method
        notes
        gform_link
        images {
          original
          cropped
        }
        position_tags
      }
    }
  }
`;
const findJobQuery = gql`
  query($id: MongoID) {
    findJob(filter: { _id: $id }) {
      ${queries.FindJobRecord}
    }
  }
`;
const findJobsQuery = gql`
  query($userId: MongoID, $businessId: MongoID) {
    findJobs(filter: { user_id: $userId, business_id: $businessId }) {
      ${queries.FindJobRecord}
    }
  }
`;

export default {
  components: {
    QuillEditor,
    PicUploader,
  },
  data() {
    return {
      introDialog: true,
      serverUrl: Config.get('serverUrl'),
      id: null,
      valid: false,
      submitted: false,
      posted_by: null,
      uid: null,
      title: '',
      date: null,
      address: '',
      address2: null,
      autocomplete: null,
      placeDetails: null,
      latitude: null,
      longitude: null,
      type_str: null,
      type: null,
      type_current: null,
      type2: null,
      type2_current: null,
      shift: [],
      age: '',
      salary: '',
      salary_select: null,
      pay_denomination: 'per hour',
      education: '',
      description: null,
      responsibilities: null,
      experience: null,
      studentfriendly: true,
      language: '',
      major: '',
      active: false,
      confirmPost: false,
      isUniversity: false,
      university: null,
      howDidYouHear: null,
      schools: Schools.schools,
      images: [],
      openSelectField: null,
      availablePositions: positions,
      filterPositions: null,
      selectedPositions: [],
      picUploaderDialog: false,
      successAlert: false,
      showInvalidMessage: false,
      notes: '',
      useGForm: false,
      gformLink: '',
      educationOptions: Object.keys(degreesReduced).map(key => degreesReduced[key]),
      howDidYouHearItems: [
        'Posters', 'A representative walked-in', 'Word of mouth', 'Email', 'WeChat', 'Personal Connection', 'Other', 'Shut up!',
      ],
      deletePictureModal: {
        show: false,
        croppedID: null,
      },
      email_verified: true,
      loading: false,
      errorOccured: false,
      bdata: {
        business_name: null,
        address: null,
        display_email: null,
        phone_number: null,
        website: null,
        biography: null,
        profile_pic: null,
      },
      geocoder: null,
      addressValid: true,
      prevAutocompleteAddress: null,
      validations: {
        description: false,
        experience: false,
        responsibilities: false,
      },
    };
  },
  computed: {
    filteredAvailablePositions() {
      var str = this.filterPositions;
      if (!str || str === '') {
        return this.availablePositions;
        // return this.selectedPositions.concat(difference(this.availablePositions, this.selectedPositions));
      }
      str = str.toLowerCase();
      return this.availablePositions.filter(text => text.toLowerCase().indexOf(str) !== -1);
    },
    applyMethod() {
      if (this.useGForm) {
        return 'Through Google Forms';
      }
      return 'Through Kunvet';
    },
  },
  methods: {
    openSelect(name) {
      this.filterPositions = null;
      if (this.openSelectField === name) {
        this.openSelectField = null;
      } else {
        this.openSelectField = name;
      }
    },
    computeSelectString(property, original = null) {
      let items = property;
      if (typeof items[0] === 'object') {
        items = items.map(x => x.text);
      } else if (original && typeof original === 'string') {
        items = property.map(val => {
          const obj = this[original].find(el => el.value === val);
          return obj.text;
        });
      }
      if (items.length <= 2) {
        return items.join(', ');
      }
      return `${items[0]}, ${items[1]}, +${items.length - 2}`;
    },
    reorderAvailablePositions() {
      this.availablePositions = this.selectedPositions.concat(difference(this.availablePositions, this.selectedPositions));
    },
    setPlace(place) {
      if (!place.geometry) {
        this.addressValid = false;
        return;
      }
      this.addressValid = true;
      this.prevAutocompleteAddress = place.formatted_address;
      this.address = place.formatted_address;
      this.latitude = place.geometry.location.lat();
      this.longitude = place.geometry.location.lng();
    },
    setLatLongs() {
      setTimeout(() => {
        // console.log('a1: ', this.address, 'a2: ', this.prevAutocompleteAddress);
        if (this.geocoder && this.address !== this.prevAutocompleteAddress) {
          this.geocoder.geocode({ 'address': this.address }, (results, status) => {
            if (status === 'OK' && results.length === 1) {
              // console.log('res', results);
              this.latitude = results[0].geometry.location.lat();
              this.longitude = results[0].geometry.location.lng();
              this.addressValid = true;
              this.$refs.addressField.validate();
            } else {
              // console.log('Geocode was not successful for the following reason:', status);
              this.latitude = null;
              this.longitude = null;
              this.addressValid = false;
              this.$refs.addressField.validate();
            }
          });
        }
      }, 600);
    },
    changeRadio(property) {
      const properties = ['type2'];
      const p = properties[property];
      if (this[p] === this[`${p}_current`]) {
        this[p] = null;
        this[`${p}_current`] = null;
      } else {
        this[p] = this[`${p}_current`];
      }
    },
    jobTypeStrToType(s) {
      if (s === 'fulltime') {
        return ['fulltime'];
      } else if (s === 'parttime') {
        return ['parttime'];
      } else if (s === 'both') {
        return ['fulltime', 'parttime'];
      }
      return null;
    },
    validateBeforePosting(showDialog = false) {
      this.submitted = true;
      const f = this.$refs.form.validate();
      this.valid = f; // wierd workaround?
      if (!every(this.validations)) {
        this.valid = false;
      }
      if (this.longitude == null || this.latitude == null) { this.valid = false; }
      if (!this.selectedPositions || this.selectedPositions.length === 0) { this.valid = false; }
      if (showDialog && this.valid) {
        this.confirmPost = true;
      }
      if (!this.valid) {
        var msg = document.getElementById('bottom-error-message');
        msg.style.opacity = 1;
        setTimeout(() => { msg.style.opacity = 0; }, 4000);
      }
    },
    saveForLater() {
      this.active = false;
      this.loading = true;
      this._save();
    },
    saveAndPost() {
      this.validateBeforePosting();
      if (!this.loading) {
        if (this.valid) {
          this.active = true;
          this.loading = true;
          this._save(true);
        } else {
          this.confirmPost = false;
          this.saveForLater();
        }
      }
    },
    updateActiveJob() {
      this.validateBeforePosting();
      if (this.valid && this.$route.params.id) {
        this.active = true;
        this._save();
      }
    },
    _save(viewJob = false) {
      if (this.$route.params.id) {
        const job = this.createJobArray();
        const id = this.$route.params.id;
        this.$apollo.mutate({
          mutation: updateJobMutation,
          variables: {
            id: id,
            job: job,
          },
          refetchQueries: [
            {
              query: findJobQuery,
              variables: { id: id },
            },
            {
              query: gql`query($userId: MongoID, $businessId: MongoID) {
                findJobs(filter: { user_id: $userId, business_id: $businessId }) {
                  ${queries.FindJobRecordForJobCard}
                }
              }`,
              variables: { userId: this.$store.state.userID, businessId: this.$store.state.businessID },
            },
          ],
        }).then((res) => {
          this.loading = false;
          const recordId = res.data.updateJob.recordId;
          if (viewJob) {
            this.$router.push(`/job/${recordId}`);
          } else {
            this.id = recordId;
            this.successAlert = true;
          }
        }).catch((err) => {
          this.loading = false;
          this.confirmPost = false;
          this.errorOccured = true;
          this.$error(err);
        });
      } else {
        const job = this.createJobArray();
        this.$apollo.mutate({
          mutation: createJobMutation,
          variables: {
            job: job,
          },
          refetchQueries: [
            {
              query: findJobsQuery,
              variables: {
                userId: this.$store.state.userID,
                businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
              },
            },
            {
              query: gql`query($userId: MongoID, $businessId: MongoID) {
                findJobs(filter: { user_id: $userId, business_id: $businessId }) {
                  ${queries.FindJobRecordForJobCard}
                }
              }`,
              variables: {
                userId: this.$store.state.userID,
                businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
              },
            },
            { // from home page
              query: gql`{
                findJobs (filter: { active: true }){
                  _id
                  latitude
                  longitude
                  type
                  studentfriendly
                  type2
                  shift
                  age
                  pay_type
                  date
                  is_deleted
                }
              }`,
            },
            { // from applicants page
              query: (gql`query ($userId: MongoID, $businessId: MongoID) {
                findJobs (filter: { user_id: $userId, business_id: $businessId, active: true }){
                  _id
                  user_id
                  posted_by
                  title
                  address
                  date
                }
              }`),
              variables: {
                userId: this.$store.state.userID,
                businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
              },
            },
          ],
        }).then((res) => {
          this.loading = false;
          const recordId = res.data.createJob.recordId;
          if (!viewJob) {
            this.$router.push({ path: `/createnewjob/${recordId}` });
            this.id = recordId;
            this.successAlert = true;
          } else {
            this.$router.push(`/job/${recordId}`);
          }
        }).catch((err) => {
          this.loading = false;
          this.confirmPost = false;
          this.errorOccured = true;
          this.$error(err);
        });
      }
    },
    createJobArray() {
      // Note: this.active is always true at this point if you're clicking Save Post,
      // whether it's a already-existing job or not.
      // It's important to use both `this.active` and `this.date` to determine that this is an
      // already-existing job.
      const doesJobActivelyExist = this.active && this.date;
      const job = {
        // user_name: State.userdata.username,
        // TODO: Make sure this user_id line is correct.
        // $store.state.userID vs $store.state.businessID
        // Do we have to differentiate between this?
        // Because on the backend, ctx only cares about user._id.
        user_id: this.uid,
        business_id: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
        posted_by: this.posted_by,
        active: this.active,
        title: this.title,
        date: doesJobActivelyExist ? this.date : Date.now(),
        description: this.description,
        address: this.address,
        address2: this.address2,
        university: this.isUniversity ? this.university : null,
        latitude: this.latitude,
        longitude: this.longitude,
        type: this.jobTypeStrToType(this.type),
        studentfriendly: this.studentfriendly,
        type2: this.type2,
        shift: this.shift === [] ? null : this.shift,
        age: this.age === '' ? null : parseInt(this.age, 10),
        pay_type: this.salary_select === null ? 'none' : this.salary_select,
        salary: this.salary_select !== 'paid' ? null : parseInt(this.salary, 10),
        pay_denomination: this.salary_select !== 'paid' ? null : this.pay_denomination,
        education: this.education ? degreeReducedStringToDb(this.education) : 'None',
        preferred_major: this.major,
        language: this.language,
        experience: this.experience,
        responsibilities: this.responsibilities,
        apply_method: this.applyMethod,
        notes: this.notes,
        gform_link: this.gformLink,
        images: this.images,
        position_tags: this.selectedPositions,
      };
      return job;
    },
    getEditJobData(_id) {
      this.$apollo.query({
        query: (gql`query ($id: MongoID, $user: MongoID) {
          findJob (filter: { _id: $id, user_id: $user }){
            _id
            posted_by
            active
            title
            date
            description
            address
            address2
            university
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
            education
            preferred_major
            language
            experience
            responsibilities
            apply_method
            notes
            gform_link
            images {
              original
              cropped
            }
            position_tags
          }
        }`),
        variables: {
          user: this.uid,
          id: _id,
        },
      }).then((data) => {
        const job = data.data.findJob;
        if (job) {
          this.title = job.title;
          this.active = job.active;
          this.date = job.date;
          this.address = job.address;
          this.address2 = job.address2;
          this.university = job.university;
          if (job.university) {
            this.isUniversity = true;
          }
          this.latitude = job.latitude;
          this.longitude = job.longitude;
          if (job.type && job.type.length > 1) {
            this.type = 'both';
          } else if (job.type) {
            this.type = job.type[0];
          }
          this.studentfriendly = job.studentfriendly;
          this.type2 = job.type2;
          this.type2_current = job.type2;
          if (job.shift) { this.shift = job.shift; }
          if (job.pay_type && job.pay_type !== 'none') {
            this.salary_select = job.pay_type;
            this.salary = job.salary;
          }
          this.description = job.description;
          this.education = job.education ? degreeReducedDbToString(job.education) : null;
          this.major = job.preferred_major;
          this.age = job.age;
          this.language = job.language;
          this.experience = job.experience;
          this.responsibilities = job.responsibilities;
          this.notes = job.notes;
          if (job.gform_link) {
            this.gformLink = job.gform_link;
            this.useGForm = true;
          }
          // this.applyMethod = job.applyMethod;
          for (const image of job.images) {
            this.images.push({ original: image.original, cropped: image.cropped });
          }
          if (job.position_tags) {
            this.selectedPositions = job.position_tags.concat();
          }
        }
      }).catch((error) => {
        this.$error(error);
      });
    },
    picsUploaded(fileIds) {
      this.picUploaderDialog = false;
      this.images.push(fileIds);
    },
    showDeletePictureModal(croppedID) {
      this.deletePictureModal.show = true;
      this.deletePictureModal.croppedID = croppedID;
    },
    cancelDeletePictureModal() {
      this.deletePictureModal.show = false;
      this.deletePictureModal.croppedID = null;
    },
    deletePicture() {
      this.images = this.images.filter(({ cropped }) => cropped !== this.deletePictureModal.croppedID);
      this.cancelDeletePictureModal();
    },
    resetData() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    fetchBusinessData(id) {
      // this.$debug('fetching business data');
      this.$apollo.query({
        query: (gql`query ($bid: MongoID) {
          findOrganization (filter: {
            _id: $bid
          }) {
            _id
            business_name
            address
            email
            phone_number
            website
            biography
            profile_pic
          }
        }`),
        variables: {
          bid: id,
        },
      }).then((data) => {
        const res = data.data.findOrganization;
        this.bdata.business_name = res.business_name;
        this.bdata.display_email = res.email;
        this.bdata.address = res.address;
        this.bdata.website = res.website;
        this.bdata.phone_number = res.phone_number;
        this.bdata.biography = res.biography;
        this.bdata.profile_pic = res.profile_pic;

        this.posted_by = res.business_name;
        this.address = res.address;
        this.setLatLongs();
        this.commitBdata();
      }).catch((error) => {
        this.$error(error);
      });
    },
    commitBdata() {
      this.$store.commit({
        type: 'keepBdata',
        bdata: this.bdata,
      });
    },
  },

  activated() {
    this.resetData();
    userDataProvider.getUserData().then(data => {
      if (data.acct === 0) {
        this.$store.commit({ type: 'setAcctID', id: null }); // reset userID to prevent infinite redirect loop
        this.$router.push('/login');
      } else {
        this.uid = data.uid;
        if (this.$route.params.id) {
          this.getEditJobData(this.$route.params.id);
        }
        if (data.acct === 1) {
          this.posted_by = `${data.userdata.firstname} ${data.userdata.lastname}`;
        } else if (data.acct === 2) {
          if (this.$store.state.bdata) {
            // check if bdata exists in store
            if (this.$store.state.bdata.business_name) {
              this.posted_by = this.$store.state.bdata.business_name;
            }
            if (this.$store.state.bdata.address && !this.$route.params.id) {
              this.address = this.$store.state.bdata.address; // Autofill address
            }
          } else {
            // otherwise, fetch it
            this.fetchBusinessData(data.businessID);
          }
        }
      }
    });

    VueGoogleMaps.loaded.then(() => {
      // HACK
      const input = this.$refs.addressField.$el.getElementsByTagName('input')[0];
      input.setAttribute('placeholder', '');
      this.autocomplete = new window.google.maps.places.Autocomplete(input);
      this.geocoder = new window.google.maps.Geocoder();
      // this.placeDetails =  new window.google.maps.places.details;
      this.autocomplete.addListener('place_changed', () => {
        this.setPlace(this.autocomplete.getPlace());
      });
      if (this.address) {
        this.setLatLongs();
      }
    });
  },
};
</script>
