import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import News from '../components/news/News'
import Header from '../components/header/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
       path:'/',
       name:'header',
       component:Header
    },
    {
      path: '/home',
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
