describe("Given an out of bounds colider", () => {
    let colider; 
    let boundry;

    beforeEach(() => {
        boundry = new Boundry(0, 0, 100, 100)
    });

    describe("When an object is inside the boundry", () => {
        let object; 
        beforeEach(() => {
            object =  SkillFactory.build({height: 100, width: 100, getContext(string) {}});
            colider = new OutOfBoundsColider(object, boundry);  
        })
        it("it has not been affected by the colider", () => {
            expect(colider.haveColided(object, boundry)).toBe(false);
        })    
    });

    describe("When an object is outside the boundry on the x axis", () => {
        let objectThatIsOutOfBounds; 
        beforeEach(() => {
            objectThatIsOutOfBounds =  {hitBox: new HitBox(110, 80, 10, 10)}
            colider = new OutOfBoundsColider(objectThatIsOutOfBounds, boundry);
        })
        it("it has colided", () => {
            expect(colider.haveColided(objectThatIsOutOfBounds, boundry)).toBe(true);
        })    
    });
});