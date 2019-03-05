import Boundry from '../Boundry/Boundry.js'

describe('Boundry', function () {
  describe('isInBoundry', function () {
    it('is in boundry when x is between constarints', function () {
      var boundry = new Boundry(0, 10, 0, 10)
      expect(boundry.isInBoundry(1, 1)).toBe(true)
    })

    it('is out of bounds when x is below min', function () {
      var boundry = new Boundry(0, 10, 0, 10)
      expect(boundry.isInBoundry(-1, 1)).toBe(false)
    })

    it('is out of bounds when x is above max', function () {
      var boundry = new Boundry(0, 10, 0, 10)
      expect(boundry.isInBoundry(11, 1)).toBe(false)
    })
  })
})
