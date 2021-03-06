import Game from './Game.js'
import mockContext from '../spec-support/mockContext.js'

describe('Game', () => {
  describe('player creation', () => {
    it('creates a player on demand', () => {
      const game = new Game(mockContext)
      const player = game.createPlayer()
      expect(player).not.toBe(undefined)
    })
  })

  describe('game over logic', () => {
    it('brings the game to an end when there are no objects other than the player', () => {
      var game = new Game(mockContext)
      game.feeder = { getDrawables () { return [{}] }, allDrawablesDrawn () { return true } }
      expect(game.isGameOver()).toBe(true)
    })

    it('does not bring the game to an end when there are objects other than the player', () => {
      var game = new Game(mockContext)
      game.feeder = { getDrawables () { return [{}, {}] }, allDrawablesDrawn () { return true } }
      expect(game.isGameOver()).toBe(false)
    })

    it('does not bring the game to an end when drawables have not yet been drawn', () => {
      var game = new Game(mockContext)
      game.feeder = { getDrawables () { return [{}] }, allDrawablesDrawn () { return false } }
      expect(game.isGameOver()).toBe(false)
    })

    it('does not bring the game to an end when drawables have not yet been drawn and there are objects other than the player', () => {
      var game = new Game(mockContext)
      game.feeder = { getDrawables () { return [{}, {}] }, allDrawablesDrawn () { return false } }
      expect(game.isGameOver()).toBe(false)
    })
  })
})
