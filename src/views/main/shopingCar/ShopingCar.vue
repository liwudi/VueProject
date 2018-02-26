<template>
  <div class="wrapper flexBox flexCol">
    <TopBanner title='购物车' :isShowArrow="true"></TopBanner>
  </div>
</template>

<script>

  import TopBanner from '../../../components/TopBanner';
  export default {
    data: function () {
        return {
          choiceList:[{
            isChecked: true,
            src:'http://c.hiphotos.baidu.com/image/h%3D300/sign=d82055dd788da977512f802b8050f872/91529822720e0cf3457ad8150146f21fbf09aa4b.jpg',
            title:'mapbar_front的标题',
            price: 219,
            oldPrice: 512,
            num: 1
          }],
          recommendList: [{
            src:'http://c.hiphotos.baidu.com/image/h%3D300/sign=d82055dd788da977512f802b8050f872/91529822720e0cf3457ad8150146f21fbf09aa4b.jpg',
            title:'mapbar_front的标题'
          }]
        }
      },
    components:{
      TopBanner
    }
  }
</script>

<style scoped>

</style>
