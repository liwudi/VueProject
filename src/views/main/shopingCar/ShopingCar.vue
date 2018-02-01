<template>
  <div>
    购物车
    {{name}},{{num}}
  </div>
</template>

<script>
  export default {
      data: function () {
        return {
          name: this.$store.state.name,
          num: this.$store.state.num
        }
      }
  }
</script>

<style scoped>

</style>
