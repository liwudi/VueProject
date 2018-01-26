// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require("./assets/bootstrap/dist/css/bootstrap.css")
require("./assets/css/base.css")
require("./assets/css/style.css")
require("./assets/js/rem.js")
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
