<template>
  <div class="wrapper autoBox">
    <div class="goShop_input_box center">
      <div>

      </div>
      <div class="flexBox">
        <img class="icon" src="../../../assets/logo.png" />
        <input class="initInput" type="text" placeholder="搜索你喜欢的商品、店铺" />
      </div>
      <div>

      </div>
    </div>
    <div class="goShop_swiper_box"></div>
    <div class="goShop_type_box"></div>
    <div class="goShop_this_week"></div>
    <div class="goShop_this_month"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .goShop_input_box{
    height: 60px;
    background: #00b3ee;
  }
  .goShop_swiper_box{
    height: 200px;
    background: #cccccc;
  }
  .goShop_type_box{
    height: 200px;
    background: #aaaaaa;
  }
  .goShop_this_week{
    height: auto;
    background: pink;
  }
  .goShop_this_month{
    height: auto;
    background: red;
  }
</style>
