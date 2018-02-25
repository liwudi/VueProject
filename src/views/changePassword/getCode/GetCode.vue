<template>
	<div class="wrapper flexBox flexCol">
		<TopBanner title='获取验证码'></TopBanner>
		<div class="flex1 flexBox flexCol">
	      <div class="flex1 flexBox flexCol">
	        <p class="center height150">获取验证码</p>
	        
	        <div class="center flex1 flexBox flexCol">
	          <input 
	          	class="inputDefault text-center" 
	          	type="text" 
	          	@input="changeEvent"
	          	placeholder="验证码"
	          	:value='code'
	          	 />
	          <span v-show="isShowTips" class="colorRed">验证码错误</span>
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
			<div class="colorRed center margin-top20">
				{{curentTime}}秒后重新发送
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
	    return {
	    	curentTime:30,
	    	code:'3456',
	    	isShowTips: false
	    }
    },
    components:{
      Button:Button,
      TopBanner:TopBanner
    },
    created: function(){
    	this.getCode();
    	this.timer = setInterval(()=>{
    		console.log(111111);
    		this.curentTime = this.curentTime - 1;
    		if(this.curentTime <= 0){
    			this.curentTime = 30;
    			this.getCode();
    		}
    	},1000)
    },
    beforeDestroy: function(){
    	clearInterval(this.timer);
    },
    methods:{
    	getCode:function(){
    		
    	},
    	changeEvent: function(e){
    		console.log(e);
    		this.code = e.target.value;
    	},
    	goToNext: function(){
    		if(this.code){
    			this.$router.push('/setpassword');
    		} else {
    			this.isShowTips = true;
    		}
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
