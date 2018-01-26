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
				<p>设置新密码</p>
				<input type="text" placeholder="新密码" />				
			</div>
			<div class="form" style="margin-top: 0.6rem;">
				<input type="text" placeholder="确认新密码" />				
			</div>
			<router-link to="/ForgetPassword3"><button type="button">完成</button></router-link>
		</div>
	</div>
</template>