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
</style>
<template>
  <v-container fluid class="view-applicant-page white-bg">
    <div class="main-cont-large">
          <section style="padding: 0; margin: 15px; width: auto;">
            <v-toolbar card style="z-index: 1;">
              <v-toolbar-title class="hidden-xs" style="padding-right: 10px;">Actions:</v-toolbar-title>
              <v-toolbar-items>
                <v-btn v-if="!data.notes" flat @click="updateNotes(data.notes)">Make note</v-btn>
                <v-btn v-if="data.notes" flat @click="updateNotes(data.notes)">Edit note</v-btn>
                <v-btn flat @click="">Accept</v-btn>
                <v-btn flat @click="">Reject</v-btn>
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
              <v-flex sm4 class="hidden-xs-only">
                <div class="profile-pic-cont hidden-xs-only">
                </div>
              </v-flex>
            </v-layout>

            <v-divider style="margin: 0 15px; width: auto;"></v-divider>

            <v-layout row wrap>
              <v-flex>
                <pdf
                      v-if= "src"
                      v-for="i in numPages"
                      :key="i"
                      :src="src"
                      :page="i"
                ></pdf>
              </v-flex>
            </v-layout>
          </section>
    </div>
  </v-container>
</template>

<script>
  import gql from 'graphql-tag';
  import pdf from 'vue-pdf';

  // const loadingTask =
  // pdf.createLoadingTask('../../server/uploads/5a4081c6aafda36afb0bc423-1514266624436.pdf');

  export default {
    props: ['id'],
    components: {
      pdf,
    },
    data() {
      return {
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
          if (res.resume.filename) {
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
    },
    created() {
      this.getData();
    },
  };
</script>
