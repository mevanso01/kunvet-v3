<style>
    .file-icon {
        width: 125px;
        margin: 0 15px;
        transform: translateY(55%);
    }

    .icon-container{
        display: flex;
        justify-content: center;
    }

    .uploader-text{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .existing-container{
        width: 90%;
        margin: 50px auto 0 auto;
    }

    .existing-file{
        margin-bottom: 10px;
        display: flex;
        justify-content: start;
        background-color: #eee;
        width: 100%;
        height: 70px;
    }

    .existing-file p{
        line-height: 70px;
        transform: translateX(50px);
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
    <v-card flat style="max-width: 100%; height: 100%;">
        <v-card-title style="height: 100%;">
            <div v-if="state === 'INITIAL' || state === 'UPLOADING'" style="width: 100%; height: 100%;">
                <form enctype="multipart/form-data" novalidate style="width: 90%; margin: 0 auto" :style="{height: (this.resumeExists ? 40 : 80)+'%'}">
                    <h2 style="margin: 10px 0">Upload Resume</h2>
                    <div class="dropbox" style="height: 100%;">
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
                            <div class="icon-container">
                                <img class="file-icon" :style="{height: (this.resumeExists ? 50 : 125)+'px'}" src="../assets/job_detail/pdf-icon.svg">
                                <img class="file-icon" :style="{height: (this.resumeExists ? 50 : 125)+'px'}" src="../assets/job_detail/doc-icon.svg">

                            </div>
                            <p v-if="state === 'UPLOADING'">
                                Uploading files...
                            </p>
                            <p v-else class="uploader-text" :style="{'font-size': (this.resumeExists ? 12 : 14)+'px', top: (this.resumeExists ? 50 : 60)+'%'}">Drag resume or cover letter here, or click to browse for files.</p>
                        </div>

                    </div>
                    <div style="min-height: 21px; margin: 10px 0;">
                        <p style="margin: 0;">{{ chosenFile }}</p>
                    </div>
                </form>
                <div class="existing-container" v-if="this.resumes.length > 0">
                    <h2>Existing Files</h2>
                    <div class="existing-file" v-for="file in resumes">
                        <img class="smaller-file-icon" src="../assets/job_detail/pdf-icon.svg" alt="">
                        <p>{{file.name}}</p>
                    </div>
                </div>
                <!--<v-text-field-->
                <!--v-model="resumeName"-->
                <!--style="padding: 0 2px;"-->
                <!--name="edit-modal-input"-->
                <!--hide-details-->
                <!--single-line-->
                <!--placeholder="Give this resume a name"-->
                <!--&gt;</v-text-field>-->
            </div>
            <div style="min-height: 40px;" v-if="state === 'FAILED'">
                <h3 style="display: inline-block;">
                    Oops! Something went wrong.
                </h3>
                <p>{{ errorMessage }}</p>
            </div>
        </v-card-title>
        <!--<v-card-actions>-->
        <!--<v-btn flat="flat" @click="cancel">Cancel</v-btn>-->
        <!--<v-btn :disabled="!file || !resumeName" flat="flat" @click="upload">Upload</v-btn>-->
        <!--</v-card-actions>-->
    </v-card>
</template>
<script>
    import FileClient from '@/utils/FileClient';

    export default {
      props: ['id'],
      data() {
        return {
          resumes: [],
          state: 'INITIAL',
          curId: '',
          file: null,
          chosenFile: null,
          client: null,
          resumeName: '',
          errorMessage: '',
        };
      },
      mounted() {
        this.client = new FileClient();
        this.curId = this.id;
      },
      computed: {
        resumeExists() {
          return this.resumes.length > 0;
        },
      },
      methods: {
        updateFile(files) {
          if (!files.length) {
            this.file = null;
          } else {
            this.file = files[0];
            this.chosenFile = files[0].name;
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
          });
          console.log(this.resumes);
          this.$emit('uploaded', this.curId, this.resumeName);
          this.reset();
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
