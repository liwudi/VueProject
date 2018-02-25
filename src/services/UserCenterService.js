import axios from 'axios';
import Config from '../config';
var serviceUrl = Config.serviceUrl;
import Request from './baseService1';

export function user() {
  return Request.get(serviceUrl + '/user/lll',{
    page: 1,
    limit: 10
  })
}
