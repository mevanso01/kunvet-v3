<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url(https://fonts.googleapis.com/css?family=Sriracha);

    .applicationCard {
        margin: none;
        padding: none;
        width: 300px;
        height: 380px;
        position: static;
        display: inline-block;
        -webkit-perspective: 800px;
        -moz-perspective: 800px;
        -o-perspective: 800px;
        perspective: 800px;
        margin-bottom: 10px;
        margin-top: 100px;
        margin-left: 100px;
    }
    .card {
        width: 100%;
        height: 100%;
        -webkit-transition: -webkit-transform 1s;
        -moz-transition: -moz-transform 1s;
        -o-transition: -o-transform 1s;
        transition: transform 1s;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform-origin: 50% 50%;
    }
    .card div {
        display: inline-block;
        height: 100%;
        width: 100%;
        position: absolute;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -o-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .card .front {
    background: white;
    border: 1px black solid;
    }
    .card .back {
        background: white;
        border: 1px black solid;
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        transform: rotateY( 180deg );
    }
    .flipped {
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        transform: rotateY( 180deg );
    }

  .button_style{
    width: 116px !important; 
    height: 96px !important; 
    top: calc(295px - 35px); 
    left: 25px; 
    color: #FF6969!important;
    line-height: 46px !important;
    text-align: left !important;
    border-radius: 4px !important;
  }

  .button_style:hover{
    background-color: linear-gradient(to right, #fed295,#ff6d76 100%) !important; 
  }

  .notes_title{
    width: 300px !important;
    height: 100px !important;
    text-align: center; 
    font-size: 32px; 
    font-family: Sriracha, cursive;
  } 

  .img_class{
    width: 54px;
    margin-top: 23px;
    margin-left: 22px;
    border-radius: 50%;
  }

  .edit_save_btn{
    width:120px !important; 
    height: 44px !important; 
    margin-top: 306px !important; 
    margin-left: 28px !important; 
    line-height: 44px !important;
  }

  .cancel_back_btn{
    width:120px !important; 
    height: 44px !important; 
    margin-top: 306px !important; 
    margin-left: calc(120px + 28px + 4px) !important; 
    line-height: 44px !important;
  }

  .text_area_style{
    margin-top: 40px !important; 
    padding: 10px !important; 
    line-height: 32px !important;
  }

  .name_style{
    padding-left: 90px;
    margin-top: 34px;
    font-size: 16px;
  }

  .date_style{
    padding-left: 90px;
    margin-top: 56px;
    font-size: 11px;
    color:grey;    
  }

  .school_style{
    padding-left: 24px;
    margin-top: 98px;
    font-size: 14px;
    line-height: 16px; 
  }

  .degree_style{
    padding-left: 24px;
    margin-top: 128px;
    font-size: 14px;
    line-height: 16px; 
  }

  .major_style{
    padding-left: 24px;
    margin-top: 158px;
    font-size: 14px;
    line-height: 16px;
  }

  .notes_style{
    width: 270px !important;
    height: 40px !important;
    //overflow: hidden;
    //display: -webkit-box !important;
    //-webkit-line-clamp: 2;
    //-webkit-box-orient: vertical; 
    //text-overflow: ellipsis;
    padding-left: 24px;
    top: 198px;
  }

  .v-ellipsis{
    margin-left: 250px;
    margin-top: -46px;
    display: block;
  }

  .vert_elip{
    height: 20px;
  }

  .resume_img{
    margin-top: 12px;
    height: 30px;
    display: block;
  }

  .img{
    height: 30px;
  }

  .edit_notes_icon{
    margin-top: 128px;
    padding-left: 260px;
  }

</style>

<template>
<div style="margin-top: 200px;">
  <v-textarea no-resize full-width maxlength="80" rows="3" value="Hello there" style="overflow: none !important;" ></v-textarea>
</div>
</template>



<script>
import velip from '@/assets/elipses.svg';
import resume from '@/assets/resume.svg';
import StringHelper from '@/utils/StringHelper';
import applicationCard from '@/components/ApplicationCard';

export default {
  components: {
    appCard: applicationCard,
  },
  data() {
    return {
      notes: 'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.The Woodman set to work at once, and',
      show_btn: true,
      flip: false,
      edit_btn: false,
      cancel_btn: false,
      svg: {
        vel: velip,
        res: resume,
      },
    };
  },

  methods: {
    flipped() {
      this.flip = !this.flip;
      this.show_btn = !this.show_btn;
    },
    works() {
      this.$debug('Sample text lol');
    },
    truncate_notes() {
      if (!this.notes) return '';
      return StringHelper.truncate(this.notes, 70);
    },
  },
};
</script>

