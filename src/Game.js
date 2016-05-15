class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
  }

  run() {
    var player =  new PlayerFactory().build(this.canvas);
    var skill = new SkillFactory().build(this.canvas);

    new KeyboardInputSource().regesterObserver(player.model);



    this.nextLoop([player, skill]);
  }


  nextLoop(drawables) {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    drawables.forEach( drawable => {
      drawable.draw();
    })

    setTimeout( time => {
      this.nextLoop(drawables);
    }, 10);

  }
}
