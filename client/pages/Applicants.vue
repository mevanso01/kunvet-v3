<style lang="scss">
  .applicants-page {
    padding-left: 0;
    padding-right: 0;
    .main-cont-large {
      background-color: inherit;
      padding: 0 16px;
    }
    .job-headline {
      background-color: #f2f7ff;
      padding-top: 16px;
      padding-bottom: 16px;
      p, h2 {
        color: #808285;
      }
      h2 {
        font-weight: bold;
        margin-bottom: 0;
      }
    }
    .btn-row > a {
      color: #616161 !important;
      text-decoration: underline;
      display: block;
    }
    .applicant {
      padding-top: 8px;
      padding-bottom: 8px;
    }
    .pdfframe-container {
      // height: 95vh;
      padding: 64px 32px 32px 32px;
      overflow: scroll;
      background-color: #f2f7ff;
      .more {
        background: none !important;
      }
    }
    .sp-heading {
      position: sticky;
      top: 64px;
      z-index: 99;
      width: 100%;
      padding: 18px 32px 0px 32px;
      // background-color: #ef5350;
      // background-color: #ff6969;
      background-color: #f2f7ff;
      .v-btn__content {
        text-transform: none;
      }
      h2 {
        color: #4d4d4d;
      }
    }
    .sp-footer {
      position: sticky;
      bottom: 0px;
      height: 60px;
      padding: 8px 32px;
      background-color: #f2f7ff;
      h2 {
        font-size: 18px;
        line-height: 42px;
        color: #616161;
        font-weight: 400;
      }
      button {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
    @media (min-width: 601px) {
      .btn-row > a {
        padding-right: 8px;
        display: inline;
      }
    }
    @media (min-width: 768px) {
      .sp-heading-mobile,
      .sp-mobile-footer {
        display: none;
      }
    }
    @media (min-width: 961px) {
      .pdfframe-container,
      .sp-heading,
      .sp-footer {
        padding-right: calc(50vw - 480px);
      }
      .applicant .kunvet-v-btn {
        opacity: 0;
        transition: opacity 0.2s;
      }
      .applicant:hover .kunvet-v-btn {
        opacity: 1;
      }
    }
    @media (max-width: 600px) {
      .side-pdf-heading {
        top: 0;
        z-index: 101;
      }
    }
    @media (max-width: 767px) {
      // .side-pdf-heading .sp-buttons {
      //   display: none;
      // }
      .pdfframe-container {
        padding: 0 16px;
      }
      .sp-drawer {
        z-index: 200;
      }
      .sp-heading,
      .sp-footer {
        display: none;
      }
      .sp-heading-mobile {
        display: block;
        background-color: #f2f7ff;
        position: sticky;
        top: 0;
        height: 40px;
        h2 {
          text-align: center;
          line-height: 40px;
        }
      }
      .sp-mobile-footer {
        padding: 4px 16px;
        position: sticky;
        bottom: 0;
        height: 72px;
        background-color: #f2f7ff;
        z-index: 5;
      }
    }
  }
  // height: auto;
  //    width: 100%;
  //    background-color: #f2f7ff;
  //    z-index: 9;
  //    position: fixed;
  //    top: 64px;
  //    padding: 0;
  //    overflow: hidden;
</style>
<template>
  <v-container fluid class="applicants-page  page-height">
    <v-layout row wrap>
      <v-flex xs12 v-if="jobs.length === 0">
        <div v-if="pageLoading" style="margin-top: 48px;">
          <v-progress-circular indeterminate class="ma-3" size="30" color="red darken-1"
          style="display: block; margin: auto !important;"></v-progress-circular>
        </div>
        <div v-else class="main-cont-large">
          <p style="text-align: center;">
            <strong>You have no active jobs.</strong><br><br>
            <router-link to="/createjob" style="font-weight: bold;">Click here</router-link> create a new job, or go to the <router-link to="/myjobs" style="font-weight: bold;">jobs page</router-link> to re-post a past job.
          </p>
        </div>
      </v-flex>
      <template
        v-if="jobs.length > 0"
        v-for="job in jobs"
      >
        <v-flex xs12 style="margin-top: 12px" class="job-headline job-page-headline">
          <div class="main-cont-large">
            <p class="mb-1">{{ getApplicantsFromJobs(job._id).length }} {{ getApplicantsString(getApplicantsFromJobs(job._id).length) }} for</p>
            <h2>{{ job.title }}</h2>
            <!-- <p class="mb-1">
              <span class="kunvet-red">
                {{ getApplicantsFromJobs(job._id).length }}
              </span> {{ getApplicantsCountString }} in total
            </p> -->
          </div>
        </v-flex>
        <div class="main-cont-large">
          <div v-if="applicants.length > 0" v-for="item in getApplicantsFromJobs(job._id)" class="applicant">
            <div class="inner" style="position: relative;">
              <div class="">
                <v-layout row wrap style="padding-bottom: 12px;">
                  <v-flex xs12 sm6 style="padding-bottom: 0; cursor: pointer;" @click="openSideResume(item);">
                      <h2 class="new-applicant-card__title">{{ item.name }}</h2>
                      <p v-if="item.school" style="overflow: hidden; margin-bottom: 0;">
                          School: {{ item.school }}
                      </p>
                      <p v-else style="overflow: hidden; margin-bottom: 0;">
                          No school info
                      </p>
                      <p v-if="item.degree" style="overflow: hidden; margin-bottom: 0;">
                          Degree: {{ item.degree }}
                      </p>
                      <p v-if="item.major" style="overflow: hidden; margin-bottom: 0;">
                          Major: {{ item.major }}
                      </p>
                      <!-- <p style="overflow: hidden; margin-bottom: 0;">

                      </p> -->
                  </v-flex>
                  <v-flex xs12 sm6 style="padding-bottom: 0;">
                    <div style="padding-top: 25px;">
                      <span v-if="item.notes" style="color: grey;">
                        <!-- Notes: {{ getApplicantNotesDisplayText(item) }} -->
                        <pre style="font-family: Verdana; white-space: pre-line;">
                          {{ item.notes }}
                        </pre>
                      </span>
                    </div>
                  </v-flex>
                </v-layout>
                <div class="btn-row">
                  <!-- <v-btn class="kunvet-v-btn light mr-2" @click="openSideResume(item);">Show Resume</v-btn>
                  <v-btn class="kunvet-v-btn light" @click="openInNewTab(item)">Open In New Tab</v-btn> -->
                  <a v-if="item.resumes.length >0" @click="openSideResume(item);">Show Resume</a>
                  <a v-else style="text-decoration: none">No Resume</a>
                  {{item.resume}}
                  <a style="color: #616161;" @click="openInNewTab(item)">View More Information</a>
                  <!-- <v-btn flat class="ml-0" @click="openSideResume(item);">Show Resume</v-btn>
                  <v-btn flat @click="openInNewTab(item)">Open In New Tab</v-btn> -->
                </div>
                <!-- <v-btn @click="openResumeInNewTab(item);">Open in new tab</v-btn> -->
              </div>
            </div>
          </div>
        </div>
      </template>
    </v-layout>

    <!-- <v-dialog v-if="isMobile" v-model="showSideResume" content-class="mobile-resume" fullscreen hide-overlay transition="dialog-bottom-transition">
      <div class="mr-header">
        <h2 v-if="currentApplicant" class="mb-0">
          {{ currentApplicant.name }}
        </h2>
      </div>
      <div class="mr-content">
        <div class="pdfframe-container">
          <PdfFrame
            v-if="currentApplicant && currentApplicant.resumes[0] && currentResumeSrc"
            :href="currentResumeSrc"
          />
        </div>
      </div>
      <div class="mr-footer">
        <v-btn @click="showSideResume = false;">Hide Resume</v-btn>
      </div>
    </v-dialog> -->

    <v-navigation-drawer
       v-model="showSideResume"
       fixed right width="900"
       temporary class="sp-drawer">
       <div class="sp-heading" style="padding-right: 0px;">
         <v-layout class="pb-3">
           <v-flex xs12 sm6 md6 class="pa-0">
             <h2 v-if="currentApplicant" class="mb-0" style="text-align: left; line-height: 36px;">
               {{ currentApplicant.name }}
             </h2>
           </v-flex>
           <v-flex xs12 sm6 md6 class="pa-0 sp-buttons" style="text-align: right;">

             <v-btn flat class="kunvet-v-btn light" style="margin-right: 12px;" @click="showSideResume = false;">Hide Resume</v-btn>
             <v-btn flat :disabled="!currentResumeSrc" class="ma-0 kunvet-v-btn light" @click="downloadResume(currentResumeSrc)">Download Resume</v-btn>
             <!-- <a :href="currentResumeSrc" download>Download Resume</a> -->
           </v-flex>
        </v-layout>
       </div>
       <div class="sp-heading-mobile">
         <h2 v-if="currentApplicant" class="mb-0">
           {{ currentApplicant.name }}
         </h2>
       </div>
       <div class="sp-content">
         <div class="pdfframe-container" style="overflow: auto;">
           <PdfFrame
             v-if="currentApplicant && currentApplicant.resumes.length > 0 && currentResumeSrc"
             :href="currentResumeSrc"
           />
         </div>
       </div>
       <div class="sp-footer" v-if="currentApplicant && currentApplicant.resumes.length > 1" style="text-align: center;">
         <v-layout>
           <v-flex xs12 class="pa-0" style="text-align: right;">
             <h2 class="mb-0">
               <span style="margin-right: 10px;">Showing file {{ currFileNum + 1 }} of {{ currentApplicant.resumes.length }}</span>
               <v-btn icon @click="nextFile(true)" style="height: 42px; width: 42px; color: white; background-color: white;">
                 <img src="../assets/mobile/leftarrow.svg" style="height: 42px; width: 42px;">
               </v-btn>
               <v-btn icon @click="nextFile()" style="height: 42px; width: 42px; color: white; background-color: white;">
                 <img src="../assets/mobile/rightarrow.svg" style="height: 42px; width: 42px;">
               </v-btn>
             </h2>
           </v-flex>
         </v-layout>
       </div>
       <div class="sp-mobile-footer" style="text-align: center;">
         <v-btn v-if="currentApplicant && currentApplicant.resumes.length > 1" icon @click="nextFile(true)" style="height: 42px; width: 42px; color: white; background-color: white;">
           <img src="../assets/mobile/leftarrow.svg" style="height: 42px; width: 42px;">
         </v-btn>
         <v-btn icon @click="showSideResume = false;" style="height: 48px; width: 48px; color: white; background-color: white;">
           <img src="../assets/mobile/close.svg" style="height: 48px; width: 48px;">
         </v-btn>
         <v-btn v-if="currentApplicant && currentApplicant.resumes.length > 1" icon @click="nextFile()" style="height: 42px; width: 42px; color: white; background-color: white;">
           <img src="../assets/mobile/rightarrow.svg" style="height: 42px; width: 42px;">
         </v-btn>
       </div>
    </v-navigation-drawer>

    <v-dialog v-model="dialogs.showAccept">
      <v-card>
        <v-card-title class="headline">
          Accept Applicant
        </v-card-title>
        <p style="margin: 0 16px;" v-if="loading">Loading...</p>
        <v-card-actions>
          <v-btn flat="flat" @click.native="onAccept">
            Confirm
          </v-btn>
          <v-btn flat="flat" @click.native="dialogs.showAccept= false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogs.showReject">
      <v-card>
        <v-card-title class="headline">
          Reject Applicant
        </v-card-title>
        <p style="margin: 0 16px;" v-if="loading">Loading...</p>
        <v-card-actions>
          <v-btn flat="flat" @click.native="onReject">
            Confirm
          </v-btn>
          <v-btn flat="flat" @click.native="dialogs.showReject = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogs.showContactInfo">
      <v-card>
        <v-list class="contact-items-list">
          <v-list-tile>
            <p class="contact-name">{{ contactInfoItems.name }}</p>
          </v-list-tile>
          <v-list-tile>
            <span class="make-selectable">Email: {{ contactInfoItems.email }}
              <v-btn color="grey" class="dont-capitalize" flat small :href="`mailto:${contactInfoItems.email}`">
                Send Email
              </v-btn>
            </span>
          </v-list-tile>
        </v-list>
        <v-divider />
        <v-card-actions>
          <v-btn flat="flat" @click.native="resetDialogState">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import axios from 'axios';
  import differenceBy from 'lodash/differenceBy';
  import EventBus from '@/EventBus';

  import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
  import KunvetCharacterSvg from '@/assets/account/default_profile_picture.svg';
  import MajorSvg from '@/assets/account/account_major.svg';
  import DegreeSvg from '@/assets/account/degree.svg';

  import DateHelper from '@/utils/DateHelper';
  import StringHelper from '@/utils/StringHelper';
  import { degreeDbToString } from '@/constants/degrees';
  import queries from '@/constants/queries';
  import ProfilePicHelper from '@/utils/GetProfilePic';
  import FileClient from '@/utils/FileClient';
  import PdfFrame from '@/components/PdfFrame';

  export default {
    created() {
      if (this.$store.state.acct === 0) {
        this.$router.push('/login');
      }
    },
    activated() {
      if (this.$store.state.acct === 0) {
        this.$router.push('/login');
        return;
      }
      this.getData();
    },
    data() {
      return {
        pageLoading: true,
        loading: false,
        // user: null,
        jobs: [],
        selectedJob: { title: null, id: null },
        applicants: [],
        job_titles: [],
        settingsoption1: '',
        addorg: false,
        shouldShowAllApplicants: false,
        dialogs: {
          currentApplicant: {},
          showAccept: false,
          showReject: false,
          showContactInfo: false,
        },
        contactInfoItems: {
          name: null,
          email: null,
          phone_number: null,
        },
        svgs: {
          locationMarker: LocationMarkerSvg,
          kunvetCharacter: KunvetCharacterSvg,
          major: MajorSvg,
          degree: DegreeSvg,
        },
        currentApplicant: null,
        currentResumeSrc: null,
        showSideResume: false,
        currFileNum: 0,
      };
    },
    components: {
      PdfFrame,
    },
    methods: {
      // async getSrc(resume) {
      //   // eslint-disable-next-line
      //   // console.log('Test', resume);
      //   if (!resume.filename) { return; }
      //   const src = await FileClient.getLink(resume.filename);
      //   return src;
      // },
      async openSideResume(item) {
        this.updateApplicantStatus('opened', item._id);
        this.showSideResume = true;
        this.currentApplicant = item;
        this.currFileNum = 0;
        if (item.resumes[0] && item.resumes[0].filename) {
          const src = await FileClient.getLink(item.resumes[0].filename);
          this.currentResumeSrc = src;
        } else {
          this.currentResumeSrc = null;
        }
      },
      async nextFile(reverse) {
        const increment = reverse ? -1 : 1;
        if (!this.currentApplicant || this.currFileNum + increment < 0 || this.currFileNum + increment >= this.currentApplicant.resumes.length) {
          return;
        }
        this.currFileNum += increment;
        if (this.currentApplicant.resumes[this.currFileNum] && this.currentApplicant.resumes[this.currFileNum].filename) {
          const src = await FileClient.getLink(this.currentApplicant.resumes[this.currFileNum].filename);
          this.currentResumeSrc = src;
        }
      },
      async getData() {
        const { data } = await this.$apollo.query({
          query: (gql`query ($userId: MongoID, $businessId: MongoID) {
            findJobs (filter: { user_id: $userId, business_id: $businessId, active: true }){
              ${queries.FindJobRecordForJobCard}
            }
          }`),
          variables: {
            userId: this.$store.state.userID,
            businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
          },
        });
        let jobs = data.findJobs;
        jobs = jobs.filter(x => !x.is_deleted);
        if (jobs && jobs.length > 0 && jobs[0]._id) {
          this.selectedJob = { title: jobs[0].title, id: jobs[0]._id };
        }
        const jobIds = jobs.map(({ _id }) => _id);
        const resolved = await Promise.all(jobIds.map(this.getApplicationsFromJob));
        const applicants = resolved.reduce((total, curr) => total.concat(curr), []);
        this.jobs = jobs;
        this.pageLoading = false; // make sure spinner is not spinning
        this.applicants = [];
        for (var i = 0; i < applicants.length; i++) {
          const applicant = applicants[i];
          applicant.profilePic = await this.fetchProfilePic(applicant.user_id);
          // applicant.resumeSrc = await this.getSrc(applicant.resumes[1]);
          this.applicants.push(applicant);
        }
        this.loadFromNetwork();
      },
      async loadFromNetwork() {
        if (this.jobs && this.jobs.length > 0) {
          const jobIds = this.jobs.map(({ _id }) => _id);
          const resolved = await Promise.all(jobIds.map(id => this.getApplicationsFromJob(id, false)));
          const applicants = resolved.reduce((total, curr) => total.concat(curr), []);
          const diff = differenceBy(applicants, this.applicants, '_id');
          if (diff && diff.length > 0) {
            for (var i = 0; i < diff.length; i++) {
              const applicant = diff[i];
              applicant.profilePic = await this.fetchProfilePic(applicant.user_id);
              // applicant.resumeSrc = await this.getSrc(applicant.resumes[0]);
              this.applicants.push(applicant);
            }
          }
        }
      },
      async getApplicants(jobId, useCache = true) {
        return this.$apollo.query({
          fetchPolicy: useCache ? 'cache-first' : 'network-only',
          query: (gql`query ($JobId: MongoID) {
            findApplicants (filter: {
              job_id: $JobId,
            }) {
              ${queries.FindApplicantRecord}
              notes
            }
          }`),
          variables: {
            JobId: jobId,
          },
        });
      },
      async getApplicationsFromJob(jobId, useCache = true) {
        const { data: { findApplicants: applicants } } = await this.getApplicants(jobId, useCache);
        return applicants.map(({ degree, ...rest }) => ({ ...rest, degree: degreeDbToString(degree) }));
      },
      async updateApplicantStatus(newStatus = 'submitted', id = null) {
        this.loading = true;
        try {
          let applicantId;
          if (id) {
            applicantId = id;
          } else {
            applicantId = this.dialogs.currentApplicant._id;
          }
          await axios.post(`/application/${applicantId}/setStatus/${newStatus}`);
          // await this.updateApplicantViaQuery(applicantId);
          const { applicants } = this;
          for (let i = 0; i < applicants.length; ++i) {
            if (applicants[i]._id === applicantId) {
              this.applicants = this.applicants.map(applicant => {
                if (applicant._id === applicantId) {
                  return {
                    ...applicant,
                    status: newStatus,
                  };
                }
                return applicant;
              });
            }
          }
          this.loading = false;
        } catch (exception) {
          this.loading = false;
          this.$error(exception);
        }
        this.loading = false;
        this.resetDialogState();
      },
      updateApplicantViaQuery(id) {
        this.$apollo.mutate({
          mutation: gql`
            mutation($aplId: MongoID) {
              updateApplication(
                filter: { _id: $aplId }
                record: { }
              ) {
                recordId
              }
            }
          `,
          variables: {
            aplId: id,
            // status: newStatus,
          },
          refetchQueries: [{
            query: gql`
              query($aplId: MongoID) {
                findApplicant(filter: { _id: $aplId }) {
                  ${queries.FindApplicantRecord}
                  notes
                }
              }
            `,
            variables: { aplId: id },
          }],
        }).catch(error => {
          this.$error(error);
        });
      },
      async fetchProfilePic(id) {
        const userId = id;
        const profilePic = await ProfilePicHelper.getProfilePic(userId, null);
        return profilePic;
      },
      onShowAcceptDialog(applicant) {
        this.dialogs.currentApplicant = { ...applicant };
        this.dialogs.showAccept = true;
      },
      onShowRejectDialog(applicant) {
        this.dialogs.currentApplicant = { ...applicant };
        this.dialogs.showReject = true;
      },
      onAccept() {
        this.updateApplicantStatus('accepted');
      },
      onReject() {
        this.updateApplicantStatus('rejected');
      },
      openApplication(item) {
        if (item.status === 'submitted') {
          EventBus.$emit('removeNotification', `New applicant: ${item.name}`);
        }
        this.$router.push(`view-applicant/${item._id}`);
      },
      downloadResume(url) {
        // this.$debug('download url', url);
        window.open(url, '_blank');
      },
      openInNewTab(item) {
        if (item.status === 'submitted') {
          EventBus.$emit('removeNotification', `New applicant: ${item.name}`);
        }
        try {
          window.open(`view-applicant/${item._id}`, '_blank');
        } catch (err) {
          this.$error(err);
          this.$router.push(`view-applicant/${item._id}`);
        }
      },
      resetDialogState() {
        this.dialogs.showAccept = false;
        this.dialogs.showReject = false;
        this.dialogs.showContactInfo = false;
        this.dialogs.currentApplicant = {};
        this.contactInfoItems = { name: null, email: null, phone_number: null };
      },
      showContactInfoDialog(item) {
        this.contactInfoItems.name = item.name;
        this.contactInfoItems.email = item.email;
        this.dialogs.showContactInfo = true;
      },
      isAcceptedOrRejected({ status }) {
        return status === 'accepted' || status === 'rejected';
      },
      getAcceptedOrRejectedText({ status }) {
        return status.charAt(0).toUpperCase() + status.substring(1, status.length);
      },
      getApplicantExpiringText(applicant) {
        const { expiry_date: expiryDate } = applicant;
        const daysDiff = DateHelper.getDifferenceInDays(Date.now(), new Date(expiryDate));
        return daysDiff <= 5 ? `Application expiring in ${daysDiff} days` : '';
      },
      getApplicantsFromJobs(jobId) {
        const { applicants } = this;
        return applicants.filter(({ job_id: id }) => id === jobId);
      },
      getApplicantNotesDisplayText({ notes }) {
        if (!notes) return '';
        return StringHelper.truncate(notes, 80);
      },
      getApplicantsString(num) {
        if (num === 1) { return 'applicant'; }
        return 'applicants';
      },
    },
    computed: {
      getApplicantsCount() {
        return this.applicants.length;
      },
      getApplicantsCountString() {
        return `${StringHelper.pluralize('applicant', this.applicants.length)}`;
      },
      // isMobile() {
      //   console.log('test', document.documentElement.clientWidth);
      //   return document.documentElement.clientWidth <= 767;
      // },
    },
  };
</script>
