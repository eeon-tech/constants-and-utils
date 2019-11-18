const utils = require('../utils')

/**
 * How a specific metric is related to a Security (via Models)
 * https://github.com/eeon-tech/customer-api/tree/development/src/models
 */
exports.metricRelations = {
  ADVANCED_STATS: 'AdvancedStats',
  KEY_STATS: 'KeyStats',
  QUOTE: 'Quote',
}

exports.listRelations = utils.keymirrorLower({
  WATCHLISTS: null,
  SCREENERS: null,
})
