export default class DrawableFeeder {
  constructor () {
    this.drawables = []
    this.allDrawn = false
  }

  getDrawables () {
    return this.drawables
  }

  addDrawable (drawable) {
    drawable.model.go()
    this.drawables.push(drawable)
  }

  allDrawablesDrawn () {
    return this.allDrawn
  }

  async feedDrawablesEvery (time, toDraw) {
    const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))
    this.allDrawn = false

    for (let drawable of toDraw) {
      this.addDrawable(drawable)
      await sleep(time)
    }

    this.allDrawn = true
  }
}
