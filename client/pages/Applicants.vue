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
            class="new-applicant-card new-applicant-card--equal-height"
          >
            <div class="inner" style="position: relative;">
              <div class="new-applicant-card__info">
                <v-layout row wrap>
                  <v-flex xs3 sm3 style="padding-bottom: 0;">
                    <div class="new-applicant-card__profile-pic-container">
                      <figure>
                        <div v-if="item.status === 'submitted'" class="new-applicant-card__unread-circle" />
                          <img
                            :src="svgs.kunvetCharacter"
                          />
                          <div class="new-applicant-card__time-ago" style="margin-left: 5px;">
                            <timeago :since="item.date" />
                          </div>
                      </figure>
                    </div>
                  </v-flex>
                  <v-flex xs9 sm9 style="padding-bottom: 0; cursor: pointer;" @click="openApplication(item)">
                      <h2 class="new-applicant-card__title">{{ item.name }}</h2>
                      <p style="overflow: hidden; margin-bottom: 0;">
                        <span>
                          {{ item.school || 'School info unknown' }}
                        </span><br />
                        <span
                          v-if="item.degree && item.degree !== 'None' && item.degree != 'High school'"
                          style="color: grey;"
                        >
                          {{ item.degree }} in {{ item.major }}<br />
                        </span>
                        <span
                          v-if="item.degree === 'High school'"
                          style="color: grey;"
                        >
                          {{ item.degree }}
                        </span>
                        <span v-if="item.notes" style="color: grey;">
                          Notes: {{ getApplicantNotesDisplayText(item) }}
                        </span>
                      </p>
                  </v-flex>
                </v-layout>
              </div>
              <div class="btn-holder btn-holder--equal-height">
                <div class="btn-holder__right-elements">
                  <span v-if="isAcceptedOrRejected(item)">
                    <span style="color: grey;">
                      {{ getAcceptedOrRejectedText(item) }}
                    </span>
                    <v-btn
                      v-if="item.status === 'accepted'"
                      class="kunvet-black-small-btn"
                      @click="showContactInfoDialog(item)"
                    >
                      Contact
                    </v-btn>
                    <!--<v-btn
                      v-if="item.status === 'accepted'"
                      class="kunvet-black-small-btn"
                      :href="`mailto:${item.email}`"
                    >
                      Send email
                    </v-btn>-->
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
          </v-flex>
        </template>
      </v-layout>
    </div>

    <v-dialog v-model="dialogs.showAccept">
      <v-card>
        <v-card-title class="headline">
          Accept Applicant
        </v-card-title>
        <p style="margin: 0 16px;" v-if="loading || true">Loading...</p>
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
        <p style="margin: 0 16px;" v-if="loading || true">Loading...</p>
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
  import VuexLS from '@/store/persist';
  import axios from 'axios';
  import difference from 'lodash/difference';

  import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
  import KunvetCharacterSvg from '@/assets/account/default_profile_picture.svg';
  import MajorSvg from '@/assets/account/account_major.svg';
  import DegreeSvg from '@/assets/account/degree.svg';

  import DateHelper from '@/utils/DateHelper';
  import StringHelper from '@/utils/StringHelper';
  import { degreeDbToString } from '@/constants/degrees';
  import queries from '@/constants/queries';

  export default {
    created() {
      if (!this.$store.state.acct) {
        VuexLS.restoreState('vuex',  window.localStorage).then((data) => {
          if (data.bdata && data.acct === 2) {
            // this.user = data.bdata.business_name;
            this.getData();
          } else if (data.userdata && data.acct === 1) {
            // this.user = `${data.userdata.firstname} ${data.userdata.lastname}`;
            this.getData();
          } else {
            this.$router.push('/login');
          }
        });
      } else if (this.$store.state.acct === 2) {
        // this.user = this.$store.state.bdata.business_name;
        this.getData();
      } else if (this.$store.state.acct === 1) {
        // this.user = this.$store.state.userdata.firstname + this.$store.state.userdata.lastname;
        this.getData();
      } else {
        this.$router.push('/login');
      }
    },
    data() {
      return {
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
      };
    },
    methods: {
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
        this.applicants = resolved.reduce((total, curr) => total.concat(curr), []);
        this.jobs = jobs;
        this.loadFromNetwork();
      },
      async loadFromNetwork() {
        if (this.jobs && this.jobs.length > 0) {
          const jobIds = this.jobs.map(({ _id }) => _id);
          const resolved = await Promise.all(jobIds.map(id => this.getApplicationsFromJob(id, false)));
          const applicants = resolved.reduce((total, curr) => total.concat(curr), []);
          const diff = difference(applicants, this.applicants);
          if (diff && diff.length > 0) {
            for (var i = 0; i < diff.lenght; i++) {
              this.applicants.push(diff[i]);
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
          await this.updateApplicantViaQuery(applicantId);
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
          console.log('could not do it:', exception);
        }
        this.loading = false;
        this.resetDialogState();
      },
      updateApplicantViaQuery(id) {
        // console.log('newStatus', newStatus);
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
          console.error(error);
        });
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
        /* if (item.status === 'submitted') {
          this.updateApplicantStatus('opened', item._id);
        } */
        this.$router.push(`view-applicant/${item._id}`);
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
