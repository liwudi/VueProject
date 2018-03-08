<template>
  <div class="wrapper flexBox flexCol">
    <TopBanner
      title="个人中心"
      :isShowArrow="true"
    ></TopBanner>
    <div class="flex1 bgNote">
      <div class="flexBox height100 bgOrange border-top">
        <div class="left center">
          <img class="imgDefault" :src='src' alt="">
        </div>
        <div class="right flexBox flexCol">
          <div class="colCenter flex1 colorWhite font20">mapbar_front</div>
          <div class="flex1"><span class="register">注册会员</span></div>
        </div>
      </div>
      <ComponentRightArrow
        title="个人资料"
      />
      <ComponentRightArrow
        title="我的收藏"
      />
      <ComponentRightArrow
        title="我的余额"
        class="margin-top20"
      />
      <ComponentRightArrow
        title="我的订单"
        :clickEvent="goToPage"
      />
      <ComponentRightArrow
        class="margin-top20"
        title="设置"
        :clickEvent="goToPage"
      />
      <ComponentRightArrow
        title="意见反馈"
        class="margin-top20"
      />
      <ComponentRightArrow
        title="评价"
      />
    </div>
  </div>
</template>

<script>
  import TopBanner from '../../../components/TopBanner';
  import ComponentRightArrow from '../../../components/ComponentRightArrow';
  export default {
    data: function () {
      return {
        src: this.$store.state.userInfo.userImage
      }
    },
    components:{
      TopBanner,
      ComponentRightArrow
    },
    computed: {

    },
    created: function () {

    },
    methods: {
      goToPage: function (page) {
        this.$router.push(page)
      }
    }
  }
</script>

<style scoped>
  .left{
    width: 100px;
    height: 100px;
  }
  .imgDefault{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .register{
    background: red;
    border-radius: 5px;
    padding: 3px 5px;
    color: #ffffff;
    border: 1px solid #cccccc;
  }
</style>
