import axios from 'axios'
const ajax = axios.create({
 withCredentials: true,
 baseURL:'http://wdtest.liantuo.com',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
  }
})


ajax.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
ajax.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export { ajax }

