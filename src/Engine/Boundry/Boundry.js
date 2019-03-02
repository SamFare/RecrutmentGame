class Boundry {
  constructor(xMin, yMin, height, width) {
    this.internalHitBox = new HitBox(xMin, yMin, height, width)
  }

  get hitBox() {
    return this.internalHitBox;
  }

  isInBoundry(x, y) {
    if((x >= this.hitBox.getXMin()  && x <= this.hitBox.getXMax()))
      return true;
    else
      return false;
  }
}
