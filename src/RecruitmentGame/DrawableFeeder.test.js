import DrawableFeeder from './DrawableFeeder.js'

const sleep = async (time) => new Promise(resolve => setTimeout(resolve, time))
const fakeDrawable = { model: { go () { }}  }

describe('DrawableFeeder', () => {
  it('when there are no drawables I get nothing when I call get drawable', () => {
    const drawableFeeder = new DrawableFeeder()
    expect(drawableFeeder.getDrawables()).toEqual([])
  })

  it('when one drawable is added, the feeder returns one drawable', () => {
    const drawableFeeder = new DrawableFeeder()
    drawableFeeder.addDrawable(fakeDrawable)
    expect(drawableFeeder.getDrawables()).toEqual([fakeDrawable])
  })

  it('when mutiple drawable is added, the feeder returns mutiple drawable', () => {
    const drawableFeeder = new DrawableFeeder()
    drawableFeeder.addDrawable(fakeDrawable)
    drawableFeeder.addDrawable(fakeDrawable)
    expect(drawableFeeder.getDrawables()).toEqual([fakeDrawable, fakeDrawable])
  })

  it('feed drawables feeds the drawables requested', async () => {
    [[fakeDrawable, fakeDrawable], [fakeDrawable]].forEach(async toDraw => {
      const drawableFeeder = new DrawableFeeder()
      drawableFeeder.feedDrawablesEvery(0, toDraw)
      await sleep(10)
      expect(drawableFeeder.getDrawables().length).toBe(toDraw.length)
    })
  })

  it('Waits for the allocated period of time for each draw ', async () => {
    const drawableFeeder = new DrawableFeeder()
    drawableFeeder.feedDrawablesEvery(100000000, [fakeDrawable, fakeDrawable])

    expect(drawableFeeder.getDrawables().length).toBe(1)
  })

  it('when all the drawables have been drawn all drawn returns true', async () => {
    const drawableFeeder = new DrawableFeeder()
    await drawableFeeder.feedDrawablesEvery(0, [fakeDrawable])
    expect(drawableFeeder.allDrawablesDrawn()).toBe(true)
  })

  it('when all the drawables have been drawn all drawn returns true', async () => {
    const drawableFeeder = new DrawableFeeder()
    await drawableFeeder.feedDrawablesEvery(0, [fakeDrawable])
    expect(drawableFeeder.allDrawablesDrawn()).toBe(true)
  })

  it('while drawables are still drawing the all drawables drawn flag is false', async () => {
    const drawableFeeder = new DrawableFeeder()
    drawableFeeder.feedDrawablesEvery(10000, [fakeDrawable, fakeDrawable])
    expect(drawableFeeder.allDrawablesDrawn()).toBe(false)
  })

  it('before any drawables have been drawn the all drawables dran flag is false', async () => {
    const drawableFeeder = new DrawableFeeder()
    expect(drawableFeeder.allDrawablesDrawn()).toBe(false)
  })

  it('while drawables are still drawing for the secound time the all drawables drawn flag is false', async () => {
    const drawableFeeder = new DrawableFeeder()
    await drawableFeeder.feedDrawablesEvery(0, [fakeDrawable, fakeDrawable])
    drawableFeeder.feedDrawablesEvery(10000, [fakeDrawable, fakeDrawable])
    expect(drawableFeeder.allDrawablesDrawn()).toBe(false)
  })
})
