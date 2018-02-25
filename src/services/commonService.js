/**
 * Created by mapbar_front on 2018/1/2.
 */
import axios from 'axios'
import Qs from 'qs'
import config from '../config'

let userInfo = null
let serviceUrl = config.serviceBaseUrl

function urlEncode (param, key, encode) {
  if (param == null) return ''
  var paramStr = ''
  var t = typeof (param)
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param)
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      paramStr += urlEncode(param[i], k, encode)
    }
  }
  return paramStr
}

function resultProcessor (result={}) {
  if (result.status === 200 || result.code === 200 || result.resultCode === 200) {
    return Promise.resolve(result.data)
  } else {
    //@todo:这里可以做一些全局的处理。
    result.message = result.message || '服务器错误'
    return Promise.reject(result)
  }
}

function request (opts, processor, isUpload) {
  let url = /^(http|https):\/\//.test(opts.url) ? opts.url : (serviceUrl + opts.url),
    options = {
      method: opts.method || 'GET',
      url: url,
      cache: false,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'token' : window.localStorage.getItem("token")
      }
    },
    queryString, formData

  if (opts.withCredentials != undefined) {
    options.withCredentials = opts.withCredentials
  }


  if (opts.data && typeof opts.data === 'object') {
    for (let _d in opts.data) {
      if ((options.method === 'GET' && opts.data[_d] === '') || opts.data[_d] === undefined || opts.data[_d] === null) {
        delete  opts.data[_d]
      } else if (opts.data[_d] == 'null') {
        delete  opts.data[_d]
      }
    }
  }

  if (options.method === 'POST') {
    if (typeof opts.data === 'string') {
      options.data = opts.data
    } else {
      if (opts.data instanceof FormData) {
        options.data = opts.data
        options.headers['Content-Type'] = undefined;
      } else if (isUpload) {
        formData = new FormData()
        if (opts.data) {
          Object.keys(opts.data).map((key) => {
            formData.append(key, opts.data[key])
          })
        }
        options.data = formData
        options.headers['Content-Type'] = undefined;
      } else {
        options.data = JSON.stringify(opts.data)
      }
    }
  } else if (options.method === 'GET') {

    if (!opts.data) opts.data = {}
    opts.data['__rid'] = Math.random()

    options.params = opts.data
    options.paramsSerializer = function (params) {
      return Qs.stringify(params);
    }
    options.url = url
  }

  processor = processor || resultProcessor

  if(userInfo){
    options.headers['token'] = userInfo.token;
  }

  return axios.request(options).then(function (res) {
    return processor(res.data)
  }, function (err) {
    return processor(err.response||err)
  })
}

export default {
  get: function (url, data, processor) {
    if (arguments.length === 2 && typeof data === 'function') {
      processor = data
      data = null
    }
    return request({
      url: url,
      data: Object.assign({}, data)
    }, processor)
  },

  post: function (url, data, processor, isUpload) {
    if (typeof data === 'function' && arguments.length === 2) {
      isUpload = processor
      processor = data
      data = null
    }
    return request({
      method: 'POST',
      url: url,
      data: isUpload ? data : Object.assign({}, data)
    }, processor, isUpload)
  },
  request: request,

  getUserInfo: function () {
    return userInfo
  },

  setUserInfo: function (user) {
    userInfo = user
  },

  setInterceptors: function (sucessInterceptor, failInterceptor) {
    if (!sucessInterceptor) sucessInterceptor = (response) => Promise.resolve(response)
    if (!failInterceptor) failInterceptor = (err) => Promise.reject(err)
    axios.interceptors.response.use(sucessInterceptor, failInterceptor)
  }
}


























