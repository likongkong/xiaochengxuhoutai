import axios from 'axios'
import qs from 'qs'
const service = axios.create({
 withCredentials: true,
 baseURL:'http://wdtest.liantuo.com',
  // headers: {
  //   // 'X-Requested-With': 'XMLHttpRequest',
  //   'Content-Type':'application/x-www-form-urlencoded; charset=utf-8',
  //   'Access-Control-Allow-Origin': '*'
  // }
})


service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
service.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})


export default {
  post(url, data =  {}){
    return service({
      method: 'post',
      url,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}
