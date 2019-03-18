import PlayerFactory from './drawables/Character/PlayerFactory.js'
import KeyboardInputSource from './drawables/Character/KeyboardInputSource.js'
import OutOfBoundsColider from './Engine/OutOfBoundsColider/OutOfBoundsColider.js'
import Colider from './Engine/Colider/Colider.js'
import BackgroundItemFactory from './drawables/Background/BackgroundItemFactory.js'
import DrawableFeeder from './RecruitmentGame/DrawableFeeder.js'
import SkillFactory from './drawables/skill/SkillFactory.js'
export default class Game {
  constructor (canvas) {
    this.canvas = canvas
    this.resizeScreen()
    this.canvasContext = this.canvas.getContext('2d')
    this.feeder = new DrawableFeeder()
  }

  resizeScreen () {
    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight
  }

  run () {
    this.feeder.addDrawable(this.createPlayer())
    this.feeder.feedDrawablesEvery(1000, [SkillFactory.build(this.canvas), SkillFactory.build(this.canvas)])

    this.nextLoop(BackgroundItemFactory.build(this.canvas, 'assets/background.png'))

    this.checkForEndOfGame()
  }

  createPlayer () {
    let player = new PlayerFactory().build(this.canvas)
    new KeyboardInputSource().regesterObserver(player.model)
    return player
  }

  isGameOver () {
    return this.feeder.getDrawables().length === 1 && this.feeder.allDrawablesDrawn()
  }

  checkForEndOfGame () {
    setTimeout(() => {
      this.isGameOver() ? console.log(`Game over!`) : this.checkForEndOfGame()
    }, 10)
  }

  nextLoop (background) {
    setTimeout(time => {
      this.drawBackground(background)

      for (let currentDrawable of this.feeder.getDrawables()) {
        if (new OutOfBoundsColider().haveColided(currentDrawable, background)) {
          this.feeder.getDrawables().splice(this.feeder.getDrawables().indexOf(currentDrawable), 1)
        }

        for (let otherDrawable of this.getOtherDrawables(currentDrawable)) {
          if (new Colider().haveColided(otherDrawable, currentDrawable)) {
            this.feeder.getDrawables().splice(this.feeder.getDrawables().indexOf(currentDrawable), 1)
          }
        }
        currentDrawable.draw()
      }
      this.nextLoop(background)
    }, 10)
  }

  getOtherDrawables (currentDrawable) {
    let newArray = this.feeder.getDrawables().slice()
    newArray.splice(this.feeder.getDrawables().indexOf(currentDrawable), 1)
    return newArray
  }

  drawBackground (background) {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
    background.draw()
  }
}
