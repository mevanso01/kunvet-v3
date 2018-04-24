<style>
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
</style>
<template>
  <v-container fluid class="settings-page">
    <div class="main-cont-large">
      <section style="padding: 0; margin: 15px; width: auto;">
        <h2>General Settings</h2>
        <v-divider></v-divider>
        <div>
          <v-btn small outline @click="logout">Logout</v-btn>
        </div>
        <br>
        <br>
        <!--<div v-if="orgList.length > 0">
          On login, sign in into:
          <v-select class="optional no-padding-select"
            label="Which one?"
            v-model="defaultOrg"
            :items="orgSelectItems"
            item-text="name"
            item-value="_id"
            return-object
            autocomplete
            single-line
          ></v-select>
          <v-btn style="margin-top:0" @click="saveDefaultOrganization">
            Save Login Preferences
          </v-btn>
        </div>-->
        <div v-if="orgname && oid">
          <h2>Organization settings</h2>
          <v-divider></v-divider>
          <h3 v-if="orgname">Viewing organization: {{ orgname }}</h3>
          <br>
          <br>
          <v-btn small outline color="red darken-1" @click="deleteOrgDialog = true;">Delete this organization</v-btn>
        </div>
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
            <v-btn flat @click.native="deleteOrgDialog = true;">Cancel</v-btn>
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
  import VuexLS from '@/store/persist';
  import gql from 'graphql-tag';

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
      };
    },
    methods: {
      logout() {
        EventBus.$emit('logout');
        this.$store.commit({
          type: 'resetState',
        });
        Axios.get('/auth/logout').then(() => {
        }, (error) => {
          console.error(error);
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
            }
          }`),
          variables: {
            uid: this.$store.state.userID,
          },
        });
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
          console.error(error);
        });
        EventBus.$emit('individual');
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
        VuexLS.restoreState('vuex',  window.localStorage).then(async (data) => {
          if (data.acct === 2) {
            this.uid = data.userID;
            this.loadOrgData(data.businessID);
            this.loadAcctData();
          } else if (data.acct === 1) {
            this.loadAcctData();
          } else {
            // not logged in
            this.$router.push('/login');
          }
        });
      }
    },
  };
</script>
