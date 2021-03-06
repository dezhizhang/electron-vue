import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';

import db from './datastore';
Vue.prototype.$db= db

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
Vue.use(VueHighcharts)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
