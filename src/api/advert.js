import api from './api';


const apiList =  {
  uploadImg: (params) => api.post(`/api/uploadImg.htm`,params),
  // clubMarketApp: (params) =>  ajax.post(`/api/clubMarketApp.htm`,params),
  clubMarketApp: (params) =>  api.post(`/api/clubMarketApp.htm?json=${JSON.stringify(params)}`,{}),
  clubMarketAppUpdate: (params) =>  api.post(`/api/clubMarketAppUpdate.htm`,params),
  wechatAppMerchantCode: (params) =>  api.post(`/wechatAppMerchantCode.htm`,{}),
}
export default apiList;
