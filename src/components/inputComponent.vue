<template>
  <div class="inputContainer">
    <img v-if='!type' class="icon" src="../assets/icons/user.png" alt="">
    <img v-if='type' class="icon" src="../assets/icons/psd.png" alt="">
    <input
    	class="margin-left"
      :placeholder="placeholder"
      :type="thisType"
      v-on:input="inputEvent"
      v-on:blur="blurEvent"
    />
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
				thisType: this.type || 'text'
      }
    },
    props: ['placeholder','type'],
    methods: {
      inputEvent: function (e) {
        var value = e.target.value;
        console.log(value)
        this.$emit('change',value)
      },
      blurEvent: function (e) {
        var value = e.target.value;
        this.$emit('blur',value)
      }
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
	.margin-left{
		margin-left: 5px;
	}
</style>
