class BackgroundItemFactory {
  constructor(url) {
    this.url = url;
  }
  build(canvas) {
    return new Character(new StaticModel(), new ImgSprite(0,0, canvas.getContext("2d"), this.url));
  }
}
