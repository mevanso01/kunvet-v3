<template>
  <v-container fluid>
    <h2>Business Profile Homepage</h2>
    <body>
        <router-link to="/business">Home</router-link>
        <router-link to="/businesshp">Job Posts Homepage</router-link>
        <router-link to="/photogallery">Photo Gallery</router-link>
        <router-link to="/jobposts">Job Search Page</router-link>
        <router-link to="/messages">Messages</router-link>
        <router-link to="/accountsettings">Account Settings</router-link>

        <!-- <router-link to="/updateprofile">Update Profile</router-link> Should this be it's own page?-->
        <v-form v-model="valid" ref="form">

          <v-text-field
            label="Organization name"
            v-model="oname"
            :rules="onameRules"
            required
          ></v-text-field>

          <v-select
            label="Industry"
            v-model="industry"
            :items="items"
            :rules="[(v) => !!v || 'Required']"
            autocomplete
            required
          ></v-select>

          <v-text-field
            label="Street Address"
            v-model="address"
            :rules="[(v) => !!v || 'Required']"
            required
          ></v-text-field>

          <v-layout>
            <v-flex xs6 style="padding: 0 8px 0 0;">
              <v-text-field
                label="city"
                v-model="city"
                :rules="[(v) => !!v || 'Required']"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs6 style="padding: 0 0 0 8px;">
              <v-text-field
                label="zip"
                v-model="zip"
                :rules="[(v) => !!v || 'Required']"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-text-field
            label="Account holder full name"
            v-model="ahname"
            :rules="[(v) => !!v || 'Required']"
            required
          ></v-text-field>

          <v-text-field class="bio"
            label="bio"
            v-model="bio"
            :rules="bioRules"
            :counter="50"
            multi-line
            rows=4
            required
          ></v-text-field>
          <div class="text-xs-center">
            <v-btn error dark @click="submit">Update information</v-btn>
          </div>
        </v-form>

    </body>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      e1: true,
      valid: false,
      chosenForm: '',
      submitClicked: false,
      ahname: '',
      oname: '',
      onameRules: [
        v => !!v || 'This field is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters',
      ],
      industry: '',
      items: [
        'one',
        'two',
      ],
      address: '',
      city: '',
      zip: '',
      bio: '',
      bioRules: [
        v => !!v || 'Required',
        v => (v && v.length >= 50) || 'Bio must be at least 50 characters',
      ],
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate();
      this.submitClicked = true;
    },
  },
};
</script>
