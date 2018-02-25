import Config from '../config'
var serviceUrl = Config.serviceUrl;
import axios from 'axios';
export default {
  get: function (url,data) {
    //纠错
    if(!/^http/.test(url)){
      url = serviceUrl + url;
    }
    return axios.get(url,{
      params: data
    })
  },
  post: function (url,data) {
    return axios.post(url,data)
  }
}
