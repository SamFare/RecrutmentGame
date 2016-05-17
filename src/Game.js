class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
  }

  run() {
    var player =  new PlayerFactory().build(this.canvas);
    var skill = new SkillFactory().build(this.canvas);
    var colider = new Colider();
    new KeyboardInputSource().regesterObserver(player.model);



    this.nextLoop([player, skill], colider);
  }


  nextLoop(drawables, colider) {
    this.colider = colider
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

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
      this.nextLoop(drawables, colider);
    }, 10);

  }
}
