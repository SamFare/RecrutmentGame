class SkillFactory {
  constructor() {
    this.lastRun = 0;
  }

  build(canvas) {
    return  new Character(new AutomatedDropModel(this.getUniqueRunValue(canvas.width), 0),
        new SkillSprite(10,10, canvas.getContext("2d")));
  }

  getUniqueRunValue(width) {
    var thisRun = Math.floor(Math.random() * width + 1);
    while(thisRun == this.lastRun) {
      var thisRun = Math.floor((Math.random() * width + 1));
    }
    return thisRun;
  }
}
