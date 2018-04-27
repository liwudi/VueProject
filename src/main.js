// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';//引入了一个组件
import router from './router';
//配置导航守卫
router.beforeEach((to, from, next) => {
  // ...
  // console.log('to',to);
  // console.log('from',from);

  next(true);
});
router.afterEach((to, from) => {
  // ...
  if(from.fullPath == '/loginRegister'){
    //alert('页面信息保存成功！');
  }
});
import store from './store/index';



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
