<style>
.view-applicant-page .notes {
  width: 100%;
  background: #fafafa;
  padding: 1px 10px 5px 10px;
}
.view-applicant-page .saveNotesDiv {
  width: 100%;
  background: #fafafa;
  padding: 3px 10px 5px 10px;
}
.view-applicant-page .saveNotes {
  cursor: pointer;
  padding-right: 10px;
  text-decoration: underline;
}
.view-applicant-page .list__tile__title {
  user-select: text;
}
.resume-header img {
  display: inline-block;
}
.resume-header h2 {
  display: inline-block;
}
.view-applicant-profile-pic-cont {
  float: none;
  display: inline-block;
  z-index: 90;
  width: 210px;
  height: 210px;
  border: 1px solid grey;
  background-color: grey;
}
.view-applicant-container {
  padding-top: 15px;
}
.view-applicant-details {
  display: inline-block;
  vertical-align: top;
}
.view-applicant-left-elements,
.view-applicant-right-elements {
  display: inline-block;
}
.main-cont-large .toolbar__content {
  height: 100%;
}
.view-applicant-page iframe body {
  background-color: #fff !important;
}
@media only screen and (min-width: 320px) {
  .view-applicant-left-elements {
    float: left;
  }
  .view-applicant-right-elements {
    float: right;
  }
}
@media only screen and (min-width: 601px) {
  .view-applicant-container {
    padding-top: 20px;
    padding-bottom: 15px;
  }
  .view-applicant-details {
    padding-left: 30px;
  }
}
@media only screen  and (max-width: 960px) {
  .view-applicant-profile-pic-cont {
    width: 186px;
    height: 186px;
  }
}
</style>
<template>
  <v-container fluid class="view-applicant-page white-bg">
    <div class="main-cont-large">
          <section style="padding: 0; margin: 15px; width: auto;">
            <v-toolbar height="64px" card style="z-index: 1; border-bottom: 1px solid black; padding: 0 12px;">
              <v-toolbar-items style="width: 100%; display: block;">
                <div class="view-applicant-left-elements">
                  <router-link :to="'/applicants'">
                    <v-btn
                      class="kunvet-black-large-btn"
                    >
                      Back
                    </v-btn>
                  </router-link>
                </div>
                <div class="view-applicant-right-elements">
                  <span v-if="!isAcceptedOrRejected">
                    <v-btn
                      class="kunvet-accept-large-btn"
                      @click.native.stop="dialogs.showAccept = true"
                    >
                      Accept
                    </v-btn>
                    <v-btn
                      class="kunvet-reject-large-btn"
                      @click.native.stop="dialogs.showReject = true"
                    >
                      Reject
                    </v-btn>
                  </span>
                  <span
                    v-else
                    style="margin: 0 auto; color: gray; margin-top: 35%; margin-right: 15px;"
                  >
                    {{ getAcceptedOrRejectedText }}
                  </span>
                  <v-btn
                    class="kunvet-black-large-btn"
                    @click="updateNotes(data.notes)"
                  >
                    {{ `${!data.notes ? 'Make' : 'Edit' } Note` }}
                  </v-btn>
                </div>
              </v-toolbar-items>
            </v-toolbar>
            <div class="notes" v-if="data.notes || editingNotes">
              <div v-show="!editingNotes" style="font-size: 16px; padding-top: 6px;">
                <pre style="font-family: Verdana; white-space: pre-line;">
                  {{ data.notes }}
                </pre>
              </div>
              <v-text-field
                v-if="editingNotes"
                v-model="newNotes"
                class="no-padding no-underline"
                name="update-notes"
                placeholder="This applicant is..."
                multi-line
                auto-grow
                rows=1
                hide-details
              ></v-text-field>
            </div>
            <div v-if="editingNotes" class="saveNotesDiv">
              <v-btn
                class="kunvet-black-small-btn"
                @click="saveNotes(newNotes)"
              >
                Save
              </v-btn>
              <v-btn
                class="kunvet-black-small-btn"
                @click="editingNotes = false"
              >
                Cancel
              </v-btn>
            </div>
            <v-layout row wrap class="view-applicant-container">
              <v-flex>
                <div class="view-applicant-profile-pic-cont hidden-xs-only" />
                <div class="view-applicant-details">
                  <h1 style="padding-left: 4px; margin-bottom: 0;">{{ data.name }}</h1>
                  <v-list>
                    <v-list-tile v-if="data.school" class="cust-tile-2">
                      <v-list-tile class="cust-tile-1">
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                      </v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          {{ data.school }}
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-if="data.degree" class="cust-tile-2">
                      <v-list-tile class="cust-tile-1">
                        <img
                          :src="svgs.degree"
                          width=16
                          height=16
                          style="margin-left: 3px"
                        />
                      </v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          {{ data.degree }}
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-if="data.major" class="cust-tile-2">
                      <v-list-tile class="cust-tile-1">
                        <i class="fa fa-book" aria-hidden="true"></i>
                      </v-list-tile>
                      <v-list-tile-content>
                        {{ data.major }}
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-if="data.email" class="cust-tile-2">
                      <v-list-tile class="cust-tile-1">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      </v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          {{ data.email }}
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </div>
              </v-flex>
            </v-layout>
            <!-- style="border: 2px solid #D3D3D3;" -->
            <v-divider class="acct-divider"/>

            <v-layout row wrap>
              <v-flex>
                <account-header
                  :svg="svgs.resume"
                  :text="'Resume'"
                />
                <pdf
                  v-if="src"
                  :src="src"
                  :page="page"
                />
                <div v-if="src" style="padding-top: 5px">
                  <v-btn :disabled="page == 1" @click="page -= 1">Previous</v-btn>
                  <v-btn v-if="src" :disabled="page == numPages" @click="page += 1">Next</v-btn>
                </div>
                <iframe v-if="docurl" :src="docurl" style="width: 100%; height: 1200px; overflow: hidden"></iframe>

              </v-flex>
            </v-layout>
          </section>
    </div>
    <v-dialog v-model="dialogs.showAccept">
      <v-card>
        <v-card-title class="headline">
          Accept Applicant?
        </v-card-title>
        <v-card-text style="padding-top: 0; padding-bottom: 0;">
          <p>Notify this applicant that you are interested in their application and would like to communicate with them further.</p>
          <p v-if="loading">Loading...</p>
          <p v-if="errorOccured">An error occured, please try again later</p>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="loading" color="yellow darken-3" flat="flat" @click.native="onAccept">
            Accept
          </v-btn>
          <v-btn flat="flat" @click.native="closeDialogs">
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
        <v-card-text style="padding-top: 0; padding-bottom: 0;">
          <p v-if="loading">Loading...</p>
          <p v-if="errorOccured">An error occured, please try again later</p>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="loading" color="red darken-1" flat="flat" @click.native="onReject">
            Reject
          </v-btn>
          <v-btn flat="flat" @click.native="closeDialogs">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import axios from 'axios';
