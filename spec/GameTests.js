describe('Game', () => { 
    describe('skill creation', () => { 
        it('creates one skill when requested', () => { 
            const game = new Game(mockContext);
            const skills = game.createSkills([{}]);
            expect(skills.length).toEqual(1);
        });

        it('can create mutiple drawables', () => { 
            const game = new Game(mockContext);
            const skills = game.createSkills([{}, {}, {}]);
            expect(skills.length).toEqual(3);
        });
    });

    describe('player creation', () => { 
        it('creates a player on demand', () => { 
            const game = new Game(mockContext);
            const player = game.createPlayer();
            expect(player).not.toBe(undefined);
        });
    })

    describe('game over logic', () => { 
        it('brings the game to an end when there are no objects other than the player', () => { 
            var game = new Game(mockContext) 
            game.drawables = [{}]
            game.allDrawablesDrawn = true; 
            expect(game.isGameOver()).toBe(true)          
        })

        it('does not bring the game to an end when there are objects other than the player', () => { 
            var game = new Game(mockContext) 
            game.drawables = [{}, {}]
            game.allDrawablesDrawn = true; 
            expect(game.isGameOver()).toBe(false)          
        })

        it('does not bring the game to an end when drawables have not yet been drawn', () => { 
            var game = new Game(mockContext) 
            game.drawables = [{}]
            game.allDrawablesDrawn = false; 
            expect(game.isGameOver()).toBe(false)          
        })

        it('does not bring the game to an end when drawables have not yet been drawn and there are objects other than the player', () => { 
            var game = new Game(mockContext) 
            game.drawables = [{}, {}]
            game.allDrawablesDrawn = false; 
            expect(game.isGameOver()).toBe(false)          
        })
    })
    

});