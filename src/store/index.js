import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    acount: 10000,
    userInfo: {
      myshop: {
        id: '1251400',
        name: '天天好礼店铺',
        src: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=64433500,2577655043&fm=85&s=E9228A54A622550DAE84655D0300D0BB'
      },
      userName: 'mapbar_front',
      tellPhone: 15910590943
    }
  },
  mutations:{
    checkout: function(state,pay){
      state.acount -= pay
    },
    changShopName: function(state, name){
      state.userInfo.myshop.name = name
    }
  }
});

export default store;
