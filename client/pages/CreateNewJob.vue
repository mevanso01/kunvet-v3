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
.createnewjob-container .optional label,
.createnewjob-container .optional i,
.createnewjob-container .optional .input-group__input {
  color: #02bbd6 !important;
}
.createnewjob-container .optional.input-group:not(.input-group--error) .input-group__details:before,
.createnewjob-container .optional.input-group--text-field .input-group__details:before {
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
    <div class="main-cont-large">
      <section class="no-padding-xs" style="padding-top: 10px;">
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
              :rules="[() => !!(address) || !submitted || 'Required',
                       () => !!(latitude) && !!(longitude) || !submitted || 'Invalid address']"
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
        <h3 v-bind:class="{ 'error_h3_2': submitted && shift.length <= 0 }">Working Hours</h3>

        <div class="multi-checkbox work-hours">
            <v-checkbox style="max-width: 110px;"
              label="morning" v-model="shift" value="morning"
              v-bind:class="{ 'input-group--error': submitted && shift.length <= 0 }"
              required></v-checkbox>
            <v-checkbox style="max-width: 85px;" label="noon" v-model="shift" value="noon"
              v-bind:class="{ 'input-group--error': submitted && shift.length <= 0 }"></v-checkbox>
            <v-checkbox style="max-width: 115px;" label="afternoon" v-model="shift" value="afternoon"
              v-bind:class="{ 'input-group--error': submitted && shift.length <= 0 }"></v-checkbox>
            <v-checkbox style="max-width: 100px;" label="evening" v-model="shift" value="evening"
              v-bind:class="{ 'input-group--error': submitted && shift.length <= 0 }"></v-checkbox>
            <v-checkbox label="night" v-model="shift" value="night"
              v-bind:class="{ 'input-group--error': submitted && shift.length <= 0 }"></v-checkbox>
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
              :items="[ 'per hour', 'per month', 'Annually' ]"
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
        <h3 v-bind:class="{ error_h3: !description_valid }">Description</h3>
        <p class="error_p" v-if="!description_valid">Required</p>
        <vue-editor id="description" v-model="description" :editorToolbar="customEditorToolbar"></vue-editor>

        <br>
        <h3 v-bind:class="{ error_h3: !responsibilities_valid }">Responsibilities</h3>
        <p class="error_p" v-if="!responsibilities_valid">Required</p>
        <vue-editor id="responsibilities" v-model="responsibilities" :editorToolbar="customEditorToolbar"></vue-editor>

        <br>
        <h3 v-bind:class="{ error_h3: !experience_valid }">Required Experience/Qualifications</h3>
        <p class="error_p" v-if="!experience_valid">Required</p>
        <vue-editor id="experience" v-model="experience" :editorToolbar="customEditorToolbar"></vue-editor>
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
        <v-select class="no-padding-select"
          label="Type here..."
          v-bind:items="tags"
          v-model="selectedTags"
          autocomplete
          deletable-chips
          multiple
          single-line
          bottom
          required
          :rules="[(v) => (v.length > 0) || 'Required']"
        ></v-select>
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

        <v-dialog class="no-border-radius" v-model="confirmPost">
          <v-card flat class="no-border-radius" style="max-width: 350px;">
            <v-card-title>
              <div class="headline">All seems good, you can now post your job!</div>
              <br>
              <p>(You can still edit certain parts of your job even when it's active)</p>
            </v-card-title>
            <div class="bottom-dialog-button" @click="saveAndPost">
              Save and Post
            </div>
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
            Saved! <router-link :to="`/jobdetail/${id}`">View job</router-link>
          </p>
        </v-alert>

      </section>
    </div>
  </v-container>
</template>
<script>
import { VueEditor } from 'vue2-editor';
import gql from 'graphql-tag';
import VuexLS from '@/store/persist';
import * as VueGoogleMaps from 'vue2-google-maps';
import Schools from '@/constants/schools';
import PicUploader from '@/components/PicUploader';
import Config from 'config';
import { degreesReduced, degreeReducedDbToString, degreeReducedStringToDb } from '@/constants/degrees';
import positions from '@/constants/positions';

const createJobMutation = gql`
  mutation ($job: CreateOneJobInput!) {
    createJob (record: $job) {
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
        language
        experience
        responsibilities
        notes
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
        language
        experience
        responsibilities
        notes
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
      _id
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
      language
      experience
      responsibilities
      notes
      images {
        original
        cropped
      }
      position_tags
    }
  }
`;
const findJobsQuery = gql`
    query($userId: MongoID, $businessId: MongoID) {
      findJobs(filter: { user_id: $userId, business_id: $businessId }) {
      _id
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
      language
      experience
      responsibilities
      notes
      images {
        original
        cropped
      }
      position_tags
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
      serverUrl: Config.get('serverUrl'),
      id: null,
      valid: false,
      submitted: false,
      posted_by: null,
      uid: null,
      title: '',
      date: null,
      address: '',
      autocomplete: null,
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
      description_valid: true,
      responsibilities: null,
      responsibilities_valid: true,
      experience: null,
      experience_valid: true,
      notes: '',
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
      tags: positions,
      selectedTags: [],
      picUploaderDialog: false,
      successAlert: false,
      showInvalidMessage: false,
      educationOptions: Object.keys(degreesReduced).map(key => degreesReduced[key]),
      howDidYouHearItems: [
        'Flyers', 'Word of mouth', 'Email', 'Instagram', 'Wechat', 'Other',
      ],
      customEditorToolbar: [
        ['bold', 'italic', 'underline'],        // toggled buttons
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ],
      deletePictureModal: {
        show: false,
        croppedID: null,
      },
      email_verified: true,
    };
  },
  methods: {
    test(e) {
      console.log(e);
    },
    setPlace(place) {
      if (!place.geometry) {
        return;
      }
      this.address = place.formatted_address;
      this.latitude = place.geometry.location.lat();
      this.longitude = place.geometry.location.lng();
    },
    sanitizeQuillInput(text, property) {
      if (text == null || typeof text !== 'string') {
        this[`${property}_valid`] = false;
        return false;
      }
      const newtext = text.replace(/<p>|<\/p>|<br>|<h1>|<\/h1>/g, '');
      console.log('TEXT', newtext);
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
      if (this.shift.length <= 0) { this.valid = false; }
      if (this.longitude == null || this.latitude == null) { this.valid = false; }
      console.log(this.valid);
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
      this._save();
    },
    saveAndPost() {
      this.validateBeforePosting();
      if (this.valid) {
        this.active = true;
        this._save(true);
      } else {
        this.confirmPost = false;
        this.saveForLater();
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
          refetchQueries: [{
            query: findJobQuery,
            variables: { id: id },
          }],
        }).then((res) => {
          const recordId = res.data.updateJob.recordId;
          if (viewJob) {
            this.$router.push(`/jobdetail/${recordId}`);
          } else {
            this.id = recordId;
            this.successAlert = true;
          }
        }).catch(console.error);
      } else {
        const job = this.createJobArray();
        this.$apollo.mutate({
          mutation: createJobMutation,
          variables: {
            job: job,
          },
          refetchQueries: [{
            query: findJobsQuery,
            variables: {
              userId: this.$store.state.userID,
              businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
            },
          }],
        }).then((res) => {
          const recordId = res.data.createJob.recordId;
          if (!viewJob) {
            this.$router.push({ path: `/createnewjob/${recordId}` });
            this.id = recordId;
            this.successAlert = true;
          } else {
            this.$router.push(`/jobdetail/${recordId}`);
          }
        }).catch(console.error);
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
        notes: this.notes,
        images: this.images,
        position_tags: this.selectedTags,
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
            notes
            images {
              original
              cropped
            }
            position_tags
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
          this.address = job.address;
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
          for (const image of job.images) {
            this.images.push({ original: image.original, cropped: image.cropped });
          }
          if (job.position_tags) {
            this.selectedTags = job.position_tags.concat();
          }
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    picsUploaded(fileIds) {
      this.picUploaderDialog = false;
      this.images.push(fileIds);
      console.log(this.images);
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
        }).catch(console.error);
      }
    },
  },
  created() {
    if (this.$store.state.acct === 2) {
      this.posted_by = this.$store.state.bdata.business_name;
      this.uid = this.$store.state.userID;
      if (this.$route.params.id) {
        this.getEditJobData(this.$route.params.id);
      }
    } else if (this.$store.state.acct === 1) {
      this.posted_by = `${this.$store.state.userdata.firstname} ${this.$store.state.userdata.lastname}`;
      this.uid = this.$store.state.userID;
      if (this.$route.params.id) {
        this.getEditJobData(this.$route.params.id);
      }
    } else {
      VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
        if (data.acct === 2) {
          this.posted_by = data.bdata.business_name;
          this.uid = data.userID;
          if (this.$route.params.id) {
            this.getEditJobData(this.$route.params.id);
          }
        } else if (data.acct === 1) {
          this.posted_by = `${data.userdata.firstname} ${data.userdata.lastname}`;
          if (this.$route.params.id) {
            this.getEditJobData(this.$route.params.id);
          }
        } else {
          // not logged in
          this.$router.push('/login');
        }
      });
    }

    VueGoogleMaps.loaded.then(() => {
      // HACK
      const input = this.$refs.addressField.$el.getElementsByTagName('input')[0];
      input.setAttribute('placeholder', '');
      this.autocomplete = new window.google.maps.places.Autocomplete(input);
      this.autocomplete.addListener('place_changed', () => {
        this.setPlace(this.autocomplete.getPlace());
      });
    });
  },
};
</script>
