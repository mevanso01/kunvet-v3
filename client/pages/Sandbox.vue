<template>
  <v-container fluid style="padding-right: 0; padding-left: 0;">
    <div class="main-cont-large" style="padding-bottom: 32px;">
      <h1>Sandbox</h1>
      <div>
        Play with me on <code>client/pages/Sandbox.vue</code>!
      </div>
      <h1>Kunvet Text Fields</h1><br>
      <k-text-field
        label="Im a label"
      ></k-text-field>
      <k-text-field
        placeholder="Im a placeholder"
      ></k-text-field>
    </div>
    <div style="background-color: #ddd; padding: 16px 24px; margin-bottom: 24px;">

      <br>
      <!-- <CodeVerification email="test" /> -->
      <div style="max-width: 400px; padding: 20px 30px; border: 1px solid #777; text-align: center;">
        <v-text-field v-model="mockName" label="Name"></v-text-field>
        <!-- <ResumeUploader
          @uploaded="resumeUploaded"
          @cancel="mockResume = {}"
        /> -->
        <v-btn flat @click="showFileModal = true;">Upload resume</v-btn>
        <br>
        <p>Resume filename: {{ mockResume.filename }}</p>
        <v-btn @click="addApplicant">Add fake applicant</v-btn>
      </div>
      <br>
    </div>

    <v-dialog v-model="showFileModal" content-class="auto-dialog">
      <ResumeUploader
        @uploaded="resumeUploaded"
        @cancel="showFileModal = false;"
      />
    </v-dialog>

    <!-- <v-divider></v-divider> -->

    <br>

    <div class="main-cont-large">
      <h1>Version 1</h1>
      <div v-for="applicant in mockApplicants" style="width: 100%; padding: 20px; margin-bottom: 16px; background-color: #f2f7ff">
        <h2>Name: {{ applicant.name }}</h2>
        <p>Resume: {{ applicant.resume }}</p>
        <v-btn flat class="ml-0" @click="applicant.showResume = !applicant.showResume;">
          <span v-if="applicant.showResume">Hide Resume</span><span v-else>Show Resume</span>
          </v-btn>
        <br>
        <div v-if="applicant.showResume" style="padding: 10px 5%;">
          <PdfFrame
            v-if="applicant.resume && applicant.resume.filename"
            :href="getSrc(applicant.resume)"
          />
          <v-btn flat class="ml-0" @click="applicant.showResume = false;">Hide Resume</v-btn>
        </div>
      </div>
    </div>

    <div class="main-cont-large">
      <br>
      <h1>Version 2</h1>
      <div v-for="applicant in mockApplicants" style="width: 100%; padding: 20px; margin-bottom: 16px; background-color: #f2f7ff">
        <h2>Name: {{ applicant.name }}</h2>
        <p>Resume: {{ applicant.resume }}</p>
        <v-btn flat class="ml-0" @click="showSideResume = true;">
          Show Resume
        </v-btn>
        <br>
      </div>
    </div>
    <!-- /*background-color: #ef5350;*/ -->
    <v-navigation-drawer
       v-model="showSideResume"
       absolute right width="900"
       temporary>
       <div style="height: auto;
          width: 100%;
          background-color: #ef5350;
          z-index: 9;
          position: fixed;
          top: 316px;
          padding: 0;
          overflow: hidden;">
         <div style="position: fixed; width: 100%; padding: 18px 120px 0px 32px; background-color: #ef5350;">
           <h2 v-if="mockApplicants[0]" style="color: white; text-align: center;">{{ mockApplicants[0].name }}</h2>
         </div>
         <div style="height: 95vh; padding: 0px 120px 32px 32px; overflow: scroll;">
           <PdfFrame
             v-if="mockApplicants[0] && mockApplicants[0].resume && mockApplicants[0].resume.filename"
             :href="getSrc(mockApplicants[0].resume)"
           />
           <v-btn flat class="ml-0" @click="showSideResume = false;">Hide Resume</v-btn>
         </div>
       </div>
    </v-navigation-drawer>
    <!-- <h2>List of jobs</h2>
    <p>Page {{ page }} - Displaying {{ pageSize }} jobs at a time</p>
    <ul>
      <li v-for="job in findJobs">
        {{ job.title }}
      </li>
    </ul>
    <v-btn @click="page--; reloadPage()" v-if="page > 0">Prev</v-btn>
    <v-btn @click="page++; reloadPage()">Next</v-btn> -->
  </v-container>
</template>
<script>
/* eslint-disable no-unused-vars */
import gql from 'graphql-tag';
import CodeVerification from '@/components/CodeVerification';

import ResumeUploader from '@/components/ResumeUploader';
import FileClient from '@/utils/FileClient';
import PdfFrame from '@/components/PdfFrame';

export default {
  data() {
    return {
      mockName: 'John Smith',
      mockApplicants: [],
      mockResume: {
        name: 'Test',
        filename: '5c0ad86ac9b77d6d0b33ccd5',
        resumeid: null,
      },
      showFileModal: false,
      pageSize: 10,
      page: 0,
      showSideResume: false,
    };
  },
  apollo: {
    findJobs: {
      query: gql`
        query ($limit: Int!, $skip: Int!) {
          findJobs (limit: $limit, skip: $skip) {
            _id
            title
          }
        }`,
      variables: {
        limit: 10,
        skip: 0,
      },
    },
  },
  components: {
    CodeVerification,
    PdfFrame,
    ResumeUploader,
  },
  methods: {
    getSrc(resume) {
      // eslint-disable-next-line
      console.log('Test', resume);
      const src = FileClient.getLink(resume.filename);
      return src;
    },
    addApplicant(_filename, _resumename) {
      this.mockApplicants.push({
        name: this.mockName,
        resume: this.mockResume,
        showResume: false,
      });
      // this.mockName = '';
      // this.mockResume = {};
    },
    resumeUploaded(_filename, _resumename) {
      this.mockResume = {
        name: _resumename,
        filename: _filename,
        resumeid: null,
      };
      this.showFileModal = false;
    },
    reloadPage() {
      this.$apollo.queries.findJobs.fetchMore({
        variables: {
          limit: this.pageSize,
          skip: this.pageSize * this.page,
        },
        updateQuery(previousResult, { fetchMoreResult }) {
          return fetchMoreResult;
        },
      });
    },
  },
};
</script>
