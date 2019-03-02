class PlayerFactory {
  build(canvas){
    var playerHeight = 50;
    var playerWidth = 25

    const leftofScreen = -(playerWidth / 2); // left of screen is y = 0, player can be half way off screen
    const widthOfScreen = canvas.width - (playerWidth / 2)  // width of screen + half of player (player can be half off screen)
    const topOfScreen = 0;


    var model = new KeyboardListenerModel(
      (canvas.width - playerWidth) /2, canvas.height - playerHeight,
      new Boundry( leftofScreen,  topOfScreen, canvas.height, widthOfScreen)

    );
    var sprite = new CharacterSprite(playerHeight, playerWidth, canvas.getContext("2d"));

    return new Character(model, sprite)

  }
}
