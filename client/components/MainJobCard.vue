<template>
  <div class="post-card">
      <v-layout align-center row spacer slot="header">
        <v-flex xs8>
          <v-avatar size="36px" slot="activator" style="float: left; margin-right: 10px;">
            <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
          </v-avatar>
          <div style="color: #A7A7A7; line-height: 36px;">{{ job.posted_by }}</div>
        </v-flex>
        <v-flex xs4>

        <div class="float-right">
          <v-avatar size="36px" slot="activator">
            <v-icon class="whatshot">whatshot</v-icon>
          </v-avatar>

          <v-avatar size="36px" @click="saveJobClicked(job._id)">
            <v-icon class="bookmark-icon" v-bind:class="{ 'saved': isSaved }">bookmark_border</v-icon>
          </v-avatar>
        </div>
        </v-flex>
      </v-layout>

    <router-link :to="'JobDetail/'+job._id">
      <v-layout>
        <v-flex xs12 style="padding-top: 0px;">
          <div><h3 class="post-title">{{ job.title }}</h3></div>
          <div class="carditem" style="color: #A7A7A7">
            <timeago :since="job.date" />
          </div>
          <div class="carditem">
            <p style="color: #A7A7A7; text-decoration: underline;">
              <span class="carditem-image"><img :src="svgs.locationMarker" /></span><Distance v-if="defaultFromUCI || fromCoordinates" :first="defaultFromUCI ? uciCoordinates : fromCoordinates" :second="getCoordinatesFromJob(job)" />
              <br />
              <span class="carditem-image"><img :src="svgs.locationMarker" /></span><span>{{ job.address }}</span>
            </p>
          </div>
          <div class="carditem">
            <p><v-icon>info</v-icon>{{ parseJobIntoMainInfo(job) }}</p>
          </div>
          <div class="carditem">
            <p><span class="carditem-image"><img :src="svgs.student" /></span>{{ job.studentfriendly ? '' : 'Not ' }}Student-friendly</p>
          </div>

          <div class="image-row">
            <!-- insert gallary here -->
            <img style="max-width: 100%;" src="https://pbs.twimg.com/profile_images/575042635171172352/kP-VewoF_400x400.png"></img>
          </div>
        </v-flex>
      </v-layout>
    </router-link>
  </div>
</template>
<script>
import Distance from '@/components/Distance';

import Coordinates from '@/constants/coordinates';

import DisplayTextHelper from '@/utils/DisplayTextHelper';

import StudentSvg from '@/assets/job_posts/user_1.svg';
import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';

export default {
  props: ['job', 'saveJobFunc', 'isSaved', 'defaultFromUCI', 'fromCoordinates'],
  components: {
    Distance,
  },
  data() {
    return {
      svgs: {
        student: StudentSvg,
        locationMarker: LocationMarkerSvg,
      },
    };
  },
  computed: {
    computeIsSaved() {
      return this.isSaved;
    },
    uciCoordinates() {
      return Coordinates.uci;
    },
  },
  methods: {
    sanitizeSalary(salary) {
      if (typeof salary === 'number') {
        return salary.toFixed(2).toString();
      }
      return '';
    },
    parseJobIntoMainInfo(job) {
      return DisplayTextHelper.getMainJobInfo(job);
    },
    saveJobClicked(id) {
      this.saveJobFunc(id);
    },
    getCoordinatesFromJob({ latitude, longitude }) {
      return { latitude, longitude };
    },
  },
};
</script>
