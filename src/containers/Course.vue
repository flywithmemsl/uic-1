<template>
  <div class="curse-container">
    <vue-good-wizard
      ref="wizard"
      :steps="steps"
      :finalStepLabel="'Continue'"
      nextStepLabel="Continue"
      :onNext="nextClicked">
      <div :slot="question.id" :key="question.id" v-for="(question, index) in curse.questions">

        <CardsQuestion
          v-if="question.type === 'cards'"
          :question="question"
          @selectAnswer='handelAnswerSelect' />

        <VideoQuestion
          v-if="question.type === 'video'"
          :question="question"
          @selectAnswer='handelAnswerSelect' />

        <IconsQuestion
          v-if="question.type === 'icons'"
          :question="question"
          @selectAnswer='handelAnswerSelect' />

        <CalcQuestion
          v-if="question.type === 'calc'"
          :question="question"
          @selectAnswer='handelAnswerSelect' />

        <MouthQuestion
          v-if="question.type === 'mouth'"
          :question="question"
          @selectAnswer='handelAnswerSelect' />

        <span v-if="steps[index].nextLabel" class="next-label">Next Up: {{steps[index].nextLabel}}</span>
      </div>

     
    </vue-good-wizard>
  </div>
</template>

<script>
import CardsQuestion from '@/components/questions/CardsQuestion'
import VideoQuestion from '@/components/questions/VideoQuestion'
import IconsQuestion from '@/components/questions/IconsQuestion'
import CalcQuestion from '@/components/questions/CalcQuestion'
import MouthQuestion from '@/components/questions/MouthQuestion'
// data
import CourseData from '@/data/courseSample'

export default {
  name: 'CourseContainer',

  props: {
    curseId: String
  },

  components: {
    CardsQuestion,
    IconsQuestion,
    VideoQuestion,
    CalcQuestion,
    MouthQuestion
  },

  data () {
    return {}
  },

  computed: {
    // TODO get curse by prop Id
    curse () {
      return CourseData
    },

    steps () {
      return this.curse.questions.map((q, index) => {
        return {
          label: q.text,
          slot: q.id,
          nextLabel: this.curse.questions[index + 1] ? this.curse.questions[index + 1].text : null
        }
      })
    }
  },

  mounted() {
  },

  updated() {
  },

  methods: {
    nextClicked (currentPage) {
      
      if (this.steps.length - 1 === currentPage) {
        this.$router.push('/congrats')
      } else {
        return true //return false if you want to prevent moving to next page
      }
    },

    handelAnswerSelect () {}
  }
}
</script>

<style lang="scss" scoped>
.curse-container {
  /deep/ .wizard__steps {
    height: auto;
    display: flex;
    justify-content: center;
    max-width: calc(100% - 40px);
  }

  /deep/ .wizard__step {
    height: auto;
    width: auto !important;
    min-width: 25px;
    margin-left: 5px;
    margin-right: 5px;

    &.active {
      .wizard__step__indicator {
        background-color: #87DBA2;
        opacity: 1;
      }
    }

    .wizard__step__indicator {
      border: none;
      margin-left: auto;
      width: 25px;
      height: 6px;
      border-radius: 5px;
      background-color: #87DBA2;
      opacity: 0.2;
    }

    .wizard__step__line,
    .wizard__step__label {
      display: none;
    }
  }

  /deep/ .wizard__arrow {
    display: none;
  }

  /deep/ .wizard__body {
    margin: 0;
    background-color: transparent;
    border: none;

    .wizard__body__step {
      padding: 0;
    }

    .wizard__body__actions {
      background-color: transparent;
      border: none;
      display: flex;
      justify-content: center;

      .wizard__next,
      .final-step {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Zilla Slab';
        font-weight: 300;
        font-size: 19px;
        height: 50px;
        text-align: center;
        letter-spacing: 0.94px;

        background-color: #278ab5;
        border-radius: 100px;
        margin: 30px auto;
        color: #FFFFFF;
        box-shadow: 0px 30px 29px -22px rgba(0, 0, 0, 0.39);
        width: 300px;
      }

      .pull-left {
        display: none;
      }

      .wizard__next .vgw-icon {
        display: none;
      }
    }
  }
}

.next-label {
  position: fixed;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  font-family: 'Zilla Slab';
  font-size: 15px;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  text-align: center;
}
</style>
