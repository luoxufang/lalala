import {
    wxRequest
  } from '@/utils/wxRequest';
  
  let env = "-test" //-dev 或者 -test
  // const apiMall = 'https://sujiefs.com/'
  const apiMall = 'http://localhost:8080/'
  
  /**
   * 获取发现好商品接口
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');
  
  //微信的jscode换取sessionKey
  const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/paishop/weixin/login.action");
  const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");
  
  //商品接口---begin
  //首页发现商品接口
  const hostGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');
  const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/api/mall/discoverList');
  //查询商品列表
  const getGoodsList = (params) => wxRequest(params, apiMall + '/api/mall/searchGoodsList');
  

  export default {
    wxJsCode2Session,
    user2session,
    getDiscoverList,
    getHomeDisvocerList,
    getGoodsList
  }
  