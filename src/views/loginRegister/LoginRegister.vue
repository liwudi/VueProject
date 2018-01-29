<template>
  <div class = "wrapper flexBox flexCol">
    <div class="imageBox topPic">
      <img class="wrapper" src="../../assets/header.jpg" alt="">
    </div>
    <div class="loginOrRegister flexBox">
      <div v-on:click="loginChoiceEvent" class="flex1 center">登录</div>
      <div v-on:click="registerChoiceEvent" class="flex1 center">注册</div>
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
          />
          <p v-show="isShowPsd" class="tips">请输入密码</p>

          <div class="center">
            <Button
              name="登录"
              v-on:confirm="loginEvent"
            />
          </div>
          <div class="center">
            <router-link to="/changePassword">忘记密码</router-link>
          </div>
        </div>
      </div>
      <div class="wrapper center" v-show="!isLogin">
        <div class="inputBox">
          <InputComponent
            placeholder="请输入手机号"
            v-on:change="registergetMyPhone"
          />
          <InputComponent
            placeholder="请输入密码"
            v-on:change="getPassWord"
          />
          <InputComponent
            placeholder="请重新输入密码"
            v-on:change="getPassWord"
          />
          <div class="center">
            <div @click="loginEvent" class="btn">注册</div>
          </div>
          <div class="center">
            <router-link to="/changePassword">忘记密码</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { getList } from '../../services/AppService'

  //组件的引用
  import InputComponent from '../../components/inputComponent'
  import Button from '../../components/button';
  export default {
    data: function () {
      return {
        isLogin: true,
        userName:'',
        passWord:'',
        isShowPhone: false,
        isShowPsd: false
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
      registergetMyPhone: function () {

      },
      loginEvent:function () {
        var userName = this.userName;
        var passWord = this.passWord;
        console.log(userName,passWord);
        if(userName && passWord){
          axios.post('http://114.55.249.153:8028/login/LoginByPhone', {
            phone: userName,
            password: passWord
          })
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

</style>
