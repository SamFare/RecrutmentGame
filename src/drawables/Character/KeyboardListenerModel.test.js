describe("KeyboardListenerModel", function() {
  var playerModel
  beforeEach(function() {
        playerModel = new KeyboardListenerModel(10, 10, new Boundry(0, 0, 50, 50));
        playerModel.setSpeed(Math.floor(Math.random() + 1));
  });

  describe("react", function(){
    it("moves left when left key is pressed", function(){
      playerModel.react({39: true});
      expect(playerModel.getX()).toEqual(10 + playerModel.getSpeed());
    });

    it("moves PlayerMutipleTimesWhenLeftPressedTwice", function() {
      playerModel.react({39: true});
      playerModel.react({39: true});
      expect(playerModel.getX()).toEqual(10 + (playerModel.getSpeed() * 2) );
    });

    it("moves Player Right When Right Is Pressed", function() {
      playerModel.react({37: true});
      expect(playerModel.getX()).toEqual(10 - playerModel.getSpeed() );
    });

    it("cannot move outside of it's boundry", function() {
      playerModel.setBoundry(new Boundry(0,0,0, 10 + playerModel.getSpeed() -1))
      playerModel.react({39: true});
      expect(playerModel.getX()).toEqual(10);
    });

    it("can move to exactly it's boundry", function() {
      playerModel.setBoundry(new Boundry(0, 0,0, 10 + playerModel.getSpeed()))
      playerModel.react({39: true});
      expect(playerModel.getX()).toEqual(10 + playerModel.getSpeed());
    });
  });

});
