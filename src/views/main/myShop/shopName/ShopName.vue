<template>
  <div class="wrapper flexBox flexCol">
    <TopBanner
      title="店铺名称"
    ></TopBanner>
    <div class="flex1">
      <input type="text" @input="inputEvent" />
    </div>
  </div>
</template>

<script>
  import TopBanner from '../../../../components/TopBanner';
  export default {
    data: function () {
      return {
        inputValue: ''
      }
    },
    components: {
      TopBanner
    },
    methods:{
      inputEvent: function(e){
        this.inputValue = e.target.value;
        var value = e.target.value;
        this.$store.commit('changShopName',value);
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
</style>
