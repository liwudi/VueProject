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
      <img v-bind:src="src" alt="">
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
    mounted: function () {
      //这里that记录的是这个vue组件的this。
      var that = this;
      var obj = new Swiper();
      obj.init();
      function Swiper() {
        //new Swiper之后，这个函数中的this，整体上都属于实例化对象，而不属于组件。
        this.index = 0;
        this.init = function () {
          //这里的_this是把Swiper的实例化对象的this给记录下来。
          var _this = this;

          setInterval(function () {
            that.src = that.imgList[_this.index];
            _this.index++;
            if(_this.index >= 3) {
              _this.index = 0;
            }
          },1000)
        }
      }
    },
    data: function () {
      return {
        src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4130523934,2683922624&fm=27&gp=0.jpg',
        imgList: [
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4130523934,2683922624&fm=27&gp=0.jpg',
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1026878786,2736392430&fm=27&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1109518445,3385503542&fm=27&gp=0.jpg'
        ],
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
