import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home';
import Keyword from '../components/keywords/Keywords';
import Report from '../components/report/Report';
import User from '../components/user/User';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    },
    {
      path:'/user',
      name:'user',
      component:User
    }
  ]
})
