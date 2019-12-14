<style lang="scss">
  @media (min-width: 1025px) {
    .search_results_div .v-list__tile--link:hover {
      background-color: transparent !important;
    }
  }
</style>
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
    .search_results_div{
      width: 400px;
      background-color: #f4f4f4;
      box-shadow: 0px 0px 5px #b0b0b0;
      font-size: 16px;
      position: absolute;
      z-index: 1000;
    }
    .search_results_div span.search_result_item_main{
      white-space: nowrap;
    }
    .search_results_div span.search_result_item_secondary{
      white-space: nowrap;
      color: grey;
    }
    .search_results_div .search_result_item{
      white-space: nowrap;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
    }
    .search_results_div ._v-list__tile{
      padding: 0 8px;
      width: 400px;
      background-color: #f4f4f4;
      font-size: 12px;
      font-weight: 300;
      line-height: 100%;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      color: #000000;
    }
    .search_results_div ._v-list__tile:hover{
      background-color: #e4e4e4;
    }
    .search_results_div ._v-list__tile:hover *{
      background-color: transparent !important;
    }
    ._dropdown-overlay {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: transparent;
      z-index: 999;
    }
    .search_btn{
      margin-top: 0px;
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
      margin-top: 200px;
    }
    .ykunvet_text_div{
      width: 442px;
      height: 340px;
      margin-bottom: auto;
      margin-top: auto;
      margin-right: 96px;
    }
    .ykunvet_header{
      font-size: 38px;
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
      padding-top: 30px;
      margin-bottom: 0px;
      font-family: proxima-nova, sans-serif;
      color: #3c3c3c;
    }
    .ykunvet_phone{
      width: 442px;
    }
    .student_testimonials{
      max-width: 1008px;
      padding: 0 24px;
      margin: 0 auto;
      display: flex;
      margin-top: 300px;
    }
    .student_testimonials_section{
      background: white;
      box-shadow: none;
    }
    .test_slide{
      width: 100%;
      margin-left: 0px;
    }
    .slide_info{
      max-width: 960px;
      display: flex;
    }
    .slide_stuff{
      height: 380px;
      width: 520px;
      margin: auto 0;
    }
    .quote{
      font-family: proxima-nova, sans-serif;
      font-weight: 600;
      color: #86a8e7;
      margin-left: 0px;
      letter-spacing: 0px;
      margin-bottom: 0px;
      margin-top: 0px;
      font-size: 80px;
      line-height: 120%;
    }
    .test_text{
      padding-top: 0px;
      margin-top: -20px;
      font-family: proxima-nova, sans-serif;
      font-size: 22px;
      color: #3c3c3c;
      line-height: 150%;
      margin-bottom: 0px;
      font-weight: 300;
    }
    .bio{
      //width: 260px;
    }
    .bio_img_background{
      height: 440px;
      width: 360px;
      background-color: red;
      margin-right: 60px;
      text-align: center;
    }
    .bio_img{
      margin-top: 60px;
      height: 380px;
    }
    .student_controls{
      margin-top: 44px;
      height: 12px;
      width: 84px;
      display: flex;
      justify-content: space-between;
    }
    .student_controls_dot{
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: #f0f0f0;
      cursor: pointer;
    }
    .student_controls_dot_active{
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: #c8c8c8;
      cursor: pointer;
    }
    .bio_header{
      padding-top: 60px;
      font-size: 16px;
      color: #3c3c3c;
      font-family: proxima-nova, sans-serif;
      font-weight: 600;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .bio_text{
      font-size: 16px;
      padding-top: 10px;
      font-weight: 300;
      color: #3c3c3c;
      font-family: proxima-nova, sans-serif;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .next_job{
      width: 100%;
      background-color:#f4f4f4;
      height: 800px;
    }
    .next_job_div{
      max-width: 1008px;
      padding: 0 24px;
      margin: 300px auto 0;
      text-align: center;
      display: flex;
    }
    .next_job_pic{
      width: 440px;
      height: 800px;
      margin-right: 80px;
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
      font-size: 22px;
      line-height: 150%;
      font-weight: 300;
      letter-spacing: 0;
      color: black;
      font-family: proxima-nova, sans-serif; 
      padding-top: 20px;
      padding-bottom: 40px;
      margin-bottom: 0px;
    }
    .next_job_text_div{
      width: 440px;
    }
    .next_job_btn{
      margin-top: 24px;
      width: 440px;
      height: 64px !important;
      line-height: 64px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: #ff6969;
    }
    .next_job_btn_text{
      font-family: proxima-nova, sans-serif;
      font-size: 16px;
      color: white;
      letter-spacing: 0em;
      line-height: 120%;
      font-weight: 600;
    }
    .next_job_btn_undertext{
      margin-top: -6px;
      font-size: 14px;
      line-height: 120%;
      font-weight: 300;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      padding-top: 8px;
      padding-bottom: 150px;
      margin-bottom: 0px;
    }
    .next_job_btn_undertext_terms{
      font-weight: 600;
      text-decoration: none;
    }
    .next_job_btn_undertext_terms:hover{
      text-decoration: underline;
    }
    .next_job_text_field{
      margin-bottom: 8px;
      font-family: proxima-nova, sans-serif; 
    }
    .looking_div{
      margin-top: 0px;
      width: 100%;
      background: linear-gradient(to bottom right, #38ef7d, #11998e);
    }
    .looking_text_div{
      max-width: 1008px;
      padding: 150px 24px 0;
      margin: 0 auto;
      text-align: center;
    }
    .looking_header{
      font-size: 46px;
      font-weight: 600;
      color: #ffffff;
      line-height: 120%;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0;
    }
    .looking_text{
      font-size: 22px;
      font-weight: 300;
      color: #ffffff;
      line-height: 150%;
      letter-spacing: 0;
      max-width: 560px;
      font-family: proxima-nova, sans-serif; 
      margin-bottom: 0;
      padding-top: 20px;
    }
    .looking_btn{
      margin-top: 80px;
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
      color: #11998e;
      letter-spacing: 0em;
      line-height: 120%;
      font-weight: 600;
    }
    .looking_btn_undertext{
      margin-top: -6px;
      font-size: 14px;
      line-height: 120%;
      font-weight: 300;
      letter-spacing: 0;
      color: white;
      font-family: proxima-nova, sans-serif;
      padding-top: 8px;
      padding-bottom: 150px;
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
    .bio_img_background{
      width: 440px;
      height: 380px;
      margin-right:60px;
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
      letter-spacing: 0.06em;
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
      letter-spacing: 0.06em;
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
      letter-spacing: 0.06em;
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

<style lang="scss">
// overrides here
.step {
  padding: 200px 0;
  margin: 0 0 150px;
  background-color: white 0;
  justify-content: center;
}
.graphic {
  height: 85vh;
  background-color: white;
  align-items: center;
  justify-content: center;
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
                  solo flat hide-details clearable
                  v-model="job.address"
                  ref="addressField"
                  class="search_bar_text_field"
                  label="Address"
                  required
                  @input="onChangeAddressSearchInput"
                  @focus="searchFocus=true"
                  @click:clear="onClearAddressSearchInput"
                  :rules="[() => (!!(job.latitude) && !!(job.longitude)) || 'Invalid address. Please select a complete address from the dropdown']"
                ></v-text-field>
              </div>
              <v-icon class="search_bar_icon">fas fa-times-circle</v-icon>
            </div>
            <div class="search_bar_container" style="margin-top: 10px;">
              <v-icon class="search_bar_icon_cross">fas fa-crosshairs</v-icon>
              <p class="search_bar_current">Use Current Location</p>
            </div>
            <div v-if="false || (searchFocus===true && job.addressList && job.addressList.length > 0)" class="search_results_div" style="margin-top: 10px;">
              <v-list class="py-0">
                  <v-list-tile class="_v-list__tile" v-for="(item, i) in job.addressList" :key="i" @click="onClickAddressDropdownItem(i)">
                    <div class="search_result_item">
                      <span class="search_result_item_main">{{item.structured_formatting.main_text}}</span>&nbsp;
                      <span class="search_result_item_secondary">{{item.structured_formatting.secondary_text}}</span>
                    </div>
                  </v-list-tile>
              </v-list>
            </div>
            <div v-show="searchFocus===true && job.addressList && job.addressList.length > 0" class="_dropdown-overlay" @click="searchFocus=false"></div>
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
      <!-- Scrollama starts here -->
      <div class="student_testimonials">
        <v-carousel v-model="model" class="student_monials student_testimonials_section" cycle interval="100000000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <div class="bio_img_background" style="background: linear-gradient(to bottom right, #8ab4ff, #86a8e7, #7f7fd5);">
                <img class="bio_img" :src="pngs.person1"/>
              </div>
              <div class="slide_stuff">
                <p class="quote">“</p><p class="test_text">Though a fairly new website, Kunvet helped me a lot with
                  job searching. I definitetly recommend using this service, especially for people like me who wants
                  to work closer to home.</p>
                <div class="bio">
                  <p class="bio_header">Sandra C.</p>
                  <p class="bio_text">Warehouse Associate at Amazon</p>
                  <div class="student_controls">
                    <div @click="model = 0" :class="[model === 0 ? 'student_controls_dot_active' : 'student_controls_dot']"/>
                    <div @click="model = 1" :class="[model === 1 ? 'student_controls_dot_active' : 'student_controls_dot']"/>
                    <div @click="model = 2" :class="[model === 2 ? 'student_controls_dot_active' : 'student_controls_dot']"/>
                  </div>
                </div>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <div class="bio_img_background" style="background: linear-gradient(to bottom right, #fbc2eb, #a6c1ee);">
                <img class="bio_img" :src="pngs.person2"/>
              </div>
              <div class="slide_stuff">
                <p class="quote" style="color: #fbc2eb">“</p><p class="test_text">I found my second and third job on Kunvet, so I definitely recommend
                   this website to anyone who is looking for jobs. I also find their customer service to be responsive.</p>
                <div class="bio">
                  <p class="bio_header">Anthony P.</p>
                  <p class="bio_text">Intern at The H Law Group</p>
                  <div class="student_controls">
                    <div @click="model = 0" :class="[model === 0 ? 'student_controls_dot_active' : 'student_controls_dot']"/>
                    <div @click="model = 1" :class="[model === 1 ? 'student_controls_dot_active' : 'student_controls_dot']"/>
                    <div @click="model = 2" :class="[model === 2 ? 'student_controls_dot_active' : 'student_controls_dot']"/>
                  </div>
                </div>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <div class="bio_img_background" style="background: linear-gradient(to bottom right, #ffb88c, #ed4264);">
                <img class="bio_img" :src="pngs.person3"/>
              </div>
              <div class="slide_stuff">
                <p class="quote" style="color: #ed4264">“</p><p class="test_text">I love how the interface is clean and modern! I find the jobs on
                  your website to be unique and I always comeback to it from time to time to see what jobs are out there.</p>
                <div class="bio">
                  <p class="bio_header">Kamilah D.</p>
                  <p class="bio_text">Sales Associate at Closet Twenty One</p>
                  <div class="student_controls">
                    <div @click="model = 0" :class="[model === 0 ? 'student_controls_dot_active' : 'student_controls_dot']"/>
                    <div @click="model = 1" :class="[model === 1 ? 'student_controls_dot_active' : 'student_controls_dot']"/>
                    <div @click="model = 2" :class="[model === 2 ? 'student_controls_dot_active' : 'student_controls_dot']"/>
                  </div>
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div> 
      <div class="next_job" v-show="state == 'initial'">
        <div class="next_job_div">
              <!-- <h2 class="next_job_title">Your Next Job is Waiting</h2>
              <p class="next_job_text">With a free account, you have access to all the newest jobs near you. Get yours now.</p>
              <div class="next_job_field">
                <v-form ref="form">
                  <home-text-field required v-model="fname" :rules="requiredRules" label="First Name" class="next_job_text_field"/>
                  <home-text-field required v-model="lname" :rules="requiredRules" label="Last Name" class="next_job_text_field"/>
                  <home-text-field required v-model="email" :rules="emailRules" label="Email" class="next_job_text_field"/>
                  <home-text-field required v-model="password" toggleVisibility :rules="passwordRules" label="Password" class="next_job_text_field" style="margin-bottom: 0px;"/>
                </v-form>
                <k-btn @click="send_to_student_signup" class="next_job_btn"><span class="next_job_btn_text">
                    Create Free Applicant Account</span></k-btn>
                <p class="next_job_btn_undertext">I have read and agreed to the <span class="next_job_btn_undertext_terms">
                  <router-link to="terms" target="_blank">Terms and Conditions</router-link></span>.</p>
              </div> -->
              <img class="next_job_pic" :src="pngs.nextJob" alt="Home page form image">
              <SignupComponent style="width: 440px;" type="student" :fname="fname" :lname="lname" :email="email" :password="password" @success="onSuccess"/>
        </div>
      </div>
      <div class="looking_div">
        <div class="looking_text_div">
          <h2 class="looking_header">Looking to Hire?<br>You are at the Right Place!</h2>
          <div class="looking_text" style="margin: 0 auto;">Posting starts at 80¢ per day. Save yourself time and money by using Kunvet.</div>
          <router-link to="/hire"><k-btn class="looking_btn"><span class="looking_btn_text">Post a Job</span></k-btn></router-link>
          <p class="looking_btn_undertext">Satisfication guaranteed. Or money back.</p>
        </div>
      </div>
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
          <v-carousel-item class=" ">
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
          <v-carousel-item class="testing_slide_transition" >
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
import phone1 from '@/assets/index/new-fresh-latest-job-employment.png';
import phone2 from '@/assets/index/instant-job-application-status.png';
import phone3 from '@/assets/index/upload-unlimited-resumes.png';
import person1 from '@/assets/index/young-job-applicant-in-green-sweater.png';
import person2 from '@/assets/index/young-job-applicant-in-purple-checker-shirt.png';
import person3 from '@/assets/index/young-job-applicant-in-pink-hoodie.png';
import profilePic from '@/assets/index/profile-icon.png';
import nextJob from '@/assets/index/home-page-form-image.png';
import gql from 'graphql-tag';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import PromoTextContainer from '@/components/PromoTextContainer';
import Coordinates from '@/constants/coordinates';
import positions from '@/constants/positions';
import locations from '@/constants/locations';
import * as VueGoogleMaps from 'vue2-google-maps';
import 'intersection-observer';
import Scrollama from 'vue-scrollama';
import SignupComponent from '@/components/HomepageSignupComponent';

Vue.use(VueApollo);
export default {
  metaInfo: {
    title: 'Kunvet: All the New Jobs Hiring Near Me',
    meta: [
      { name: 'description', content: 'Say goodbye to stale, unrelated or fake jobs! Say hello to fresh and relevant jobs hiring near you-from real employers who are looking to hire immediately.' },
    ],
  },
  components: {
    SignupComponent,
    Scrollama,
    PromoTextContainer,
  },
  props: {
    stage: {
      type: String,
      default: '',
    },
    fname: {
      type: String,
      default: '',
    },
    lname: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      state: 'initial',
      requiredRules: [
        v => !!v || 'Required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w+)+$/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is Required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters',
      ],
      // For Scrollama
      currStepId: 1,
      // For Scrollama
      steps: [
        { id: '1', title: 'Out-dated Jobs — Ugh!', content: 'You applied to a job, and weeks or even months later, the company finally replied that the job you applied to no longer exists—Does this sound familiar? Well, now that you are here with us, don’t you worry anymore! We only show you the latest jobs near your location.' },
        { id: '2', title: 'Still being kept in the dark?', content: 'Seriously? You still do not know what happens to your resume until someone replies? Then you should start using Kunvet now. No kidding. We inform all of our users about a change in their application status immediately. Whether their resume was received or viewed, they will know it right away.' },
        { id: '3', title: 'One Resume Is Not Enough.', content: 'Many of you have more than one resume—because you are very “versatile”. On Kunvet, you can upload as many resumes as you want for the different kind of jobs you apply to, and we will keep them safe and sound for whenever you need them.' },
      ],
      model: 0,
      svgs: {
      },
      pngs: {
        phone1: phone1,
        phone2: phone2,
        phone3: phone3,
        person1: person1,
        person2: person2,
        person3: person3,
        profilePic: profilePic,
        woman: woman,
        nextJob: nextJob,
      },
      job: {
        address: '',
        addressList: [],
        latList: [],
        longList: [],
        latitude: null,
        longitude: null,
      },
      addressList: [],
      searchFocus: false,
      geocoder: null,
      autoCompleteService: null,
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
          path: '/jobs/search',
          query: {
            q: this.query,
          },
        };
      }
      return {
        path: '/jobs/search',
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
    onSuccess() {
      if (this.signupType === 'business') {
        this.$router.push('/myorg');
      } else {
        this.$router.push('/account');
      }
    },
    // For Scrollama
    stepEnterHandler({ element, direction, index }) {
      console.log({ element, direction, index });
      this.currStepId = index + 1;
    },
    // For Scrollama
    stepExitHandler({ element, direction, index }) {
      console.log({ element, direction, index });
      this.currStepId = index + 1;
    },
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
    setPlaces(places) {
      places.forEach(function(place) {
        if (!place.geometry) {
          this.job.addressValid = false;
          return;
        }
        this.job.addressValid = true;
        this.job.addressList.push(place.formatted_address);
        this.job.latList.push(place.geometry.location.lat());
        this.job.longList.push(place.geometry.location.lng());
      });
    },
    initGoogleMaps() {
      if (!this.autocomplete || !this.geocoder) {
        const input = this.$refs.addressField.$el.getElementsByTagName('input')[0];
        input.setAttribute('placeholder', '');
        this.autoCompleteService = new window.google.maps.places.AutocompleteService();
        this.geocoder = new window.google.maps.Geocoder();
      }
      if (this.job.address) {
        this.setLatLongs();
      }
    },
    onChangeAddressSearchInput(value) {
      if (this.autoCompleteService) {
        this.autoCompleteService.getPlacePredictions({ input: value }, (results, status) => {
          if (status === 'OK') {
            this.job.addressList = results;
          } else {
            this.job.addressList = [];
          }
        });
      }
    },
    onClickAddressDropdownItem(index) {
      const addressItem = this.job.addressList[index];
      if (this.geocoder && this.job.address !== this.prevAutocompleteAddress) {
        this.searchFocus = false;
        this.job.address = addressItem.structured_formatting.secondary_text;
        this.geocoder.geocode({ 'placeId': addressItem.place_id }, (results, status) => {
          if (status === 'OK' && results.length === 1) {
            this.job.latitude = results[0].geometry.location.lat();
            this.job.longitude = results[0].geometry.location.lng();
            this.job.addressValid = true;
            this.prevAutocompleteAddress = this.job.address;
            this.$refs.addressField.validate();
          } else {
            this.job.latitude = null;
            this.job.longitude = null;
            this.job.addressValid = false;
            this.$refs.addressField.validate();
          }
        });
      }
    },
    onClearAddressSearchInput() {
      this.job.latitude = null;
      this.job.longitude = null;
      this.job.addressValid = false;
      this.$refs.addressField.validate();
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
