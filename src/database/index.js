const lists = require('../lists')
const utils = require('../utils')

exports.listRelations = utils.keymirrorLower({
  SCREENER: null,
  WATCHLIST: null,
})

/**
 * How a specific metric is related to a Security (via Models)
 * https://github.com/eeon-tech/customer-api/tree/development/src/models
 */
exports.metricRelations = {
  ADVANCED_STATS: 'AdvancedStats',
  KEY_STATS: 'KeyStats',
  QUOTE: 'Quote',
}

exports.getSelectedEntityType = (listType) =>
  lists.isListTypeScreener(listType)
    ? exports.listRelations.SCREENER
    : exports.listRelations.WATCHLIST
