<template>
  <div class = "wrapper flexBox flexCol">
    <div class="imageBox topPic">
      <img class="wrapper" src="../../assets/header.jpg" alt="">
    </div>
    <div class="loginOrRegister flexBox">
      <div v-on:click="loginChoiceEvent" v-bind:class="{ active: isLogin }" class="flex1 center">登录</div>
      <div v-on:click="registerChoiceEvent" v-bind:class="{ active: !isLogin }" class="flex1 center">注册</div>
    </div>
    <div class="container">
      <div class="wrapper center" v-show="isLogin">
        <div class="inputBox">

          <!--这个是从components中引入的组件-->
          <!--组件化的作用：为了复用和集成-->
          <InputComponent
            placeholder="请输入手机号"
            v-on:change="getMyPhone"
            v-on:blur="phoneBlurEvent"
          />
          <p v-show="isShowPhone" class="tips">请输入手机号</p>
          <InputComponent
            placeholder="请输入密码"
            v-on:change="getPassWord"
            v-on:blur="psdBlurEvent"
            type='password'
          />
          <p v-show="isShowPsd" class="tips">请输入密码</p>

          <div class="center">
            <Button
              name="登录"
              v-on:confirm="loginEvent"
            />
          </div>
          <div class="center">
            <a v-on:click="changePsdEvent">忘记密码</a>
          </div>
        </div>
      </div>
      <div class="wrapper center" v-show="!isLogin">
        <div class="inputBox">
          <InputComponent
            placeholder="请输入手机号"
            v-on:change="registergetMyPhone"
            v-on:blur="testPhoneBlueEvent"
          />
          <p v-show="isCorrectPhone" class="tips">手机号不符合规则</p>
          <InputComponent
            placeholder="请输入密码"
            v-on:change="registergetPassWord"
            v-on:blur="testPsdBlueEvent"
            type='password'
          />
          <p v-show="isCorrectPsd" class="tips">密码不符合规则</p>
          <InputComponent
            placeholder="请重新输入密码"
            v-on:change="registergetConfirmPassWord"
            v-on:blur="testConfirmPsdBlueEvent"
            type='password'
          />
          <p v-show="isCorrectConfirmPsd" class="tips">请确认两次密码输入一致</p>
          <div class="center">
            <div @click="loginEvent" class="btn">注册</div>
          </div>
          <div class="center">
            <a v-on:click="changePsdEvent">忘记密码</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { getList } from '../../services/AppService';
  import { login } from '../../services/homeService';

  //组件的引用
  import InputComponent from '../../components/inputComponent'
  import Button from '../../components/button';
  export default {
    data: function () {
      return {
        isLogin: true,
        //登录界面数据控制
        userName:'',
        passWord:'',
        isShowPhone: false,
        isShowPsd: false,
        
        //注册界面数据控制
        registerUserName:'',
        registerPsd:'',
        isCorrectPhone: false,
        isCorrectPsd: false,
        isCorrectConfirmPsd: false
      }
    },
    // 每个的引入的组件，都必须显式的申明在这里
    components: { InputComponent,Button },

    created: function () {

    },
    methods: {
      getMyPhone: function (data) {
        console.log('phone',data);
        this.userName = data;
      },
      getPassWord: function (data) {
        console.log('password',data);
        this.passWord = data;
      },
      loginChoiceEvent: function () {
        this.isLogin = true
      },
      registerChoiceEvent: function () {
        this.isLogin = false
      },
      phoneBlurEvent: function (data) {
        console.log('userName',data);
        //如果data存在，让isShowPhone为false，相反，则为true。
        if(data){
          this.isShowPhone = false;
        }else {
          this.isShowPhone = true;
        }
      },
      psdBlurEvent: function (data) {
        if(data){
          this.isShowPsd = false;
        }else {
          this.isShowPsd = true;
        }
      },
      registergetMyPhone: function (data) {
				this.registerUserName = data;
      },
      registergetPassWord: function (data) {
				this.registerPsd = data;
      },
      registergetConfirmPassWord: function (data) {
				
      },
      testPhoneBlueEvent: function(data){
      	var reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
      	console.log('手机号',data);
      	if(reg.test(data)){
      		this.isCorrectPhone = false;
      	} else {
      		this.isCorrectPhone = true;
      	}
      },
      testPsdBlueEvent: function(data){
      	var reg = /^[a-zA-Z\d_]{6,10}$/;
      	console.log('密码',data);
      	if(reg.test(data)){
      		this.isCorrectPsd = false;
      	} else {
      		this.isCorrectPsd = true;
      	}
      },
      testConfirmPsdBlueEvent: function(data){
      	if(data == this.registerPsd){
      		this.isCorrectConfirmPsd = false;
      	} else {
      		this.isCorrectConfirmPsd = true;
      	}
      },
      
      loginEvent:function () {
        var userName = this.userName;
        var passWord = this.passWord;
        console.log(userName,passWord);
        if(userName && passWord){
        	this.$router.replace('/')
          login(userName,passWord)
            .then(function (response) {
              console.log('login',response);
              this.$router.replace('/')
            }.bind(this))
            .catch(function (error) {
              console.log(error);
            });
        }else{
          console.log(!userName,!passWord);
          this.userName && (this.isShowPhone = false);
          !this.userName && (this.isShowPhone = true);

          this.passWord && (this.isShowPsd = false);
          !this.passWord && (this.isShowPsd = true);
        }
      },
      changePsdEvent: function(){
      
      	this.$router.push('/changePassword');
      	//this.$router.replace('/changePassword')
      }
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
  .inputBox{
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .topPic{
    height: 200px;
  }
  .loginOrRegister{
    height: 60px;
    background: #eeeeee;
  }
  .container{
    flex: 1;
  }
  .active{
  	color: #0000FF;
  }

</style>
