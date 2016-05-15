class KeyboardListenerModel {
  constructor(x, y, boundry) {
    this.x = x;
    this.y = y;
    this.boundry = boundry;
    this.speed = 10;
  }

  setBoundry(boundry) {
    this.boundry = boundry;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getSpeed() {
    return this.speed;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  react(keys) {
    if (37 in keys) {
      var tmp = this.x;
  		if(this.boundry.isInBoundry(tmp -= this.speed)){
        this.x -=  this.speed;
      }
  	}
    if (39 in keys) {
      var tmp = this.x;
      if(this.boundry.isInBoundry(tmp += this.speed)){
        this.x +=  this.speed;
      }
    }
  }

}
