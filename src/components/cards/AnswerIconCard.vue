<template>
  <BaseCard @click="$emit('click')" :selected="selected" class="answer-card">
    <div class="image">
      <img class="card-photo" :src="image" />
    </div>
    <div v-if="answer.text" class="title">{{ answer.text }}</div>
  </BaseCard>
</template>

<script>
import BaseCard from './BaseCard'

export default {
  name: 'AnswerIconCard',

  props: ['answer', 'selected'],
  components: {
    BaseCard
  },

  computed: {
    image () {
      return typeof this.answer.image === 'undefined' || this.answer.image.length === 0
              ? require('../../assets/answer-img.svg')
              : require(`../../assets/${this.answer.image}`)
    }
  }
}
</script>

<style scoped lang="scss">
.answer-card {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  overflow: hidden;
  cursor: pointer;
  width: 110px;
  height: 110px !important;
  max-width: initial;

  .image {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .card-photo {
    display: block;
    width: 60px;
    height: 60px;
  }
  .title {
    padding-left: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    font-family: 'Zilla Slab';
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: left;

    padding-bottom: 0;
  }
}


</style>
