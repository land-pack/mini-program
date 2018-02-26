//index.js
//获取应用实例
const app = getApp()

const rq = wx.request({
  url: 'https://hmhwqhruzi.localtunnel.me', //example only, not a real interface address
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json'
  },
  success: function (res) {
    console.log(res.data)
  }
})


Page({
  data: {
    counter: 10,
    motto: 'Hello Landpack',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
      staffA:{firstName:"Frank", lastName:"AK"},
      staffB: { firstName: "Lub", lastName: "AK" },
      staffC: { firstName: "Jack", lastName: "AK" },
      array : [ 1,2,3,4,5]
  },
  //事件处理函数
  bindViewTap: function() {
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
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickMe: function(){
    this.setData({
      counter: this.data.counter + 1
    })
  }
})