import gql from 'graphql-tag';
import pdf from 'vue-pdf';

import { degreeDbToString } from '@/constants/degrees';

import AccountHeader from '@/components/AccountHeader';

import DegreeSvg from '@/assets/account/degree.svg';
import MajorPreferredSvg from '@/assets/job_detail/major_preferred.svg';
import ResumeSvg from '@/assets/navbar/resume_full_black.svg';
import Config from 'config';
import queries from '@/constants/queries';

export default {
  props: ['id'],
  components: {
    AccountHeader,
    pdf,
  },
  data() {
    return {
      data: {
        name: null,
        school: null,
        degree: null,
        major: null,
        email: null,
        notes: null,
        status: null,
      },
      src: undefined,
      docurl: undefined,
      numPages: undefined,
      editingNotes: false,
      newNotes: '',
      // mock data end
      svgs: {
        majorPreferred: MajorPreferredSvg,
        resume: ResumeSvg,
        degree: DegreeSvg,
      },
      dialogs: {
        showAccept: false,
        showReject: false,
      },
      page: 1,
      loading: false,
      errorOccured: false,
      serverUrl: Config.get('serverUrl'),
    };
  },
  methods: {
    updateNotes(currentNotes) {
      this.editingNotes = true;
      this.newNotes = currentNotes;
    },
    saveNotes(text) {
      this.editingNotes = false;
      // var newText = text.replace(/\n/, '<br>');
      this.data.notes = text;
      this.$apollo
        .mutate({
          mutation: gql`
            mutation($aplId: MongoID, $notes: String) {
              updateApplication(
                filter: { _id: $aplId }
                record: { notes: $notes }
              ) {
                recordId
              }
            }
          `,
          variables: {
            aplId: this.id,
            notes: text,
          },
          refetchQueries: [
            {
              query: gql`
                query($aplId: MongoID) {
                  findApplicant(filter: { _id: $aplId }) {
                    ${queries.FindApplicantRecord}
                    notes
                  }
                }
              `,
              variables: { aplId: this.id },
            },
          ],
        }).then(data => {
          console.log(data);
        }).catch(error => {
          console.error(error);
        });
    },
    getData() {
      this.$apollo
        .query({
          query: gql`
            query($aplId: MongoID) {
              findApplicant(filter: { _id: $aplId }) {
                ${queries.FindApplicantRecord}
                notes
              }
            }
          `,
          variables: {
            aplId: this.id,
          },
        })
        .then(async data => {
          const res = data.data.findApplicant;
          const isEmployer = await this.isEmployer(res.job_id);
          // Only employers that made this job should be able to view the applicant.
          if (!isEmployer) this.$router.push('/applicants');
          this.data.name = res.name;
          this.data.school = res.school;
          this.data.email = res.email;
          this.data.notes = res.notes;
          this.data.status = res.status;
          this.data.degree = degreeDbToString(res.degree);
          this.data.major = res.major;
          if (res.resume && res.resume.filename) {
            const url = `${this.serverUrl}/file/get/${res.resume.filename}`;
            // const url = '../../../uploads/3a194d40-2268-11e8-b674-e3bddf9cbbe8.pdf';
            // console.log('URL', url);
            // true || url.substr(url.length - 4) === '.pdf'
            // file is a pdf
            try {
              this.src = pdf.createLoadingTask(url);
              await this.src.then((p) => {
                this.numPages = p.numPages;
              });
            } catch (e) {
              if (e.name === 'InvalidPDFException') {
                console.log(url);
                this.src = null;
                this.docurl = `${url}#embedded=true`;
              } else {
                console.error(e);
              }
            }
            /* } else {
              // file is not a pdf
              this.src = null;
              this.docurl = `${url}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`;
            } */
          }
          if (res.status === 'submitted') {
            this.updateApplicantStatus('opened');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    async isEmployer(jobId) {
      const { data: { findJob: job } } = await this.$apollo.query({
        query: gql`
          query($jobId: MongoID) {
            findJob(filter: { _id: $jobId }) {
              user_id
            }
          }
        `,
        variables: {
          jobId,
        },
      });
      return job.user_id === this.$store.state.userID;
    },
    updateApplicantStatus(newStatus = 'submitted') {
      console.log(newStatus);
      this.loading = true;
      axios.post(`/application/${this.id}/setStatus/${newStatus}`)
        .then((res) => {
          console.log('RES', res);
          this.loading = false;
          this.data.status = newStatus;
          if (res.data.success) {
            this.closeDialogs();
            this.$apollo.mutate({
              mutation: gql`
                mutation($aplId: MongoID, $status: String) {
                  updateApplication(
                    filter: { _id: $aplId }
                    record: { status: $status }
                  ) {
                    recordId
                  }
                }
              `,
              variables: {
                aplId: this.id,
                status: newStatus,
              },
              refetchQueries: [{
                query: gql`
                  query($aplId: MongoID) {
                    findApplicant(filter: { _id: $aplId }) {
                      ${queries.FindApplicantRecord}
                    }
                  }
                `,
                variables: { aplId: this.id },
              }],
            }).catch(error => {
              console.error(error);
            });
          } else {
            this.errorOccured = true;
          }
        })
        .catch((err) => {
          this.errorOccured = true;
          console.error(err);
        });
    },
    async onAccept() {
      this.updateApplicantStatus('accepted');
    },
    async onReject() {
      this.updateApplicantStatus('rejected');
    },
    closeDialogs() {
      this.dialogs.showAccept = false;
      this.dialogs.showReject = false;
      this.errorOccured = false;
    },
  },
  computed: {
    isAcceptedOrRejected() {
      const { data: { status } } = this;
      return status === 'accepted' || status === 'rejected';
    },
    getAcceptedOrRejectedText() {
      const { data: { status } } = this;
      return (
        status.charAt(0).toUpperCase() + status.substring(1, status.length)
      );
    },
  },
  created() {
    this.getData();
  },
};
</script>
