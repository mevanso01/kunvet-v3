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
  .profile-pic-cont {
    z-index: 0;
  }
</style>
<template>
  <v-container fluid class="view-applicant-page white-bg">
    <div class="main-cont-large">
          <section style="padding: 0; margin: 15px; width: auto;">
            <v-toolbar card style="z-index: 1; border-bottom: 1px solid black;">
              <v-toolbar-items style="width: 100%; display: block;">
                <div class="float-left">
                  <view-applicant-toolbar-button
                    :onClick="() => updateNotes(data.notes)"
                    :text="`${!data.notes ? 'Make' : 'Edit'} Note`"
                  />
                </div>
                <div class="float-right">
                  <span v-if="!isAcceptedOrRejected">
                    <view-applicant-toolbar-button
                      :onClick="onAccept"
                      :text="!buttons.acceptClicked ? 'Accept' : 'Confirm'"
                      :color="'#FF9800'"
                      :isFilled="buttons.acceptClicked"
                    />
                    <view-applicant-toolbar-button
                      :onClick="onReject"
                    :text="!buttons.rejectClicked ? 'Reject' : 'Confirm'"
                    :color="'#F44336'"
                    :isFilled="buttons.rejectClicked"
                    />
                  </span>
                  <span
                    v-else
                    style="margin: 0 auto; color: gray; margin-top: 35%; margin-right: 15px;"
                  >
                    {{ getAcceptedOrRejectedText }}
                  </span>
                  <router-link :to="'/applicants'">
                    <view-applicant-toolbar-button
                      :onClick="() => {}"
                      :text="'Back'"
                      :color="'black'"
                    />
                  </router-link>
                </div>
              </v-toolbar-items>
            </v-toolbar>
            <div class="notes" v-if="data.notes || editingNotes">
              <div v-show="!editingNotes" style="font-size: 16px; padding-top: 4px;">
                <pre style="font-family: Verdana;">{{ data.notes }}</pre>
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
              <a class="saveNotes" @click="saveNotes(newNotes)">Save</a>
              <a class="saveNotes" @click="editingNotes = false">Cancel</a>
            </div>
            <v-layout style="padding-top: 30px;">
              <v-flex sm4 class="hidden-xs-only">
                <div class="profile-pic-cont hidden-xs-only">
                </div>
              </v-flex>
              <v-flex xs12 sm8>
                <h1 style="padding-left: 4px;">{{ data.name }}</h1>
                <v-layout>
                  <v-flex xs12 sm10 class="no-padding">
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
                           <i class="fa fa-book" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ data.degree }}
                          </v-list-tile-title>
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
                  </v-flex>
                </v-layout>
              </v-flex>

            </v-layout>

            <v-divider style="margin: 0 15px; width: auto; border-bottom: 1px solid black;"></v-divider>

            <v-layout row wrap>
              <v-flex>
                <div class="resume-header"><img :src="svgs.resume" width="25" height="25" /> <h2>Resume</h2></div>
                <pdf
                  v-if="src"
                  v-for="i in numPages"
                  :key="i"
                  :src="src"
                  :page="i"
                />
              </v-flex>
            </v-layout>
          </section>
    </div>
  </v-container>
</template>

