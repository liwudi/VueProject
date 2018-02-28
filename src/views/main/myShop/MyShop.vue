<template>
  <div>
    我的店铺
    {{$store.state.userName}}
    {{$store.state.age}}
    <button @click="setage">设定年龄</button>
    <button @click="setactionage">异步设定年龄</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    },
    methods: {
      setage: function(){
        console.log(this.$store.state);
        this.$store.commit('setAge',28);
      },
      setactionage: function(){
        this.$store.dispatch('ageAction');
      }
    }
  }
</script>

<style scoped>

</style>
