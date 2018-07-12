<template>
  <div class="navigation" :style="{minHeight: topImage ? '25px' : 'initial'}">
    <img @click="$router.go(-1)" v-if="back && !white" src="@/assets/back.png" alt="">
    <img @click="$router.go(-1)" v-if="back && white" src="@/assets/back-white.png" alt="">
    <!--<div class="steps">-->
      <!--<div v-for="(step, index) in steps" :key="index">-->
        <!--<img v-if="step && step.active" class='step-img' src="@/assets/active-step-dash.svg" alt="">-->
        <!--<img v-else class='step-img' src="@/assets/step-dash.svg" alt="">-->
      <!--</div>-->
    <!--</div>-->
    <div
      class="top"
      v-if="topImage"
      :style="{ backgroundImage: `url(${topImage}` }"
    />
    <img v-if="menu && !white" src="@/assets/big_dots.png" alt="" @click="$emit('menuClick')">
    <img class="share-img" v-if="white" src="@/assets/share.png" alt="">
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
    'topImage': String,
    'white': Boolean
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
  z-index: 1;
  img {
    height: 17px;
    width: auto;
  }

  .share-img {
    width: 17px;
    height: 22px;
  }
}

.top {
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.12 ) 0 0 0 4px;
  width: 40px;
  height: 40px;
  background-position: 50% 5px;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #FFEBAE;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -25%);
}

  
</style>
