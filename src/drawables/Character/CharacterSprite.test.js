import CharacterSprite from './CharacterSprite.js'

describe("Character Tests", function() {
  var playerSprite;
  beforeEach(function(){
    playerSprite = new CharacterSprite(10, 10,mockContext);
  })
  describe("Draw", function() {
    it("Allows developers to specify an 'annimation stream'", function(){
         playerSprite.specifyAnamationStream([])
         expect(playerSprite.getAnnamationStream()).toEqual([])
    });

    it("Has a frame id of 0 after draw 1 stream on each draw", function() {
       playerSprite.specifyAnamationStream(["support/test.png",
                                      "support/test2.png"])
       playerSprite.draw(0,0);
       expect(playerSprite.currentFrame).toBe(0)
    });

    it("Has a frame id of 1 after draw 2 stream on each draw", function() {
       playerSprite.specifyAnamationStream(["support/test.png",
                                      "support/test2.png"])
       playerSprite.draw(0,0);
       playerSprite.draw(0,0);
       expect(playerSprite.currentFrame).toBe(1)
    });

    it("loops back to id 0 after all frames drawn", function() {
       playerSprite.specifyAnamationStream(["support/test.png",
                                      "support/test2.png"])
       playerSprite.draw(0,0);
       playerSprite.draw(0,0);
       playerSprite.draw(0,0);
       expect(playerSprite.currentFrame).toBe(0)
    });
  })
});
