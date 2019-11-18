const _ = require('lodash')
const insights = require('../insights')
const utils = require('../utils')

exports.scopes = {
  MARKET_INDICES: {
    name: 'marketIndices',
    options: {
      where: {
        symbol: utils.extractSymbolsFromList(insights.marketIndices),
      },
    },
  },
  SECTOR_INDICES: {
    name: 'sectorIndices',
    options: {
      where: {
        symbol: utils.extractSymbolsFromList(insights.sectorIndices),
      },
    },
  },
}

exports.getMarketIndicesScopeName = () =>
  _.get(exports.scopes, ['MARKET_INDICES', 'name'])

exports.getSectorIndicesScopeName = () =>
  _.get(exports.scopes, ['SECTOR_INDICES', 'name'])
