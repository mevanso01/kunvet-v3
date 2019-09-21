<style lang="scss" scoped>
  // css for desktop
  @media (min-width: 1025px){
  }
  @media (min-width: 801px) and (max-width: 1024px) {
    .medium_hide{
      display: none !important;
    }
  }
  @media (min-width: 601px) and (max-width: 800px) {
    .mobile_hide{
      display: none !important;
    }
  }
  @media (min-width: 451px) and (max-width: 600px) {
    .small_hide{
      display: none !important;
    }
  }
  @media (min-width: 1px) and (max-width: 450px) {
    .xs_hide{
      display: none !important;
    }
  }


  @media (min-width: 1025px) {
    .medium_show{
      display: none !important;
    }
  }
  @media (min-width: 801px) {
    .mobile_show{
      display: none !important;
    }
  }
  @media (min-width: 601px) {
    .small_show{
      display: none !important;
    }
  }
  @media (min-width: 451px) {
    .xs_show{
      display: none !important;
    }
  }
</style>
<template>
  
  <div class="employer_page">
    <div class="medium_hide mobile_hide small_hide xs_hide">
      <div style="width: 100%; height: 800px; background-color: red;"></div>
    </div>
    <div class="medium_show mobile_hide small_hide xs_hide">
      <div style="width: 100%; height: 800px; background-color: purple;"></div>
    </div>
    <div class="medium_hide mobile_show small_hide xs_hide">
      <div style="width: 100%; height: 800px; background-color: blue;"></div>
    </div>
    <div class="medium_hide mobile_hide small_show xs_hide">
      <div style="width: 100%; height: 800px; background-color: green;"></div>
    </div>
    <div class="medium_hide mobile_hide small_hide xs_show">
      <div style="width: 100%; height: 800px; background-color: orange;"></div>
    </div>
  </div>
</template>

<script>
</script>
