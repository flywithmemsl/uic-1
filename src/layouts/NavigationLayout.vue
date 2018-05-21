<template>
  <div class="container" :style="{paddingTop: topImage ? '20px' : '0'}" >
    <img v-if="topImage" :src="topImage" class="top">
    <NavigationControls
      :back="back"
      :menu="menu"
      :steps='steps'
      :close='close'
      @menuClick="showMenu = !showMenu"/>
    <slot />
    <Menu v-show="showMenu" @closeClick="showMenu = !showMenu" />
  </div>
</template>

<script>

import NavigationControls from '@/components/NavigationControls'
import Menu from '@/components/shared/Menu'

export default {
  props: ['topImage', 'back', 'menu', 'steps', 'close'],

  name: 'NavigationLayout',

  components: {
    NavigationControls,
    Menu
  },

  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
}

.container {
  position: relative;

  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 13px;
  }
}
</style>
