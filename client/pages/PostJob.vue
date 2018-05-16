<template>
  <v-container fluid>
    <div class="main-cont-large">
        <div style="padding: 20px;">
            <h1>We're glad you're here</h1>

            <p style="font-size: 1.3em;">Kunvet is designed for quicker hiring for smaller organization and personal hiring. Kunvet acts as a pre-screening process for your hiring.<br>
            Time is valuable to students and employers, so we ask employers to make up their decision within 35 days before actions are restricted to an application.
            </p>

            <h1>How it works</h1>
            <p style="font-size: 1.3em;">Depending on your need, begin by choosing the appropriate type of account.<br>
            After students apply, their information will be organized under the Applicants page. You may <b>Accept</b> or <b>Reject</b> her, whom we’ll notify for you.<br>
            If you found a good candidate, you may email her and continue your usual hiring process, after clicking on <b>Accept</b> or <b>Reject</b>.
            </p>

            <p><router-link to="/signup"><b><u>I like it, take me to sign up!</u></b></router-link></p>
            <v-btn class="kunvet-red-bg" dark @click="router.push('signup')">I like it, take me to sign up!</v-btn>
        </div>
    </div>
  </v-container>
</template>
<script>

</script>
