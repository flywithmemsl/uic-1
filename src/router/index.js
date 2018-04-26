import Vue from 'vue'
import Router from 'vue-router'
import Onboarding from '@/pages/Onboarding'
import Courses from '@/pages/Courses'
import Details from '@/pages/Details'
import Cards from '@/pages/Cards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Onboarding',
      component: Onboarding
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    }
  ]
})
