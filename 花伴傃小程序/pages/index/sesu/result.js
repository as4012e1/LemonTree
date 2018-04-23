// pages/index/Pigmented.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result : "",
    title1:" "
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var fs = wx.getStorageSync('fs');
    if(fs==1){
      this.data.result = "你的肌肤属于色素性皮肤"
      this.data.title1 = "肌肤特点：容易产生黑色素或色素容易 沉淀的肌肤类型。一般表现为斑点较多 、容易晒黑、痤疮或受伤后容易形成瘢痕。"
      this.setData({
        result: this.data.result,
        title1: this.data.title1,
      })
    }
    else{
      this.data.result = "你的肌肤属于非色素性皮肤"
      this.data.title1 = "肌肤特点：不容易产生黑色素或色素不容易沉淀的肌肤类型。一般表现为没什么斑点、肤色较为均匀、且痤疮或受伤后不易产生瘢痕。"
      this.setData({
        result: this.data.result,
        title1: this.data.title1,

      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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