class SkillFactory {
  static build(canvas) {
    return new Character(
        new AutomatedDropModel(
            Math.floor(Math.random() * canvas.width + 0), 
            10),
        new SkillSprite(10,10, canvas.getContext("2d")));
  }
}
