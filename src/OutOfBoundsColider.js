class OutOfBoundsColider {
    haveColided(object, boundry) {
        console.log(`============= ${JSON.stringify(boundry)} ================`);
        console.log(`================== ${boundry.X} > ${object.hitBox.getXMax()} ==========`); 
        return object.hitBox.getXMax() > boundry.hitBox.getXMax(); 
    }
}