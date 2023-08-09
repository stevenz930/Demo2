import Vue from 'vue'
import Router from 'vue-router'
import Play from '@/components/play'
import Dynamic from '@/components/dynamic'
import Purchase from '@/components/purchase'
import Mine from '@/components/mine'
import Live from '@/components/live'
import Recommend from '@/components/recommend'
import Hot from '@/components/hot'
import Anime from '@/components/animation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/index/recommend',
    },
    {
      path: '/index/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/Purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/index/animation',
      name: 'Anime',
      component: Anime
    },
    {
      path: '/index/hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/index/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
  ]
})
