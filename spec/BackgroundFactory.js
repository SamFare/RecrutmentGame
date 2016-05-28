describe("Background Item Factory", function(){
  it("builds an entity with a static model ", function() {
    var factory = new BackgroundItemFactory();
    expect(factory.build({height: 10, width: 10, getContext(string) {}}).model).toEqual(jasmine.any(StaticModel))
  })

  it("builds a entity with a img sprite", function() {
    var factory = new BackgroundItemFactory();
    expect(factory.build({height: 10, width: 10, getContext(string) {}}).sprite).toEqual(jasmine.any(ImgSprite))
  });

  it("Builds an ImgSprite with a img specified by URL", function(){
    var factory = new BackgroundItemFactory("Test");
    expect(factory.build({height: 10, width: 10, getContext(string) {}}).sprite.imgURL()).toMatch("Test")
  });
});
