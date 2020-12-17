// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import cloudEchart from './components/cloudEchart'
Vue.component('cloudEchart', cloudEchart)

// import allKey from '../static/allKey.json'
import '../database/index';
// if (allKey['key']) {
//   require('../database/index')
// }

import apiHttp from './api/http.js';
Vue.prototype.$apihttp = apiHttp;
import means from './means/index'
Vue.prototype.$means = means

if (!true) {
  console.log = function(){}//置空
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
