<style lang="scss">
  @import "../css/_createJobStyles";
</style>
<template>
  <v-container fluid class="edit-job-container">
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
        <p>Check your inbox. If you entered your email correctly you should've received a verification email from us</p>
      </section>
      <section v-show="email_verified" class="no-padding-xs" style="padding-top: 10px;">
        <div style="width: 100%; height: 50px;">
          <div class="float-left">
            <h2 style="margin-bottom: 0; line-height:48px;">
              <span v-if="jobId">Edit job</span>
              <span v-else>Create new job</span>
            </h2>
          </div>
          <div class="float-right">
            <v-btn flat @click="saveForLater" v-if="!job.active">Save for later</v-btn>
            <v-btn v-else style="margin-left: 0;" @click="updateActiveJob">Save</v-btn>
          </div>
        </div>
        <v-divider></v-divider>
        <br>
        <h2>Posting as {{ job.posted_by }}</h2>
        <br>

        <v-form v-model="valid" ref="form">

        <h3>Title and Address</h3>

        <v-layout row wrap>
          <v-flex xs12 sm9 md6>
            <v-text-field
              v-model="job.title"
              label="Job Title"
              :rules="[(v) => !!(v) || 'Required']"
              required
            ></v-text-field>
            <v-text-field
              v-model="job.address"
              ref="addressField"
              label="Address"
              required
              @change="setLatLongs"
              :rules="[() => !!(job.address) || !submitted || 'Required',
                       () => (!!(job.latitude) && !!(job.longitude)) || addressValid || 'Invalid address']"
            ></v-text-field>
            <v-text-field
              class="optional"
              v-model="job.address2"
              ref="addressField2"
              placeholder="Apt, Suite, Bldg. (Optional)"
              label="Address Line 2"
            ></v-text-field>
            <v-checkbox class="optional mt-1"
              label="Is this job on a school campus?"
              v-model="isUniversity"
              hide-details
            ></v-checkbox>
            <v-select class="mt-0"
              v-if="isUniversity"
              label="Which one?"
              v-model="job.university"
              v-bind:items="schools"
              autocomplete
              hide-details
              single-line
            ></v-select>
          </v-flex>
        </v-layout>

        <!-- Categories -->
        <br>
        <h4 class="cust-subheader">Categories</h4>
        <v-radio-group v-model="job.type"
          class="no-padding"
          :rules="[(v) => !!(v) || 'Required']"
          required>
          <v-radio label="Full time" value="fulltime" class="pt-0"></v-radio>
          <v-radio label="Part time" value="parttime" class="pt-0"></v-radio>
          <v-radio label="Both" value="both" class="pt-0"></v-radio>
        </v-radio-group>

        <v-checkbox label="internship" v-model="job.type2" value="internship"
          hide-details class="pt-0"></v-checkbox>
        <v-checkbox
          label="contract" v-model="job.type2" value="contract"
          hide-details class="pt-0 mt-1 mb-3"></v-checkbox>
        <!-- the cust-radio-box class makes the radio input wrap on small screens -->
        <div class="cust-radio-box">
          <v-radio-group v-model="job.studentfriendly" row required hide-details class="mt-0">
              <v-radio label="Student friendly" :value="true" style="max-width: 160px;" selected></v-radio>
              <v-radio label="Not student friendly" :value="false" style="max-width: 180px;"></v-radio>
          </v-radio-group>
        </div>

        <br>
        <h4 class="cust-subheader">Salary</h4>
        <v-layout row wrap>
          <v-flex xs12 class="no-padding">
            <div class="cust-radio-box">
              <v-radio-group class="mt-0"
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
            <v-text-field class="pa-0 ma-0"
              v-model="job.salary"
              :disabled = "salary_select !== 'paid'"
              prefix="$"
              required
              :rules="[(salary) => _isNumber(salary) || salary_select !== 'paid' || 'Required, must be a number']"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm3 md2 style="padding-left: 15px !important;" v-if="salary_select === 'paid'">
            <v-select class="pa-0 ma-0" style="max-width: 125px;"
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
            <v-checkbox label="flexible" v-model="job.shift" value="flexible" hide-details class="pt-0 mt-1"></v-checkbox>
            <v-divider style="margin-bottom: 6px; margin-top: 3px; max-width: 230px;"></v-divider>
            <v-checkbox label="morning" v-model="job.shift" value="morning" hide-details class="pt-0 mt-1"></v-checkbox>
            <v-checkbox label="noon" v-model="job.shift" value="noon" hide-details class="pt-0 mt-1"></v-checkbox>
            <v-checkbox label="afternoon" v-model="job.shift" value="afternoon" hide-details class="pt-0 mt-1"></v-checkbox>
            <v-checkbox label="evening" v-model="job.shift" value="evening" hide-details class="pt-0 mt-1"></v-checkbox>
            <v-checkbox label="night" v-model="job.shift" value="night" hide-details class="pt-0 mt-1"></v-checkbox>
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
            <v-autocomplete class="optional"
              v-model="job.language"
              label="Language"
              v-bind:items="languages"
              attach
              dense>
            </v-autocomplete>
          </v-flex>
          <v-flex xs4 sm3 lg2>
            <v-text-field class="optional"
              v-model="job.age"
              label="Age"
              :rules="[(age) => !(age) || _isNumber(age) || 'Must be a number']">
            </v-text-field>
          </v-flex>
        </v-layout>

        <!-- Long text fields -->
        <QuillEditor v-model="job.description" title="Description" id="editor1" required></QuillEditor>

        <QuillEditor v-model="job.experience" title="Required Experience" id="editor2" required
          placeholder="900 characters maximum" :charLimit="900"></QuillEditor>

        <QuillEditor v-model="job.responsibilities" title="Responsibilities" id="editor3" required
          placeholder="900 characters maximum" :charLimit="900"></QuillEditor>

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

        <v-dialog v-model="picUploaderDialog">
          <PicUploader @uploaded="picUploaded" @cancel="picUploaderDialog = false"/>
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

        <h3 style="margin-bottom: 5px;">Position tags</h3>
        <p>Please select at least one category that is relevant to this job</p>

        <v-layout row wrap>
          <v-flex xs12 sm9 md6 class="no-padding">
            <v-autocomplete class="mt-0"
              :items="availablePositions"
              v-model="job.position_tags"
              multiple
              attach
              required
              placeholder="Select one or more..."
              :rules="[(v) => !submitted || (v && v.length > 0) || 'required']"
              >
            </v-autocomplete>
          </v-flex>
        </v-layout>

        <div style="margin-top: 1em; margin-bottom: 5px;">
          <h3 style="display: inline;">Application options</h3>
        </div>
        <p>The applicant's info and resume will be sent to your email when they apply.<br>
           You can also browse through all your applicants in the applicants page.</p>
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
          <v-textarea
            v-model="notes"
            style="padding: 0 2px;"
            class="optional mt-0"
            placeholder="e.g. Please walk-in from 11 - 2pm for interviews"
            hide-details
            rows=1
          ></v-textarea>
        </div>
        </v-form>

        <br>
        <v-layout v-if="!job.active">
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
            Saved! <router-link :to="`/job/${jobId}`">View job</router-link>
          </p>
        </v-alert>

      </section>
    </div>
  </v-container>
