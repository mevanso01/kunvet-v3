<style lang="scss" scoped>
// big desktop
@media (min-width: 1025px){
  .medium, .mobile, .small, .extra_small {
    display: none !important;
  }
  .home_content{
    width: 100%;
    padding-top: 164px;
  }
  .index_top{
    max-width: 1008px;
    padding: 0 24px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
  .interview_woman{
    height: 550px;
    margin-right: 90px;
  }
  .search_area{
    width: 400px;
    height: 540px;
    background-color: white;
    margin-top: auto;
    margin-bottom: auto;
  }
  .search_title{
    font-family: proxima-nova, sans-serif;
    font-weight: 600;
    letter-spacing: 0.06em;
    font-size: 50px;
    line-height: 140%;
    color: #ff6969;
    text-align: left;
    margin-bottom: 0px;
  }
  .search_bar_container{
    width: 400px;
    height: 64px;
    background-color: #f4f4f4;
    box-shadow: 0;
    font-size: 16px;
    display: flex;
  }
  .search_bar_head{
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 0.12em;
    padding-left: 24px;
    padding-top: 20px;
    margin-bottom: 0px;
  }
  .search_bar_field{
    width: 292px;
    height: 100%;
    background-color: none;
  } 
  .search_bar_icon{
    font-size: 16px;
    margin-right: 24px;
    color: lightgrey;
  }
  .search_bar_icon_cross{
    font-size: 16px;
    margin-left: 24px;
    color: #5a8cff; 
  }
  .search_bar_current{
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    padding-left: 10px;
    padding-top: 20px;
    margin-bottom: 0px;
    font-size: 16px;
    color: #5a8cff; 
  }
  .search_bar_text_field{
    height: 52px;
  }
  .search_btn{
    margin-top: 20px;
    width: 100%;
    height: 64px !important;
    line-height: 64px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px; 
    letter-spacing: 0.12em; 
    line-height: 120%;
    font-weight: 600;
  }
  .ykunvet_div{
    max-width: 1008px;
    padding: 0 0px 0px 24px;
    margin: 0 auto;
  }
  .ykunvet_section{
    display: flex;
    margin-top: 120px;
  }
  .ykunvet_text_div{
    width: 500px;
    height: 340px;
    margin-bottom: auto;
    margin-top: auto;
    margin-right: 100px;
  }
  .ykunvet_header{
    font-size: 36px;
    line-height: 120%;
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 0.03em;
    margin-bottom: 0px;
  }
  .ykunvet_text{
    font-size: 24px;
    line-height: 150%;
    font-weight: 300;
    letter-spacing: 0;
    padding-top: 30px;
    margin-bottom: 0px;
    font-family: proxima-nova, sans-serif;
    color: black;
  }
  .ykunvet_phone{
    width: 400px;
  }
  .student_testimonials{
    width: 100%;
    margin-top: 120px;
  }
  .testimonials{
    background: linear-gradient(to right, #FF5F6D 0%, #FFC371 170%);
    box-shadow: none;
  }
  .test_slide{
    width: 100%;
    margin-left: 0px;
  }
  .slide_info{
    max-width: 1008px;
    padding: 0 24px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .test_title{
    line-height: 120%;
    width: 100%;
    letter-spacing: 0;
    max-width: 960px;
    font-weight: 600;
    padding-top: 80px;
    margin-left: 24px;
    font-family: proxima-nova, sans-serif; 
    font-size: 40px;
    margin-bottom: 0px;
    color: white;
  }
  .test_text{
    padding-top: 40px;
    width: 614px;
    font-family: proxima-nova, sans-serif; 
    font-size: 24px;
    color: white;
    line-height: 150%;
    margin-right: 130px;
    margin-bottom: 0px;
    font-weight: 300; 
  }
  .quote{
    font-family: proxima-nova, sans-serif; 
    color: white;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-top: 6px;
    font-size: 64px;
  }
  .bio{
    width: 190px;
    height: 200px;
  }
  .bio_img{
    height: 66px;
    width: 66px;
    margin-top: 10px;
    display: block;
  }
  .bio_header{
    padding-top: 20px;
    font-size: 16px;
    color: white;
    font-family: proxima-nova, sans-serif; 
    font-weight: 600;
    line-height: 100%;
    margin-bottom: 0px;
  }
  .bio_text{
    font-size: 16px;
    padding-top: 10px;
    font-weight: 300;
    color: white;
    font-family: proxima-nova, sans-serif; 
    line-height: 100%;
    margin-bottom: 0px;
  }
  .next_job_div{
    max-width: 1008px;
    padding: 0 24px;
    margin: 120px auto 0;
    text-align: center;
  }
  .next_job_pic{
    width: 100%;
  }
  .next_job_title{
    margin-top: 80px;
    font-size: 40px;
    line-height: 120%;
    font-weight: 600;
    letter-spacing: 0;
    color: #ff6969;
    font-family: proxima-nova, sans-serif; 
    margin-bottom: 0px;
  }
  .next_job_text{
    font-size: 24px;
    line-height: 150%;
    font-weight: 300;
    letter-spacing: 0;
    color: black;
    font-family: proxima-nova, sans-serif; 
    padding-top: 30px;
    margin-bottom: 0px;
  }
  .next_job_btn{
    margin-top: 20px;
    width: 290px;
    height: 80px !important;
    line-height: 80px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    background-color: #ff6969;
  }
  .next_job_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 22px; 
    color: white;
    letter-spacing: 0em; 
    line-height: 120%;
    font-weight: 600;
  }
  .looking_div{
    margin-top: 120px;
    width: 100%;
    background: linear-gradient(to right, #FF5F6D 0%, #FFC371 170%);
  }
  .looking_text_div{
    max-width: 1008px;
    padding: 0 24px;
    margin: 0 auto;
  }
  .looking_header{
    padding-top: 60px;
    font-size: 40px;
    line-height: 120%;
    font-weight: 600;
    letter-spacing: 0;
    color: white;
    font-family: proxima-nova, sans-serif; 
    margin-bottom: 0px;
  }
  .looking_text{
    font-size: 24px;
    line-height: 120%;
    font-weight: 300;
    letter-spacing: 0;
    color: white;
    font-family: proxima-nova, sans-serif; 
    padding-top: 6px;
    margin-bottom: 0px;
  }
  .looking_btn{
    margin-top: 20px;
    width: 200px;
    height: 68px !important;
    line-height: 68px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    background-color: white !important;
  }
  .looking_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 22px; 
    color: #308afc;
    letter-spacing: 0em; 
    line-height: 120%;
    font-weight: 600;
  }
  .looking_btn_undertext{
    font-size: 14px;
    line-height: 120%;
    font-weight: 300;
    letter-spacing: 0;
    color: white;
    font-family: proxima-nova, sans-serif; 
    padding-top: 8px;
    padding-bottom: 60px;
    margin-bottom: 0px;
  }
}
// medium desktop
@media (min-width: 801px) and (max-width: 1024px) {
  .desktop, .mobile, .small, .extra_small {
    display: none !important;
  }
  .home_content{
    width: 100%;
    padding-top: 124px;
  }
  .index_top{
    max-width: 1008px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
  .interview_woman{
    height: 520px;
    margin-right: 70px;
  }
  .search_area{
    width: 356px;
    height: 442px;
    background-color: white;
    margin-top: auto;
    margin-bottom: auto;
  }
  .search_title{
    width: 356px;
    font-family: proxima-nova, sans-serif;
    font-weight: 600;
    letter-spacing: 0.06em;
    font-size: 44px;
    line-height: 140%;
    color: #ff6969;
    text-align: left;
    margin-bottom: 0px;
  }
  .search_bar_container{
    width: 100%;
    height: 64px;
    background-color: #f4f4f4;
    box-shadow: 0;
    font-size: 16px;
    display: flex;
  }
  .search_bar_head{
    width: 68px;
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 0.12em;
    padding-left: 24px;
    padding-top: 20px;
    margin-bottom: 0px;
  }
  .search_bar_field{
    width: 100%;
    height: 100%;
    background-color: none;
  }
  .search_bar_text_field{
    height: 52px;
  }
  .search_bar_icon{
    font-size: 16px;
  }
  .search_btn{
    margin-top: 20px;
    width: 100%;
    height: 64px !important;
    line-height: 64px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px; 
    letter-spacing: 0.12em; 
    line-height: 120%;
    font-weight: 600;
  }
  .ykunvet_div{
    max-width: 1008px;
    padding: 0 0px 0px 24px;
    margin: 0 auto;
  }
  .ykunvet_section{
    display: flex;
    margin-top: 120px;
  }
  .ykunvet_text_div{
    width: 50%;
    height: 340px;
    margin-bottom: auto;
    margin-top: auto;
    margin-right: 11%;
  }
  .ykunvet_header{
    font-size: 32px;
    line-height: 120%;
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 0.03em;
    margin-bottom: 0px;
  }
  .ykunvet_text{
    font-size: 22px;
    line-height: 150%;
    font-weight: 300;
    letter-spacing: 0;
    padding-top: 24px;
    margin-bottom: 0px;
    font-family: proxima-nova, sans-serif;
    color: black;
  }
  .ykunvet_phone{
    width: 39%;
  }
  .student_testimonials{
    width: 100%;
    margin-top: 120px;
  }
  .testimonials{
    background: linear-gradient(to right, #FF5F6D 0%, #FFC371 170%);
    box-shadow: none;
  }
  .test_slide{
    width: 100%;
    margin-left: 0px;
  }
  .slide_info{
    max-width: 1008px;
    padding: 0 24px 40px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .test_title{
    line-height: 120%;
    width: 100%;
    letter-spacing: 0;
    max-width: 960px;
    font-weight: 600;
    padding-top: 100px;
    margin-left: 24px;
    font-family: proxima-nova, sans-serif; 
    font-size: 36px;
    margin-bottom: 0px;
    color: white;
  }
  .test_text{
    padding-top: 40px;
    width: 438px;
    font-family: proxima-nova, sans-serif; 
    font-size: 22px;
    color: white;
    line-height: 150%;
    margin-right: 100px;
    margin-bottom: 0px;
    font-weight: 300; 
  }
  .quote{
    font-family: proxima-nova, sans-serif; 
    color: white;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-top: 6px;
    font-size: 64px;
  }
  .bio{
    width: 190px;
    height: 160px;
    margin-bottom: auto;
    margin-top: auto;
  }
  .bio_img{
    height: 66px;
    width: 66px;
    margin-top: 10px;
    display: block;
  }
  .bio_header{
    padding-top: 16px;
    font-size: 16px;
    color: white;
    font-family: proxima-nova, sans-serif; 
    font-weight: 600;
    line-height: 100%;
    margin-bottom: 0px;
  }
  .bio_text{
    font-size: 16px;
    padding-top: 8px;
    font-weight: 300;
    color: white;
    font-family: proxima-nova, sans-serif; 
    line-height: 100%;
    margin-bottom: 0px;
  }
  .next_job_div{
    max-width: 1008px;
    padding: 0 24px;
    margin: 120px auto 0;
    text-align: center;
  }
  .next_job_pic{
    width: 100%;
  }
  .next_job_title{
    margin-top: 80px;
    font-size: 36px;
    line-height: 120%;
    font-weight: 600;
    letter-spacing: 0;
    color: #ff6969;
    font-family: proxima-nova, sans-serif; 
    margin-bottom: 0px;
  }
  .next_job_text{
    font-size: 22px;
    line-height: 150%;
    font-weight: 300;
    letter-spacing: 0;
    color: black;
    font-family: proxima-nova, sans-serif; 
    padding-top: 30px;
    margin-bottom: 0px;
  }
  .next_job_btn{
    margin-top: 40px;
    width: 270px;
    height: 76px !important;
    line-height: 76px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    background-color: #ff6969;
  }
  .next_job_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 20px; 
    color: white;
    letter-spacing: 0em; 
    line-height: 120%;
    font-weight: 600;
  }
  .looking_div{
    margin-top: 120px;
    width: 100%;
    background: linear-gradient(to right, #FF5F6D 0%, #FFC371 170%);
  }
  .looking_text_div{
    max-width: 1008px;
    padding: 0 24px;
    margin: 0 auto;
  }
  .looking_header{
    padding-top: 60px;
    font-size: 40px;
    line-height: 120%;
    font-weight: 600;
    letter-spacing: 0;
    color: white;
    font-family: proxima-nova, sans-serif; 
    margin-bottom: 0px;
  }
  .looking_text{
    font-size: 24px;
    line-height: 120%;
    font-weight: 300;
    letter-spacing: 0;
    color: white;
    font-family: proxima-nova, sans-serif; 
    padding-top: 6px;
    margin-bottom: 0px;
  }
  .looking_btn{
    margin-top: 20px;
    width: 200px;
    height: 68px !important;
    line-height: 68px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    background-color: white !important;
  }
  .looking_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 22px; 
    color: #308afc;
    letter-spacing: 0em; 
    line-height: 120%;
    font-weight: 600;
  }
  .looking_btn_undertext{
    font-size: 14px;
    line-height: 120%;
    font-weight: 300;
    letter-spacing: 0;
    color: white;
    font-family: proxima-nova, sans-serif; 
    padding-top: 8px;
    padding-bottom: 60px;
    margin-bottom: 0px;
  }
}
// mobile
@media (min-width: 601px) and (max-width: 800px) {
  .desktop, .medium, .small, .extra_small {
    display: none !important;
  }
  .home_content{
    width: 100%;
  }
  .index_top{
    width: 100%;
    background-color: #ff6969;
  }
  .index_area{
    width: 552px;
    margin: -32px auto 0;
  }
  .search_title{
    font-family: proxima-nova, sans-serif;
    font-weight: 600;
    letter-spacing: 0;
    font-size: 42px;
    line-height: 140%;
    color: #ffffff;
    text-align: left;
    padding-top: 240px;
    padding-bottom: 56px;
    width: 552px;
    margin: 0 auto;
  }
  .search_bar_container{
    width: 100%;
    height: 64px;
    background-color: #f4f4f4;
    box-shadow: 0;
    font-size: 16px;
    display: flex;
  }
  .search_bar_head{
    width: 68px;
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 0.12em;
    margin-left: 24px;
    padding-top: 20px;
    margin-bottom: 0px;
  }
  .search_bar_field{
    width: 100%;
    height: 100%;
    background-color: none;
  }
  .search_bar_text_field{
    height: 52px;
  }
  .search_bar_icon{
    font-size: 16px;
    padding-right: 24px;
    padding-left: 10px;
    color: lightgrey;
  }
  .search_btn{
    margin-top: 20px;
    width: 100%;
    height: 64px !important;
    line-height: 64px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px; 
    letter-spacing: 0.12em; 
    line-height: 120%;
    font-weight: 600;
  }

}
// small
@media (min-width: 451px) and (max-width: 600px) {
  .desktop, .medium, .mobile, .extra_small {
    display: none !important;
  }
  .home_content{
    width: 100%;
  }
  .index_top{
    width: 100%;
    background-color: #ff6969;
  }
  .index_area{
    width: calc(100% - 48px);
    margin: -32px auto 0;
  }
  .search_title{
    font-family: proxima-nova, sans-serif;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 140%;
    color: #ffffff;
    text-align: left;
    padding-top: 200px;
    padding-bottom: 56px;
    width: calc(100% - 48px);
    margin: 0 auto;
  }
 .search_bar_container{
    width: 100%;
    height: 64px;
    background-color: #f4f4f4;
    box-shadow: 0;
    font-size: 16px;
    display: flex;
  }
  .search_bar_head{
    width: 68px;
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 0.12em;
    padding-left: 24px;
    padding-top: 20px;
    margin-bottom: 0px;
  }
  .search_bar_field{
    width: 100%;
    height: 100%;
    background-color: none;
  }
  .search_bar_text_field{
    height: 52px;
  }
  .search_bar_icon{
    font-size: 16px;
    padding-right: 24px;
    padding-left: 10px;
    color: lightgrey;
  }
  .search_btn{
    margin-top: 20px;
    width: 100%;
    height: 64px !important;
    line-height: 64px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px; 
    letter-spacing: 0.12em; 
    line-height: 120%;
    font-weight: 600;
  }
}
@media (min-width: 521px) and (max-width: 600px) {
  .search_title{
    font-size: 38px;
  }
}
@media (min-width: 451px) and (max-width: 520px) {
  .search_title{
    font-size: 32px;
  }
}
// extra small
@media (max-width: 450px) {
  .desktop, .medium, .mobile, .small {
    display: none !important;
  }
  .home_content{
    width: 100%;
  }
  .index_top{
    width: 100%;
    background-color: #ff6969;
  }
  .index_area{
    width: calc(100% - 48px);
    margin: -32px auto 0;
  }
  .search_title{
    font-family: proxima-nova, sans-serif;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 140%;
    color: #ffffff;
    text-align: left;
    font-size: 28px;
    padding-top: 140px;
    padding-bottom: 52px;
    width: calc(100% - 48px);
    margin: 0 auto;
  }
 .search_bar_container{
    width: 100%;
    height: 64px;
    background-color: #f4f4f4;
    box-shadow: 0;
    font-size: 16px;
    display: flex;
  }
  .search_bar_head{
    width: 68px;
    font-weight: 600;
    font-family: proxima-nova, sans-serif;
    letter-spacing: 0.12em;
    padding-left: 20px;
    padding-top: 20px;
    margin-bottom: 0px;
  }
  .search_bar_field{
    width: 100%;
    height: 100%;
    background-color: none;
  }
  .search_bar_text_field{
    height: 52px;
  }
  .search_bar_icon{
    font-size: 16px;
    padding-right: 20px;
    padding-left: 10px;
    color: lightgrey;
  }
  .search_btn{
    margin-top: 20px;
    width: 100%;
    height: 64px !important;
    line-height: 64px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }
  .search_btn_text{
    font-family: proxima-nova, sans-serif;
    font-size: 16px; 
    letter-spacing: 0.12em; 
    line-height: 120%;
    font-weight: 600;
  }
}

</style>

<template>
  <div class="home_page">
    <!-- desktop size -->
    <div class="home_content desktop">
      <div class="index_top">
          <img class="interview_woman" :src="pngs.woman" alt="Female Job Applicant Waiting for Job Interview">
          <div class="search_area">
            <h2 class="search_title">Fresh Job<br>Opportunities<br>Near You.</h2>
            <div class="search_bar_container" style="margin-top: 36px;">
              <div class="search_bar_head">FIND</div>
              <div class="search_bar_field">
                <v-text-field
                  solo flat hide-details clearable
                  label="Part time web developer"
                  v-model="query"
                  class="search_bar_text_field"
                ></v-text-field>

              </div>
              <v-icon class="search_bar_icon">fas fa-times-circle</v-icon>
            </div>
            <div class="search_bar_container" style="margin-top: 10px;">
              <div class="search_bar_head">NEAR</div>
              <div class="search_bar_field">
                <v-text-field
                  v-model="job.address"
                  ref="addressField"
                  class="search_bar_text_field"
                  label="Address"
                  required
                  @change="setLatLongs"
                  :rules="[() => (!!(job.latitude) && !!(job.longitude)) || 'Invalid address. Please select a complete address from the dropdown']"
                ></v-text-field>
              </div>
              <v-icon class="search_bar_icon">fas fa-times-circle</v-icon>
            </div>
            <div class="search_bar_container" style="margin-top: 10px;">
              <v-icon class="search_bar_icon_cross">fas fa-crosshairs</v-icon>
              <p class="search_bar_current">Use Current Location</p>
            </div>
            <router-link :to="searchDestination"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
          </div>
      </div>

      <!-- <div class="ykunvet_div">
        <div class="ykunvet_section">
          <div class="ykunvet_text_div">
            <h2 class="ykunvet_header">Out-dated Jobs — Ugh!</h2>
            <p class="ykunvet_text">
              You applied to a job, and weeks or even months later, 
              the company finally replied that the job you applied to no longer
              exists—Does this sound familiar? Well, now that you are here with us, don’t you worry
              anymore! We only show you the latest jobs near your location.</p>
          </div>
          <img class="ykunvet_phone" :src="pngs.phone1" alt="Newest Jobs Near Me">
        </div>
        <div class="ykunvet_section">
          <div class="ykunvet_text_div">
            <h2 class="ykunvet_header">Still being kept in the dark?</h2>
            <p class="ykunvet_text">
              Seriously? You still do not know what happens to your resume until someone
              replies? Then you should start using Kunvet now. No kidding. We inform all of our users
              about a change in their application status immediately. Whether their resume was
              received or viewed, they will know it right away.</p>
          </div>
          <img class="ykunvet_phone" :src="pngs.phone2" alt="Being kept in the dark?">
        </div>
        <div class="ykunvet_section">
          <div class="ykunvet_text_div">
            <h2 class="ykunvet_header">One Resume Is Not Enough.</h2>
            <p class="ykunvet_text">
              Many of you have more than one resume—because you are very “versatile”. On
              Kunvet, you can upload as many resumes as you want for the different kind of jobs you
              apply to, and we will keep them safe and sound for whenever you need them.</p>
          </div>
          <img class="ykunvet_phone" :src="pngs.phone3" alt="Multiple Resumes">
        </div>
      </div>
      <div class="student_testimonials">
        <v-carousel class="hire_monials testimonials" cycle interval="100000000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">Kunvet Really Helps.</h2>
              <p class="quote">“</p><p class="test_text">Though a fairly new website, Kunvet helped me a lot with
                job searching. I definitetly recommend using this service, especially for people like me who wants 
                to work closer to home.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.profilePic"/>
                <p class="bio_header">Sandra C.</p>
                <p class="bio_text">Warehouse Associate</p>
                <p class="bio_text">at Amazon</p>
              </div>
            </div>
            <div style="height: 104px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">Kunvet Really Helps.</h2>
              <p class="quote">“</p><p class="test_text">I found my second and third job on Kunvet, so I definitely
                recommend this website to anyone who is looking for jobs. I also find their customer service to be responsive.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.profilePic"/>
                <p class="bio_header">Anthony P.</p>
                <p class="bio_text">Intern</p>
                <p class="bio_text">at The H Law Group</p>
              </div>
            </div>
            <div style="height: 104px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">Kunvet Really Helps.</h2>
              <p class="quote">“</p><p class="test_text">I love how the interface is clean and modern. I find the
                jobs on your website to be unique and I always come back to it from time to time to see what jobs are out there.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.profilePic"/>
                <p class="bio_header">Kamilah D.</p>
                <p class="bio_text">Sales Associate</p>
                <p class="bio_text">at Closet Twenty One</p>
              </div>
            </div>
            <div style="height: 104px;"/>
          </v-carousel-item>
        </v-carousel>
      </div> 
      <div class="next_job_div">
        <img class="next_job_pic" :src="pngs.nextJob" alt="Job applicants at an Interview">
        <h2 class="next_job_title">Your Next Job is Waiting for You.</h2>
        <p class="next_job_text">With an account, you have access to all the newest jobs near you. To apply to any job, a
            click of a button is all you need to do. Get your free account now.</p>
        <router-link :to="searchDestination"><k-btn class="next_job_btn"><span class="next_job_btn_text">Get a Free Account</span></k-btn></router-link>
      </div>
      <div class="looking_div">
        <div class="looking_text_div">
          <h2 class="looking_header">Looking to hire? You are at the right place!</h2>
          <p class="looking_text">Posting starts at 80¢ per day. Save yourself time and money by using Kunvet.</p>
          <router-link :to="searchDestination"><k-btn class="looking_btn"><span class="looking_btn_text">Post a Job</span></k-btn></router-link>
          <p class="looking_btn_undertext">Satisfication guaranteed. Or money back.</p>
        </div>
      </div>-->
    </div>
    <div class="home_content medium">
      <div class="index_top">
          <img class="interview_woman" :src="pngs.woman" alt="Female Job Applicant Waiting for Job Interview">
          <div class="search_area">
            <h2 class="search_title">Fresh Job<br>Opportunities<br>Near You.</h2>
            <div class="search_bar_container" style="margin-top: 30px;">
              <div class="search_bar_head">FIND</div>
              <div class="search_bar_field">
                <v-text-field
                  solo flat hide-details clearable
                  label="Part time web developer"
                  v-model="query"
                  class="search_bar_text_field"
                ></v-text-field>
              </div>
            </div>
            <div class="search_bar_container" style="margin-top: 10px;">
              <div class="search_bar_head">NEAR</div>
              <div class="search_bar_field">
                <v-select
                  label="School or City"
                  item-text="name"
                  item-value="name"
                  v-bind:items="availableCities"
                  v-model="selectedCity"
                  solo flat hide-details autocomplete
                  class="search_bar_text_field"
                >
                </v-select>
              </div>
            </div>
            <router-link :to="searchDestination"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
          </div>
      </div>
      <div class="ykunvet_div">
        <div class="ykunvet_section">
          <div class="ykunvet_text_div">
            <h2 class="ykunvet_header">Out-dated Jobs — Ugh!</h2>
            <p class="ykunvet_text">
              You applied to a job, and weeks or even months later, 
              the company finally replied that the job you applied to no longer
              exists—Does this sound familiar? Well, now that you are here with us, don’t you worry
              anymore! We only show you the latest jobs near your location.</p>
          </div>
          <img class="ykunvet_phone" :src="pngs.phone1" alt="Newest Jobs Near Me">
        </div>
        <div class="ykunvet_section">
          <div class="ykunvet_text_div">
            <h2 class="ykunvet_header">Still being kept in the dark?</h2>
            <p class="ykunvet_text">
              Seriously? You still do not know what happens to your resume until someone
              replies? Then you should start using Kunvet now. No kidding. We inform all of our users
              about a change in their application status immediately. Whether their resume was
              received or viewed, they will know it right away.</p>
          </div>
          <img class="ykunvet_phone" :src="pngs.phone2" alt="Being kept in the dark?">
        </div>
        <div class="ykunvet_section">
          <div class="ykunvet_text_div">
            <h2 class="ykunvet_header">One Resume Is Not Enough.</h2>
            <p class="ykunvet_text">
              Many of you have more than one resume—because you are very “versatile”. On
              Kunvet, you can upload as many resumes as you want for the different kind of jobs you
              apply to, and we will keep them safe and sound for whenever you need them.</p>
          </div>
          <img class="ykunvet_phone" :src="pngs.phone3" alt="Multiple Resumes">
        </div>
      </div>
      <div class="student_testimonials">
        <v-carousel class="hire_monials testimonials" cycle interval="100000000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">Kunvet Really Helps.</h2>
              <p class="quote">“</p><p class="test_text">Though a fairly new website, Kunvet helped me a lot with
                job searching. I definitetly recommend using this service, especially for people like me who wants 
                to work closer to home.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.profilePic"/>
                <p class="bio_header">Sandra C.</p>
                <p class="bio_text">Warehouse Associate</p>
                <p class="bio_text">at Amazon</p>
              </div>
            </div>
            <div style="height: 122px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">Kunvet Really Helps.</h2>
              <p class="quote">“</p><p class="test_text">I found my second and third job on Kunvet, so I definitely
                recommend this website to anyone who is looking for jobs. I also find their customer service to be responsive.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.profilePic"/>
                <p class="bio_header">Anthony P.</p>
                <p class="bio_text">Intern</p>
                <p class="bio_text">at The H Law Group</p>
              </div>
            </div>
            <div style="height: 108px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">Kunvet Really Helps.</h2>
              <p class="quote">“</p><p class="test_text">I love how the interface is clean and modern. I find the
                jobs on your website to be unique and I always come back to it from time to time to see what jobs are out there.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.profilePic"/>
                <p class="bio_header">Kamilah D.</p>
                <p class="bio_text">Sales Associate</p>
                <p class="bio_text">at Closet Twenty One</p>
              </div>
            </div>
            <div style="height: 108px;"/>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="next_job_div">
        <img class="next_job_pic" :src="pngs.nextJob" alt="Job applicants at an Interview">
        <h2 class="next_job_title">Your Next Job is Waiting for You.</h2>
        <p class="next_job_text">With an account, you have access to all the newest jobs near you. To apply to any job, a
            click of a button is all you need to do. Get your free account now.</p>
        <router-link :to="searchDestination"><k-btn class="next_job_btn"><span class="next_job_btn_text">Get a Free Account</span></k-btn></router-link>
      </div>
      <div class="looking_div">
        <div class="looking_text_div">
          <h2 class="looking_header">Looking to hire? You are at the right place!</h2>
          <p class="looking_text">Posting starts at 80¢ per day. Save yourself time and money by using Kunvet.</p>
          <router-link :to="searchDestination"><k-btn class="looking_btn"><span class="looking_btn_text">Post a Job</span></k-btn></router-link>
          <p class="looking_btn_undertext">Satisfication guaranteed. Or money back.</p>
        </div>
      </div>
    </div>
    <div class="home_content mobile">
      <div class="index_top">
        <h2 class="search_title">Fresh Job Opportunities Near You.</h2>
      </div>
      <div class="index_area">
        <div class="search_bar_container">
          <div class="search_bar_head">FIND</div>
          <div class="search_bar_field">
            <v-text-field
              solo flat hide-details clearable
              label="Part time web developer"
              v-model="query"
              class="search_bar_text_field"
            ></v-text-field>
          </div>
          <v-icon class="search_bar_icon">fas fa-times-circle</v-icon>
        </div>
        <div class="search_bar_container" style="margin-top: 10px;">
          <div class="search_bar_head">NEAR</div>
          <div class="search_bar_field">
            <v-select
              label="School or City"
              item-text="name"
              item-value="name"
              v-bind:items="availableCities"
              v-model="selectedCity"
              solo flat hide-details autocomplete
              class="search_bar_text_field"
            >
            </v-select>
          </div>
          <v-icon class="search_bar_icon">fas fa-times-circle</v-icon>
        </div>
        <router-link :to="searchDestination"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
      </div>
    </div>
    <div class="home_content small">
      <div class="index_top">
        <h2 class="search_title">Fresh Job Opportunities Near You.</h2>
      </div>
      <div class="index_area">
        <div class="search_bar_container">
          <div class="search_bar_head">FIND</div>
          <div class="search_bar_field">
            <v-text-field
              solo flat hide-details clearable
              label="Part time web developer"
              v-model="query"
              class="search_bar_text_field"
            ></v-text-field>
          </div>
          <v-icon class="search_bar_icon">fas fa-times-circle</v-icon>
        </div>
        <div class="search_bar_container" style="margin-top: 10px;">
          <div class="search_bar_head">NEAR</div>
          <div class="search_bar_field">
            <v-select
              label="School or City"
              item-text="name"
              item-value="name"
              v-bind:items="availableCities"
              v-model="selectedCity"
              solo flat hide-details autocomplete
              class="search_bar_text_field"
            >
            </v-select>
          </div>
          <v-icon class="search_bar_icon">fas fa-times-circle</v-icon>
        </div>
        <router-link :to="searchDestination"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
      </div>
    </div>
    <div class="home_content extra_small">
      <div class="index_top">
        <h2 class="search_title">Fresh Job Opportunities Near You.</h2>
      </div>
      <div class="index_area">
        <div class="search_bar_container">
          <div class="search_bar_head">FIND</div>
          <div class="search_bar_field">
            <v-text-field
              solo flat hide-details clearable
              label="Part time web developer"
              v-model="query"
              class="search_bar_text_field"
            ></v-text-field>
          </div>
          <v-icon class="search_bar_icon">fas fa-times-circle</v-icon>
        </div>
        <div class="search_bar_container" style="margin-top: 10px;">
          <div class="search_bar_head">NEAR</div>
          <div class="search_bar_field">
            <v-select
              label="School or City"
              item-text="name"
              item-value="name"
              v-bind:items="availableCities"
              v-model="selectedCity"
              solo flat hide-details autocomplete
              class="search_bar_text_field"
            >
            </v-select>
          </div>
          <v-icon class="search_bar_icon">fas fa-times-circle</v-icon>
        </div>
        <router-link :to="searchDestination"><k-btn class="search_btn"><span class="search_btn_text">SEARCH</span></k-btn></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import woman from '@/assets/index/female-job-applicant-wearing-red-suit-waiting-for-interview.jpg';
import phone1 from '@/assets/index/newest-jobs-near-me-kunvet.png';
import phone2 from '@/assets/index/job-applications-kunvet.png';
import phone3 from '@/assets/index/resumes-kunvet.png';
import profilePic from '@/assets/index/profile-icon.png';
import nextJob from '@/assets/index/job-applicants-in-interview.png';
import gql from 'graphql-tag';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import PromoTextContainer from '@/components/PromoTextContainer';
import Coordinates from '@/constants/coordinates';
import positions from '@/constants/positions';
import locations from '@/constants/locations';
import * as VueGoogleMaps from 'vue2-google-maps';


Vue.use(VueApollo);

export default {
  components: {
    PromoTextContainer,
  },
  data() {
    return {
      svgs: {
      },
      pngs: {
        phone1: phone1,
        phone2: phone2,
        phone3: phone3,
        profilePic: profilePic,
        woman: woman,
        nextJob: nextJob,
      },
      job: {
        address: '',
        address2: null,
        latitude: null,
        longitude: null,
      },
      geocoder: null,
      addressValid: true,
      prevAutocompleteAddress: null,
      first_city_guess: 'UC Irvine',
      uid: null,
      findJobs: [],
      saved_jobs: [],
      filteredJobs: [],
      openSelectField: null,
      firstSearchTypes: [
        'Latest jobs',
      ],
      availableCities: locations.search_locations,
      filterPositions: '',
      availablePositions: positions,
      availableTypes: [
        { text: 'Full time', value: 'fulltime' },
        { text: 'Part time', value: 'parttime' },
        { text: 'Internship', value: 'internship' },
        { text: 'Contract', value: 'contract' },
      ],
      availableShifts: [
        { text: 'Morning', value: 'morning' },
        { text: 'Noon', value: 'noon' },
        { text: 'Afternoon', value: 'afternoon' },
        { text: 'Evening', value: 'evening' },
        { text: 'Mid-night', value: 'midnight' },
      ],
      // firstSearch: this.$store.state.firstSearch,
      firstSearchType: 'Latest Jobs',
      selectedCity: this.$store.state.selectedCity || 'Irvine - UC Irvine', // { lat: 33.6846, long: -117.8265 }, // this.$store.state.selectedCity,
      selectedPositions: this.$store.selectedPositions || [],
      selectedLat: Coordinates.uci.latitude,
      selectedLong: Coordinates.uci.longitude,
      selectedPositionsInital: 'All / Any',
      loadingJobs: false,
      inUsePositions: [],
      inUseTypes: [],
      query: '',
    };
  },
  watch: {
    selectedCity() {
      this.commitData();
    },
  },
  computed: {
    searchDestination() {
      if (this.query) {
        return {
          path: '/search',
          query: {
            q: this.query,
          },
        };
      }
      return {
        path: '/search',
      };
    },
    filteredAvailablePositionsObj() {
      let str = this.filterPositions;
      if (!str || str === '') {
        return this.availablePositionsObj;
        // return this.selectedPositions.concat(difference(this.availablePositions, this.selectedPositions));
      }
      str = str.toLowerCase();
      return this.availablePositionsObj.filter(item => item.text.toLowerCase().indexOf(str) !== -1);
    },
    availablePositionsObj() {
      if (this.inUsePositions.length > 0) {
        return this.availablePositions.map((position) => {
          const disabled = (this.inUsePositions.indexOf(position) === -1);
          return {
            text: position,
            disabled,
          };
        });
      }
      return this.availablePositions.map((position) => {
        const disabled = !this.filteredJobs.find(
          job => job.position_tags.indexOf(position) !== -1,
        );
        return {
          text: position,
          disabled,
        };
      });
    },
    availableTypesObj() {
      if (this.inUseTypes.length > 0) {
        return this.availableTypes.map((typeObj) => {
          typeObj.disabled = (this.inUseTypes.indexOf(typeObj.value) === -1);
          return typeObj;
        });
      }
      return this.availableTypes.map((typeObj) => {
        typeObj.disabled = !this.filteredJobs.find(
          job => job.type.indexOf(typeObj.value) !== -1 ||
            (job.type2 && job.type2.indexOf(typeObj.value) !== -1)
          ,
        );
        return typeObj;
      });
    },
    availableShiftsObj() {
      return this.availableShifts.map((shiftObj) => {
        shiftObj.disabled = !this.filteredJobs.find(
          job => job.shift.indexOf(shiftObj.value) !== -1,
        );
        return shiftObj;
      });
    },
    selectedCoordinates() {
      const selected = locations.search_locations.find(el => el.name === this.selectedCity);
      if (!selected) {
        return Coordinates.uci;
      }
      return { latitude: selected.latitude, longitude: selected.longitude };
    },
  },
  methods: {
    openSelect(name) {
      this.filterPositions = null;
      if (this.openSelectField === name) {
        this.openSelectField = null;
      } else {
        this.openSelectField = name;
      }
    },
    commitData() {
      this.$store.commit({
        type: 'keepSearch',
        sCities: this.selectedCity,
        // sTypes: this.selectedTypes,
        // sPositions: this.selectedPositions,
        // sShifts: this.selectedShifts,
      });
    },
    // unused, but could be useful later
    searchAndFilter() {
      this.openSelect(null);
      this.loadInitialJobs();
    },
    // unused, but could be useful later
    fetchAvailableFilters() {
      this.$apollo.query({
        query: gql`{
          findAvailableFilters(filter: {}){
            in_use_positions
            in_use_types
          }
        }`,
      }).then(data => {
        if (data.data.findAvailableFilters) {
          this.inUsePositions = data.data.findAvailableFilters.in_use_positions;
          this.inUseTypes = data.data.findAvailableFilters.in_use_types;
        }
      });
    },
    setPlace(place) {
      if (!place.geometry) {
        this.job.addressValid = false;
        return;
      }
      this.job.addressValid = true;
      this.job.address = place.formatted_address;
      this.job.latitude = place.geometry.location.lat();
      this.job.longitude = place.geometry.location.lng();
    },
    setLatLongs() {
      setTimeout(() => {
        if (this.geocoder && this.job.address !== this.prevAutocompleteAddress) {
          this.geocoder.geocode({ 'address': this.job.address }, (results, status) => {
            if (status === 'OK' && results.length === 1) {
              this.job.latitude = results[0].geometry.location.lat();
              this.job.longitude = results[0].geometry.location.lng();
              this.job.addressValid = true;
              this.$refs.addressField.validate();
            } else {
              this.job.latitude = null;
              this.job.longitude = null;
              this.job.addressValid = false;
              this.$refs.addressField.validate();
            }
          });
        }
      }, 500);
    },
    initGoogleMaps() {
      if (!this.autocomplete || !this.geocoder) {
        const input = this.$refs.addressField.$el.getElementsByTagName('input')[0];
        input.setAttribute('placeholder', '');
        this.autocomplete = new window.google.maps.places.Autocomplete(input);
        this.geocoder = new window.google.maps.Geocoder();
        this.autocomplete.setComponentRestrictions({
          country: ['us'],
        });
        this.autocomplete.addListener('place_changed', () => {
          this.prevAutocompleteAddress = this.job.address;
          if (this.autocomplete === null) {
            this.initGoogleMaps();
            return;
          }
          this.setPlace(this.autocomplete.getPlace());
        });
      }
      if (this.job.address) {
        this.setLatLongs();
      }
    },
  },
  activated() {
    // Initialize Google maps
    VueGoogleMaps.loaded.then(() => {
      this.initGoogleMaps();
    });
  },
};

// Define a new component called button-counter
Vue.component('button-counter', {
  template: '<button v-on:click="">Hello!</button>',
});
</script>
