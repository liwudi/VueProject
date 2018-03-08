<template>
  <div class="flexItem flexBox flexCol">
    <div class="flex3 center">
      <img v-if="title=='店铺订单'" class="imgDefault" src="../assets/classify/icon1.png" alt="">
      <img v-if="title=='货品管理'" class="imgDefault" src="../assets/classify/icon2.png" alt="">
      <img v-if="title=='分店信息'" class="imgDefault" src="../assets/classify/icon3.png" alt="">
      <img v-if="title=='我要推广'" class="imgDefault" src="../assets/classify/icon4.png" alt="">
      <img v-if="title=='红包奖励'" class="imgDefault" src="../assets/classify/icon5.png" alt="">
      <img v-if="title=='任务奖励'" class="imgDefault" src="../assets/classify/icon6.png" alt="">
      <img v-if="title=='使用帮助'" class="imgDefault" src="../assets/classify/icon7.png" alt="">
    </div>
    <div class="flex1 center">{{title|| '店铺订单'}}</div>
  </div>
</template>

<script>
    export default {
        name: "classify-component",
        data: function () {
          return {
            imgSrc: this.src || '../assets/classify/icon1.png'
          }
        },
        props: ['title','src']
    }
</script>

<style scoped>
  .imgDefault{
    width: 80px;
    height: 80px;
  }
</style>
