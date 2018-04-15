<style>
</style>
<template>
  <v-container fluid class="acct-page-container white-bg">
    <div class="main-cont-large">
          <section style="padding: 0; margin: 15px; width: auto;">
            <v-layout>
              <v-flex xs12 sm8>
                <v-layout row wrap>
                  <v-flex xs12 class="acct-name-header-container">
                    <h1 class="acct-name-header-container__name">
                      {{ bdata.business_name }}
                    </h1>
                    <i
                       class="fa fa-edit acct-name-header-container__edit-icon"
                       @click="createEditModal('business_name', bdata.business_name, 'business_name')"
                    />
                  </v-flex>
                  <v-flex xs12 sm10 class="no-padding">
                    <v-list>
                      <v-list-tile
                      <v-list-tile v-if="!bdata.address" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                          <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <!--<v-list-tile-title>Add school info</v-list-tile-title>-->
                          <v-layout class="acct-page-container__input-field-layout">
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
                          <img
                            :src="svgs.locationMarker"
                            class="acct-page-container__display-text-icon"
                          />
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ bdata.address }}
                            <i class="fa fa-edit acct-page-container__edit-icon"
                              @click="createEditModal('address', bdata.address, 'address')"
                            />
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="!bdata.display_email" class="cust-tile-2 grey-color">
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
                                label="Add Contact Email"
                                single-line
                                @keyup.enter="saveProperty('display_email', updateEmail)"
                              />
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
                          <img
                            :src="svgs.accountEmail"
                            class="acct-page-container__display-text-icon"
                          />
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ bdata.display_email }}
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="!bdata.phone_number" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                          <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-layout class="acct-page-container__input-field-layout">
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
                          <img
                            :src="svgs.accountPhone"
                            class="acct-page-container__display-text-icon"
                          />
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ bdata.phone_number }}
                            <i
                              class="fa fa-edit acct-page-container__edit-icon"
                              @click="createEditModal('phone', bdata.phone_number, 'phone_number')"
                            />
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="!bdata.website" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-layout class="acct-page-container__input-field-layout">
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
                          <img
                            :src="svgs.accountGlobe"
                            class="acct-page-container__display-text-icon"
                          />
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            <a
                              :href="`http://${bdata.website}`"
                              target="_blank"
                              class="acct-page-container__website"
                            >
                              {{ bdata.website }}</a><i class="fa fa-edit acct-page-container__edit-icon" @click="createEditModal('website url', bdata.website, 'website')" />
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm4 class="hidden-xs-only">
                <div class="profile-pic-cont hidden-xs-only">
                  <img v-if="bdata.profile_pic" style="width: 100%; height: 100%;" :src="`${serverUrl}/file/get/${bdata.profile_pic}`"></img>
                  <img v-else style="width: 100%; height: 100%;" :src="default_pic"></img>
                  <v-btn style="position: relative; top: -42px; left: -5px; background-color: rgba(0,0,0,0.1);"
                    icon small @click="showPicUploaderDialog = true;">
                    <v-icon style="color: #fff;">photo_camera</v-icon>
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>

            <v-divider class="acct-divider" />

            <v-layout row wrap>
              <v-flex xs12 sm6 md5 class="padding-sm-right">
                <div class="acct-header">
                  <img :src="svgs.people" class="acct-icon" />
                  <h3 class="acct-h3">
                    About Us
                    <i
                      v-if="bdata.biography && bdata.biography !== ''"
                      class="fa fa-edit acct-page-container__edit-icon"
                      @click="createEditModal('biography', bdata.biography, 'biography')"
                    />
                  </h3>
                </div>
                <p v-if="bdata.biography">{{ bdata.biography }}</p>
                <v-btn
                  v-else
                  class="acct-btn"
                  @click="createEditModal('biography', '', 'biography')"
                >
                  Add a Description
                </v-btn>
              </v-flex>

              <v-flex xs12 sm6 offset-md1 class="right-account-column padding-sm-left">
                <account-header
                  :svg="svgs.suitcase"
                  :text="'Posted Jobs & Applicants'"
                />
                <jobs-and-applications-counters v-if="jobs.length > 0" :counters="getJobsAndApplicationsCount" />
                <div>
                  <router-link to="/createnewjob">
                    <v-btn class="acct-btn">
                      Post a Job
                    </v-btn>
                  </router-link>
                </div>

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

                <v-dialog v-model="showPicUploaderDialog" class="auto-dialog">
                  <PicUploader
                    @uploaded="profilePicUploaded"
                    @cancel="showPicUploaderDialog = false"
                    :croppedId="bdata.profile_pic"
                    title="Change Organization Picture"
                  />
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
  import Config from 'config';
  import EventBus from '@/EventBus';

  import AccountHeader from '@/components/AccountHeader';
  import JobsAndApplicationsCounters from '@/components/JobsAndApplicationsCounters';
  import PicUploader from '@/components/PicUploader';

  import getCountersFromJobsAndApplications from '@/utils/getCountersFromJobsAndApplications';

  import AccountEmailSvg from '@/assets/account/account_email.svg';
  import AccountGlobeSvg from '@/assets/account/earth.svg';
  import AccountPhoneSvg from '@/assets/account/account_phone.svg';
  import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
  import PeopleSvg from '@/assets/account/people_full_black.svg';
  import SuitcaseSvg from '@/assets/navbar/suitcase_full_black.svg';

  export default {
    components: {
      AccountHeader,
      JobsAndApplicationsCounters,
      PicUploader,
    },
    data() {
      return {
        serverUrl: Config.get('serverUrl'),
        default_pic: 'https://github.com/leovinogradov/letteravatarpics/blob/master/Letter_Avatars/default_profile.jpg?raw=true',
        active: null,
        updateName: '',
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
          profile_pic: null,
        },
        settingsoption1: '',
        jobs: [],
        applications: [],
        showPicUploaderDialog: false,
        svgs: {
          accountEmail: AccountEmailSvg,
          accountGlobe: AccountGlobeSvg,
          accountPhone: AccountPhoneSvg,
          locationMarker: LocationMarkerSvg,
          people: PeopleSvg,
          suitcase: SuitcaseSvg,
        },
      };
    },
    methods: {
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
      profilePicUploaded(fileId) {
        this.bdata.profile_pic = fileId;
        this.saveData();
        this.showPicUploaderDialog = false;
      },
      saveData() {
        this.commitBdata();
        this.$apollo.mutate({
          mutation: (gql`
            mutation (
              $bid: MongoID,
              $business_name: String
              $address: String,
              $website: String,
              $phone_number: String,
              $profile_pic: MongoID,
            )
          {
            updateOrganization (
              filter: { _id: $bid },
              record: {
                business_name: $business_name,
                address: $address,
                website: $website,
                phone_number: $phone_number,
                profile_pic: $profile_pic,
              }
            ) {
              recordId
            }
          }`),
          variables: {
            // find a more secure way to run query
            bid: this.$store.state.businessID,
            business_name: this.bdata.business_name,
            address: this.bdata.address,
            website: this.bdata.website,
            phone_number: this.bdata.phone_number,
            profile_pic: this.bdata.profile_pic,
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
        // console.log(this.$store.state.businessID);
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
            bid: this.$store.state.businessID,
          },
        }).then((data) => {
          const res = data.data.findOrganization;
          console.log('res', res);
          this.bdata.business_name = res.business_name;
          this.bdata.display_email = res.email;
          this.bdata.address = res.address;
          this.bdata.website = res.website;
          this.bdata.phone_number = res.phone_number;
          this.bdata.biography = res.biography;
          this.bdata.profile_pic = res.profile_pic;
          this.commitBdata();
        }).catch((error) => {
          console.error(error);
        });
      },
      async fillUpJobs() {
        const { data: { findJobs: jobs } } = await this.$apollo.query({
          // this.$store.state.businessID
          query: (gql`query ($userId: MongoID, $businessId: MongoID) {
            findJobs (filter: { user_id: $userId, business_id: $businessId }){
              _id
              active
            }
          }`),
          variables: {
            userId: this.$store.state.userID,
            businessId: this.$store.state.businessID,
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
      EventBus.$on('business', this.fetchBusinessData);
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
