<template>
  <div class="wrapper autoBox">
    <div class="goShop_input_box center">
      <div class="iconTitle center leftIcon">
        左图标
      </div>
      <div class="flexBox">
        <img class="icon" src="../../../assets/logo.png" />
        <input class="initInput" type="text" placeholder="搜索你喜欢的商品、店铺" />
      </div>
      <div class="iconTitle center rightIcon">
        右图标
      </div>
    </div>
    <div class="goShop_swiper_box">

    </div>



    <!--这个模块是类型列表-->
    <div class="goShop_type_box">
      <div class="typeBox flexColBox" v-for="item in typeList">
        <img src="../../../assets/logo.png" alt="">
        <p class="center">{{item.typeName}}</p>
      </div>
    </div>

    <div class="goShop_this_week flexBox flexCol">
      <div class="title">
        本周主打
        <div class="morePro">更多主打></div>
      </div>
      <div class="content flex1 flexBox">
        <div class="left-content flex1">
          <img class="wrapper" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=445905185,467876260&fm=27&gp=0.jpg" alt="">
        </div>
        <div class="right-content flex2 flexBox flexCol">
          <div class="right-top-content flex2">
            345
          </div>
          <div class="right-bottom-content flex3 flexBox">
            <div class="show-content flex1">
              ddf
            </div>
            <div class="show-last-content flex1">
              fff
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goShop_this_month"></div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        typeList: [
          {
            typeIcon:'../../../assets/logo.png',
            typeName:'新品上架'
          },{
            typeIcon:'../../../assets/logo.png',
            typeName:'排毒养颜'
          },{
            typeIcon:'../../../assets/logo.png',
            typeName:'减肥塑形'
          },{
            typeIcon:'../../../assets/logo.png',
            typeName:'女士调理'
          },{
            typeIcon:'../../../assets/logo.png',
            typeName:'运动营养'
          },{
            typeIcon:'../../../assets/logo.png',
            typeName:'新血管健康'
          },{
            typeIcon:'../../../assets/logo.png',
            typeName:'男士健康'
          },{
            typeIcon:'../../../assets/logo.png',
            typeName:'精品套装'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
  .goShop_input_box{
    height: 60px;
    background: #00b3ee;
    position: relative;
  }
  .leftIcon{
     position: absolute;
     left: 10px;
     top: 0;
   }
  .rightIcon{
    position: absolute;
    right: 10px;
    top: 0;
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
    height: 300px;
  }
  .goShop_this_month{
    height: auto;
    background: red;
  }
  .typeBox{
    width: 25%;
    height: 50%;
    box-sizing: border-box;
    float: left;
    img{
      width: 50px;
      height: 50px;
    }
  }
  .title{
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    color: red;
    position: relative;
  }
  .morePro{
    position: absolute;
    right: 10px;
    top: 8px;
    color: #999999;
  }
</style>
