import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow() {
    console.log('mixin onShow')
  }

  showToast(){
    wepy.showToast({//wepy.showToast等同于wx.showToast
      title:'拼命加载中。。。',
      icon:'loading',
      duration:3000
    });
  }

  noMore(){//普通方法直接定义到class的静态方法
    wepy.showToast({//wepy.showToast等同于wx.showToast
      title:'没更多了',
      icon:'none',
      duration:1500
    });
  }
  onLoad() {//onLoad生命周期
    this.showToast();
  }
}
