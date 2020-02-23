<style lang="scss" scoped>
  // overall
  .content {
    max-width: 700px;
    margin: 140px auto 0 auto;
    a {
      color: #ff6969 !important;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
    * {
      color: #202020;
    }
  }
  h1 {
    font-size: 50px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 34px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0;
    margin: unset;
  }
  p {
    font-size: 22px;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: 0;
  }
  .text-center {
    text-align: center;
  }
  .footnote {
    font-size: 16px;
    font-weight: 300;
    line-height: 120%;
    letter-spacing: 0;
    text-transform: uppercase;
  }
  .social-buttons {
    font-size: 40px;
    line-height: 1;
    i {
      color: #ff6969;
    }
  }
  .banner-img {
  }
  img {
    max-width: 100%;
    display: table;
    margin-left: auto;
    margin-right: auto;
  }
  .bullet-content {
    margin-bottom: 60px;
    img.show-border {
      border: 2px solid #e4e4e4;
    }
    .quote {
      font-style: italic;
      font-size: 20px;
      &:before {
        content: '“ ';
        font-family: proxima-nova, sans-serif;
        font-style: normal;
        white-space: pre;
        font-weight: 600;
      }
    }
  }
  .gray-box {
    padding: 30px !important;
    background-color: rgb(244, 244, 244);
  }
  .references {
    margin-bottom: 60px;
    h3 {
      user-select: none;
      &:hover {
        cursor: pointer;
      }
    }
    i {
      font-size: 14px;
      color: #202020;
    }
  }
  ol {
    display: block;
    list-style-type: decimal;
    margin: 0;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: 0;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin: 0;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: 0;
  }
  .divider {
    height: 0;
    widows: 100%;
    border-top: 1px solid #e4e4e4;
  }
  // big desktop
  @media (min-width: 1025px){
  }
  // medium desktop
  @media (min-width: 801px) and (max-width: 1024px) {
  }
  // mobile
  @media (min-width: 601px) and (max-width: 800px) {
  }
  // small
  @media (min-width: 451px) and (max-width: 600px) {
  }
  // extra small
  @media (max-width: 450px) {
  }
  // extra
  @media (max-width: 700px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 20px;
    }
  }
</style>

<style lang="scss">
// overrides here
</style>

<template>
  <v-container fluid>
    <div style="margin: -80px 8% -24px; 8%; padding-bottom: 40px;">
      <div class="content">
        <div class="text-center footnote">
          <a>BREADCRUMB 1</a> / <a>BREADCRUMB 2</a>
        </div>
        <h1 class="article-title text-center">Article Title</h1>

        <div class="social-buttons text-center" style="margin-bottom: 20px;">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-linkedin-square"></i>
          <i class="fab fa-twitter-square"></i>
        </div>

        <img class="banner-img" :src="pngs.placeholder" alt="" style="margin-bottom: 40px;">

        <div class="footnote" style="margin-bottom: 40px;">
          LAST UPDATED DTATE BY AUTHOR
        </div>
        
        <div>
          <h2 class="article-sub-title" style="margin-bottom: 20px;">Contents</h2>

          <p style="margin-bottom: 60px;">
            <a># Bullet point 1</a><br>
            <a># Bullet point 2</a><br>
            <a># Bullet point 3</a><br>
            <a># Bullet point 4</a><br>
            <a># Bullet point 5</a><br>
            <a># Bullet point 6</a><br>
            <a># Bullet point 7</a><br>
          </p>
        </div>

        <div class="bullet-content">
          <h2 class="article-sub-title" style="">1. <a>Sub-Title</a></h2>
          
          <h3 class="article-sub-sub-title" style="">Sub-Sub-Title</h3>

          <p style="margin-bottom: 20px;">
            Lorem ipsum dolor sit amet, consectetur <a>adipiscing</a> elit. Nullam vitae risus
            scelerisque, malesuada leo quis, ultrices leo. Vivamus venenatis nec nunc
            non convallis. Sed ut risus convallis, malesuada dolor vel, tincidunt tellus.
            Mauris suscipit enim augue. Mauris iaculis ut orci sit amet tempus.
            Pellentesque porttitor congue elit id varius. Aliquam ac pellentesque metus.
          </p>

          <img class="show-border" :src="pngs.placeholder" alt="" style="">
        </div>

        <div class="bullet-content">
          <h2 class="article-sub-title" style="">2. <a>Sub-Title</a></h2>
          
          <h3 class="article-sub-sub-title" style="">Sub-Sub-Title</h3>

          <p style="margin-bottom: 20px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae risus
            scelerisque, malesuada leo quis, ultrices leo. Vivamus venenatis nec nunc
            non convallis. Sed ut risus convallis, malesuada dolor vel, tincidunt tellus.
            Mauris suscipit enim augue. Mauris iaculis ut orci sit amet tempus.
            Pellentesque porttitor congue elit id varius. Aliquam ac pellentesque metus.
          </p>

          <div class="gray-box quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. — Google
          </div>
        </div>

        <div class="bullet-content">
          <h2 class="article-sub-title" style="">Call-to-action Section</h2>
          <p style="margin-bottom: 20px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae risus
            scelerisque, malesuada leo quis, ultrices leo. Vivamus venenatis nec nunc
            non convallis.
          </p>

          <img class="" :src="pngs.placeholder" alt="" style="">
        </div>
        <div class="gray-box references">
          <h3 class="" @click="refShown = !refShown">References <i class="fas" :class="[refShown ? 'fa-minus-circle' : 'fa-plus-circle']"></i></h3>
          <ol style="margin-top: 10px;" v-show="refShown">
            <li><a>Reference One</a></li>
            <li><a>Reference Two</a></li>
            <li><a>Reference Three</a></li>
          </ol>
        </div>

        <h3 class="text-center" style="margin-bottom: 10px;">Share this article with someone!</h3>
        <div class="social-buttons text-center" style="margin-bottom: 60px;">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-linkedin-square"></i>
          <i class="fab fa-twitter-square"></i>
        </div>

        <div class="divider" style="margin-bottom: 60px;"></div>
        
        <div>
          <h2 class="article-sub-title" style="margin-bottom: 20px;">Related Articles</h2>

          <p style="">
            <a>Bullet point 1</a><br>
            <a>Bullet point 2</a><br>
            <a>Bullet point 3</a><br>
            <a>Bullet point 4</a><br>
            <a>Bullet point 5</a><br>
            <a>Bullet point 6</a><br>
            <a>Bullet point 7</a><br>
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import placeholder3 from '@/assets/blog/placeholder3.png';

export default {
  metaInfo: {
    title: 'Blog Detail | Kunvet',
  },
  data() {
    return {
      pngs: {
        placeholder: placeholder3,
      },
      refShown: false,
    };
  },
};
</script>
