import Vue from 'vue'
import Router from 'vue-router'
import AllCards from '../components/AllCards'
import Card from '../components/Card'
import By from '../components/By'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/All',
      name: 'AllPhotos',
      component: AllCards,
    },
    {
      path: '/By',
      name: 'By',
      component: By,
    },
    {
      path: '/Card',
      name: 'Card',
      component: Card,
      props: true,
    },
  ],
})
