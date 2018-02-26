<template>
	<div class="topBanner center colorWhite bgred">
		<img
      v-if="!isShowArrow"
      @click="backEvent"
      class="iconPosition"
      src="../assets/icons/back.png"
    />
		{{name}}
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				name: this.title || '顶部导航栏'
			}
		},
		props: ['title','isShowArrow'],
		methods:{
			backEvent: function(){
				this.$router.back(-1);
			}
		}
	}
</script>

<style lang="scss" type="text/css" scoped>
	.iconPosition{
		width: 40px;
		height: 40px;
		position: absolute;
		left: 5px;
		top: 50%;
		transform: translateY(-50%);
	}
  .topBanner{
    width: 100%;
    height: 50px;
    position: relative;
  }
</style>
