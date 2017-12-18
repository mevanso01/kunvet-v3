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
        this.$router.push('/');
      },
    },
  };
</script>
