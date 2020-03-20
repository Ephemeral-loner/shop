// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem'//字体适配
import ajax from './api/request';//Java接口配置
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI)//配置minit-ui

import Router from 'vue-router'//解决路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}//解决路由报错


Vue.config.productionTip = false
Vue.prototype.$ajax=ajax;//接口的全局变量配置

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
