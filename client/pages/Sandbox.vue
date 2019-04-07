<template>

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
    testFunc() {
      console.log('testFunc called');
    },
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