<script>
  import gql from 'graphql-tag';
  import pdf from 'vue-pdf';

  import ViewApplicantToolbarButton from '@/components/ViewApplicantToolbarButton';

  // This is the correct icon (over the font-awesome alternative). Leaving this here for later.
  import MajorPreferredSvg from '@/assets/jobdetail/major_preferred.svg';
  import ResumeFullSvg from '@/assets/navbar/resume_full.svg';

  // const loadingTask =
  // pdf.createLoadingTask('../../server/uploads/5a4081c6aafda36afb0bc423-1514266624436.pdf');

  export default {
    props: ['id'],
    components: {
      pdf,
      ViewApplicantToolbarButton,
    },
    data() {
      return {
        // TODO: Temporary!!
        // Remove when necessary. Mock data because I hate seeding databases manually D:.
        data: {
          name: 'Chau',
          school: 'Bolsa Grande High School',
          degree: 'Computer Science and Engineering',
          email: 'chautnguyen96@gmail.com',
          notes: null,
          status: 'submitted',
        },
        src: undefined,
        numPages: undefined,
        editingNotes: false,
        newNotes: '',
        // mock data end
        svgs: {
          majorPreferred: MajorPreferredSvg,
          resume: ResumeFullSvg,
        },
        buttons: {
          acceptClicked: false,
          rejectClicked: false,
        },
        /*
        data: {
          name: null,
          school: null,
          email: null,
          notes: null,
        },
        src: undefined,
        numPages: undefined,
        editingNotes: false,
        newNotes: '',
        */
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
        this.$apollo.mutate({
          mutation: (gql`mutation ($aplId: MongoID, $notes: String) {
            updateApplication (filter: {
              _id: $aplId
            }, record: {
              notes: $notes
            }) {
              recordId
            }
          }`),
          variables: {
            aplId: this.id,
            notes: text,
          },
          refetchQueries: [{
            query: gql`query ($aplId: MongoID) {
              findApplicant (filter: {
                _id: $aplId
              }) {
                  _id
                  name
                  email
                  school
                  notes
                  resume {
                    filename
                    resumeid
                  }
              }
            }`,
            variables: { aplId: this.id },
          }],
        }).then((data) => {
          console.log(data);
        }).catch((error) => {
          console.error(error);
        });
      },
      getData() {
        this.$apollo.query({
          query: (gql`query ($aplId: MongoID) {
            findApplicant (filter: {
              _id: $aplId
            }) {
                _id
                name
                email
                school
                notes
                resume {
                  filename
                  resumeid
                }
                status
            }
          }`),
          variables: {
            aplId: this.id,
          },
        }).then((data) => {
          const res = data.data.findApplicant;
          console.log('RES', res);
          this.data.name = res.name;
          this.data.school = res.school;
          this.data.email = res.email;
          this.data.notes = res.notes;
          this.data.status = res.status;
          if (res.resume.filename) {
            // const p = this.$http.get(downloadpath)
            const loadingTask = pdf.createLoadingTask(`../../server/uploads/${res.resume.filename}`);
            this.src = loadingTask;
            this.src.then(_pdf => {
              this.numPages = _pdf.numPages;
            });
          }
        }).catch((error) => {
          console.error(error);
        });
      },
      async onAccept() {
        const { buttons: { acceptClicked, rejectClicked } } = this;
        if (!acceptClicked) {
          this.buttons.acceptClicked = true;
          if (rejectClicked) this.buttons.rejectClicked = false;
        } else {
          this.resetButtonsState();
          // handle mutation
          const { findApplicant: { status } } = this.$apollo.mutate({
            mutation: (gql`mutation ($applicantId: MongoID, $status: EnumApplicantStatus) {
             updateApplication (filter: {
               _id: $applicantId
             }, record: {
               status: $status
             }) {
               status
             }
            }`),
            variables: {
              applicantId: this.id,
              status: 'accepted',
            },
            refetchQueries: [{
              query: gql`query ($aplId: MongoID) {
                findApplicant (filter: {
                  _id: $aplId
                }) {
                  status
                }
              }`,
              variables: { aplId: this.id },
            }],
          });
          this.data.status = status;
        }
      },
      async onReject() {
        const { buttons: { acceptClicked, rejectClicked } } = this;
        if (!rejectClicked) {
          this.buttons.rejectClicked = true;
          if (acceptClicked) this.buttons.acceptClicked = false;
        } else {
          this.resetButtonsState();
          // handle mutation
          const { findApplicant: { status } } = await this.$apollo.mutate({
            mutation: (gql`mutation ($applicantId: MongoID, $status: EnumApplicantStatus) {
              updateApplication (filter: {
                _id: $applicantId
              }, record: {
                status: $status
              }) {
                status
              }
            }`),
            variables: {
              applicantId: this.id,
              status: 'rejected',
            },
            refetchQueries: [{
              query: gql`query ($aplId: MongoID) {
                findApplicant (filter: {
                  _id: $aplId
                }) {
                  status
                }
              }`,
              variables: { aplId: this.id },
            }],
          });
          this.data.status = status;
        }
      },
      resetButtonsState() { // Not really necessary, but helps code-wise.
        this.buttons.acceptClicked = false;
        this.buttons.rejectClicked = false;
      },
    },
    computed: {
      isAcceptedOrRejected() {
        const { data: { status } } = this;
        return (status === 'accepted' || status === 'rejected');
      },
      getAcceptedOrRejectedText() {
        const { data: { status } } = this;
        return status.charAt(0).toUpperCase() + status.substring(1, status.length);
      },
    },
    created() {
      this.getData();
    },
  };
</script>
