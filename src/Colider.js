class Colider {
  haveColided(box, player) {
    if((box.getYmin() >= player.getYmax())
      && (box.getXMax() >= player.getXMin()
      || box .getXmin() <= player.getXMax)) {
        return true;
      }
    return false;
  }
}
