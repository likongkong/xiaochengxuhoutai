
import { ajax as axios } from './api'


function uploadImg (params) {
  console.log(params)
  return axios.post('/api/uploadImg.htm', params).then((res) => {
    return res
  })
}

export default{
  uploadImg
}

