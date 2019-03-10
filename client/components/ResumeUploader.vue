<style>
    .uploader-text{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        font-size: 1.25em;
        text-align: center;
    }

    .dropbox {
        outline: 2px dashed grey; /* the dash box */
        outline-offset: -5px;
        color: dimgray;
        min-height: 70px;
        position: relative;
        cursor: pointer;
        margin: 0 2px 0 -3px;
    }
    .dropbox .input-file {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        cursor: pointer;
        z-index: 5;
    }
    .dropbox:hover {
        background: lightblue; /* when mouse over to the drop zone, change color */
    }
    .vertical-center{
        position: relative;
        top: 45%;
        transform: translateY(-50%);
    }

    .upload-form{
        height: 100%;
    }

    .file-icon {
        width: 85px;
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
    <v-card flat :style="{height: this.small ? 'auto' : '80%'}">
        <v-card-title style="height: 100%; padding: 0">
            <!--change bottom div width to 100% if small dropbox-->
            <div v-if="state === 'INITIAL' || state === 'UPLOADING'" style="height: 100%; margin: 0 auto;" :style="{ width: this.small ? '100%' : '90%'}">
                <h2 v-if="!this.small" style="margin-top: 25px; margin-bottom: 10px; ">Upload Resumes</h2>
                <form class="upload-form"
                      enctype="multipart/form-data" novalidate
                >
                    <div class="dropbox" :style="{ height: this.small ? '20%' : '100%'}">
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
                            <div v-if="!small" class="icon-container">
                                <img class="file-icon" src="../assets/job_detail/pdf-icon.svg" alt="">
                                <img class="file-icon" src="../assets/job_detail/doc-icon.svg" alt="">
                            </div>
                            <p class="uploader-text">Drag or click to upload resumes and cover letters.</p>
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
      props: ['id', 'small'],
      data() {
        return {
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

          console.log(`emitting ${this.resumeName}`);
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
