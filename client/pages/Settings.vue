<style>
.settings-page .btn {
  margin-left: 0;
}
.settings-page section {
  max-width: 500px !important;
}
</style>
<template>
  <v-container fluid class="settings-page">
    <div class="main-cont-large">
      <section style="padding: 0; margin: 15px; width: auto;">
        <h1>Settings</h1>
        <br>
        <div>
          <v-btn @click="logout">Logout</v-btn>
        </div>
        <br>
        <br>
        <div v-if="orgList.length > 0">
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
        </div>
        <!--<div v-if="this.$store.state.acct === 2">
          <v-btn @click="loginToRegularAccount">Login to Regular Account</v-btn>
        </div>-->
      </section>
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
      async loadOrganizationData() {
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
          this.orgList = await this.getOrganizations(res.org_list);
        }
        if (res.defaultOrg) {
          this.defaultOrg = this.orgList.find(({ _id }) => _id === res.default_org);
        }
      },
      async getOrganizations(orgList) {
        console.log(orgList);
        const resolvedOrgs = await Promise.all(orgList.map(this.getOrgByID));
        return resolvedOrgs.map(x => {
          var rObj = {};
          rObj.name = x.business_name;
          rObj._id = x._id;
          return rObj;
        });
      },
      parseOrg({ business_name: name, _id }) {
        return {
          name, _id,
        };
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
    created() {
      if (this.$route.params && this.$route.params.command === 'logout') {
        this.logout();
      }
      if (this.$store.state.acct === 2) {
        this.uid = this.$store.state.userID;
        this.loadOrganizationData();
      } else if (this.$store.state.acct === 1) {
        this.uid = this.$store.state.userID;
        this.loadOrganizationData();
      } else {
        VuexLS.restoreState('vuex',  window.localStorage).then(async (data) => {
          if (data.acct === 2) {
            this.uid = data.userID;
            this.loadOrganizationData();
          } else if (data.acct === 1) {
            this.loadOrganizationData();
          } else {
            // not logged in
            this.$router.push('/login');
          }
        });
      }
    },
  };
</script>
