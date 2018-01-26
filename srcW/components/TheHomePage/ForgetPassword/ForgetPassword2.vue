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
				<p>短信验证码已发送，请输入验证码</p>
				<input type="text" placeholder="验证码" />				
			</div>
			<router-link to="/ForgetPassword3"><button type="button">下一步</button></router-link>
			<span>28秒后重发</span>
		</div>
	</div>
</template>