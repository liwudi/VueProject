<template>
	<div class="wrapper flexBox flexCol">
		<TopBanner title='找回密码'></TopBanner>
		<div class="flex1 flexBox flexCol">
			<div class="flex1">
				<p class="center height200">请输入你的手机号码</p>
				<div class="center">
					<input class="inputDefault text-center" type="text" placeholder="手机号" />
				</div>
			</div>
			<div class="flex1">
				<div class="center">
					<Button
					name="下一步"
					class="btn"
					v-on:confirm="goToNext"
					></Button>
				</div>

			</div>
		</div>
	</div>

</template>
<script>
	import Button from '../../components/button.vue';
	import TopBanner from '../../components/TopBanner.vue'
	export default {
		data: function(){
			return {}
		},
		components:{
			Button:Button,
			TopBanner:TopBanner
		},
		methods:{
			backEvent: function(){
				this.$router.back(-1);
			},
			goToNext: function(){
				this.$router.push('/getcode');
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
