// pages/news/news.js
var util=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      {'pic':'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','title':'小米上市，感恩庆典'},
      { 'pic': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'title': '小米上市，感恩庆典'},
      { 'pic': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', 'title': '小米上市，感恩庆典'},
      { 'pic': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'title': '小米上市，感恩庆典' },
      { 'pic': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'title': '小米上市，感恩庆典' },
      { 'pic': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', 'title': '小米上市，感恩庆典' }
    ],
    width: util.Screen.width/2,
    head:[
      '新品预约',
      '活动频道',
      '线下门店',
      '小米团购',
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('width____'+Device.screen.width)
    var width = util.Screen.width
    console.log(width)

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})