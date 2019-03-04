import AutomatedDropModel from './AutomatedDropModel.js'

describe("AutomatedDropModel", function() {
  describe("update", function(){
    it("Makes the object fall by speed after one update", function() {
      var drop = new AutomatedDropModel(0,0);
      drop.update();
      expect(drop.getY()).toEqual(0 + drop.getSpeed());
    });

  });
});
