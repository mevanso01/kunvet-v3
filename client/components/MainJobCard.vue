<template>
  <div class="post-card">
      <v-layout align-center row spacer slot="header">
        <v-flex xs9>
          <v-avatar size="36px" slot="activator" style="float: left; margin-right: 10px;">
            <img :src="profilePic" alt="">
          </v-avatar>
          <div class="posted-by" style="color: #A7A7A7; line-height: 36px;">{{ job.posted_by }}</div>
        </v-flex>
        <v-flex xs3>

        <div class="float-right">
          <v-tooltip bottom v-if="computeIsLoggedOut">
            <div slot="activator">
              <a class="svg-button">
                <img style="height: 24px; margin: 6px auto;" :src="svgs.grayBookmark" />
              </a>
            </div>
            <span>Please log in</span>
          </v-tooltip>
          <a v-else class="svg-button" @click="saveJobClicked(job._id)">
            <img v-if="isSaved" style="height: 24px; margin: 6px auto;" :src="svgs.yellowBookmark" />
            <img v-else style="height: 24px; margin: 6px auto;" :src="svgs.grayBookmark" />
          </a>
        </div>
        </v-flex>
      </v-layout>

    <router-link :to="'/job/'+job._id">
      <v-layout>
        <v-flex xs12 style="padding-top: 0px;">
          <div><h3 class="post-title">{{ job.title }}</h3></div>
          <div class="carditem" style="color: #A7A7A7">
            <!-- <timeago :datetime="job.date" /> -->
            <timeago :since="job.date" />
          </div>
          <div class="carditem">
            <div class="post-address-container">
              <p>
                <span class="carditem-image">
                  <img :src="svgs.locationMarker" />
                </span>
                <span v-if="fromCoordinates" style="text-decoration: underline;">
                  <Distance :first="fromCoordinates" :second="getCoordinatesFromJob(job)" />
                </span>
                <span v-else>
                  {{ job.address }}
                </span>
              </p>
              <p v-if="job.university" style="margin-left: 23px;">
                {{ job.university }}
              </p>
            </div>
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
                  <img class="image" :src="`${serverUrl}/file/get/${image.cropped}`" alt="Image" width="100%" height="100%">
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
import StudentSvg from '@/assets/icons/Asset(17).svg';
import LocationMarkerSvg from '@/assets/job_posts/location_marker.svg';
import GrayBookmarkSvg from '@/assets/icons/Asset(36).svg';
import YellowBookmarkSvg from '@/assets/icons/Asset(37).svg';
import Config from 'config';
import ProfilePicHelper from '@/utils/GetProfilePic';

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
        yellowBookmark: YellowBookmarkSvg,
        grayBookmark: GrayBookmarkSvg,
      },
    };
  },
  computed: {
    computeIsLoggedOut() {
      return this.$store.state.acct === 0;
    },
    computeIsSaved() {
      return this.isSaved;
    },
    uciCoordinates() {
      return Coordinates.uci;
    },
    isIndividualJob() {
      return !this.job.business_id;
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
    this.profilePic = await ProfilePicHelper.getProfilePic(this.job.user_id, this.job.business_id);
  },
};
</script>
