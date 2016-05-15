class CharacterSprite {
  constructor(height, width, context) {
    this.height = height;
    this.width = width;
    this.context = context;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  draw(x, y) {
    this.context.beginPath();
    this.context.rect(x, y,this.width ,this.height);
    this.context.fill();
    this.context.closePath();
  }
}
