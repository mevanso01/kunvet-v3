<style>
/* argh duplicate code between this and Account.vue */
.acct-header img {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.acct-header h3 {
  display: inline-block;
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
                <h1>{{ bdata.business_name }}</h1>
                <v-layout>
                  <v-flex xs12 sm10 class="no-padding">
                    <v-list>
                      <v-list-tile v-if="!bdata.address" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <!--<v-list-tile-title>Add school info</v-list-tile-title>-->
                          <v-layout style="width: 100%">
                          <v-flex xs10 class="no-padding">
                            <v-text-field
                              v-model="updateAddress"
                              class="no-padding no-underline"
                              name="input-1-3"
                              label="Add Address"
                              single-line
                              @keyup.enter="saveProperty('address', updateAddress)"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 v-show="updateAddress" class="no-padding">
                            <v-btn small center class="cust-btn-1" @click="saveProperty('address', updateAddress)">
                              Save
                            </v-btn>
                          </v-flex>
                        </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="bdata.address" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ bdata.address }}
                            <v-icon
                              class = "edit-icon"
                              @click="createEditModal('address', bdata.address, 'address')">
                              edit
                            </v-icon>
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="!bdata.display_email" class="cust-tile-2 grey-color">
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
                                label="Add Contact Email"
                                single-line
                                @keyup.enter="saveProperty('display_email', updateEmail)"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 v-show="updateEmail" class="no-padding">
                              <v-btn small  center class="cust-btn-1" @click="saveProperty('display_email', updateEmail)">
                                Save
                              </v-btn>
                            </v-flex>
                          </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="bdata.display_email" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ bdata.display_email }}
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="!bdata.phone_number" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-layout style="width: 100%">
                            <v-flex xs10 class="no-padding">
                              <v-text-field
                                v-model="updatePhoneNumber"
                                class="no-padding no-underline"
                                name="input-3"
                                label="Add Phone"
                                single-line
                                @keyup.enter="saveProperty('phone_number', updatePhoneNumber)"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 v-show="updatePhoneNumber" class="no-padding">
                              <v-btn small  center class="cust-btn-1" @click="saveProperty('phone_number', updatePhoneNumber)">
                                Save
                              </v-btn>
                            </v-flex>
                          </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="bdata.phone_number" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ bdata.phone_number }}
                            <v-icon
                              class = "edit-icon"
                              @click="createEditModal('phone number', bdata.phone_number, 'phone_number')">
                              edit
                            </v-icon>
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="!bdata.website" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-layout style="width: 100%">
                            <v-flex xs10 class="no-padding">
                              <v-text-field
                                v-model="updateWebsite"
                                class="no-padding no-underline"
                                name="input-3"
                                label="Add Website"
                                single-line
                                @keyup.enter="saveProperty('website', updateWebsite)"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 v-show="updateWebsite" class="no-padding">
                              <v-btn small  center class="cust-btn-1" @click="saveProperty('website', updateWebsite)">
                                Save
                              </v-btn>
                            </v-flex>
                          </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="bdata.website" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-globe" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            <a :href="bdata.website" target="_blank">{{ bdata.website }}</a>
                            <v-icon
                              class = "edit-icon"
                              @click="createEditModal('website url', bdata.website, 'website')">
                              edit
                            </v-icon>
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
                  <img :src="svgs.people" />
                  <h3 class="acct-h3">
                    About Us
                    <v-icon
                      v-if="bdata.biography"
                      class = "edit-icon"
                      @click="createEditModal('biography', bdata.biography, 'biography')">
                      edit
                    </v-icon>
                  </h3>
                </div>
                <p v-if="bdata.biography">{{ bdata.biography }}</p>
                <account-button
                  v-else
                  :text="'Add a Description'"
                  :onClick="() => createEditModal('biography', '', 'biography')"
                />
              </v-flex>

              <v-flex xs12 sm6 offset-md1 class="right-account-column padding-sm-left">
                <div class="acct-header">
                  <img :src="svgs.suitcase" />
                  <h3 class="acct-h3">Posted Jobs and Applicants</h3>
                </div>
                <div class="float-right-sm-up">
                  <jobs-and-applications-counters v-if="jobs.length > 0" :counters="getJobsAndApplicationsCount" />
                  <div>
                    <router-link to="/createnewjob">
                      <account-button :text="'Post a Job'" />
                    </router-link>
                  </div>
                </div>

                <v-dialog v-model="addorg">
                  <v-card>
                    <v-card-title class="headline">Create organization / business profile</v-card-title>
                    <v-card-actions>
                      <!--<v-spacer></v-spacer>-->
                      <v-btn color="green darken-1" flat="flat" @click.native="addorg = false">Create</v-btn>
                      <v-btn color="green darken-1" flat="flat" @click.native="addorg = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="editModal.show">
                  <v-card>
                    <v-card-title>
                      <div class="headline">Edit {{ editModal.title }}</div>
                      <div class="edit-modal-input-cont">
                        <v-text-field v-if="editModal.property !== 'biography'"
                          v-model="editModal.text"
                          style="padding: 0 2px;"
                          name="edit-modal-input"
                          hide-details
                          single-line
                        ></v-text-field>
                        <v-text-field v-if="editModal.property === 'biography'"
                          v-model="editModal.text"
                          style="padding: 0 2px;"
                          name="edit-modal-input"
                          placeholder="A description of your business or organization"
                          hide-details
                          multi-line
                          rows=3
                        ></v-text-field>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn color="green darken-1" flat="flat" @click.native="destroyEditModal">Cancel</v-btn>
                      <v-btn color="green darken-1" flat="flat" @click.native="saveFromEditModal">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

              </v-flex>
            </v-layout>
          </section>
    </div>
  </v-container>
