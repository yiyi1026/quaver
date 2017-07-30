import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Quaver from '@/components/Quaver'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quaver',
      name: 'Quaver',
      component: Quaver
    }
  ]
})
