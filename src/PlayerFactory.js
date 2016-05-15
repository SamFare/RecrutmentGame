class PlayerFactory {
  build(canvas){
    var playerHeight = 50;
    var playerWidth = 25
    var model = new KeyboardListenerModel(
      (canvas.width - playerWidth) /2, canvas.height - playerHeight,
      new Boundry(-(playerWidth / 2) , canvas.width - (playerWidth / 2), 0, canvas.height)

    );
    var sprite = new CharacterSprite(playerHeight, playerWidth, canvas.getContext("2d"));

    return new Character(model, sprite)

  }
}
