Page({
  data: {
    listData:[
      {"code":"01","text":"text1","type":"type1"}
    ]
  },
  onLoad: function () {
    console.log('onLoad') 
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: ''
    })
  },
  addround:function(e){
    var that=this;
    console.log(that.data.listData.length)
    var index=that.data.listData.length+1
    var obj = {"index":index,"A":"", "B":""}
    that.data.listData.push(obj)
    that.setData({listData:that.data.listData})
  },
  minusround:function(e){
    var that=this
    that.data.listData.pop()
    that.setData({listData:that.data.listData})
  }
})
