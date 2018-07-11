<template>
  <div class="navigation" :style="{minHeight: topImage ? '25px' : 'initial'}">
    <img @click="$router.go(-1)" v-if="back" src="@/assets/back.png" alt="">
    <!--<div class="steps">-->
      <!--<div v-for="(step, index) in steps" :key="index">-->
        <!--<img v-if="step && step.active" class='step-img' src="@/assets/active-step-dash.svg" alt="">-->
        <!--<img v-else class='step-img' src="@/assets/step-dash.svg" alt="">-->
      <!--</div>-->
    <!--</div>-->
    <img v-if="topImage" :src="topImage" class="top">
    <img v-if="menu" src="@/assets/big_dots.png" alt="" @click="$emit('menuClick')">
    <img v-if="close" src="@/assets/close-icon.svg" alt="" @click="$emit('closeClick')">
  </div>
</template>

<script>
export default {
  name: 'NavigationControls',

  props: {
    'back': Boolean,
    'menu': Boolean,
    'steps': [Array, Object],
    'close': {
      default: false
    },
    'topImage': String
  },
}
</script>

<style scoped lang='scss'>
  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img.step-img {
      width: 25px;
      height: 6px;
      margin: 0 5px;
    }
  }

  .navigation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-top: 20px;
    position: relative;
    img {
      height: 17px;
      width: auto;
    }

    .top {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -25%);
    }
  }

  
</style>
