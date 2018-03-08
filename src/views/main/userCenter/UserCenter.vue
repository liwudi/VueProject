<template>
  <div class="wrapper flexBox flexCol">
    <TopBanner
      title="个人中心"
      :isShowArrow="true"
    ></TopBanner>
    <div class="flex1 bgNote">
      <div class="flexBox height100">
        <div class="left"></div>
        <div class="right">
          <div></div>
          <div>注册会员</div>
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

</style>
