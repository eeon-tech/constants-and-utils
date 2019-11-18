const _ = require('lodash')
const securities = require('./index')

describe('securities', () => {
  describe('scopes', () => {
    it('should stay consistent', () => {
      expect(securities.scopes).toMatchSnapshot()
    })
  })

  describe('getMarketIndicesScopeName', () => {
    it('should return the scope name', () => {
      expect(securities.getMarketIndicesScopeName()).toBe(
        _.get(securities, ['scopes', 'MARKET_INDICES', 'name'])
      )
    })
  })

  describe('getSectorIndicesScopeName', () => {
    it('should return the scope name', () => {
      expect(securities.getSectorIndicesScopeName()).toBe(
        _.get(securities, ['scopes', 'SECTOR_INDICES', 'name'])
      )
    })
  })
})
