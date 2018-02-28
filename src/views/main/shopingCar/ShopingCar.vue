<template>
  <div class="wrapper flexBox flexCol">
    <TopBanner
      title='购物车'
      :isShowArrow="true"
    ></TopBanner>
    <div class="flex1 container bgNote">
      <div class="bgWhite topContainer">
        <div class="border-bottom padding">洋玩意总店</div>
        <div v-for="(item,index) in choiceList" class="flexBox height100 margin-top20">
          <div class="check-container center">
            <div
              class="checkbox"
              :style="{ background: item.isChecked ? 'red': '#fff' }"
              @click="checkEvent(index)"
            ></div>
          </div>

          <div class="img-container">
            <img
              class="imgDefault"
              src="http://c.hiphotos.baidu.com/image/h%3D300/sign=d82055dd788da977512f802b8050f872/91529822720e0cf3457ad8150146f21fbf09aa4b.jpg"
              alt="">
          </div>
          <div class="flex1">
            <div class="font-title margin5">{{item.title}}</div>
            <div class="margin5">
              <span class="colorRed">￥{{item.price}}</span>
              <span class="colorNote margin-left20">￥{{item.oldPrice}}</span>
            </div>
            <div class="margin5">
              <span @click="decEvent(index)" class="setNum">-</span>
              <span class="setNum">{{item.num}}</span>
              <span @click="addEvent(index)" class="setNum">+</span>
            </div>
          </div>
        </div>
        <div v-show="choiceList.length" class="all-price-container boxSizing padding-left colorRed colCenter">
          小计: ￥{{ allPrice }}
        </div>
        <div>
          账户余额：{{myacount}}
        </div>
      </div>

      <div class="flexBox bg editContainer boxSizing">
        <div class="bgWhite center flex3">
          <div
            class="checkbox"
            :style="{ background: isCheckedAll ? 'red': '#fff' }"
            @click="checkAllEvent"
          ></div>
          全选
        </div>
        <div class="bgGrey colorWhite center flex2">移至收藏夹</div>
        <div @click="payEvent" class="bgred colorWhite center flex2">结账</div>
        <div @click="deleteEvent" class="bgred colorWhite center flex2">删除</div>
      </div>

    </div>
  </div>
</template>

<script>

  import TopBanner from '../../../components/TopBanner';
  export default {
    data: function () {
        return {
          isCheckedAll: false,
          choiceList:[{
            isChecked: true,
            src:'http://c.hiphotos.baidu.com/image/h%3D300/sign=d82055dd788da977512f802b8050f872/91529822720e0cf3457ad8150146f21fbf09aa4b.jpg',
            title:'mapbar_front的标题1',
            price: 219,
            oldPrice: 512,
            num: 1,
            all: 5
          },{
            isChecked: false,
            src:'http://c.hiphotos.baidu.com/image/h%3D300/sign=d82055dd788da977512f802b8050f872/91529822720e0cf3457ad8150146f21fbf09aa4b.jpg',
            title:'mapbar_front的标题2',
            price: 219,
            oldPrice: 512,
            num: 1,
            all: 5
          }],
          recommendList: [{
            src:'http://c.hiphotos.baidu.com/image/h%3D300/sign=d82055dd788da977512f802b8050f872/91529822720e0cf3457ad8150146f21fbf09aa4b.jpg',
            title:'mapbar_front的标题'
          }]
        }
      },
    components:{
      TopBanner
    },
    methods: {
      checkAllEvent: function(){
        this.isCheckedAll = !this.isCheckedAll;
        for(var i = 0; i < this.choiceList.length; i++){
          if(this.isCheckedAll == true){
            this.choiceList[i].isChecked = true
          } else{
            this.choiceList[i].isChecked = false
          }
        }
      },
      checkEvent: function(index){
        console.log(index);
        this.choiceList[index].isChecked = !this.choiceList[index].isChecked;
      },
      decEvent: function(index){
        if(this.choiceList[index].num > 1){
          this.choiceList[index].num -= 1;
        }
      },
      addEvent: function(index){
        if(this.choiceList[index].num < this.choiceList[index].all){
          this.choiceList[index].num += 1;
        }
      },
      deleteEvent: function(){
        // this.choiceList = this.choiceList.filter((item,index) => {
        //   return (item.isChecked == false);
        // });

        var arr = []
        for(var i = 0; i < this.choiceList.length; i++){
          if(this.choiceList[i].isChecked == false){
            arr.push(this.choiceList[i]);
          }
        }
        this.choiceList = arr;
      },
      payEvent: function(){
        console.log('结账')
        var pay = 0;
        for(var i = 0; i < this.choiceList.length; i++){
          if(this.choiceList[i].isChecked == true){
            pay += this.choiceList[i].num * this.choiceList[i].price;
          }
        }
        this.$store.commit('checkout', pay)
      }
    },
    computed: {
      allPrice: function(){
        var allprice = 0;
        for(var i = 0; i < this.choiceList.length; i++){
          if(this.choiceList[i].isChecked == true){
            allprice += this.choiceList[i].num * this.choiceList[i].price;
          }
        }
        return allprice
      },
      myacount: function () {
        return this.$store.state.acount
      }
    }
  }
</script>

<style scoped>
  .check-container{
    width: 50px;
  }
  .img-container{
    width: 30%;
    height: 100%;
  }
  .setNum{
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border: 1px solid #cccccc;
  }
  .checkbox{
    border: 5px solid #cccccc;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
  }
  .all-price-container{
    height: 40px;
    width: 100%;
    border-top: 1px solid #cccccc;
    margin-top: 20px;
  }
  .container{
    position: relative;
  }
  .editContainer{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
</style>
