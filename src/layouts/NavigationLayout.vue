<template>
  <div class="container" :style="{paddingTop: topImage ? '20px' : '0'}" >
    <img v-if="topImage" :src="topImage" class="top">
    <NavigationControls :back="true" :menu="true" />
    <slot />
  </div>
</template>

<script>
import NavigationControls from '@/components/NavigationControls'
export default {
  props: ['topImage'],
  components: {
    NavigationControls
  }
}
</script>

<style lang="scss" scoped>
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
