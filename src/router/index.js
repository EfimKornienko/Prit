import Vue from 'vue'
import Router from 'vue-router'
import AllCards from '../components/AllCards'
import Card from '../components/Card'
import Welcome from '../components/Welcome'
import Liked from '../components/Liked'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/All',
      name: 'AllPhotos',
      component: AllCards,
    },
    {
      path: '/Liked',
      name: 'Liked',
      component: Liked,
    },
    {
      path: '/Card',
      name: 'Card',
      component: Card,
      props: true,
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
  ],
})
