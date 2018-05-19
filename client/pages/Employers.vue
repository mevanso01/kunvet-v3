<template>
  <v-container fluid class="pa-0" style="max-width: 100%;">
    <v-layout row wrap class="green lighten-1">
      <div style="max-width: 960px; margin: 0 auto;">
        <h2 class="black--text display-1 py-3">
          We're glad you're here
        </h2>
        <p class="black--text" style="font-size: 1.3em;">
          Kunvet is designed for smaller organization and personal hiring. Kunvet acts as a pre-screening process for your hiring.
        </p>

        <h2 class="black--text display-1 py-3">
          Can I post on Kunvet?
        </h2>
        <p class="black--text" style="font-size: 1.3em;">
          As long as you are requesting for help or offering opportunities that allow students to learn and build experience, you can post on Kunvet.
        </p>
      </div>
    </v-layout>

    <div class="main-cont-large">
      <v-container fluid>
        <v-layout row wrap justify-center>
         <v-flex xs12 md5 v-for="type in accountTypes" class="ma-2">
           <v-card class="orange lighten-3">
             <v-card-title class="headline">
               {{ type.title }}
             </v-card-title>
             <v-card-text>
               {{ type.description }}
               <ul>
                 <li v-for="scenario of type.scenarios">{{ scenario }}</li>
               </ul>
             </v-card-text>
           </v-card>
           <v-btn dark block class="brown lighten-2" :to="type.to">
             {{ type.actionText }}
           </v-btn>
         </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-layout row wrap class="green lighten-1">
      <div style="max-width: 960px; margin: 0 auto; text-align: center;">
        <h2 class="black--text display-1 py-3">
          What if I change my mind later?
        </h2>
        <p class="black--text" style="font-size: 1.3em;">
          Kunvet has a flxible system. You can always create an organization page whenever you’re ready.
        </p>
      </div>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      accountTypes: [
        {
          title: 'Hire as individual',
          description: '',
          scenarios: [
            'Mom looking for babysitter',
            'Professor looking for assistant',
            'Student looking for tutor',
          ],
          actionText: 'Create individual account',
          to: '/signup/personal',
        },
        {
          title: 'Hire for organization',
          description: '',
          scenarios: [
            'School club',
            'Business',
            'School program',
          ],
          actionText: 'Create organization account',
          to: '/signup/organization',
        },
      ],
    };
  },
};
</script>
