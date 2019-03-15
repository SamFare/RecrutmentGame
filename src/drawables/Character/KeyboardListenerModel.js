export default class KeyboardListenerModel {
  constructor (x, y, boundry) {
    this.x = x
    this.y = y
    this.boundry = boundry
    this.speed = 10
  }

  go () {
    // disgusting tech debt
  }

  setBoundry (boundry) {
    this.boundry = boundry
  }

  getX () {
    return this.x
  }

  getY () {
    return this.y
  }

  getSpeed () {
    return this.speed
  }

  setSpeed (speed) {
    this.speed = speed
  }

  react (keys) {
    if (37 in keys) {
      let leftSpeed = this.x
      if (this.boundry.isInBoundry(leftSpeed -= this.speed)) {
        this.x -= this.speed
      }
    }
    if (39 in keys) {
      let rightSpeed = this.x
      if (this.boundry.isInBoundry(rightSpeed += this.speed)) {
        this.x += this.speed
      }
    }
  }
}
