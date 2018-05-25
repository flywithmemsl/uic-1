<template>
  <NavigationLayout :back="true" :menu="true">
    <CourseContainer :curseId="$route.params.id || 0"></CourseContainer>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import CourseContainer from '@/containers/Course'

export default {
  name: 'CoursePage',

  components: {
    NavigationLayout,
    CourseContainer
  },

  data () {
    return {
      showNextBtn: false
    }
  },

  computed: {
    steps () {
      // replace with actual data from vuex
      return [0,1,2,3,4,5].map((q, index) => {
        return index === 0 ? {active: true} : {active: false}
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .next-btn {
    background: #278AB5;
    box-shadow: 0 -1px 22px 0 rgba(52,84,122,0.08);
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 20;
  }
</style>
