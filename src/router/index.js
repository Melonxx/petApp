import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import bottom from '@/components/bottom'
import home from '@/components/home'
import follow from '@/components/follow'
import message from '@/components/message'
import personal from '@/components/personal'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/',
          component: home
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/follow',
          name: 'follow',
          component: follow
        },
        {
          path: '/message',
          name: 'message',
          component: message
        },
        {
          path: '/personal',
          name: 'personal',
          component: personal
        }
      ]
    }
  ]
})
