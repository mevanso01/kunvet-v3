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
      box-shadow: 0 4px 20px 4px #eeeeee;
      border-radius: 4px;
    }
    .card .back {
        background: white;
        box-shadow: 0 4px 20px 4px #eeeeee;
        border-radius: 4px;
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
    background-color: #ffeaea !important; 
  }

  .notes_title{
    width: 300px !important;
    height: 40px !important;
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
    top: 306px !important; 
    left: 28px !important; 
    line-height: 44px !important;
  }

  .cancel_back_btn{
    width:120px !important; 
    height: 44px !important; 
    top: 306px !important; 
    left: calc(120px + 28px + 4px) !important; 
    line-height: 44px !important;
  }

  .text_area_style{
    margin-top: 40px !important; 
    padding: 10px !important; 
    line-height: 32px !important;
  }

  .name_style{
    padding-left: 14px;
    top: 34px;
    width: 180px !important;
    height: 30px !important;
    font-size: 16px;
  }

  .date_style{
    padding-left: 14px;
    top: 56px;
    font-size: 11px;
    width: 180px !important;
    height: 30px !important;
    color:grey;    
  }

  .school_style{
    padding-left: 24px;
    top: 100px;
    font-size: 14px;
    line-height: 16px; 
    width: 300px !important;
    height: 30px !important;
    display: block !important;
  }

  .degree_style{
    padding-left: 24px;
    top: 130px;
    font-size: 14px;
    line-height: 16px; 
    width: 300px !important;
    height: 30px !important;
    display: block !important;
  }

  .major_style{
    padding-left: 24px;
    top: 160px;
    font-size: 14px;
    line-height: 16px;
    width: 300px !important;
    height: 30px !important;
    display: block !important;
  }

  .notes_style{
    width: 300px !important;
    height: 40px !important;
    padding-left: 24px;
    padding-right: 24px;
    top: 190px;
    line-height: 16px;
    display: block !important;
    word-wrap: break-word;
  }

  .v-elip{
    padding-left: 160px;
    padding-top: 32px;
  }

  .resume_img{
    margin-top: 14px;
    margin-left: 12px !important;
    margin-bottom: 0px !important;
    height: 28px;
    display: block;
  }

  .img{
    height: 30px;
  }

  .edit_notes_icon{
    position: relative;
    line-height: 16px;
  }

</style>

