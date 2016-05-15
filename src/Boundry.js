class Boundry {
  constructor(xMin, xMax, yMin, yMax) {
    this.xMin = xMin;
    this.xMax = xMax;
    this.yMax = yMin;
    this.yMax = yMax;
  }

  isInBoundry(x, y) {
    if((x >= this.xMin  && x <= this.xMax))
      return true;
    else
      return false;
  }
}