</template>

<script>
  import App from '@/App';
  import gql from 'graphql-tag';
  import VuexLS from '@/store/persist';

  import AccountButton from '@/components/AccountButton';
  import JobsAndApplicationsCounters from '@/components/JobsAndApplicationsCounters';

  import getCountersFromJobsAndApplications from '@/utils/getCountersFromJobsAndApplications';

  import PeopleFullWhite from '@/assets/navbar/people_full_white.svg';
  import SuitcaseFullGray from '@/assets/navbar/suitcase_full_gray.svg';

  export default {
    components: {
      JobsAndApplicationsCounters,
      AccountButton,
    },
    data() {
      return {
        tabs: ['Profile', 'Resume', 'Jobs', 'Settings'],
        active: null,
        updateAddress: '',
        updateEmail: '',
        updateWebsite: '',
        updatePhoneNumber: '',
        jobs_list: [],
        photos_list: [],
        editModal: {
          title: null,
          text: null,
          property: null,
          show: false,
        },
        bdata: {
          business_name: null,
          address: null,
          display_email: null,
          phone_number: null,
          website: null,
          biography: null,
        },
        settingsoption1: '',
        addorg: false,
        jobs: [],
        applications: [],
        svgs: {
          people: PeopleFullWhite,
          suitcase: SuitcaseFullGray,
        },
      };
    },
    methods: {
      next() {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length];
      },
      logout() {
        App.methods.logout();
      },
      saveProperty(property, value) {
        this.bdata[property] = value;
        this.saveData();
      },
      saveEmail() {
        this.bdata.email = this.updateEmail;
        this.updateEmail = '';
        this.saveData();
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
        this.bdata[property] = text;
        this.saveData();
        this.destroyEditModal();
      },
      saveData() {
        this.commitBdata();
        this.$apollo.mutate({
          mutation: (gql`
            mutation (
              $bid: MongoID,
              $address: String,
              $website: String,
              $phone_number: String,
              $de: String)
          {
            updateOrganization (
              filter: { _id: $bid },
              record: {
                address: $address,
                website: $website,
                phone_number: $phone_number,
                display_email: $de,
              }
            ) {
              recordId
            }
          }`),
          variables: {
            // find a more secure way to run query
            bid: this.$store.state.businessID,
            address: this.bdata.address,
            website: this.bdata.website,
            phone_number: this.bdata.phone_number,
            de: this.bdata.display_email,
          },
        }).catch((error) => {
          console.error(error);
        });
      },
      commitBdata() {
        this.$store.commit({
          type: 'keepBdata',
          bdata: this.bdata,
        });
      },
      fetchBusinessData() {
        console.log('fetching business data');
        console.log(this.$store.state.businessID);
        this.$apollo.query({
          query: (gql`query ($bid: MongoID) {
            findOrganization (filter: {
              _id: $bid
            }) {
                business_name
                address
                display_email
                phone_number
                website
                biography
            }
          }`),
          variables: {
            bid: this.$store.state.businessID,
          },
        }).then((data) => {
          const res = data.data.findOrganization;
          console.log('res', res);
          this.bdata.business_name = res.business_name;
          this.bdata.display_email = res.display_email;
          this.bdata.address = res.address;
          this.bdata.website = res.website;
          this.bdata.phone_number = res.phone_number;
          this.bdata.biography = res.biography;
          this.commitBdata();
        }).catch((error) => {
          console.error(error);
        });
      },
      async fillUpJobs() {
        const { business_name: businessName } = this.bdata;
        const { data: { findJobs: jobs } } = await this.$apollo.query({
          // this.$store.state.businessID
          query: (gql`query ($businessName: String) {
            findJobs (filter: { posted_by: $businessName}){
              _id
              active
            }
          }`),
          variables: {
            businessName, // this.$store.state.businessID,
          },
        });
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
    },
    computed: {
      getJobsAndApplicationsCount() {
        const { jobs, applications } = this;
        return getCountersFromJobsAndApplications(jobs, applications);
      },
    },
    created() {
      VuexLS.restoreState('vuex',  window.localStorage).then(async (data) => {
        if (data.acct === 2) {
          if (data.bdata) {
            this.bdata = data.bdata;
            console.log(data.bdata);
          } else if (this.$store.state.businessID) {
            this.fetchBusinessData();
          }
          await this.fillUpJobs(); // Depends on this.b_data being filled.
        } else if (data.acct === 1) {
          this.$router.push('/account');
        } else {
          this.$router.push('/login');
        }
      });
    },
  };
</script>
