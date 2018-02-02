// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';//引入了一个组件
import router from './router'

import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: 'liwudi',
    num: 1
  },
  getters: {
    nameArray: function (state) {
      return state.name.split('')
    }
  },
  mutations:{
    CHANGE:function (state) {
      setTimeout(function () {
        state.num++
      },1000)
    }
  },
  actions: {
    add: function (context) {
      setTimeout(function () {
        context.commit('CHANGE')
      },1000)

    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
