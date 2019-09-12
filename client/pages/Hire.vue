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
    font-size: 44px;
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
    vertical-align: middle;
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
    padding-top: 80px;
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
    color: white;
  }
  .test_text{
    padding-top: 30px;
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
  .limited_main_img{
    max-width: 700px;
    height: 485px;
    margin-top: 120px;
    margin: 120px auto 0;
  }
  .limited_main_div{ 
    max-width: 700px;
    margin: -490px auto 0;
    margin-bottom: 120px;
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
    width: 48%;
    max-height: 395.2px;
    margin-right: 6%;
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
    width: 736px;
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
    font-size: 20px;
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
    font-size: 20px;
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
  .limited_main_img{
    max-width: 700px;
    height: 485px;
    margin-top: 120px;
    margin: 120px auto 0;
  }
  .limited_main_div{ 
    max-width: 700px;
    margin: -490px auto 0;
    margin-bottom: 120px;
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
    font-size: 20px;
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
@media (max-width: 800px) {
  .mobile_hide{
    display: none !important;
  }
  .emp_page_content{
    padding-top: 36px;
  }
  .summary{
    width: 100vw;
    margin-left: 0px;
  }
  .summary_text_div{
    width: 100vw;
    padding-left: 20px;
    padding-right: 20px;
  }
  .summary_title{
    padding-top: 60px;
    font-weight: bold;
    font-family: proxima-nova, sans-serif;
    font-size: 32px;
    color: #FF6968;
  }
  .summary_text{
    font-size: 16px;
    font-weight: bold;
    font-family: proxima-nova, sans-serif;
    padding-top: 12px;
    color: black;
  }
  .summary_btn{
    width: 220px;
    height: 68px !important;
    line-height: 68px !important;
    margin-top: 40px;
    color: white;
    font-weight: bold; 
  }
  .summary_collage_students{
    width: 100vw;
  }
  .effective{
    width: 100vw;
    margin-left: 0px;
  }
  .effective_img{
    width: 64px;
    margin-left: calc(50vw - 32px);
    margin-top: 120px;
    margin-bottom: 11px;
  }
  .effective_img_btm{
    width: 70px; 
    margin-left: calc( 50vw - 35px ); 
    height:4px; 
    background-color:black;
  }
  .effective_title{
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: bold;
    font-family: proxima-nova, sans-serif;
    text-align: center;
    font-size: 24px;
    color: black;
  }
  .effective_text{
    padding-top: 30px;
    padding-left:30px;
    padding-right: 30px;
    font-family: proxima-nova, sans-serif; 
    text-align: center;
    font-size: 16px;
    color: black;
  }
  .logo_style{
    width: calc(50vw - 20px);
    padding-bottom: 20px;
  }
  .testimonials{
    margin-top: 120px;
    background: linear-gradient(to right, #FF5F6D 0%, #FFC371 170%);
  }
  .slide_info{
    width: 100vw;
    padding-top: 60px;
    padding-left: 24px;
    padding-right: 24px;
  }
  .test_title{
    font-weight: bold;
    font-family: proxima-nova, sans-serif; 
    font-size: 24px;
    color: white;
  }
  .test_text{
    padding-top: 30px;
    width: 80vw;
    font-family: proxima-nova, sans-serif; 
    font-size: 18px;
    font-weight: 100;
    color: white;
  }
  .quote{
    margin-left: -18px;
    font-size: 36px;
    line-height: 18px;
  }
  .bio{
    padding-top: 20px;
    height: 68px;
  }
  .bio_img{
    height: 64px;
    display: inline-block;
  }
  .bio_header{
    font-size: 16px;
    color: white;
    font-weight: bold;
    margin-bottom: 0px;
  }
  .bio_text{
    font-size: 14px;
    color: white;
    margin-bottom: 0px;
  }
  .test_undertext{
    font-family: proxima-nova, sans-serif; 
    font-weight: 100;
    font-size: 16px;
    color: white;
    padding-top: 44px;
    width: 100%;
  }
  .faq{
    width: 100vw;
    margin-left: 0px;
  }
  .faq_img{
    width: 68px;
    margin-left: calc( 50vw - 34px );
    margin-top: 120px;  
    margin-bottom: 4px;
  }
  .faq_img_btm{
    width: 70px;
    margin-left: calc( 50vw - 34px );
    height:4px; 
    background-color:black;
  }
  .faq_title{
    padding-top: 30px;
    padding-left: 24px;
    padding-right: 24px;
    font-weight: bold;
    font-family: proxima-nova, sans-serif;
    text-align: center;
    font-size: 24px;
    color: black;
  }
  .faq_text{
    padding-top: 30px;
    padding-left:24px;
    padding-right: 24px;
    font-family: proxima-nova, sans-serif; 
    text-align: center;
    font-size: 16px;
    color: black;
  }
  .faq_question_div{
    width: 90vw; 
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: #ccc 0px 2px 2px;
    border-radius: 2px;
    background-color: #FAFBFD;
    padding-left: 30px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    font-family: proxima-nova, sans-serif; 
  }
  .faq_question_div_sel{
    width: 90vw; 
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: #ccc 0px 2px 2px;
    border-radius: 2px;
    background-color: #FAFBFD;
    padding-left: 30px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid black;
    cursor: pointer;
    font-family: proxima-nova, sans-serif; 
  }
  .faq_answers_text{
    padding-top: 10px;
    padding-right: 24px;
    font-size: 16px;
    font-weight: normal;
    font-family: proxima-nova, sans-serif; 
  }
  .coffee_img{
    width: 52px; 
    margin-top: 60px; 
    margin-left: calc( 50vw - (52px / 2)); 
    margin-bottom: 6px;
  }
  .coffee_img_btm{
    width: 70px;
    margin-left: calc( 50vw - (70px / 2));
    height:4px; 
    background-color:black;
  }
  .coffee_title{
    width: 100vw;
    padding-top: 28px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif; 
    text-align: center;
    font-size: 24px;
    color: black;
  }
  .coffee_btm{
    margin-left: 94px;
    margin-top: 84px;
    height: 500px;
    width: 100%;
  }
  .hands{
    width: 100vw;
    padding-top: 60px;
    height: 860px;
  }
  .nums{
    height: 50px;
    width: 50px;
    z-index: 100;
  }
  .blackbar_p1{
    height: 2px;
    background-color: black;
    width: 50vw;
    margin-left: 50vw;
    margin-top: -32px;
    z-index: 1;
  }
  .blackbar_p2{
    height: 2px;
    background-color: black;
    width: 100vw;
    margin-top: -32px;
    z-index: 1;
  }
  .blackbar_p3{
    height: 2px;
    background-color: black;
    width: 50vw;
    margin-top: -32px;
    z-index: 1;
  }
  .hand_header{
    font-size: 18px;
    padding-top: 20px;
    font-weight: bold;
    color: black;
    font-family: proxima-nova, sans-serif; 
  }
  .hand_text{
    color: black;
    font-size: 16px;
    font-family: proxima-nova, sans-serif; 
    padding-left: 52px; 
    padding-right: 52px;
  }
 .waste{
    width: 100vw;
    padding-top: 80px;
  }
  .warning_img_btm{
    width: 80px; 
    margin-top: 12px;
    margin-left: calc(50vw - 40px);
    height:4px; 
    background-color:black;
  }
  .warning_title{
    font-size: 24px;
    color: black;
    font-weight: bold;
    font-family: proxima-nova, sans-serif;
    padding-top: 30px;
    text-align: center;
  }
  .warning_text{
    font-size: 16px;
    color: black;
    font-family: proxima-nova, sans-serif;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
  }
  .grey_warning{
    font-size: 14px;
    color: grey;
    font-family: proxima-nova, sans-serif;
    padding-top: 24px;
    text-align: center;
  }
  .refund{
    width: 100vw;
    margin-left: 0px; 
  }
  .refund_img_btm{
    width: 80px; 
    margin-top: 12px;
    margin-left: calc( 50vw - 40px); 
    height:4px; 
    background-color:black;
  }
  .refund_title{
    font-size: 24px;
    color: black;
    font-weight: bold;
    font-family: proxima-nova, sans-serif;
    padding-top: 28px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  .refund_text{
    font-size: 16px;
    color: black;
    font-family: proxima-nova, sans-serif;
    padding-top: 20px;
    padding-left: 24px;
    padding-right: 24px;  
    text-align: center;
  }
  .refund_btn{
    width: 220px;
    height: 68px !important;
    line-height: 68px !important;
    background-image: linear-gradient(to right, #7F7FD5 0%, #86A8E7 51%, #8AB4FF 100%) !important;
    margin-top: 44px;
    margin-left: calc( 50vw - 110px); 
    color: white;
    font-weight: bold; 
  }
  .refund_undertext{
    padding-top: 2px;
    color: black;
    text-align: center;
    font-family: proxima-nova, sans-serif;
    font-size: 16px;
    font-weight: bold;
  }
  .versus{
    width: 100vw;
    margin-left: 0px; 
  }
  .versus_img_btm{
    width: 80px; 
    margin-top: 12px;
    margin-left: calc( 50vw - 40px); 
    height:4px; 
    background-color:black;
  }
  .versus_title{
    font-size: 24px;
    color: black;
    font-weight: bold;
    font-family: proxima-nova, sans-serif;
    padding-top: 28px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  .versus_text{
    font-size: 16px;
    color: black;
    font-family: proxima-nova, sans-serif;
    padding-top: 30px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  .versus_subtitle{
    font-size: 16px;
    color: black;
    font-weight: bold;
    font-family: proxima-nova, sans-serif;
    padding-top: 54px;
    text-align: center;
  }
  .versus_subdiv{
    padding-bottom: 40px;
  }
  .versus_company_img{
    width: 68px; 
    margin-top: 48px; 
    display: inline-block;
  }
  .versus_subtext{
    vertical-align: top;
    padding-left: 20px;
    padding-top: 20px;
    width: calc(70vw - 20px);
    color: black;
    font-size: 16px;
    font-family: proxima-nova, sans-serif;
    display: inline-block;
    text-align: left;
  }
  .versus_subtext2{
    vertical-align: top;
    padding-top: 20px;
    padding-left: 20px;
    width: calc(70vw - 20px);
    color: black;
    font-size: 16px;
    font-family: proxima-nova, sans-serif;
    display: inline-block;
    text-align: left;
  }
  .versus_kunvet_logo{
    width: 48px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 20px;
    display: inline-block;
  }
  .limited{
    width: 100vw;
    margin-left: 0px; 
  }
  .limited_img_btm{
    width: 80px; 
    margin-top: 12px;
    margin-left: calc( 50vw - 40px); 
    height:4px; 
    background-color:black;
  }
  .limited_title{
    font-size: 24px;
    color: black;
    font-weight: bold;
    font-family: proxima-nova, sans-serif;
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  .limited_text{
    font-size: 16px;
    color: black;
    font-family: proxima-nova, sans-serif;
    padding-top: 20px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  .limited_btn{
    width: 220px;
    height: 68px !important;
    line-height: 68px !important;
    margin-top: 40px;
    margin-left: calc( 50vw - 110px);
    color: white;
    font-weight: bold; 
  }
  .limited_undertext{
    padding-top: 2px;
    color: black;
    text-align: center;
    font-family: proxima-nova, sans-serif;
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 140px;
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
</style>
<template>
  
  <div class="employer_page">
    <h1 style="width: 1px; height: 1px; color: white; font-size: 1px;">Employer Post a Job</h1>
    <!-- regular size -->
    <div class="emp_page_content medium_hide mobile_hide">
      <div class="summary">
        <div class="summary_text_div">
          <h2 class="summary_title">How to find the right person with almost no cost?</h2>
          <p class="summary_text">Finding the right person can be painless and costless-only if you choose the right tool. 
            Designed for local hiring, Kunvet can save you time and money on your next hire.</p>
          <k-btn @click="routeGen()" class="summary_btn"><span style="font-size: 22px !important; font-weight: bold;">Post a Job</span></k-btn>
          <p class="summary_btn_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
        <img class="summary_collage_students" :src="pngs.students">
      </div>
      <div class="effective">
        <img class="effective_img" :src="svgs.gas">
        <div class="effective_img_btm"></div>
        <h2 class="effective_title">How Effective is Kunvet?</h2>
        <p class="effective_text">Every 1 in 3 employers found the right candidate in the 14 days on Kunvet. 
          Overall, every 6.5 out of 10 employers found a hire through Kunvet. Best of all, each job posting starts at
           only 80¢ per day. Satisfaction guaranteed. Or money back.</p>
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
              <h2 class="test_title">Kunvet is great for every local organization.</h2>
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
              <h2 class="test_title">Kunvet is great for every local organization.</h2>
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
        <h2 class="faq_title">What is Kunvet?</h2>
        <p class="faq_text">Simply put, Kunvet is a professional job website made for local hiring.
           Unlike other job websites, we want to help you find the right person efficiently in your local area.</p>
        <h2 class="faq_title" style="padding-top: 70px; font-size: 24px;">Frequently Asked Questions</h2>
        <div class="faq_box">
          <div class="faq_questions">
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 1, 'faq_question_div': question_num != 1}" @click="question_num = 1" style="margin-top: 0px;">Is Kunvet right for me?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 2, 'faq_question_div': question_num != 2}" @click="question_num = 2">Is Kunvet a recruiting agency?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 3, 'faq_question_div': question_num != 3}" @click="question_num = 3">How much does it cost to use Kunvet?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 4, 'faq_question_div': question_num != 4}" @click="question_num = 4">What is the refund policy?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 5, 'faq_question_div': question_num != 5}" @click="question_num = 5">How does Kunvet work?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 6, 'faq_question_div': question_num != 6}" @click="question_num = 6">How is Kunvet different from others?</div>
          </div>
          <div class="faq_answers">
            <div class="faq_answers_div" v-if="question_num === 1">
              <div style=";">
              <h2 class="faq_answers_title">Is Kunvet right for me?</h2>
              <p class="faq_answers_text">Kunvet is for small business, startup, non-profit, and individual who are looking
                to hire locally.</p>
              <p class="faq_answers_text">Kunvet is a job platform made for the local community for a costless and effcient hiring
                process.</p>
              <p class="faq_answers_text">Entry-level, part-time, temporary job, internship,
                volunteering opportunity are especially popular
                on Kunvet</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 2">
              <div style="">
              <h2 class="faq_answers_title">Is Kunvet a recruiting agency?</h2>
              <p class="faq_answers_text">No. We are not a recruiting agency.</p>
              <p class="faq_answers_text">Instead, we are an online job platform where local people find new opportunities. They
                come to our website, see your job posting, and apply to it directly</p>
              <p class="faq_answers_text">We do not interfere with your hiring process. We only show your posting to them.</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 3">
              <div style="">
              <h2 class="faq_answers_title">How much does it cost to use Kunvet?</h2>
              <p class="faq_answers_text">It is free to get an account, but we charge for each job that you post.</p>
              <p class="faq_answers_text">The cost of each job postings is from 80¢ to $1 per day, depending on the type
                of account you choose. We offer two types of account—Personal and Business—and each type of the accounts has
                different features.</p>
              <p class="faq_answers_text">To learn more about what each type of the accounts can do, 
                please visit our <span style="font-weight: bold; color: #FF6766 !important;"> <router-link to="/pricing" target="_blank"> pricing page</router-link></span>.</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 4">
              <div style="">
              <h2 class="faq_answers_title">What is the refund policy?</h2>
              <p class="faq_answers_text">We have the strongest refund policy among most of the competitors in the market.
                If you are not completely satisfied with the service you received, we are glad to issue you a full
                  refund on your inquiry.</p>
              <p class="faq_answers_text">We want to remind you that our website is designed for local hiring for small business,
                startup, non-profit, and individual. The popular opportunities on Kunvet are entry-level, part-time, temporary job,
                internship, and volunteering</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 5">
              <div style="">
              <h2 class="faq_answers_title">How does Kunvet work?</h2>
              <p class="faq_answers_text">1. Post a job. Each job postings starts at $5 and stays active for 60 days.</p>
              <p class="faq_answers_text">2. Wait for people to apply to your job. If you offer a paid job, you can expect about
                6-16 applications. If you offer an internship or unpaid job, you can expect about 5-10 applications. All
                  depend on the type of opportunity you offer.</p>
              <p class="faq_answers_text">3. Resumes (and CV if you requested for one) are sent to your email. 
                You can also find and manage all resumes you have received in your account.</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 6">
              <div style="">
              <h2 class="faq_answers_title">How is Kunvet different from other sites?</h2>
              <p class="faq_answers_text">Great question. We know the struggles you face when trying to hire somebody from your
                local area.</p>
              <p class="faq_answers_text">So, we created a website that is entirely designed for your needs: simple, cheap, but
                effective at the same time</p>
              <p class="faq_answers_text">We truly want to help you find the right person, which is why we have a strong refund
                policy that most competitors cannot match.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="how_works">
        <div class="coffee_money">
          <h2 class="coffee_title">How Does Kunvet Work?</h2>
          <div style="text-align: center;"> <img class="one_two_three_line" :src="svgs.stepsDesk"> </div>
          <div class="hands">
            <div class="hand_one" style="margin-left: 0px;">
              <h2 class="hand_header_1">Post a Job</h2>
              <p class="hand_text_1">It takes only about 5 min to post a job. Each job posting starts at <span style="font-weight:bold;">only 80¢ per day</span>! Cancel anytime.</p>
            </div>
            <div class="hand_two" style="margin: 0 120px;">
              <h2 class="hand_header_2">Review Resumes</h2>
              <p class="hand_text_2">Applicant’s resume is sent to your email and to your Kunvet account. 
                If you are not happy with the resumes you received, we will issue a <span style="font-weight:bold;">full refund</span>.</p>
            </div>
            <div class="hand_three" style="margin-right: 0px;">
              <h2 class="hand_header_3">Hire</h2>
              <p class="hand_text_3">Voila! Starting at <span style="font-weight:bold;">only 80¢ per day</span>, you can explore all the talents near
                you and pick your ideal hire.</p>
            </div>
          </div>
          <img class="hands_img" :src="pngs.handsDesk">
        </div>
      </div>
      <div class="waste">
        <img class="warning_img" :src="svgs.warning">
        <div class="warning_img_btm"/>
        <h2 class="warning_title">Stop Wasting Your Time or Money!</h2>
        <p class="warning_text">Trying to hire someone without a job website can consume a lot of your energy and time,
           but posting jobs on websites can be really expensive. However, on Kunvet, you can get the best of both worlds!
            Find the right person quickly and inexpensively at the same time! Each job posting starts at only 80¢ per day. 
            If you are not completely satisfied, we will issue a full refund.</p>
        <p class="warning_text" style="font-weight: 600; padding-top: 70px; line-height: 100%;">Is Kunvet Right for Me?</p>
        <p class="warning_text">Kunvet is effective for people or businesses that hire locally and offer entry-level,
           part-time, temporary job, internship, or volunteering. If that describes you or your business, you have to
            try Kunvet now. Stop wasting your time and money on hiring.</p>
      </div>
      <div class="refund">
        <h2 class="refund_title">Full Refund. No Question Asked.</h2>
        <p class="refund_text">Your experience means everything to us. If you are not completely satisfied with
          the service you have received, get a <span style="font-weight:bold;">full refund</span> immediately on your inquiry.
          No question will be asked. Click on the button below, and start hiring now.</p>
        <k-btn @click="routeGen()" class="refund_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 22px;">Post a Job</span></k-btn>
        <p class="refund_undertext">Satisfaction guarateed. Or money back.</p>
      </div>
      <div class="versus">
        <img class="versus_img" :src="svgs.versus">
        <div class="versus_img_btm"/>

        <h2 class="versus_title">Kunvet.com vs. Competitors</h2>
        <p class="versus_text">See it for yourself why you should be using Kunvet now, 
          especially if you hire locally. Below is a side-by-side comparison between Kunvet and its competitors.</p>        
        <div class="compare_div">
          <h2 class="versus_subtitle">Nationwide Hiring for Large Companies</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most job websites in the market are heavily used by large
              enterprises for nationwide hiring. These websites are pretty
              effective for this purpose.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">That is not what and whom Kunvet is made for.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Local Hiring for Local Employers</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Your job will most likely be pushed aside by jobs from large
              companies, which have hundreds of openings every day.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Our website is completely designed for local businesses
              that are hiring locally. Every local employer’s voice will be
              heard equally.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Real Customer Support</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Plenty of companies only offer imited support. Some
              companies do not offer any real support.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Of course! We offer real support. Our customer service reps
              are nice, polite people.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Pricing Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Some offer unintuitive pricing model such as “click bids”.
              Some offer “job slots” that charges you every month,
              regardless whether you are hiring or not.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Simple. Pay as you go. No hidden costs.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Refund Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Refunds that take 3 - 5 business days to process. Get ready
              to be bombard with questions before you can see a penny.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Not Happy? Full refund immediately. No Question Asked.</p>
          </div>
        </div>

      </div>
      <div class="limited">
        <img class="limited_main_img" :src="svgs.backgroundUrl">
        <div class="limited_main_div">
          <h2 class="limited_title">Limited Offer for Local Businesses</h2>
          <p class="limited_text">If you create a business account today, you can access all the employer features
             on Kunvet and enjoy 50% off for all your job postings—discount available for a limited time only.</p>
          <k-btn @click="routeGen()" class="limited_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 18px;">Post a Job</span></k-btn>
          <p class="limited_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
    </div>
    <!-- Ipad size -->
    <div class="emp_page_content medium_show mobile_hide">
      <div class="summary">
        <div class="summary_text_div">
          <h2 class="summary_title">How to find the right person with almost no cost?</h2>
          <p class="summary_text">Finding the right person can be painless and costless-only if you choose the right tool. 
            Designed for local hiring, Kunvet can save you time and money on your next hire.</p>
          <k-btn @click="routeGen()" class="summary_btn"><span style="font-size: 22px !important; font-weight: bold;">Post a Job</span></k-btn>
          <p class="summary_btn_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
        <img class="summary_collage_students" :src="pngs.students">
      </div>
      <div class="effective">
        <img class="effective_img" :src="svgs.gas">
        <div class="effective_img_btm"></div>
        <h2 class="effective_title">How Effective is Kunvet?</h2>
        <p class="effective_text">Every 1 in 3 employers found the right candidate in the 14 days on Kunvet. 
          Overall, every 6.5 out of 10 employers found a hire through Kunvet. Best of all, each job posting starts at
           only 80¢ per day. Satisfaction guaranteed. Or money back.</p>
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
              <h2 class="test_title">Kunvet is great for every local organization.</h2>
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
              <h2 class="test_title">Kunvet is great for every local organization.</h2>
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
        <h2 class="faq_title">What is Kunvet?</h2>
        <p class="faq_text">Simply put, Kunvet is a professional job website made for local hiring.
           Unlike other job websites, we want to help you find the right person efficiently in your local area.</p>
        <h2 class="faq_title" style="padding-top: 60px; font-size: 24px;">Frequently Asked Questions</h2>
        <div class="faq_box">
          <div class="faq_questions">
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 1, 'faq_question_div': question_num != 1}" @click="question_num = 1" style="margin-top: 0px;">Is Kunvet right for me?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 2, 'faq_question_div': question_num != 2}" @click="question_num = 2">Is Kunvet a recruiting agency?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 3, 'faq_question_div': question_num != 3}" @click="question_num = 3">How much does it cost to use Kunvet?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 4, 'faq_question_div': question_num != 4}" @click="question_num = 4">What is the refund policy?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 5, 'faq_question_div': question_num != 5}" @click="question_num = 5">How does Kunvet work?</div>
            <div v-bind:class="{ 'faq_question_div_sel': question_num === 6, 'faq_question_div': question_num != 6}" @click="question_num = 6">How is Kunvet different from others?</div>
          </div>
          <div class="faq_answers">
            <div class="faq_answers_div" v-if="question_num === 1">
              <div style=";">
              <h2 class="faq_answers_title">Is Kunvet right for me?</h2>
              <p class="faq_answers_text">Kunvet is for small business, startup, non-profit, and individual who are looking
                to hire locally.</p>
              <p class="faq_answers_text">Kunvet is a job platform made for the local community for a costless and effcient hiring
                process.</p>
              <p class="faq_answers_text">Entry-level, part-time, temporary job, internship,
                volunteering opportunity are especially popular
                on Kunvet</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 2">
              <div style="">
              <h2 class="faq_answers_title">Is Kunvet a recruiting agency?</h2>
              <p class="faq_answers_text">No. We are not a recruiting agency.</p>
              <p class="faq_answers_text">Instead, we are an online job platform where local people find new opportunities. They
                come to our website, see your job posting, and apply to it directly</p>
              <p class="faq_answers_text">We do not interfere with your hiring process. We only show your posting to them.</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 3">
              <div style="">
              <h2 class="faq_answers_title">How much does it cost to use Kunvet?</h2>
              <p class="faq_answers_text">It is free to get an account, but we charge for each job that you post.</p>
              <p class="faq_answers_text">The cost of each job postings is from 80¢ to $1 per day, depending on the type
                of account you choose. We offer two types of account—Personal and Business—and each type of the accounts has
                different features.</p>
              <p class="faq_answers_text">To learn more about what each type of the accounts can do, 
                please visit our <span style="font-weight: bold; color: #FF6766 !important;"> <router-link to="/pricing" target="_blank"> pricing page</router-link></span>.</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 4">
              <div style="">
              <h2 class="faq_answers_title">What is the refund policy?</h2>
              <p class="faq_answers_text">We have the strongest refund policy among most of the competitors in the market.
                If you are not completely satisfied with the service you received, we are glad to issue you a full
                  refund on your inquiry.</p>
              <p class="faq_answers_text">We want to remind you that our website is designed for local hiring for small business,
                startup, non-profit, and individual. The popular opportunities on Kunvet are entry-level, part-time, temporary job,
                internship, and volunteering</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 5">
              <div style="">
              <h2 class="faq_answers_title">How does Kunvet work?</h2>
              <p class="faq_answers_text">1. Post a job. Each job postings starts at $5 and stays active for 60 days.</p>
              <p class="faq_answers_text">2. Wait for people to apply to your job. If you offer a paid job, you can expect about
                6-16 applications. If you offer an internship or unpaid job, you can expect about 5-10 applications. All
                  depend on the type of opportunity you offer.</p>
              <p class="faq_answers_text">3. Resumes (and CV if you requested for one) are sent to your email. 
                You can also find and manage all resumes you have received in your account.</p>
              </div>
            </div>
            <div class="faq_answers_div" v-else-if="question_num === 6">
              <div style="">
              <h2 class="faq_answers_title">How is Kunvet different from other sites?</h2>
              <p class="faq_answers_text">Great question. We know the struggles you face when trying to hire somebody from your
                local area.</p>
              <p class="faq_answers_text">So, we created a website that is entirely designed for your needs: simple, cheap, but
                effective at the same time</p>
              <p class="faq_answers_text">We truly want to help you find the right person, which is why we have a strong refund
                policy that most competitors cannot match.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="how_works">
        <div class="coffee_money">
          <h2 class="coffee_title">How Does Kunvet Work?</h2>
          <div style="text-align: center;"> <img class="one_two_three_line" :src="svgs.stepsMed"> </div>
          <div class="hands">
            <div class="hand_one" style="margin-left: 0px;">
              <h2 class="hand_header_1">Post a Job</h2>
              <p class="hand_text_1">It takes only about 5 min to post a job. Each job posting starts at <span style="font-weight:bold;">only 80¢ per day</span>! Cancel anytime.</p>
            </div>
            <div class="hand_two" style="margin: 0 54.5px;">
              <h2 class="hand_header_2">Review Resumes</h2>
              <p class="hand_text_2">Applicant’s resume is sent to your email and to your Kunvet account. 
                If you are not happy with the resumes you received, we will issue a <span style="font-weight:bold;">full refund</span>.</p>
            </div>
            <div class="hand_three" style="margin-right: 0px;">
              <h2 class="hand_header_3">Hire</h2>
              <p class="hand_text_3">Voila! Starting at <span style="font-weight:bold;">only 80¢ per day</span>, you can explore all the talents near
                you and pick your ideal hire.</p>
            </div>
          </div>
          <img class="hands_img" :src="pngs.handsMed">
        </div>
      </div>
      <div class="waste">
        <img class="warning_img" :src="svgs.warning">
        <div class="warning_img_btm"/>
        <h2 class="warning_title">Stop Wasting Your Time or Money!</h2>
        <p class="warning_text">Trying to hire someone without a job website can consume a lot of your energy and time,
           but posting jobs on websites can be really expensive. However, on Kunvet, you can get the best of both worlds!
            Find the right person quickly and inexpensively at the same time! Each job posting starts at only 80¢ per day. 
            If you are not completely satisfied, we will issue a full refund.</p>
        <p class="warning_text" style="font-weight: 600; padding-top: 70px; line-height: 100%;">Is Kunvet Right for Me?</p>
        <p class="warning_text">Kunvet is effective for people or businesses that hire locally and offer entry-level,
           part-time, temporary job, internship, or volunteering. If that describes you or your business, you have to
            try Kunvet now. Stop wasting your time and money on hiring.</p>
      </div>
      <div class="refund">
        <div class="refund_main_div">
          <h2 class="refund_title">Full Refund. No Question Asked.</h2>
          <p class="refund_text">Your experience means everything to us. If you are not completely satisfied with
            the service you have received, get a full refund immediately on your inquiry.
            No question will be asked. Click on the button below, and start hiring now.</p>
          <k-btn @click="routeGen()" class="refund_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 22px;">Post a Job</span></k-btn>
          <p class="refund_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
      <div class="versus">
        <img class="versus_img" :src="svgs.versus">
        <div class="versus_img_btm"/>

        <h2 class="versus_title">Kunvet.com vs. Competitors</h2>
        <p class="versus_text">See it for yourself why you should be using Kunvet now, 
          especially if you hire locally. Below is a side-by-side comparison between Kunvet and its competitors.</p>        
        <div class="compare_div">
          <h2 class="versus_subtitle">Nationwide Hiring for Large Companies</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Most job websites in the market are heavily used by large
              enterprises for nationwide hiring. These websites are pretty
              effective for this purpose.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">That is not what and whom Kunvet is made for.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Local Hiring for Local Employers</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Your job will most likely be pushed aside by jobs from large
              companies, which have hundreds of openings every day.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">
              Our website is completely designed for local businesses
              that are hiring locally. Every local employer’s voice will be
              heard equally.
            </p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Real Customer Support</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Plenty of companies only offer imited support. Some
              companies do not offer any real support.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Of course! We offer real support. Our customer service reps
              are nice, polite people.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Pricing Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Some offer unintuitive pricing model such as “click bids”.
              Some offer “job slots” that charges you every month,
              regardless whether you are hiring or not.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Simple. Pay as you go. No hidden costs.</p>
          </div>
        </div>
        <div class="compare_div">
          <h2 class="versus_subtitle">Refund Policy</h2>
          <div class="competitor_div">
            <p class="compare_header">Competitors:</p>
            <p class="compare_text">
              Refunds that take 3 - 5 business days to process. Get ready
              to be bombard with questions before you can see a penny.
            </p>
          </div>
          <div class="kunvet_div">
            <p class="compare_header white--text">Kunvet:</p>
            <p class="compare_text white--text">Not Happy? Full refund immediately. No Question Asked.</p>
          </div>
        </div>

      </div>
      <div class="limited">
        <img class="limited_main_img" :src="svgs.backgroundUrl">
        <div class="limited_main_div">
          <h2 class="limited_title">Limited Offer for Local Businesses</h2>
          <p class="limited_text">If you create a business account today, you can access all the employer features
             on Kunvet and enjoy 50% off for all your job postings—discount available for a limited time only.</p>
          <k-btn @click="routeGen()" class="limited_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 22px;">Post a Job</span></k-btn>
          <p class="limited_undertext">Satisfaction guarateed. Or money back.</p>
        </div>
      </div>
    </div>
    <!-- Mobile size -->
    <div class="emp_page_content medium_hide mobile_show">
      <div class="summary">
        <div class="summary_text_div">
          <h2 class="summary_title">How to hire the right person? With almost no cost or effort?</h2>
          <p class="summary_text">Hiring the right person is cheap and easy - only if
            you’ve used the right tool. As a professional job
            website made for local hiring, Kunvet is here to help
            you to find your next hire easier and cheaper.</p>
          <k-btn @click="routeGen()" class="summary_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 28px;">Post a Job</span></k-btn>
          <p class="summary_text" style="padding-top: 0px; font-size: 12px;">Satisfaction guarateed. Or money back.</p>
        </div>
        <img class="summary_collage_students" :src="pngs.students">
      </div>
      <div class="effective">
        <img class="effective_img" :src="svgs.gas">
        <div class="effective_img_btm"></div>
        <h2 class="effective_title">So, how effective is Kunvet?</h2>
        <p class="effective_text">Every 1 in 3 employers found the right candidate in the 14 days on Kunvet. Overall,
          every 6.5 out of 10 employers found a hire through Kunvet. Best of all, each job
          post starts at only $5 for 60 days. Satisfication guaranteed. Or money back.</p>
        <h2 class="effective_title" style="padding-top: 40px; font-size: 16px;">Some of Our Returning Employers</h2>
        <div class="logos" style="padding-left: 20px;">
          <img class="logo_style" :src="pngs.coderschool">
          <img class="logo_style" :src="pngs.prolite">
          <img class="logo_style" :src="pngs.readingtown">
          <img class="logo_style" :src="pngs.cygolite">
          <img class="logo_style" :src="pngs.conroys">
          <img class="logo_style" :src="pngs.seacrest">
          <img class="logo_style" :src="pngs.banban">
          <img class="logo_style" :src="pngs.newportpark">
        </div>
      </div>
      <div style="width: 100vw;">
        <v-carousel class="hire_monials testimonials" cycle interval="4000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">Kunvet is great for every local organization.</h2>
              <p class="test_text"><span class="quote">“</span>  Wow... I recommend Kunvet to every small business. It has
                helped us find many talented and enthusiastic candidates
                from Orange County to serve as our Code Coaches. The
                quality of the resumes of those who applied through
                Kunvet exceeded our expectations. We’re grateful to the
                Kunvet site organizers for providing this valuable service!</p>
                <div class="bio">
                  <img class="bio_img" :src="pngs.mark"/>
                  <div style="display: inline-block; margin-left: 10px;">
                    <p class="bio_header">Mark Freedkin</p>
                    <p class="bio_text">General Manager</p>
                    <p class="bio_text">of theCoderSchool - Irvine</p>
                  </div>
                </div>
                  <p class="test_undertext"> - theCoderSchool at Irvine offers a specialized after-school enrichment 
                program that teaches young students (ages 7-18) how to write computer software. 
              <a href="https://www.thecoderschool.com/locations/irvine/" target="_blank" style="font-weight: bold; text-decoration: underline; cursor: pointer;">Learn More</a></p>
            </div>
            <div style="height: 100px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">Kunvet is great for every local organization.</h2>
              <p class="test_text"><span class="quote">“</span>This is Ally, from Irvine Agape Christian Church, again :)
                My Pastor Chen wants to say Thank You. We've been searching for a caring and passionate teacher for a long time. 
                We've also spent plenty of money on other websites already but didn’t find who we are looking for. 
                Thanks to you guys, we finally found the ideal applicant to fill in the position! God bless you.</p>
                <div class="bio">
                  <div class="bio_img" style="height: 80px; width:90px; background-color: blue;"/>
                  <div style="display: inline-block;">
                    <p class="bio_header">Ally Zeng</p>
                    <p class="bio_text">Organizer</p>
                    <p class="bio_text">of IA Christian Church</p>
                  </div>
                </div>
            </div>
            <div style="height: 100px;"/>
          </v-carousel-item>
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <h2 class="test_title">Kunvet is great for every local organization.</h2>
              <div style="height: 400px;"/>
            </div>
            <div style="height: 100px;"/>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="faq">
        <img class="faq_img" :src="svgs.faq">
        <div class="faq_img_btm"/>
        <h2 class="faq_title">What is “Kunvet” <br>[con-vit]?</h2>
        <p class="faq_text">To put it simply, Kunvet is a professional job website made for local hiring. 
          Unlike the other job websites, Kunvet cares about your hiring. We want to provide you
          with great services that no others can beat, at the price of a cup of coffee.</p>
        <h2 class="faq_title" style="padding-top: 40px; font-size: 16px;">Frequently Asked Questions</h2>
        <div v-bind:class="{ 'faq_question_div_sel': question_num === 1, 'faq_question_div': question_num != 1}" @click="question_num = 1">
          Is Kunvet right for me?
          <div v-if="question_num === 1">
            <p class="faq_answers_text">Kunvet is for small business, startup, non-profit, and individual who are looking
              to hire locally.</p>
            <p class="faq_answers_text">Kunvet is a job platform made for the local community for a costless and effcient hiring
              process.</p>
            <p class="faq_answers_text">Entry-level, part-time, temporary job, internship,
              volunteering opportunity are especially popular
              on Kunvet</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num === 2, 'faq_question_div': question_num != 2}" @click="question_num = 2">
          Is Kunvet a recruiting agency?
          <div v-if="question_num === 2">
            <p class="faq_answers_text">No. We are not a recruiting agency.</p>
            <p class="faq_answers_text">Instead, we are an online job platform where local people find new opportunities. They
              come to our website, see your job posting, and apply to it directly</p>
            <p class="faq_answers_text">We do not interfere with your hiring process. We only show your posting to them.</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num === 3, 'faq_question_div': question_num != 3}" @click="question_num = 3">
          How much does it cost to post a job?
          <div v-if="question_num === 3">
            <p class="faq_answers_text">It is free to get an account, but we charge for each job that you post.</p>
            <p class="faq_answers_text">The cost of each job postings is from $5 to $10, depending on the type of account 
              you choose. We offer two types of account - Personal and Business - and each type of the accounts has
              different features.</p>
            <p class="faq_answers_text">To learn more about what each type of the accounts can do, 
              please visit our <span style="font-weight: bold; color: #FF6766 !important;">
              <router-link to="/pricing" target="_blank"> pricing page </router-link></span>.</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num === 4, 'faq_question_div': question_num != 4}" @click="question_num = 4">
          What is the refund policy?
          <div v-if="question_num === 4">
            <p class="faq_answers_text">We have the strongest refund policy among most of the competitors in the market.
              If you are not completely satisfied with the service you received, we are glad to issue you a full
                refund on your inquiry.</p>
            <p class="faq_answers_text">We want to remind you that our website is designed for local hiring for small business,
              startup, non-profit, and individual. The popular opportunities on Kunvet are entry-level, part-time, temporary job,
              internship, and volunteering</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num === 5, 'faq_question_div': question_num != 5}" @click="question_num = 5">
          How does Kunvet work?
          <div v-if="question_num === 5">
            <p class="faq_answers_text">1. Post a job. Each job postings starts at $5 and stays active for 60 days.</p>
            <p class="faq_answers_text">2. Wait for people to apply to your job. If you offer a paid job, you can expect about
              6-16 applications. If you offer an internship or unpaid job, you can expect about 5-10 applications. All
                depend on the type of opportunity you offer.</p>
            <p class="faq_answers_text">3. Resumes (and CV if you requested for one) are sent to your email. 
              You can also find and manage all resumes you have received in your account.</p>
          </div>
        </div>
        <div v-bind:class="{ 'faq_question_div_sel': question_num === 6, 'faq_question_div': question_num != 6}" @click="question_num = 6">
          How is Kunvet different from others?
          <div v-if="question_num === 6">
            <p class="faq_answers_text">Great question. We know the struggles you face when trying to hire somebody from your
              local area.</p>
            <p class="faq_answers_text">So, we created a website that is entirely designed for your needs: simple, cheap, but
              effective at the same time</p>
            <p class="faq_answers_text">We truly want to help you find the right person, which is why we have a strong refund
              policy that most competitors cannot match.</p>
          </div>
        </div>
      </div>
      <div class="hands">
        <img class="coffee_img" :src="svgs.coffee">
        <div class="coffee_img_btm"/>
        <h2 class="coffee_title">What can you do with “coffee money”?</h2>
        <v-window style="height: 100%;">
          <v-window-item style="text-align:center;">
            <div style="height: 54px;">
              <img :src="svgs.num1" class="nums">
              <div class="blackbar_p1"/>
            </div>
            <h2 class="hand_header">Post a Job</h2>
            <p class="hand_text">It takes only about 5 min to post a job. Your job stays
              active for 60 days. Each job post starts at <span style="font-weight:bold;">only $5</span>!</p>
            <img :src="pngs.nohand1">
          </v-window-item>
          <v-window-item style="text-align:center;">
            <div style="height: 54px;">
              <img :src="svgs.num2" class="nums">
              <div class="blackbar_p2"/>
            </div>
            <h2 class="hand_header">Review Resumes</h2>
            <p class="hand_text">Applicant’s resume is sent to your email and your Kunvet account. 
              If you are not happy with the resumes you received, we will issue a <span style="font-weight:bold;">full refund</span>.</p>
            <img :src="pngs.nohand2">
          </v-window-item>
          <v-window-item style="text-align:center;">
            <div style="height: 54px;">
              <img :src="svgs.num3" class="nums">
              <div class="blackbar_p3"/>
            </div>
            <h2 class="hand_header">Hire</h2>
            <p class="hand_text">Ta-Da! Starting at <span style="font-weight:bold;">only $5</span>, you can explore all the talents near
              you and pick your next hire.</p>
            <img :src="pngs.nohand3">
          </v-window-item>
        </v-window>
      </div>
      <div class="waste">
        <img style="width: 80px; margin-top: 100px; margin-left: calc(50vw - 40px);" :src="svgs.warning">
        <div class="warning_img_btm"/>
        <h2 class="warning_title" style="padding-left: 24px; padding-right: 24px;">Stop Wasting Your Money or Effort!</h2>
        <p class="warning_text">The average cost of posting a job online is $124 for every 30 days*. However, with
            Kunvet, the starting price is only $5 per 60 days, or $2.5 per month. You could
            save yourself $121.5 every month, or $1,458 every year! Save that money for a new
            once table, a new advertising campaign, or a trip to Europe. Try Kunvet today.</p>
        <p class="warning_text" style="font-weight: bold; padding-top: 40px;">Is Kunvet Right for Me?</p>
        <p class="warning_text" style="padding-top: 20px;">Kunvet is very effective for businesses hiring locally and offering entry-level,
            part-time, temporary job, internship, and volunteering. If that describes your
            business, try Kunvet now. Stop wasting your money and effort on hiring.</p>
        <p class="grey_warning">* Average cost of posting jobs on popular US job sites in 2018.</p>
      </div>
      <div class="refund">
        <img style="width: 80px; margin-top: 100px; margin-left: calc(50vw - 40px);" :src="svgs.refund">
        <div class="refund_img_btm"/>
        <h2 class="refund_title">Get Full Refund Immediately. No Question Asked.</h2>
        <p class="refund_text">Your experience means everything to us. If you are not completely satisfied with
          the service you have received, get a <span style="font-weight:bold;">full refund</span> immediately on your inquiry.
          No question will be asked. Click on the button below, and start hiring now.</p>
        <k-btn @click="routeGen()" class="refund_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 28px;">Post a Job</span></k-btn>
        <p class="refund_undertext" style="font-size: 12px;">Satisfaction guarateed. Or money back.</p>
      </div>
      <div class="versus">
        <img style="width: 80px; margin-top: 100px; margin-left: calc(50vw - 40px);" :src="svgs.versus">
        <div class="versus_img_btm"/>
        <h2 class="versus_title">Kunvet vs. Competitors - Why You Should Be Using Kunvet.</h2>
        <p class="versus_text">See it for yourself why you should be using Kunvet now, especially if you are hiring
          locally. A side-by-side comparison between Kunvet and some of its competitors.</p>

        <h2 class="versus_subtitle">Nationwide Hiring for Large Companies</h2>
        <div class="versus_subdiv">
          <div style="display: block; text-align: center;">
            <img class="versus_company_img" :src="svgs.company">
            <div class="versus_subtext">Most job websites in the market are heavily used by large enterprises for nationwide hiring.
              These websites are pretty effective for this purpose.</div>
          </div>
          <div style="display: block; text-align: center; padding-top: 20px;">
            <img class="versus_kunvet_logo" :src="svgs.gradlogo">
            <div class="versus_subtext2">That is not what and whom Kunvet is made for.</div>
          </div>
        </div>

        <h2 class="versus_subtitle">Local Hiring for Local Employers</h2>
        <div class="versus_subdiv">
          <div style="display: block; text-align: center;">
            <img class="versus_company_img" :src="svgs.company">
            <div class="versus_subtext">Your job will most likely be pushed aside by jobs from large companies, 
            which have hundreds of openings every day.</div>
          </div>
          <div style="display: block; text-align: center; padding-top: 20px;">
            <img class="versus_kunvet_logo" :src="svgs.gradlogo">
            <div class="versus_subtext2">Our website is completely designed for local
            businesses that are hiring locally. Every local employer’s voice will be heard equally.</div>
          </div>
        </div>

        <h2 class="versus_subtitle">Real Customer Support</h2>
        <div class="versus_subdiv">
          <div style="display: block; text-align: center;">
            <img class="versus_company_img" :src="svgs.company">
            <div class="versus_subtext">Plenty of companies only offer limited support. Some companies do not offer any real support.</div>
          </div>
          <div style="display: block; text-align: center; padding-top: 20px;">
            <img class="versus_kunvet_logo" :src="svgs.gradlogo">
            <div class="versus_subtext2">Of course! We offer real support. Our customer service representatives are nice, polite people.</div>
          </div>
        </div>

        <h2 class="versus_subtitle">Pricing Policy</h2>
        <div class="versus_subdiv">
          <div style="display: block; text-align: center;">
            <img class="versus_company_img" :src="svgs.company">
            <div class="versus_subtext">Some offer unintuitive pricing model such as “click bids”. Some offer “job slots” that charges
            you every month, regardless whether you are hiring or not.</div>
          </div>
          <div style="display: block; text-align: center; padding-top: 20px;">
            <img class="versus_kunvet_logo" :src="svgs.gradlogo">
            <div class="versus_subtext2">Simple. Pay as you go. No hidden costs.</div>
          </div>
        </div>

        <h2 class="versus_subtitle">Refund Policy</h2>
        <div class="versus_subdiv">
          <div style="display: block; text-align: center;">
            <img class="versus_company_img" :src="svgs.company">
            <div class="versus_subtext">Refunds that take 3 - 5 business days to process.
            Get ready to be bombard with questions before you can see a penny.</div>
          </div>
          <div style="display: block; text-align: center; padding-top: 20px;">
            <img class="versus_kunvet_logo" :src="svgs.gradlogo">
            <div class="versus_subtext2">Not Happy? Full refund immediately. No Question Asked.</div>
          </div>
        </div>
      </div>
      <div class="limited">
        <img style="width: 80px; margin-top: 100px; margin-left: calc(50vw - 40px);" :src="svgs.discount">
        <div class="warning_img_btm"/>
        <h2 class="limited_title">Limited Offer for Local Businesses.</h2>
        <p class="limited_text">If you are hiring on behalf of a business, then enjoy 33% of for <span style="font-weight: bold;">all</span> your job
          postings - for a limited time.</p>
        <k-btn @click="routeGen()" class="limited_btn"><span style="font-family: proxima-nova, sans-serif; font-size: 28px;">Post a Job</span></k-btn>
        <p class="limited_undertext">Satisfaction guarateed. Or money back.</p>
      </div>
    </div>
  </div>
</template>

<script>
import students from '@/assets/hire/smiling_job_applicants.png';
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
import backgroundUrl from '@/assets/hire/discount-background.svg';
import userDataProvider from '@/userDataProvider';

export default {
  props: {
    slide_display: {
      type: Number,
      default: 1,
    },
    question_num: {
      type: Number,
      default: 3,
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
        backgroundUrl: backgroundUrl,
        discount: discount,
      },
      pngs: {
        students: students,
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
      },
      account_type: '',
    };
  },
  methods: {
    routeGen() {
      userDataProvider.getUserData().then(data => {
        if (data.acct === 0) {
          this.$router.push('/choose');
        } else if (data.acct === 2) {
          this.$router.push('/createjob');
        } else {
          this.$router.push('/search');
        }
      });
    },
  },
};
</script>
