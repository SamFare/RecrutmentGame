describe("colider", function(){
  var entity1;
  var entity2;
  var colider;

  beforeEach(function() {
    colider = new Colider();
    var factory = new PlayerFactory()


    entity1 = factory.build({height: 10, width: 10, getContext(string) {}});
    entity2 = factory.build({height: 10, width: 10, getContext(string) {}});
    entity1.sprite.height = 25;
    entity1.sprite.width = 50;

    entity2.sprite.height = 25;
    entity2.sprite.width = 50;

  });

  describe("haveColided", function(){
    it("does not detect a colision when two objects have not colided", function() {
      entity1.HitBox.x = 10;
      entity2.HitBox.x = 100

       expect(colider.haveColided(entity1, entity2)).toBe(false);
    });

    it("detects a colision when the left of a hitbox intersects with the right of another",
        function() {

      entity1.HitBox.x = 10;
      entity2.HitBox.x = 15

      expect(colider.haveColided(entity1, entity2)).toBe(true);
    });

    it("does not detect a colision when box one is well to the left of box two",
        function() {

      entity1.HitBox.x = 70;
      entity2.HitBox.x = 10

      expect(colider.haveColided(entity1, entity2)).toBe(false);
    });

    it("detects a colision when the right of a hitbox intersects with \
          the left of another",
        function() {

      entity1.HitBox.x = 25;
      entity2.HitBox.x = 15

      expect(colider.haveColided(entity1, entity2)).toBe(true);
    });

    it("does not detect a colision when the ypos of box1 is greater than the ypos of box 2",
      function() {

        entity1.HitBox.x = 25;
        entity2.HitBox.x = 15

        entity1.HitBox.y = 100;
        entity2.HitBox.y = 200

        expect(colider.haveColided(entity1, entity2)).toBe(false);
    });

    it("detects a colision when the yposition of box 1 is less than the yposition of box 2",
      function() {

        entity1.HitBox.x = 25;
        entity2.HitBox.x = 15

        entity1.HitBox.y = 199;
        entity2.HitBox.y = 200

        expect(colider.haveColided(entity1, entity2)).toBe(true);
    });

    it("does not detect a colision when the yposition of box 2 is less than the yposition of box 1",
      function() {

        entity1.HitBox.x = 25;
        entity2.HitBox.x = 15

        entity1.HitBox.y = 500;
        entity2.HitBox.y = 200

        expect(colider.haveColided(entity1, entity2)).toBe(false);
    });

  });
});
