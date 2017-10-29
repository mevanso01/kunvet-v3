<style>
.val-c-p {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
<template>
  <v-container fluid style="padding-left: 0; padding-right: 0;">
    <div style="padding: 60px 0;">
      <p v-if="!checked" class="center val-c-p">Validating. This should take just a few seconds.</p>
      <p v-if="checked && !isvalid" class="center val-c-p">
        Validation unsuccessful, please check that you
        entered the link correctly and try again
      </p>
      <div style="max-width: 600px; margin: auto;">
        <v-card v-if="checked && isvalid" style="margin: 15px;">
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

/* import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource); */


export default {
  created() {
    this.validateCode();
  },
  props: ['code'],
  /* apollo: {
    findJob: {
    },
  }, */
  data() {
    return {
      // id: this.$route.params.id,
      checked: false,
      isvalid: false,
    };
  },
  methods: {
    validateCode() {
      this.$apollo.query({
        query: (gql`query ($c: String) {
          findVCode (filter: {
            vcode: $c
          }) {
              email
              password
              vcode
          }
        }`),
        variables: {
          c: this.code,
        },
      }).then((data) => {
        this.checked = true;
        if (data.data.findVCode) {
          this.isvalid = true;
          this.uploadAcctData(data.data.findVCode.email, data.data.findVCode.password);
        } else {
          this.isvalid = false;
        }
      });
    },
    uploadAcctData(email, password) {
      if (this.isvalid) {
        if (this.doesNotExist(email)) {
          this.$apollo.mutate({
            mutation: (gql`mutation ($e: String, $p: String) {
              createAccount(record: {
                username: "username",
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
          }).catch((error) => {
            console.error(error);
          }); /* .then((data) => {
            // console.log(data);
          }); */
        }
      }
    },
    doesNotExist(email) {
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
          return true;
        }
        return false;
      });
    },
  },
};
</script>
