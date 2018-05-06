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

              <ComponentButton
                      type="submit"
                      @click="$router.push('/article')"
                >
                Start
              </ComponentButton>
            </div>
            <img src='@/assets/card.png' class="card main">
            <img src='@/assets/card.png' class="card one">
            <img src='@/assets/card.png' class="card two">
            <img src='@/assets/card.png' class="card three">

          </div>
        </div>

        <div slot="form_1" class='reviews'>
          <ReviewCard v-if="review && review.author" v-for="(review, index) in reviews" :key="index" :review="review" />
        </div>
      </TabsSwitcher>
    </div>
  </NavigationLayout>
</template>


<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import TabsSwitcher from '@/components/shared/TabsSwitcher'
import ReviewCard from '@/components/cards/ReviewCard'

import ComponentButton from '@/components/Button'

// data
import reviews from '@/data/reviews'

export default {
  data: () => ({
    tabs: ['Lessons', 'Review', 'About'],
    reviews
  }),
  components: {
    ReviewCard,
    TabsSwitcher,
    NavigationLayout,
    ComponentButton
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
    margin-bottom: 60px;
    color: #fff;
  }

  .cards .card {
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
    font-family: 'Zilla Slab';
    font-weight: normal;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    margin-top: 20px;
  }

  .article {
    font-family: 'Lato';
    font-weight: 300;
    opacity: 0.6;
    margin-bottom: 20px;
  }

  .text {
    font-family: 'Lato';
    font-weight: 300;
    opacity: 0.8;
    width: 220px;
    margin-top: 21px;
    opacity: 0.7;
    font-size: 17px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 25px;
  }


  .reviews {
    margin-top: 60px;

    .card {
      margin-bottom: 15px;
    }
  }

</style>
