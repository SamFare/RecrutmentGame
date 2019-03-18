import StaticModel from './StaticModel.js'

describe('StaticModel', () => {
  it('Static model x defaults to 0', () => {
    const model = new StaticModel()
    expect(model.getX()).toBe(0)
  })

  it('Static model y defaults to 0', () => {
    const model = new StaticModel()
    expect(model.getY()).toBe(0)
  })
})
