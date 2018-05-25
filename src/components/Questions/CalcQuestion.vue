<template>
  <div class="question">
    <h2>{{questionCard.text}}</h2>
    <div class="variants">

      <draggable
        v-model="questionCard.variants"
        class="dragArea"
        :options="{group:'variants'}">

        <transition-group>
          <AnswerIconCard
            v-for="(variant, index) in questionCard.variants"
            :answer="variant"
            :key="index"
            :selected="variant.selected"
            @click="handleAnswerClick(answer, question)"/>
        </transition-group>
      </draggable>

    </div>

    <div class="answers">

      <div class="field">
        <draggable v-model="fields[0]" :options="{group:'variants'}" class="dragArea" @change="handleDragChange">
          <transition-group>
            <AnswerIconCard
              v-for="(variant, i) in fields[0]"
              :answer="variant"
              :key="i"
              :selected="variant.selected"
              @click="handleAnswerClick(answer, question)"/>
          </transition-group>
        </draggable>
      </div>

      <div class="field">
        <draggable v-model="fields[1]" :options="{group:'variants'}" class="dragArea" @change="handleDragChange">
          <transition-group>
            <AnswerIconCard
              v-for="(variant, i) in fields[1]"
              :answer="variant"
              :key="i"
              :selected="variant.selected"
              @click="handleAnswerClick(answer, question)"/>
          </transition-group>
        </draggable>
      </div>

      <div class="field">
        <draggable v-model="fields[2]" :options="{group:'variants'}" class="dragArea" @change="handleDragChange">
          <transition-group>
            <AnswerIconCard
              v-for="(variant, i) in fields[2]"
              :answer="variant"
              :key="i"
              :selected="variant.selected"
              @click="handleAnswerClick(answer, question)"/>
          </transition-group>
        </draggable>
      </div>

      <div class="field">
        <draggable v-model="fields[3]" :options="{group:'variants'}" class="dragArea" @change="handleDragChange">
          <transition-group>
            <AnswerIconCard
              v-for="(variant, i) in fields[3]"
              :answer="variant"
              :key="i"
              :selected="variant.selected"
              @click="handleAnswerClick(answer, question)"/>
          </transition-group>
        </draggable>
      </div>

      <div class="field">
        <draggable v-model="fields[4]" :options="{group:'variants'}" class="dragArea" @change="handleDragChange">
          <transition-group>
            <AnswerIconCard
              v-for="(variant, i) in fields[4]"
              :answer="variant"
              :key="i"
              :selected="variant.selected"
              @click="handleAnswerClick(answer, question)"/>
          </transition-group>
        </draggable>
      </div>

    </div>
  </div>
</template>

<script>
  import AnswerIconCard from '@/components/cards/AnswerIconCard'
  import draggable from 'vuedraggable'

  export default {
    props: ['question'],
    components: {
      AnswerIconCard,
      draggable
    },

    data () {
      return {
        questionCard: this.question || {},
        fields: {
          0: [],
          1: [],
          2: [],
          3: [],
          4: []
        }
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
      handleDragChange (e) {
        console.log(e)
      },
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
.handleDragChange {

}
.dragArea {
  min-height: 66px;
  width: 100%;

  >span {
    display: flex;
    justify-content: center;
    min-height: 66px;
    min-width: 100%;
  }
}

.field {
  border-bottom: 1px solid #fff;
  min-height: 66px;
  padding: 0 10px;
  width: calc(50% - 10px);

  .field-content {
    display: flex;
    justify-content: space-around;
  }
}

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
  span {
    display: flex;
    justify-content: space-around;
  }
}

.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  overflow: hidden;
  margin-bottom: 15px;
  cursor: pointer;
  margin: 4px;
  text-align: center;
  width: 100%;
  max-width: 60px;
  height: 70px;

  /deep/ .info {
    display: none;
  }

  /deep/ img {
    padding: 17px 0px;
    width: 30px;
  }
}
</style>
