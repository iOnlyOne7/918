// pages/kcal/kcal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      food:"",
      weight:"",
      result:"",
      foodkcal:{
          苹果:0.52,
          香蕉:0.89,
          米饭:1.17,
          鸡蛋:1.55,
          牛奶:0.54,
      }
  },

  onInputFood(e){
    this.setData({food:e.detail.value});
  },

  onInputWeight(e){
    this.setData({weight:e.detail.value});
  },

  sumKcal(){
      const {food,weight,foodkcal} = this.data;
      if (!food || !weight) {
        wx.showToast({ title: '请输入完整信息', icon: 'none' });
        return;
      }
  
      const kcalPerGram = foodkcal[food];
      if (kcalPerGram === undefined) {
        wx.showToast({ title: '暂不支持该食物', icon: 'none' });
        return;
      }
  
      const totalkcal = (parseFloat(weight) * kcalPerGram).toFixed(2);
      this.setData({ result: totalkcal });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})