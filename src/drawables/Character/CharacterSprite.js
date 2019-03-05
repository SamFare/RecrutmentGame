export default class CharacterSprite {
  constructor (height, width, context) {
    this.height = height
    this.width = width
    this.context = context
    this.animationStream = []
    this.currentFrame = -1
  }
  specifyAnamationStream (stream) {
    this.animationStream = stream
  }

  getAnnamationStream () {
    return this.animationStream
  }

  getHeight () {
    return this.height
  }

  getWidth () {
    return this.width
  }

  updateFrameId () {
    this.currentFrame++
    if (this.currentFrame >= this.animationStream.length) {
      this.currentFrame = 0
    }
  }

  drawSprie (x, y) {
    this.context.beginPath()
    this.context.rect(x, y, this.width, this.height)
    this.context.fill()
    this.context.closePath()
  }

  draw (x, y) {
    this.updateFrameId()
    this.drawSprie(x, y)
  }
}
