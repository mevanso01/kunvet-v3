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
    validateCode() {
      console.log('TEST');
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
        console.log('DATA', data);
        if (data.data.findVCode) {
          this.isvalid = true;
          // set account to valid
          this.validateAcct(data.data.findVCode.email);
        } else {
          this.isvalid = true;
          this.loading = false;
        }
      }).catch(console.error);
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
