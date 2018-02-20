<style>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    /* outline-offset: -8px; */
    background: #f8f8f8;
    color: dimgray;
    /* padding: 10px 10px; */
    min-height: 100px; /* minimum height */
    position: relative;
    cursor: pointer;
  }
  .dropbox .input-file {
    opacity: 0;
    width: 100%;
    height: 100px;
    position: absolute;
    cursor: pointer;
  }
  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 20px 0;
  }
  .acct-header img {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .acct-header h3 {
    display: inline-block;
  }
  .profile-pic-cont {
    z-index: 1;
  }
  @media only screen and (min-width: 768px) and (orientation: landscape) {
    .right-account-column {
      text-align: right;
    }
  }
</style>
<template>
  <v-container fluid class="acct-page-container white-bg">
    <div class="main-cont-large">
          <section style="padding: 0; margin: 15px; width: auto;">
            <v-layout>
              <v-flex xs12 sm8>
                <h1>{{ userdata.firstname }} {{ userdata.lastname }}</h1>
                <v-layout>
                  <v-flex xs12 sm10 class="no-padding">
                    <v-list>
                      <v-list-tile v-if="!userdata.school" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>

                          <v-layout style="width: 100%">
                          <v-flex xs10 class="no-padding">
                            <v-text-field
                              v-model="updateSchool"
                              class="no-padding no-underline"
                              name="input-1-3"
                              label="Add school"
                              single-line
                              @keyup.enter="saveSchool"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 v-show="updateSchool" class="no-padding">
                            <v-btn small center class="cust-btn-1" @click="saveSchool">
                              Save
                            </v-btn>
                          </v-flex>
                        </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="userdata.school" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ userdata.school }}
                            <v-icon
                              class = "edit-icon"
                              @click="createEditModal('school', userdata.school, 'school')">
                              edit
                            </v-icon>
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="userdata.school && !userdata.degree" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-layout style="width: 100%">
                            <v-flex xs10 class="no-padding">
                              <v-text-field
                                v-model="updateDegree"
                                class="no-padding no-underline"
                                name="input-2"
                                label="Add degree"
                                single-line
                                @keyup.enter="saveDegree"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 v-show="updateDegree" class="no-padding">
                              <v-btn small center class="cust-btn-1" @click="saveDegree">
                                Save
                              </v-btn>
                            </v-flex>
                          </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="userdata.degree" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-book" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ userdata.degree }}
                            <v-icon
                              class = "edit-icon"
                              @click="createEditModal('degree', userdata.degree, 'degree')">
                              edit
                            </v-icon>
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="!userdata.display_email" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-layout style="width: 100%">
                            <v-flex xs10 class="no-padding">
                              <v-text-field
                                v-model="updateEmail"
                                class="no-padding no-underline"
                                name="input-3"
                                label="Add email to display"
                                single-line
                                @keyup.enter="saveEmail"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 v-show="updateEmail" class="no-padding">
                              <v-btn small  center class="cust-btn-1" @click="saveEmail">
                                Save
                              </v-btn>
                            </v-flex>
                          </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="userdata.display_email" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ userdata.display_email }}
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm4 class="hidden-xs-only">
                <div class="profile-pic-cont hidden-xs-only">
                </div>
              </v-flex>
            </v-layout>

            <v-divider style="margin: 0 15px; width: auto;"></v-divider>

            <v-layout row wrap>
              <v-flex xs12 sm6 md5 class="padding-sm-right">
                <div class="acct-header">
                  <img :src="svgs.resumeFull" />
                  <h3 class="acct-h3">My Resumes</h3>
                </div>
                <p v-if="userdata.resumes.length === 0">
                  Create a kunvet resume or upload your own. Use it to apply for any jobs on kunvet.
                </p>
                <v-list two-line class="acct-list" v-else>
                  <template v-for="(resume, index) in userdata.resumes">
                    <v-list-tile
                      :key="index"
                    >
                      <v-list-tile-content>
                        <v-list-tile-title>{{ resume.name }}</v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">edit</v-icon>
                        </v-btn>
                      </v-list-tile-action>
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
                    <v-divider v-if="index + 1 < userdata.resumes.length" :key="index"></v-divider>
                  </template>
                </v-list>
                <account-button
                  :text="'Add Resume'"
                  :onClick="() => showFileModal = true"
                />
              </v-flex>
              <v-flex xs12 sm6 md5 offset-md2 class="right-account-column padding-sm-left">
                <div class="acct-header">
                  <img :src="svgs.building" />
                  <h3 class="acct-h3">My Organization</h3>
                </div>
                <p v-if="userdata.org_list && userdata.org_list.length === 0">
                  If you own a business, school club, or other type of organization, then post your job here.
                </p>
                <v-list two-line class="acct-list" v-else>
                  <template v-for="(org, index) in org_list">
                    <v-list-tile
                      :key="org._id"
                    >
                      <v-list-tile-content>
                        <v-list-tile-title>{{ org.name }}</v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">edit</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                    <v-divider v-if="index + 1 < org_list.length" :key="org._id"></v-divider>
                  </template>
                </v-list>
                <div>
                  <v-btn
                    style="text-transform: none; border: 1px solid black;"
                    @click.native.stop="addorg = true">
                      Create an Organization
                  </v-btn>
                </div>
                <v-dialog v-model="addorg">
                  <v-card>
                    <v-card-title class="headline">Create organization / business profile</v-card-title>
                    <v-card-actions>
                      <v-btn color="green darken-1" flat="flat" @click.native="addorg = false">Create</v-btn>
                      <v-btn color="green darken-1" flat="flat" @click.native="addorg = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 sm6 offset-sm6 md5 offset-md7 class="right-account-column padding-sm-left">
                <div class="acct-header">
                  <img :src="svgs.suitCaseFullGray" />
                  <h3 class="acct-h3">Posted Personal Jobs & Applicants</h3>
                </div>
                <p v-if="doesNotHaveJobs">
                  Personal jobs are jobs that you offer as an individual
                  If you are posting on behalf of a business,
                  please create an organization from the menu bar.
                </p>
                <jobs-and-applications-counters v-else :counters="getJobsAndApplicationsCount" />
                <div>
                  <router-link to="/createnewjob">
                    <account-button :text="'Post Personal Jobs'" />
                  </router-link>
                </div>
              </v-flex>
            </v-layout>

            <v-dialog v-model="showFileModal">
              <v-card>
                <v-card-title>
                <form enctype="multipart/form-data" novalidate style="width: 100%;"
                    v-if="currentStatus === 'INITIAL' || currentStatus === 'SAVING'">
                  <h1>Upload Resume</h1>
                  <div class="dropbox">
                    <input
                      type="file"
                      :name="uploadFieldName"
                      :disabled="currentStatus === 'SAVING'"
                      @change="filesChange($event.target.name, $event.target.files)"
                      accept="application/*"
                      class="input-file"
                    >
                      <p v-if="currentStatus === 'INITIAL'">
                        Drag your file here<br> or click to browse
                      </p>
                      <p v-if="currentStatus === 'SAVING'">
                        Uploading files...
                      </p>
                  </div>
                  <div style="min-height: 21px; margin: 10px 0;">
                    <p style="margin: 0;">{{ chosenFile }}</p>
                  </div>
                </form>
                <v-text-field
                  v-model="resumeName"
                  style="padding: 0 2px;"
                  name="edit-modal-input"
                  hide-details
                  single-line
                  placeholder="Resume name"
                ></v-text-field>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat="flat" @click="closeFileModal">Cancel</v-btn>
                  <v-btn :disabled="!formData || !resumeName" flat="flat" @click="saveFile">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="showDeleteResumeDialog">
              <v-card>
                <v-card-title>
                  <h2>Delete {{ deleteResumeName }}?</h2>
                </v-card-title>
                <v-card-actions>
                  <v-btn color="green darken-1" flat="flat" @click="showDeleteResumeDialog=false;">Cancel</v-btn>
                  <v-btn error flat="flat" @click="deleteResume(deleteResumeIndex)">Delete</v-btn>
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
                      style="padding: 0 2px;"
                      name="edit-modal-input"
                      hide-details
                      single-line
                    ></v-text-field>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn color="green darken-1" flat="flat" @click.native="destroyEditModal">Cancel</v-btn>
                  <v-btn color="green darken-1" flat="flat" @click.native="saveFromEditModal">Save</v-btn>
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

  import AccountButton from '@/components/AccountButton';
  import JobsAndApplicationsCounters from '@/components/JobsAndApplicationsCounters';

  import ResumeSvg from '@/assets/navbar/resume_full.svg';
  import SuitCaseFullGraySvg from '@/assets/navbar/suitcase_full_gray.svg';
  import BuildingSvg from '@/assets/job_posts/building_1.svg';

  import getCountersFromJobsAndApplications from '@/utils/getCountersFromJobsAndApplications';

  export default {
    data() {
      return {
        resumes: [],
        org_list: [],
        tabs: ['Profile', 'Resume', 'Jobs', 'Settings'],
        active: null,
        updateSchool: '',
        updateEmail: '',
        updateDegree: '',
        editModal: {
          title: null,
          text: null,
          property: null,
          show: false,
        },
        userdata: {
          firstname: null,
          lastname: null,
          school: null,
          degree: null,
          display_email: null,
          org_list: [],
          resumes: [],
        },
        settingsoption1: '',
        addorg: false,
        uploadFieldName: 'file',
        showFileModal: false,
        currentStatus: 'INITIAL',
        chosenFile: '',
        formData: null,
        resumeName: null,
        deleteResumeIndex: null,
        deleteResumeName: null,
        showDeleteResumeDialog: false,
        // TODO: Temporary mock data since I'm getting random graphQL errors from create-a-job.
        jobs: [
          /*
          {
            id: 0,
            active: true,
          },
          {
            id: 1,
            active: false,
          },
          {
            id: 2,
            active: true,
          },
          */
        ],
        applications: [],
        svgs: {
          resumeFull: ResumeSvg,
          suitCaseFullGray: SuitCaseFullGraySvg,
          building: BuildingSvg,
        },
      };
    },
    components: {
      JobsAndApplicationsCounters,
      AccountButton,
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
    },
    methods: {
      async fillUpJobs() {
        const { data: { findJobs: jobs } } = await this.$apollo.query({
          query: (gql`query ($user: String) {
            findJobs (filter: { posted_by: $user }){
              _id
              active
            }
          }`),
          variables: {
            user: this.user,
          },
        });
        // TODO: Temporary concat for testing with base jobs state.
        // This doesn't do any parsing at the moment since I don't know the complete object state yet.
        this.jobs = this.jobs.concat(jobs.slice());
        this.applications = (await Promise.all(this.jobs.map(this.getApplicationsFromJobs)))
          .reduce((total, curr) => total.concat(curr), []); /* flatten the array */

        console.log(`Found jobs: ${this.jobs}`);
        console.log(`Found applicants: ${this.applications}`);
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
        this.chosenFile = fileList[0].name;
        this.formData = formData;
      },
      saveFile() {
        // upload data to the server
        if (this.formData) {
          this.currentStatus = 'SAVING';
          const headers = { emulateJSON: true };
          const data = this.formData;
          // graphql query:
          // .then(
          // )
          axios.post('http://localhost:3000/uploadfile', data, headers).then((res) => {
            const _filename = res.data;
            if (this.userdata.resumes) {
              this.userdata.resumes.push({
                name: this.resumeName,
                filename: _filename,
                resumeid: null,
              });
            } else {
              this.userdata.resumes = [{
                name: this.resumeName,
                filename: _filename,
                resumeid: null,
              }];
            }
            this.formData = null;
            this.saveUserdata();
            this.closeFileModal();
          }, (error) => {
            console.error(error);
            this.currentStatus = 'FAILED';
          });
        }
      },
      closeFileModal() {
        this.showFileModal = false;
        this.formData = null;
        this.resumeName = null;
        this.chosenFile = '';
        this.currentStatus = 'INITIAL';
      },
      deleteResume(index) {
        this.showDeleteResumeDialog = false;
        this.deleteResumeIndex = null;
        this.deleteResumeName = null;
        if (this.userdata.resumes[index].filename) {
          const headers = { emulateJSON: true };
          const data = { filename: this.userdata.resumes[index].filename };
          console.log(data);
          this.$http.post('http://localhost:3000/removefile', data, headers).then(() => {
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
      saveSchool() {
        this.userdata.school = this.updateSchool;
        this.updateSchool = '';
        this.saveUserdata();
      },
      saveDegree() {
        this.userdata.degree = this.updateDegree;
        this.updateDegree = '';
        this.saveUserdata();
      },
      saveEmail() {
        this.userdata.display_email = this.updateEmail;
        this.updateEmail = '';
        this.saveUserdata();
      },
      createEditModal(title, text, property) {
        this.editModal.title = title;
        this.editModal.text = text;
        this.editModal.property = property;
        this.editModal.show = true;
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
        var _resumes = [];
        for (var i = 0; i < this.userdata.resumes.length; i++) {
          _resumes.push({
            name: this.userdata.resumes[i].name,
            filename: this.userdata.resumes[i].filename,
            resumeid: this.userdata.resumes[i].resumeid,
          });
        }

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
            uid: this.$store.state.userID,
            record: {
              firstname: this.userdata.firstname,
              lastname: this.userdata.lastname,
              school: this.userdata.school,
              degree: this.userdata.degree,
              display_email: this.userdata.display_email,
              resumes: _resumes,
            },
          },
        }).catch((error) => {
          console.error(error);
        });
      },
      async populateOrgList() {
        for (var i = 0; i < this.userdata.org_list.length; i++) {
          this.getOrgByID(this.userdata.org_list[i]).then((data) => {
            this.org_list.push({ name: data.business_name, _id: data._id });
          });
        }
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
                display_email
                org_list
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
          this.userdata.degree = res.degree;
          this.userdata.display_email = res.display_email;
          this.userdata.org_list = res.org_list;
          this.userdata.resumes = res.resumes;
          this.commitUserdata();
          if (res.org_list) {
            this.populateOrgList();
          }
        }).catch((error) => {
          console.error(error);
        });
      },
    },
    created() {
      VuexLS.restoreState('vuex',  window.localStorage).then(async (data) => {
        console.log('Fetching data!', data);
        if (data.userdata.firstname && data.acct !== 0) {
          this.userdata = data.userdata;
          if (data.userdata.org_list) {
            this.populateOrgList();
          }
          if (data.acct === 1) { // Regular user. Should probably use constants soon.
            await this.fillUpJobs();
          }
        } else if (data.acct !== 0) {
          console.log('Fetching from db');
          this.fetchData();
        } else {
          this.$router.push('/login');
        }
        console.log(this.jobs);
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
