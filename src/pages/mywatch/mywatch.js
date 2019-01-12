//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    message: "hello world"
  },
  onLoad: function() {
    this.setData({ message: "zhong hello" });
  }
});
