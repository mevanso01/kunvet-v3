<style lang="scss" scoped>
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

.email_preferences {
  // padding-top: 12px;
  line-height: 48px;
  display: inline-block;
  width: calc(100% - 60px);
  color: #4d4d4d;
}

.switch_settings {
  display: inline-block;
  font-size: 18px;
  padding: none;
  height: 48px;
  line-height: 48px;
}

@media (min-width: 601px) {
  .header-splash{
    height: 215px;
  }
  .email_preferences {
    font-size: 16px;
  }
}
@media (min-width: 968px) {
  .email_preferences {
    width: calc(80% - 60px);
  }

}

@media (max-width: 600px){
  /* .email_preferences{
    font-size: 16px;
  } */
}

.elementToFadeInAndOut {
    -webkit-animation: fadeinout 3s linear forwards;
    animation: fadeinout 3s linear forwards;
    opacity: 0;
}

.preferenceChange {
    opacity: 0;
}

@-webkit-keyframes fadeinout {
  50% { opacity: 1; }
}

@keyframes fadeinout {
  50% { opacity: 1; }
}

</style>

<template>
  <v-container fluid class="settings-page  page-height">
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

        <!--<k-text-field :value="account_email" disabled class="text_field_style">
        </k-text-field>-->

        <p style="padding-left: 12px; font-size: 20px; font-style: italic;">{{account_email}}</p>
        <br>

        <!-- Useful for debugging -->
        <!-- <SwitchAccount style="display: none;" :bottomPadding="true" /> -->

        <div>
          <k-btn block @click="logout">Logout</k-btn>
        </div>

        <br><br><br>

        <!-- <h2>Email Preferences</h2>
        <v-divider></v-divider>
        Leo: there still is no function to save these preferences? What you need is something
          like <v-switch @change="saveFunctionHere()" v-model="preferences_bool"></v-switch>
          or a save button
        <div v-if="preferences">
          <div class="email_preferences">Recieve emails about new applicants</div>
          <v-switch color="red" class="switch_settings"></v-switch>
          <br>
          <div class="email_preferences">Subscribe to Job Alert</div>
          <v-switch @change="saveJobAlertOption()" v-model="getNewsletter_bool" color="red" class="switch_settings"></v-switch>

          <div class="email_preferences">Recieve emails about application status</div>
          <v-switch @change="savePreferences()" v-model="application_bool" color="red" class="switch_settings"></v-switch>

          <div v-if="orgname" class="email_preferences">Recieve emails about job expiration</div>
          <v-switch v-if="orgname" @change="savePreferences()" v-model="jobExpired_bool" color="red" class="switch_settings"></v-switch>
          
          <div class="email_preferences">Recieve emails about newsletters</div>
          <v-switch @change="savePreferences()" v-model="getNewsletter_bool" color="red" class="switch_settings"></v-switch>
         
        </div> -->

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

      <p
        v-if="preferenceChanged"
        :class="[preferenceChanged ? 'elementToFadeInAndOut' : 'preferenceChange',]"
        style="background-color: #eaf6ea; color: green; padding:8px 15px; font-weight: bold; margin:30 0px;">
        Preference changed successfully!
      </p>

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
  import userDataProvider from '@/userDataProvider';

  export default {
    metaInfo: {
      title: 'Account Settings | Kunvet',
      meta: [
        { name: 'description', content: 'noindex' },
      ],
    },
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
        application_bool: true,
        getNewsletter_bool: false,
        jobExpired_bool: false,
        preferenceChanged: false,
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

        this.getNewsletter_bool = this.preferences.getNewsletters;
        this.application_bool = (this.preferences.applicationStatusEmails === 'All');
        this.jobExpired_bool = (this.preferences.jobExpiredEmails === 'All');

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
      async saveJobAlertOption() {
        console.log(this.getNewsletter_bool);
        var currentStatus = this.getNewsletter_bool ? 'subscribed' : 'unsubscribed';
        var postData = {
          email_address: this.account_email,
          status: currentStatus,
        };
        console.log(postData);

        Axios.post('/mailchimp/updatePreference', postData).then(() => {
          console.log('updated on mailchimp');
          this.savePreferences();
        }, (error) => {
          this.$error(error);
        });
      },
      savePreferences() {
        if (!this.preferences) return;

        this.preferences.getNewsletters = this.getNewsletter_bool;
        this.preferences.applicationStatusEmails = (this.application_bool) ? 'All' : 'Off';
        this.preferences.jobExpiredEmails = (this.jobExpired_bool) ? 'All' : 'Off';
        console.log('preferences:');
        console.log(this.preferences.getNewsletters);
        userDataProvider.setUserData({
          preferences: {
            getNewsletters: this.preferences.getNewsletters,
            jobExpiredEmails: this.preferences.jobExpiredEmails,
            applicationStatusEmails: this.preferences.applicationStatusEmails,
          },
        }).then(value => {
          if (value instanceof Error) {
            console.log('error');
          } else {
            console.log(value);
            this.preferenceChanged = true;
            setTimeout(() => { this.preferenceChanged = false; }, 3000);
          }
        });
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

      userDataProvider.getUserData().then(data => {
        if (data.acct === 0) {
          this.$router.push('/login');
          return;
        }
        if (data.acct === 2) {
          this.uid = data.uid;
          this.loadOrgData(data.userdata.default_org);
          // this.loadAcctData();
        } else if (data.acct === 1) {
          this.uid = data.uid;
          // this.loadAcctData();
        }
        this.account_email = data.userdata.email;
        this.preferences = data.userdata.preferences;

        this.getNewsletter_bool = this.preferences.getNewsletters;
        this.application_bool = (this.preferences.applicationStatusEmails === 'All');
        this.jobExpired_bool = (this.preferences.jobExpiredEmails === 'All');

        if (data.userdata.org_list && data.userdata.org_list[0] !== null) {
          this.orgList = data.userdata.org_list;
        }
      });
    },
  };
</script>
