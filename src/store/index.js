import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    acount: 10000
  },
  mutations:{
    checkout: function(state,pay){
      state.acount -= pay
    }
  }
});

export default store;
