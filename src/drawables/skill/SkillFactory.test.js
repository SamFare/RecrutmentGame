describe("SkillFactory", function(){
  var skill;
  beforeEach(function() {
    skill = SkillFactory.build({height: 10, width: 10, getContext: string => {}});
  });
  describe("Build", function(){

    it("Returns a ui element with an attached AutomatedDropModel", function() {
      expect(skill.model).toEqual(jasmine.any(AutomatedDropModel));
    });

    it("Returns a ui element with an attached SkillSprite", function() {
      expect(skill.sprite).toEqual(jasmine.any(SkillSprite));
    });

    it("creates a drop model with a y value of zero", function(){
      expect(skill.model.getY()).toEqual(10);
    })

    it("creates a drop model with a x value greater than 0", function(){
      expect(skill.model.getX()).toBeGreaterThan(0);
    })

    it("creates a drop model with a y that is not the same twice", function(){
      skill2 = SkillFactory.build({height: 10, width: 10, getContext(string) {}});
      expect(skill.model.getX()).not.toEqual(skill2.model.getY())
    })

  });


});
