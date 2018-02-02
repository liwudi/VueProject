<template>
  <div>
    我的店铺
    {{getName}},{{getNum}}
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        name: this.$store.state.name,
        num: this.$store.state.num
      }
    },
    computed: {
      getName: function () {
        return this.$store.state.name
      },
      getNum: function () {
        return this.$store.state.num
      }
    },
  }
</script>

<style scoped>

</style>
