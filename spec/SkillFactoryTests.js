describe("SkillFactory", function(){
  describe("Build", function(){

    it("Returns a ui element with an attached AutomatedDropModel", function() {
      var factory = new SkillFactory();
      var skill = factory.build({height: 10, width: 10, getContext(string) {}});

      expect(skill.model).toEqual(jasmine.any(AutomatedDropModel));
    });

    it("Returns a ui element with an attached SkillSprite", function() {
      var factory = new SkillFactory();
      var skill = factory.build({height: 10, width: 10, getContext(string) {}});

      expect(skill.sprite).toEqual(jasmine.any(SkillSprite));
    });

  });


});
