<template>
  <div class="wrapper flexBox flexCol">
    <TopBanner
      :title="hasInfo? '我的店铺': '申请开店'"
      :isShowArrow="true"
    ></TopBanner>
    <div v-if="hasInfo" class="flex1 flexBox flexCol">
      <div class="flexBox height100 border headerBox boxSizing">
        <div class="center flex1">
          <img class="imgDefault" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2584128192,4095037283&fm=111&gp=0.jpg" alt="">
        </div>
        <div class="flex3 middleFlex boxSizing padding-top padding-bottom">
          <div class="colorWhite font20">{{$store.state.userInfo.myshop.name}}</div>
          <div @click="setEvent" class="setBox center padding5">店铺设置</div>
        </div>
        <div class="bgBlack colorWhite flex1">
          会员店
        </div>
      </div>
      <div class="flexBox border-bottom height70">
        <div class="flex1 flexBox flexCol border-right">
          <p class="center flex1">今日销售总额</p>
          <p class="center flex1">￥0.00</p>
        </div>
        <div class="flex1 flexBox flexCol border-left">
          <p class="center flex1">今日总订单</p>
          <p class="center flex1">20</p>
        </div>
      </div>
      <div class="flexList margin-top20">

        <ClassifyComponent :title="item.title" :key="index" v-for="(item,index) in array"/>

      </div>
    </div>
    <div v-if="!hasInfo" class="flex1">
      申请开店
    </div>
  </div>
</template>

<script>
  import TopBanner from '../../../components/TopBanner';
  import ClassifyComponent from '../../../components/classifyComponent';
  export default {
    data: function () {
      return {
        hasInfo: this.$store.state.userInfo.myshop,
        array: [{
          title: '店铺订单'
        },{
          title: '货品管理'
        },{
          title: '分店信息'
        },{
          title: '我要推广'
        },{
          title: '红包奖励'
        },{
          title: '任务奖励'
        },{
          title: '使用帮助'
        }]
      }
    },
    methods: {
      setEvent: function(){
        this.$router.push('/shopSet')
      }
    },
    components:{
      TopBanner,
      ClassifyComponent
    },
  }
</script>

<style scoped>
  .headerBox{
    width: 100%;
    background: orangered;
  }
  .imgDefault{
    width: 60px;
    height: 60px;
  }
  .middleFlex{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .setBox{
    background: red;
    border: 1px solid #cccccc;
    width: 80px;
    color: #fff;
    border-radius: 10px;
  }
  .flexList{
    display: flex;
    flex-wrap: wrap;
  }
  .flexItem{
    width: 33%;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    height: 120px;
  }

</style>
