<template>
  <div class = "wrapper flexBox flexCol">
    <div class="imageBox topPic">
      <img class="wrapper" src="../../assets/header.jpg" alt="">
    </div>
    <div class="loginOrRegister flexBox">
      <div class="flex1 center">登录</div>
      <div class="flex1 center">注册</div>
    </div>
    <div class="container">
      <div class="wrapper center" v-show="isLogin">
        <div class="inputBox">
          <InputComponent
            placeholder="请输入手机号"
            v-on:change="getMyPhone"
          />
          <InputComponent
            placeholder="请输入密码"
          />
          <div class="inputContainer">
            <img class="icon" src="../../assets/logo.png" alt="">
            <input v-model="userName" placeholder="请输入手机号" type="text" />
          </div>
          <div class="inputContainer">
            <img class="icon" src="../../assets/logo.png" alt="">
            <input
              v-model="passWord"
              placeholder="请输入密码"
              type="text" />
          </div>
          <div class="center">
            <div @click="loginEvent" class="btn">登录</div>
          </div>
          <div class="center">
            <router-link to="/changePassword">忘记密码</router-link>
          </div>
        </div>
      </div>
      <div class="wrapper" v-show="!isLogin"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { getList } from '../../services/AppService'
  import InputComponent from '../../components/inputComponent'

  export default {
    data: function () {
      return {
        isLogin: true,
        userName:'15910590943',
        passWord:'123456'
      }
    },
    components: { InputComponent },

    created: function () {
      getList().then(function (value) {
        console.log(value)
      });
    },
    methods: {
      getMyPhone: function (data) {
        console.log('得到数据',data);
      },
      loginEvent:function () {
        var userName = this.userName;
        var passWord = this.passWord;
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
