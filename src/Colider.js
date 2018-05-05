class Colider {
  haveColided(entity1, entity2) { 
    if(this.boxXposIntersectsOnLeft(entity1, entity2)
    && entity1.getHitBox().getYMax() > entity2.getHitBox().getYMin()
    && !(entity2.getHitBox().getYMax() < entity1.getHitBox().getYMin())) {
      return true;
    }
    return false;
  }

  boxXposIntersectsOnLeft(entity1, entity2) {
    return entity1.getHitBox().getXMax() > entity2.getHitBox().getXMin()
        && !(entity1.getHitBox().getXMin() > entity2.getHitBox().getXMax())
  }
}
