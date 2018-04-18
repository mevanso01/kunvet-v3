<style>
  .switchAccount-expansion-panel .expansion-panel__header {
    height: 32px;
    padding: 12px 16px;
  }
  .switchAccount-expansion-panel {
    margin-bottom: 1px;
    box-shadow: none !important;
  }
  .switchAccount-expansion-panel .expansion-panel__container,
  .switchAccount-expansion-panel .expansion-panel {
    margin: 0;
    box-shadow: none;
  }
  .switchAccount-expansion-panel .list__tile {
    height: 32px !important;
    padding-left: 21px;
  }
</style>
<template>
  <div v-if="accountItems.length > 1" style="width: 250px;">
    <p style="padding: 0 16px; margin-bottom: 0; font-size: 10px;">Signed in as:</p>
    <v-expansion-panel class="switchAccount-expansion-panel">
      <v-expansion-panel-content>
        <div slot="header">{{ selectedAccount }}</div>
        <v-list dense style="background-color: #f4f4f4; padding: 0;">
          <v-list-tile v-for="(item, i) in accountItems" :key="i" @click="switchTo(item)">
            <v-list-tile-title style="font-size: 14px;">{{ item.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
<script>
import gql from 'graphql-tag';
import EventBus from '@/EventBus';

export default {
  props: ['isNavbar'],
  data() {
    return {
      accountItems: [],
      org_list: [],
      default_org: null,
      selectedAccount: null,
      fname: null,
      lname: null,
    };
  },
  methods: {
    fetchData() {
      this.$apollo.query({
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
      }).then((data) => {
        const res = data.data.findAccount;
        this.default_org = res.default_org;
        this.populateOrgList(res.org_list);
        this.fname = res.firstname;
        this.lname = res.lastname;
      }).catch((error) => {
        console.error('fetch data failed', error);
      });
    },
    async populateOrgList(orgList) {
      if (Array.isArray(orgList) && orgList.length > 0 && orgList[0] !== null) {
        this.org_list = (await Promise.all(
          orgList.map(this.getOrgByID),
        )).map(({ business_name: name, _id }) => ({
          name, _id,
        }),
        );
      }
      this.accountItems = [{ name: `${this.fname} ${this.lname}`, _id: null }].concat(this.org_list);
      const defaultOrg = this.$store.state.default_org;
      if (defaultOrg) {
        this.selectedAccount = this.accountItems.find(x => x._id === defaultOrg).name;
      } else {
        this.selectedAccount = `${this.fname} ${this.lname}`;
      }
    },
    getOrgByID(_oid) {
      return new Promise(resolve => {
        this.$apollo.query({
          query: (gql`query ($oid: MongoID) {
            findOrganization(filter: {
              _id: $oid
            }) {
              business_name
              _id
            }
          }`),
          variables: {
            oid: _oid,
          },
        }).then((data) => {
          resolve(data.data.findOrganization);
        }).catch((error) => {
          console.error(error);
        });
      });
    },
    async switchTo(item) {
      const id = item._id;
      this.default_org = id;
      this.selectedAccount = item.name;
      await this.updateAccountDefaultOrg(id);
      if (id !== null) {
        await this.$store.commit({
          type: 'keepBdata',
          bdata: null,
        });
        this.$store.commit({ type: 'setDefaultOrg', id });
        this.$store.commit({ type: 'setBusinessID', id });
        EventBus.$emit('business');
        this.$router.push('/myorg');
      } else {
        await this.$store.commit({
          type: 'keepBdata',
          bdata: null,
        });
        this.$store.commit({ type: 'setDefaultOrg', id });
        this.$store.commit({ type: 'unsetBusinessID' });
        EventBus.$emit('individual');
        this.$router.push('/account');
      }
    },
    updateAccountDefaultOrg(defaultOrgId) {
      this.$apollo.mutate({
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
            default_org: defaultOrgId,
          },
        },
        refetchQueries: [{
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
        }],
      }).catch((error) => {
        console.error(error);
      });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
