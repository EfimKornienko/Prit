import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import By from '../components/By'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/By',
      name: 'By',
      component: By,
    },
  ],
})
