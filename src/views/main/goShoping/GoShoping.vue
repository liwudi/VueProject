<template>
  <div class="wrapper autoBox">
    <!--顶部搜索栏-->
    <div class="goShop_input_box center">
      <div class="iconTitle center leftIcon">
        <img class="icon" src="../../../assets/home/home1.png" alt="">
      </div>
      <div class="flexBox center">
        <div class="flexBox bgWhite">
          <img class="icon" src="../../../assets/home/search.png" />
          <input class="initInput" type="text" placeholder="搜索你喜欢的商品、店铺" />
        </div>

      </div>
      <div class="iconTitle center rightIcon">
        <img class="icon" src="../../../assets/home/home2.png" alt="">
      </div>
    </div>

    <!--轮播图-->
    <div class="goShop_swiper_box">
      <img class="wrapper" v-bind:src="src" alt="">
    </div>



    <!--这个模块是类型列表-->
    <div class="goShop_type_box">
      <div
        class="typeBox flexColBox bgWhite border-bottom boxSizing"
        v-for="(item,index) in typeList"
        @click="classifyEvent(index)"
      >
        <img v-if="index+1 == 1" src="../../../assets/home/class1.png" alt="">
        <img v-if="index+1 == 2" src="../../../assets/home/class2.png" alt="">
        <img v-if="index+1 == 3" src="../../../assets/home/class3.png" alt="">
        <img v-if="index+1 == 4" src="../../../assets/home/class4.png" alt="">
        <img v-if="index+1 == 5" src="../../../assets/home/class5.png" alt="">
        <img v-if="index+1 == 6" src="../../../assets/home/class6.png" alt="">
        <img v-if="index+1 == 7" src="../../../assets/home/class7.png" alt="">
        <img v-if="index+1 == 8" src="../../../assets/home/class8.png" alt="">
        <p class="center">{{item.typeName}}</p>
      </div>
    </div>

    <!--这个模块是本周主打-->
    <div class="goShop_this_week flexBox flexCol">
      <div class="title">
        本周主打
        <div class="morePro">更多主打</div>
      </div>
      <div class="flexBox flexwrap">
        <div class="month-item flexBox flexCol padding5 boxSizing" v-for="item in monthList">
          <img  class="imgIcon" :src="item.src" alt="">
          <div class="flex1" style="overflow: hidden">
            <p class="oneLine">{{item.title}}</p>
            <p class="colorRed">￥{{item.price}}</p>
          </div>
        </div>

      </div>
    </div>
    <!--这个模块是本月主打-->
    <div class="goShop_this_month">
      <div class="title">
        本月推荐
        <div class="morePro">更多主打</div>
      </div>
      <div class="flexBox flexwrap">
        <div class="month-item flexBox flexCol padding5 boxSizing" v-for="item in monthList">
          <img  class="imgIcon" :src="item.src" alt="">
          <div class="flex1" style="overflow: hidden">
            <p class="oneLine">{{item.title}}</p>
            <p class="colorRed">￥{{item.price}}</p>
          </div>
        </div>

      </div>
    </div>
    <!--这个模块是家庭套装-->
    <div class="goShop_this_month">
      <div class="title">
        家庭套装
        <div class="morePro">更多主打</div>
      </div>
      <div class="flexBox flexwrap">
        <div v-for="item in ourList" class="ourItem flexBox flexCol">
          <img class="item-img" src="https://m.360buyimg.com/n1/s220x220_jfs/t7537/164/4373514672/329620/75181418/59faa9c7Nc4576b63.jpg!q70.jpg.webp" alt="" />
          <div class="flex1" style="overflow: hidden">
            <p style="width: 100px" class="oneLine padding5">mapbar_front的标题</p>
            <p class="colorRed padding5">￥12.4</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { goodslist } from '../../../services/homeService';
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
            typeIcon:'../../../assets/home/class1.png',
            typeName:'新品上架'
          },{
            typeIcon:'../../../assets/home/class2.png',
            typeName:'排毒养颜'
          },{
            typeIcon:'../../../assets/home/class3.png',
            typeName:'减肥塑形'
          },{
            typeIcon:'../../../assets/home/class4.png',
            typeName:'女士调理'
          },{
            typeIcon:'../../../assets/home/class5.png',
            typeName:'运动营养'
          },{
            typeIcon:'../../../assets/home/class6.png',
            typeName:'新血管健康'
          },{
            typeIcon:'../../../assets/home/class7.png',
            typeName:'男士健康'
          },{
            typeIcon:'../../../assets/home/class8.png',
            typeName:'精品套装'
          },
        ],
        monthList: [
          {
            src: 'https://m.360buyimg.com//mobilecms/s636x636_jfs/t10072/231/1597945576/58010/1512bd1b/59e35198N2e697952.jpg!q70.jpg.webp',
            title: '戴尔（DELL）灵越5565-1225 15.6英寸商务办公轻薄上网本手提笔记本电脑超级本 复古灰独显/E2-9000 ',
            price: 2890
          },{
            src: 'https://m.360buyimg.com//mobilecms/s636x636_jfs/t12385/213/2294411028/151946/ad97d89a/5a792030N58fb18c4.jpg!q70.jpg.webp',
            title: '桂格（Quaker）早餐谷物 膳食纤维 即食燕麦片 1000克 罐装（新老包装替换中）',
            price: 27.8
          },{
            src: 'https://m.360buyimg.com//mobilecms/s636x636_jfs/t14569/183/2442191024/79610/be4f6a49/5aa0a7fcN772e4acb.jpg!q70.jpg.webp',
            title: 'ThinkPad 联想 E570 15.6英寸商务办公学习轻薄手提笔记本电脑 【立减】标配 :7代i3/4G内存/500G硬盘 ',
            price: 47.8
          },{
            src: 'https://m.360buyimg.com//mobilecms/s636x636_jfs/t14380/299/1116614160/171937/d6d58a69/5a45eb4cN1563a0d5.jpg!q70.jpg.webp',
            title: '金龙鱼 食用油 原料欧洲进口 物理压榨 阳光葵花籽油',
            price: 55.8
          }
        ],
        ourList: [{

        },{},{},{},{},{},{},{},{}]
      }
    },
    created: function () {
      //this.getData();
    },
    methods: {
      classifyEvent: function (index) {
        var value = '新品上架';
        (index == 0) && (value = '新品上架');
        (index == 1) && (value = '排毒养颜');
        (index == 2) && (value = '减肥塑形');
        (index == 3) && (value = '女士调理');
        (index == 4) && (value = '运动营养');
        (index == 5) && (value = '新血管健康');
        (index == 6) && (value = '男士健康');
        (index == 7) && (value = '精品套装');
        this.$router.push('/classify/'+value);
      },
      /*
       * 用来获取首页数据
       */
      getData: function () {
        var _this = this;

        goodslist().then(function (value) {
          console.log(value);
          var bannerList = value.data.bannerList;
          //处理bannerList
          _this.dealBannerList(bannerList);
          //处理本周主打
          _this.dealWeekCommand();
        })
      },
      dealWeekCommand: function () {

      },
      /**
       * 处理bannerList数据
       * @param bannerList
       */
      dealBannerList: function (bannerList) {
        var _this = this
        var imgList = [];
        for(var i = 0; i < bannerList.length; i++){
          var reg = /^http/;
          if(reg.test(bannerList[i].imgpath)){
            imgList.push(bannerList[i].imgpath)
          } else {
            imgList.push('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4130523934,2683922624&fm=27&gp=0.jpg')
          }
        }
        this.imgList = imgList;
      }
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
  .ourItem{
    width: 33%;
    height: 200px;
  }
  .item-img{
    width: 100%;
    height: 130px;
  }
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
    height: auto;
  }
  .goShop_this_month{
    height: auto;
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
  .imgIcon{
    width: 150px;
    height: 150px;
  }
  .oneLine{
    overflow: hidden;
    white-space: nowrap;
    width: 150px;
    text-overflow: ellipsis;
  }
  .oneLine{
    overflow: hidden;
    white-space: nowrap;
    width: 150px;
    text-overflow: ellipsis;
  }

  .title{
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
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
  .month-item{
    width: 50%;
    height: 200px;
    box-sizing: border-box;
  }
</style>
