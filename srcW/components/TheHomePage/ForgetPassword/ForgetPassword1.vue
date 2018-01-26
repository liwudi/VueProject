<template>
	<div class="ForgetPassword">
		<div class="ForgetHeader">
			<a onClick="javascript :history.back(-1);"><span class="glyphicon glyphicon-chevron-left"></span>返回</a>
			<p>
				找回密码
			</p>
		</div>
		<div class="ForgetContent">
			<div class="form">
				<p>请输入您的手机号</p>
				<input type="text" placeholder="手机号" />				
			</div>
			<router-link to="/ForgetPassword2"><button type="button">下一步</button></router-link>
			<button type="button" class="buttonKong">联系客服</button>
		</div>
	</div>
</template>