<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
import { getList,getuserInfo } from './services/AppService';
export default {
  name: 'App',
  data: function(){
    return {

    }
  },
  created: function () {
    this.$router.replace('/login')
  }
}
</script>

<style lang="scss" type="text/css">
  @import "./style/common.scss";
</style>
