<template>
	<div class="wrapper flexBox flexCol">
		<TopBanner title='设置密码'></TopBanner>
		<div class="flex1 flexBox flexCol">
	      <div class="flex1 flexBox flexCol">
	        <p class="center height150">设置新密码</p>

	        <div class="center flex1">
	          <input class="inputDefault text-center" type="text" placeholder="新密码" />
	        </div>
	        <div class="center flex1">
	          <input class="inputDefault text-center" type="text" placeholder="确认新密码" />
	        </div>
	      </div>
	      <div class="flex1">
	      	<div class="center">
				<Button
				name="确认"
				class="btn"
        v-on:confirm="gobackHome"
				></Button>
			</div>
	      </div>
		</div>
	</div>
</template>

<script>
	import Button from '../../../components/button.vue';
	import TopBanner from '../../../components/TopBanner.vue'
  export default {
	  data: function(){
	    return {}
    },
    components:{
      Button:Button,
      TopBanner:TopBanner
    },
    methods: {
	    gobackHome:function(){
	      //处理修改密码的逻辑。
	      this.$router.go(-3);
      }
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
	.btn{
		background: red;
		width: 60%;
		height: 50px;
	}
</style>
