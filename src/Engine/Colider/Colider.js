export default class Colider {
  haveColided(entity1, entity2) { 
    if(this.boxXposIntersectsOnLeft(entity1, entity2)
    && entity1.hitBox.getYMax() > entity2.hitBox.getYMin()
    && !(entity2.hitBox.getYMax() < entity1.hitBox.getYMin())) {
      return true;
    }
    return false;
  }

  boxXposIntersectsOnLeft(entity1, entity2) {
    return entity1.hitBox.getXMax() > entity2.hitBox.getXMin()
        && !(entity1.hitBox.getXMin() > entity2.hitBox.getXMax())
  }
}
