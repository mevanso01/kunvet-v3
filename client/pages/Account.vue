<style>
.acct-page-container .tabs {
  overflow: visible;
  overflow-x: hidden;
}
.acct-page-container .tabs__items {
  overflow: visible;
}
.input-group--text-field label {
    position: absolute;
    top: 0;
    left: 0;
}
.no-underline .input-group__details:before {
  display: none;
}

.grey-color label, .grey-color .list__tile:not(.list__tile--active){
  color: #ccc !important;
}
.cust-tile-2 > .list__tile {
  padding-left: 0;
  height: 32px;
}
.cust-tile-2 {
  height: 32px;
}
.cust-tile-1 {
  width: 41px;
}
.cust-tile-1 > .list__tile {
  padding-left: 4px;
  padding-right: 12px;
}
.cust-tile-1 > .list__tile > i {
  margin: auto;
}
.cust-btn-1 {
  margin: 2px 8px;
  min-width: 50px;
}
.cust-btn-1 .btn__content {
  padding: 0;
}
.profile-tabs .tabs__item {
  color: #333 !important;
  padding: 0 16px;
}
.profile-tabs .tabs__item--active {
  color: #ef5350 !important;
}
.layout-cont {
  margin: 15px;
}
.profile-pic-cont {
  background-color: white;
  z-index: 90;
  width: 210px;
  height: 210px;
  float: right;
  border: 1px solid grey;
  transform: translateY(-10px);
  /* position: absolute;
  top: 25px;
  right: 15px; */
}
.acct-page-container .dialog .btn__content {
  padding: 0 !important;
}
.profile-tabs > .tabs__wrapper { margin: 0 !important; }
@media (min-width: 961px) {
  .cust-tile-2 {
    margin-bottom: 8px;
  }
}
@media (max-width: 960px) {
  .profile-pic-cont {
    width: 185px;
    height: 185px;
    margin-right: 15px;
  }
}
@media (min-width: 601px) {
  .acct-page-container > .main-cont-large {
    padding-top: 15px;
  }
}
@media (max-width: 600px) {
  .acct-page-container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
<template>
  <v-container fluid class="acct-page-container">
    <div class="main-cont-large">
          <section style="padding: 0; margin: 15px; width: auto;">
            <v-layout>
              <v-flex xs12 sm8>
                <h1>Firstname Lastname</h1>
                <v-layout>
                  <v-flex xs12 sm10 class="no-padding">
                    <v-list>
                      <v-list-tile v-if="!userdata.school" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <!--<v-list-tile-title>Add school info</v-list-tile-title>-->
                          <v-layout style="width: 100%">
                          <v-flex xs10 class="no-padding">
                            <v-text-field
                              v-model="updateSchool"
                              class="no-padding no-underline"
                              name="input-1-3"
                              label="Add school"
                              single-line
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 v-show="updateSchool" class="no-padding">
                            <v-btn small  center class="cust-btn-1" @click="saveSchool">
                              Save
                            </v-btn>
                          </v-flex>
                        </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="userdata.school" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>{{ userdata.school }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="userdata.school && !userdata.degree" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-layout style="width: 100%">
                            <v-flex xs10 class="no-padding">
                              <v-text-field
                                v-model="updateDegree"
                                class="no-padding no-underline"
                                name="input-2"
                                label="Add degree"
                                single-line
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 v-show="updateDegree" class="no-padding">
                              <v-btn small  center class="cust-btn-1" @click="saveDegree">
                                Save
                              </v-btn>
                            </v-flex>
                          </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="userdata.degree" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-book" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>{{ userdata.degree }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-if="!userdata.email" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-layout style="width: 100%">
                            <v-flex xs10 class="no-padding">
                              <v-text-field
                                v-model="updateEmail"
                                class="no-padding no-underline"
                                name="input-3"
                                label="Add email to display"
                                single-line
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 v-show="updateEmail" class="no-padding">
                              <v-btn small  center class="cust-btn-1" @click="saveEmail">
                                Save
                              </v-btn>
                            </v-flex>
                          </v-layout>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="userdata.email" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>{{ userdata.email }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm4 class="hidden-xs-only">
                <div class="profile-pic-cont hidden-xs-only">
                </div>
              </v-flex>
            </v-layout>
            <v-divider style="margin: 0 15px; width: auto;"></v-divider>
            <v-layout>
              <v-flex xs12 sm6>
                <h3>Resume</h3>
                <v-btn small @click="next">
                  Add resume
                </v-btn>
              </v-flex>
              <v-flex xs12 sm6>
                <h3 style="text-align: right">Organizations</h3>

                <div class="float-right">
                  <v-btn outline small fab @click.native.stop="addorg = true" class="grey--text lighten-2">
                    <v-icon>add</v-icon>
                  </v-btn>
                </div>

                <v-dialog v-model="addorg">
                  <v-card>
                    <v-card-title class="headline">Create or join existing organization</v-card-title>
                    <v-card-actions>
                      <!--<v-spacer></v-spacer>-->
                      <v-btn color="green darken-1" flat="flat" @click.native="addorg = false">Create</v-btn>
                      <v-btn color="green darken-1" flat="flat" @click.native="addorg = false">Join</v-btn>
                      <v-btn color="green darken-1" flat="flat" @click.native="addorg = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

              </v-flex>
            </v-layout>
          </section>
    </div>
  </v-container>
</template>

<script>
  import App from '@/App';
  import Vue from 'vue';
  import gql from 'graphql-tag';
  import VueApollo from 'vue-apollo';
  import Store from '../store';

  Vue.use(VueApollo);

  export default {
    apollo: {
      findJobs: gql`{
        findJobs {
            _id
            name
            description
            type
            address
        }
      }`,
    },
    data() {
      return {
        tabs: ['Profile', 'Resume', 'Jobs', 'Settings'],
        active: null,
        userdata: {
          school: Store.state.userdata.school,
          degree: Store.state.userdata.degree,
          email: Store.state.userdata.email,
        },
        updateSchool: '',
        updateEmail: '',
        updateDegree: '',
        cards: [
          { avatarsrc: '', poster: 'kunvet team', tags: ['business', 'non-business'], time: '2 minutes', location: '1000 HARVARD, IRVINE', title: 'title1', shift: 'shift1', src: '' },
          { avatarsrc: '', poster: 'kunvet team', tags: ['club'], time: '2 minutes', location: '1000 HARVARD, IRVINE', title: 'title2', shift: 'shift2', src: '' },
          { avatarsrc: '', poster: 'kunvet team', tags: [], time: '2 minutes', location: '1000 HARVARD, IRVINE', title: 'title3', shift: 'shift3', src: '' },
          { avatarsrc: '', poster: 'kunvet team', tags: [], time: '2 minutes', location: '1000 HARVARD, IRVINE', title: 'title4', shift: 'shift4', src: '' },
        ],
        items: [
          { title: 'Applied Jobs', icon: '' },
          { title: 'Saved Jobs', icon: '' },
          { title: 'Jobs Posted', icon: '' },
        ],
        settingsoption1: '',
        addorg: false,
      };
    },
    methods: {
      next() {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length];
      },
      logout() {
        App.methods.logout();
      },
      saveSchool() {
        this.userdata.school = this.updateSchool;
        this.updateSchool = '';
      },
      saveDegree() {
        this.userdata.degree = this.updateDegree;
        this.updateDegree = '';
      },
      saveEmail() {
        this.userdata.email = this.updateEmail;
        this.updateEmail = '';
      },
    },
    beforeDestroy() {
      Store.commit({
        type: 'saveUserdata',
        school: this.userdata.school,
        degree: this.userdata.degree,
        email: this.userdata.email,
      });
    },
  };
</script>
