import wepy from 'wepy'

export default class testMixin2 extends wepy.mixin {
  data = {
    // mixin: 'This is mixin data.'
  }

  showPingFangFont(){
    wepy.loadFontFace({
      family: 'Bitstream Vera Serif Bold',
      source: 'url("http://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf")',
      success: function (res) {
        console.log(res.status) //  loaded
      },
      fail: function (res) {
        console.log(res.status) //  error
      },
      complete: function (res) {
        console.log(res.status);
      }
    });
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {//onLoad生命周期
    this.showPingFangFont();
  }
}
