describe("colider", function(){
  describe("haveColided", function(){
    it("does not detect a colision when two objects have not colided", function() {
      var colider = new Colider();
      factory = new PlayerFactory()

      var result = colider.haveColided(
        factory.build({height: 10, width: 10, getContext(string) {}}).HitBox,
        factory.build({height: 100, width: 100, getContext(string) {}}).HitBox
      );

      expect(result).toBe(false);
    });

    it("does detect a colision when two objects have  colided", function() {
      var colider = new Colider();
      factory = new PlayerFactory()

      var result = colider.haveColided(
        factory.build({height: 10, width: 10, getContext(string) {}}).HitBox,
        factory.build({height: 10, width: 10, getContext(string) {}}).HitBox
      );

      expect(result).toBe(true);
    })
  });
});
