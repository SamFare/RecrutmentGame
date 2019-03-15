export default class AutomatedDropModel {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.speed = 1
  }

  getX () {
    return this.x
  }

  getY () {
    return this.y
  }

  update () {
    this.y += this.speed
  }

  getSpeed () {
    return this.speed
  }

  go () {
    setTimeout(goLoop => {
      this.update()
      this.go()
    }, 10)
  }
}
