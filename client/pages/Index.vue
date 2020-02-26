<style lang="scss" scoped>
  // overall
  .index_area {
    position: relative;
  }
  .search_area {
    position: relative;
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
    .v-carousel__controls{
      display: none;
    }
  }
  .test_slide{
    width: 100%;
    margin-left: 0px;
  }
  .slide_info{
    max-width: 960px;
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
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
  .ykunvet_section{
    display: flex;
    margin-top: 200px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .ykunvet_phone{
    height: 100%;
  }
  .next_job{
    background-color:#f4f4f4;
    .next_job_div{
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
    }
  }
  // big desktop
  @media (min-width: 1025px){
    .medium:not(.desktop), .mobile:not(.desktop), .small:not(.desktop), .extra_small:not(.desktop) {
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
    .ykunvet_div{
      max-width: 1008px;
      padding: 0 0px 0px 24px;
      margin: 0 auto;
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
    .next_job{
      width: 100%;
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
    .job-search {
      margin-top: 36px;
    }
  }
  // medium desktop
  @media (min-width: 801px) and (max-width: 1024px) {
    .desktop:not(.medium), .mobile:not(.medium), .small:not(.medium), .extra_small:not(.medium) {
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
    .ykunvet_div{
      max-width: 1008px;
      padding: 0 0px 0px 24px;
      margin: 0 auto;
    }
    .ykunvet_text_div{
      width: 346px;
      height: 340px;
      margin-bottom: auto;
      margin-top: auto;
      margin-right: 75px;
    }
    .ykunvet_header{
      font-size: 34px;
      line-height: 120%;
      font-weight: 600;
      font-family: proxima-nova, sans-serif;
      letter-spacing: 0.03em;
      margin-bottom: 0px;
    }
    .ykunvet_text{
      font-size: 20px;
      line-height: 150%;
      font-weight: 300;
      letter-spacing: 0;
      padding-top: 24px;
      margin-bottom: 0px;
      font-family: proxima-nova, sans-serif;
      color: black;
    }
    .ykunvet_phone{
      width: 332px;
    }
    .next_job_div{
      max-width: 440px;
      padding: 0 0 80px;
      margin: 200px auto 0;
      text-align: center;
    }
    .next_job_pic{
      width: 100%;
    }
    .student_testimonials{
      margin-top: 200px;
      .bio_img_background{
        margin-right: 56px;
      }
      .slide_stuff{
        width: 337px;
      }
      .bio{
        .bio_header{
          padding-top: 50px;
        }
      }
    }
    .looking_text_div{
      padding: 120px 0 0;
      width: 500px;
      .looking_header{
        font-size: 40px;
      }
      .looking_text{
        font-size: 20px;
      }
      .looking_btn{
        margin-top: 60px;
      }
      .looking_btn_undertext{
        padding-bottom: 120px;
      }
    }
    .job-search {
      margin-top: 30px;
    }
    .test_text{
      font-size: 20px
    }
  }
  // mobile
  @media (min-width: 601px) and (max-width: 800px) {
    .desktop:not(.mobile), .medium:not(.mobile), .small:not(.mobile), .extra_small:not(.mobile) {
      display: none !important;
    }
    .home_content{
      width: 100%;
    }
    .index_top{
      width: 100%;
      background-color: #ff6969;
      padding-left: 8%;
      padding-right: 8%;
    }
    .index_area{
      margin-top: -32px;
      padding-left: 8%;
      padding-right: 8%;
      .job-search{
        width: 500px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .search_title{
      font-family: proxima-nova, sans-serif;
      font-weight: 600;
      letter-spacing: 0;
      font-size: 40px;
      line-height: 140%;
      color: #ffffff;
      text-align: left;
      padding-top: 240px;
      padding-bottom: 56px;
      width: 500px;
      margin: 0 auto;
    }
    .ykunvet_div{
      margin-top: 250px;
      padding-left: 8%;
      padding-right: 8%;
      .ykunvet_section{
        margin-top: 0;
        display: flex;
        flex-direction: column-reverse;
        width: 500px;
        margin-bottom: 100px;
        .ykunvet_phone{
          width: 100%;
          height: 450px;
          margin-bottom: 4px;
        }
        .ykunvet_text_div{
          height: 450px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 50px;
          background-color: #f4f4f4;
          font-family: proxima-nova;
          .ykunvet_header{
            font-weight: 600;
            font-size: 36px;
            color: #3c3c3c;
            line-height: 120%;
            letter-spacing: 0.03em;
            margin-bottom: 20px;
          }
          .ykunvet_text{
            font-weight: 300;
            font-size: 20px;
            margin-bottom: 0;
            color: #3c3c3c;
            line-height: 150%;
            letter-spacing: 0;
          }
        }
      }
    }
    .student_testimonials{
      margin-top: 100px;
      margin-bottom: 200px;
      padding: 0 8%;
      .slide_info{
        width: 500px;
        display: block;
        .bio_img_background{
          width: 500px;
          height: 290px;
          position: relative;
          display: flex;
          justify-content: space-around;
          margin: 0;
          .bio_img{
            bottom: 0;
            height: 250px;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .slide_stuff{
          width: 100%;
          height: fit-content;
          .quote{
            margin-top: 30px;
          }
          .test_text{
            margin-top: -30px;
          }
          .bio{
            .bio_header{
              padding-top: 30px;
            }
            .student_controls{
              margin-top: 30px;
            }
          }
        }
      }
    }
    .next_job{
      padding-left: 8%;
      padding-right: 8%;
      .next_job_div{
        padding-bottom: 60px;
      }
    }
    .looking_div{
      padding-left: 8%;
      padding-right: 8%;
      .looking_text_div{
        padding: 120px 0 0;
        width: 500px;
        .looking_header{
          font-size: 40px;
        }
        .looking_text{
          font-size: 20px;
          padding-top: 10px;
        }
        .looking_btn{
          margin-top: 60px;
        }
        .looking_btn_undertext{
          padding-bottom: 120px;
        }
      }
    }
  }
  // small
  @media (min-width: 451px) and (max-width: 600px) {
    .desktop:not(.small), .medium:not(.small), .mobile:not(.small), .extra_small:not(.small) {
      display: none !important;
    }
    .home_content{
      width: 100%;
    }
    .index_top{
      width: 100%;
      background-color: #ff6969;
      padding-left: 8%;
      padding-right: 8%;
    }
    .index_area{
      margin-top: -32px;
      padding-left: 8%;
      padding-right: 8%;
      .job-search{
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
      }
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
      max-width: 500px;
      margin: 0 auto;
    }
    .ykunvet_div{
      margin-top: 180px;
      padding-left: 8%;
      padding-right: 8%;
      .ykunvet_section{
        margin-top: 0;
        display: flex;
        flex-direction: column-reverse;
        max-width: 500px;
        margin-bottom: 80px;
        .ykunvet_phone{
          margin-bottom: 4px;
          width: 100%;
          height: auto;
        }
        .ykunvet_text_div{
          height: 450px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 50px;
          background-color: #f4f4f4;
          font-family: proxima-nova;
          .ykunvet_header{
            font-weight: 600;
            font-size: 28px;
            color: #3c3c3c;
            line-height: 120%;
            letter-spacing: 0.03em;
            margin-bottom: 20px;
          }
          .ykunvet_text{
            font-weight: 300;
            font-size: 18px;
            margin-bottom: 0;
            color: #3c3c3c;
            line-height: 150%;
            letter-spacing: 0;
          }
        }
      }
    }
    .student_testimonials{
      margin-top: 100px;
      margin-bottom: 180px;
      padding: 0 8%;
      .slide_info{
        width: 100%;
        display: block;
        .bio_img_background{
          width: 100%;
          height: 230px;
          position: relative;
          display: flex;
          justify-content: space-around;
          margin: 0;
          .bio_img{
            bottom: 0;
            height: 200px;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .slide_stuff{
          width: 100%;
          height: fit-content;
          .quote{
            margin-top: 30px;
            font-size: 60px;
          }
          .test_text{
            margin-top: -30px;
            font-size: 18px;
          }
          .bio{
            .bio_header{
              padding-top: 30px;
            }
            .student_controls{
              margin-top: 30px;
            }
          }
        }
      }
    }
    .next_job{
      padding-left: 8%;
      padding-right: 8%;
      .next_job_div{
        padding-bottom: 50px;
        width: 100%;
      }
    }
    .looking_div{
      padding-left: 8%;
      padding-right: 8%;
      .looking_text_div{
        padding: 80px 0 0;
        max-width: 400px;
        width: 100%;
        .looking_header{
          font-size: 32px;
        }
        .looking_text{
          font-size: 18px;
          padding-top: 10px;
        }
        .looking_btn{
          margin-top: 60px;
          width: 180px;
          height: 64px !important;
          .looking_btn_text{
            font-size: 20px;
          }
        }
        .looking_btn_undertext{
          padding-bottom: 80px;
        }
      }
    }
  }
  // extra small
  @media (max-width: 450px) {
    .desktop:not(.extra_small), .medium:not(.extra_small), .mobile:not(.extra_small), .small:not(.extra_small) {
      display: none !important;
    }
    .home_content{
      width: 100%;
    }
    .index_top{
      width: 100%;
      background-color: #ff6969;
      padding-left: 8%;
      padding-right: 8%;
    }
    .index_area{
      margin-top: -32px;
      padding-left: 8%;
      padding-right: 8%;
      .job-search{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
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
      width: 100%;
      margin: 0 auto;
    }
    .ykunvet_div{
      margin-top: 120px;
      .ykunvet_section{
        margin-top: 0;
        max-width: 100%;
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 60px;
        .ykunvet_phone{
          margin-bottom: 4px;
          width: 100%;
          height: auto;
        }
        .ykunvet_text_div{
          height: fit-content;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 50px 8%;
          background-color: #f4f4f4;
          font-family: proxima-nova;
          .ykunvet_header{
            font-weight: 600;
            font-size: 22px;
            color: #3c3c3c;
            line-height: 120%;
            letter-spacing: 0.03em;
            margin-bottom: 20px;
          }
          .ykunvet_text{
            font-weight: 300;
            font-size: 16px;
            margin-bottom: 0;
            color: #3c3c3c;
            line-height: 150%;
            letter-spacing: 0;
          }
        }
      }
    }
    .student_testimonials{
      margin-top: 60px;
      margin-bottom: 120px;
      padding: 0 8%;
      .slide_info{
        width: 100%;
        display: block;
        .bio_img_background{
          width: 100%;
          height: 180px;
          position: relative;
          display: flex;
          justify-content: space-around;
          margin: 0;
          .bio_img{
            bottom: 0;
            height: 150px;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .slide_stuff{
          width: 100%;
          height: fit-content;
          .quote{
            margin-top: 30px;
            font-size: 60px;
          }
          .test_text{
            margin-top: -30px;
            font-size: 16px;
          }
          .bio{
            .bio_header{
              padding-top: 30px;
            }
            .student_controls{
              margin-top: 30px;
            }
          }
        }
      }
    }
    .next_job{
      padding-left: 8%;
      padding-right: 8%;
      .next_job_div{
        padding-bottom: 50px;
        width: 100%;
      }
    }
    .looking_div{
      padding-left: 8%;
      padding-right: 8%;
      .looking_text_div{
        padding: 60px 0 0;
        .looking_header{
          font-size: 30px;
        }
        .looking_text{
          font-size: 16px;
          padding-top: 10px;
        }
        .looking_btn{
          margin-top: 40px;
          width: 165px;
          height: 60px !important;
          font-size: 18px;
          line-height: 60px !important;
          .looking_btn_text{
            font-size: 18px;
          }
        }
        .looking_btn_undertext{
          padding-bottom: 60px;
        }
      }
    }
  }
  @media (min-width: 570px) and (max-width: 800px) {
    .search_title{
      font-size: 44px;
    }
  }
  @media (min-width: 518px) and (max-width: 569px) {
    .search_title{
      font-size: 40px;
    }
  }
  @media (min-width: 466px) and (max-width: 517px) {
    .search_title{
      font-size: 36px;
    }
  }
  @media (min-width: 375px) and (max-width: 465px) {
    .search_title{
      font-size: 32px;
    }
  }
  @media (max-width: 374px) {
    .search_title{
      font-size: 30px;
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
// big desktop
@media (min-width: 1025px){
  .job-search {
    margin-top: 36px;
  }
}
// mobile
@media (min-width: 801px) and (max-width: 1024px) {
  .job-search {
    margin-top: 36px;
  }
}
.student_testimonials_section{
  .v-carousel__controls{
    display: none;
  }
}
</style>

<template>
  <div class="home_page">
    <!-- desktop size -->
    <div class="home_content desktop medium">
      <div class="index_top">
          <img class="interview_woman" :src="pngs.woman" alt="Female Job Applicant Waiting for Job Interview">
          <div class="search_area">
            <h2 class="search_title">Fresh Job<br>Opportunities<br>Near You.</h2>
            <JobSearch :onClick="onClickJobSearch" class="job-search" />
          </div>
      </div>
      <!-- Scrollama starts here -->
    </div>
    <div class="home_content mobile small extra_small">
      <div class="index_top">
        <h2 class="search_title">Fresh Job Opportunities Near You.</h2>
      </div>
      <div class="index_area">
        <JobSearch :onClick="onClickJobSearch" class="job-search" />
      </div>
    </div>
    <div class="desktop medium mobile small extra_small">
      <div class="ykunvet_div">
        <div class="ykunvet_section">
          <div class="ykunvet_text_div">
            <h2 class="ykunvet_header">Out-dated jobs are so yesterday.</h2>
            <p class="ykunvet_text">
              So you just applied for your dream job! Feels great, right? Then you get that dreaded email: “We’re sorry, this job no longer exists.” The worst. Luckily, Kunvet has your back—we’ll show you only the latest, greatest jobs right in your area.</p>
          </div>
          <img class="ykunvet_phone desktop medium" :src="pngs.phone1" alt="Newest Jobs Near Me">
          <img class="ykunvet_phone mobile small extra_small" :src="pngs.phone1mobile" alt="Phone Placeholder">
        </div>
        <div class="ykunvet_section">
          <div class="ykunvet_text_div">
            <h2 class="ykunvet_header">We’ll light the way.</h2>
            <p class="ykunvet_text">
              Dying to know if your application is getting noticed? Kunvet lets you know right away when there’s a change in your application status. We’ll let you know ASAP when your dream company is checking out your resume. We’re your eyes and ears.</p>
          </div>
          <img class="ykunvet_phone desktop medium" :src="pngs.phone2" alt="Being kept in the dark?">
          <img class="ykunvet_phone mobile small extra_small" :src="pngs.phone2mobile" alt="Phone Placeholder">
        </div>
        <div class="ykunvet_section">
          <div class="ykunvet_text_div">
            <h2 class="ykunvet_header">Only one resume? Please.</h2>
            <p class="ykunvet_text">
              You know how it is. You’re applying for jobs and you have about six different versions of your resume. You’re versatile, we get it. That’s why we let you upload as many resumes for as many hats you wear, making applying for a wide array of jobs a breeze.</p>
          </div>
          <img class="ykunvet_phone desktop medium" :src="pngs.phone3" alt="Multiple Resumes">
          <img class="ykunvet_phone mobile small extra_small" :src="pngs.phone3mobile" alt="Phone Placeholder">
        </div>
      </div>
    </div>
    <div class="desktop medium mobile small extra_small">
      <div class="student_testimonials">
        <v-carousel v-model="model" class="student_monials student_testimonials_section" cycle interval="100000000" :hide-controls="true" height="auto">
          <v-carousel-item class="testing_slide_transition">
            <div class="slide_info">
              <div class="bio_img_background" style="background: linear-gradient(to bottom right, #8ab4ff, #86a8e7, #7f7fd5);">
                <img class="bio_img" :src="pngs.person1"/>
              </div>
              <div class="slide_stuff">
                <p class="quote">“</p><p class="test_text">Kunvet has helped me so much with my job search! I can’t believe what a great resource it is, especially since it’s a pretty new website. I definitely recommend using Kunvet, especially if you’re like me and want to work closer to home!</p>
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
                  this website to anyone who is looking for jobs. I also find their customer service to be very accessible.</p>
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
                  your website to be unique and I always come back to it from time to time to see what jobs are out there.</p>
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
          <img class="next_job_pic desktop" :src="pngs.nextJob" alt="Home page form image">
          <SignupComponent type="student" :fname="fname" :lname="lname" :email="email" :password="password" @success="onSuccess"/>
        </div>
      </div>
      <div class="looking_div">
        <div class="looking_text_div">
          <h2 class="looking_header">Looking to hire?<br>You’re in the right place!</h2>
          <div class="looking_text" style="margin: 0 auto;">Posting starts at just $9. Try Kunvet, and save yourself time and money!</div>
          <router-link to="/hire"><k-btn class="looking_btn"><span class="looking_btn_text">Post a Job</span></k-btn></router-link>
          <p class="looking_btn_undertext">Satisfication guaranteed. Or money back.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import woman from '@/assets/index/female-job-applicant-wearing-red-suit-waiting-for-interview.jpg';
import phone1 from '@/assets/index/new-fresh-latest-job-employment.png';
import phone2 from '@/assets/index/instant-job-application-status.png';
import phone3 from '@/assets/index/upload-unlimited-resumes.png';
import phone1mobile from '@/assets/index/new-fresh-latest-job-employment-mobile.png';
import phone2mobile from '@/assets/index/instant-job-application-status-mobile.png';
import phone3mobile from '@/assets/index/upload-unlimited-resumes-mobile.png';
import phoneplaceholder from '@/assets/index/phone-placeholder.png';
import person1 from '@/assets/index/young-job-applicant-in-green-sweater.png';
import person2 from '@/assets/index/young-job-applicant-in-purple-checker-shirt.png';
import person3 from '@/assets/index/young-job-applicant-in-pink-hoodie.png';
import profilePic from '@/assets/index/profile-icon.png';
import nextJob from '@/assets/index/home-page-form-image.png';
import gql from 'graphql-tag';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import Coordinates from '@/constants/coordinates';
import positions from '@/constants/positions';
import locations from '@/constants/locations';
import 'intersection-observer';
import Scrollama from 'vue-scrollama';
import PromoTextContainer from '@/components/PromoTextContainer';
import SignupComponent from '@/components/HomepageSignupComponent';
import JobSearch from '@/components/JobSearch';

Vue.use(VueApollo);
export default {
  metaInfo: {
    title: 'Kunvet: Explore new jobs and fresh talent near you!',
    meta: [
      {
        name: 'description',
        content: 'Sick of seeing spammy old jobs that have nothing to do with you or your amazing skills? See only the newest, freshest jobs from employers hiring near you!',
      },
    ],
  },
  components: {
    SignupComponent,
    Scrollama,
    PromoTextContainer,
    JobSearch,
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
        phone1mobile: phone1mobile,
        phone2mobile: phone2mobile,
        phone3mobile: phone3mobile,
        person1: person1,
        person2: person2,
        person3: person3,
        phoneplaceholder: phoneplaceholder,
        profilePic: profilePic,
        woman: woman,
        nextJob: nextJob,
      },
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
      // if (this.$ga) {
      //   this.$ga.event('account', 'create', 'applicant', 1);
      //   console.log('ga: account/create/applicant/1');
      // }
      if (window.dataLayer) {
        window.dataLayer.push({ 'event': 'create-applicant-account' });
        console.log('gtm: create-applicant-account');
      }
      // if (this.signupType === 'business') {
      //   this.$router.push('/myorg');
      // } else {
      //   this.$router.push('/account');
      // }
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
    onClickJobSearch(job, query) {
      this.$router.push({
        path: '/jobs/search',
        query: {
          address: job.address,
          latitude: job.latitude,
          longitude: job.longitude,
          q: query,
          p: 0,
        },
      });
    },
  },
  activated() {
  },
};
// Define a new component called button-counter
Vue.component('button-counter', {
  template: '<button v-on:click="">Hello!</button>',
});
</script>
