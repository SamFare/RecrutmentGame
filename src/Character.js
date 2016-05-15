class Character {
  constructor(model, sprite) {
    this.model = model;
    this.sprite = sprite;
    this.HitBox = new HitBox(this.model.getX(), this.model.getY(),
              this.sprite.getHeight(), this.sprite.getWidth());
  }

  draw() {
    this.HitBox = new HitBox(this.model.getX(), this.model.getY(),
              this.sprite.getHeight(), this.sprite.getwidth());
    this.sprite.draw(this.model.getX(), this.model.getY());
  }
}
