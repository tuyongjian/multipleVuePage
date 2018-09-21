
import axios from 'axios';
// 配置API接口地址
const root = process.env.API_ROOT

var http = axios.create({
  baseURL: root,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  transformRequest: function (data) {
    var newData = '';
    for (var k in data) {
      if (data.hasOwnProperty(k) === true) {
          newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData.slice(0,newData.length-1);
  }
});


///////////////////////////////
//
// 拦截器的实例要和axios保持一致
// 例如 上面定义了一个 axios实例叫做 http
// 所以 下面的拦截器也定义为 http.interceptors
//////////////////////////////
//http request 拦截器
http.interceptors.request.use(
  config => {
    return config;
  }, error => {
    return Promise.reject(error);
  }
);

//http response 拦截器
http.interceptors.response.use(
  response => {
    console.log("----------------"+response.status)
    console.log("----------------"+response.data.success);
    if(response.data.success===false){
      alert(response.data.message);
    }
    return response;
  },error => {
    console.log("----------------"+error.response.status)
    console.log("----------------"+error.response.data)
    return Promise.reject(error)
  }
)

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    response(err);
  })
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}
