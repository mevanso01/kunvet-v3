<style>
</style>
<template>
  <v-container fluid class="applicant-page job-post__container">
    <div class="main-cont-large">
      <v-layout row wrap>
        <v-flex xs12 v-if="jobs.length === 0">
          You have no jobs.
        </v-flex>
        <template
          v-if="jobs.length > 0"
          v-for="job in jobs"
        >
          <v-flex xs12>
            <h1>{{ job.title }}</h1>
            <p>
              <span class="kunvet-red">
                {{ getApplicantsFromJobs(job._id).length }}
              </span> {{ getApplicantsCountString }} in total
            </p>
          </v-flex>

          <v-flex xs12 sm6
            v-if="applicants.length > 0"
            v-for="item in getApplicantsFromJobs(job._id)"
            class="new-applicant-card"
          >
            <div class="myjobs-container">
              <div class="inner">
                <div class="new-applicant-card__info">
                  <v-layout row wrap>
                    <v-flex xs12 sm2>
                      <div class="new-applicant-card__profile-pic-container">
                        <figure>
                          <div v-if="item.status !== 'opened'" class="new-applicant-card__unread-circle" />
                            <img
                              :src="svgs.kunvetCharacter"
                            />
                            <div style="font-size: 0.6em; color: grey;">
                              <timeago :since="item.date" />
                            </div>
                        </figure>
                      </div>
                    </v-flex>
                    <v-flex xs12 sm10>
                      <router-link :to="'view-applicant/'+item._id">
                        <h2 class="new-applicant-card__title">{{ item.name }}</h2>
                        <p style="overflow: hidden;">
                          <i class="fa fa-graduation-cap new-applicant-card__blue-ico" aria-hidden="true"></i>{{ item.school || 'School not provided' }}<br />
                          <span 
                            v-if="item.degree"
                            style="color: grey; padding-left: 23px;"
                          >
                            {{ item.degree }}<br />
                          </span>
                          <span 
                            v-if="item.major"
                            style="color: grey; padding-left: 23px;"
                          >
                            {{ item.major }}<br />
                          </span>
                          <span style="color: grey;">
                            {{ getApplicantNotesDisplayText(item) }}
                          </span>
                        </p>
                      </router-link>
                    </v-flex>
                  </v-layout>
                </div>
                <div class="btn-holder">
                  <div class="btn-holder__right-elements">
                    <span v-if="isAcceptedOrRejected(item)">
                      <span style="color: grey;">
                        {{ getAcceptedOrRejectedText(item) }}
                      </span>
                      <v-btn
                        v-if="item.status === 'accepted'"
                        class="kunvet-black-small-btn"
                        @click=""
                      >
                        Message
                      </v-btn>
                    </span>
                    <span v-else>
                      <span style="color: red;">
                        {{ getApplicantExpiringText(item) }}
                      </span>
                      <v-btn
                        class="kunvet-accept-small-btn"
                        @click="onShowAcceptDialog(item)"
                      >
                        Accept
                      </v-btn>
                      <v-btn
                        class="kunvet-reject-small-btn"
                        @click="onShowRejectDialog(item)"
                      >
                        Reject
                      </v-btn>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </v-flex>
        </template>
      </v-layout>
    </div>

    <v-dialog v-model="dialogs.showAccept">
      <v-card>
        <v-card-title class="headline">
          Accept Applicant
        </v-card-title>
        <v-card-actions>
          <v-btn color="green darken-1" flat="flat" @click.native="onAccept">
            Confirm
          </v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialogs.showAccept= false">
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
        <v-card-actions>
          <v-btn color="green darken-1" flat="flat" @click.native="onReject">
            Confirm
          </v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialogs.showReject = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import VuexLS from '@/store/persist';
  import axios from 'axios';

  import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
  import KunvetCharacterSvg from '@/assets/account/default_profile_picture.svg';
  import MajorSvg from '@/assets/account/account_major.svg';
  import DegreeSvg from '@/assets/account/degree.svg';

  import DateHelper from '@/utils/DateHelper';
  import StringHelper from '@/utils/StringHelper';
  import { degreeDbToString } from '@/constants/degrees';

  export default {
    created() {
      if (!this.$store.state.acct) {
        console.log('restore state');
        VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
          if (data.bdata && data.acct === 2) {
            this.user = data.bdata.business_name;
            this.getData();
          } else if (data.userdata && data.acct === 1) {
            this.user = `${data.userdata.firstname} ${data.userdata.lastname}`;
            this.getData();
          } else {
            this.$router.push('/login');
          }
        });
      } else if (this.$store.state.acct === 2) {
        this.user = this.$store.state.bdata.business_name;
        this.getData();
      } else if (this.$store.state.acct === 1) {
        this.user = this.$store.state.userdata.firstname + this.$store.state.userdata.lastname;
        this.getData();
      } else {
        this.$router.push('/login');
      }
    },
    data() {
      return {
        loading: true,
        user: null,
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
        },
        svgs: {
          locationMarker: LocationMarkerSvg,
          kunvetCharacter: KunvetCharacterSvg,
          major: MajorSvg,
          degree: DegreeSvg,
        },
      };
    },
    methods: {
      async getData() {
        const { data } = await this.$apollo.query({
          query: (gql`query ($userId: MongoID) {
            findJobs (filter: { user_id: $userId, active: true }){
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
          },
        });
        console.log('DATA', data);
        const jobs = data.findJobs;
        if (jobs && jobs.length > 0 && jobs[0]._id) {
          this.selectedJob = { title: jobs[0].title, id: jobs[0]._id };
        }
        const jobIds = jobs.map(({ _id }) => _id);
        const resolved = await Promise.all(jobIds.map(this.getApplicationsFromJob));
        this.applicants = resolved.reduce((total, curr) => total.concat(curr), []);
        this.jobs = jobs;
      },
      async getApplicants(jobId) {
        return this.$apollo.query({
          query: (gql`query ($JobId: MongoID) {
            findApplicants (filter: {
              job_id: $JobId
            }) {
                _id
                name
                school
                degree
                major
                notes
                job_id
                status
                date
                expiry_date
            }
          }`),
          variables: {
            JobId: jobId,
          },
        });
      },
      async getApplicationsFromJob(jobId) {
        const { data: { findApplicants: applicants } } = await this.getApplicants(jobId);
        return applicants.map(({ degree, ...rest }) => ({ ...rest, degree: degreeDbToString(degree) }));
      },
      async updateApplicantStatus(newStatus = 'submitted') {
        try {
          const { _id: applicantId } = this.dialogs.currentApplicant;
          await axios.post(`/application/${applicantId}/setStatus/${newStatus}`);
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
        } catch (exception) {
          console.log('could not do it:', exception);
        }
        this.resetDialogState();
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
      resetDialogState() {
        this.dialogs.showAccept = false;
        this.dialogs.showReject = false;
        this.dialogs.currentApplicant = {};
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
        return StringHelper.truncate(notes);
      },
    },
    computed: {
      getApplicantsCount() {
        return this.applicants.length;
      },
      getApplicantsCountString() {
        return `${StringHelper.pluralize('applicant', this.applicants.length)}`;
      },
    },
  };
</script>
