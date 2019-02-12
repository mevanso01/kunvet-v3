<style>
    .uploader-text{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        font-size: 12px;
    }

    .vertical-center{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .full-dropbox{
        width: 100% !important;
        height: 100%
    }

    .file-icon {
        width: 125px;
        margin: 0 15px;
        transform: translateY(15%);
    }

    .icon-container{
        display: flex;
        justify-content: center;
        /*position: absolute;*/
        /*top: 50%;*/
        /*transform: translateY(-50%);*/
    }

    .smaller-file-icon{
        height: 20px;
        width: 20px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        left: 5%;
    }

</style>

<template>
    <v-card flat style="height: 100%" :class="{'full-dropbox':'full-dropbox'}">
        <v-card-title style="height: 100%; padding: 0">
            <div v-if="state === 'INITIAL' || state === 'UPLOADING'" style="width: 100%; height: 100%;">
                <form class="upload-form" :class="{'vertical-center' : !resumeExists}"
                      enctype="multipart/form-data" novalidate
                      :style="{height: ((resumeExists && !fullDropbox) ? 16 : 80)+'%'}">
                    <div class="dropbox" :class="{'full-dropbox':'full-dropbox'}">
                        <input
                                type="file"
                                :disabled="state === 'UPLOADING'"
                                @change="updateFile($event.target.files)"
                                accept="application/pdf, application/msword,
              application/vnd.openxmlformats-officedocument.wordprocessingml.document,
              application/vnd.oasis.opendocument.text"
                                class="input-file"
                        >
                        <div v-if="state === 'INITIAL'" >
                            <div v-if="!resumeExists" class="icon-container">
                                <img class="file-icon" src="../assets/job_detail/pdf-icon.svg" alt="">
                                <img class="file-icon" src="../assets/job_detail/doc-icon.svg" alt="">
                            </div>

                            <p class="uploader-text">Drag or click to upload additional files.</p>
                        </div>

                    </div>

                </form>

            </div>
            <div style="min-height: 40px;" v-if="state === 'FAILED'">
                <h3 style="display: inline-block;">
                    Oops! Something went wrong.
                </h3>
                <p>{{ errorMessage }}</p>
            </div>
        </v-card-title>
    </v-card>
</template>
<script>
    import FileClient from '@/utils/FileClient';

    export default {
      props: ['id', 'full-dropbox', 'smalldropbox'],
      data() {
        return {
          resumes: [],
          curId: '',
          resumeName: '',
          errorMessage: '',
          file: null,
          chosenFile: null,
          client: null,
          state: 'INITIAL',
        };
      },
      mounted() {
        this.client = new FileClient();
        this.curId = this.id;
      },
      computed: {
        resumeExists() {
          return this.resumes.length > 0 || this.smalldropbox;
          // this or statement is needed to solve problem with force-refresh
        },
      },
      methods: {
        updateFile(files) {
          if (!files.length) {
            this.file = null;
          } else {
            this.file = files[0];
            this.chosenFile = files[0].name;
            this.resumeName = this.chosenFile;
            this.upload();
          }
        },
        async upload() {
          this.state = 'UPLOADING';
          if (!this.curId) {
            // Create a new file slot
            try {
              this.curId = await this.client.createFileSlot(this.file.name, this.file.type);
            } catch (e) {
              this.$error(e);
              this.state = 'FAILED';
              this.errorMessage = e.message;
              return;
            }

            this.$emit('created', this.curId);
          }
          try {
            await this.client.uploadFile(this.curId, this.file);
          } catch (e) {
            this.$error(e);
            this.state = 'FAILED';
            this.errorMessage = e.message;
            return;
          }
          this.resumes.push({
            name: this.file.name,
            filename: this.curId,
            resumeid: null,
            selected: false,
          });
          this.$emit('uploaded', this.curId, this.resumeName);
          this.reset();
        },
        selectResume(resume) {
          if (!resume.selected) {
            resume.selected = true;
            this.selectedResumes.push(resume);
          } else {
            resume.selected = false;
            for (var i = 0; i < this.selectedResumes.length; ++i) {
              if (resume.resumeid === this.selectedResumes[i].resumeid) {
                this.selectedResumes.splice(i, 1);
              }
            }
          }
        },
        cancel() {
          this.$emit('cancel');
          this.reset();
        },
        reset() {
          this.curId = '';
          this.file = null;
          this.chosenFile = null;
          this.resumeName = '';
          this.state = 'INITIAL';
        },
      },
      watch: {
        id(newId) {
          this.curId = newId;
        },
      },
    };
</script>
