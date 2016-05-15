describe("PlayerFactory", function(){
  describe("build", function(){
    it("builds a player with a Keyboard Listener and Character Sprite", function() {
      var factory = new PlayerFactory();
      player = factory.build({height: 10, width: 10, getContext(string) {}});
      expect(player.model).toEqual(jasmine.any(KeyboardListenerModel));
      expect(player.sprite).toEqual(jasmine.any(CharacterSprite));
    });
  });
});
