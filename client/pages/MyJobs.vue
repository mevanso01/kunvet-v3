<template>
  <v-container fluid class="white-bg">
    <div class="main-cont-large">
    <v-layout>

      <v-flex xs3 md2 dark style="z-index: 1; padding-right: 10px;">
        <v-card>
          <v-navigation-drawer permanent dark style="position: relative; width: 100%;">
            <v-list dense dark class="pt-0">
              <v-list-tile active @click="selectTab(0)">
                <v-list-tile-content>
                  <v-list-tile-title>Saved Jobs</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile active @click="selectTab(1)">
                <v-list-tile-content>
                  <v-list-tile-title>Jobs Posted</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile active @click="selectTab(2)">
                <v-list-tile-content>
                  <v-list-tile-title>Applied Jobs</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-flex>


      <v-flex xs9 md9 style="max-height:70vh; overflow: auto">
        <v-card v-if="tab === 0">
          <v-toolbar dark style="background-color: #ef5350; z-index: 0;">
            <v-toolbar-title>Saved Jobs</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        <v-list two-line>
          <template v-for="(job, index) in findJobs">
            <v-list-tile
              avatar
              ripple
              @click="toggle(index)"
              :key="job._id"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ job.name }}</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-4">Poster's name</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ job.address }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <!--<v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon
                  color="grey lighten-1"
                  v-if="selected.indexOf(index) < 0"
                >star_border</v-icon>
                <v-icon
                  color="yellow darken-2"
                  v-else
                >star</v-icon>
              </v-list-tile-action>-->
            </v-list-tile>
            <v-divider v-if="index + 1 < findJobs.length" :key="job._id"></v-divider>
          </template>
        </v-list>
        </v-card>
      </v-flex>

    </v-layout>
    </div>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';

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
        tab: 0,
      };
    },
    methods: {
      selectTab(t) {
        this.tab = t;
      },
    },
  };
</script>
