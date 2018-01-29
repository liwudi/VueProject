<template>
  <div class="wrapper flexBox flexCol">
    <div class="flex1">
      <router-view></router-view>
    </div>
    <div class="navTab flexBox">
      <router-link class="flex1 center" to="">去购物</router-link>
      <router-link class="flex1 center" to="shopingCar">购物车</router-link>
      <router-link class="flex1 center" to="myShop">我的店铺</router-link>
      <router-link class="flex1 center" to="userCenter">用户中心</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
  .navTab{
    height: 70px;
    background: #eeeeee;
  }
</style>
