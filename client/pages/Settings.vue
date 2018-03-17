<style>
</style>
<template>
  <v-container fluid class="white-bg">
    <div class="main-cont-large">
      <section style="padding: 0; margin: 15px; width: auto;">
        <h1>Settings</h1>
        <br>
        <v-btn @click="logout">Logout</v-btn>
      </section>
    </div>
  </v-container>
</template>

<script>
  import App from '@/App';
  import Axios from 'axios';

  export default {
    data() {
      return {
      };
    },
    methods: {
      logout() {
        App.methods.logout();
        this.$store.commit({
          type: 'resetState',
        });
        Axios.get('/auth/logout').then(() => {
        }, (error) => {
          console.error(error);
        });
        this.$router.push('/');
      },
    },
  };
</script>
