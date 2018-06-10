
function getUserData() {
  /* VuexLS.restoreState('vuex',  window.localStorage).then(async (data) => {
    if (data.acct !== 0) {
      this.fetchData(); // temp
      this.uid = data.userID;
      // this.userdata = data.userdata; // temp
      if (data.acct === 1) { // Regular user. Should probably use constants soon.
        await this.fillUpIndividualJobs();
      }
    } else {
      this.$router.push('/login');
    }
  }); */
}

export default {
  getUserData,
}
