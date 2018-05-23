<template>
  <v-container fluid class="pa-0" style="max-width: 100%; font-size: 1.2em;">
    <v-layout row wrap class="panel px-3 py-5">
      <div style="max-width: 960px; margin: 0 auto;">
        <h2 class="black--text display-1 py-3">
          We're glad you're here
        </h2>
        <p>
          Kunvet is designed for smaller organization and personal hiring. Kunvet acts as a pre-screening process for your hiring.
        </p>

        <h2 class="black--text display-1 py-3">
          Can I post on Kunvet?
        </h2>
        <p>
          As long as you are requesting for help or offering opportunities that allow students to learn and build experience, you can post on Kunvet.
        </p>
      </div>
    </v-layout>

    <v-container fluid class="panel py-5">
      <v-layout row wrap justify-center>
        <v-flex xs12 md5 lg3 xl2 v-for="type in accountTypes" class="ma-2">
          <v-card class="white pa-3">
            <img :src="type.image" class="image">
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
          <v-btn dark block class="kunvet-red-bg" :to="type.to">
            {{ type.actionText }}
          </v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <div style="max-width: 960px; margin: 0 auto; text-align: center;">
          <h2 class="black--text display-1 py-3">
            What if I change my mind later?
          </h2>
          <p>
            Kunvet has a flexible system. You can create an organization page whenever you’re ready.
          </p>
          <p>
            Just click <v-btn small outline style="pointer-events: none;">Create Organization</v-btn> under your profile page.
          </p>
        </div>
      </v-layout>
    </v-container>

    <v-layout row wrap class="panel px-3 py-5">
      <div style="width: 960px; max-width: 960px; margin: 0 auto;">
        <h2 class="black--text display-1 py-3" style="text-align: center;">
          How does it work?
        </h2>
        <p>
          It's as easy as 1, 2, 3!
          <ol>
            <li>Create an account</li>
            <li>Post a job and choose how you want to receive application:</li>
              <ul class="pl-3">
                <li>receive resumes on Kunvet</li>
                <li>or use your existing Google Form</li>
                <li>or ask them to send their resume to your email</li>
              </ul>
            </li>
            <li>That's it!</li>
          </ol>
        </p>
        <p>
          Note: your job expires in a month. If you’re still hiring, click <v-btn small outline style="pointer-events: none;">Repost</v-btn> for that job. We do this because we want to make sure students are always looking at the latest job in the market.
        </p>
      </div>
    </v-layout>
  </v-container>
</template>
<script>
import PersonalImage from '@/assets/personal.svg';
import OrganizationImage from '@/assets/organization.svg';

export default {
  data() {
    return {
      accountTypes: [
        {
          title: 'Hire as an individual',
          description: '',
          scenarios: [
            'Mom looking for babysitter',
            'Professor looking for assistant',
            'Student looking for tutor',
          ],
          image: PersonalImage,
          actionText: 'Create individual account',
          to: '/signup/personal',
        },
        {
          title: 'Hire for an organization',
          description: '',
          scenarios: [
            'School club',
            'Business',
            'School program',
          ],
          image: OrganizationImage,
          actionText: 'Create organization account',
          to: '/signup/organization',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.panel:nth-child(odd) {
  background-repeat: repeat;
  background-color: #ff8000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23ff8000' cx='50' cy='0' r='50'/%3E%3Cg fill='%23ff8700' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ff8f02' cx='50' cy='100' r='50'/%3E%3Cg fill='%23ff9606' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ff9d0b' cx='50' cy='200' r='50'/%3E%3Cg fill='%23fea311' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23feaa17' cx='50' cy='300' r='50'/%3E%3Cg fill='%23feb11e' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23fdb724' cx='50' cy='400' r='50'/%3E%3Cg fill='%23fdbe2a' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23fcc431' cx='50' cy='500' r='50'/%3E%3Cg fill='%23fbca37' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23fbd03e' cx='50' cy='600' r='50'/%3E%3Cg fill='%23fad645' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f9dc4c' cx='50' cy='700' r='50'/%3E%3Cg fill='%23f9e253' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f8e85b' cx='50' cy='800' r='50'/%3E%3Cg fill='%23f7ee62' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f6f46a' cx='50' cy='900' r='50'/%3E%3Cg fill='%23f6f972' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f5ff7a' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
  background-position: center;

  /*
  box-shadow:
    inset 0px 11px 8px -10px #555,
    inset 0px -11px 8px -10px #555;
  */
}

.image {
  display: block;
  width: 50%;
  margin: 0 auto;
}
</style>
