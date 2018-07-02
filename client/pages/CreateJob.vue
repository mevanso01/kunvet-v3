<style lang="scss">
.create-job-container {
  /* Vuetify overrides */
  .tabs__bar {
    position: fixed;
    top: 64px;
    z-index: 5;
    width: calc(100% - 32px);
    height: 43px;
  }
  .cust-tab-wrapper {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    z-index: 4;
    width: 100%;
    height: 43px;
    background-color: #fff;
  }
  .tabs__div {
    padding: 0 8px;
  }
  .tabs__item {
    padding: 0;
    height: 38px;
  }
  .tabs__item:not(.tabs__item--active) {
    opacity: 1;
  }
  .input-group {
    padding-top: 12px;
  }
  .tabs__items .cust-spacer {
    height: 50px;
    width: 100%;
  }
  .input-group--text-field label {
    top: 12px;
  }
  .input-group--required label:after {
    content: '';
  }
  .input-group--error, .input-group--error label {
    color: #f00 !important;
  }
  .radio-group .input-group__details {
    padding-top: 0;
  }
  /* End of Vuetify overrides */
  .optional label::after {
    content: ' - Optional';
    font-style: italic;
    color: #979797;
  }
  .radio-group.optional label::after {
    content: '';
  }
  .no-padding-select {
    padding-top: 0 !important;
  }
  .no-padding-select label {
    top: 0 !important;
  }
  .optional-color {
    color: #979797;
  }
  .ql-editor {
    min-height: 120px;
  }
  .ql-snow.ql-toolbar button, .ql-snow .ql-toolbar button {
    margin-bottom: 0;
  }
  h3 {
    margin-top: 1em;
    color: #4d4d4d;
    font-size: 1.5em;
  }
  h4.cust-subheader {
    font-size: 20px;
    line-height: normal;
    font-weight: 500;
    color: #333;
    margin-bottom: 12px;
  }
  .input-group--text-field {
    max-width: 500px;
  }
  .cust-radio-box .input-group.radio-group.radio-group--row,
  .cust-radio-box .input-group__input {
    display: block;
  }
  .cust-radio-box > p {
    margin-bottom: 2px;
    color: #999;
  }
  .cust-radio-box > div {
    padding-top: 0;
  }
  .cust-radio-box .input-group.input-group--selection-controls.radio,
  .multi-checkbox .input-group.input-group--selection-controls {
    padding-top: 4px;
    max-width: 110px;
    height: 34px;
    float: left;
    display: block !important;
  }
  .cust-radio-box .input-group.input-group--selection-controls label,
  .multi-checkbox .input-group.input-group--selection-controls label {
    max-width: 100%;
    padding-left: 32px;
    text-align: left;
    left: 0;
  }
  .work-hours {
    min-height: 34px;
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
  .bottom-error-message {
    color: #f00;
    transition: all 0.4s linear;
  }
  .image-container {
    position: relative;
  }
  .image-container .delete-img-btn {
    position: absolute;
    top: 2px;
    right: 0;
    color: rgba(255,255,255,0.75);
  }
  .custom-select-2-wrapper {
    height: auto;
  }
  .custom-select-2 {
    box-shadow: none;
    height: 31px;
  }
  .custom-select-2 .inner {
    border-bottom: 1px solid rgba(0,0,0,.42);
    height: 30px;
    transition: border-color 0.3s ease-out;
    padding: 0;
  }
  .custom-select-2 .inner span {
    font-size: 16px;
    line-height: 30px;
  }
  .custom-select-2 .inner .btn--icon {
    height: 24px;
    width: 24px;
    margin: 3px 6px;
  }
  .custom-select-2.active .inner {
    border-bottom: solid 2px rgb(24,103,192);
  }
  .custom-select-2.error-border .inner {
    border-bottom: solid 2px red !important;
  }
  /* this is the grey disabled color */
  .tab-text-container {
    border-bottom: 2px solid #c7c7c7;
    // color: #d1d1d1;
  }
  .tab-text-container.no-error {
    // green:
    border-bottom: 2px solid #43A047;
    color: #43A047;
    // blue-grey:
    // border-bottom: 2px solid #607D8B;
    // color: #607D8B;
  }
  .tab-text-container.error {
    border-bottom: 2px solid red;
    color: red;
  }
  .tabs__item--active .tab-text-container {
    border-bottom: 2px solid #333; // 212121
    color: #333;
  }
  .additional-requirements .flex {
    padding-top: 0;
    padding-bottom: 0;
  }
  @media (max-width: 435px) {
    .work-hours {
      min-height: 114px;
    }
  }
  @media (max-width: 600px) {
    .tabs__bar {
      top: 56px;
    }
    .cust-tab-wrapper {
      top: 56px;
    }
    .tabs__items .cust-spacer {
      height: 40px;
    }
  }
  @media (max-width: 700px) {
    .work-hours {
      min-height: 76px;
    }
  }
  @media (min-width: 601px) {
    .additional-requirements .flex {
      padding-right: 30px;
    }
    .picUploaderDialog {
      min-width: 450px;
    }
  }
  @media (min-width: 961px) {
    .tabs__bar {
      width: 960px;
      margin-left: calc(50% - 496px);
    }
  }
}
</style>

<template>
  <v-container fluid class="create-job-container">
      <div class="cust-tab-wrapper"></div>
      <v-tabs
        slot="extension"
        v-model="tab"
        grow
        fixed-tabs
      >
        <!-- <v-tabs-slider color="grey"></v-tabs-slider> -->
        <v-tab v-for="(item, i) in tabItems" :key="item" :disabled="i > furthest_tab" >
          <div class="tab-text-container" style="width: 100%; height: 100%;"
            :class="{ 'no-error': isTabValid(i), 'error': isTabInvalid(i) }">
            <span style="line-height: 36px;">{{ item }}</span>
          </div>
        </v-tab>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <!-- SECTION 1 -->
            <div class="main-cont-large">
              <div class="cust-spacer"></div>

              <v-form v-model="form1Valid" ref="form1">
              <p>First, we need some basic information about who's posting:</p>
              <v-layout row wrap>
                <v-flex xs12 sm9 md6 class="padding-15px-right-sm-up">
                  <v-text-field
                    label="First name"
                    v-model="fname"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Last name"
                    v-model="lname"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    v-model="email" ref="emailField"
                    :rules="[
                      v => !!v || 'Email is required',
                      v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid email format',
                      () => !emailExists || 'An account with this email already exists',
                    ]"
                    type="email"
                    @blur="checkIfEmailExists()"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Create password"
                    v-model="password"
                    :rules="passwordRules"
                    min="8"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <p class="mb-2 mt-2">Are you posting on behalf of a business, organization, or club? If so, enter it's name below:</p>
              <v-layout row wrap>
                <v-flex xs12 sm9 md6 class="padding-15px-right-sm-up">
                  <v-text-field class="optional"
                    label="Name of organization / business"
                    v-model="business_name"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <p class="mb-2 mt-2">Basic info about your job:</p>
              <v-layout row wrap>
                <v-flex xs12 sm9 md6 class="padding-15px-right-sm-up">
                  <v-text-field
                    v-model="job.title"
                    label="Job Title"
                    :rules="[(title) => !!(title) || 'Required']"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="job.address"
                    ref="addressField"
                    label="Address"
                    required
                    @change="setLatLongs"
                    :rules="[() => !!(job.address) || 'Required',
                             () => (!!(job.latitude) && !!(job.longitude)) || 'Invalid address. Please select a complete address from the dropdown']"
                  ></v-text-field>
                  <v-text-field
                    class="optional"
                    v-model="job.address2"
                    ref="addressField2"
                    label="Address Line 2"
                    placeholder="Apt, Suite, Bldg."
                    hide-details
                  ></v-text-field>
                  <div v-if="job.address">
                    <v-checkbox class="optional" style="margin-top: 16px;"
                      label="Is this job on a school campus?"
                      v-model="job.isUniversity"
                      hide-details
                    ></v-checkbox>
                    <v-select class="no-padding-select"
                      v-if="job.isUniversity"
                      label="Which one?"
                      v-model="job.university"
                      v-bind:items="schools"
                      autocomplete
                      hide-details
                      single-line
                    ></v-select>
                  </div>
                </v-flex>
              </v-layout>
              </v-form>

              <v-layout row wrap style="margin-top: 8px; margin-bottom: 16px;">
                <v-flex xs12 style="text-align: center;">
                  <v-btn dark class="kunvet-red-bg" @click="next(1)">Save and Continue</v-btn>
                </v-flex>
              </v-layout>
            </div>
          </v-tab-item>
          <v-tab-item>
            <!-- SECTION 2 -->
            <div class="main-cont-large">
              <div class="cust-spacer"></div>
              <v-form v-model="form2Valid" ref="form2">

              <!-- Categories -->
              <h4 class="cust-subheader">Categories</h4>
              <p>Is this a full-time or part-time job?</p>
              <v-radio-group v-model="job.type"
                class="no-padding"
                :rules="[(v) => !submit2Pressed || !!(v[0]) || 'Required']"
                required>
                <v-radio label="Full time" :value="['fulltime']" class="pt-0"></v-radio>
                <v-radio label="Part time" :value="['parttime']" class="pt-0"></v-radio>
                <v-radio label="Both" :value="['fulltime', 'parttime']" class="pt-0"></v-radio>
              </v-radio-group>

              <p>Is it also an internship or contract position? (Optional)</p>
              <v-checkbox label="internship" v-model="job.type2" value="internship"
                hide-details class="pt-0"></v-checkbox>
              <v-checkbox
                label="contract" v-model="job.type2" value="contract"
                hide-details class="pt-0 mb-3"></v-checkbox>

              <p class="mb-2">Is this job student friendly?</p>
              <!-- the cust-radio-box class makes the radio input wrap on small screens -->
              <div class="cust-radio-box">
                <v-radio-group v-model="job.studentfriendly" row required hide-details>
                    <v-radio label="Student friendly" :value="true" style="max-width: 160px;" selected></v-radio>
                    <v-radio label="Not student friendly" :value="false" style="max-width: 180px;"></v-radio>
                </v-radio-group>
              </div>

              <!-- Salary -->
              <br>
              <h4 class="cust-subheader">Salary</h4>
              <v-layout row wrap>
                <v-flex xs12 class="no-padding">
                  <div class="cust-radio-box">
                    <v-radio-group
                    v-model="salary_select"
                    row
                    :rules="requiredRules"
                    :hide-details="salary_select === 'paid'"
                    required>
                      <v-radio style="max-width: 90px;" label="Paid" value="paid"></v-radio>
                      <v-radio style="max-width: 110px;" label="Unpaid" value="unpaid"></v-radio>
                      <v-radio label="Negotiable" value="negotiable"></v-radio>
                    </v-radio-group>
                  </div>
                </v-flex>
                <v-flex xs6 sm3 md2 v-if="salary_select === 'paid'">
                  <v-text-field class="no-padding"
                    v-model="job.salary"
                    :disabled = "salary_select != 'paid'"
                    prefix="$"
                    :required = "salary_select === 'paid'"
                    :rules="[(salary) => (!!(salary/1) || salary_select != 'paid') || 'Required, must be a number']"
                    single-line
                  ></v-text-field>
                </v-flex>
                <v-flex xs6 sm3 md2 style="padding-left: 15px !important;" v-if="salary_select === 'paid'">
                  <v-select class="no-padding" style="max-width: 125px;"
                    v-model="job.pay_denomination"
                    :disabled = "salary_select != 'paid'"
                    :items="[ 'per hour', 'per week', 'per month', 'per year', 'per task' ]"
                    >
                  </v-select>
                </v-flex>
              </v-layout>

              <!-- Working hours -->
              <h4 class="cust-subheader">Working Hours <span class="optional-color">(Optional)</span></h4>
              <div class="mb-3">
                  <v-checkbox label="flexible" v-model="job.shift" value="flexible" hide-details class="pt-0"></v-checkbox>
                  <v-divider style="margin-bottom: 8px; max-width: 230px;"></v-divider>
                  <v-checkbox label="morning" v-model="job.shift" value="morning" hide-details class="pt-0"></v-checkbox>
                  <v-checkbox label="noon" v-model="job.shift" value="noon" hide-details class="pt-0"></v-checkbox>
                  <v-checkbox label="afternoon" v-model="job.shift" value="afternoon" hide-details class="pt-0"></v-checkbox>
                  <v-checkbox label="evening" v-model="job.shift" value="evening" hide-details class="pt-0"></v-checkbox>
                  <v-checkbox label="night" v-model="job.shift" value="night" hide-details class="pt-0"></v-checkbox>
              </div>

              <!-- Additional requirements -->
              <h4 class="cust-subheader">Additional requirements <span class="optional-color">(Optional)</span></h4>
              <v-layout class="additional-requirements" row wrap>
                <v-flex xs12 sm6 md5>
                  <v-select class="optional"
                    v-model="job.education"
                    label="Education"
                    v-bind:items="educationOptions">
                  </v-select>
                </v-flex>
                <v-flex xs12 sm6 md5>
                  <v-text-field class="optional"
                    name="preferred-major"
                    v-model="job.major"
                    label="Preferred major"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                  <v-select class="optional"
                    v-model="job.language"
                    label="Language"
                    v-bind:items="languages"
                    autocomplete
                    dense
                    multiple>
                  </v-select>
                </v-flex>
                <v-flex xs4 sm3>
                  <v-text-field class="optional"
                    v-model="job.age"
                    label="Age"
                    :rules="[(age) => !(age) || !!(age/1) || 'Must be a number']">
                  </v-text-field>
                </v-flex>
              </v-layout>

              <!-- Long text fields -->
              <h3 v-bind:class="{ error_h3: !description_valid }">Description</h3>
              <p class="error_p" v-if="!description_valid">Required</p>
              <vue-editor id="description" v-model="description" placeholder="300 characters maximum" :editorOptions="shortTextEditorOptions" :editorToolbar="customEditorToolbar"></vue-editor>

              <br>
              <h3 v-bind:class="{ error_h3: !experience_valid }">Required Experience / Qualifications</h3>
              <p class="error_p" v-if="!experience_valid">Required</p>
              <vue-editor id="experience" v-model="experience" placeholder="900 characters maximum" :editorOptions="longTextEditorOptions" :editorToolbar="customEditorToolbar"></vue-editor>

              <br>
              <h3 v-bind:class="{ error_h3: !responsibilities_valid }">Responsibilities</h3>
              <p class="error_p" v-if="!responsibilities_valid">Required</p>
              <vue-editor id="responsibilities" v-model="responsibilities" placeholder="900 characters maximum" :editorOptions="longTextEditorOptions" :editorToolbar="customEditorToolbar"></vue-editor>

              <!-- Pictures -->
              <br>
              <div style="display: flex">
              <h3 class="optional" style="margin: 7px 10px 6px 0;">Pictures</h3>
              <v-btn v-if="job.images.length === 0"
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
                  <v-flex xs4 md3 class="image-container" v-for="image in job.images">
                    <v-btn icon small ripple class="delete-img-btn" @click="showDeletePictureModal(image.cropped)">
                      <v-icon>cancel</v-icon>
                    </v-btn>
                    <img class="image" :src="`${serverUrl}/file/get/${image.cropped}`" alt="loading image" width="100%">
                  </v-flex>
                </v-layout>
              </v-container>
              </v-form>

              <v-layout row wrap style="margin-top: 8px; margin-bottom: 16px;">
                <v-flex xs12 style="text-align: center;">
                  <v-btn dark class="kunvet-red-bg" @click="next(2)">Save and Continue</v-btn>
                </v-flex>
              </v-layout>

            </div>
          </v-tab-item>
          <v-tab-item>
            <!-- SECTION 3 -->

          </v-tab-item>
        </v-tabs-items>

      </v-tabs>


      <div style="max-width: 500px;">
        <!-- <v-select
          label="Position Tags"
          :items="availablePositions"
          autocomplete
          multiple
          attach
        >
        </v-select> -->
        <!-- allow-overflow attach -->
        <!--<div id="test" style="width: auto; height: auto;"></div>-->
      </div>
    </div>
  </v-container>
