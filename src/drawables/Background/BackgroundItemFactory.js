class BackgroundItemFactory {
  static build(canvas, url) {
    return new Character(new StaticModel(), new ImgSprite(canvas.height,canvas.width, canvas.getContext("2d"), url));
  }
}
