<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <object :data="question.link"></object>
      </div>
    </div>
  </BaseQuestion>
</template>

<script>
import AnswerCard from '@/components/cards/AnswerCard'
import BaseQuestion from '@/components/Questions/BaseQuestion'

  export default {
    props: ['question'],
    components: {
      BaseQuestion,
      AnswerCard
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
  justify-content: space-around;

  .card {
    overflow: hidden;
    margin-bottom: 15px;
    min-width: 145px;
    cursor: pointer;
  }
}
</style>
