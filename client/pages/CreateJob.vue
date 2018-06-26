<style>
.create-job-container .optional label::after {
  content: ' - Optional';
  font-style: italic;
  /* opacity: 0.6; */
  color: #979797;
}
.create-job-container .tabs__bar {
  position: fixed;
  top: 64px;
  z-index: 5;
  width: calc(100% - 32px);
}
.create-job-container .input-group {
  padding-top: 12px;
}
.create-job-container .tabs__items .cust-spacer {
  height: 50px;
  width: 100%;
}
.create-job-container .input-group--text-field label {
  top: 12px;
}
.create-job-container .input-group--required label:after {
  content: '';
}
.create-job-container .no-padding-select {
  padding-top: 0 !important;
}
.create-job-container .no-padding-select label {
  top: 0 !important;
}
@media (max-width: 600px) {
  .create-job-container .tabs__bar {
    top: 56px;
  }
  .create-job-container .tabs__items .cust-spacer {
    height: 40px;
  }
}
@media (min-width: 961px) {
  .create-job-container .tabs__bar {
    width: 960px;
    margin-left: calc(50% - 496px);
  }
}
</style>

<template>
  <v-container fluid class="create-job-container">
      <v-tabs
        slot="extension"
        v-model="tab"
        grow
      >
        <v-tabs-slider color="grey"></v-tabs-slider>
        <v-tab v-for="item in tabItems" :key="item">
          {{ item }}
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
                    v-model="email"
                    :rules="emailRules"
                    type="email"
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
                    :rules="requiredRules"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <p class="mb-2 mt-2">Basic info about your job:</p>
              <v-layout row wrap>
                <v-flex xs12 sm9 md6 class="padding-15px-right-sm-up">
                  <v-text-field
                    v-model="title"
                    label="Job Title"
                    :rules="[(title) => !!(title) || 'Required']"
                    required
                  ></v-text-field>
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
                    label="Address Line 2"
                    placeholder="Apt, Suite, Bldg."
                    hide-details
                  ></v-text-field>
                  <v-checkbox class="optional" style="margin-top: 16px;"
                    label="Is this job on a school campus?"
                    v-model="isUniversity"
                    hide-details
                  ></v-checkbox>
                  <v-select class="no-padding-select"
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
              </v-form>

              <v-layout row wrap>
                <v-flex xs12 style="text-align: center;">
                  <v-btn dark class="kunvet-red-bg" @click="next(1)">Continue</v-btn>
                </v-flex>
              </v-layout>
            </div>
          </v-tab-item>
          <v-tab-item>
            <!-- SECTION 2 -->
            <div class="main-cont-large">
              <div class="cust-spacer"></div>

              <v-layout row wrap>
                <v-flex xs12 style="text-align: center;">
                  <v-btn dark class="kunvet-red-bg" @click="next(2)">Continue</v-btn>
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
      <div style="width: auto; height: 300px;"></div>
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
import queries from '@/constants/queries';
import difference from 'lodash/difference';
// import axios from 'axios';

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
      form1Valid: false,
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
      emailRules: [
        v => !!v || 'Email is required',
        v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid email format',
      ],
      passwordRules: [
        v => !!v || 'Required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters',
      ],
      requiredRules: [v => !!v || 'Required'],
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
      description_valid: true,
      responsibilities: null,
      responsibilities_valid: true,
      experience: null,
      experience_valid: true,
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
    next(tabnum) {
      console.log(tabnum);
      const active = parseInt(this.tab, 10);
      this.tab = (active < 2 ? active + 1 : 0).toString();
    },
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
    setLatLongs() {
      setTimeout(() => {
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
      }, 500);
    },
  },
  activated() {
    if (process.env.NODE_ENV === 'production') {
      this.$router.push('/createnewjob');
    }
    this.resetData();
    if (this.$store.state.acct === 2 && this.$store.state.businessID) {
      if (this.$store.state.bdata) {
        if (this.$store.state.bdata.business_name) {
          this.posted_by = this.$store.state.bdata.business_name;
        }
        // Autofill address
        if (this.$store.state.bdata.address && !this.$route.params.id) {
          this.address = this.$store.state.bdata.address;
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
      this.posted_by = `${this.$store.state.userdata.firstname} ${this.$store.state.userdata.lastname}`;
      this.uid = this.$store.state.userID;
      if (this.$route.params.id) {
        this.getEditJobData(this.$route.params.id);
      }
      this.checkIfEmailVerified();
    } else {
      VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
        if (data.acct === 2 && data.businessID) {
          if (data.bdata && data.bdata.business_name) {
            this.posted_by = data.bdata.business_name;
          } else {
            this.fetchBusinessData(data.businessID);
          }
          this.uid = data.userID;
          if (this.$route.params.id) {
            this.getEditJobData(this.$route.params.id);
          }
          this.checkIfEmailVerified();
        } else if (data.acct === 1) {
          this.posted_by = `${data.userdata.firstname} ${data.userdata.lastname}`;
          if (this.$route.params.id) {
            this.getEditJobData(this.$route.params.id);
          }
          this.checkIfEmailVerified();
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
      this.geocoder = new window.google.maps.Geocoder();
      this.autocomplete.addListener('place_changed', () => {
        this.prevAutocompleteAddress = this.address;
        this.setPlace(this.autocomplete.getPlace());
      });
      if (this.address) {
        this.setLatLongs();
      }
    });
  },
};
</script>
