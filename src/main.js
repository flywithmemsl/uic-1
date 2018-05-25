// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
import Vuelidate from 'vuelidate'
import VueGoodWizard from 'vue-good-wizard'

Vue.config.productionTip = false

Vue.use(VueGoodWizard);
Vue.use(Vuelidate)
Vue.use(VueTouch, { name: 'v-touch' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
