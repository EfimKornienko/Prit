import Vue from 'vue'
import Router from 'vue-router'
import AllCards from '../components/AllCards'
import By from '../components/By'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/All',
      name: 'AllCards',
      component: AllCards,
    },
    {
      path: '/By',
      name: 'By',
      component: By,
    },
  ],
})
