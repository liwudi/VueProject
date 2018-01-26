<template>
  <div class="inputContainer">
    <img class="icon" src="../assets/logo.png" alt="">
    <input
      :placeholder="placeholder"
      type="text"
      v-on:input="inputEvent"
    />
  </div>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    },
    props: ['placeholder'],
    methods: {
      inputEvent: function (e) {
        var value = e.target.value;
        console.log(value)
        this.$emit('change',value)
      }
    }
  }
</script>

<style lang="scss" type="text/css" scoped>

</style>
