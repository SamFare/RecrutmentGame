import HitBox from '../../Engine/Boundry/HitBox.js'

export default class Character {
  constructor(model, sprite) {
    this.model = model;
    this.sprite = sprite;
    this.HitBox = new HitBox(this.model.getX(), this.model.getY(),
              this.sprite.getHeight(), this.sprite.getWidth());
  }
  get hitBox() {
    return this.HitBox;
  }

  draw() {
    this.HitBox = new HitBox(this.model.getX(), this.model.getY(),
              this.sprite.getHeight(), this.sprite.getWidth());
    this.sprite.draw(this.model.getX(), this.model.getY());
  }
}
