import axios from 'axios';

var obj = {
  get: function (url,data) {
    return axios.get(url,{
      params:data
    })
  },
  post: function (url,data) {
    return axios.post(url,{
      params:data
    })
  }
};

export default obj;
