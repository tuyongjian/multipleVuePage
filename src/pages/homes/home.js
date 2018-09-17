// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './home.vue'
import router from './../management/router'
import Api from './../../api/index'

Vue.prototype.$api = Api;

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#home',
  router,
  components: { App },
  template: '<App/>'
})
