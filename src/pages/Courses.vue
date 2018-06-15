<template>
  <NavigationLayout :back="true" :menu="true">
    <h1>My Courses</h1>
    <Switcher :menuNames="menuNames" />
    <div class="courses_wrapper">
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img src="@/assets/answer-img_1.svg" alt="">
          <div class="title">Cavity Prevention</div>
        </div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img src="@/assets/answer-img_2.svg" alt="">
          <div class="title">Baby Teeth</div>
        </div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img src="@/assets/answer-img_3.svg" alt="">
          <div class="title">Proper Brushing</div>
        </div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img src="@/assets/answer-img.svg" alt="">
          <div class="title">Prenatal Oral Care</div>
        </div>
      </div>
    </div>
    <h3>Games</h3>
    <div class="courses_wrapper">
      <div @click="navigateToCourse" class="game">
        <div class="course_top">
          <img src="@/assets/answer-img_1.svg" alt="">
          <div class="title">Cavity Math</div>
        </div>
      </div>
      <div @click="navigateToCourse" class="game">
        <div class="course_top">
          <img src="@/assets/answer-img_2.svg" alt="">
          <div class="title">Sugar</div>
        </div>
      </div>
      <div @click="navigateToCourse" class="game">
        <div class="course_top">
          <img src="@/assets/answer-img_3.svg" alt="">
          <div class="title">Memory</div>
        </div>
      </div>
      <div @click="navigateToCourse" class="game">
        <div class="course_top">
          <img src="@/assets/answer-img.svg" alt="">
          <div class="title">Matching</div>
        </div>
      </div>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import Switcher from '@/components/CoursesSwitcher'

  export default {
    data: () => ({
      menuNames: [
        {name: 'All', active: true},
        {name: 'Ongoing'},
        {name: 'Completed'}
      ]
    }),
    methods: {
      navigateToCourse() {
        this.$router.push('/details')
      }
    },
    components: {
      Switcher,
      NavigationLayout
    }
  }
</script>

<style lang="scss" scoped>

h1 {
  font-size: 30px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  margin: 1rem 0;
  font-weight: 700;
}

h2 {
  font-size: 18px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  font-weight: 700;
}
h3 {
  font-size: 20px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  font-weight: 700;
  padding: 20px 0;
}

.courses_wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;

}

.course {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;

  width: calc(50% - 10px);
  margin-bottom: 20px;
  background-color: rgba(46, 74, 110, .5) !important;
  border-radius: 10px;
  font-size: 18px;
  box-shadow: none;
  padding: 5px;
  color: #fff;

  img {
    width: 100%;
  }
  .icon {
    width: 40px;
    height: auto;
  }

  .dotts {
    position: absolute;
    top: 15px;
    right: 15px;
    width: auto;
    height: 16px;
  }
  .title {
    text-align: center;
    padding: 5px;
  }

.complete {
  font-family: sans-serif;
  opacity: 0.4;
  font-size: 14px;
  color: #1F314A;
}

  .progress_bar {
    width: 100%;
    height: 4px;
    border-radius: 50px;
    background: #152233;
    overflow: hidden;

    &::before {
      content: '';
      display: block;
      border-radius: 50px;
      width: 100%;
      height: 100%;
      transform: translateX(-50%);
      background: #87DBA2;
    }
  }
}

.game {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;

  width: calc(50% - 10px);
  margin-bottom: 20px;
  background-color: rgba(46, 74, 110, .5) !important;
  border-radius: 10px;
  font-size: 18px;
  box-shadow: none;
  padding: 5px;
  color: #fff;

  img {
    width: 100%;
  }
  .title {
    text-align: center;
  }
}

.card__text {
  font-size: 18px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  font-weight: 700;
}
</style>
