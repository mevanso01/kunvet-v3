<style>
.acct-page-container__add-major {
  margin-left: 40px !important;
}
.acct-page-container__select-degree .input-group__details::before {
  background-color: transparent !important;
}
</style>
<template>
  <v-container fluid class="acct-page-container white-bg">
    <div class="main-cont-large">
      <section style="padding: 0; margin: 15px; width: auto;">
        <v-layout row wrap style="padding-bottom: 15px">
          <v-flex xs12 sm8>
            <v-layout row wrap>
              <v-flex xs12 class="acct-name-header-container">
                <h1 class="acct-name-header-container__name">
                  {{ userdata.firstname }} {{ userdata.lastname }}
                </h1>
                <i
                  class="fa fa-edit acct-name-header-container__edit-icon"
                  @click="createEditNameModal(userdata.firstname, userdata.lastname)"
                />
              </v-flex>
              <v-flex xs12 sm10 class="no-padding">
                <v-list>
                  <v-list-tile v-if="!userdata.school" class="cust-tile-2 grey-color">
                    <v-list-tile class="cust-tile-1">
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    </v-list-tile>
                    <v-list-tile-content>
                      <v-layout class="acct-page-container__input-field-layout">
                        <v-flex xs9 class="no-padding">
                          <v-text-field
                            v-model="updateSchool"
                            class="no-padding no-underline"
                            name="input-1-3"
                            label="Add School Info"
                            single-line
                            @keyup.enter="saveSchool"
                          />
                        </v-flex>
                        <v-flex xs3 v-show="updateSchool" class="no-padding">
                          <v-btn small center class="cust-btn-1" @click="saveSchool">
                            Save
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-if="userdata.school" class="cust-tile-2">
                    <v-list-tile class="cust-tile-1">
                      <img
                        :src="svgs.accountSchool"
                        class="acct-page-container__display-text-icon"
                      />
                    </v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        {{ userdata.school }}
                        <i
                          class="fa fa-edit acct-page-container__edit-icon"
                          @click="createEditModal('school', userdata.school, 'school')"
                        />
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>


                  <v-list-tile
                    v-if="userdata.school && !userdata.degree || (userdata.degree && userdata.degree === 'None')"
                    class="cust-tile-2 grey-color"
                  >
                    <v-list-tile class="cust-tile-1">
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    </v-list-tile>
                    <v-list-tile-content>
                      <v-layout class="acct-page-container__input-field-layout">
                       <div v-bind:style="getSelectMaxWidth">
                         <v-select
                           :items="degreeSelectItems"
                           class="acct-page-container__select-degree"
                           v-model="updateDegree"
                           label="Select Degree"
                           single-line
                           style="padding: 0;"
                           hide-details
                         />
                       </div>
                       <v-flex xs5 v-if="updateDegree === 'High school' || updateDegree === 'None'" v-show="updateDegree" class="no-padding">
                         <v-btn small center class="cust-btn-1" @click="saveDegreeMajorInfo">
                           Save
                         </v-btn>
                       </v-flex>
                       <v-flex xs3 v-else style="padding-left: 5px; padding-top: 5px; color: black;">
                         in
                       </v-flex>
                      </v-layout>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-if="userdata.school && userdata.degree && userdata.degree !== 'None'" class="cust-tile-3">
                    <v-list-tile class="cust-tile-1">
                      <img
                        :src="svgs.accountDegree"
                        class="acct-page-container__display-text-icon"
                      />
                    </v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        {{ userdata.degree }} <span v-if="userdata.degree !== 'High school'">in {{ userdata.major }}</span>
                        <i
                          class="fa fa-edit acct-page-container__edit-icon"
                          @click="createEditDegreeMajorInfo.show = true"
                        />
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile v-if="
                    userdata.school &&
                    userdata.degree !== 'High school' &&
                    updateDegree !== 'High school' && updateDegree !== 'None' &&
                    !userdata.major
                  " class="cust-tile-2 grey-color">
                    <v-list-tile-content>
                      <v-layout class="acct-page-container__input-field-layout">
                        <v-flex xs9 class="no-padding">
                          <v-text-field
                            v-model="updateMajor"
                            class="no-padding no-underline acct-page-container__add-major"
                            name="add-major"
                            label="Add Major"
                            single-line
                          />
                        </v-flex>
                        <v-flex xs3
                          v-if="updateDegree && updateMajor"
                          v-show="updateMajor" class="no-padding" style="margin-left: 40px;"
                        >
                          <v-btn small center class="cust-btn-1" @click="saveDegreeMajorInfo">
                            Save
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-list-tile-content>
                  </v-list-tile>

                    <v-list-tile v-if="!userdata.email" class="cust-tile-2 grey-color">
                      <v-list-tile class="cust-tile-1">
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                      </v-list-tile>
                    <v-list-tile-content>
                      <v-layout class="acct-page-container__input-field-layout">
                        <v-flex xs10 class="no-padding">
                          <v-text-field
                            v-model="updateEmail"
                            class="no-padding no-underline"
                            name="input-3"
                            label="Add email to display"
                            single-line
                            @keyup.enter="saveEmail"
                          />
                        </v-flex>
                        <v-flex xs2 v-show="updateEmail" class="no-padding">
                          <v-btn small  center class="cust-btn-1" @click="saveEmail">
                            Save
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-if="userdata.email" class="cust-tile-2">
                    <v-list-tile class="cust-tile-1">
                      <img
                        :src="svgs.accountEmail"
                        class="acct-page-container__display-text-icon"
                      />
                    </v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        {{ userdata.email }}
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex sm4 class="hidden-xs-only">
            <div class="profile-pic-cont hidden-xs-only">
              <img v-if="userdata.profile_pic" style="width: 100%; height: 100%;" :src="`${serverUrl}/file/get/${userdata.profile_pic}`"></img>
              <img v-else style="width: 100%; height: 100%;" :src="default_pic"></img>
              <v-btn style="position: relative; top: -42px; left: -5px;" icon small @click="showPicUploaderDialog = true;">
                <v-icon style="color: #616161;">photo_camera</v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>

            <v-divider class="acct-divider" />

            <v-layout row wrap>
              <v-flex xs12 sm6 md5 class="padding-sm-right">
                <account-header
                  :svg="svgs.resume"
                  :text="'My Resumes'"
                />
                <p v-if="userdata.resumes.length === 0">
                  Create a kunvet resume or upload your own. Use it to apply for any jobs on kunvet.
                </p>
                <v-list two-line class="acct-list" v-else>
                  <div v-for="(resume, index) in userdata.resumes" :key="index">
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ resume.name }}</v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action @click="
                        deleteResumeIndex=index;
                        deleteResumeName=resume.name;
                        showDeleteResumeDialog=true"
                      >
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">delete</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                    <v-divider v-if="index + 1 < userdata.resumes.length"></v-divider>
                  </div>
                </v-list>
                <v-btn
                  class="acct-btn"
                  @click="showFileModal = true"
                >
                  Add Resume
                </v-btn>
              </v-flex>
              <v-flex xs12 sm6 md5 offset-md2 class="right-account-column padding-sm-left">
                <account-header
                  :svg="svgs.building"
                  :text="'My Organization'"
                />
                <p v-if="userdata.org_list && userdata.org_list.length === 0">
                  If you own a business, school club, or other type of organization, then post your job here.
                </p>
                <v-list two-line class="acct-list" v-else>
                    <template v-for="({ _id, name }, index) in userdata.org_list">
                    <v-list-tile :key="_id">
                      <v-list-tile-content>
                        <v-list-tile-title>{{ name }}</v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">edit</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                    <v-divider v-if="index + 1 < userdata.org_list.length" :key="index" />
                  </template>
                </v-list>
                <div>
                  <v-btn
                    class="acct-btn"
                    @click.native.stop="createOrganizationModal.show = true"
                  >
                    Create an Organization
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 sm6 offset-sm6 md5 offset-md7 class="right-account-column padding-sm-left">
                <account-header
                  :svg="svgs.suitcase"
                  :text="'Posted Personal Jobs & Applicants'"
                />
                <p v-if="doesNotHaveJobs">
                  Personal jobs are jobs that you offer as an individual
                  If you are posting on behalf of a business,
                  please create an organization from the menu bar.
                </p>
                <jobs-and-applications-counters v-else :counters="getJobsAndApplicationsCount" />
                <div>
                  <router-link to="/createnewjob">
                    <v-btn class="acct-btn">
                      Post Personal Jobs
                    </v-btn>
                  </router-link>
                </div>
              </v-flex>
            </v-layout>

            <v-dialog v-model="showFileModal" class="auto-dialog">
              <ResumeUploader
                @uploaded="resumeUploaded"
                @cancel="closeFileModal"
              />
            </v-dialog>

            <v-dialog v-model="showPicUploaderDialog" class="auto-dialog">
              <PicUploader
                @uploaded="profilePicUploaded"
                @cancel="showPicUploaderDialog = false"
                :croppedId="userdata.profile_pic"
                title="Change Profile Picture"
              />
            </v-dialog>

            <v-dialog v-model="showDeleteResumeDialog">
              <v-card>
                <v-card-title>
                  <h2>Delete {{ deleteResumeName }}?</h2>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat="flat" @click="showDeleteResumeDialog=false;">Cancel</v-btn>
                  <v-btn color="red darken-1" flat="flat" @click="deleteResume(deleteResumeIndex)">Delete</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="editModal.show">
              <v-card>
                <v-card-title>
                  <div class="headline">Edit {{ editModal.title }}</div>
                  <div class="edit-modal-input-cont">
                    <v-text-field
                      v-model="editModal.text"
                      v-if="editModal.type === 'text'"
                      style="padding: 0 2px;"
                      name="edit-modal-input"
                      hide-details
                      single-line
                    ></v-text-field>
                    <v-select
                      v-model="editModal.text"
                      v-if="editModal.type === 'select'"
                      :items="editModal.items"
                      single-line
                    />
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat="flat" @click.native="destroyEditModal">Cancel</v-btn>
                  <v-btn flat="flat" @click.native="saveFromEditModal">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>


            <v-dialog v-model="createEditDegreeMajorInfo.show">
              <v-card>
                <v-card-title>
                  <div class="headline">Edit Degree and Major Information</div>
                  <div class="edit-modal-input-cont">
                    <v-select
                      v-model="createEditDegreeMajorInfo.degree"
                      :items="degreeSelectItems"
                      label="Degree"
                      hide-details
                      :placeholder="userdata.degree"
                    />
                    <v-text-field
                      v-model="createEditDegreeMajorInfo.major"
                      v-if="createEditDegreeMajorInfo.degree !== 'None' && createEditDegreeMajorInfo.degree !== 'High school'"
                      name="edit-modal-input"
                      style="margin-top: 12px;"
                      label="In:"
                      hide-details
                      :placeholder="userdata.major"
                    />
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat="flat" @click.native="destroyDegreeMajorModal">Cancel</v-btn>
                  <v-btn
                    v-if="
                    (createEditDegreeMajorInfo.degree === 'None' || createEditDegreeMajorInfo.degree === 'High school') ||
                    (createEditDegreeMajorInfo.degree && createEditDegreeMajorInfo.major)
                    "
                    flat="flat" @click.native="saveFromDegreeMajorModal"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>


                <v-dialog v-model="createOrganizationModal.show">
                  <v-card>
                    <v-card-title class="headline">
                      Create organization / business profile
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        v-model="createOrganizationModal.organizationName"
                        style="padding: 0 2px;"
                        name="edit-modal-input"
                        hide-details
                        single-line
                        placeholder="Name of business or organization"
                      />
                    </v-card-text>
                    <v-card-actions>
                      <!--<v-spacer></v-spacer>-->
                      <v-btn flat="flat" @click.native="createOrganization">Continue</v-btn>
                      <v-btn flat="flat" @click.native="createOrganizationModal.show = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

            <v-dialog v-model="editNameModal.show">
              <v-card>
                <v-card-title>
                  <div class="headline">Edit Name</div>
                  <div class="edit-modal-input-cont">
                    <v-text-field
                      v-model="editNameModal.firstName"
                      style="padding: 0 2px;"
                      name="edit-modal-input"
                      hide-details
                      single-line
                    />
                  </div>
                  <div class="edit-modal-input-cont">
                    <v-text-field
                      v-model="editNameModal.lastName"
                      style="padding: 0 2px;"
                      name="edit-modal-input"
                      hide-details
                      single-line
                    />
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat="flat" @click.native="editNameModal.show = false">Cancel</v-btn>
                  <v-btn flat="flat" @click.native="saveFromEditNameModal">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

          </section>
    </div>
  </v-container>
