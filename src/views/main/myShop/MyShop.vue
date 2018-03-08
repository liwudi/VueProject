<template>
  <div class="wrapper flexBox flexCol">
    <TopBanner
      :title="hasInfo? '我的店铺': '申请开店'"
      :isShowArrow="true"
    ></TopBanner>
    <div v-if="hasInfo" class="flex1 flexBox flexCol">
      <div class="flexBox height100 border">
        <div class="center flex1">
          <img src="" alt="">
        </div>
        <div class="flex3">
          <div>{{$store.state.userInfo.myshop.name}}</div>
          <div @click="setEvent">店铺设置</div>
        </div>
        <div class="bgBlack colorWhite flex1">
          会员店
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
    <div v-if="!hasInfo" class="flex1">
      申请开店
    </div>
  </div>
</template>

<script>
  import TopBanner from '../../../components/TopBanner';
  export default {
    data: function () {
      return {
        hasInfo: this.$store.state.userInfo.myshop
      }
    },
    methods: {
      setEvent: function(){
        this.$router.push('/shopSet')
      }
    },
    components:{
      TopBanner
    },
  }
</script>

<style scoped>

</style>
