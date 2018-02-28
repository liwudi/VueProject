// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';//引入了一个组件
import router from './router';

//import store from './store/index';

// import Vuex from 'vuex';
//
// Vue.use(Vuex);
//
// const store = new Vuex.Store({
//   state: {
//     name: 'liwudi',
//     num: 1
//   },
//   getters: {
//     nameArray: function (state) {
//       return state.name.split('')
//     }
//   },
//   mutations:{
//     CHANGE:function (state) {
//       setTimeout(function () {
//         state.num++
//       },1000)
//     }
//   },
//   actions: {
//     add: function (context) {
//       setTimeout(function () {
//         context.commit('CHANGE')
//       },1000)
//
//     }
//   }
// });
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userName: 'liwudi',
    age: 26
  },
  mutations:{
    setAge: function(state,age){
      state.age = age;
    }
  },
  actions: {
    ageAction: function(context){
      setTimeout(()=>{
        context.commit('setAge',30);
      },2000);
    }
  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
