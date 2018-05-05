class SkillFactory {
  static build(canvas) {
    return  new Character(new AutomatedDropModel(Math.floor(Math.random() * canvas.width + 1), 0),
        new SkillSprite(10,10, canvas.getContext("2d")));
  }
}
