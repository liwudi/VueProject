<template>
  <div class="wrapper flexBox flexCol">
    <TopBanner
      title="店铺设置"
    ></TopBanner>
    <div class="flex1">
      <ComponentRightArrow
        v-for="(item,index) in showDataList"
        :key="index"
        :title="item.name"
        :index = 'index'
        :clickEvent="goToEvent"
      />
    </div>
  </div>
</template>

<script>
  import TopBanner from '../../../../components/TopBanner';
  import ComponentRightArrow from '../../../../components/ComponentRightArrow';
  export default {
    data: function () {
      return {
        showDataList: [{
          name: '店铺ID'
        },{
          name: '店铺名称'
        },{
          name: '店铺头像'
        },{
          name: '店铺简介'
        },{
          name: '店铺二维码'
        }]
      }
    },
    components: {
      TopBanner,
      ComponentRightArrow
    },
    methods:{

      goToEvent: function(index){
        console.log(index);
        (index == 0) && this.$router.push('/shopId');
        (index == 1) && this.$router.push('/shopName')
        // (index == 2) && this.$router.push('/shop')
        (index == 3) && this.$router.push('/shopInfo')
        (index == 4) && this.$router.push('/shopCode')
      }
    }
  }
</script>

<style scoped>

</style>
