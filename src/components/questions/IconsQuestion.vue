<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <AnswerIconCard
          v-for="(answer, index) in questionCard.answers"
          :answer="answer"
          :key="index"
          :selected="answer.selected"
          @click="handleAnswerClick(answer, question)"/>
      </div>
    </div>
  </BaseQuestion>
</template>

<script>
import AnswerIconCard from '@/components/cards/AnswerIconCard'
import BaseQuestion from '@/components/questions/BaseQuestion'

  export default {
    props: ['question'],
    components: {
      BaseQuestion,
      AnswerIconCard
    },

    data () {
      return {
        questionCard: this.question || {}
      }
    },

  watch: {
    question:{
      handler: function (newVal) {
        this.questionCard = newVal
      },
      immediate: true
    }
  },

    methods: {
    dropActiveAnswers () {
      this.$set(this, 'questionCard', {
        text: this.question.text,
        answers: this.question.answers.map((a) => {
          return {
            image: a.image,
            text: a.text,
            selected: false
          }
        })
      })
    },
      handleAnswerClick (answer) {
        this.dropActiveAnswers()
        this.questionCard.answers.find((a) => a.text === answer.text).selected = true
        this.$emit('selectAnswer')
      }
    }
  }
</script>

<style lang="scss" scoped>
.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .card {
    flex: 1 1 0%;
    margin: 6px;
    overflow: hidden;
    margin-bottom: 15px;
    min-width: 93px;
    max-width: 31%;
    cursor: pointer;
    align-self: flex-start;
    text-align: center;
    padding: 15px;

    /deep/ .text {
      padding: 0;
    }

    /deep/ img {
      height: 60px;
    }
  }
}
</style>
