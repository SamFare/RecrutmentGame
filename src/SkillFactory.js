class SkillFactory {
  build(canvas) {
    return  new Character(new AutomatedDropModel(0,0), new SkillSprite(10,10, canvas.getContext("2d")));
  }
}
