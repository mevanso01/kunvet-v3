<style>
.val-c-p {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
<template>
  <v-container fluid style="padding-left: 0; padding-right: 0;">
    <div style="padding: 60px 0;">
      <p v-if="loading" class="center val-c-p">Validating. This should take just a few seconds.</p>
      <p v-if="!loading && !isvalid" class="center val-c-p">
        Validation unsuccessful, please check that you
        entered the link correctly and try again
      </p>
      <div v-if="!loading && isvalid" style="max-width: 600px; margin: auto;">
        <v-card style="margin: 15px;">
          <v-card-text>
              You're all set! Now you can log in with the email and password
              you provided, and finish creating your account
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<script>
import gql from 'graphql-tag';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueApollo from 'vue-apollo';

Vue.use(Vuetify);
Vue.use(VueApollo);

/*
password
firstname
lastname
business_name
*/

export default {
  created() {
    this.validateCode();
  },
  props: ['code'],
  data() {
    return {
      // id: this.$route.params.id,
      loading: true,
      isvalid: false,
      dne: null,
    };
  },
  methods: {
    async validateCode() {
      this.$apollo.query({
        query: (gql`query ($c: String) {
          findVCode (filter: {
            vcode: $c
          }) {
              email
              vcode
          }
        }`),
        variables: {
          c: this.code,
        },
      }).then((data) => {
        if (data.data.findVCode) {
          this.isvalid = true;
          // instead, set account to valid
          this.validateAcct(data.data.findVCode.email);
          /* this.doesNotExist(data.data.findVCode.email).then(() => {
            if (this.dne !== null) {
              this.isvalid = true;
              if (data.data.findVCode.business_name === '') {
                this.uploadAcctData(data.data.findVCode.email, data.data.findVCode.password);
              } else {
                this.uploadBusinessAcctData(
                  data.data.findVCode.email,
                  data.data.findVCode.password,
                  data.data.findVCode.firstname,
                  data.data.findVCode.lastname,
                  data.data.findVCode.business_name,
                );
              }
            }
          }); */
        } else {
          this.isvalid = true;
          this.loading = false;
        }
      });
    },
    validateAcct(email) {
      if (this.isvalid) {
        this.$apollo.mutate({
          mutation: (gql`
            mutation ($e: String) {
              updateAccount (filter: { email: $e },
                record: {
                  email_verified: true,
                }
              )
            {
              recordId
            }
          }`),
          variables: {
            e: email,
          },
        }).then(() => {
          this.deleteTempAcct(email);
          this.loading = false;
        }).catch((error) => {
          console.error(error);
        });
      }
    },
    uploadAcctData(email, password) {
      if (this.isvalid && this.dne) {
        this.$apollo.mutate({
          mutation: (gql`mutation ($e: String, $p: String) {
            createAccount(record: {
              password: $p,
              email: $e,
              firstname: "firstname",
              lastname: "lastname",
            }) {
              recordId
            }
          }`),
          variables: {
            e: email,
            p: password,
          },
        }).then(() => {
          this.deleteTempAcct(email);
        }).catch((error) => {
          console.error(error);
        });
      }
    },
    uploadBusinessAcctData(email, password, fname, lname, bname) {
      if (this.isvalid && this.dne) {
        // create business record
        this.$apollo.mutate({
          mutation: (gql`mutation ($e: String, $bn: String) {
            createOrganization(record: {
              business_name: $bn,
              email: $e,
            }) {
              recordId
            }
          }`),
          variables: {
            bn: bname,
            e: email,
          },
        }).then((data) => {
          // create user record
          const businessID = data.data.createOrganization.recordId;
          this.$apollo.mutate({
            mutation: (gql`mutation ($e: String, $p: String, $fn: String, $ln: String, $bID: String, $olist: Object) {
              createAccount(record: {
                password: $p,
                email: $e,
                firstname: $fn,
                lastname: $ln,
                default_org: $bID
                org_list: $olist
              }) {
                recordId
              }
            }`),
            variables: {
              e: email,
              p: password,
              fn: fname,
              ln: lname,
              bID: businessID,
              olist: [businessID],
            },
          }).then(() => {
            this.deleteTempAcct(email);
          }).catch((error) => {
            console.error(error);
          });
        }).catch((error) => {
          console.error(error);
        });
      }
    },
    doesNotExist(email) {
      return new Promise(resolve => {
        this.$apollo.query({
          query: (gql`query ($e: String) {
            findAccount(filter: {
              email: $e
            }) {
              email
            }
          }`),
          variables: {
            e: email,
          },
        }).then((data) => {
          if (!data.data.findAccount) {
            this.dne = true;
          } else {
            this.dne = false;
          }
          resolve(this.dne);
        });
      });
    },
    deleteTempAcct(email) {
      this.$apollo.mutate({
        mutation: (gql`mutation ($e: String) {
          removeTempAccount(filter: { email: $e }) {
            recordId
          }
        }`),
        variables: {
          e: email,
        },
      }).catch((error) => {
        console.error(error);
      });
    },
  },
};
</script>
