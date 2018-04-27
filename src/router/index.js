import Vue from 'vue'
import Router from 'vue-router'
import Onboarding from '@/pages/Onboarding'
import Courses from '@/pages/Courses'
import Details from '@/pages/Details'
import Cards from '@/pages/Cards'
import Login from '@/pages/Login'
import SelectCharacter from '@/pages/SelectCharacter'

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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/select-character',
      name: 'SelectCharacter',
      component: SelectCharacter
    }
  ]
})
