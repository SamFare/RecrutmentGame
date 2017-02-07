class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
  }

  run() {
    var player =  new PlayerFactory().build(this.canvas);
    var skillFactory = new SkillFactory();
    var skill = skillFactory.build(this.canvas);
    var skill1 = skillFactory.build(this.canvas);
    var skill2 = skillFactory.build(this.canvas);
    var colider = new Colider();
    var background = new BackgroundItemFactory("assets/background.png").build(this.canvas);
    new KeyboardInputSource().regesterObserver(player.model);



    this.nextLoop([player, skill, skill1, skill2], colider,background );
  }


  nextLoop(drawables, colider, background) {
    this.colider = colider
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    background.draw()

    drawables.forEach( drawable => {
      var newArray = drawables.slice();
      newArray.splice(drawables.indexOf(drawable), 1)
      newArray.forEach( obsticle => {
       if(this.colider.haveColided(obsticle , drawable)) {
        drawables.splice(drawables.indexOf(drawable), 1)
       };
     })
      drawable.draw();
    })

    setTimeout( time => {
      this.nextLoop(drawables, colider, background);
    }, 10);

  }
}
