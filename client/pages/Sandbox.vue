<template>
  <v-container fluid style="padding: 0;">
    <div style="background-color: #ddd; padding: 16px 24px; margin-bottom: 24px;">
      <h1>Sandbox</h1>
      <div>
        Play with me on <code>client/pages/Sandbox.vue</code>!
      </div>
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
      <div v-for="applicant in mockApplicants" style="width: 100%; padding: 20px; margin-bottom: 16px; background-color: #f1f3f4">
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
