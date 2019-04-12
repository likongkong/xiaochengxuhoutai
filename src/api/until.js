const datas = {
  ids:[],
  setting: {
    title: "页面设置",
    supportSwitchVal: true,
    supportVal: "联拓富",
  },
  footer: {
    type: "tabBar",
    list: [
      {
        iconPath: 'http://club.liantuobank.com/imgPath/club-open/1554278151947.png',
        selectedIconPath: 'http://club.liantuobank.com/imgPath/club-open/1554278135326.png',
        name: "会员首页"
      }
    ]
  },
  contents: [
    {
      imageUrl: 'http://club.liantuobank.com/imgPath/club-open/1554270278615.png',
      type: "member"
    },
    {
      type: "btnMenu",
      list: [
        {
          row: "1",
          title: "会员支付",
          type: 0,
          subTitle: "快速扫码支付",
          imageUrl: 'http://club.liantuobank.com/imgPath/club-open/1554271496105.png',
          url:
            "https://wx.liantuo.com/ShopCashier/shopMemberOpera…ode.in?memberId=1292541&merchantNo=EW_N2167194458",
          openType: "webview"
        },
        {
          row: "1",
          title: "会员充值",
          type: 1,
          subTitle: "充值有优惠哦",
          imageUrl: 'http://club.liantuobank.com/imgPath/club-open/1554271522556.png',
          url:
            "https://wx.liantuo.com/ShopCashier/shopCashierMicr…rge.in?merchantNo=EW_N2167194458&memberId=1292541",
          openType: "webview"
        },
        {
          row: "1",
          title: "消费记录",
          type: 3,
          subTitle: "消费明细查看",
          imageUrl: 'http://club.liantuobank.com/imgPath/club-open/1554271553808.png',
          url:
            "https://wx.liantuo.com/ShopCashier/shopMemberOperation/memberSaleOrderList.in?memberId=1292541",
          openType: "webview"
        },
        {
          row: "1",
          title: "充值记录",
          type: 2,
          subTitle: "充值明细查看",
          imageUrl: 'http://club.liantuobank.com/imgPath/club-open/1554271537554.png',
          url:
            "https://wx.liantuo.com/ShopCashier/shopMemberOperation/memberRechargeList.in?memberId=1292541",
          openType: "webview"
        },
        {
          row: "1",
          title: "积分记录",
          type: 4,
          subTitle: "积分明细查看",
          imageUrl: 'http://club.liantuobank.com/imgPath/club-open/1554271781393.png',
          url:
            "https://wx.liantuo.com/ShopCashier/shopMemberOperation/integralRecordList.in?memberId=1292541",
          openType: "webview"
        },
        {
          row: "2",
          title: "积分商城",
          type: 5,
          subTitle: "优享好礼兑换",
          imageUrl: 'http://club.liantuobank.com/imgPath/club-open/1554271807517.png',
          url:
            "https://wx.liantuo.com/ShopCashier/shopMemberOperation/pointMall.in?memberId=1292541",
          openType: "webview"
        },
        {
          row: "1",
          title: "推荐给朋友",
          type: 7,
          subTitle: "",
          imageUrl: 'http://club.liantuobank.com/imgPath/club-open/1554271750989.png',
          url:
            "https://wx.liantuo.com/ShopCashier/shopMemberOpera…&inviteMemberId=1292541&merchantNo=EW_N2167194458",
          openType: "webview"
        }
      ]
    },
   
  ]
}




export default { datas }
