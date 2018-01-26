<template>
	<div class="main">
		<div class="MainImages">
			<div class="MainImagesTop">
				<a><span class="glyphicon glyphicon-chevron-left"></span>返回</a>
			</div>
		</div>
		
		<div class="MainComponent">
			<a href="#" v-on:click="MainLogin()">登录</a>
			<a href="#"v-on:click="MainRegistered()">注册</a>
		</div>
		<div class="warpper">
			<div class="MainLogin" v-show="isLogin">
				<div class="form">
					<div class="FormTel">
						<span class="glyphicon glyphicon-phone-alt"></span>
						<input type="text" placeholder="请输入手机号" />
					</div>
					<div class="FormTel">
						<span class="glyphicon glyphicon-lock"></span>
						<input type="text" placeholder="请输入密码" />
					</div>
				</div>
				<button type="button">登录</button>
				<p><router-link to="/ForgetPassword1">忘记密码？</router-link></p>
			</div>
			<div class="MainRegistered" v-show="isRegistered">
				<div class="form">
					<div class="FormTel">
						<span class="glyphicon glyphicon-phone-alt"></span>
						<input type="text" placeholder="请输入你的手机号" />
					</div>
					<div class="FormTel">
						<span class="glyphicon glyphicon-hd-video"></span>
						<input type="text" placeholder="请输入验证码" />
						<span class="video">获取验证码</span>
					</div>
					<div class="FormTel">
						<span class="glyphicon glyphicon-lock"></span>
						<input type="text" placeholder="请输入密码" />
					</div>
					<div class="FormTel">
						<span class="glyphicon glyphicon-lock"></span>
						<input type="text" placeholder="请再次输入密码" />
					</div>
				</div>
				<button type="button" v-on:click="aaa()">注册</button>
			</div>
		</div>

	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				isLogin:true,
				isRegistered:false
			}
		},
		methods:{
			MainLogin(){
				this.isLogin=true
				this.isRegistered=false
			},
			MainRegistered(){
				this.isLogin=false
				this.isRegistered=true
			},
			aaa(){
				
			}
		}
	}
</script>