</template>

<script>
  import App from '@/App';
  import gql from 'graphql-tag';
  import VuexLS from '@/store/persist';
  import axios from 'axios';
  import Config from 'config';

  import AccountHeader from '@/components/AccountHeader';
  import JobsAndApplicationsCounters from '@/components/JobsAndApplicationsCounters';
  import ResumeUploader from '@/components/ResumeUploader';
  import PicUploader from '@/components/PicUploader';

  import AccountDegreeSvg from '@/assets/account/degree.svg';
  import AccountMajorSvg from '@/assets/account/account_major.svg';
  import AccountEmailSvg from '@/assets/account/account_email.svg';
  import AccountSchoolSvg from '@/assets/account/account_school.svg';
  import ResumeSvg from '@/assets/navbar/resume_full_black.svg';
  import SuitcaseSvg from '@/assets/navbar/suitcase_full_black.svg';
  import BuildingSvg from '@/assets/account/org_building_full_black.svg';

  import getCountersFromJobsAndApplications from '@/utils/getCountersFromJobsAndApplications';
  import DegreeConstants, { degreeDbToString, degreeSelectMaxWidths, degreeStringToDb } from '@/constants/degrees';


  export default {
    data() {
      return {
        resumes: [],
        uid: null,
        serverUrl: Config.get('serverUrl'),
        default_pic: 'https://github.com/leovinogradov/letteravatarpics/blob/master/Letter_Avatars/default_profile.jpg?raw=true',
        active: null,
        updateSchool: '',
        updateEmail: '',
        updateDegree: '',
        updateMajor: '',
        editModal: {
          title: null,
          text: null,
          type: 'text',
          selectItems: [],
          property: null,
          show: false,
        },
        editNameModal: {
          show: false,
          firstName: '',
          lastName: '',
        },
        createEditDegreeMajorInfo: {
          show: false,
          degree: null,
          major: null,
        },
        createOrganizationModal: {
          show: false,
          organizationName: null,
          aboutUs: null,
        },
        userdata: {
          firstname: null,
          lastname: null,
          school: null,
          degree: null,
          major: null,
          email: null,
          display_email: null,
          profile_pic: null,
          org_list: [],
          resumes: [],
        },
        settingsoption1: '',
        uploadFieldName: 'file',
        showFileModal: false,
        formData: null,
        deleteResumeIndex: null,
        deleteResumeName: null,
        showDeleteResumeDialog: false,
        showPicUploaderDialog: false,
        jobs: [],
        applications: [],
        svgs: {
          accountDegree: AccountDegreeSvg,
          accountEmail: AccountEmailSvg,
          accountMajor: AccountMajorSvg,
          accountSchool: AccountSchoolSvg,
          building: BuildingSvg,
          resume: ResumeSvg,
          suitcase: SuitcaseSvg,
        },
      };
    },
    components: {
      AccountHeader,
      JobsAndApplicationsCounters,
      ResumeUploader,
      PicUploader,
    },
    computed: {
      // TODO
      // All this stuffs might be over-coding, but it's an experiment.
      // My idea is that I want to keep the state as simple as possible
      // (just a simple `jobs` and `applicants` property.
      // I want to try to not break it up into multiple arrays because
      // that increases the surface area for bugs.
      // Furthermore I can use computed properties to cache the lengths
      // of these arrays which should improve performance.
      // Let me know what you think (if this is bad practice etc).
      doesNotHaveJobs() {
        const { jobs } = this;
        return jobs.length === 0;
      },
      getJobsAndApplicationsCount() {
        const { jobs, applications } = this;
        return getCountersFromJobsAndApplications(jobs, applications);
      },
      degreeSelectItems() {
        return Object.keys(DegreeConstants).map(degreeDbToString);
      },
      getSelectMaxWidth() {
        const { updateDegree: degree } = this;
        if (!degree || degree === 'none') return { width: '160px' }; // cover placeholder
        return {
          maxWidth: `${degreeSelectMaxWidths[degreeStringToDb(degree)]}px`,
        };
      },
    },
    methods: {
      async fillUpJobs() {
        const { data: { findJobs: jobs } } = await this.$apollo.query({
          query: (gql`query ($user: MongoID) {
            findJobs (filter: { user_id: $user }){
              _id
              active
            }
          }`),
          variables: {
            user: this.$store.state.userID,
          },
        });
        // TODO: Temporary concat for testing with base jobs state.
        // This doesn't do any parsing at the moment since I don't know the complete object state yet.
        this.jobs = this.jobs.concat(jobs.slice());
        this.applications = (await Promise.all(this.jobs.map(this.getApplicationsFromJobs)))
          .reduce((total, curr) => total.concat(curr), []); /* flatten the array */
      },
      /* Returns applicants as an array from a specified job id. Trying to avoid side-effects here. */
      async getApplicationsFromJobs({ _id: jobId }) {
        const { data: { findApplicants: applications } } = await this.$apollo.query({
          query: (gql`query ($JobId: MongoID) {
            findApplicants (filter: {
              job_id: $JobId
            }) {
              status
            }
          }`),
          variables: {
            JobId: jobId,
          },
        });

        return applications;
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();
        if (!fileList.length) return;
        // append the files to FormData
        formData.append('userid', this.$store.state.userID);
        formData.append(fieldName, fileList[0], fileList[0].name);
        /* Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
            return null;
          }); */
        // save it
        this.formData = formData;
      },
      resumeUploaded(_filename, _resumename) {
        this.userdata.resumes = this.userdata.resumes.concat({
          name: _resumename,
          filename: _filename,
          resumeid: null,
        });
        this.saveUserdata();
        this.closeFileModal();
      },
      profilePicUploaded(fileId) {
        this.userdata.profile_pic = fileId;
        this.saveUserdata();
        this.showPicUploaderDialog = false;
      },
      closeFileModal() {
        this.showFileModal = false;
        this.formData = null;
      },
      deleteResume(index) {
        this.showDeleteResumeDialog = false;
        this.deleteResumeIndex = null;
        this.deleteResumeName = null;
        if (this.userdata.resumes[index].filename) {
          const filename = this.userdata.resumes[index].filename;
          axios.post(`/file/delete/${filename}`).then(() => {
            this.userdata.resumes.splice(index, 1);
            this.saveUserdata();
          }, (error) => {
            console.error(error);
          });
        } else {
          this.userdata.resumes.splice(index, 1);
          this.saveUserdata();
        }
      },
      logout() {
        App.methods.logout();
      },
      saveDegreeMajorInfo() {
        if (this.updateDegree === 'None' || this.updateDegree === 'High school') this.updateMajor = '';
        this.userdata.degree = this.updateDegree;
        this.updateDegree = '';
        this.userdata.major = this.updateMajor;
        this.updateMajor = '';
        this.saveUserdata();
      },
      saveSchool() {
        this.userdata.school = this.updateSchool;
        this.updateSchool = '';
        this.saveUserdata();
      },
      saveEmail() {
        this.userdata.display_email = this.updateEmail;
        this.updateEmail = '';
        this.saveUserdata();
      },
      createEditModal(title, text, property, type = 'text', items = []) {
        this.editModal.title = title;
        this.editModal.text = text;
        this.editModal.property = property;
        this.editModal.type = type;
        this.editModal.items = items;
        this.editModal.show = true;
      },
      createEditNameModal(firstName, lastName) {
        this.editNameModal.firstName = firstName;
        this.editNameModal.lastName = lastName;
        this.editNameModal.show = true;
      },
      destroyEditModal() {
        this.editModal.show = false;
        this.editModal.title = null;
        this.editModal.text = null;
      },
      saveFromEditModal() {
        const text = this.editModal.text;
        const property = this.editModal.property;
        this.userdata[property] = text;
        this.saveUserdata();
        this.destroyEditModal();
      },
      saveFromEditNameModal() {
        const { firstName, lastName } = this.editNameModal;
        this.userdata.firstname = firstName;
        this.userdata.lastname = lastName;
        this.saveUserdata();
        this.editNameModal.show = false;
      },
      destroyDegreeMajorModal() {
        this.createEditDegreeMajorInfo.show = false;
        this.createEditDegreeMajorInfo.degree = null;
        this.createEditDegreeMajorInfo.major = null;
      },
      saveFromDegreeMajorModal() {
        const { degree } = this.createEditDegreeMajorInfo;
        if (degree === 'None' || degree === 'High school') this.createEditDegreeMajorInfo.major = '';
        this.userdata.degree = this.createEditDegreeMajorInfo.degree;
        this.userdata.major = this.createEditDegreeMajorInfo.major;
        this.destroyDegreeMajorModal();
        this.saveUserdata();
      },
      saveUserdata() {
        this.updateAccount();
        this.commitUserdata();
      },
      commitUserdata() {
        this.$store.commit({
          type: 'keepUserdata',
          userdata: this.userdata,
        });
      },
      updateAccount() {
        // this is weird. Not sure why it adds the property '__typename' if I dont do this
        const _resumes = this.userdata.resumes.map(({
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
            // find a more secure way to run query
            uid: this.uid,
            record: {
              firstname: this.userdata.firstname,
              lastname: this.userdata.lastname,
              school: this.userdata.school,
              degree: degreeStringToDb(this.userdata.degree),
              major: this.userdata.major,
              profile_pic: this.userdata.profile_pic,
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
        }).catch((error) => {
          console.error(error);
        });
      },
      async createOrganization() {
        const { aboutUs, organizationName } = this.createOrganizationModal;
        const { data: { createOrganization: { recordId } } } = await this.$apollo.mutate({
          mutation: (gql`mutation ($name: String, $bio: String) {
            createOrganization(record: {
              business_name: $name,
              biography: $bio,
            }) {
              recordId
            }
          }`),
          variables: {
            name: organizationName,
            bio: aboutUs,
          },
        });

        // Strange bugs in this file that causes org_list to be empty... Patching it here.
        const orgListOrEmpty = this.userdata.org_list || [];
        const newOrgList = orgListOrEmpty
          .map(({ _id }) => _id)
          .concat(recordId);

        await this.$apollo.mutate({
          mutation: (gql`mutation ($_id: MongoID, $record: UpdateOneAccountInput!) {
            updateAccount(
              filter: { _id: $_id },
              record: $record,
            ) {
              recordId
            }
          }`),
          variables: {
            _id: this.uid,
            record: {
              org_list: newOrgList,
            },
          },
          refetchQueries: [{
            query: (gql`query ($_id: MongoID) {
              findAccount (filter: {
                _id: $_id
              }) {
                _id
                org_list
              }
            }`),
            variables: {
              _id: this.$store.state.userID,
            },
          }],
        });

        this.createOrganizationModal.show = false;
        this.userdata.org_list = orgListOrEmpty.concat({
          _id: recordId,
          name: organizationName,
        });
      },
      async populateOrgList(orgList) {
        this.userdata.org_list = (await Promise.all(
          orgList.map(this.getOrgByID),
        )).map(({ business_name: name, _id }) => ({
          name, _id,
        }),
        );
      },
      getOrgByID(_oid) {
        return new Promise(resolve => {
          this.$apollo.query({
            query: (gql`query ($oid: MongoID) {
              findOrganization(filter: {
                _id: $oid
              }) {
                business_name
                _id
              }
            }`),
            variables: {
              oid: _oid,
            },
          }).then((data) => {
            resolve(data.data.findOrganization);
          }).catch((error) => {
            console.error(error);
          });
        });
      },
      fetchData() {
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
                org_list
                profile_pic
                resumes {
                  name
                  filename
                  resumeid
                }
            }
          }`),
          variables: {
            uid: this.$store.state.userID,
          },
        }).then((data) => {
          const res = data.data.findAccount;
          this.userdata.firstname = res.firstname;
          this.userdata.lastname = res.lastname;
          this.userdata.school = res.school;
          this.userdata.degree = res.degree ? degreeDbToString(res.degree) : null;
          this.userdata.major = res.major;
          this.userdata.email = res.email;
          this.userdata.profile_pic = res.profile_pic;
          this.userdata.resumes = res.resumes.slice();
          this.commitUserdata();
          if (res.org_list) {
            this.populateOrgList(res.org_list);
          }
        }).catch((error) => {
          console.error('fetch data failed', error);
        });
      },
    },
    created() {
      VuexLS.restoreState('vuex',  window.localStorage).then(async (data) => {
        if (data.userdata.firstname && data.acct !== 0) {
          this.fetchData(); // temp
          this.uid = data.userID;
          console.log(this.uid);
          // this.userdata = data.userdata; // temp
          if (data.acct === 1) { // Regular user. Should probably use constants soon.
            await this.fillUpJobs();
          }
        } else if (data.acct !== 0) {
          this.fetchData();
        } else {
          this.$router.push('/login');
        }
      });
    },
    /* beforeDestroy() {
      this.$store.commit({
        type: 'saveUserdata',
        school: this.userdata.school,
        degree: this.userdata.degree,
        email: this.userdata.email,
      });
    }, */
  };
</script>
