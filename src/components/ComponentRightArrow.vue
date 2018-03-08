<template>
  <div class="flexBox border-bottom height50 bgWhite" :class="{height70:(index==2)}" @click="goToEvent">
    <div class="flex1 flexBox alignCenter margin-left20"><span class="flex1">{{title}}</span>
      <span class="margin-left20" v-if="index == 0">{{$store.state.userInfo.myshop.id}}</span>
      <span class="margin-left20" v-if="index == 1">{{$store.state.userInfo.myshop.name}}</span>
      <img class="imgDefault" v-if="index == 2" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=445905185,467876260&fm=27&gp=0.jpg" alt="">
    </div>
    <div class="arrowBox center">
      <img class="iconDefault" src="../assets/icons/rightArrow.png" alt="">
    </div>

  </div>
</template>

<script>
    export default {
        name: "component-right-arrow",
          props: ['clickEvent','title','index'],
        methods: {
          goToEvent: function(){
            if(this.title == '我的订单'){
              this.clickEvent && this.clickEvent('/myOrder')
              return
            }
            if(this.title == '设置'){
              this.clickEvent && this.clickEvent('/setPage')
              return
            }
            this.clickEvent && this.clickEvent(this.index)
          }
        }
    }
</script>

<style scoped>
  .arrowBox{
    width: 60px;
    height: 100%;
  }
  .iconDefault{
    width: 30px;
    height: 30px;
  }
  .alignCenter{
    align-items: center;
  }
  .imgDefault{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .iconDefault{
    width: 20px;
    height: 20px;
  }
</style>
