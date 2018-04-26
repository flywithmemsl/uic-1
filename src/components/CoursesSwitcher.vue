<template>
  <div class="wrapper">
    <div class="items" :class="{active: currentMenu === menu }" @click="() => currentMenu = menu" :key="menu" v-for="menu in menuNames">
      {{ menu }}
    </div>
  </div> 
</template>

<script>
export default {
  props: ['menuNames'],
  data: () => ({
    currentMenu: 'All'
  })
}
</script>


<style lang="scss" scoped>
  .wrapper {
    display: flex;
    margin: 20px 0;
  }

  .items {
    font-family: 'Gotham';
    font-weight: 500;
    opacity: 0.6;
    font-size: 20px;
    color: #FFFFFF;
    line-height: 10px;
    margin-right: 22px;
    // margin-top: 10px;

    &.active {
      color: #FF6D7F;
      text-decoration: underline;
    }
  }
</style>
