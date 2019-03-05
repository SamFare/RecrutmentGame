import Character from '../Character/Character.js'
import StaticModel from '../Background/StaticModel.js'
import ImgSprite from '../Background/ImgSprite.js'

export default class BackgroundItemFactory {
  static build (canvas, url) {
    return new Character(new StaticModel(), new ImgSprite(canvas.height, canvas.width, canvas.getContext('2d'), url))
  }
}
