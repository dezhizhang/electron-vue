import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home';
import Keyword from '../components/keywords/Keywords';
import Header from '../components/header/Header.vue';
import Report from '../components/report/Report';


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
      path: '/keyword',
      name: 'keyword',
      component: Keyword
    },
    {
      path:'/report',
      name:'report',
      component:Report
    }
  ]
})
