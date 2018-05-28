<template>
  <div class="curse-container">
    <vue-good-wizard
      ref="wizard"
      :steps="steps"
      :finalStepLabel="'Next'"
      :onNext="nextClicked">
      <div :slot="question.id" :key="question.id" v-for="question in curse.questions">

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

      </div>
    </vue-good-wizard>
  </div>
</template>

<script>
import CardsQuestion from '@/components/questions/CardsQuestion'
import VideoQuestion from '@/components/questions/VideoQuestion'
import IconsQuestion from '@/components/questions/IconsQuestion'
import CalcQuestion from '@/components/questions/CalcQuestion'
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
    CalcQuestion
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
      return this.curse.questions.map((q) => {
        return {
          label: q.text,
          slot: q.id
        }
      })
    }
  },

  methods: {
    nextClicked(currentPage) {
      console.log(this.$refs.wizard)
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
        width: 100%;
        position: fixed;
        background: #278AB5;
        box-shadow: 0 -1px 22px 0 rgba(52,84,122,0.08);
        height: 50px;
        bottom: 0;
      }

      .pull-left {
        display: none;
      }
    }
  }
}
</style>
