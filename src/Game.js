class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
    this.drawables = [];
  }

  run() {
    this.drawables.push(this.createPlayer());
    this.feedDrawablesEvery(1000, [{}, {}]);
    this.nextLoop(BackgroundItemFactory.build(this.canvas, "assets/background.png"));
    this.checkForEndOfGame()
  }

  createPlayer() {
    let player =  new PlayerFactory().build(this.canvas);
    new KeyboardInputSource().regesterObserver(player.model);
    return player;
  }

  feedDrawablesEvery(time, toDraw) {
    setTimeout(() => {
      this.drawables.push(SkillFactory.build(this.canvas, toDraw.pop()));
      if(toDraw.length !== 0) {
        this.feedDrawablesEvery(1000, toDraw);
      } else {
        this.allDrawablesDrawn = true;
      }
      
    }, time);
  }

  isGameOver() { 
    return this.drawables.length === 1 && this.allDrawablesDrawn;
  }

  checkForEndOfGame() {
    setTimeout(() => {
      this.isGameOver() ? console.log(`Game over!`) :  this.checkForEndOfGame();
    }, 10)
  }


  nextLoop(background) {
    setTimeout( time => {
      this.drawBackground(background);

      for(let currentDrawable of this.drawables) {
          for(let otherDrawable of this.getOtherDrawables(currentDrawable)) {     
            if(new Colider().haveColided(otherDrawable , currentDrawable)) {
              this.drawables.splice(this.drawables.indexOf(currentDrawable), 1)
            }
          }
          currentDrawable.draw();
      }
        this.nextLoop(background);
    }, 10);

  }

  getOtherDrawables(currentDrawable) {
    const copyDrawables = this.drawables.slice();
    let newArray = copyDrawables(this.drawables);
    newArray.splice(this.drawables.indexOf(currentDrawable), 1);
    return newArray; 
  }

  drawBackground(background) {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    background.draw()
  }
}
