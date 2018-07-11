<template>
  <NavigationLayout :back="true" :menu="true" :topImage="require('@/assets/characters/character-girl-3.png')">
    <h1>Topics</h1>
    <div class="courses_wrapper">
      <div class="course" v-for="course in courses" @click="() => navigateToCourse(course.id)" :key="course.id">
        <div class="course_top" :style="{ background: `url(${course.image}) no-repeat center / cover` }" />
        <div class="course_bottom">{{course.name}}</div>
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
      ],

      courses: [
        {
          name: 'Cavity Prevention',
          image: require('@/assets/cavity-prevention.svg'),
          id: 1
        },
        {
          name: 'Baby Teeth',
          image: require('@/assets/baby-teeth.svg'),
          id: 2
        },
        {
          name: 'Proper Brushing',
          image: require('@/assets/proper-brushing.svg'),
          id: 3
        },
        {
          name: 'Prenatal Oral Care',
          image: require('@/assets/prenatal.svg'),
          id: 4
        },
        {
          name: 'Cavity Math',
          image: require('@/assets/cavity-math.svg'),
          id: 5
        },
        {
          name: 'Sugar',
          image: require('@/assets/sugar.svg'),
          id: 6
        },
        {
          name: 'Memory',
          image: require('@/assets/memory.svg'),
          id: 7
        },
        {
          name: 'Matching',
          image: require('@/assets/matching.svg'),
          id: 8
        }
      ]
    }),
    methods: {
      navigateToCourse(id) {
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
  border-radius: 10px;
  font-size: 18px;
  box-shadow: none;
  padding: 5px;
  color: #fff;

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

.course_top {
  border-radius: 50%;
  overflow: hidden;
  width: 130px;
  height: 130px;
  position: relative;
  align-self: center;
  border: 10px solid #396470;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.course_bottom {
  text-align: center;
  margin-top: 10px;
  font-family: 'Zilla Slab', serif;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0;
}
</style>
