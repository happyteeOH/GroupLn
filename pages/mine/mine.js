let col1H = 0;
let col2H = 0;

Page({

  data: {
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: []
  },

  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        this.loadImages();
      }
    })
  },

  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //å›¾ç‰‡åŽŸå§‹å®½åº¦
    let oImgH = e.detail.height;        //å›¾ç‰‡åŽŸå§‹é«˜åº¦
    let imgWidth = this.data.imgWidth;  //å›¾ç‰‡è®¾ç½®çš„å®½åº¦
    let scale = imgWidth / oImgW;        //æ¯”ä¾‹è®¡ç®—
    let imgHeight = oImgH * scale;      //è‡ªé€‚åº”é«˜åº¦

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imageObj);
    } else {
      col2H += imgHeight;
      col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    };

    if (!loadingCount) {
      data.images = [];
    }

    this.setData(data);
  },

  loadImages: function () {
    let images = [
      { pic: "../../images/1.png", height: 0 },
      { pic: "../../images/2.png", height: 0 },
      { pic: "../../images/3.png", height: 0 },
      { pic: "../../images/4.png", height: 0 },
      { pic: "../../images/5.png", height: 0 },
      { pic: "../../images/6.png", height: 0 },
      { pic: "../../images/7.png", height: 0 },
      { pic: "../../images/8.png", height: 0 },
      { pic: "../../images/9.png", height: 0 },
      { pic: "../../images/10.png", height: 0 },
      { pic: "../../images/11.png", height: 0 },
      { pic: "../../images/12.png", height: 0 },
      { pic: "../../images/13.png", height: 0 },
      { pic: "../../images/14.png", height: 0 }
    ];

    let baseId = "img-" + (+new Date());

    for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + "-" + i;
    }

    this.setData({
      loadingCount: images.length,
      images: images
    });
  }

})