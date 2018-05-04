class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
    this.drawables = [];
  }

  run() { 
    this.addPlayer()
    this.addDrawablesAsync()

    this.nextLoop(new BackgroundItemFactory("assets/background.png").build(this.canvas));
  }

  addPlayer() {
    let player =  new PlayerFactory().build(this.canvas);
    new KeyboardInputSource().regesterObserver(player.model);
    this.drawables.push(player);
  }

  addDrawablesAsync() {
    let skillFactory = new SkillFactory();

    setTimeout( () => {
      this.drawables.push(skillFactory.build(this.canvas));
    }, 1000);
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
    const copyDrawables =  drawables => this.drawables.slice();
    let newArray = copyDrawables(this.drawables);
    newArray.splice(this.drawables.indexOf(currentDrawable), 1);
    return newArray; 
  }

  drawBackground(background) {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    background.draw()
  }
}
