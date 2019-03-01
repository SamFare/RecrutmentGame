describe("out of bounds colider", () => {
  it('does not detect a collision when an object is inside the boundry on x and y axis',() => { 
        const boundry = new Boundry(0, 0, 100, 100)
        const object =  {hitBox: new HitBox(10, 80, 10, 10)}
        const colider = new OutOfBoundsColider();
        expect(colider.haveColided(object, boundry)).toBe(false);
    })

    it('does detect a collision when an object is greater than the boundry on the x axis',() => { 
        const boundry = new Boundry(0, 0, 100, 100)
        const objectThatIsOutOfBounds =  {hitBox: new HitBox(110, 80, 10, 10)}
        const colider = new OutOfBoundsColider();
        expect(colider.haveColided(objectThatIsOutOfBounds, boundry)).toBe(true);
    })

    it('does detect a collision when an object is less than the boundry on the x axis',() => { 
        const boundry = new Boundry(0, 0, 100, 100)
        const objectThatIsOutOfBounds =  {hitBox: new HitBox(-100, 80, 10, 10)}
        const colider = new OutOfBoundsColider();
        expect(colider.haveColided(objectThatIsOutOfBounds, boundry)).toBe(true);
    })

    it('does detect a collision when an object is less than the boundry on the y axis',() => { 
        const boundry = new Boundry(0, 0, 100, 100)
        const objectThatIsOutOfBounds =  {hitBox: new HitBox(80, -80, 10, 10)}
        const colider = new OutOfBoundsColider();
        expect(colider.haveColided(objectThatIsOutOfBounds, boundry)).toBe(true);
    })

    it('does detect a collision when an object is greater than the boundry on the y axis',() => { 
        const boundry = new Boundry(0, 0, 100, 100)
        const objectThatIsOutOfBounds =  {hitBox: new HitBox(80, 800, 10, 10)}
        const colider = new OutOfBoundsColider();
        expect(colider.haveColided(objectThatIsOutOfBounds, boundry)).toBe(true);
    })

    it('does not detect a collision when an object is equal too the boundry on the x axis',() => { 
        const boundry = new Boundry(0, 0, 100, 100)
        const objectThatIsOutOfBounds =  {hitBox: new HitBox(90, 80, 10, 10)}
        const colider = new OutOfBoundsColider();
        expect(colider.haveColided(objectThatIsOutOfBounds, boundry)).toBe(false);
    })

    it('does not detect a collision when an object is equal too the lower boundry on the x axis',() => { 
        const boundry = new Boundry(0, 0, 100, 100)
        const objectThatIsOutOfBounds =  {hitBox: new HitBox(0, 10, 10, 10)}
        const colider = new OutOfBoundsColider();
        expect(colider.haveColided(objectThatIsOutOfBounds, boundry)).toBe(false);
    })

    it('does not detect a collision when an object is equal too the lower boundry on the y axis',() => { 
        const boundry = new Boundry(0, 0, 100, 100)
        const objectThatIsOutOfBounds =  {hitBox: new HitBox(10, 0, 10, 10)}
        const colider = new OutOfBoundsColider();
        expect(colider.haveColided(objectThatIsOutOfBounds, boundry)).toBe(false);
    })

    it('does not detect a collision when an object is equal too the boundry on the y axis',() => { 
        const boundry = new Boundry(0, 0, 100, 100)
        const objectThatIsOutOfBounds =  {hitBox: new HitBox(10, 90, 10, 10)}
        const colider = new OutOfBoundsColider();
        expect(colider.haveColided(objectThatIsOutOfBounds, boundry)).toBe(false);
    })
});