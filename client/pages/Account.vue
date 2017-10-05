<template>
  <v-container fluid>
    <div class="main-cont-large">
      <v-tabs dark v-model="active">
        <v-tabs-bar class="grey lighten-2">
          <v-tabs-item v-for="tab in tabs" :key="tab" :href="'#' + tab" ripple>
            {{ tab }}
          </v-tabs-item>
          <v-tabs-slider class="red"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content :key="'tab-1'" :id="'tab-1'">
            <v-card flat>
              <v-card-text>Hello</v-card-text>
            </v-card>
          </v-tabs-content>
          <v-tabs-content :key="'tab-2'" :id="'tab-2'">
            <v-card flat>
              <v-card-text>World</v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs-items>
      </v-tabs>

      <div class="text-xs-center mt-3">
        <v-btn @click.native="next">next tab</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        tabs: ['Profile', 'Jobs', 'Messages'],
        active: null,
      };
    },
    methods: {
      next() {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length];
      },
    },
  };
</script>
