//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0,
    banners: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    noticeList: [
      '全场买满500减200'
    ],
    coupons:[
      { 'title': '手机', 'icon':'https://s01.mifile.cn/i/logo-footer.png?v2'},
      { 'title': '电视', 'icon': 'http://i1.mifile.cn/f/i/15/item/buyphone/xiaomi8se-duibishouji.jpg' },
      { 'title': '电脑', 'icon': 'http://i1.mifile.cn/f/i/15/item/buyphone/max2-duibishouji.jpg' },
      { 'title': '智能', 'icon': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg' },
      { 'title': '新品', 'icon': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg' },
      { 'title': '电视', 'icon': 'http://i1.mifile.cn/f/i/15/item/buyphone/xiaomi8se-duibishouji.jpg' },
      { 'title': '电脑', 'icon': 'http://i1.mifile.cn/f/i/15/item/buyphone/max2-duibishouji.jpg' },
    ],
    goods:[
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99'},
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' },
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' },
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' },
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' },
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' },
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' },
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' },
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' },
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' },
      { 'pic': 'http://i1.mifile.cn/f/i/15/item/buyphone/hongmi5a-duibishouji.jpg', 'name': '红米2', 'minPrice': '655.98', 'originalPrice': '799.99' }
      
    ]
  },
  //事件处理函数
  swiperchange: function (e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
