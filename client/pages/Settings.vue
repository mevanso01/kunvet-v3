<style scoped>
.settings-page {
  padding: 0;
}
.settings-page .btn {
  margin-left: 0;
}
.settings-page section {
  max-width: 500px !important;
}
.settings-page h2 {
  color: #333;
}
.settings-page h4 {
  color: #616161;
}
.settings-page .divider {
  background-color: #333;
  margin-bottom: 16px;
}

/*NEW CLASSES*/

/* .header-splash {
  background-image: linear-gradient(to right, #EA596B, #F6BE6A);
  width:100%;
  position: relative;
} */

.header-splash {
  height: 230px;
}

.text_field_style{
  /*box-shadow: 14px 10px 16px -4px #eaeaf9;*/
}

.email_address{
  width:100%;
  line-height: 56px;
}

.email_preferences{
  padding-bottom: 12px;
  display: inline-block;
  width:80%;
}

.switch_settings{
  display:inline-block;
}

@media(min-width: 601px){
  .header-splash{
    height: 215px;
  }
}


</style>

<template>
  <v-container fluid class="settings-page">
    <div class="header-splash">
      <div class="main-cont-large bottom" style="background: transparent;">
        <h1>Settings</h1>
      </div>
    </div>

    <div class="main-cont-large">
      <section style="padding: 0; margin: 15px; width: auto;">
        <br>

        <h2>Account Ownership</h2>
        <v-divider></v-divider>

        <br>

        <k-text-field :value="account_email" disabled class="text_field_style">
        </k-text-field>

        <br>

       <!-- <SwitchAccount :bottomPadding="true" />  -->

        <div>
          <k-btn block @click="logout">Logout</k-btn>
        </div>

        <br><br><br>

        <h2>Email Preferences</h2>
        <v-divider></v-divider>
        <!-- Leo: there still is no function to save these preferences? What you need is something
          like <v-switch @change="saveFunctionHere()" v-model="preferences_bool"></v-switch>
          or a save button -->
        <div v-if="preferences">
          <div class="email_preferences">Recieve emails about new applicants</div>
          <v-switch color="red" class="switch_settings"></v-switch>

          <div class="email_preferences">Recieve emails about application status</div>
          <v-switch v-model="preferences_bool" color="red" class="switch_settings"></v-switch>

          <div class="email_preferences">{{preferences_bool}} and {{preferences.applicationStatusEmails}}</div>

          <div class="email_preferences">Recieve emails about job expiration</div>
          <v-switch color="red" class="switch_settings"></v-switch>

          <div class="email_preferences">Recieve emails about newsletters</div>
          <v-switch color="red" class="switch_settings"></v-switch>
        </div>

        <br><br><br>

        <div v-if="orgname && oid">
          <h2>Organization settings</h2>
          <v-divider></v-divider>
          <br>
          <h3 v-if="orgname">Organization name: {{ orgname }}</h3>
          <br>
          <k-btn block @click="deleteOrgDialog = true;" style="background-color:#ea2a2a">Delete This Organization</k-btn>
        </div>
        <br>
      </section>

      <v-dialog v-model="deleteOrgDialog">
        <v-card>
          <v-card-title style="padding-bottom: 0;">
            <div class="headline">Are your sure you want to delete this organization?</div>
          </v-card-title>
          <v-card-text>
            <p style="color: rgba(0,0,0,0.87);">Deleting {{ orgname }} will permanently delete the organization, along with any jobs posted under it.</p>
            <p style="color: #e53935;">This cannot be undone.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn flat @click.native="deleteOrgDialog = false">Cancel</v-btn>
            <v-btn flat color="red darken-1" @click.native="deleteOrganization">Delete anyway</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
  import EventBus from '@/EventBus';
  import Axios from 'axios';
  import gql from 'graphql-tag';
  import SwitchAccount from '@/components/SwitchAccount';

  export default {
    props: ['command'],
    data() {
      return {
        uid: null,
        defaultOrg: { name: '', _id: null },
        orgList: [],
        orgname: null,
        oid: null,
        deleteOrgDialog: false,
        account_email: null,
        preferences: null,
        preferences_bool: true,
      };
    },
    components: {
      SwitchAccount,
    },
    methods: {
      logout() {
        EventBus.$emit('logout');
        this.$store.commit({
          type: 'resetState',
        });
        Axios.get('/auth/logout').then(() => {
        }, (error) => {
          this.$error(error);
        });
        this.$router.push('/');
      },
      async loadAcctData() {
        const { data: { findAccount: res } } = await this.$apollo.query({
          query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
              _id
              default_org
              org_list
              email
              preferences {
                getNewsletters
                jobExpiredEmails
                applicationStatusEmails
              }
            }
          }`),
          variables: {
            uid: this.$store.state.userID,
          },
        });
        this.account_email = res.email;
        this.preferences = res.preferences;

        //  TAKE A LOOK HERE PLS

        if (res.preferences.applicationStatusEmails === 'All') {
          this.preferences_bool = true;
        } else {
          this.preferences_bool = false;
        }
        // Leo: this entire block can be moved into the block above
        // Leo: also, if the names of the properties in this.preferences match the names of the account preferences,
        // then the line 'this.preferences = res.preferences;' is sufficient and this block is useless
        if (this.preferences_bool === false) {
          // Leo: there is no point in modifying the res object! It is only available in this function anyway
          // res.preferences.applicationStatusEmails = 'Off'; // Leo: I've commented this out
          this.preferences.applicationStatusEmails = 'Off';
        } else {
          // res.preferences.applicationStatusEmails = 'All'; // Leo: I've commented this out
          this.preferences.applicationStatusEmails = 'All';
        }
        if (res.org_list && res.org_list[0] !== null) {
          this.orgList = res.org_list;
        }
      },
      async loadOrgData(id) {
        if (!id) return;
        const org = await this.getOrgByID(id);
        this.orgname = org.business_name;
        this.oid = org._id;
      },
      async deleteOrganization() {
        this.$apollo.mutate({
          mutation: (gql`mutation ($oid: MongoID) {
            removeOrganization(filter: {
              _id: $oid
            }) {
              recordId
            }
          }`),
          variables: {
            oid: this.oid,
          },
        });
        this.$apollo.mutate({
          mutation: (gql`mutation ($oid: MongoID, $uid: MongoID) {
            updateJobs (filter: {
              business_id: $oid
            }, record: {
              user_id: $uid,
              is_deleted: true,
            }) {
              numAffected
            }
          }`),
          variables: {
            oid: this.oid,
            uid: this.$store.state.userID,
          },
          refetchQueries: [
            { // from home page
              query: gql`{
                findJobs (filter: { active: true }){
                  _id
                  latitude
                  longitude
                  type
                  studentfriendly
                  type2
                  shift
                  age
                  pay_type
                  date
                  is_deleted
                }
              }`,
            },
            { // from applicants page
              query: (gql`query ($userId: MongoID, $businessId: MongoID) {
                findJobs (filter: { user_id: $userId, business_id: $businessId, active: true }){
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
                businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
              },
            },
          ],
        });
        const NewOrgList = this.orgList.filter(x => x !== this.oid);
        await this.$apollo.mutate({
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
            uid: this.$store.state.userID,
            record: {
              org_list: NewOrgList,
              default_org: null,
              account_type: 'individual',
            },
          },
          refetchQueries: [
            {
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
                    wechat_id
                    profile_pic
                    org_list
                    default_org
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
            },
            {
              query: (gql`query ($uid: MongoID) {
                findAccount (filter: {
                  _id: $uid
                }) {
                    _id
                    firstname
                    lastname
                    default_org
                    org_list
                }
              }`),
              variables: {
                uid: this.$store.state.userID,
              },
            },
          ],
        }).catch((error) => {
          this.$error(error);
        });
        this.$store.commit('unsetBusinessData');
        this.$store.commit({
          type: 'keepUserdata',
          userdata: {
            org_list: NewOrgList,
            default_org: null,
            account_type: 'individual',
          },
        });
        EventBus.$emit('login', 'individual');
        this.$router.push('/');
      },
      async getOrgByID(oid) {
        const { data: { findOrganization } } = await this.$apollo.query({
          query: (gql`query ($oid: MongoID) {
            findOrganization(filter: {
              _id: $oid
            }) {
              _id
              business_name
            }
          }`),
          variables: {
            oid,
          },
        });
        return findOrganization;
      },
      async saveDefaultOrganization() {
        const { defaultOrg } = this;
        await this.$apollo.mutate({
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
            uid: this.uid,
            record: {
              default_org: defaultOrg._id,
            },
          },
          refetchQueries: [{
            query: (gql`query ($uid: MongoID) {
              findAccount (filter: {
                _id: $uid
              }) {
                _id
                default_org
              }
            }`),
            variables: {
              uid: this.uid,
            },
          }],
        });
        this.defaultOrg = { name: defaultOrg.name, _id: defaultOrg._id };
      },
      loginToRegularAccount() {
        EventBus.$emit('individual');
      },
    },
    computed: {
      orgSelectItems() {
        return this.orgList.concat([{ name: 'None (Your individual account)', _id: null }]);
      },
    },
    activated() {
      if (this.$route.query && this.$route.query.o && this.$route.query.o === 'logout') {
        this.logout();
      }
      if (this.$route.params && this.$route.params.command === 'logout') {
        this.logout();
      }
      if (this.$store.state.acct === 2) {
        this.uid = this.$store.state.userID;
        this.loadOrgData(this.$store.state.businessID);
        this.loadAcctData();
      } else if (this.$store.state.acct === 1) {
        this.uid = this.$store.state.userID;
        this.loadAcctData();
      } else {
        this.$router.push('/login');
      }
    },
  };
</script>
