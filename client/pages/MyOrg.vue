<style>
</style>
<template>
  <v-container fluid class="acct-page-container white-bg">
    <div class="main-cont-large">
      <div v-if="!email_verified" style="width: 100%; height: 40px; background-color: #ef5350; margin-bottom: 10px;">
        <p style="text-align: center; line-height: 40px; color: #fff;">
          You have not verified your email yet!
          <router-link to="/validate">Verify your email</router-link>
          <!-- <a style="text-decoration: underline;" @click="resendEmail"
            v-if="emailSent === false">Resend
          </a>
          <span v-if="emailSent === true">
            Sent.
          </span> -->
        </p>
      </div>
      <section style="padding: 0; margin: 15px; width: auto;" v-if="bdata">
            <v-layout>
              <v-flex xs12 sm8>
                <v-layout row wrap>
                  <v-flex xs12 class="acct-name-header-container">
                    <h1 class="acct-name-header-container__name" style="margin-bottom: 0;">
                      {{ bdata.business_name }}
                      <i
                         class="fa fa-edit acct-name-header-container__edit-icon"
                         @click="createEditModal('business name', bdata.business_name, 'business_name')"
                      />
                    </h1>
                  </v-flex>
                  <v-flex xs12 sm10 class="no-padding">
                    <v-list>
                      <v-list-tile v-show="!bdata.address" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                          <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <!--<v-list-tile-title>Add school info</v-list-tile-title>-->
                          <v-layout class="acct-page-container__input-field-layout">
                          <v-flex xs10 class="no-padding">
                            <v-text-field
                              ref="addressField"
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
                            <p>{{ bdata.address }}</p>
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
                            <p>{{ bdata.phone_number }}</p>
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
                            <a :href="`http://${bdata.website}`" target="_blank" class="acct-page-container__website">
                              {{ bdata.website }}
                            </a>
                            <i class="fa fa-edit acct-page-container__edit-icon" @click="createEditModal('website URL', bdata.website, 'website')" />
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
                  <v-btn style="position: relative; top: -42px; left: -5px; background-color: rgba(0,0,0,0.15);"
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
                <k-btn
                  v-else
                  @click="createEditModal('biography', '', 'biography')"
                >
                  Add a Description
                </k-btn>
              </v-flex>

              <v-flex xs12 sm6 offset-md1 class="right-account-column padding-sm-left">
                <account-header
                  :svg="svgs.suitcase"
                  :text="'Posted Jobs & Applicants'"
                />
                <jobs-and-applications-counters v-if="jobs.length > 0" :counters="getJobsAndApplicationsCount" />
                <div>
                  <router-link to="/jobs/create">
                    <k-btn>
                      Post a Job
                    </k-btn>
                  </router-link>
                </div>

                <v-dialog v-model="editModal.show">
                  <v-card>
                    <v-card-title>
                      <div class="headline">Edit {{ editModal.title }}</div>
                      <div class="edit-modal-input-cont">
                        <v-text-field v-if="editModal.property === 'biography'"
                          v-model="editModal.text"
                          style="padding: 0 2px;"
                          name="edit-modal-input"
                          placeholder="A description of your business or organization"
                          hide-details
                          multi-line
                          rows=3
                        ></v-text-field>
                        <v-text-field v-else-if="editModal.property === 'address'"
                          ref="addressModalField"
                          v-model="editModal.text"
                          style="padding: 0 2px;"
                          name="edit-modal-input"
                          hide-details
                          single-line
                        ></v-text-field>
                        <v-text-field v-else
                          v-model="editModal.text"
                          style="padding: 0 2px;"
                          name="edit-modal-input"
                          hide-details
                          single-line
                        ></v-text-field>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat="flat" @click.native="destroyEditModal">Cancel</v-btn>
                      <v-btn flat="flat" @click.native="saveFromEditModal">Save</v-btn>
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

                <v-dialog v-model="showJobToPostDialog">
                  <v-card>
                    <v-card-title>
                      <div class="headline">You have an unfinished job! Would you like to continue posting it?</div>
                    </v-card-title>
                    <a @click="showJobToPostDialog = false" class="center" style="display: block; color: #616161 !important; margin-bottom: 12px;">continue later</a>
                    <div class="general-submit" @click="goToCreateJob">
                      <div class="general-submit-default">
                        <span>Continue Editing My Job</span>
                      </div>
                    </div>
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
  import Config from 'config';
  import EventBus from '@/EventBus';
  import axios from 'axios';

  import AccountHeader from '@/components/AccountHeader';
  import JobsAndApplicationsCounters from '@/components/JobsAndApplicationsCounters';
  import PicUploader from '@/components/PicUploader';
  import DateHelper from '@/utils/DateHelper';
  import getCountersFromJobsAndApplications from '@/utils/getCountersFromJobsAndApplications';
  import GoogleMapsAutocomplete from '@/utils/GoogleMapsAutocomplete';

  import AccountEmailSvg from '@/assets/account/account_email.svg';
  import AccountGlobeSvg from '@/assets/account/earth.svg';
  import AccountPhoneSvg from '@/assets/account/account_phone.svg';
  import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
  import PeopleSvg from '@/assets/account/people_full_black.svg';
  import SuitcaseSvg from '@/assets/navbar/suitcase_full_black.svg';
  import Asset30 from '@/assets/icons/Asset(30).svg';

  export default {
    components: {
      AccountHeader,
      JobsAndApplicationsCounters,
      PicUploader,
    },
    data() {
      return {
        serverUrl: Config.get('serverUrl'),
        default_pic: Asset30,
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
        showJobToPostDialog: false,
        svgs: {
          accountEmail: AccountEmailSvg,
          accountGlobe: AccountGlobeSvg,
          accountPhone: AccountPhoneSvg,
          locationMarker: LocationMarkerSvg,
          people: PeopleSvg,
          suitcase: SuitcaseSvg,
        },
        email_verified: true,
        emailSent: false,
        jobToPost: null,
      };
    },
    methods: {
      goToCreateJob() {
        // Used for reopening unfinished job
        this.$router.push(`/jobs/create/${this.jobToPost}`);
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

        setImmediate(() => {
          if (property === 'address') {
            GoogleMapsAutocomplete.attach(this.$refs.addressModalField, (place) => {
              if (place.geometry) {
                this.editModal.text = place.formatted_address;
              }
            });
          }
        });
      },
      destroyEditModal() {
        if (this.$refs.addressModalField) {
          GoogleMapsAutocomplete.detach(this.$refs.addressModalField);
        }
        this.editModal.show = false;
        this.editModal.title = null;
        this.editModal.text = null;
      },
      saveFromEditModal() {
        const text = this.editModal.text;
        const property = this.editModal.property;
        if (property === 'business_name') {
          EventBus.$emit('changed_name', { oldname: this.bdata[property], newname: text });
        }
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
            bid: this.$store.state.businessID,
            business_name: this.bdata.business_name,
            address: this.bdata.address,
            website: this.bdata.website,
            phone_number: this.bdata.phone_number,
            profile_pic: this.bdata.profile_pic,
          },
          refetchQueries: [{
            query: (gql`query ($oid: MongoID) {
              findOrganization(filter: {
                _id: $oid
              }) {
                business_name
                _id
              }
            }`),
            variables: {
              oid: this.$store.state.businessID,
            },
          }],
        }).catch((error) => {
          this.$error(error);
        });
      },
      commitBdata() {
        this.$store.commit({
          type: 'keepBdata',
          bdata: this.bdata,
        });
      },
      fetchBusinessData() {
        this.$debug('fetching business data');
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
          this.bdata.business_name = res.business_name;
          this.bdata.display_email = res.email;
          this.bdata.address = res.address;
          this.bdata.website = res.website;
          this.bdata.phone_number = res.phone_number;
          this.bdata.biography = res.biography;
          this.bdata.profile_pic = res.profile_pic;
          this.commitBdata();
        }).catch((error) => {
          this.$error(error);
        });
      },
      isJobExpired(job) {
        if (!job.date) {
          return false;
        }
        const expiryDate = job.expiry_date ? new Date(job.expiry_date) : DateHelper.getExpiryDate(job.date, Config.get('daysToExpire'));
        const daysDiff = DateHelper.getDifferenceInDays(Date.now(), expiryDate);
        return daysDiff <= 0;
      },
      async fillUpJobs() {
        const { data: { findJobs: jobs } } = await this.$apollo.query({
          // this.$store.state.businessID
          query: (gql`query ($userId: MongoID, $businessId: MongoID) {
            findJobs (filter: { user_id: $userId, business_id: $businessId, is_deleted: false }){
              _id
              active
              expiry_date
              date
            }
          }`),
          variables: {
            userId: this.$store.state.userID,
            businessId: this.$store.state.businessID,
          },
        });
        this.jobs = jobs.concat([]);
        if (this.jobs.length === 1 && !this.jobs[0].active && !this.isJobExpired(this.jobs[0])) {
          this.jobToPost = this.jobs[0]._id;
          this.showJobToPostDialog = true;
        } else {
          this.jobToPost = null;
          this.showJobToPostDialog = false;
        }
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
              job_id
              status
            }
          }`),
          variables: {
            JobId: jobId,
          },
        });

        return applications;
      },
      fetchAcctData() {
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
                default_org
                resumes {
                  name
                  filename
                  resumeid
                }
                email_verified
            }
          }`),
          variables: {
            uid: this.$store.state.userID,
          },
        }).then((data) => {
          const res = data.data.findAccount;
          this.email_verified = res.email_verified;
        }).catch((error) => {
          this.$error(error);
        });
      },
      resendEmail() {
        if (this.loading) {
          return;
        }
        const data = {
          email: this.bdata.display_email,
        };
        this.loading = true;
        axios.post('/auth/resendVerificationEmail', data).then((res) => {
          this.loading = false;
          if (res.data.noUnverified) {
            this.email_verified = true;
          } else if (res.data.success) {
            this.emailSent = true;
          } else {
            this.emailSent = null;
          }
        }, (error) => {
          this.$error(error);
          this.emailSent = null;
          this.loading = false;
        });
      },
    },
    computed: {
      getJobsAndApplicationsCount() {
        const { jobs, applications } = this;
        return getCountersFromJobsAndApplications(jobs, applications);
      },
    },
    activated() {
      EventBus.$on('business', this.fetchBusinessData);
      const data = this.$store.state;
      if (data.acct === 2) {
        this.fetchAcctData();
        if (data.bdata && data.bdata.business_name) {
          this.bdata = data.bdata;
        } else if (data.businessID) {
          this.fetchBusinessData();
        }
        this.fillUpJobs(); // Depends on this.bdata being filled.
      } else if (data.acct === 1) {
        this.$router.push('/account');
      } else {
        this.$router.push('/login');
      }
    },
    mounted() {
      GoogleMapsAutocomplete.attach(this.$refs.addressField, (place) => {
        if (!place.geometry) {
          return;
        }
        this.updateAddress = place.formatted_address;
      });
    },
  };
</script>
