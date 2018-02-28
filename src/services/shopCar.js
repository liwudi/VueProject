import axios from 'axios';
import Config from '../config';
var serviceUrl = Config.serviceUrl;

export function goodslist() {
  return Request.get('/goods/list',{
    page: 1,
    limit: 10
  })
}
