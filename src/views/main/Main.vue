<template>
  <div class="wrapper flexBox flexCol">
    <div class="flex1 autoBox">
      <router-view></router-view>
    </div>
    <div class="navTab flexBox">
      <div @click="setIndex(1)" class="flex1 center flexBox flexCol">
        <img v-show="currentIndex != 1" class="thisIcon" src="../../assets/icons/home.png" alt="">
        <img v-show="currentIndex == 1" class="thisIcon" src="../../assets/icons/home1.png" alt="">
        <router-link :class="{active: (currentIndex == 1),notActive:(currentIndex != 1)}"  to="goShoping">去购物</router-link>
      </div>
      <div @click="setIndex(2)" class="flex1 center flexBox flexCol">
        <img v-show="currentIndex != 2" class="thisIcon" src="../../assets/icons/comments.png" alt="">
        <img v-show="currentIndex == 2" class="thisIcon" src="../../assets/icons/comments1.png" alt="">
        <router-link :class="{active: (currentIndex == 2),notActive:(currentIndex != 2)}" to="shopingCar">购物车</router-link>
      </div>
      <div @click="setIndex(3)" class="flex1 center flexBox flexCol">
        <img v-show="currentIndex != 3" class="thisIcon" src="../../assets/icons/Category.png" alt="">
        <img v-show="currentIndex == 3" class="thisIcon" src="../../assets/icons/Category1.png" alt="">
        <router-link :class="{active: (currentIndex == 3),notActive:(currentIndex != 3)}" to="myShop">我的店铺</router-link>
      </div>
      <div @click="setIndex(4)" class="flex1 center flexBox flexCol">
        <img v-show="currentIndex != 4" class="thisIcon" src="../../assets/icons/account.png" alt="">
        <img v-show="currentIndex == 4" class="thisIcon" src="../../assets/icons/account1.png" alt="">
        <router-link :class="{active: (currentIndex == 4),notActive:(currentIndex != 4)}" to="userCenter">用户中心</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        currentIndex: 1
      }
    },
    methods: {
      setIndex: function(index){
        this.currentIndex = index
      }
    },
    watch: {
      $route: function(route){
        if(route.path == '/' || route.path == '/goShoping'){
          this.currentIndex = 1
        }
        if(route.path == '/shopingCar'){
          this.currentIndex = 2;
        }
        if(route.path == '/myShop'){
          this.currentIndex = 3
        }
        if(route.path == '/userCenter'){
          this.currentIndex = 4
        }
      }
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
  .navTab{
    height: 70px;
    background: #eeeeee;
  }
  .thisIcon{
    width: 25px;
    height: 25px;
  }
  .active{
    color: red;
    text-decoration: none;
  }
  .notActive{
    color: #999999;
    text-decoration: none;
  }
</style>
