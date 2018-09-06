import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import News from '@/components/news/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
