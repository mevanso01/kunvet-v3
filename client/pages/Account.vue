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
            <v-layout class="layout-cont">
              <v-flex xs12 sm8>
                <h1>Firstname Lastname</h1>
                <v-layout>
                  <v-flex xs12 sm8 class="no-padding">
                    <v-list>
                      <v-list-tile v-if="!userdata.school" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <!--<v-list-tile-title>Add school info</v-list-tile-title>-->
                          <v-text-field
                            class="no-padding no-underline"
                            name="input-1-3"
                            label="Add school info"
                            single-line
                          ></v-text-field>
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
                      <v-list-tile v-if="!userdata.email" class="cust-tile-2 grey-color">
                        <v-list-tile class="cust-tile-1">
                            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </v-list-tile>
                        <v-list-tile-content>
                          <!--<v-list-tile-title>Add email</v-list-tile-title>-->
                          <v-text-field
                            class="no-padding no-underline"
                            name="input-1-3"
                            label="Add personal email"
                            single-line
                          ></v-text-field>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile v-if="userdata.email" class="cust-tile-2">
                        <v-list-tile class="cust-tile-1">
                           <i class="fa fa-graduation-cap" aria-hidden="true"></i>
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

          </v-tabs-content>

          <v-tabs-content :key="'Resume'" :id="'Resume'">
            <v-card flat>
              <v-card-text>Hello</v-card-text>
            </v-card>
          </v-tabs-content>

          <v-tabs-content :key="'Jobs'" :id="'Jobs'">
            <v-card flat>
              <v-card-text>World</v-card-text>
            </v-card>
          </v-tabs-content>

        </v-tabs-items>
      </v-tabs>
    </div>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        tabs: ['Profile', 'Resume', 'Jobs', 'Settings'],
        active: null,
        userdata: {
          school: null,
          email: null,
        },
      };
    },
    methods: {
      next() {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length];
      },
    },
  };
</script>
