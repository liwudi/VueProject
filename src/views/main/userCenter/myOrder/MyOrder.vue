<template>
  <div class="wrapper flexBox flexCol">
    <TopBanner title="我的订单" />
    <div class="flex1 bgNote">
      <div class="flexBox height50 bgWhite">
        <div @click="clickEvent(1)" :class="{active: (currentIndex == 1)}" class="flex1 center">待付款</div>
        <div @click="clickEvent(2)" :class="{active: (currentIndex == 2)}" class="flex1 center">待发货</div>
        <div @click="clickEvent(3)" :class="{active: (currentIndex == 3)}" class="flex1 center">已发货</div>
        <div @click="clickEvent(4)" :class="{active: (currentIndex == 4)}" class="flex1 center">已完成</div>
      </div>
      <div class="margin-top20 bgWhite">
        <div class="height40 border-bottom colCenter">
          <span>订单编号：0000145667</span><span>待付款</span>
        </div>
        <div>
          <div v-for="item in payList" class="item flexBox height100 padding">
            <div class="left-box center">
              <img class="imgDefault" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2584128192,4095037283&fm=111&gp=0.jpg" alt="">
            </div>
            <div class="flex1 padding">
                <p class="font20">{{item.title}}</p>
                <span class="colorRed tips">保税区</span>
            </div>
            <div class="right-box">
                <p>￥210</p>
                <p>*1</p>
            </div>
          </div>
        </div>
        <div class="height40 border-top colCenter">
          <span>共两件商品 合计：￥180</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import TopBanner from '../../../../components/TopBanner';
    export default {
        name: "my-order",
        data: function () {
            return {
                currentIndex: 1,
                datas: [{
                  src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2584128192,4095037283&fm=111&gp=0.jpg',
                  title: 'mapbar_front的标题',
                  tips: '保税区',
                  price: 210,
                  num: 1,
                  type: 1
                },{
                  src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2584128192,4095037283&fm=111&gp=0.jpg',
                  title: '我是中国人',
                  tips: '保税区',
                  price: 210,
                  num: 1,
                  type: 2
                },{
                  src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2584128192,4095037283&fm=111&gp=0.jpg',
                  title: '我是中国人',
                  tips: '保税区',
                  price: 210,
                  num: 1,
                  type: 1
                }],
                paylist: [],
                deliveryList: [],
                deliveryedList: [],
                complateList: [],

            }
        },

        created: function () {
          this.dealDates()
        },
        components:{
          TopBanner
        },
        methods: {
            clickEvent: function (index) {
                this.currentIndex = index;
                this.dealDates()
            },
            dealDates: function () {
              if(this.currentIndex == 1){
                this.payList = this.datas.filter((item,index) => {
                  return item.type == 1
                })
              }
              if(this.currentIndex == 2){
                this.payList = this.datas.filter((item,index) => {
                  return item.type == 2
                })
              }
              if(this.currentIndex == 3){
                this.payList = this.datas.filter((item,index) => {
                  return item.type == 3
                })
              }
              if(this.currentIndex == 4){
                this.payList = this.datas.filter((item,index) => {
                  return item.type == 4
                })
              }
            }
        }
    }
</script>

<style scoped>
  .active{
    color: red;
    border-bottom: 1px solid red;
    box-sizing: border-box;
  }
  .left-box{
    width: 100px;
  }
  .tips{
    border: 1px solid orangered;
    color: orangered;
    padding: 3px 5px;
    border-radius: 5px;
    margin-top: 20px;
  }
</style>
