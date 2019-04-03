import {ajax} from './api';

const apiList =  {
  uploadImg: (params) => ajax.post(`/api/uploadImg.htm`,params),
  // clubMarketApp: (params) =>  ajax.post(`/api/clubMarketApp.htm`,params),
  clubMarketApp: (params) =>  ajax.post(`/api/clubMarketApp.htm?json=${JSON.stringify(params)}`,{}),
  clubMarketAppUpdate: (params) =>  ajax.post(`/api/clubMarketAppUpdate.htm?json=${JSON.stringify(params)}`,{}),
}
export default apiList;
