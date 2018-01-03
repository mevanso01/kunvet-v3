<style>

</style>
<template>
  <v-container fluid>
    <div class="main-cont-large">
    <v-layout>
      <v-flex xs4 md2 dark class="no-padding">
       <!--<v-card width="100%" height="100%">-->
      <v-navigation-drawer permanent dark style="position: relative; width: 100%; z-index: 1;">
        <v-list style="padding-top: 64px;">
          <v-list-tile v-for="item in items" :key="item.title" @click="">
            <v-list-tile-content>
              <v-list-tile-title class="center">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
               <!--</v-card>-->
      </v-flex>

      <v-flex xs8 md10 style="" class="no-padding">
        <v-toolbar card>
         <v-toolbar-title>Title</v-toolbar-title>
        </v-toolbar>
        <div style="max-height: 68vh; overflow: auto;">
          <div class="post-card">
              <a href="/JobDetail/59be0c0f3077d224476ba3cd" class="">
                <div><h1 style="font-weight: normal;">hi</h1></div>
                <p class="post-address">123 sesame street</p>
                <p class="post-intro">desc</p> <div class="image-row">
                <img src="https://pbs.twimg.com/profile_images/575042635171172352/kP-VewoF_400x400.png" style="max-width: 100%;"></div>
              </a>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          { title: 'Applied Jobs', icon: '' },
          { title: 'Saved Jobs', icon: '' },
          { title: 'Jobs Posted', icon: '' },
        ],
        settingsoption1: '',
        addorg: false,
      };
    },
  };
</script>
