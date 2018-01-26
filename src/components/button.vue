<template>
  <div @click="loginEvent" class="btn">{{title}}</div>
</template>

<script>
  export default {
    data: function () {
      return {
        title: this.name || '确认'
      }
    },
    props:['name'],
    methods:{
      loginEvent:function () {
        this.$emit('confirm')
      }
    }
  }
</script>

<style></style>
