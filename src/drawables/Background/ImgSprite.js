export default class ImgSprite {
  constructor (height, width, context, imgSrc) {
    this.height = height
    this.width = width
    this.context = context
    this.imgSrc = imgSrc
  }

  getHeight () {
    return this.height
  }

  getWidth () {
    return this.width
  }

  imgURL () {
    return this.imgSrc
  }

  draw (x, y) {
    var imageObj = new Image()
    imageObj.src = this.imgSrc
    this.context.drawImage(imageObj, x, y)
  }
}
