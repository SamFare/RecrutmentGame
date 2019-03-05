export default class OutOfBoundsColider {
  haveColided (object, boundry) {
    return object.hitBox.getXMax() > boundry.hitBox.getXMax() ||
                object.hitBox.getXMin() < boundry.hitBox.getXMin() ||
                object.hitBox.getYMin() < boundry.hitBox.getYMin() ||
                object.hitBox.getYMax() > boundry.hitBox.getYMax()
  }
}
