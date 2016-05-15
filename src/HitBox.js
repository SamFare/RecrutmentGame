class HitBox {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
  getXMax() {
    return this.x + this.width;
  }

  getXMin() {
    return this.x;
  }

  getYmin() {
    return this.y;
  }

  getYmax() {
    return this.y + this.height;
  }
}
