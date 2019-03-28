const datas =  [
    {
        imageUrl: "http://www.xiaoairenbase.cn/likongkong/head.jpg",
        type: "member"
    },
    {
        type: "btnMenu",
        list: [
          {
            row: "1",
            title: "会员支付",
            // type: 0,
            subTitle: "快速扫码支付",
            imageUrl: require("../assets/home1.png"),
            url:
              "https://wx.liantuo.com/ShopCashier/shopMemberOpera…ode.in?memberId=1292541&merchantNo=EW_N2167194458",
            openType: "webview"
          },
          {
            row: "1",
            title: "会员充值",
            // type: 1,
            subTitle: "充值有优惠哦",
            imageUrl: require("../assets/home2.png"),
            url:
              "https://wx.liantuo.com/ShopCashier/shopCashierMicr…rge.in?merchantNo=EW_N2167194458&memberId=1292541",
            openType: "webview"
          },
          {
            row: "1",
            title: "消费记录",
            // type: 3,
            subTitle: "消费明细查看",
            imageUrl: require("../assets/home4.png"),
            url:
              "https://wx.liantuo.com/ShopCashier/shopMemberOperation/memberSaleOrderList.in?memberId=1292541",
            openType: "webview"
          },
          {
            row: "1",
            title: "充值记录",
            // type: 2,
            subTitle: "充值明细查看",
            imageUrl: require("../assets/home3.png"),
            url:
              "https://wx.liantuo.com/ShopCashier/shopMemberOperation/memberRechargeList.in?memberId=1292541",
            openType: "webview"
          },
          {
            row: "1",
            title: "积分记录",
            // type: 4,
            subTitle: "积分明细查看",
            imageUrl: require("../assets/home7.png"),
            url:
              "https://wx.liantuo.com/ShopCashier/shopMemberOperation/integralRecordList.in?memberId=1292541",
            openType: "webview"
          },
          {
            row: "2",
            title: "积分商城",
            // type: 5,
            subTitle: "优享好礼兑换",
            imageUrl: require("../assets/home6.png"),
            url:
              "https://wx.liantuo.com/ShopCashier/shopMemberOperation/pointMall.in?memberId=1292541",
            openType: "webview"
          },
          {
            row: "1",
            title: "推荐给朋友",
            // type: 7,
            subTitle: "",
            imageUrl: require("../assets/home5.png"),
            url:
              "https://wx.liantuo.com/ShopCashier/shopMemberOpera…&inviteMemberId=1292541&merchantNo=EW_N2167194458",
            openType: "webview"
          }
        ]
      },
      {
        type: "freeCouponCard",
        style: "across",
        couponTabbarKey: 0,
        Items: [
          {
            couponAddStyleType: 1,
            // couponPayType:1,
            markSwitchVal:false,
            markVal:1,
            title: "免费卡券1",
            list: [
              {
                couponStyleType: 1,
                // couponPayType:1,
                title: '全品类1',
                id:'4840',
                type: "礼品兑换券",
                description: "本优惠券不可兑换现金，不可找零。",
                url:
                  "https://pos.weifrom.com/static/common/images/micro/default/2_01.jpg",
                coupons:[
                  {
                      "id": 4839,
                      "title": "全品类"
                  },
                  {
                      "id": 4840,
                      "title": "全品类1"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "chargeCouponsCard",
        style: "across",
        couponTabbarKey: 0,
        Items: [
          {
            couponAddStyleType: 1,
            // couponPayType:1,
            markSwitchVal:false,
            markVal:1,
            title: "付费卡券1",
            list: [
              {
                couponStyleType: 1,
                // couponPayType:1,
                title: '1.44代金',
                id:'4440',
                type: "礼品兑换券",
                description: "本优惠券不可兑换现金，不可找零。",
                url:
                  "https://pos.weifrom.com/static/common/images/micro/default/2_01.jpg",
                coupons:[
                  {
                      "id": 4430,
                      "title": "1.22代金"
                  },
                  {
                      "id": 4440,
                      "title": "1.44代金"
                  }
                ]
              },
              {
                couponStyleType: 1,
                // couponPayType:1,
                title: '1.22代金',
                id:'4430',
                type: "礼品兑换券",
                description: "本优惠券不可兑换现金，不可找零。",
                url:
                  "https://pos.weifrom.com/static/common/images/micro/default/2_01.jpg",
                coupons:[
                  {
                      "id": 4430,
                      "title": "1.22代金"
                  },
                  {
                      "id": 4440,
                      "title": "1.44代金"
                  }
                ]
              }
            ]
          }
        ]
      }
]

  export default {datas}
