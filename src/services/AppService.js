import request from './baseService';

import Config from '../config';
let configUrl = Config.serviceUrl;
function makeUrl(url) {
  return configUrl + url
}


export function getList(data) {
  return request.get(makeUrl('/shopping/listByPage'),data)
}

export function login(url,data) {
  return request.post(makeUrl('/login/LoginByName'),data)
}



