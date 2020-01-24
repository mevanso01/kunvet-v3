<style lang="scss" scoped>
  // css for desktop
  @media (min-width: 1025px){
    .emp_page_content{
      margin-top: 124px;
    }
    .summary{
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      flex-wrap: nowrap;
    }
    .summary_text_div{
      width: 420px;
      vertical-align: middle;
      margin-right: 100px;
    }
    .summary_title{
      font-weight: 600;
      font-family: proxima-nova, sans-serif;
      font-size: 46px;
      line-height: 120%;
      letter-spacing: 0;
      color: #FF6969;
      margin-bottom: 0px;
    }
    .summary_text{
      padding-top: 20px;
      font-size: 20px;
      line-height: 180%;
      font-weight: 300;
      max-width: 440px;
      font-family: proxima-nova, sans-serif;
      letter-spacing: 0;
      color: black;
      margin-bottom: 0px;
    }
    .summary_btn{
      width: 200px;
      height: 68px !important;
      line-height: 68px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: #ff6969 !important;
      margin-top: 40px;
      font-family: proxima-nova, sans-serif;
      display: block !important;
      color: white !important;
      font-weight: 600;
    }
    .summary_btn_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -2px;
      color: #000000;
    }
    .summary_collage_students{
      width: 440px;
      height: 435px;
      align-items: center;
      margin-left: -2px;
    }
    .effective{
      max-width: 960px;
      margin: 0 auto;
    }
    .effective_img{
      width: 80px;
      margin-top: 120px;
      margin-left: calc((960px - 80px) / 2);
      margin-bottom: 20px;
    }
    .effective_img_btm{
      margin-top: -5px;
      width: 80px;
      margin-left: calc((960px - 80px) / 2);
      height:4px;
      background-color:black;
    }
    .effective_title{
      padding-top: 30px;
      line-height: 100%;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 40px;
      color: black;
      margin-bottom: 0px;
    }
    .effective_text{
      padding-top: 30px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      line-height: 150%;
      font-size: 24px;
      margin-bottom: 0px;
      color: black;
      margin-bottom: 0px;
    }
    .logo_style{
      width: 190px;
      height: 80px;
      margin-right: 60px;
    }
    .logo_first_row{
      padding-top: 30px;
    }
    .logo_second_row{
      padding-top: 60px;
    }
    .testimonials{
      margin-top: 120px;
      background: linear-gradient(to right, #FF5F6D 0%, #FFC371 170%);
      box-shadow: none;
    }
    .test_slide{
      width: 100%;
      margin-left: 0px;
    }
    .slide_info{
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }
    .test_title{
      line-height: 100%;
      width: 100%;
      max-width: 960px;
      font-weight: bold;
      padding-top: 80px;
      margin-left: 24px;
      font-family: proxima-nova, sans-serif;
      font-size: 34px;
      margin-bottom: 0px;
      color: white;
    }
    .test_text{
      padding-top: 40px;
      width: 644px;
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
    .test_undertext{
      font-style: italic;
      margin-top: 40px;
      margin-bottom: 84px;
      padding-right: 292px;
      padding-left: 24px;
      margin-left: auto;
      margin-right: auto;
      font-family: proxima-nova, sans-serif;
      font-size: 14px;
      line-height: 120%;
      font-weight: 300;
      color: white;
    }
    .bio{
      margin-top: 30px;
      width: 190px;
      height: 200px;
    }
    .bio_img{
      height: 60px;
      width: 60px;
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
      padding-top: 12px;
      font-weight: 300;
      color: white;
      font-family: proxima-nova, sans-serif;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .faq{
      max-width: 960px;
      margin: 0 auto;
    }
    .faq_img{
      height: 60px;
      width: 60px;
      margin-top: 120px;
      margin-left: calc((960px - 60px) / 2);
      margin-bottom: 20px;
    }
    .faq_img_btm{
      margin-top: -5px;
      width: 68px;
      margin-left: calc((960px - 68px) / 2);
      height:4px;
      background-color:black;
    }
    .faq_title{
      padding-top: 30px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 40px;
      line-height: 100%;
      font-weight: 600;
      letter-spacing: 0;
      color: black;
      margin-bottom: 0px;
    }
    .faq_text{
      padding-top: 30px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 24px;
      line-height: 150%;
      font-weight: 300;
      letter-spacing: 0;
      margin-bottom: 0px;
      color: black;
    }
    .faq_box{
      margin-top: 30px;
      width: 960px;
      padding-left: 60px;
      display: flex;
      flex-wrap: nowrap;
    }
    .faq_questions{
      width: 432px;
      padding-right: 36px;
    }
    .faq_answers{
      width: 400px;
      margin-right: 54px;
    }
    .faq_question_div{
      height: 62px;
      width: 400px;
      margin-top: 14px;
      box-shadow: #cccccc 0px 1px 1px;
      border-radius: 2px;
      background-color: #f7f7f7;
      line-height: 100%;
      padding-top: 22px;
      padding-left: 24px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      font-family: proxima-nova, sans-serif;
    }
    .faq_question_div_sel{
      height: 62px;
      width: 400px;
      margin-top: 14px;
      box-shadow: #cccccc 0px 1px 1px;
      border-radius: 2px;
      background-color: #f7f7f7;
      line-height: 100%;
      padding-top: 22px;
      padding-left: 24px;
      font-size: 16px;
      font-weight: bold;
      border: 1px solid black;
      cursor: pointer;
      font-family: proxima-nova, sans-serif;
    }
    .faq_answers_div{
      text-align: center;
      background-color: #f7f7f7;
      width: 100%;
      height: 442px;
      border: 1px solid black;
      border-radius: 2px;
      box-shadow: #cccccc 0px 1px 1px;
    }
    .faq_answers_title{
      padding-top: 24px;
      padding-left: 24px;
      padding-right: 24px;
      text-align: left;
      width: 100%;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 0px;
      line-height: 130%;
      font-family: proxima-nova, sans-serif;
    }
    .faq_answers_text{
      text-align: left;
      padding-top: 20px;
      padding-left: 24px;
      padding-right: 24px;
      margin-bottom: 0px;
      width: 100%;
      color: #000;
      font-size: 16px;
      line-height: 150%;
      font-family: proxima-nova, sans-serif;
    }
    .how_works{
      width: 100%;
      background-color: #f4f4f4;
      margin-top: 120px;
      font-size: 0;
    }
    .coffee_money{
      max-width: 960px;
      margin: 0 auto;
    }
    .coffee_title{
      width: 100%;
      padding-top: 114px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 40px;
      line-height: 100%;
      font-weight: 600;
      color: black;
      margin-bottom: 0px;
    }
    .hands{
      width: 100%;
      margin-top: 30px;
      display: flex;
      flex-wrap: nowrap;
      text-align: center;
    }
    .hands_img{
      margin-left: -20px;
    }
    .one_two_three_line{
      width: 770px;
      margin-top: 80px;
    }
    .hand_header_1{
      width: 220px;
      line-height: 100%;
      font-size: 24px;
      font-weight: bold;
      color: black;
      margin-bottom: 10px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_header_2{
      width: 280px;
      font-size: 24px;
      line-height: 100%;
      font-weight: bold;
      color: black;
      margin-bottom: 10px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_header_3{
      width: 220px;
      font-size: 24px;
      line-height: 100%;
      font-weight: bold;
      color: black;
      margin-bottom: 10px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_text_1{
      text-align: center;
      color: black;
      font-size: 16px;
      width: 220px;
      height: 96px;
      margin-bottom: 20px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_text_2{
      text-align: center;
      color: black;
      font-size: 16px;
      height: 96px;
      width: 280px;
      margin-bottom: 20px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_text_3{
      text-align: center;
      color: black;
      font-size: 16px;
      width: 220px;
      height: 96px;
      margin-bottom: 20px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_img_1{
      height: 761px;
      margin-left: 60px;
    }
    .hand_img_2{
      height: 761px;
      margin-left: -30px;
    }
    .hand_img_3{
      height: 761px;
      margin-left: -76px;
    }
    .waste{
      max-width: 960px;
      margin: 0 auto;
    }
    .warning_img{
      width: 66px;
      height: 60px;
      margin-top: 120px;
      margin-left: calc((960px - 66px) / 2);
      margin-bottom: 20px;
    }
    .warning_img_btm{
      margin-top: -5px;
      width: 70px;
      margin-left: calc((960px - 70px) / 2);
      height:4px;
      background-color:black;
    }
    .warning_title{
      font-size: 40px;
      line-height: 100%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 30px;
      text-align: center;
      margin-bottom: 0px;
    }
    .warning_text{
      font-size: 24px;
      color: black;
      font-family: proxima-nova, sans-serif;
      padding-top: 30px;
      letter-spacing: 0;
      font-weight: 300;
      text-align: center;
      line-height: 150%;
      margin-bottom: 0px;
    }
    .grey_warning{
      font-size: 16px;
      color: grey;
      font-family: proxima-nova, sans-serif;
      padding-top: 40px;
      margin-bottom: 0px;
      text-align: center;
    }
    .refund{
      max-width: 912px;
      margin: 0 auto;
      margin-top: 120px;
      background-image: linear-gradient(to right, #7F7FD5 0%, #86A8E7 51%, #8AB4FF 100%);
      padding: 0;
    }
    .refund_title{
      padding-top: 80px;
      font-size: 34px;
      line-height: 100%;
      font-weight: 600;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .refund_text{
      padding-top: 30px;
      max-width: 704px;
      font-size: 22px;
      line-height: 150%;
      font-weight: 300;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      margin: 0 auto;
      text-align: center;
    }
    .refund_btn{
      width: 200px;
      height: 68px !important;
      line-height: 68px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      margin-left: calc( 50% - 100px);
      color: #6478d5 !important;
      font-weight: 600;
    }
    .refund_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 6px;
      padding-bottom: 80px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
    }
    .versus{
      max-width: 960px;
      margin: 0 auto;
    }
    .versus_img{
      width: 68px;
      height: 60px;
      margin-top: 120px;
      margin-left: calc((960px - 68px) / 2);
      margin-bottom: 20px;
    }
    .versus_img_btm{
      margin-top: -5px;
      width: 78px;
      margin-left: calc((960px - 78px) / 2);
      height:4px;
      background-color:black;
    }
    .versus_title{
      font-size: 40px;
      line-height: 100%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 30px;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_text{
      font-size: 24px;
      line-height: 150%;
      font-weight: 300;
      padding-top: 30px;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_subtitle{
      font-size: 20px;
      margin-bottom: 0px;
      padding-top: 70px;
      padding-bottom: 30px;
      line-height: 100%;
      font-weight: 600;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      width: 960px;
    }
    .compare_div{
      display: flex;
      flex-wrap: wrap;
    }
    .competitor_div{
      width: calc( 50% - 2px);
      margin-right: 4px;
      background-color: #dcdcdc;
      padding: 20px 24px;
    }
    .kunvet_div{
      width: calc( 50% - 2px);
      background-color: #ff6969;
      padding: 20px 24px;
    }
    .compare_header{
      font-size: 14PX;
      line-height: 100%;
      font-weight: 600;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
      padding-bottom: 4px;
    }
    .compare_text{
      font-size: 16PX;
      line-height: 150%;
      font-weight: 300;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
    }
    .limited{
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }
    .limited_main_div{
      max-width: 700px;
      margin: 120px auto 0;
      margin-bottom: 120px;
      background-image: url('~@/assets/hire/discount-background.png');
      background-size: 100% 100%;
    }
    .limited_title{
      font-size: 34px;
      line-height: 100%;
      font-weight: 600;
      color: #ffffff;
      font-family: proxima-nova, sans-serif;
      padding-top: 80px;
      margin-bottom: 0px;
      text-align: center;
    }
    .limited_text{
      font-size: 22px;
      max-width: 520px;
      margin: 0 auto;
      color: #ffffff;
      font-weight: 300;
      line-height: 150%;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      padding-top: 30px;
      text-align: center;
    }
    .limited_btn{
      width: 200px;
      height: 68px !important;
      line-height: 68px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      color: #ff9090 !important;
      font-weight: 600;
    }
    .limited_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 6px;
      padding-bottom: 80px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
    }
  }
  // css for ipad size
  @media (min-width: 801px) and (max-width: 1024px) {
    .medium_hide{
      display: none !important;
    }
    .emp_page_content{
      margin-top: 124px;
    }
    .summary{
      max-width: 1008px;
      padding: 0 24px;
      margin: 0 auto;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
    .summary_text_div{
      width: 46%;
      max-height: 395.2px;
      margin-right: 8%;
    }
    .summary_title{
      font-weight: 600;
      font-family: proxima-nova, sans-serif;
      font-size: 36px;
      line-height: 120%;
      letter-spacing: 0;
      color: #FF6969;
      margin-bottom: 0px;
    }
    .summary_text{
      padding-top: 20px;
      font-size: 18px;
      line-height: 180%;
      font-weight: 300;
      font-family: proxima-nova, sans-serif;
      letter-spacing: 0;
      color: black;
      margin-bottom: 0px;
    }
    .summary_btn{
      width: 200px;
      height: 68px !important;
      line-height: 68px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: #ff6969 !important;
      margin-top: 30px;
      font-family: proxima-nova, sans-serif;
      display: block !important;
      color: white !important;
      font-weight: 600;
    }
    .summary_btn_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -2px;
      color: #000000;
    }
    .summary_collage_students{
      width: 46%;
      vertical-align: middle;
      margin-left: -2px;
    }
    .effective{
      max-width: 1008px;
      padding: 0 24px;
      text-align: center;
      margin: 0 auto;
    }
    .effective_img{
      height: 50px;
      margin: 120px auto 18px;
    }
    .effective_img_btm{
      margin-top: -5px;
      margin: -5px auto 0px;
      width: 62px;
      height: 3px;
      background-color:black;
    }
    .effective_title{
      padding-top: 26px;
      line-height: 100%;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 36px;
      color: black;
      margin-bottom: 0px;
    }
    .effective_text{
      padding-top: 20px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      line-height: 150%;
      font-size: 24px;
      margin-bottom: 0px;
      color: black;
      margin-bottom: 0px;
    }
    .logo_style{
      width: 150px;
      height: 70px;
      margin-right: 42px;
    }
    .logo_first_row{
      padding-top: 20px;
    }
    .logo_second_row{
      padding-top: 50px;
    }
    .testimonials{
      margin-top: 120px;
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
      line-height: 100%;
      width: 100%;
      font-weight: bold;
      padding-top: 80px;
      margin-left: 24px;
      font-family: proxima-nova, sans-serif;
      font-size: 32px;
      color: white;
      margin-bottom: 0px;
    }
    .test_text{
      padding-top: 30px;
      max-width: 802px;
      width: 59.9%;
      font-family: proxima-nova, sans-serif;
      font-size: 20px;
      color: white;
      line-height: 150%;
      margin-right: 86px;
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
    .test_undertext{
      max-width: 802px;
      width: 59.9%;
      font-style: italic;
      margin-top: 40px;
      margin-bottom: 40px;
      margin-left: 24px;
      font-family: proxima-nova, sans-serif;
      font-size: 14px;
      line-height: 120%;
      font-weight: 300;
      color: white;
    }
    .bio{
      margin-top: 30px;
      width: 184px;
      height: 200px;
    }
    .bio_img{
      height: 60px;
      width: 60px;
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
      padding-top: 12px;
      font-weight: 300;
      color: white;
      font-family: proxima-nova, sans-serif;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .faq{
      max-width: 1008px;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .faq_img{
      height: 50px;
      margin: 120px auto 18px;

    }
    .faq_img_btm{
      margin-top: -5px;
      margin: -5px auto 0px;
      width: 62px;
      height: 3px;
      background-color:black;
    }
    .faq_title{
      padding-top: 26px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 36px;
      line-height: 100%;
      font-weight: 600;
      letter-spacing: 0;
      color: black;
      margin-bottom: 0px;
    }
    .faq_text{
      padding-top: 20px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 24px;
      line-height: 150%;
      font-weight: 300;
      letter-spacing: 0;
      margin-bottom: 0px;
      color: black;
    }
    .faq_box{
      display: flex;
      max-width: 753px;
      margin: 20px auto 0px;
      flex-wrap: nowrap;
    }
    .faq_questions{
      width: 360px;
      margin-right: 30px;
    }
    .faq_answers{
      width: 363px;
    }
    .faq_question_div{
      height: 62px;
      width: 360px;
      margin-top: 14px;
      box-shadow: #cccccc 0px 1px 1px;
      border-radius: 2px;
      background-color: #f7f7f7;
      line-height: 100%;
      padding-top: 22px;
      padding-left: 24px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      font-family: proxima-nova, sans-serif;
      text-align: left;
    }
    .faq_question_div_sel{
      height: 62px;
      width: 360px;
      margin-top: 14px;
      box-shadow: #cccccc 0px 1px 1px;
      border-radius: 2px;
      background-color: #f7f7f7;
      line-height: 100%;
      padding-top: 22px;
      padding-left: 24px;
      font-size: 16px;
      font-weight: bold;
      border: 1px solid black;
      cursor: pointer;
      font-family: proxima-nova, sans-serif;
      text-align: left;
    }
    .faq_answers_div{
      text-align: center;
      background-color: #f7f7f7;
      width: 100%;
      height: 442px;
      border: 1px solid black;
      border-radius: 2px;
      box-shadow: #cccccc 0px 1px 1px;
    }
    .faq_answers_title{
      padding: 24px 24px 0px;
      text-align: left;
      width: 100%;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 0px;
      line-height: 130%;
      font-family: proxima-nova, sans-serif;
    }
    .faq_answers_text{
      text-align: left;
      padding: 20px 24px 0px;
      margin-bottom: 0px;
      width: 100%;
      color: #000;
      font-size: 16px;
      line-height: 150%;
      font-family: proxima-nova, sans-serif;
    }
    .how_works{
      width: 100%;
      background-color: #f4f4f4;
      margin-top: 120px;
      font-size: 0;
    }
    .coffee_money{
      max-width: 1008px;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .coffee_title{
      width: 100%;
      padding-top: 97px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 36px;
      line-height: 100%;
      font-weight: 600;
      color: black;
      margin-bottom: 0px;
    }
    .hands{
      width: 753px;
      margin: 30px auto 0px;
      display: flex;
      flex-wrap: nowrap;
      text-align: center;
    }
    .hands_img{
      max-height: 612px;
      margin-left: calc((100% - 784px) / 2);
    }
    .one_two_three_line{
      max-width: 601px;
      margin-top: 70px;
    }
    .hand_header_1{
      width: 182px;
      line-height: 100%;
      font-size: 24px;
      font-weight: bold;
      color: black;
      margin-bottom: 10px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_header_2{
      width: 280px;
      font-size: 24px;
      line-height: 100%;
      font-weight: bold;
      color: black;
      margin-bottom: 10px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_header_3{
      width: 182px;
      font-size: 24px;
      line-height: 100%;
      font-weight: bold;
      color: black;
      margin-bottom: 10px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_text_1{
      text-align: center;
      color: black;
      font-size: 16px;
      width: 182px;
      height: 92px;
      margin-bottom: 20px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_text_2{
      text-align: center;
      color: black;
      font-size: 16px;
      height: 92px;
      width: 280px;
      margin-bottom: 20px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_text_3{
      text-align: center;
      color: black;
      font-size: 16px;
      width: 182px;
      height: 92px;
      margin-bottom: 20px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_img_1{
      height: 761px;
      margin-left: 60px;
    }
    .hand_img_2{
      height: 761px;
      margin-left: -30px;
    }
    .hand_img_3{
      height: 761px;
      margin-left: -76px;
    }
    .waste{
      max-width: 1008px;
      padding: 0 24px;
      text-align: center;
      margin: 0 auto;
    }
    .warning_img{
      height: 50px;
      margin: 120px auto 18px;
    }
    .warning_img_btm{
      margin-top: -5px;
      margin: -5px auto 0px;
      width: 62px;
      height: 3px;
      background-color:black;
    }
    .warning_title{
      font-size: 36px;
      line-height: 100%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 26px;
      text-align: center;
      margin-bottom: 0px;
    }
    .warning_text{
      font-size: 24px;
      color: black;
      font-family: proxima-nova, sans-serif;
      padding-top: 20px;
      letter-spacing: 0;
      font-weight: 300;
      text-align: center;
      line-height: 150%;
      margin-bottom: 0px;
    }
    .refund{
      max-width: 1008px;
      padding: 0 24px;
      text-align: center;
      margin: 120px auto 0px;
    }
    .refund_main_div{
      background-image: linear-gradient(to right, #7F7FD5 0%, #86A8E7 51%, #8AB4FF 100%);
    }
    .refund_title{
      padding-top: 80px;
      font-size: 32px;
      line-height: 100%;
      font-weight: 600;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .refund_text{
      padding-top: 26px;
      max-width: 704px;
      font-size: 22px;
      line-height: 150%;
      font-weight: 300;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      margin: 0 auto;
      text-align: center;
    }
    .refund_btn{
      width: 200px;
      height: 68px !important;
      line-height: 68px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      color: #6478d5 !important;
      font-weight: 600;
    }
    .refund_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 6px;
      padding-bottom: 80px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
    }
    .versus{
      max-width: 1008px;
      padding: 0 24px;
      text-align: center;
      margin: 0 auto;
    }
    .versus_img{
      height: 50px;
      margin: 120px auto 18px;
    }
    .versus_img_btm{
      margin-top: -5px;
      margin: -5px auto 0px;
      width: 62px;
      height: 3px;
      background-color:black;
    }
    .versus_title{
      font-size: 36px;
      line-height: 100%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 26px;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_text{
      font-size: 24px;
      line-height: 150%;
      font-weight: 300;
      padding-top: 20px;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_subtitle{
      font-size: 22px;
      margin-bottom: 0px;
      padding-top: 60px;
      padding-bottom: 20px;
      line-height: 100%;
      font-weight: 600;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      width: 100%;
    }
    .compare_div{
      display: flex;
      flex-wrap: wrap;
      width: 737px;
      margin: 0 auto;
    }
    .competitor_div{
      width: calc( 50% - 2px);
      margin-right: 4px;
      background-color: #dcdcdc;
      padding: 16px 20px;
      text-align: left;
    }
    .kunvet_div{
      width: calc( 50% - 2px);
      background-color: #ff6969;
      padding: 16px 20px;
      text-align: left;
    }
    .compare_header{
      font-size: 14PX;
      line-height: 100%;
      font-weight: 600;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
      padding-bottom: 4px;
    }
    .compare_text{
      font-size: 16PX;
      line-height: 150%;
      font-weight: 300;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
    }
    .limited{
      max-width: 1008px;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .limited_main_div{
      max-width: 700px;
      margin: 120px auto;
      background-image: url('~@/assets/hire/discount-background.png');
      background-size: 100% 100%;
    }
    .limited_title{
      font-size: 32px;
      line-height: 100%;
      font-weight: 600;
      color: #ffffff;
      font-family: proxima-nova, sans-serif;
      padding-top: 80px;
      margin-bottom: 0px;
      text-align: center;
    }
    .limited_text{
      font-size: 22px;
      max-width: 520px;
      margin: 0 auto;
      color: #ffffff;
      font-weight: 300;
      line-height: 150%;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      padding-top: 26px;
      text-align: center;
    }
    .limited_btn{
      width: 200px;
      height: 68px !important;
      line-height: 68px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      color: #ff9090 !important;
      font-weight: 600;
    }
    .limited_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      padding-bottom: 80px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
    }
  }
  // css for mobile size
  @media (min-width: 601px) and (max-width: 800px) {
    .mobile_hide{
      display: none !important;
    }
    .emp_page_content{
      margin-top: 144px;
    }
    .summary{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .summary_title{
      padding-top: 30px;
      font-weight: 600;
      width: 552px;
      margin: 0 auto;
      letter-spacing: 0;
      line-height: 120%;
      font-family: proxima-nova, sans-serif;
      font-size: 40px;
      color: #FF6969;
      margin-bottom: 0px;
    }
    .summary_text{
      font-size: 20px;
      max-width: 552px;
      margin: 0 auto;
      line-height: 180%;
      font-weight: 300;
      font-family: proxima-nova, sans-serif;
      padding-top: 20px;
      color: black;
      margin-bottom: 0px;
    }
    .summary_btn{
      width: 200px;
      height: 68px !important;
      line-height: 68px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: #ff6969 !important;
      margin-top: 40px;
      font-family: proxima-nova, sans-serif;
      color: white !important;
      font-weight: 600;
    }
    .summary_btn_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #000000;
    }
    .summary_collage_students{
      max-width: 552px;
    }
    .effective{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .effective_img{
      height: 44px;
      margin: 120px auto 16px;
    }
    .effective_img_btm{
      margin: -5px auto 0px;
      width: 54px;
      height: 2.5px;
      background-color:black;
    }
    .effective_title{
      padding-top: 26px;
      line-height: 100%;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 30px;
      color: black;
      margin-bottom: 0px;
    }
    .effective_text{
      padding-top: 20px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      line-height: 150%;
      font-size: 22px;
      margin-bottom: 0px;
      color: black;
      margin-bottom: 0px;
    }
    .logo_style{
      width: 120px;
      margin-right: 24px;
    }
    .logo_first_row{
      padding-top: 20px;
      display: flex;
      flex-wrap: nowrap;
      max-width: 552px;
      margin: 0 auto;
    }
    .logo_second_row{
      padding-top: 30px;
      display: flex;
      flex-wrap: nowrap;
      max-width: 552px;
      margin: 0 auto;
    }
    .testimonials{
      margin-top: 120px;
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
      line-height: 100%;
      width: 100%;
      font-weight: bold;
      padding-top: 60px;
      margin-left: 24px;
      font-family: proxima-nova, sans-serif;
      font-size: 26px;
      color: white;
      margin-bottom: 0px;
    }
    .test_text{
      padding-top: 30px;
      max-width: 100%;
      width: calc(100% - 25px);
      font-family: proxima-nova, sans-serif;
      font-size: 18px;
      color: white;
      line-height: 150%;
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
    .test_undertext{
      max-width: 100%;
      width: calc(100% - 24px);
      padding-left: 25px;
      font-style: italic;
      margin-top: 30px;
      margin-bottom: 40px;
      font-family: proxima-nova, sans-serif;
      font-size: 14px;
      line-height: 120%;
      font-weight: 300;
      color: white;
    }
    .bio{
      margin-top: 30px;
      padding-left: 25px;
      width: 100%;
      display: flex;
      align-content: flex-end;
    }
    .bio_img{
      height: 60px;
      width: 60px;
      margin-top: auto;
    }
    .bio_text_div{
      padding-left: 20px;
      height: auto;
      margin-top: auto;
      vertical-align: bottom;
    }
    .bio_header{
      padding-top: 0px;
      font-size: 14px;
      color: white;
      font-family: proxima-nova, sans-serif;
      font-weight: 600;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .bio_text{
      font-size: 14px;
      padding-top: 8px;
      font-weight: 300;
      color: white;
      font-family: proxima-nova, sans-serif;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .faq{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .faq_img{
      height: 44px;
      margin: 120px auto 16px;
    }
    .faq_img_btm{
      margin: -5px auto 0px;
      width: 54px;
      height: 2.5px;
      background-color:black;
    }
    .faq_title{
      padding-top: 26px;
      line-height: 100%;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 30px;
      color: black;
      margin-bottom: 0px;
    }
    .faq_text{
      padding-top: 20px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      line-height: 150%;
      font-size: 22px;
      margin-bottom: 0px;
      color: black;
      margin-bottom: 0px;
    }
    .faq_question_div{
      width: 460px;
      height: 62px;
      margin: 10px auto 0px;
      box-shadow: #cccccc 0px 1px 1px;
      border-radius: 2px;
      background-color: #f7f7f7;
      padding: 23px 32px 0px;
      cursor: pointer;
      text-align: left;
      align-items: center;
    }
    .faq_question_div_sel{
      width: 460px;
      margin: 10px auto 0px;
      box-shadow: #cccccc 0px 1px 1px;
      border: 1px solid black;
      border-radius: 2px;
      background-color: #f7f7f7;
      padding: 32px 32px 40px;
      cursor: pointer;
      text-align: left;
    }
    .faq_answer_title{
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      font-size: 16px;
      line-height: 100%;
      font-weight: 600;
      float: left;
    }
    .faq_answer_title_sel{
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      font-size: 28px;
      line-height: 130%;
      letter-spacing: 0;
      font-weight: 600;
    }
    .faq_plus{
      width: 10px;
      float: right;
    }
    .faq_answers_text{
      padding-top: 20px;
      padding-right: 0px;
      margin-bottom: 0px;
      font-size: 16px;
      font-weight: normal;
      font-family: proxima-nova, sans-serif;
    }
    .hands{
      max-width: 100%;
      margin: 120px auto 0px;
      text-align: center;
      background-color: #f4f4f4;
    }
    .coffee_title{
      padding-top: 88.5px;
      padding-bottom: 70px;
      margin-bottom: 0px;
      font-weight: 600;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 30px;
      color: black;
    }
    .nums{
      height: 34px;
      width: 34px;
      z-index: 100;
    }
    .num_bar_container{
      height: 34px;
    }
    .blackbar_p1{
      height: 2px;
      background-color: black;
      width: 50%;
      margin-left: 50%;
      margin-top: -24px;
      z-index: 1;
    }
    .blackbar_p2{
      height: 2px;
      background-color: black;
      width: 100%;
      margin-top: -24px;
      z-index: 1;
    }
    .blackbar_p3{
      height: 2px;
      background-color: black;
      width: 50%;
      margin-top: -24px;
      z-index: 1;
    }
    .hand_header{
      font-size: 24px;
      padding-top: 30px;
      line-height: 100%;
      letter-spacing: 0;
      font-weight: 600;
      color: black;
      margin-bottom: 0px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_text{
      color: black;
      font-size: 16px;
      max-width: 552px;
      margin: 10px auto 20px;
      line-height: 150%;
      font-family: proxima-nova, sans-serif;
    }
    .single_hand{
      max-height: 612px;
    }
    .waste{
      max-width: 100%;
      padding: 0 24px;
      text-align: center;
      margin: 0 auto;
    }
    .warning_img{
      height: 44px;
      margin: 120px auto 16px;
    }
    .warning_img_btm{
      margin: -5px auto 0px;
      width: 54px;
      height: 2.5px;
      background-color:black;
    }
    .warning_title{
      font-size: 30px;
      line-height: 100%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 26px;
      text-align: center;
      margin-bottom: 0px;
    }
    .warning_text{
      font-size: 22px;
      color: black;
      font-family: proxima-nova, sans-serif;
      padding-top: 20px;
      letter-spacing: 0;
      font-weight: 300;
      text-align: center;
      line-height: 150%;
      margin-bottom: 0px;
    }
    .refund{
      max-width: 100% ;
      padding: 0 24px;
      text-align: center;
      margin: 120px auto 0px;
    }
    .refund_main_div{
      background-image: linear-gradient(to right, #7F7FD5 0%, #86A8E7 51%, #8AB4FF 100%);
    }
    .refund_title{
      padding-top: 60px;
      font-size: 28px;
      line-height: 100%;
      font-weight: 600;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .refund_text{
      padding: 20px 24px 0px;
      font-size: 20px;
      line-height: 150%;
      font-weight: 300;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      margin: 0 auto;
      text-align: center;
    }
    .refund_btn{
      width: 170px;
      height: 62px !important;
      line-height: 62px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      color: #6478d5 !important;
      font-weight: 600;
    }
    .refund_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      padding-bottom: 60px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
    }
    .versus{
      max-width: 100%;
      padding: 0 24px;
      text-align: center;
      margin: 0 auto;
    }
    .versus_img{
      height: 44px;
      margin: 120px auto 16px;
    }
    .versus_img_btm{
      margin-top: -5px;
      margin: -5px auto 0px;
      width: 54px;
      height: 2.5px;
      background-color:black;
    }
    .versus_title{
      font-size: 30px;
      line-height: 100%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 26px;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_text{
      font-size: 22px;
      line-height: 150%;
      font-weight: 300;
      padding-top: 20px;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_subtitle{
      font-size: 20px;
      margin-bottom: 0px;
      padding-top: 50px;
      padding-bottom: 20px;
      line-height: 100%;
      font-weight: 600;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      width: 100%;
    }
    .compare_div{
      width: 100%;
    }
    .competitor_div{
      width: 460px;
      background-color: #dcdcdc;
      padding: 16px 20px;
      text-align: left;
      margin: 0px auto 4px;
    }
    .kunvet_div{
      width: 460px;
      background-color: #ff6969;
      padding: 16px 20px;
      text-align: left;
      margin: 0 auto;
    }
    .compare_header{
      font-size: 14PX;
      line-height: 100%;
      font-weight: 600;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
      padding-bottom: 4px;
    }
    .compare_text{
      font-size: 16PX;
      line-height: 150%;
      font-weight: 300;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
    }
    .limited{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .limited_main_div{
      max-width: 460px;
      margin: 120px auto 0;
      background-image: url('~@/assets/hire/discount-background.png');
      background-size: 100% 100%;
    }
    .limited_title{
      font-size: 26px;
      line-height: 100%;
      font-weight: 600;
      color: #ffffff;
      font-family: proxima-nova, sans-serif;
      padding: 60px 34px 0px;
      margin-bottom: 0px;
      text-align: center;
    }
    .limited_text{
      font-size: 18px;
      margin: 0 auto;
      color: #ffffff;
      font-weight: 300;
      line-height: 150%;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      padding: 20px 24px 0px;
      text-align: center;
    }
    .limited_btn{
      width: 170px;
      height: 62px !important;
      line-height: 62px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      color: #ff9090 !important;
      font-weight: 600;
    }
    .limited_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      padding-bottom: 60px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
    }
  }

  // css for small size
  @media (min-width: 451px) and (max-width: 600px) {
    .small_hide{
      display: none !important;
    }
    .emp_page_content{
      margin-top: 120px;
    }
    .summary{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
      font-size: 0;
    }
    .summary_title{
      padding-top: 30px;
      font-weight: 600;
      max-width: 552px;
      margin: 0 auto;
      letter-spacing: 0;
      line-height: 120%;
      font-family: proxima-nova, sans-serif;
      font-size: 36px;
      color: #FF6969;
      margin-bottom: 0px;
    }
    .summary_text{
      font-size: 20px;
      max-width: 552px;
      margin: 0 auto;
      line-height: 180%;
      font-weight: 300;
      font-family: proxima-nova, sans-serif;
      padding-top: 20px;
      color: black;
      margin-bottom: 0px;
    }
    .summary_btn{
      width: 200px;
      height: 68px !important;
      line-height: 68px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: #ff6969 !important;
      margin-top: 40px;
      font-family: proxima-nova, sans-serif;
      color: white !important;
      font-weight: 600;
    }
    .summary_btn_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #000000;
    }
    .summary_collage_students{
      width: 100%;
    }
    .effective{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .effective_img{
      height: 40px;
      margin: 100px auto 14px;
    }
    .effective_img_btm{
      margin: -5px auto 0px;
      width: 48px;
      height: 2px;
      background-color:black;
    }
    .effective_title{
      padding-top: 26px;
      line-height: 120%;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 28px;
      color: black;
      margin-bottom: 0px;
    }
    .effective_text{
      padding-top: 20px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      line-height: 150%;
      font-size: 20px;
      margin-bottom: 0px;
      color: black;
      margin-bottom: 0px;
    }
    .logo_style{
      width: 126px;
      margin-right: 50px;
      margin-top: 30px;
    }
    .logos_row{
      padding-top: 20px;
      display: flex;
      flex-wrap: wrap;
      max-width: 302px;
      margin: 0 auto;
    }
    .testimonials{
      margin-top: 100px;
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
      font-weight: bold;
      padding-top: 60px;
      margin-left: 24px;
      font-family: proxima-nova, sans-serif;
      font-size: 26px;
      color: white;
      margin-bottom: 0px;
    }
    .test_text{
      padding-top: 30px;
      max-width: 100%;
      width: calc(100% - 25px);
      font-family: proxima-nova, sans-serif;
      font-size: 18px;
      color: white;
      line-height: 150%;
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
    .test_undertext{
      max-width: 100%;
      width: calc(100% - 24px);
      padding-left: 25px;
      font-style: italic;
      margin-top: 30px;
      margin-bottom: 40px;
      font-family: proxima-nova, sans-serif;
      font-size: 14px;
      line-height: 120%;
      font-weight: 300;
      color: white;
    }
    .bio{
      margin-top: 30px;
      padding-left: 25px;
      width: 100%;
      display: flex;
      align-content: flex-end;
    }
    .bio_img{
      height: 60px;
      width: 60px;
      margin-top: auto;
    }
    .bio_text_div{
      padding-left: 20px;
      height: auto;
      margin-top: auto;
      vertical-align: bottom;
    }
    .bio_header{
      padding-top: 0px;
      font-size: 14px;
      color: white;
      font-family: proxima-nova, sans-serif;
      font-weight: 600;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .bio_text{
      font-size: 14px;
      padding-top: 8px;
      font-weight: 300;
      color: white;
      font-family: proxima-nova, sans-serif;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .faq{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .faq_img{
      height: 40px;
      margin: 100px auto 14px;
    }
    .faq_img_btm{
      margin: -5px auto 0px;
      width: 48px;
      height: 2px;
      background-color:black;
    }
    .faq_title{
      padding-top: 26px;
      line-height: 120%;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 28px;
      color: black;
      margin-bottom: 0px;
    }
    .faq_text{
      padding-top: 20px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      line-height: 150%;
      font-size: 20px;
      margin-bottom: 0px;
      color: black;
      margin-bottom: 0px;
    }
    .faq_question_div{
      width: 100%;
      max-width: 460px;
      height: 62px;
      margin: 10px auto 0px;
      box-shadow: #cccccc 0px 1px 1px;
      border-radius: 2px;
      background-color: #f7f7f7;
      padding: 23px 24px 0px;
      cursor: pointer;
      text-align: left;
      align-items: center;
    }
    .faq_question_div_sel{
      width: 100%;
      max-width: 460px;
      margin: 10px auto 0px;
      box-shadow: #cccccc 0px 1px 1px;
      border: 1px solid black;
      border-radius: 2px;
      background-color: #f7f7f7;
      padding: 24px 24px 32px;
      cursor: pointer;
      text-align: left;
    }
    .faq_answer_title{
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      font-size: 16px;
      line-height: 100%;
      font-weight: 600;
      float: left;
    }
    .faq_answer_title_sel{
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      font-size: 28px;
      line-height: 130%;
      letter-spacing: 0;
      font-weight: 600;
    }
    .faq_plus{
      width: 10px;
      float: right;
    }
    .faq_answers_text{
      padding-top: 20px;
      padding-right: 0px;
      margin-bottom: 0px;
      font-size: 16px;
      font-weight: normal;
      font-family: proxima-nova, sans-serif;
    }
    .hands{
      max-width: 100%;
      margin: 100px auto 0px;
      text-align: center;
      background-color: #f4f4f4;
    }
    .coffee_title{
      padding-top: 82px;
      padding-bottom: 60px;
      margin-bottom: 0px;
      font-weight: 600;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 28px;
      color: black;
    }
    .nums{
      height: 34px;
      width: 34px;
      z-index: 100;
    }
    .num_bar_container{
      height: 34px;
    }
    .blackbar_p1{
      height: 2px;
      background-color: black;
      width: 50%;
      margin-left: 50%;
      margin-top: -24px;
      z-index: 1;
    }
    .blackbar_p2{
      height: 2px;
      background-color: black;
      width: 100%;
      margin-top: -24px;
      z-index: 1;
    }
    .blackbar_p3{
      height: 2px;
      background-color: black;
      width: 50%;
      margin-top: -24px;
      z-index: 1;
    }
    .hand_header{
      font-size: 24px;
      padding-top: 30px;
      line-height: 100%;
      letter-spacing: 0;
      font-weight: 600;
      color: black;
      margin-bottom: 0px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_text{
      color: black;
      font-size: 16px;
      width: 100%;
      padding: 0 24px;
      margin: 10px auto 20px;
      line-height: 150%;
      font-family: proxima-nova, sans-serif;
    }
    .single_hand{
      max-height: 612px;
    }
    .waste{
      max-width: 100%;
      padding: 0 24px;
      text-align: center;
      margin: 0 auto;
    }
    .warning_img{
      height: 40px;
      margin: 100px auto 14px;
    }
    .warning_img_btm{
      margin: -5px auto 0px;
      width: 48px;
      height: 2px;
      background-color:black;
    }
    .warning_title{
      font-size: 28px;
      line-height: 120%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 26px;
      text-align: center;
      margin-bottom: 0px;
    }
    .warning_text{
      font-size: 20px;
      color: black;
      font-family: proxima-nova, sans-serif;
      padding-top: 20px;
      letter-spacing: 0;
      font-weight: 300;
      text-align: center;
      line-height: 150%;
      margin-bottom: 0px;
    }
    .refund{
      max-width: 100% ;
      padding: 0 24px;
      text-align: center;
      margin: 100px auto 0px;
    }
    .refund_main_div{
      background-image: linear-gradient(to right, #7F7FD5 0%, #86A8E7 51%, #8AB4FF 100%);
    }
    .refund_title{
      padding: 60px 24px 0px;
      font-size: 26px;
      line-height: 120%;
      font-weight: 600;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .refund_text{
      padding: 20px 24px 0px;
      font-size: 18px;
      line-height: 150%;
      font-weight: 300;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      margin: 0 auto;
      text-align: center;
    }
    .refund_btn{
      width: 170px;
      height: 62px !important;
      line-height: 62px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      color: #6478d5 !important;
      font-weight: 600;
    }
    .refund_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      padding-bottom: 60px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
    }
    .versus{
      max-width: 100%;
      padding: 0 24px;
      text-align: center;
      margin: 0 auto;
    }
    .versus_img{
      height: 40px;
      margin: 100px auto 14px;
    }
    .versus_img_btm{
      margin-top: -5px;
      margin: -5px auto 0px;
      width: 48px;
      height: 2px;
      background-color:black;
    }
    .versus_title{
      font-size: 28px;
      line-height: 120%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 26px;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_text{
      font-size: 20px;
      line-height: 150%;
      font-weight: 300;
      padding-top: 20px;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_subtitle{
      font-size: 18px;
      margin-bottom: 0px;
      padding-top: 50px;
      padding-bottom: 20px;
      line-height: 100%;
      font-weight: 600;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      width: 100%;
    }
    .compare_div{
      width: 100%;
    }
    .competitor_div{
      width: 100%;
      max-width: 460px;
      background-color: #dcdcdc;
      padding: 16px 20px;
      text-align: left;
      margin: 0px auto 4px;
    }
    .kunvet_div{
      width: 100%;
      max-width: 460px;
      background-color: #ff6969;
      padding: 16px 20px;
      text-align: left;
      margin: 0 auto;
    }
    .compare_header{
      font-size: 14px;
      line-height: 100%;
      font-weight: 600;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
      padding-bottom: 4px;
    }
    .compare_text{
      font-size: 16px;
      line-height: 150%;
      font-weight: 300;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
    }
    .limited{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .limited_main_div{
      max-width: 700px;
      margin: 100px auto;
      background-image: url('~@/assets/hire/discount-background.png');
      background-size: 100% 100%;
    }
    .limited_title{
      font-size: 26px;
      line-height: 120%;
      font-weight: 600;
      color: #ffffff;
      font-family: proxima-nova, sans-serif;
      padding: 60px 34px 0px;
      margin-bottom: 0px;
      text-align: center;
    }
    .limited_text{
      font-size: 18px;
      margin: 0 auto;
      color: #ffffff;
      font-weight: 300;
      line-height: 150%;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      padding: 20px 24px 0px;
      text-align: center;
    }
    .limited_btn{
      width: 170px;
      height: 62px !important;
      line-height: 62px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      color: #ff9090 !important;
      font-weight: 600;
    }
    .limited_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      padding-bottom: 60px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
    }
  }

  // css for xsmall size
  @media (max-width: 451px) {
    .xs_hide{
      display: none !important;
    }
    .emp_page_content{
      margin-top: 84px;
    }
    .summary{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
      font-size: 0;
    }
    .summary_title{
      padding-top: 30px;
      font-weight: 600;
      max-width: 552px;
      margin: 0 auto;
      letter-spacing: 0;
      line-height: 120%;
      font-family: proxima-nova, sans-serif;
      font-size: 32px;
      color: #FF6969;
      margin-bottom: 0px;
    }
    .summary_text{
      font-size: 18px;
      max-width: 552px;
      margin: 0 auto;
      line-height: 180%;
      font-weight: 300;
      font-family: proxima-nova, sans-serif;
      padding-top: 20px;
      color: black;
      margin-bottom: 0px;
    }
    .summary_btn{
      width: 200px;
      height: 68px !important;
      line-height: 68px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: #ff6969 !important;
      margin-top: 40px;
      font-family: proxima-nova, sans-serif;
      color: white !important;
      font-weight: 600;
    }
    .summary_btn_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #000000;
    }
    .summary_collage_students{
      width: 100%;
    }
    .effective{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .effective_img{
      height: 40px;
      margin: 80px auto 14px;
    }
    .effective_img_btm{
      margin: -5px auto 0px;
      width: 48px;
      height: 2px;
      background-color:black;
    }
    .effective_title{
      padding-top: 22px;
      line-height: 120%;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 24px;
      color: black;
      margin-bottom: 0px;
    }
    .effective_text{
      padding-top: 18px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      line-height: 150%;
      font-size: 18px;
      margin-bottom: 0px;
      color: black;
      margin-bottom: 0px;
    }
    .logo_style{
      width: 110px;
      margin-right: 50px;
      margin-top: 30px;
    }
    .logos_row{
      padding-top: 20px;
      display: flex;
      flex-wrap: wrap;
      max-width: 280px;
      margin: 0 auto;
    }
    .testimonials{
      margin-top: 80px;
      background: linear-gradient(to right, #FF5F6D 0%, #FFC371 170%);
      box-shadow: none;
    }
    .test_slide{
      width: 100%;
      margin-left: 0px;
    }
    .slide_info{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }
    .test_title{
      line-height: 100%;
      width: 100%;
      font-weight: bold;
      padding-top: 50px;
      margin-left: 24px;
      font-family: proxima-nova, sans-serif;
      font-size: 24px;
      color: white;
      margin-bottom: 0px;
    }
    .test_text{
      padding-top: 24px;
      max-width: 100%;
      width: calc(100% - 25px);
      font-family: proxima-nova, sans-serif;
      font-size: 18px;
      color: white;
      line-height: 150%;
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
    .test_undertext{
      max-width: 100%;
      width: calc(100% - 24px);
      padding-left: 25px;
      font-style: italic;
      margin-top: 30px;
      margin-bottom: 40px;
      font-family: proxima-nova, sans-serif;
      font-size: 14px;
      line-height: 120%;
      font-weight: 300;
      color: white;
    }
    .bio{
      margin-top: 30px;
      padding-left: 25px;
      width: 100%;
      display: flex;
      align-content: flex-end;
    }
    .bio_img{
      height: 60px;
      width: 60px;
      margin-top: auto;
    }
    .bio_text_div{
      padding-left: 20px;
      height: auto;
      margin-top: auto;
      vertical-align: bottom;
    }
    .bio_header{
      padding-top: 0px;
      font-size: 14px;
      color: white;
      font-family: proxima-nova, sans-serif;
      font-weight: 600;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .bio_text{
      font-size: 14px;
      padding-top: 8px;
      font-weight: 300;
      color: white;
      font-family: proxima-nova, sans-serif;
      line-height: 100%;
      margin-bottom: 0px;
    }
    .faq{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .faq_img{
      height: 40px;
      margin: 100px auto 14px;
    }
    .faq_img_btm{
      margin: -5px auto 0px;
      width: 48px;
      height: 2px;
      background-color:black;
    }
    .faq_title{
      padding-top: 22px;
      line-height: 120%;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 24px;
      color: black;
      margin-bottom: 0px;
    }
    .faq_text{
      padding-top: 18px;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      line-height: 150%;
      font-size: 18px;
      margin-bottom: 0px;
      color: black;
      margin-bottom: 0px;
    }
    .faq_question_div{
      width: 100%;
      max-width: 402px;
      min-height: 62px;
      margin: 10px auto 0px;
      box-shadow: #cccccc 0px 1px 1px;
      border-radius: 2px;
      background-color: #f7f7f7;
      padding: 23px 24px 23px;
      cursor: pointer;
      text-align: left;
      align-items: center;
      display: flex;
      flex-wrap: nowrap;
    }
    .faq_question_div_sel{
      width: 100%;
      max-width: 402px;
      margin: 10px auto 0px;
      box-shadow: #cccccc 0px 1px 1px;
      border: 1px solid black;
      border-radius: 2px;
      background-color: #f7f7f7;
      padding: 24px 24px 32px;
      cursor: pointer;
      text-align: left;
    }
    .faq_answer_title{
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      width: calc(100% - 24px);
      font-size: 16px;
      line-height: 120%;
      font-weight: 600;
    }
    .faq_answer_title_sel{
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      font-size: 28px;
      line-height: 130%;
      letter-spacing: 0;
      font-weight: 600;
    }
    .faq_plus{
      width: 10px;
      margin-top: 4.25px;
      margin-bottom: auto;
    }
    .faq_answers_text{
      padding-top: 20px;
      padding-right: 0px;
      margin-bottom: 0px;
      font-size: 16px;
      font-weight: normal;
      font-family: proxima-nova, sans-serif;
    }
    .hands{
      max-width: 100%;
      margin: 80px auto 0px;
      text-align: center;
      background-color: #f4f4f4;
    }
    .coffee_title{
      padding-top: 78px;
      padding-bottom: 60px;
      margin-bottom: 0px;
      line-height: 120%;
      font-weight: 600;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      font-size: 24px;
      color: black;
    }
    .nums{
      height: 34px;
      width: 34px;
      z-index: 100;
    }
    .num_bar_container{
      height: 34px;
    }
    .blackbar_p1{
      height: 2px;
      background-color: black;
      width: 50%;
      margin-left: 50%;
      margin-top: -24px;
      z-index: 1;
    }
    .blackbar_p2{
      height: 2px;
      background-color: black;
      width: 100%;
      margin-top: -24px;
      z-index: 1;
    }
    .blackbar_p3{
      height: 2px;
      background-color: black;
      width: 50%;
      margin-top: -24px;
      z-index: 1;
    }
    .hand_header{
      font-size: 24px;
      padding-top: 30px;
      line-height: 120%;
      letter-spacing: 0;
      font-weight: 600;
      color: black;
      margin-bottom: 0px;
      font-family: proxima-nova, sans-serif;
    }
    .hand_text{
      color: black;
      font-size: 16px;
      width: 100%;
      padding: 0 24px;
      margin: 10px auto 20px;
      line-height: 150%;
      font-family: proxima-nova, sans-serif;
    }
    .single_hand{
      max-height: 612px;
    }
    .waste{
      max-width: 100%;
      padding: 0 24px;
      text-align: center;
      margin: 0 auto;
    }
    .warning_img{
      height: 40px;
      margin: 80px auto 14px;
    }
    .warning_img_btm{
      margin: -5px auto 0px;
      width: 48px;
      height: 2px;
      background-color:black;
    }
    .warning_title{
      font-size: 24px;
      line-height: 120%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 22px;
      text-align: center;
      margin-bottom: 0px;
    }
    .warning_text{
      font-size: 18px;
      color: black;
      font-family: proxima-nova, sans-serif;
      padding-top: 18px;
      letter-spacing: 0;
      font-weight: 300;
      text-align: center;
      line-height: 150%;
      margin-bottom: 0px;
    }
    .refund{
      max-width: 100% ;
      padding: 0 24px;
      text-align: center;
      margin: 80px auto 0px;
    }
    .refund_main_div{
      background-image: linear-gradient(to right, #7F7FD5 0%, #86A8E7 51%, #8AB4FF 100%);
    }
    .refund_title{
      padding: 50px 24px 0px;
      font-size: 24px;
      line-height: 120%;
      font-weight: 600;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .refund_text{
      padding: 18px 24px 0px;
      font-size: 18px;
      line-height: 150%;
      font-weight: 300;
      color:  #ffffff;
      font-family: proxima-nova, sans-serif;
      margin: 0 auto;
      text-align: center;
    }
    .refund_btn{
      width: 170px;
      height: 62px !important;
      line-height: 62px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      color: #6478d5 !important;
      font-weight: 600;
    }
    .refund_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      padding-bottom: 60px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
    }
    .versus{
      max-width: 100%;
      padding: 0 24px;
      text-align: center;
      margin: 0 auto;
    }
    .versus_img{
      height: 40px;
      margin: 80px auto 14px;
    }
    .versus_img_btm{
      margin-top: -5px;
      margin: -5px auto 0px;
      width: 48px;
      height: 2px;
      background-color:black;
    }
    .versus_title{
      font-size: 24px;
      line-height: 120%;
      color: black;
      font-weight: bold;
      font-family: proxima-nova, sans-serif;
      padding-top: 22px;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_text{
      font-size: 18px;
      line-height: 150%;
      font-weight: 300;
      padding-top: 18px;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      margin-bottom: 0px;
    }
    .versus_subtitle{
      font-size: 18px;
      margin-bottom: 0px;
      padding-top: 50px;
      padding-bottom: 20px;
      line-height: 120%;
      font-weight: 600;
      color: black;
      font-family: proxima-nova, sans-serif;
      text-align: center;
      width: 100%;
    }
    .compare_div{
      width: 100%;
    }
    .competitor_div{
      width: 100%;
      max-width: 460px;
      background-color: #dcdcdc;
      padding: 16px 20px;
      text-align: left;
      margin: 0px auto 4px;
    }
    .kunvet_div{
      width: 100%;
      max-width: 460px;
      background-color: #ff6969;
      padding: 16px 20px;
      text-align: left;
      margin: 0 auto;
    }
    .compare_header{
      font-size: 14px;
      line-height: 100%;
      font-weight: 600;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
      padding-bottom: 4px;
    }
    .compare_text{
      font-size: 16px;
      line-height: 150%;
      font-weight: 300;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      margin-bottom: 0px;
      color: #505050;
    }
    .limited{
      max-width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      text-align: center;
    }
    .limited_main_div{
      max-width: 460px;
      margin: 80px auto;
      background-image: url('~@/assets/hire/discount-background.png');
      background-size: 100% 100%;
    }
    .limited_title{
      font-size: 26px;
      line-height: 120%;
      font-weight: 600;
      color: #ffffff;
      font-family: proxima-nova, sans-serif;
      padding: 60px 34px 0px;
      margin-bottom: 0px;
      text-align: center;
    }
    .limited_text{
      font-size: 18px;
      margin: 0 auto;
      color: #ffffff;
      font-weight: 300;
      line-height: 150%;
      letter-spacing: 0;
      font-family: proxima-nova, sans-serif;
      padding: 20px 24px 0px;
      text-align: center;
    }
    .limited_btn{
      width: 170px;
      height: 62px !important;
      line-height: 62px !important;
      box-shadow: none !important;
      border-radius: 0px !important;
      background-color: white !important;
      margin-top: 40px;
      color: #ff9090 !important;
      font-weight: 600;
    }
    .limited_undertext{
      font-family: proxima-nova, sans-serif;
      font-weight: 300;
      padding-top: 8px;
      padding-bottom: 60px;
      line-height: 100%;
      font-size: 14px;
      margin-bottom: 0px;
      margin-top: -6px;
      color: #ffffff;
      text-align: center;
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
    <h1 style="width: 1px; height: 1px; color: white; font-size: 1px;">Employer Post a Job</h1>
    <!-- regular size -->
    <div class="emp_page_content medium_hide mobile_hide small_hide xs_hide">
      <div class="summary">
        <div class="summary_text_div">
          <h2 class="summary_title">Hire up, spend less.</h2>
          <p class="summary_text">Hiring the perfect candidate should be easy, right? And it shouldn’t break the bank. Designed especially for local hiring, Kunvet helps you find the best candidates in your area, saving you both time and money on your next hire.</p>
          <k-btn @click="routeGen()" class="summary_btn"><span style="font-size: 22px !important; font-weight: bold;">Post a Job</span></k-btn>
          <p class="summary_btn_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
        <img class="summary_collage_students" :src="pngs.students">
      </div>
      <div class="effective">
        <img class="effective_img" :src="svgs.gas">
        <div class="effective_img_btm"></div>
        <h2 class="effective_title">Does Kunvet really work?</h2>
        <p class="effective_text">The stats say it all: 7 in 10 employers hire a candidate on Kunvet, and 1 in 3 employers land the perfect candidate within 14 days. The best part? Each job posting starts only at $9. Not 100% happy? We’ll give you your money back, no questions asked!</p>
        <h2 class="effective_title" style="padding-top: 70px; font-size: 24px;">Some of Our Returning Employers</h2>
        <div class="logo_first_row">
        <img class="logo_style" :src="pngs.coderschool">
        <img class="logo_style" :src="pngs.prolite">
        <img class="logo_style" :src="pngs.readingtown">
        <img class="logo_style" style="margin-right: 0px;" :src="pngs.cygolite">
        </div>
        <div class="logo_second_row">
        <img class="logo_style" :src="pngs.conroys">
        <img class="logo_style" :src="pngs.seacrest">
        <img class="logo_style" :src="pngs.banban">
        <img class="logo_style" style="margin-right: 0px;" :src="pngs.newportpark">
        </div>
      </div>
      <div style="width: 100%;">
        <v-carousel class="hire_monials testimonials" cycle interval="6000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">Wow... I recommend Kunvet to every small business. It has
                helped us find many talented and enthusiastic candidates
                from Orange County to serve as our Code Coaches. The
                quality of the resumes of those who applied through
                Kunvet exceeded our expectations. We’re grateful to the
                Kunvet site organizers for providing this valuable service!</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.mark"/>
                <p class="bio_header">Mark Freedkin</p>
                <p class="bio_text">General Manager</p>
                <p class="bio_text">of theCoderSchool - Irvine</p>
              </div>
              <p class="test_undertext"> — <a href="https://www.thecoderschool.com/locations/irvine/" target="_blank"
                style="text-decoration: underline; cursor: pointer;">theCoderSchool at Irvine</a>
                 offers a specialized after-school enrichment program that teaches young students (ages 7-18) how to write
                computer software.</p>
            </div>
            <div style="height: 60px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">This is Ally, from Irvine Agape Christian Church, again :)
                My Pastor Chen wants to say Thank You. We've been searching for a caring and passionate teacher for a long time.
                 We've also spent plenty of money on other websites already but didn’t find who we are looking for.
                 Thanks to you guys, we finally found the ideal applicant to fill in the position! God bless you.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.ally"/>
                <p class="bio_header">Ally Zeng</p>
                <p class="bio_text">Organizer</p>
                <p class="bio_text">of IA Christian Church</p>
              </div>
            </div>
            <div style="height: 200px;"/>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="faq">
        <img class="faq_img" :src="svgs.faq">
        <div class="faq_img_btm"/>
        <h2 class="faq_title">So...what exactly is Kunvet?</h2>
        <p class="faq_text">Kunvet is a job website designed to help you find the best local talent out there. Our mission is simple: to help you hire that perfect candidate while saving you a whole lot of time and money.</p>
        <h2 class="faq_title" style="padding-top: 70px; font-size: 24px;">Frequently Asked Questions</h2>
        <div class="faq_box">
          <div class="faq_questions">
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 1, 'faq_question_div': question_num != 1}" @click="question_num = 1" style="margin-top: 0px;">Is Kunvet right for me?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 2, 'faq_question_div': question_num != 2}" @click="question_num = 2">Is Kunvet a recruiting agency?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 3, 'faq_question_div': question_num != 3}" @click="question_num = 3">How much does Kunvet cost?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 4, 'faq_question_div': question_num != 4}" @click="question_num = 4">What is the refund policy?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 5, 'faq_question_div': question_num != 5}" @click="question_num = 5">How does Kunvet work?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 6, 'faq_question_div': question_num != 6}" @click="question_num = 6">What sets Kunvet apart from other sites?</div>
          </div>
          <div class="faq_answers">
            <div class="faq_answers_div" v-if="question_num === 1">
              <div style=";">
              <h2 class="faq_answers_title">Is Kunvet right for me?</h2>
              <p class="faq_answers_text">Kunvet is a job platform designed to connect employers with candidates in their local community in a streamlined, efficient, economical hiring process.</p>
              <p class="faq_answers_text">If you’re a small business, startup, nonprofit or individual looking to hire from your local community, then yes, Kunvet is your spot! Kunvet is designed to help people find the best local talent out there.</p>
              <p class="faq_answers_text">Looking for an entry-level, part-time, temporary, internship or volunteer position? Kunvet is the place for you!</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 2">
              <div style="">
              <h2 class="faq_answers_title">Is Kunvet a recruiting agency?</h2>
              <p class="faq_answers_text">Nope! We’re just your friendly online local job board.</p>
              <p class="faq_answers_text">We are an online job platform that connects candidates with exciting, recent, relevant job opportunities in their local area. Employers post jobs on our site, and applicants check out those job postings and apply—simple as that. No meddling here!</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 3">
              <div style="">
              <h2 class="faq_answers_title">How much does Kunvet cost?</h2>
              <p class="faq_answers_text">Your Kunvet account is free! After that, it’s $9 per job. We offer both Personal and Business accounts—both with unique, helpful features perfect for your needs.</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 4">
              <div style="">
              <h2 class="faq_answers_title">What is the refund policy?</h2>
              <p class="faq_answers_text">We offer the best refund policy out of most of our competitors in the market. If you are not completely satisfied with the service you received, let us know and we will gladly issue you a full refund immediately—no questions asked!</p>
              <p class="faq_answers_text">A friendly FYI: Our website is especially designed for small businesses, startups, nonprofits and individuals to find and hire local candidates. Looking to hire for entry-level, part-time, temporary, internship and volunteering opportunities? This is the place for you!</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 5">
              <div style="">
              <h2 class="faq_answers_title">How does Kunvet work?</h2>
              <p class="faq_answers_text">1. <strong>Post a job</strong>: Post your job for just $9 and it stays active for 30 days.</p>
              <p class="faq_answers_text">2. <strong>Wait for applications to come rolling in</strong>: If it’s a paid job, expect about 6–16 applications. If it’s an internship or unpaid job, expect about 5–10 applications.</p>
              <p class="faq_answers_text">3. <strong>Get hiring</strong>: Applicants apply, and we send their resumes (and CV if requested) to your email address and Kunvet account. You review the resumes and get going on finding your perfect candidate. That’s it—happy hiring!</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 6">
              <div style="">
              <h2 class="faq_answers_title">What sets Kunvet apart from other sites?</h2>
              <p class="faq_answers_text">Glad you asked! We know how hard it is to hire locally—we’ve been there.
                We designed a game-changing website just for you: locally focused, affordable, simple and effective. Easy as that.
              </p>
              <p class="faq_answers_text">It’s simple: We want to help you find the perfect candidate for the job. This is why we offer a pretty outstanding refund policy that we dare competitors to match.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="how_works">
        <div class="coffee_money">
          <h2 class="coffee_title">How does Kunvet work?</h2>
          <div style="text-align: center;"> <img class="one_two_three_line" :src="svgs.stepsDesk"> </div>
          <div class="hands">
            <div class="hand_one" style="margin-left: 0px;">
              <h2 class="hand_header_1">Post a Job</h2>
              <p class="hand_text_1">Job posting starts at just $9, stays active for 30 days, and literally takes minutes! Cancel any time.</p>
            </div>
            <div class="hand_two" style="margin: 0 120px;">
              <h2 class="hand_header_2">Review Resumes</h2>
              <p class="hand_text_2">We send applicant resumes to your email and Kunvet account. If they’re not the stellar candidates you’re looking for, we’ll give you your money back!</p>
            </div>
            <div class="hand_three" style="margin-right: 0px;">
              <h2 class="hand_header_3">Hire</h2>
              <p class="hand_text_3">Want to find that perfect hire? Explore talent in your area at just $9. Isn’t that just amazing?</p>
            </div>
          </div>
          <img class="hands_img" :src="pngs.handsDesk">
        </div>
      </div>
      <div class="waste">
        <img class="warning_img" :src="svgs.warning">
        <div class="warning_img_btm"/>
        <h2 class="warning_title">Hire better, save money.</h2>
        <p class="warning_text">From exhausting interviews to spendy websites, hiring can be a drag. Kunvet cuts through all that, helping you hire the perfect candidate in no time. At merely $9, you can post a job and watch the applications flow in. Satisfaction guaranteed or your money back!</p>
        <p class="warning_text" style="font-weight: 600; padding-top: 70px; line-height: 100%;">Why should I choose Kunvet?</p>
        <p class="warning_text">Looking to hire locally? Have some entry-level, part-time, temporary job, internship or volunteering work that needs a stellar employee? Whether you’re a business or an individual, Kunvet is the place to be. Stop wasting time and money, and start hiring!</p>
      </div>
      <div class="refund">
        <h2 class="refund_title">Not 100% happy? We’ll give you a full refund!</h2>
        <p class="refund_text">Your experience means the world to us. If you are not completely satisfied with our service, let us know and we’ll be happy to give you a full refund as soon as humanly possible. No questions asked.</p>
        <k-btn @click="routeGen()" class="refund_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 22px;">Post a Job</span></k-btn>
        <p class="refund_undertext">Satisfaction guarateed. Or money back.</p>
      </div>
      <div class="versus">
        <img class="versus_img" :src="svgs.versus">
        <div class="versus_img_btm"/>

        <h2 class="versus_title">Kunvet vs. the competition</h2>
        <p class="versus_text">It’s no lie: We’re the little guy—kind of like David vs. Goliath. We like it that way. Check out how Kunvet stacks up to its big, corporate competitors.</p>
        <div class="compare_div">
          <h2 class="versus_subtitle">Nationwide Hiring for Large Companies</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most job websites out there are mostly used by big corporate enterprises for nationwide hiring. That’s their thing, not ours.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Kunvet is designed for local employers and businesses.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Local Hiring for Local Employers</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Your job easily gets pushed aside by jobs from large companies, which have hundreds of openings every day.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Kunvet is specifically designed for local businesses hiring locally. We make sure every local employer’s voice is heard equally.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Real Customer Support</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most companies only offer limited support, and some don’t even do that.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Kunvet offers real support! Our kind, helpful customer service reps are ready to help you at every turn.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Pricing Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Some job sites offer “click bid” pricing models, while others offer “job slots,” charging you even if you’re not hiring. Kunvet is different—we won’t waste your time or money.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">We keep it simple: Pay as you go, with no hidden costs. Easy, right?</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Refund Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              A refund can take almost a week—3 to 5 business days—to process. Not to mention the hoops you have to jump through to get it!
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Not happy? We’ll give you a full refund immediately, no questions!</p>
          </div>
        </div>

      </div>
      <div class="limited">
        <div class="limited_main_div">
          <h2 class="limited_title">Psst—Happy New Year!</h2>
          <p class="limited_text">Create an account today and celebrate 2020 with us! Enjoy job postings for just $9. Act now—offer available for a limited time only!</p>
          <k-btn @click="routeGen()" class="limited_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 18px;">Post a Job</span></k-btn>
          <p class="limited_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
    </div>
    <!-- Ipad size -->
    <div class="emp_page_content medium_show mobile_hide small_hide xs_hide">
      <div class="summary">
        <div class="summary_text_div">
          <h2 class="summary_title">Hire up, spend less.</h2>
          <p class="summary_text">Hiring the perfect candidate should be easy, right? And it shouldn’t break the bank. Designed especially for local hiring, Kunvet helps you find the best candidates in your area, saving you both time and money on your next hire.</p>
          <k-btn @click="routeGen()" class="summary_btn"><span style="font-size: 22px !important; font-weight: bold;">Post a Job</span></k-btn>
          <p class="summary_btn_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
        <img class="summary_collage_students" :src="pngs.students">
      </div>
      <div class="effective">
        <img class="effective_img" :src="svgs.gas">
        <div class="effective_img_btm"></div>
        <h2 class="effective_title">Does Kunvet really work?</h2>
        <p class="effective_text">The stats say it all: 7 in 10 employers hire a candidate on Kunvet, and 1 in 3 employers land the perfect candidate within 14 days. The best part? Each job posting starts only at $9. Not 100% happy? We’ll give you your money back, no questions asked!</p>
        <h2 class="effective_title" style="padding-top: 60px; font-size: 24px;">Some of Our Returning Employers</h2>
        <div class="logo_first_row">
        <img class="logo_style" :src="pngs.coderschool">
        <img class="logo_style" :src="pngs.prolite">
        <img class="logo_style" :src="pngs.readingtown">
        <img class="logo_style" style="margin-right: 0px;" :src="pngs.cygolite">
        </div>
        <div class="logo_second_row">
        <img class="logo_style" :src="pngs.conroys">
        <img class="logo_style" :src="pngs.seacrest">
        <img class="logo_style" :src="pngs.banban">
        <img class="logo_style" style="margin-right: 0px;" :src="pngs.newportpark">
        </div>
      </div>
      <div style="width: 100%;">
        <v-carousel class="hire_monials testimonials" cycle interval="100000000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">Wow... I recommend Kunvet to every small business. It has
                helped us find many talented and enthusiastic candidates
                from Orange County to serve as our Code Coaches. The
                quality of the resumes of those who applied through
                Kunvet exceeded our expectations. We’re grateful to the
                Kunvet site organizers for providing this valuable service!</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.mark"/>
                <p class="bio_header">Mark Freedkin</p>
                <p class="bio_text">General Manager</p>
                <p class="bio_text">of theCoderSchool - Irvine</p>
              </div>
              <p class="test_undertext"> — <a href="https://www.thecoderschool.com/locations/irvine/" target="_blank"
                style="text-decoration: underline; cursor: pointer;">theCoderSchool at Irvine</a>
                 offers a specialized after-school enrichment program that teaches young students (ages 7-18) how to write
                computer software.</p>
            </div>
            <div style="height: 100px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">This is Ally, from Irvine Agape Christian Church, again :)
                My Pastor Chen wants to say Thank You. We've been searching for a caring and passionate teacher for a long time.
                 We've also spent plenty of money on other websites already but didn’t find who we are looking for.
                 Thanks to you guys, we finally found the ideal applicant to fill in the position! God bless you.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.ally"/>
                <p class="bio_header">Ally Zeng</p>
                <p class="bio_text">Organizer</p>
                <p class="bio_text">of IA Christian Church</p>
              </div>
            </div>
            <div style="height: 100px;"/>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="faq">
        <img class="faq_img" :src="svgs.faq">
        <div class="faq_img_btm"/>
        <h2 class="faq_title">So...what exactly is Kunvet?</h2>
        <p class="faq_text">Kunvet is a job website designed to help you find the best local talent out there. Our mission is simple: to help you hire that perfect candidate while saving you a whole lot of time and money.</p>
        <h2 class="faq_title" style="padding-top: 44px; font-size: 24px;">Frequently Asked Questions</h2>
        <div class="faq_box">
          <div class="faq_questions">
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 1, 'faq_question_div': question_num != 1}" @click="question_num = 1" style="margin-top: 0px;">Is Kunvet right for me?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 2, 'faq_question_div': question_num != 2}" @click="question_num = 2">Is Kunvet a recruiting agency?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 3, 'faq_question_div': question_num != 3}" @click="question_num = 3">How much does Kunvet cost?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 4, 'faq_question_div': question_num != 4}" @click="question_num = 4">What is the refund policy?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 5, 'faq_question_div': question_num != 5}" @click="question_num = 5">How does Kunvet work?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 6, 'faq_question_div': question_num != 6}" @click="question_num = 6">What sets Kunvet apart from other sites?</div>
          </div>
          <div class="faq_answers">
            <div class="faq_answers_div" v-if="question_num === 1">
              <div style="">
              <h2 class="faq_answers_title">Is Kunvet right for me?</h2>
              <p class="faq_answers_text">Kunvet is a job platform designed to connect employers with candidates in their local community in a streamlined, efficient, economical hiring process.</p>
              <p class="faq_answers_text">If you’re a small business, startup, nonprofit or individual looking to hire from your local community, then yes, Kunvet is your spot! Kunvet is designed to help people find the best local talent out there.</p>
              <p class="faq_answers_text">Looking for an entry-level, part-time, temporary, internship or volunteer position? Kunvet is the place for you!</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 2">
              <div style="">
              <h2 class="faq_answers_title">Is Kunvet a recruiting agency?</h2>
              <p class="faq_answers_text">Nope! We’re just your friendly online local job board.</p>
              <p class="faq_answers_text">We are an online job platform that connects candidates with exciting, recent, relevant job opportunities in their local area. Employers post jobs on our site, and applicants check out those job postings and apply—simple as that. No meddling here!</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 3">
              <div style="">
              <h2 class="faq_answers_title">How much does Kunvet cost?</h2>
              <p class="faq_answers_text">Your Kunvet account is free! After that, it’s $9 per job. We offer both Personal and Business accounts—both with unique, helpful features perfect for your needs.</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 4">
              <div style="">
              <h2 class="faq_answers_title">What is the refund policy?</h2>
              <p class="faq_answers_text">We offer the best refund policy out of most of our competitors in the market. If you are not completely satisfied with the service you received, let us know and we will gladly issue you a full refund immediately—no questions asked!</p>
              <p class="faq_answers_text">A friendly FYI: Our website is especially designed for small businesses, startups, nonprofits and individuals to find and hire local candidates. Looking to hire for entry-level, part-time, temporary, internship and volunteering opportunities? This is the place for you!</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 5">
              <div style="">
              <h2 class="faq_answers_title">How does Kunvet work?</h2>
              <p class="faq_answers_text">1. <strong>Post a job</strong>: Post your job for just $9 and it stays active for 30 days.</p>
              <p class="faq_answers_text">2. <strong>Wait for applications to come rolling in</strong>: If it’s a paid job, expect about 6–16 applications. If it’s an internship or unpaid job, expect about 5–10 applications.</p>
              <p class="faq_answers_text">3. <strong>Get hiring</strong>: Applicants apply, and we send their resumes (and CV if requested) to your email address and Kunvet account. You review the resumes and get going on finding your perfect candidate. That’s it—happy hiring!</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 6">
              <div style="">
              <h2 class="faq_answers_title">What sets Kunvet apart from other sites?</h2>
              <p class="faq_answers_text">Glad you asked! We know how hard it is to hire locally—we’ve been there.
                We designed a game-changing website just for you: locally focused, affordable, simple and effective. Easy as that.
              </p>
              <p class="faq_answers_text">It’s simple: We want to help you find the perfect candidate for the job. This is why we offer a pretty outstanding refund policy that we dare competitors to match.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="how_works">
        <div class="coffee_money">
          <h2 class="coffee_title">How does Kunvet work?</h2>
          <div style="text-align: center;"> <img class="one_two_three_line" :src="svgs.stepsMed"> </div>
          <div class="hands">
            <div class="hand_one" style="margin-left: 0px;">
              <h2 class="hand_header_1">Post a Job</h2>
              <p class="hand_text_1">Job posting starts at just $9, stays active for 30 days, and literally takes minutes! Cancel any time.</p>
            </div>
            <div class="hand_two" style="margin: 0 54.5px;">
              <h2 class="hand_header_2">Review Resumes</h2>
              <p class="hand_text_2">We send applicant resumes to your email and Kunvet account. If they’re not the stellar candidates you’re looking for, we’ll give you your money back!</p>
            </div>
            <div class="hand_three" style="margin-right: 0px;">
              <h2 class="hand_header_3">Hire</h2>
              <p class="hand_text_3">Want to find that perfect hire? Explore talent in your area at just $9. Isn’t that just amazing?</p>
            </div>
          </div>
          <img class="hands_img" :src="pngs.handsMed">
        </div>
      </div>
      <div class="waste">
        <img class="warning_img" :src="svgs.warning">
        <div class="warning_img_btm"/>
        <h2 class="warning_title">Hire better, save money.</h2>
        <p class="warning_text">From exhausting interviews to spendy websites, hiring can be a drag. Kunvet cuts through all that, helping you hire the perfect candidate in no time. At merely $9, you can post a job and watch the applications flow in. Satisfaction guaranteed or your money back!</p>
        <p class="warning_text" style="font-weight: 600; padding-top: 60px; line-height: 100%;">Why should I choose Kunvet?</p>
        <p class="warning_text">Looking to hire locally? Have some entry-level, part-time, temporary job, internship or volunteering work that needs a stellar employee? Whether you’re a business or an individual, Kunvet is the place to be. Stop wasting time and money, and start hiring!</p>
      </div>
      <div class="refund">
        <div class="refund_main_div">
          <h2 class="refund_title">Not 100% happy? We’ll give you a full refund!</h2>
          <p class="refund_text">Your experience means the world to us. If you are not completely satisfied with our service, let us know and we’ll be happy to give you a full refund as soon as humanly possible. No questions asked.</p>
          <k-btn @click="routeGen()" class="refund_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 22px;">Post a Job</span></k-btn>
          <p class="refund_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
      <div class="versus">
        <img class="versus_img" :src="svgs.versus">
        <div class="versus_img_btm"/>

        <h2 class="versus_title">Kunvet vs. the competition</h2>
        <p class="versus_text">It’s no lie: We’re the little guy—kind of like David vs. Goliath. We like it that way. Check out how Kunvet stacks up to its big, corporate competitors.</p>
        <div class="compare_div">
          <h2 class="versus_subtitle">Nationwide Hiring for Large Companies</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most job websites out there are mostly used by big corporate enterprises for nationwide hiring. That’s their thing, not ours.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Kunvet is designed for local employers and businesses.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Local Hiring for Local Employers</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Your job easily gets pushed aside by jobs from large companies, which have hundreds of openings every day.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Kunvet is specifically designed for local businesses hiring locally. We make sure every local employer’s voice is heard equally.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Real Customer Support</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most companies only offer limited support, and some don’t even do that.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Kunvet offers real support! Our kind, helpful customer service reps are ready to help you at every turn.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Pricing Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Some job sites offer “click bid” pricing models, while others offer “job slots,” charging you even if you’re not hiring. Kunvet is different—we won’t waste your time or money.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">We keep it simple: Pay as you go, with no hidden costs. Easy, right?</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Refund Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              A refund can take almost a week—3 to 5 business days—to process. Not to mention the hoops you have to jump through to get it!
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Not happy? We’ll give you a full refund immediately, no questions!</p>
          </div>
        </div>

      </div>
      <div class="limited">
        <div class="limited_main_div">
          <h2 class="limited_title">Psst—Happy New Year!</h2>
          <p class="limited_text">Create an account today and celebrate 2020 with us! Enjoy job postings for just $9. Act now—offer available for a limited time only!</p>
          <k-btn @click="routeGen()" class="limited_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 22px;">Post a Job</span></k-btn>
          <p class="limited_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
    </div>
    <!-- Mobile size -->
    <div class="emp_page_content medium_hide mobile_show small_hide xs_hide">
      <div class="summary">
          <img class="summary_collage_students" :src="pngs.studentsMobile">
          <h2 class="summary_title">Hire up, spend less.</h2>
          <p class="summary_text">Hiring the perfect candidate should be easy, right? And it shouldn’t break the bank. Designed especially for local hiring, Kunvet helps you find the best candidates in your area, saving you both time and money on your next hire.</p>
          <k-btn @click="routeGen()" class="summary_btn"><span style="font-size: 22px !important; font-weight: bold;">Post a Job</span></k-btn>
          <p class="summary_btn_undertext">Satisfaction guarateed. Or money back.</p>
      </div>
      <div class="effective">
        <img class="effective_img" :src="svgs.gas">
        <div class="effective_img_btm"></div>
        <h2 class="effective_title">Does Kunvet really work?</h2>
        <p class="effective_text">The stats say it all: 7 in 10 employers hire a candidate on Kunvet, and 1 in 3 employers land the perfect candidate within 14 days. The best part? Each job posting starts only at $9. Not 100% happy? We’ll give you your money back, no questions asked!</p>
        <h2 class="effective_title" style="padding-top: 50px; font-size: 22px;">Some of Our Returning Employers</h2>
        <div class="logo_first_row">
        <img class="logo_style" :src="pngs.coderschool">
        <img class="logo_style" :src="pngs.prolite">
        <img class="logo_style" :src="pngs.readingtown">
        <img class="logo_style" style="margin-right: 0px;" :src="pngs.cygolite">
        </div>
        <div class="logo_second_row">
        <img class="logo_style" :src="pngs.conroys">
        <img class="logo_style" :src="pngs.seacrest">
        <img class="logo_style" :src="pngs.banban">
        <img class="logo_style" style="margin-right: 0px;" :src="pngs.newportpark">
        </div>
      </div>
      <div style="width: 100%;">
        <v-carousel class="hire_monials testimonials" cycle interval="100000000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">Wow... I recommend Kunvet to every small business. It has
                helped us find many talented and enthusiastic candidates
                from Orange County to serve as our Code Coaches. The
                quality of the resumes of those who applied through
                Kunvet exceeded our expectations. We’re grateful to the
                Kunvet site organizers for providing this valuable service!</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.mark"/>
                <div class="bio_text_div">
                  <p class="bio_header">Mark Freedkin</p>
                  <p class="bio_text">General Manager</p>
                  <p class="bio_text">of theCoderSchool - Irvine</p>
                </div>
              </div>
              <p class="test_undertext"> — <a href="https://www.thecoderschool.com/locations/irvine/" target="_blank"
                style="text-decoration: underline; cursor: pointer;">theCoderSchool at Irvine</a>
                 offers a specialized after-school enrichment program that teaches young students (ages 7-18) how to write
                computer software.</p>
            </div>
            <div style="height: 82px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">This is Ally, from Irvine Agape Christian Church, again :)
                My Pastor Chen wants to say Thank You. We've been searching for a caring and passionate teacher for a long time.
                 We've also spent plenty of money on other websites already but didn’t find who we are looking for.
                 Thanks to you guys, we finally found the ideal applicant to fill in the position! God bless you.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.ally"/>
                <div class="bio_text_div">
                  <p class="bio_header">Ally Zeng</p>
                  <p class="bio_text">Organizer</p>
                  <p class="bio_text">of IA Christian Church</p>
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="faq">
        <img class="faq_img" :src="svgs.faq">
        <div class="faq_img_btm"/>
        <h2 class="faq_title">So...what exactly is Kunvet?</h2>
        <p class="faq_text">Kunvet is a job website designed to help you find the best local talent out there. Our mission is simple: to help you hire that perfect candidate while saving you a whole lot of time and money.</p>
        <h2 class="faq_title" style="padding-top: 50px; font-size: 22px;">Frequently Asked Questions</h2>
        <div style="margin-top: 20px;"
          v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 1, 'faq_question_div': question_num_mobile != 1}"
          @click="question_num_mobile = 1">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 1, 'faq_answer_title': question_num_mobile != 1}">
            Is Kunvet right for me?</h2><img v-if="question_num_mobile !== 1" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 1">
            <p class="faq_answers_text">Kunvet is a job platform designed to connect employers with candidates in their local community in a streamlined, efficient, economical hiring process.</p>
            <p class="faq_answers_text">If you’re a small business, startup, nonprofit or individual looking to hire from your local community, then yes, Kunvet is your spot! Kunvet is designed to help people find the best local talent out there.</p>
            <p class="faq_answers_text">Looking for an entry-level, part-time, temporary, internship or volunteer position? Kunvet is the place for you!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 2, 'faq_question_div': question_num_mobile != 2}"
          @click="question_num_mobile = 2">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 2, 'faq_answer_title': question_num_mobile != 2}">
            Is Kunvet a recruiting agency?</h2><img v-if="question_num_mobile !== 2" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 2">
            <p class="faq_answers_text">Nope! We’re just your friendly online local job board.</p>
            <p class="faq_answers_text">We are an online job platform that connects candidates with exciting, recent, relevant job opportunities in their local area. Employers post jobs on our site, and applicants check out those job postings and apply—simple as that. No meddling here!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 3, 'faq_question_div': question_num_mobile != 3}"
          @click="question_num_mobile = 3">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 3, 'faq_answer_title': question_num_mobile != 3}">
            How much does Kunvet cost?</h2><img v-if="question_num_mobile !== 3" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 3">
            <p class="faq_answers_text">Your Kunvet account is free! After that, it’s $9 per job. We offer both Personal and Business accounts—both with unique, helpful features perfect for your needs.</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 4, 'faq_question_div': question_num_mobile != 4}"
          @click="question_num_mobile = 4">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 4, 'faq_answer_title': question_num_mobile != 4}">
            What is the refund policy?</h2><img v-if="question_num_mobile !== 4" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 4">
            <p class="faq_answers_text">We offer the best refund policy out of most of our competitors in the market. If you are not completely satisfied with the service you received, let us know and we will gladly issue you a full refund immediately—no questions asked!</p>
            <p class="faq_answers_text">A friendly FYI: Our website is especially designed for small businesses, startups, nonprofits and individuals to find and hire local candidates. Looking to hire for entry-level, part-time, temporary, internship and volunteering opportunities? This is the place for you!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 5, 'faq_question_div': question_num_mobile != 5}"
          @click="question_num_mobile = 5">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 5, 'faq_answer_title': question_num_mobile != 5}">
            How does Kunvet work?</h2><img v-if="question_num_mobile !== 5" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 5">
            <p class="faq_answers_text">1. <strong>Post a job</strong>: Post your job for just $9 and it stays active for 30 days.</p>
            <p class="faq_answers_text">2. <strong>Wait for applications to come rolling in</strong>: If it’s a paid job, expect about 6–16 applications. If it’s an internship or unpaid job, expect about 5–10 applications.</p>
            <p class="faq_answers_text">3. <strong>Get hiring</strong>: Applicants apply, and we send their resumes (and CV if requested) to your email address and Kunvet account. You review the resumes and get going on finding your perfect candidate. That’s it—happy hiring!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 6, 'faq_question_div': question_num_mobile != 6}"
          @click="question_num_mobile = 6">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 6, 'faq_answer_title': question_num_mobile != 6}">
            What sets Kunvet apart from other sites?</h2><img v-if="question_num_mobile !== 6" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 6">
            <p class="faq_answers_text">Glad you asked! We know how hard it is to hire locally—we’ve been there.
              We designed a game-changing website just for you: locally focused, affordable, simple and effective. Easy as that.
            </p>
            <p class="faq_answers_text">It’s simple: We want to help you find the perfect candidate for the job. This is why we offer a pretty outstanding refund policy that we dare competitors to match.</p>
          </div>
        </div>
      </div>
      <div class="hands">
        <h2 class="coffee_title">How does Kunvet work?</h2>
        <v-window style="height: 778px;">
          <v-window-item style="text-align:center;">
            <div class="num_bar_container">
              <img :src="svgs.num1" class="nums">
              <div class="blackbar_p1"/>
            </div>
            <h2 class="hand_header">Post a Job</h2>
            <p class="hand_text">Job posting starts at just $9, stays active for 30 days, and literally takes minutes! Cancel any time.</p>
            <img class="single_hand" style="margin-left: 40px;" :src="pngs.hand1">
          </v-window-item>
          <v-window-item style="text-align:center;">
            <div class="num_bar_container">
              <img :src="svgs.num2" class="nums">
              <div class="blackbar_p2"/>
            </div>
            <h2 class="hand_header">Review Resumes</h2>
            <p class="hand_text">We send applicant resumes to your email and Kunvet account. If they’re not the stellar candidates you’re looking for, we’ll give you your money back!</p>
            <img class="single_hand" style="margin-left: 60px;" :src="pngs.hand2">
          </v-window-item>
          <v-window-item style="text-align:center;">
            <div class="num_bar_container">
              <img :src="svgs.num3" class="nums">
              <div class="blackbar_p3"/>
            </div>
            <h2 class="hand_header">Hire</h2>
            <p class="hand_text">Want to find that perfect hire? Explore talent in your area at just $9. Isn’t that just amazing?</p>
            <img class="single_hand" style="margin-left: 80px;" :src="pngs.hand3">
          </v-window-item>
        </v-window>
      </div>
      <div class="waste">
        <img class="warning_img" :src="svgs.warning">
        <div class="warning_img_btm"/>
        <h2 class="warning_title">Hire better, save money.</h2>
        <p class="warning_text">From exhausting interviews to spendy websites, hiring can be a drag. Kunvet cuts through all that, helping you hire the perfect candidate in no time. At merely $9, you can post a job and watch the applications flow in. Satisfaction guaranteed or your money back!</p>
        <p class="warning_text" style="font-weight: 600; padding-top: 50px; line-height: 100%;">Why should I choose Kunvet?</p>
        <p class="warning_text">Looking to hire locally? Have some entry-level, part-time, temporary job, internship or volunteering work that needs a stellar employee? Whether you’re a business or an individual, Kunvet is the place to be. Stop wasting time and money, and start hiring!</p>
      </div>
      <div class="refund">
        <div class="refund_main_div">
          <h2 class="refund_title">Not 100% happy? We’ll give you a full refund!</h2>
          <p class="refund_text">Your experience means the world to us. If you are not completely satisfied with our service, let us know and we’ll be happy to give you a full refund as soon as humanly possible. No questions asked.</p>
          <k-btn @click="routeGen()" class="refund_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 20px;">Post a Job</span></k-btn>
          <p class="refund_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
      <div class="versus">
        <img class="versus_img" :src="svgs.versus">
        <div class="versus_img_btm"/>

        <h2 class="versus_title">Kunvet vs. the competition</h2>
        <p class="versus_text">It’s no lie: We’re the little guy—kind of like David vs. Goliath. We like it that way. Check out how Kunvet stacks up to its big, corporate competitors.</p>
        <div class="compare_div">
          <h2 class="versus_subtitle">Nationwide Hiring for Large Companies</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most job websites out there are mostly used by big corporate enterprises for nationwide hiring. That’s their thing, not ours.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Kunvet is designed for local employers and businesses.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Local Hiring for Local Employers</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Your job easily gets pushed aside by jobs from large companies, which have hundreds of openings every day.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Kunvet is specifically designed for local businesses hiring locally. We make sure every local employer’s voice is heard equally.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Real Customer Support</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most companies only offer limited support, and some don’t even do that.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Kunvet offers real support! Our kind, helpful customer service reps are ready to help you at every turn.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Pricing Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Some job sites offer “click bid” pricing models, while others offer “job slots,” charging you even if you’re not hiring. Kunvet is different—we won’t waste your time or money.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">We keep it simple: Pay as you go, with no hidden costs. Easy, right?</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Refund Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              A refund can take almost a week—3 to 5 business days—to process. Not to mention the hoops you have to jump through to get it!
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Not happy? We’ll give you a full refund immediately, no questions!</p>
          </div>
        </div>

      </div>
      <div class="limited">
        <div class="limited_main_div">
          <h2 class="limited_title">Psst—Happy New Year!</h2>
          <p class="limited_text">Create an account today and celebrate 2020 with us! Enjoy job postings for just $9. Act now—offer available for a limited time only!</p>
          <k-btn @click="routeGen()" class="limited_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 20px;">Post a Job</span></k-btn>
          <p class="limited_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
    </div>
    <!-- small size -->
    <div class="emp_page_content medium_hide mobile_hide small_show xs_hide">
      <div class="summary">
          <img class="summary_collage_students" :src="pngs.studentsMobile">
          <h2 class="summary_title">Hire up, spend less.</h2>
          <p class="summary_text">Hiring the perfect candidate should be easy, right? And it shouldn’t break the bank. Designed especially for local hiring, Kunvet helps you find the best candidates in your area, saving you both time and money on your next hire.</p>
          <k-btn @click="routeGen()" class="summary_btn"><span style="font-size: 22px !important; font-weight: bold;">Post a Job</span></k-btn>
          <p class="summary_btn_undertext">Satisfaction guarateed. Or money back.</p>
      </div>
      <div class="effective">
        <img class="effective_img" :src="svgs.gas">
        <div class="effective_img_btm"></div>
        <h2 class="effective_title">Does Kunvet really work?</h2>
        <p class="effective_text">The stats say it all: 7 in 10 employers hire a candidate on Kunvet, and 1 in 3 employers land the perfect candidate within 14 days. The best part? Each job posting starts only at $9. Not 100% happy? We’ll give you your money back, no questions asked!</p>
        <h2 class="effective_title" style="padding-top: 50px; font-size: 20px;">Some of Our Returning Employers</h2>
        <div class="logos_row">
          <img class="logo_style" style="margin-top: 0px;" :src="pngs.coderschool">
          <img class="logo_style" style="margin-right: 0px; margin-top: 0px;" :src="pngs.prolite">
          <img class="logo_style" :src="pngs.readingtown">
          <img class="logo_style" style="margin-right: 0px;" :src="pngs.cygolite">
          <img class="logo_style" :src="pngs.conroys">
          <img class="logo_style" style="margin-right: 0px;" :src="pngs.seacrest">
          <img class="logo_style" :src="pngs.banban">
          <img class="logo_style" style="margin-right: 0px;" :src="pngs.newportpark">
        </div>
      </div>
      <div style="width: 100%;">
        <v-carousel class="hire_monials testimonials" cycle interval="100000000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">Wow... I recommend Kunvet to every small business. It has
                helped us find many talented and enthusiastic candidates
                from Orange County to serve as our Code Coaches. The
                quality of the resumes of those who applied through
                Kunvet exceeded our expectations. We’re grateful to the
                Kunvet site organizers for providing this valuable service!</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.mark"/>
                <div class="bio_text_div">
                  <p class="bio_header">Mark Freedkin</p>
                  <p class="bio_text">General Manager</p>
                  <p class="bio_text">of theCoderSchool - Irvine</p>
                </div>
              </div>
              <p class="test_undertext"> — <a href="https://www.thecoderschool.com/locations/irvine/" target="_blank"
                style="text-decoration: underline; cursor: pointer;">theCoderSchool at Irvine</a>
                 offers a specialized after-school enrichment program that teaches young students (ages 7-18) how to write
                computer software.</p>
            </div>
            <div style="height: 82px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">This is Ally, from Irvine Agape Christian Church, again :)
                My Pastor Chen wants to say Thank You. We've been searching for a caring and passionate teacher for a long time.
                 We've also spent plenty of money on other websites already but didn’t find who we are looking for.
                 Thanks to you guys, we finally found the ideal applicant to fill in the position! God bless you.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.ally"/>
                <div class="bio_text_div">
                  <p class="bio_header">Ally Zeng</p>
                  <p class="bio_text">Organizer</p>
                  <p class="bio_text">of IA Christian Church</p>
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="faq">
        <img class="faq_img" :src="svgs.faq">
        <div class="faq_img_btm"/>
        <h2 class="faq_title">So...what exactly is Kunvet?</h2>
        <p class="faq_text">Kunvet is a job website designed to help you find the best local talent out there. Our mission is simple: to help you hire that perfect candidate while saving you a whole lot of time and money.</p>
        <h2 class="faq_title" style="padding-top: 50px; font-size: 20px;">Frequently Asked Questions</h2>
        <div style="margin-top: 20px;"
          v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 1, 'faq_question_div': question_num_mobile != 1}"
          @click="question_num_mobile = 1">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 1, 'faq_answer_title': question_num_mobile != 1}">
            Is Kunvet right for me?</h2><img v-if="question_num_mobile !== 1" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 1">
            <p class="faq_answers_text">Kunvet is a job platform designed to connect employers with candidates in their local community in a streamlined, efficient, economical hiring process.</p>
            <p class="faq_answers_text">If you’re a small business, startup, nonprofit or individual looking to hire from your local community, then yes, Kunvet is your spot! Kunvet is designed to help people find the best local talent out there.</p>
            <p class="faq_answers_text">Looking for an entry-level, part-time, temporary, internship or volunteer position? Kunvet is the place for you!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 2, 'faq_question_div': question_num_mobile != 2}"
          @click="question_num_mobile = 2">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 2, 'faq_answer_title': question_num_mobile != 2}">
            Is Kunvet a recruiting agency?</h2><img v-if="question_num_mobile !== 2" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 2">
            <p class="faq_answers_text">Nope! We’re just your friendly online local job board.</p>
            <p class="faq_answers_text">We are an online job platform that connects candidates with exciting, recent, relevant job opportunities in their local area. Employers post jobs on our site, and applicants check out those job postings and apply—simple as that. No meddling here!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 3, 'faq_question_div': question_num_mobile != 3}"
          @click="question_num_mobile = 3">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 3, 'faq_answer_title': question_num_mobile != 3}">
            How much does Kunvet cost?</h2><img v-if="question_num_mobile !== 3" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 3">
            <p class="faq_answers_text">Your Kunvet account is free! After that, it’s $9 per job. We offer both Personal and Business accounts—both with unique, helpful features perfect for your needs.</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 4, 'faq_question_div': question_num_mobile != 4}"
          @click="question_num_mobile = 4">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 4, 'faq_answer_title': question_num_mobile != 4}">
            What is the refund policy?</h2><img v-if="question_num_mobile !== 4" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 4">
            <p class="faq_answers_text">We offer the best refund policy out of most of our competitors in the market. If you are not completely satisfied with the service you received, let us know and we will gladly issue you a full refund immediately—no questions asked!</p>
            <p class="faq_answers_text">A friendly FYI: Our website is especially designed for small businesses, startups, nonprofits and individuals to find and hire local candidates. Looking to hire for entry-level, part-time, temporary, internship and volunteering opportunities? This is the place for you!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 5, 'faq_question_div': question_num_mobile != 5}"
          @click="question_num_mobile = 5">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 5, 'faq_answer_title': question_num_mobile != 5}">
            How does Kunvet work?</h2><img v-if="question_num_mobile !== 5" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 5">
            <p class="faq_answers_text">1. <strong>Post a job</strong>: Post your job for just $9 and it stays active for 30 days.</p>
            <p class="faq_answers_text">2. <strong>Wait for applications to come rolling in</strong>: If it’s a paid job, expect about 6–16 applications. If it’s an internship or unpaid job, expect about 5–10 applications.</p>
            <p class="faq_answers_text">3. <strong>Get hiring</strong>: Applicants apply, and we send their resumes (and CV if requested) to your email address and Kunvet account. You review the resumes and get going on finding your perfect candidate. That’s it—happy hiring!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 6, 'faq_question_div': question_num_mobile != 6}"
          @click="question_num_mobile = 6">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 6, 'faq_answer_title': question_num_mobile != 6}">
            What sets Kunvet apart from other sites?</h2><img v-if="question_num_mobile !== 6" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 6">
            <p class="faq_answers_text">Glad you asked! We know how hard it is to hire locally—we’ve been there.
              We designed a game-changing website just for you: locally focused, affordable, simple and effective. Easy as that.
            </p>
            <p class="faq_answers_text">It’s simple: We want to help you find the perfect candidate for the job. This is why we offer a pretty outstanding refund policy that we dare competitors to match.</p>
          </div>
        </div>
      </div>
      <div class="hands">
        <h2 class="coffee_title">How does Kunvet work?</h2>
        <v-window style="height: 778px;">
          <v-window-item style="text-align:center;">
            <div class="num_bar_container">
              <img :src="svgs.num1" class="nums">
              <div class="blackbar_p1"/>
            </div>
            <h2 class="hand_header">Post a Job</h2>
            <p class="hand_text">Job posting starts at just $9, stays active for 30 days, and literally takes minutes! Cancel any time.</p>
            <img class="single_hand" style="margin-left: 40px;" :src="pngs.hand1">
          </v-window-item>
          <v-window-item style="text-align:center;">
            <div class="num_bar_container">
              <img :src="svgs.num2" class="nums">
              <div class="blackbar_p2"/>
            </div>
            <h2 class="hand_header">Review Resumes</h2>
            <p class="hand_text">We send applicant resumes to your email and Kunvet account. If they’re not the stellar candidates you’re looking for, we’ll give you your money back!</p>
            <img class="single_hand" style="margin-left: 60px;" :src="pngs.hand2">
          </v-window-item>
          <v-window-item style="text-align:center;">
            <div class="num_bar_container">
              <img :src="svgs.num3" class="nums">
              <div class="blackbar_p3"/>
            </div>
            <h2 class="hand_header">Hire</h2>
            <p class="hand_text">Want to find that perfect hire? Explore talent in your area at just $9. Isn’t that just amazing?</p>
            <img class="single_hand" style="margin-left: 80px;" :src="pngs.hand3">
          </v-window-item>
        </v-window>
      </div>
      <div class="waste">
        <img class="warning_img" :src="svgs.warning">
        <div class="warning_img_btm"/>
        <h2 class="warning_title">Hire better, save money.</h2>
        <p class="warning_text">From exhausting interviews to spendy websites, hiring can be a drag. Kunvet cuts through all that, helping you hire the perfect candidate in no time. At merely $9, you can post a job and watch the applications flow in. Satisfaction guaranteed or your money back!</p>
        <p class="warning_text" style="font-weight: 600; padding-top: 50px; line-height: 100%;">Why should I choose Kunvet?</p>
        <p class="warning_text">Looking to hire locally? Have some entry-level, part-time, temporary job, internship or volunteering work that needs a stellar employee? Whether you’re a business or an individual, Kunvet is the place to be. Stop wasting time and money, and start hiring!</p>
      </div>
      <div class="refund">
        <div class="refund_main_div">
          <h2 class="refund_title">Not 100% happy? We’ll give you a full refund!</h2>
          <p class="refund_text">Your experience means the world to us. If you are not completely satisfied with our service, let us know and we’ll be happy to give you a full refund as soon as humanly possible. No questions asked.</p>
          <k-btn @click="routeGen()" class="refund_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 20px;">Post a Job</span></k-btn>
          <p class="refund_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
      <div class="versus">
        <img class="versus_img" :src="svgs.versus">
        <div class="versus_img_btm"/>

        <h2 class="versus_title">Kunvet vs. the competition</h2>
        <p class="versus_text">It’s no lie: We’re the little guy—kind of like David vs. Goliath. We like it that way. Check out how Kunvet stacks up to its big, corporate competitors.</p>
        <div class="compare_div">
          <h2 class="versus_subtitle">Nationwide Hiring for Large Companies</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most job websites out there are mostly used by big corporate enterprises for nationwide hiring. That’s their thing, not ours.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Kunvet is designed for local employers and businesses.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Local Hiring for Local Employers</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Your job easily gets pushed aside by jobs from large companies, which have hundreds of openings every day.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Kunvet is specifically designed for local businesses hiring locally. We make sure every local employer’s voice is heard equally.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Real Customer Support</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most companies only offer limited support, and some don’t even do that.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Kunvet offers real support! Our kind, helpful customer service reps are ready to help you at every turn.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Pricing Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Some job sites offer “click bid” pricing models, while others offer “job slots,” charging you even if you’re not hiring. Kunvet is different—we won’t waste your time or money.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">We keep it simple: Pay as you go, with no hidden costs. Easy, right?</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Refund Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              A refund can take almost a week—3 to 5 business days—to process. Not to mention the hoops you have to jump through to get it!
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Not happy? We’ll give you a full refund immediately, no questions!</p>
          </div>
        </div>

      </div>
      <div class="limited">
        <div class="limited_main_div">
            <h2 class="limited_title">Psst—Happy New Year!</h2>
            <p class="limited_text">Create an account today and celebrate 2020 with us! Enjoy job postings for just $9. Act now—offer available for a limited time only!</p>
            <k-btn @click="routeGen()" class="limited_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 20px;">Post a Job</span></k-btn>
            <p class="limited_undertext">Satisfaction guarateed. Or money back.</p>
          </div>
        </div>
    </div>
    <!-- xsmall size -->
    <div class="emp_page_content medium_hide mobile_hide small_hide xs_show">
      <div class="summary">
          <img class="summary_collage_students" :src="pngs.studentsMobile">
          <h2 class="summary_title">Hire up, spend less.</h2>
          <p class="summary_text">Hiring the perfect candidate should be easy, right? And it shouldn’t break the bank. Designed especially for local hiring, Kunvet helps you find the best candidates in your area, saving you both time and money on your next hire.</p>
          <k-btn @click="routeGen()" class="summary_btn"><span style="font-size: 22px !important; font-weight: bold;">Post a Job</span></k-btn>
          <p class="summary_btn_undertext">Satisfaction guarateed. Or money back.</p>
      </div>
      <div class="effective">
        <img class="effective_img" :src="svgs.gas">
        <div class="effective_img_btm"></div>
        <h2 class="effective_title">Does Kunvet really work?</h2>
        <p class="effective_text">The stats say it all: 7 in 10 employers hire a candidate on Kunvet, and 1 in 3 employers land the perfect candidate within 14 days. The best part? Each job posting starts only at $9. Not 100% happy? We’ll give you your money back, no questions asked!</p>
        <h2 class="effective_title" style="padding-top: 50px; font-size: 18px;">Some of Our Returning Employers</h2>
        <div class="logos_row">
          <img class="logo_style" style="margin-top: 0px;" :src="pngs.coderschool">
          <img class="logo_style" style="margin-right: 0px; margin-top: 0px;" :src="pngs.prolite">
          <img class="logo_style" :src="pngs.readingtown">
          <img class="logo_style" style="margin-right: 0px;" :src="pngs.cygolite">
          <img class="logo_style" :src="pngs.conroys">
          <img class="logo_style" style="margin-right: 0px;" :src="pngs.seacrest">
          <img class="logo_style" :src="pngs.banban">
          <img class="logo_style" style="margin-right: 0px;" :src="pngs.newportpark">
        </div>
      </div>
      <div style="width: 100%;">
        <v-carousel class="hire_monials testimonials" cycle interval="100000000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">Wow... I recommend Kunvet to every small business. It has
                helped us find many talented and enthusiastic candidates
                from Orange County to serve as our Code Coaches. The
                quality of the resumes of those who applied through
                Kunvet exceeded our expectations. We’re grateful to the
                Kunvet site organizers for providing this valuable service!</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.mark"/>
                <div class="bio_text_div">
                  <p class="bio_header">Mark Freedkin</p>
                  <p class="bio_text">General Manager</p>
                  <p class="bio_text">of theCoderSchool - Irvine</p>
                </div>
              </div>
              <p class="test_undertext"> — <a href="https://www.thecoderschool.com/locations/irvine/" target="_blank"
                style="text-decoration: underline; cursor: pointer;">theCoderSchool at Irvine</a>
                 offers a specialized after-school enrichment program that teaches young students (ages 7-18) how to write
                computer software.</p>
            </div>
            <div style="height: 82px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">See what local organizations are saying!</h2>
              <p class="quote">“</p><p class="test_text">This is Ally, from Irvine Agape Christian Church, again :)
                My Pastor Chen wants to say Thank You. We've been searching for a caring and passionate teacher for a long time.
                 We've also spent plenty of money on other websites already but didn’t find who we are looking for.
                 Thanks to you guys, we finally found the ideal applicant to fill in the position! God bless you.</p>
              <div class="bio">
                <img class="bio_img" :src="pngs.ally"/>
                <div class="bio_text_div">
                  <p class="bio_header">Ally Zeng</p>
                  <p class="bio_text">Organizer</p>
                  <p class="bio_text">of IA Christian Church</p>
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="faq">
        <img class="faq_img" :src="svgs.faq">
        <div class="faq_img_btm"/>
        <h2 class="faq_title">So...what exactly is Kunvet?</h2>
        <p class="faq_text">Kunvet is a job website designed to help you find the best local talent out there. Our mission is simple: to help you hire that perfect candidate while saving you a whole lot of time and money.</p>
        <h2 class="faq_title" style="padding-top: 44px; font-size: 18px; line-height: 120%;">Frequently Asked Questions</h2>
        <div style="margin-top: 20px;"
          v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 1, 'faq_question_div': question_num_mobile != 1}"
          @click="question_num_mobile = 1">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 1, 'faq_answer_title': question_num_mobile != 1}">
            Is Kunvet right for me?</h2><img v-if="question_num_mobile !== 1" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 1">
            <p class="faq_answers_text">Kunvet is a job platform designed to connect employers with candidates in their local community in a streamlined, efficient, economical hiring process.</p>
            <p class="faq_answers_text">If you’re a small business, startup, nonprofit or individual looking to hire from your local community, then yes, Kunvet is your spot! Kunvet is designed to help people find the best local talent out there.</p>
            <p class="faq_answers_text">Looking for an entry-level, part-time, temporary, internship or volunteer position? Kunvet is the place for you!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 2, 'faq_question_div': question_num_mobile != 2}"
          @click="question_num_mobile = 2">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 2, 'faq_answer_title': question_num_mobile != 2}">
            Is Kunvet a recruiting agency?</h2><img v-if="question_num_mobile !== 2" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 2">
            <p class="faq_answers_text">Nope! We’re just your friendly online local job board.</p>
            <p class="faq_answers_text">We are an online job platform that connects candidates with exciting, recent, relevant job opportunities in their local area. Employers post jobs on our site, and applicants check out those job postings and apply—simple as that. No meddling here!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 3, 'faq_question_div': question_num_mobile != 3}"
          @click="question_num_mobile = 3">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 3, 'faq_answer_title': question_num_mobile != 3}">
            How much does Kunvet cost?</h2><img v-if="question_num_mobile !== 3" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 3">
            <p class="faq_answers_text">Your Kunvet account is free! After that, it’s $9 per job. We offer both Personal and Business accounts—both with unique, helpful features perfect for your needs.</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 4, 'faq_question_div': question_num_mobile != 4}"
          @click="question_num_mobile = 4">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 4, 'faq_answer_title': question_num_mobile != 4}">
            What is the refund policy?</h2><img v-if="question_num_mobile !== 4" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 4">
            <p class="faq_answers_text">We offer the best refund policy out of most of our competitors in the market. If you are not completely satisfied with the service you received, let us know and we will gladly issue you a full refund immediately—no questions asked!</p>
            <p class="faq_answers_text">A friendly FYI: Our website is especially designed for small businesses, startups, nonprofits and individuals to find and hire local candidates. Looking to hire for entry-level, part-time, temporary, internship and volunteering opportunities? This is the place for you!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 5, 'faq_question_div': question_num_mobile != 5}"
          @click="question_num_mobile = 5">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 5, 'faq_answer_title': question_num_mobile != 5}">
            How does Kunvet work?</h2><img v-if="question_num_mobile !== 5" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 5">
            <p class="faq_answers_text">1. <strong>Post a job</strong>: Post your job for just $9 and it stays active for 30 days.</p>
            <p class="faq_answers_text">2. <strong>Wait for applications to come rolling in</strong>: If it’s a paid job, expect about 6–16 applications. If it’s an internship or unpaid job, expect about 5–10 applications.</p>
            <p class="faq_answers_text">3. <strong>Get hiring</strong>: Applicants apply, and we send their resumes (and CV if requested) to your email address and Kunvet account. You review the resumes and get going on finding your perfect candidate. That’s it—happy hiring!</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num_mobile === 6, 'faq_question_div': question_num_mobile != 6}"
          @click="question_num_mobile = 6">
          <h2 v-bind:class="{ 'faq_answer_title_sel': question_num_mobile === 6, 'faq_answer_title': question_num_mobile != 6}">
            What sets Kunvet apart from other sites?</h2><img v-if="question_num_mobile !== 6" class="faq_plus" :src="svgs.plusSign">
          <div v-if="question_num_mobile === 6">
            <p class="faq_answers_text">Glad you asked! We know how hard it is to hire locally—we’ve been there.
              We designed a game-changing website just for you: locally focused, affordable, simple and effective. Easy as that.
            </p>
            <p class="faq_answers_text">It’s simple: We want to help you find the perfect candidate for the job. This is why we offer a pretty outstanding refund policy that we dare competitors to match.</p>
          </div>
        </div>
      </div>
      <div class="hands">
        <h2 class="coffee_title">How does Kunvet work?</h2>
        <v-window style="height: 778px;">
          <v-window-item style="text-align:center;">
            <div class="num_bar_container">
              <img :src="svgs.num1" class="nums">
              <div class="blackbar_p1"/>
            </div>
            <h2 class="hand_header">Post a Job</h2>
            <p class="hand_text">Job posting starts at just $9, stays active for 30 days, and literally takes minutes! Cancel any time.</p>
            <img class="single_hand" style="margin-left: 40px;" :src="pngs.hand1">
          </v-window-item>
          <v-window-item style="text-align:center;">
            <div class="num_bar_container">
              <img :src="svgs.num2" class="nums">
              <div class="blackbar_p2"/>
            </div>
            <h2 class="hand_header">Review Resumes</h2>
            <p class="hand_text">We send applicant resumes to your email and Kunvet account. If they’re not the stellar candidates you’re looking for, we’ll give you your money back!</p>
            <img class="single_hand" style="margin-left: 60px;" :src="pngs.hand2">
          </v-window-item>
          <v-window-item style="text-align:center;">
            <div class="num_bar_container">
              <img :src="svgs.num3" class="nums">
              <div class="blackbar_p3"/>
            </div>
            <h2 class="hand_header">Hire</h2>
            <p class="hand_text">Want to find that perfect hire? Explore talent in your area at just $9. Isn’t that just amazing?</p>
            <img class="single_hand" style="margin-left: 80px;" :src="pngs.hand3">
          </v-window-item>
        </v-window>
      </div>
      <div class="waste">
        <img class="warning_img" :src="svgs.warning">
        <div class="warning_img_btm"/>
        <h2 class="warning_title">Hire better, save money.</h2>
        <p class="warning_text">From exhausting interviews to spendy websites, hiring can be a drag. Kunvet cuts through all that, helping you hire the perfect candidate in no time. At merely $9, you can post a job and watch the applications flow in. Satisfaction guaranteed or your money back!</p>
        <p class="warning_text" style="font-weight: 600; padding-top: 44px; line-height: 120%;">Why should I choose Kunvet?</p>
        <p class="warning_text" style="padding-top: 20px;">Looking to hire locally? Have some entry-level, part-time, temporary job, internship or volunteering work that needs a stellar employee? Whether you’re a business or an individual, Kunvet is the place to be. Stop wasting time and money, and start hiring!</p>
      </div>
      <div class="refund">
        <div class="refund_main_div">
          <h2 class="refund_title">Not 100% happy? We’ll give you a full refund!</h2>
          <p class="refund_text">Your experience means the world to us. If you are not completely satisfied with our service, let us know and we’ll be happy to give you a full refund as soon as humanly possible. No questions asked.</p>
          <k-btn @click="routeGen()" class="refund_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 20px;">Post a Job</span></k-btn>
          <p class="refund_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
      <div class="versus">
        <img class="versus_img" :src="svgs.versus">
        <div class="versus_img_btm"/>

        <h2 class="versus_title">Kunvet vs. the competition</h2>
        <p class="versus_text">It’s no lie: We’re the little guy—kind of like David vs. Goliath. We like it that way. Check out how Kunvet stacks up to its big, corporate competitors.</p>
        <div class="compare_div">
          <h2 class="versus_subtitle">Nationwide Hiring for Large Companies</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most job websites out there are mostly used by big corporate enterprises for nationwide hiring. That’s their thing, not ours.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Kunvet is designed for local employers and businesses.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Local Hiring for Local Employers</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Your job easily gets pushed aside by jobs from large companies, which have hundreds of openings every day.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Kunvet is specifically designed for local businesses hiring locally. We make sure every local employer’s voice is heard equally.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Real Customer Support</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most companies only offer limited support, and some don’t even do that.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Kunvet offers real support! Our kind, helpful customer service reps are ready to help you at every turn.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Pricing Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Some job sites offer “click bid” pricing models, while others offer “job slots,” charging you even if you’re not hiring. Kunvet is different—we won’t waste your time or money.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">We keep it simple: Pay as you go, with no hidden costs. Easy, right?</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Refund Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              A refund can take almost a week—3 to 5 business days—to process. Not to mention the hoops you have to jump through to get it!
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Not happy? We’ll give you a full refund immediately, no questions!</p>
          </div>
        </div>

      </div>
      <div class="limited">
        <div class="limited_main_div">
          <h2 class="limited_title">Psst—Happy New Year!</h2>
          <p class="limited_text">Create an account today and celebrate 2020 with us! Enjoy job postings for just $9. Act now—offer available for a limited time only!</p>
          <k-btn @click="routeGen()" class="limited_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 20px;">Post a Job</span></k-btn>
          <p class="limited_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import students from '@/assets/hire/smiling_job_applicants.png';
import studentsMobile from '@/assets/hire/job-applicants-smiling-mobile.png';
import coderschool from '@/assets/hire/companys/coderschool.png';
import prolite from '@/assets/hire/companys/prolite.png';
import readingtown from '@/assets/hire/companys/readingtown.png';
import cygolite from '@/assets/hire/companys/cygolite.png';
import conroys from '@/assets/hire/companys/conroys.png';
import seacrest from '@/assets/hire/companys/seacrest.png';
import banban from '@/assets/hire/companys/banban.png';
import newportpark from '@/assets/hire/companys/newportpark.png';
import mark from '@/assets/hire/testimonials/MarkCoderSchool.png';
import ally from '@/assets/hire/testimonials/ally-zeng-profile-picture.png';
import handsDesk from '@/assets/hire/emp_pg_icons/kunvet-post-job-demonstration-desktop.png';
import handsMed from '@/assets/hire/emp_pg_icons/posting-a-job-on-kunvet-demonstration-medium.png';
import hand1 from '@/assets/hire/emp_pg_icons/post-a-job-step-1.png';
import hand2 from '@/assets/hire/emp_pg_icons/review-resumes-step-2.png';
import hand3 from '@/assets/hire/emp_pg_icons/give-job-offer-step-3.png';
import gas from '@/assets/hire/emp_pg_icons/gas.svg';
import faq from '@/assets/hire/emp_pg_icons/faq.svg';
import coffee from '@/assets/hire/emp_pg_icons/coffee.svg';
import stepsDesk from '@/assets/hire/emp_pg_icons/steps-desktop.svg';
import stepsMed from '@/assets/hire/emp_pg_icons/steps-medium.svg';
import warning from '@/assets/hire/emp_pg_icons/warning.svg';
import refund from '@/assets/hire/emp_pg_icons/return.svg';
import versus from '@/assets/hire/emp_pg_icons/boxing.svg';
import company from '@/assets/hire/emp_pg_icons/company.svg';
import gradlogo from '@/assets/hire/emp_pg_icons/gradient_logo.svg';
import discount from '@/assets/hire/emp_pg_icons/discount.svg';
import plusSign from '@/assets/hire/emp_pg_icons/plus-sign.svg';
import num1 from '@/assets/hire/emp_pg_icons/one.svg';
import num2 from '@/assets/hire/emp_pg_icons/two.svg';
import num3 from '@/assets/hire/emp_pg_icons/three.svg';
import userDataProvider from '@/userDataProvider';

export default {
  metaInfo: {
    title: 'Post a Job | Kunvet',
    meta: [
      { name: 'description', content: 'Save a ton of money on your hiring by using Kunvet now. Satisfaction guaranteed. Or money back.' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  },
  props: {
    slide_display: {
      type: Number,
      default: 1,
    },
    question_num: {
      type: Number,
      default: 3,
    },
    question_num_mobile: {
      type: Number,
    },
  },
  data() {
    return {
      svgs: {
        gas: gas,
        faq: faq,
        coffee: coffee,
        stepsDesk: stepsDesk,
        stepsMed: stepsMed,
        warning: warning,
        refund: refund,
        versus: versus,
        company: company,
        gradlogo: gradlogo,
        discount: discount,
        plusSign: plusSign,
        num1: num1,
        num2: num2,
        num3: num3,
      },
      pngs: {
        students: students,
        studentsMobile: studentsMobile,
        coderschool: coderschool,
        prolite: prolite,
        readingtown: readingtown,
        cygolite: cygolite,
        conroys: conroys,
        seacrest: seacrest,
        banban: banban,
        newportpark: newportpark,
        mark: mark,
        ally: ally,
        handsDesk: handsDesk,
        handsMed: handsMed,
        hand1: hand1,
        hand2: hand2,
        hand3: hand3,
      },
      account_type: '',
    };
  },
  methods: {
    routeGen() {
      userDataProvider.getUserData().then(data => {
        if (data.acct === 0) {
          this.$router.push('/jobs/create');
        } else if (data.acct === 2) {
          this.$router.push('/jobs/create');
        } else {
          this.$router.push('/jobs/search');
        }
      });
    },
  },
};
</script>