</template>

<script>
import { VueEditor, Quill } from 'vue2-editor';
import gql from 'graphql-tag';
import VuexLS from '@/store/persist';
// import Delta from 'quill-delta';
import * as VueGoogleMaps from 'vue2-google-maps';
import Schools from '@/constants/schools';
import PicUploader from '@/components/PicUploader';
import Config from 'config';
import { degreesReduced, degreeReducedDbToString, degreeReducedStringToDb } from '@/constants/degrees';
import positions from '@/constants/positions';
import languages from '@/constants/languages';
import queries from '@/constants/queries';
import difference from 'lodash/difference';
import axios from 'axios';

Quill.register('modules/wordLimit', (quill, options) => {
  // Options!
  // wordLimit: int
  // charLimit: int
  quill.on('text-change', () => {
    const trimmedText = quill.getText().replace(/[ \r\n]$/, '');

    if (options.wordLimit) {
      const wordCount = trimmedText.split(/\s+/).length;
      if (wordCount > options.wordLimit) {
        // TODO: Do something
      }
    }
    if (options.charLimit && trimmedText.length > options.charLimit) {
      quill.deleteText(options.charLimit, quill.getLength());
    }
  });
});

const createJobMutation = gql`
  mutation ($job: CreateOneJobInput!) {
    createJob (record: $job) {
      recordId
      record {
        ${queries.FindJobRecord}
      }
    }
  }
`;
const updateJobMutation = gql`
  mutation ($id: MongoID, $job: UpdateOneJobInput!) {
    updateJob (filter: {_id: $id}, record: $job) {
      recordId
      record {
        ${queries.FindJobRecord}
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
    VueEditor,
    PicUploader,
  },
  data() {
    return {
      tab: '0',
      furthest_tab: 0,
      form1Valid: false,
      form2Valid: false,
      form3Valid: false,
      submit1Pressed: false,
      submit2Pressed: false,
      submit3Pressed: false,
      tabItems: ['About you', 'Job details', 'Review and post'],
      introDialog: true,
      serverUrl: Config.get('serverUrl'),
      // user info
      business_name: null,
      fname: null,
      lname: null,
      email: null,
      password: null,
      e1: true,
      emailExists: false,
      passwordRules: [
        v => !!v || 'Required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters',
      ],
      requiredRules: [v => !!v || 'Required'],
      job: {
        title: null,
        posted_by: null,
        address: '',
        address2: null,
        latitude: null,
        longitude: null,
        isUniversity: false,
        university: null,
        schools: Schools.schools,
        images: [],
        type: [], // fulltime, parttime
        type2: [], // internship, contract
        studentfriendly: true,
        shift: [],
        salary: null,
        pay_denomination: 'per hour',
        education: null,
        major: null,
        language: null,
        age: null,
        active: false,
      },
      id: null,
      submitted: false,
      uid: null,
      date: null,
      autocomplete: null,
      placeDetails: null,
      type_str: null,
      type_current: null,
      type2_current: null,
      salary_select: null,
      pay_denomination: 'per hour',
      description: null,
      description_valid: true,
      responsibilities: null,
      responsibilities_valid: true,
      experience: null,
      experience_valid: true,
      confirmPost: false,

      openSelectField: null,
      availablePositions: positions,
      languages: languages,
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
      customEditorToolbar: [
        ['bold', 'italic', 'underline'], // toggled buttons
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['clean'],
      ],
      deletePictureModal: {
        show: false,
        croppedID: null,
      },
      email_verified: true,
      loading: false,
      shortTextEditorOptions: {
        modules: {
          wordLimit: {
            wordLimit: false,
            charLimit: 300,
          },
        },
      },
      longTextEditorOptions: {
        modules: {
          wordLimit: {
            wordLimit: false,
            charLimit: 900,
          },
        },
      },
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
    next(n) {
      // this handles all the logic of moving from one step to the next
      this[`submit${n}Pressed`] = true;
      this.$refs[`form${n}`].validate();
      if (n === 1 && (!this.job.longitude || !this.job.latitude)) {
        this.job.addressValid = false;
      }
      if (this[`form${n}Valid`]) {
        // Form is valid
        if (n === 1) {
          this.createAccount().then(success => {
            console.log('success?', success);
            if (success) {
              this._moveToNextTab();
            }
          });
        } else {
          this._moveToNextTab();
        }
      } else {
        // Form has errors
        let target = 0;
        for (var item of this.$refs[`form${n}`].$children) {
          if (item.hasError) {
            console.log('ERROR FOUND', item);
            target = item;
            break;
          }
        }
        this.scrollToTop(target);
      }
    },
    _moveToNextTab() {
      const active = parseInt(this.tab, 10);
      if (active < 2) {
        this.tab = (active + 1).toString();
        if (this.tab > this.furthest_tab) {
          this.furthest_tab = this.tab;
        }
      }
      setTimeout(() => { this.scrollToTop(); }, 300);
    },
    isTabValid(n) {
      const displaysError = (this[`submit${(n + 1)}Pressed`] && !this[`form${(n + 1)}Valid`]);
      return !displaysError && (n <= this.furthest_tab);
    },
    isTabInvalid(n) {
      if (n > this.furthest_tab) { return false; }
      return !this.isTabValid(n);
    },
    scrollToTop(target = 0) {
      let offset = 0;
      /* 112 is the height of the navbar and tabs bar */
      if (target !== 0) { offset = -145; }
      this.$vuetify.goTo(target, { duration: 700, offset: offset, easing: 'easeInOutCubic' });
    },
    async createAccount() {
      // const headers = { emulateJSON: true };
      const data = {
        email: this.email,
        business_name: this.business_name,
        fname: this.fname,
        lname: this.lname,
        pwd: this.password,
        address: this.job.address,
        jobInfo: {
          address2: this.job.address2,
          title: this.title,
          university: this.university,
        },
      };
      var ret = false;
      this.loading = true;
      await axios.post('/auth/register2', data).then((res) => {
        this.loading = false;
        if (res.data.success) {
          ret = true;
        } else if (res.data.message === 'User already exists') {
          this.error = 'UserExists';
        } else if (res.data.message === 'Email exists but not verified') {
          this.error = 'UserExists';
        } else {
          this.error = 'ServerError';
          this.$error(res.data);
        }
      }, (error) => {
        this.error = 'ServerError';
        this.$error(error);
      });
      return ret;
    },
    checkIfEmailExists() {
      const data = { email: this.email };
      axios.post('/auth/checkIfExists', data).then((res) => {
        if (res.data.success) {
          this.emailExists = res.data.exists;
          this.$refs.emailField.validate();
        } else {
          this.$error('Could not check if email exists');
          this.emailExists = false;
        }
      }, (error) => {
        this.$error(error);
        this.emailExists = false;
      });
    },
    // old code below
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
        this.job.addressValid = false;
        return;
      }
      this.job.addressValid = true;
      this.job.address = place.formatted_address;
      this.job.latitude = place.geometry.location.lat();
      this.job.longitude = place.geometry.location.lng();
    },
    sanitizeQuillInput(text, property) {
      if (text == null || typeof text !== 'string') {
        this[`${property}_valid`] = false;
        return false;
      }
      const newtext = text.replace(/<p>|<\/p>|<br>|<h1>|<\/h1>/g, '');
      if (newtext.length < 1) {
        this[`${property}_valid`] = false;
        return false;
      }
      this[`${property}_valid`] = true;

      return true;
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
      if (!this.sanitizeQuillInput(this.description, 'description')) { this.valid = false; }
      if (!this.sanitizeQuillInput(this.responsibilities, 'responsibilities')) { this.valid = false; }
      if (!this.sanitizeQuillInput(this.experience, 'experience')) { this.valid = false; }
      if (this.job.longitude == null || this.job.latitude == null) { this.valid = false; }
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
            this.$router.push({ path: `/create-job/${recordId}` });
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
        posted_by: this.job.posted_by,
        active: this.active,
        title: this.title,
        date: doesJobActivelyExist ? this.date : Date.now(),
        description: this.description,
        address: this.job.address,
        address2: this.job.address2,
        university: this.isUniversity ? this.university : null,
        latitude: this.job.latitude,
        longitude: this.job.longitude,
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
            ${queries.FindJobRecord}
          }
        }`),
        variables: {
          user: this.user_id,
          id: _id,
        },
      }).then((data) => {
        const job = data.data.findJob;
        if (job) {
          this.title = job.title;
          this.active = job.active;
          this.date = job.date;
          this.job.address = job.address;
          this.job.address2 = job.address2;
          this.university = job.university;
          if (job.university) {
            this.isUniversity = true;
          }
          this.job.latitude = job.latitude;
          this.job.longitude = job.longitude;
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
    checkIfEmailVerified() {
      if (this.uid) {
        this.$apollo.query({
          query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
                _id
                email_verified
            }
          }`),
          variables: {
            uid: this.uid,
          },
        }).then((data) => {
          const res = data.data.findAccount;
          this.email_verified = res.email_verified;
        }).catch(this.$error);
      }
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
        this.business_name = res.business_name;
        // this.bdata.display_email = res.email;
        // this.bdata.address = res.address;
        // this.bdata.website = res.website;
        // this.bdata.phone_number = res.phone_number;
        // this.bdata.biography = res.biography;
        // this.bdata.profile_pic = res.profile_pic;
        this.job.posted_by = res.business_name;
        this.job.address = res.address;
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
    setLatLongs() {
      setTimeout(() => {
        if (this.geocoder && this.job.address !== this.prevAutocompleteAddress) {
          this.geocoder.geocode({ 'address': this.job.address }, (results, status) => {
            if (status === 'OK' && results.length === 1) {
              // console.log('res', results);
              this.job.latitude = results[0].geometry.location.lat();
              this.job.longitude = results[0].geometry.location.lng();
              this.job.addressValid = true;
              this.$refs.addressField.validate();
            } else {
              // console.log('Geocode was not successful for the following reason:', status);
              this.job.latitude = null;
              this.job.longitude = null;
              this.job.addressValid = false;
              this.$refs.addressField.validate();
            }
          });
        }
      }, 500);
    },
  },
  activated() {
    if (process.env.NODE_ENV === 'production') {
      this.$router.push('/create-job');
      return;
    }
    this.resetData();
    if (this.$store.state.acct === 2 && this.$store.state.businessID) {
      if (this.$store.state.bdata) {
        if (this.$store.state.bdata.business_name) {
          this.job.posted_by = this.$store.state.bdata.business_name;
        }
        // Autofill address
        if (this.$store.state.bdata.address && !this.$route.params.id) {
          this.job.address = this.$store.state.bdata.address;
        }
      } else {
        // no business data in localstorage
        this.fetchBusinessData(this.$store.state.businessID);
      }

      this.uid = this.$store.state.userID;
      if (this.$route.params.id) {
        this.getEditJobData(this.$route.params.id);
      }
      this.checkIfEmailVerified();
    } else if (this.$store.state.acct === 1 && this.$store.state.userdata) {
      this.job.posted_by = `${this.$store.state.userdata.firstname} ${this.$store.state.userdata.lastname}`;
      this.uid = this.$store.state.userID;
      if (this.$route.params.id) {
        this.getEditJobData(this.$route.params.id);
      }
      this.checkIfEmailVerified();
    } else {
      VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
        if (data.acct === 2 && data.businessID) {
          if (data.bdata && data.bdata.business_name) {
            this.job.posted_by = data.bdata.business_name;
          } else {
            this.fetchBusinessData(data.businessID);
          }
          this.uid = data.userID;
          if (this.$route.params.id) {
            this.getEditJobData(this.$route.params.id);
          }
          this.checkIfEmailVerified();
        } else if (data.acct === 1) {
          this.job.posted_by = `${data.userdata.firstname} ${data.userdata.lastname}`;
          if (this.$route.params.id) {
            this.getEditJobData(this.$route.params.id);
          }
          this.checkIfEmailVerified();
        } else {
          // not logged in
          // this.$router.push('/login');
        }
      });
    }

    VueGoogleMaps.loaded.then(() => {
      // HACK
      const input = this.$refs.addressField.$el.getElementsByTagName('input')[0];
      input.setAttribute('placeholder', '');
      this.autocomplete = new window.google.maps.places.Autocomplete(input);
      this.geocoder = new window.google.maps.Geocoder();
      this.autocomplete.addListener('place_changed', () => {
        this.prevAutocompleteAddress = this.job.address;
        this.setPlace(this.autocomplete.getPlace());
      });
      if (this.job.address) {
        this.setLatLongs();
      }
    });
  },
};
</script>