<template>
<div>
    <div class="applicationCard">
        <div class="card" v-bind:class = "{flipped: flip}">
          <div class="front">
                  <img class ="img_class" src="https://www.lincolnlaw.edu/wp-content/uploads/2015/05/no-image-available-400x400.jpg">
                  <div class = "name_style">{{ getApplicantName(item) }}</div>
                  <div class = "date_style">{{ getApplicantDisplayDate(item)}}</div>

                <div v-if="show_btn" class = "v-elip">
                  <v-menu offset-y left style="height: 24px; width:24px; margin-right:10px; display: block;">
                    <v-btn icon slot="activator">
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                    <v-list dense class="main-navbar-dropdown-list">
                      <v-list-tile v-if="item.notes" @click="editNotes(item.notes)" style="width: 140px;">
                        <p>Edit Notes</p>
                      </v-list-tile>
                      <v-list-tile v-else @click="flipped" style="width: 140px;">
                        <p>Add Notes</p>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </div>
            
                <div class = "school_style">{{ item.school }} Hello</div>
                <div class = "degree_style">{{ item.degree }} there</div>
                <div class = "major_style">{{ item.major }} testing</div>
                <div class = "notes_style"> Notes: {{ getApplicantNotesDisplayText(item) }}
                  <!--<div style="padding-left: 6px; margin-top: -10px;"><v-icon>chevron_right</v-icon></div>-->
                  <v-btn @click="flipped" icon class="edit_notes_icon"><v-icon style="line-height: 32px;">chevron_right</v-icon></v-btn>
                </div>
            <!--<v-btn icon @click="works" class="v-ellipsis" ><img :src="svg.vel" class="vert_elip"></v-btn>-->
            <!--<k-btn outline class="button_style" v-if="show_btn" @click="flipped">
              <img :src="svg.res" class="img"> 
              <div>Resume</div>
              </k-btn>-->

              <k-btn outline icon v-if="show_btn" @click="openSide();" class="button_style" >
                <img :src="svgs.res" class="resume_img">
                <div style="padding-left: 12px;">Resume</div>
                </k-btn>
              
          </div>
          <div class="back">
            <div class="notes_title">Notes</div>
            <div  v-if="editingNotes" style = "height: 250px; width: 300px; top: 50px;">
             <v-textarea no-resize full-width maxlength="140" class="app_card-textarea" autofocus=true v-model="newNotes"></v-textarea>
            </div>
            <div v-else style = "height: 250px; width: 300px; top: 50px;">
             <v-textarea no-resize full-width maxlength="140" class="app_card-textarea" style="color:black !important;" readonly v-model="item.notes"></v-textarea>
            </div>            
              <k-btn v-if="editingNotes" small color="black" class="cancel_back_btn" @click="editingNotes = false">Cancel</k-btn>
              <k-btn v-else small color="black" class="cancel_back_btn" @click="flipped">Back</k-btn>
              <k-btn v-if="editingNotes" small class="edit_save_btn" @click="saveNotes">Save</k-btn>
              <k-btn v-else small class="edit_save_btn" @click="editNotes2(item.notes)">Edit</k-btn>
          </div>
        </div>    
    </div>
</div>
</template>



<script>
import velip from '@/assets/elipses.svg';
import resume from '@/assets/resume.svg';
import FileClient from '@/utils/FileClient';
import StringHelper from '@/utils/StringHelper';
//  import queries from '@/constants/queries';
//  import gql from 'graphql-tag';

export default {
  data() {
    return {
      notes: '',
      newNotes: '',
      editingNotes: false,
      show_btn: true,
      flip: false,
      edit_btn: false,
      cancel_btn: false,
      svgs: {
        vel: velip,
        res: resume,
      },
    };
  },

  props: ['item'],

  methods: {
    openSide() {
      this.$emit('openSideResume');
    },
    flipped() {
      this.flip = !this.flip;
      this.show_btn = !this.show_btn;
    },
    works() {
      this.$debug('Sample text lol');
    },
    editNotes(text) {
      this.flip = !this.flip;
      this.show_btn = !this.show_btn;
      this.editingNotes = true;
      this.newNotes = text;
    },
    editNotes2(text) {
      this.editingNotes = true;
      this.newNotes = text;
    },
    saveNotes() {
      this.editingNotes = false;
    },
    getApplicantName({ name }) {
      if (!name) return '';
      var names = name.split(' ');
      var initials;
      initials = names[0].charAt(0).toUpperCase() + names[0].substring(1, names[0].length);
      initials += ' ';
      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      initials += '.';
      return initials;
    },
    getApplicantNotesDisplayText({ notes }) {
      if (!notes) return 'N/A';
      return StringHelper.truncate(notes, 60);
    },

    getApplicantDisplayDate({ date }) {
      this.$debug(date);
      var strDate = new Date(date).toDateString().split(' ');
      strDate = strDate.slice(1, strDate.length);
      var str = '';
      for (var i = 0; i < strDate.length; ++i) {
        str += strDate[i];
        str += ' ';
      }
      return str;
    },
    async openSideResume(item) {
      this.updateApplicantStatus('opened', item._id);
      this.showSideResume = true;
      this.currentApplicant = item;
      this.currFileNum = 0;
      if (item.resumes[0] && item.resumes[0].filename) {
        const src = await FileClient.getLink(item.resumes[0].filename);
        this.currentResumeSrc = src;
      } else {
        this.currentResumeSrc = null;
      }
    },
  },
};
</script>