</template>
<script>
import gql from 'graphql-tag';
import * as VueGoogleMaps from 'vue2-google-maps';
import Schools from '@/constants/schools';
import PicUploader from '@/components/PicUploader';
import Config from 'config';
import { degreesReduced, degreeReducedDbToString, degreeReducedStringToDb } from '@/constants/degrees';
import positions from '@/constants/positions';
import languages from '@/constants/languages';
import queries from '@/constants/queries';
import difference from 'lodash/difference';
import userDataProvider from '@/userDataProvider';
import QuillEditor from '@/components/QuillEditor';
// import axios from 'axios';

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
    PicUploader,
    QuillEditor,
  },
  data() {
    return {
      introDialog: false,
      serverUrl: Config.get('serverUrl'),
      jobId: null,
      orgId: null,
      valid: false,
      submitted: false,
      job: {
        title: null,
        posted_by: null,
        address: '',
        address2: null,
        latitude: null,
        longitude: null,
        university: null,
        images: [],
        type: null, // string: fulltime, parttime, both
        type2: [], // internship, contract
        studentfriendly: true,
        shift: [],
        salary: null,
        pay_denomination: 'per hour',
        education: null,
        major: null,
        language: null,
        age: null,
        description: null,
        experience: null,
        responsibilities: null,
        active: false,
        date: null,
        position_tags: [],
      },
      requiredRules: [v => !!v || 'Required'],
      uid: null,
      salary_select: null,
      autocomplete: null,
      placeDetails: null,
      type_str: null,
      type_current: null,
      confirmPost: false,
      isUniversity: false,
      howDidYouHear: null,
      schools: Schools.schools,
      languages: languages,
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
        'Flyers & posters', 'Social media', 'Word of mouth', 'Email campaign', 'Other',
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
    _isNumber(val) {
      if (typeof val === 'string') {
        if (!parseFloat(val)) { return false; }
        const allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ','];
        for (var i = 0; i < val.length; i++) {
          var char = val.charAt(i);
          if (allowedChars.indexOf(char) === -1) { return false; }
        }
        return true;
      }
      return typeof val === 'number';
    },
    _jobType() {
      if (this.job.type === 'both') {
        return ['fulltime', 'parttime'];
      } else if (this.job.type) {
        return [this.job.type];
      }
      return [];
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
      this.job.address = place.formatted_address;
      this.job.latitude = place.geometry.location.lat();
      this.job.longitude = place.geometry.location.lng();
    },
    setLatLongs() {
      setTimeout(() => {
        if (this.geocoder && this.job.address !== this.prevAutocompleteAddress) {
          this.geocoder.geocode({ 'address': this.job.address }, (results, status) => {
            if (status === 'OK' && results.length === 1) {
              // console.log('res', results);
              this.job.latitude = results[0].geometry.location.lat();
              this.job.longitude = results[0].geometry.location.lng();
              this.addressValid = true;
              this.$refs.addressField.validate();
            } else {
              // console.log('Geocode was not successful for the following reason:', status);
              this.job.latitude = null;
              this.job.longitude = null;
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
    scrollToTop(target = 0) {
      let offset = 0;
      /* 112 is the height of the navbar and tabs bar */
      if (target !== 0) { offset = -145; }
      this.$vuetify.goTo(target, { duration: 700, offset: offset, easing: 'easeInOutCubic' });
    },
    validateBeforePosting(showDialog = false) {
      this.submitted = true;
      const f = this.$refs.form.validate();
      this.valid = f; // wierd workaround?
      if (!this.valid) {
        for (var item of this.$refs.form.$children) {
          if (item.hasError) {
            this.scrollToTop(item);
            break;
          }
        }
      }
      if (this.job.longitude == null || this.job.latitude == null) {
        this.addressValid = false;
        this.valid = false;
      }
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
      this.job.active = false;
      this.loading = true;
      this._save();
    },
    saveAndPost() {
      this.validateBeforePosting();
      if (!this.loading) {
        if (this.valid) {
          this.job.active = true;
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
        this.job.active = true;
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
            this.jobId = recordId;
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
            this.jobId = recordId;
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
      const doesJobActivelyExist = this.job.active;
      const job = {
        user_id: this.uid,
        business_id: this.orgId,
        posted_by: this.job.posted_by,
        active: this.job.active,
        title: this.job.title,
        date: doesJobActivelyExist ? this.job.date : Date.now(),
        address: this.job.address,
        address2: this.job.address2,
        university: this.isUniversity ? this.university : null,
        latitude: this.job.latitude,
        longitude: this.job.longitude,
        type: this._jobType(),
        type2: this.job.type2,
        studentfriendly: this.job.studentfriendly,
        shift: this.job.shift === [] ? null : this.job.shift,
        age: this.job.age ? parseInt(this.job.age, 10) : null,
        pay_type: this.salary_select === null ? 'none' : this.salary_select,
        salary: this.salary_select === 'paid' ? parseInt(this.job.salary, 10) : null,
        pay_denomination: this.salary_select === 'paid' ? this.job.pay_denomination : null,
        education: this.job.education ? degreeReducedStringToDb(this.job.education) : 'None',
        preferred_major: this.job.major,
        language: this.job.language,
        description: this.job.description,
        experience: this.job.experience,
        responsibilities: this.job.responsibilities,
        apply_method: this.applyMethod,
        notes: this.notes,
        gform_link: this.gformLink,
        images: this.job.images,
        position_tags: this.job.position_tags,
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
          user: this.uid,
          id: _id,
        },
      }).then((data) => {
        const job = data.data.findJob;
        if (job) {
          this.jobId = _id;
          if (job.business_id) {
            this.orgId = job.business_id;
          }
          this.job.posted_by = job.posted_by;
          this.job.title = job.title;
          this.job.active = job.active;
          this.job.date = job.date;
          this.job.address = job.address;
          this.job.address2 = job.address2;
          this.job.university = job.university;
          if (job.university) {
            this.isUniversity = true;
          }
          this.job.latitude = job.latitude;
          this.job.longitude = job.longitude;
          this.job.education = job.education ? degreeReducedDbToString(job.education) : null;
          if (job.type) {
            if (job.type.length === 2) {
              this.job.type = 'both';
            } else {
              this.job.type = job.type[0];
            }
          } else {
            this.job.type = null;
          }
          this.job.type2 = job.type2 ? job.type2.concat() : [];
          this.job.studentfriendly = job.studentfriendly;
          this.job.shift = job.shift ? job.shift : [];
          if (job.pay_type && job.pay_type !== 'none') {
            this.salary_select = job.pay_type;
            this.job.salary = job.salary;
          }
          this.job.major = job.preferred_major;
          this.job.age = job.age;
          this.job.language = job.language ? job.language : null;

          this.job.description = job.description ? job.description : null;
          this.job.experience = job.experience ? job.experience : null;
          this.job.responsibilities = job.responsibilities ? job.responsibilities : null;

          this.job.position_tags = job.position_tags ? job.position_tags.concat() : [];
          if (job.gform_link) {
            this.gformLink = job.gform_link;
            this.useGForm = true;
          }
          this.job.images = job.images.concat();
          if (job.position_tags) {
            this.selectedPositions = job.position_tags.concat();
          }
        }
      }).catch((error) => {
        this.$error(error);
      });
    },
    picUploaded(fileId) {
      this.picUploaderDialog = false;
      this.job.images.push({ original: null, cropped: fileId });
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
      this.job.images = this.job.images.filter(({ cropped }) => cropped !== this.deletePictureModal.croppedID);
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
        this.orgId = id;
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
    if (!this.$route.params.id) {
      this.$router.push('/createjob');
      return;
    }
    this.jobId = this.$route.params.id;
    if (this.$store.state.userID) {
      this.uid = this.$store.state.userID;
      this.getEditJobData(this.$route.params.id);
    } else {
      userDataProvider.getUserData().then(data => {
        if (data.acct === 0) {
          this.$store.commit({ type: 'setAcctID', id: null }); // reset userID to prevent infinite redirect loop
          this.$router.push('/login');
        } else {
          this.uid = data.uid;
          this.email_verified = data.userdata.email_verified;
          this.getEditJobData(this.$route.params.id);
        }
      });
    }
    VueGoogleMaps.loaded.then(() => {
      const input = this.$refs.addressField.$el.getElementsByTagName('input')[0];
      input.setAttribute('placeholder', '');
      this.autocomplete = new window.google.maps.places.Autocomplete(input);
      this.geocoder = new window.google.maps.Geocoder();
      // this.placeDetails =  new window.google.maps.places.details;
      this.autocomplete.addListener('place_changed', () => {
        this.setPlace(this.autocomplete.getPlace());
      });
      if (this.job.address && !(this.job.latitude || this.job.longitude)) {
        this.setLatLongs();
      }
    });
  },
};
</script>
