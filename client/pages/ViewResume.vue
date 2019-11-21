<template>
  <v-container fluid class="white-bg">
    <div class="main-cont-large">
      <section style="padding: 0; margin: 15px; width: auto;">
        <div style="width: 100%">
          <account-header
            :svg="svgs.resume"
            :text="'Resume'"
            />
            <div v-if="resumes.length == 0">
              This applicant has not provided a resume.
            </div>
            <div v-for="(resume, index) in resumes" :key="resume.src">
              <span v-if="resumes.length > 1">
                {{ index + 1 }} of {{ resumes.length }}
              </span>
              <PdfFrame
                v-if="resume.src"
                :href="resume.src"
                />
              <p v-else>File gone.</p>
              <v-btn :href="resume.src" target="_blank" outline style="margin-left: 0;">Download file</v-btn>
              <v-divider v-if="index < (resumes.length - 1)" style="margin-top: 16px; margin-bottom: 8px;"></v-divider>
            </div>
        </div>
      </section>
    </div>
  </v-container>
</template>
<script>
import gql from 'graphql-tag';
import Config from 'config';
import PdfFrame from '@/components/PdfFrame';

import AccountHeader from '@/components/AccountHeader';
import queries from '@/constants/queries';

import ResumeSvg from '@/assets/navbar/resume_full_black.svg';

import FileClient from '@/utils/FileClient';

export default {
  props: ['id'],
  components: {
    AccountHeader,
    PdfFrame,
  },
  data() {
    return {
      src: undefined,
      docurl: undefined,
      numPages: undefined,
      // mock data end
      svgs: {
        resume: ResumeSvg,
      },
      loading: false,
      errorOccured: false,
      serverUrl: Config.get('serverUrl'),
      profile_pic_url: undefined,
      rawResumes: [],
    };
  },
  methods: {
    getData() {
      this.$apollo
        .query({
          query: gql`
            query($aplId: MongoID) {
              findApplicant(filter: { _id: $aplId }) {
                ${queries.FindApplicantRecord}
                notes
              }
            }
          `,
          variables: {
            aplId: this.id,
          },
        })
        .then((data) => {
          const res = data.data.findApplicant;
          // const isEmployer = await this.isEmployer(res.job_id);
          // Only employers that made this job should be able to view the applicant.
          // if (!isEmployer) this.$router.push('/jobs/applicants');
          this.rawResumes = res.resumes;
          this.loadProfilePic(res.user_id);
          if (res.status === 'submitted') {
            this.updateApplicantStatus('opened');
          }
        })
        .catch(error => {
          this.$error(error);
        });
    },
  },
  computed: {
    resumes() {
      // eslint-disable-next-line
      return this.rawResumes.map((resume) => {
        return {
          src: FileClient.getLink(resume.filename),
        };
      });
    },
  },
  activated() {
    this.errorOccured = false;
    this.getData();
    window.addEventListener('resize', this.onResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
