Page({
  data: {
    lastSeats: 1,
    completeDate: '2017-09-01',
    date:"09-01",
    time: '12:01'
  },
  dateChangeHandle:function (e) {
    this.setData({ date:e.detail.value.substr(5) })
  },
  timeChangeHandle:function (e) {
    this.setData({time:e.detail.value})
  }
})