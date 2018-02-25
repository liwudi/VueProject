import axios from 'axios';
import Config from '../config';
var serviceUrl = Config.serviceUrl;
import Request from './baseService1';
var obj = axios.get(serviceUrl + '/goods/list',{
  params:{
    page: 1,
    limit: 10
  }
});

export function goodslist() {
  return Request.get('/goods/list',{
    page: 1,
    limit: 10
  })
}

export function templateFunction() {
  return Request.get(serviceUrl + '/goods/list',{
    page: 1,
    limit: 10
  })
}
export function login(userName,passWord) {
  return Request.post(serviceUrl + '/login/LoginByPhone', {
    phone: userName,
    password: passWord
  })
}

