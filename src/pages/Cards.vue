<template>
  <NavigationLayout :topImage="require('@/assets/top.png')" :back="true" :menu="true">
    <div>
      <h1>Cavity Prevention</h1>
      <TabsSwitcher :tabs="tabs">
        <div class="cards" slot="form_0">
          <div>
            <div class="content">
              <div class="title">Introduction</div>
              <div class="article">Article</div>
              <div class="text">Lorem ipsum dolor sit amet,consectetur adipiscing elit sed eiusmod tempor</div>
            </div>
            <img src='@/assets/card.png' class="card main">
            <img src='@/assets/card.png' class="card one">
            <img src='@/assets/card.png' class="card two">
            <img src='@/assets/card.png' class="card three">
          </div>
        </div>

        <div slot="form_1">card 2</div>
      </TabsSwitcher>
    </div>
  </NavigationLayout>
</template>


<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import Switcher from '@/components/CoursesSwitcher'
import TabsSwitcher from '@/components/shared/TabsSwitcher'

export default {
  data: () => ({
    menuNames: [
      {name: 'Lessons', active: true},
      {name: 'Review'},
      {name: 'About'}
    ],

    tabs: ['Lessons', 'Review', 'About']
  }),
  components: {
    Switcher,
    TabsSwitcher,
    NavigationLayout
  }
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

  h1 {
    margin-top: 20px;
    color: #fff;
  }

  .card {
    position: absolute;
    height: auto;
    width: 274px;
    box-shadow: 0 27px 36px 0 rgba(0,14,31,0.54);
    border-radius: 10px;

    &.main {
      z-index: 5;
    }

    &.one {
      right: 5px;
      z-index: 4;
      transform: scale(0.9);
      box-shadow: 0 27px 36px 0 rgba(0,14,31,0.54);
    }

    &.two {
      right: -25px;
      z-index: 3;
      transform: scale(0.8);
      box-shadow: 0 27px 36px 0 rgba(0,14,31,0.54);
    }

    &.three {
      right: -53px;
      z-index: 2;
      transform: scale(0.7);
      box-shadow: 0 27px 36px 0 rgba(0,14,31,0.54);
    }
  }

  .cards {
    position: relative;
    margin-top: 40px;
    width: 100%;
  }

  .content {
    z-index: 6;
    position: absolute;
    top: 115px;
    left: 28px;
    color: #fff;
    font-size: 18px;
    text-align: center;

  }
  .title {
    font-family: 'Lato';
    font-size: 22px;
    margin-top: 20px;
  }

  .article {
    font-family: 'Lato';
    opacity: 0.6;
    margin-bottom: 20px;
  }

  .text {
    font-family: 'Lato';
    opacity: 0.8;
    width: 220px;
    margin-top: 50px;
  }

</style>
