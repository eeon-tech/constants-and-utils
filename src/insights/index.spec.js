const insights = require('./index')

describe('insights', () => {
  describe('crossingMarketInsightDirections', () => {
    it('should remain consistent', () => {
      expect(insights.crossingMarketInsightDirections).toMatchSnapshot()
    })
  })

  describe('sectorIndices', () => {
    it('should remain consistent', () => {
      expect(insights.sectorIndices).toMatchSnapshot()
    })
  })

  describe('marketIndices', () => {
    it('should remain consistent', () => {
      expect(insights.marketIndices).toMatchSnapshot()
    })
  })
})
