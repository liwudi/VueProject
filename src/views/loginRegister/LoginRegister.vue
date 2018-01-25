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
          <div class="inputContainer">
            <img class="icon" src="../../assets/logo.png" alt="">
            <input placeholder="请输入手机号" type="text" />
          </div>
          <div class="inputContainer">
            <img class="icon" src="../../assets/logo.png" alt="">
            <input placeholder="请输入密码" type="text" />
          </div>
          <div class="center">
            <div class="btn">登录</div>
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
  export default {
    data: function () {
      return {
        isLogin: true
      }
    },
    created: function () {
      getList().then(function (value) {
        console.log(value)
      });

      axios.post('http://114.55.249.153:8028/login/LoginByName', {
        username: 'Fred',
        password: 'Flintstone'
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
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
