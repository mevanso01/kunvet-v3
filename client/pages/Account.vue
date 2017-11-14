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
  width: 250px;
  height: 250px;
  float: right;
  transform: translateY(-45px);
  border: 1px solid grey;
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
    width: 200px;
    height: 200px;
    margin-right: 15px;
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
      <v-tabs dark v-model="active">

        <v-tabs-bar class="grey lighten-2 profile-tabs">
          <v-tabs-item v-for="tab in tabs" :key="tab" :href="'#' + tab" ripple>
            {{ tab }}
          </v-tabs-item>
          <v-tabs-slider class="red"></v-tabs-slider>
        </v-tabs-bar>

        <v-tabs-items>

          <v-tabs-content :key="'Profile'" :id="'Profile'">
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
                              label="Add school info"
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
                                label="Add personal email"
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
                <div v-if="active === 'Profile'" class="profile-pic-cont hidden-xs-only">
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
          </v-tabs-content>

          <v-tabs-content :key="'Resume'" :id="'Resume'">
            <v-card flat>
              <v-card-text>Hello</v-card-text>
            </v-card>
          </v-tabs-content>

          <v-tabs-content :key="'Jobs'" :id="'Jobs'">
            <v-layout>
              <v-flex xs4 md3 dark class="no-padding">
                <!--<v-card width="100%" height="100%">-->
                  <v-navigation-drawer permanent dark style="position: relative; width: 100%; z-index: 1;">
                    <v-list dense class="pt-0">
                      <v-list-tile v-for="item in items" :key="item.title" @click="">
                        <v-list-tile-action>
                          <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-navigation-drawer>
                <!--</v-card>-->
              </v-flex>


              <v-flex xs8 md9 style="max-height:70vh; overflow:auto">
                  <h2 center>Saved Jobs<v-icon>bookmark</v-icon></h2>
                  <div xs12="" class="post-card">
                    <a href="/JobDetail/59be0c0f3077d224476ba3cd" class="">
                    <div><h1 style="font-weight: normal;">hi</h1></div>
                    <p class="post-address">123 sesame street</p>
                    <p class="post-intro">desc</p> <div class="image-row">
                      <img src="https://pbs.twimg.com/profile_images/575042635171172352/kP-VewoF_400x400.png" style="max-width: 100%;"></div>
                    </a>
                  </div>
                  <!--<v-flex v-for="card in cards" :key="card" pa-3>
                    <v-card color="grey lighten-4">
                      <v-card-text>
                        <v-avatar size="50px">
                          <img :src="card.avatarsrc" alt="avatar" style="background-color:red">
                        </v-avatar>  {{card.poster}}
                        <v-chip v-for="tag in card.tags" :key="tag" style="float:right" label>{{tag}}</v-chip>
                      </v-card-text>

                      <h2>{{card.title}}</h2>
                      <div>{{card.time}} ago</div>
                      <v-card-text><v-icon>fa-building-o</v-icon>{{card.location}}</v-card-text>
                      <v-card-text><v-icon>fa-comments</v-icon>Average Reviews</v-card-text>
                      <v-card-text><v-icon>fa-exclamation-circle</v-icon>{{card.shift}}</v-card-text>
                      <v-card-text><v-icon>fa-group</v-icon></v-card-text>
                      <v-flex pa-3 >
                        <img style="width:200px;height:200px;background-color:white" ult="img"></img>
                      </v-flex>
                    </v-card>
                  </v-flex>-->

              </v-flex>
            </v-layout>
          </v-tabs-content>

          <v-tabs-content :key="'Settings'" :id="'Settings'">
            <section>
              <h1>Settings Option 1</h1>
              <v-radio-group v-model="settingsoption1" column>
                  <v-radio color="red" label="Option 1" value="one" ></v-radio>
                  <v-radio color="red" label="Option 2" value="two"></v-radio>
              </v-radio-group>
            </section>
          </v-tabs-content>

        </v-tabs-items>
      </v-tabs>
    </div>
  </v-container>
</template>

<script>
  import Store from '../store';

  export default {
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
