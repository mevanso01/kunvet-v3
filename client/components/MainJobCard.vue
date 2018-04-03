<template>
  <div class="post-card">
      <v-layout align-center row spacer slot="header">
        <v-flex xs8>
          <v-avatar size="36px" slot="activator" style="float: left; margin-right: 10px;">
            <img :src="profilePic" alt="">
          </v-avatar>
          <div style="color: #A7A7A7; line-height: 36px;">{{ job.posted_by }}</div>
        </v-flex>
        <v-flex xs4>

        <div class="float-right">
          <!--<v-avatar size="36px" slot="activator">
            <v-icon class="whatshot">whatshot</v-icon>
          </v-avatar>-->

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
              <!--<span>{{ job.university }}</span>-->
            </p>
          </div>
          <div class="carditem">
            <p><v-icon>info</v-icon>{{ parseJobIntoMainInfo(job) }}</p>
          </div>
          <div class="carditem">
            <p><span class="carditem-image"><img :src="svgs.student" /></span>{{ job.studentfriendly ? '' : 'Not ' }}Student-friendly</p>
          </div>

          <div class="image-row">
            <v-container fluid grid-list-sm style="margin-top: 8px;">
              <v-layout row wrap>
                <v-flex v-if="job.images" xs4 v-for="image in job.images.concat().splice(0, 3)">
                  <img class="image" :src="`${serverUrl}/file/get/${image.cropped}`" alt="lorem" width="100%" height="100%">
                </v-flex>
              </v-layout>
            </v-container>
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
import Config from 'config';
import axios from 'axios';

export default {
  props: ['job', 'saveJobFunc', 'isSaved', 'defaultFromUCI', 'fromCoordinates'],
  components: {
    Distance,
  },
  data() {
    return {
      serverUrl: Config.get('serverUrl'),
      profilePic: null,
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
  async created() {
    if (this.job.user_id) {
     try {
       const { data } = (await axios.get(`/profile-pic/account/${this.job.user_id}`));
       if (data.profilePictureId) {
         const url = `${this.serverUrl}/file/get/${data.profilePictureId}`;
         this.profilePic = url;
         return;
       }
       throw Error('Not found. Falling back to svg');
     } catch (ex) {
       this.profilePic = this.svgs.student;
     }
    }
  },
};
</script>
