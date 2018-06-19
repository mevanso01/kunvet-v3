<style>
  .switchAccount-expansion-panel .expansion-panel__header {
    height: 32px;
    padding: 0px 16px;
  }
  .switchAccount-expansion-panel {
    margin-bottom: 1px;
    box-shadow: none !important;
  }
  .switchAccount-expansion-panel .expansion-panel__container,
  .switchAccount-expansion-panel .expansion-panel {
    margin: 0;
    box-shadow: none;
    max-height: 500px;
  }
  .switchAccount-expansion-panel .list__tile {
    height: 32px !important;
  }
  .switchAccount .notNavbar .list__tile,
  .switchAccount .notNavbar .expansion-panel__header {
    padding: 0 8px;
  }
  .switchAccount p.isNavbar {
    font-size: 12px;
    margin-left: 16px;
    margin-top: 5px;
  }
</style>
<template>
  <div v-if="accountItems.length > 1" class="switchAccount" style="width: 250px;">
    <!--<p v-bind:class="{ 'isNavbar': isNavbar }" style="margin-bottom: 0;">Signed in as:</p>
    <v-list v-bind:class="{ 'notNavbar': !isNavbar }">
      <v-list-tile v-for="(item, i) in accountItems" :key="i" @click="switchTo(item)">
        <v-list-tile-title class="one-line" style="font-size: 14px;">
          <span v-if="isSelected(item.name)">• </span>
          {{ item.name }}
        </v-list-tile-title>
      </v-list-tile>
    </v-list>-->
    <p v-bind:class="{ 'isNavbar': isNavbar }" style="margin-bottom: 0;">Current account:</p>
    <v-expansion-panel class="switchAccount-expansion-panel" v-bind:class="{ 'notNavbar': !isNavbar }">
      <v-expansion-panel-content>
        <div slot="header" class="one-line" @click="openSelectedAcct($event)">{{ selectedAccount }}</div>
        <v-list dense style="background-color: #f4f4f4; padding: 0;">
          <v-list-tile v-for="(item, i) in computedAccountItems" :key="i" @click="switchTo(item)">
            <v-list-tile-title class="one-line" style="font-size: 14px;">{{ item.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <div v-show="bottomPadding">
      <br><br>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag';
import EventBus from '@/EventBus';

export default {
  props: ['isNavbar', 'bottomPadding'],
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
  computed: {
    computedAccountItems() {
      return this.accountItems.filter(x => x.name !== this.selectedAccount);
    },
  },
  methods: {
    openSelectedAcct(e) {
      if (this.$store.state.acct === 0) {
        this.$router.push('/account');
      } else if (this.$store.state.acct > 0) {
        this.$router.push('/myorg');
      }
      e.stopPropagation();
    },
    fetchData() {
      this.$apollo.query({
        // fetchPolicy: 'network-only',
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
        this.$error(error);
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
        let org =  this.accountItems.find(x => x._id === defaultOrg);
        if (org) {
          this.selectedAccount = org.name;
        } else {
          // fallback for wierd scenarios where accountItems is incorrect
          org = await this.getOrgByID(defaultOrg);
          this.selectedAccount = org.business_name;
          this.accountItems.push({ name: org.business_name, _id: org._id });
        }
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
          this.$error(error);
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
        }],
      }).catch((error) => {
        this.$error(error);
      });
    },
    isSelected(name) {
      if (name === this.selectedAccount) return true;
      return false;
    },
  },
  created() {
    EventBus.$on('changed_name', values => {
      const { oldname, newname } = values;
      if (this.selectedAccount === oldname) {
        this.selectedAccount = newname;
      }
      const item = this.accountItems.find(x => x.name === oldname);
      if (item) {
        item.name = newname;
      }
    });
    /* EventBus.$on('new_org', org => {
      const { name, _id } = org;
      this.selectedAccount = name;
      this.accountItems.push({ name: name, _id: _id });
    }); */
    this.fetchData();
  },
};
</script>
