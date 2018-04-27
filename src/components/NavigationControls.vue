<template>
  <div class="navigation">
    <img @click="$router.go(-1)" v-if="back" src="@/assets/back.png" alt="">
    <img v-if="menu" src="@/assets/big_dots.png" alt="">
  </div>
</template>

<script>
export default {
  props: ['back', 'menu']
}
</script>

<style scoped lang='scss'>
  .navigation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-top: 40px;
    img {
      height: 17px;
      width: auto;
    }
  }
</style>
