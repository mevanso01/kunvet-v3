<style>
</style>
<template>
  <v-container fluid class="white-bg">
    <div class="main-cont-large">
      <section style="padding: 0; margin: 15px; width: auto;">
        <h1>Settings</h1>
        <br>
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
        <v-btn @click="saveDefaultOrganization">
          Save Default Organization
        </v-btn>
        <v-btn @click="logout">Logout</v-btn>
      </section>
    </div>
  </v-container>
</template>

<script>
  import App from '@/App';
  import Axios from 'axios';
  import VuexLS from '@/store/persist';
  import gql from 'graphql-tag';

  export default {
    data() {
      return {
        uid: null,
        defaultOrg: { name: '', _id: null },
        orgList: [],
      };
    },
    methods: {
      logout() {
        App.methods.logout();
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
        this.orgList = await this.getOrganizations(res.org_list);
        this.defaultOrg = this.orgList.find(({ _id }) => _id === res.default_org);
      },
      async getOrganizations(orgList) {
        const resolvedOrgs = await Promise.all(orgList.map(this.getOrgByID));
        return resolvedOrgs.map(this.parseOrg);
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
        const res = await this.$apollo.mutate({
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
    },
    computed: {
      orgSelectItems() {
        return this.orgList;
      },
    },
    async created() {
      if (this.$store.state.acct === 2) {
        this.uid = this.$store.state.userID;
        await this.loadOrganizationData();
      } else if (this.$store.state.acct === 1) {
        this.uid = this.$store.state.userID;
        await this.loadOrganizationData();
      } else {
        VuexLS.restoreState('vuex',  window.localStorage).then(async (data) => {
          if (data.acct === 2) {
            this.uid = data.userID;
            await this.loadOrganizationData();
          } else if (data.acct === 1) {
            await this.loadOrganizationData();
          } else {
            // not logged in
            this.$router.push('/login');
          }
        });
      }
    },
  };
</script>
