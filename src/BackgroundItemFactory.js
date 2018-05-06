class BackgroundItemFactory {
  static build(canvas, url) {
    return new Character(new StaticModel(), new ImgSprite(0,0, canvas.getContext("2d"), url));
  }
}
