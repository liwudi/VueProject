<template>
  <div class="wrapper flexBox flexCol">
    <div class="flex1 autoBox">
      <router-view></router-view>
    </div>
    <div class="navTab flexBox">
      <div class="flex1 center">
        <img src="../../assets/icons/home.png" alt="">
        <router-link  to="goShoping">去购物</router-link>
      </div>
      <div class="flex1 center">
        <router-link class="flex1 center" to="shopingCar">购物车</router-link>
      </div>
      <div class="flex1 center">
        <router-link class="flex1 center" to="myShop">我的店铺</router-link>
      </div>
      <div class="flex1 center">
        <router-link class="flex1 center" to="userCenter">用户中心</router-link>
      </div>
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
