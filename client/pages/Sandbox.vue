<style src="vue-scrollama/dist/vue-scrollama.css"></style>

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

<style lang="scss" scoped>
.ykunvet{
    max-width: 1008px;
    padding: 0 0px 0px 24px;
    margin: 300px auto 300px;
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
.ykunvet_text_div{
  height: 320px;
  margin-top: auto;
  margin-bottom: auto;
}
.ykunvet_phone{
  width: 432.96px;
  margin-left: 98.4px;
}
.graphic {
  //background-color: #DDD;
  margin: 0;
  display: flex;
}

</style>

<template>
  <div class="ykunvet">
    <Scrollama :offset="$store.offset" @step-enter="stepEnterHandler" @step-exit="stepExitHandler">
      <div slot="graphic" class="graphic">
        <div v-if="currStepId === 1" style="display: flex;">
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
        <div v-if="currStepId === 2" style="display: flex;">
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
        <div v-if="currStepId === 3" style="display: flex;">
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
      <div v-for="step in steps" :key="step.no" :data-step-id="step.id" class="step"/>
    </Scrollama>
  </div>
</template>

<script>
import 'intersection-observer';
import Scrollama from 'vue-scrollama';
import phone1 from '@/assets/index/new-fresh-latest-job-employment.png';
import phone2 from '@/assets/index/instant-job-application-status.png';
import phone3 from '@/assets/index/upload-unlimited-resumes.png';

export default {
  components: {
    Scrollama,
  },
  data() {
    return {
      currStepId: 1,
      pngs: {
        phone1: phone1,
        phone2: phone2,
        phone3: phone3,
      },
      steps: [
        { id: '1', title: 'Out-dated Jobs — Ugh!', content: 'You applied to a job, and weeks or even months later, the company finally replied that the job you applied to no longer exists—Does this sound familiar? Well, now that you are here with us, don’t you worry anymore! We only show you the latest jobs near your location.' },
        { id: '2', title: 'Still being kept in the dark?', content: 'Seriously? You still do not know what happens to your resume until someone replies? Then you should start using Kunvet now. No kidding. We inform all of our users about a change in their application status immediately. Whether their resume was received or viewed, they will know it right away.' },
        { id: '3', title: 'One Resume Is Not Enough.', content: 'Many of you have more than one resume—because you are very “versatile”. On Kunvet, you can upload as many resumes as you want for the different kind of jobs you apply to, and we will keep them safe and sound for whenever you need them.' },
      ],
    };
  },
  methods: {
    stepEnterHandler({ element, direction, index }) {
      console.log({ element, direction, index });
      this.currStepId = index + 1;
    },
    stepExitHandler({ element, direction, index }) {
      console.log({ element, direction, index });
      this.currStepId = index + 1;
    },
  },
};
</script>
