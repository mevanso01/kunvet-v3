<style>
  .applicant-card {
    padding: 10px;
    background-color: #f2f2f2;
    height: 160px;
    color: #5D5D5D;
  }
  .applicant-card h2,
  .applicant-card p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .applicant-card h2 {
    margin-bottom: 10px;
    color: #5D5D5D;
    font-weight: normal;
  }
  .applicant-card p {
    margin-bottom: 6px;
  }
  .applicant-card i {
    color: rgb(63, 169, 245);
    margin-right: 5px;
    margin-left: 5px;
    width: 18px;
    font-size: 13px;
  }
  @media (min-width: 601px) {
    .applicant-card {
      width: calc(50% - 15px);
      margin: 10px 0 0px 10px;
      float: left;
    }
    .applicant-card:nth-last-child(1) {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 600px) {
    .applicant-card {
      margin: 10px;
    }
  }
</style>
<template>
  <v-container fluid>
    <div class="main-cont-large">
      <v-layout>
        <v-flex xs-0 md2 dark class="no-padding">
         <!--<v-card width="100%" height="100%">-->
        <v-navigation-drawer permanent dark style="position: relative; width: 100%; z-index: 1;">
          <v-list dense style="padding-top: 64px;">
            <v-list-tile v-for="item in job_titles" :key="item.title" @click="">
              <v-list-tile-content>
                <v-list-tile-title class="center">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
                 <!--</v-card>-->
        </v-flex>

        <v-flex xs9 md10 style="" class="no-padding">
          <v-toolbar card>
           <v-toolbar-title>Title</v-toolbar-title>
          </v-toolbar>
          <div style="max-height: 68vh; overflow: auto;">
            <div v-for="item in fakedata" class="applicant-card">
                <a href="/JobDetail/59be0c0f3077d224476ba3cd" class="">
                  <h2>{{ item.name }}</h2>
                  <p><i class="fa fa-graduation-cap" aria-hidden="true"></i>{{ item.school }}</p>
                  <p style="margin-left: 28px;" class="post-intro">desc</p>
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
        job_titles: [
          { title: 'Job one', id: '' },
          { title: 'Job two', id: '' },
          { title: 'Job three', id: '' },
        ],
        fakedata: [
          { name: 'Guillaume Rocheteau', school: 'University of California, Irvine' },
          { name: 'Peter the Anteater', school: 'idk UCLA probably' },
          { name: 'Bill Kunvet', school: 'Paul Merage School of Business' },
        ],
        settingsoption1: '',
        addorg: false,
      };
    },
  };
</script>
