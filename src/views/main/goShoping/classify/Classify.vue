<template>
    <div class="wrapper flexBox flexCol">
      <TopBanner
        :title="title"
      />
      <div class="flex1">
        <div class="search padding5 boxSizing center">
          <div class="flexBox bgNote inputBox">
            <img class="icon" src="../../../../assets/home/search.png" alt="">
            <input placeholder="寻找你喜欢的商品" class="initInput bgNote" type="text">
          </div>
        </div>
        <div class="classify height50 flexBox border boxSizing">
          <div @click="setCurrent(1)" :class="{active: currentIndex==1}" class="center flex1 border-right">综合</div>
          <div @click="setCurrent(2)" :class="{active: currentIndex==2}" class="center flex1 border-right">销量</div>
          <div @click="setCurrent(3)" :class="{active: currentIndex==3}" class="center flex1">价格</div>
        </div>
        <div class="list">
          <div class="border-bottom flexBox" v-for="item in proList">
            <div class="flex1 center">
              <img class="imgDefault" :src="item.src" alt="">
            </div>
            <div class="flex3 padding boxSizing">
              <p class="oneLine">{{item.title}}</p>
              <p class="font14">
                <span class="colorRed font20">￥{{item.price}}</span>
                <span class="colorNote">￥{{item.oldPrice}}</span>
              </p>
              <p class="colorNote font14">{{item.num}}人购买</p>
              <p class="flexBox space-between font14">
                <span class="tips">{{item.type}}</span>
                <span class="colorNote">运费 ￥{{item.transPrice}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import TopBanner from '../../../../components/TopBanner';
    import { clone } from "../../../../utils/clone";

    export default {
        name: "classify",
        data: function () {
          return {
            title: this.id,
            currentIndex: 1,
            proList: [{
              src: 'https://img30.360buyimg.com/babel/s180x140_jfs/t18961/214/548137571/42671/c10ac076/5a9648f0Nf69f2bd5.jpg!q90!cc_180x140',
              title: 'Metabolic酵素*酵母精华 减肥排毒60粒',
              price: 345,
              oldPrice: 678,
              type: '香港直邮',
              num:117,
              transPrice: 25
            },{
              src: 'https://img30.360buyimg.com/babel/s180x140_jfs/t18961/214/548137571/42671/c10ac076/5a9648f0Nf69f2bd5.jpg!q90!cc_180x140',
              title: 'Metabolic酵素*酵母精华 减肥排毒60粒',
              price: 228,
              oldPrice: 678,
              type: '香港直邮',
              num:145,
              transPrice: 25
            },{
              src: 'https://img30.360buyimg.com/babel/s180x140_jfs/t18961/214/548137571/42671/c10ac076/5a9648f0Nf69f2bd5.jpg!q90!cc_180x140',
              title: 'Metabolic酵素*酵母精华 减肥排毒60粒',
              price: 3456,
              oldPrice: 678,
              type: '香港直邮',
              num:107,
              transPrice: 25
            }]
          }
        },
        props: ['id'],
        components: {
          TopBanner
        },
        methods:{
          setCurrent: function (index) {
            this.currentIndex = index;
            this.dealDatas(this.currentIndex)
          },
          dealDatas: function (index) {
            var item;
            var arr = clone(this.proList);
            for(var i = 0; i < arr.length; i++){
              for(var j = i+1; j < arr.length;j++){
                if(index == 2){
                  if(arr[i].num < arr[j].num){
                    item = arr[i];
                    arr[i] = arr[j];
                    arr[j] = item;
                  }
                }
                if(index == 3){
                  if(arr[i].price < arr[j].price){
                    item = arr[i];
                    arr[i] = arr[j];
                    arr[j] = item;
                  }
                }
              }
            }
            this.proList = arr;
          }
        }
    }
</script>

<style scoped>
  .imgDefault{
    width: 100px;
    height: 100px;
  }
  .space-between{
    justify-content: space-between;
  }
  .tips{
    color: orange;
    border: orange;
    font-size: 14px;
    border: 1px solid orange;
    border-radius: 5px;
  }
  .oneLine{
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .search{
    width: 100%;
  }
  .inputBox{
    border-radius: 10px;
    width: 90%;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
  }
  .active{
    color: red;
    border-bottom: 1px solid red;
  }
</style>
