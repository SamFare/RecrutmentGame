import BackgroundItemFactory from './BackgroundItemFactory.js'
import StaticModel from './StaticModel.js'
import ImgSprite from './ImgSprite.js'

describe('Background Item Factory', () => {
  let background
  beforeEach(() => {
    background = BackgroundItemFactory.build({ height: 10, width: 10, getContext (string) {} }, 'Test')
  })
  it('builds an entity with a static model ', () => {
    expect(background.model).toEqual(jasmine.any(StaticModel))
  })

  it('builds a entity with a img sprite', () => {
    expect(background.sprite).toEqual(jasmine.any(ImgSprite))
  })

  /* it("builds an entity with a Has a colider", () => {
    expect(background.Colider).toEqual(jasmine.any(Colider))
  }); */

  it('Builds an ImgSprite with a img specified by URL', () => {
    expect(background.sprite.imgURL()).toMatch('Test')
  })
})
