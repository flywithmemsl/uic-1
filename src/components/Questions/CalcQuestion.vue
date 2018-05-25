<template>
  <div class="question">
    <h2>{{questionCard.text}}</h2>
    <div class="variants">
      <AnswerIconCard
      v-for="(variant, index) in questionCard.variants"
      :answer="variant"
      :key="index"
      :selected="variant.selected"
      @click="handleAnswerClick(answer, question)"/>
    </div>
    <div class="answers">
    </div>
  </div>
</template>

<script>
  import AnswerIconCard from '@/components/cards/AnswerIconCard'

  export default {
    props: ['question'],
    components: { AnswerIconCard },

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
h2 {
  font-family: 'Zilla Slab';
  font-weight: 300;
  font-size: 33px;
  color: #FFFFFF;
  letter-spacing: 0.7px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 40px;
  margin-bottom: 60px;
}
.variants {
  display: flex;
  justify-content: space-around;

  .card {
    overflow: hidden;
    margin-bottom: 15px;
    cursor: pointer;
    margin: 4px;
    text-align: center;
    width: 100%;

    /deep/ .info {
      display: none;
    }

    /deep/ img {
      padding: 17px 0px;
      width: 30px;
    }
  }
}
</style>
