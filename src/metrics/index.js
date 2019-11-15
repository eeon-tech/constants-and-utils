const subscriptionPlans = require('../subscriptionPlans')
const {
  EBITDAValueBuckets,
  percentageValueBuckets,
  priceValueBuckets,
  volumeValueBuckets,
} = require('../valueBuckets')

/**
 * Stripe plans available
 */
const { BASIC, PROFESSIONAL } = subscriptionPlans.stripePlans

/**
 * How a specific metric is related to a Security (via Models)
 * https://github.com/eeon-tech/customer-api/tree/development/src/models
 */
const metricRelations = {
  ADVANCED_STATS: 'AdvancedStats',
  KEY_STATS: 'KeyStats',
  QUOTE: 'Quote',
}

/**
 * ====================
 * All Supported Metrics
 * These are used for both Heatmap Filters, Screeners, and Alerts
 * ====================
 */

/**
 * 10 Day Average Trading Volume
 */
exports.avg10Volume = {
  valueBuckets: volumeValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'avg10Volume',
  label: '10 Day Average Volume',
  requiresPlan: [PROFESSIONAL],
  shortLabel: '10D Avg. Volume',
}

/**
 * 30 Day Average Trading Volume
 */
exports.avg30Volume = {
  valueBuckets: volumeValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'avg30Volume',
  label: '30 Day Average Volume',
  requiresPlan: [PROFESSIONAL],
  shortLabel: '30D Avg. Volume',
}

/**
 * Beta
 */
exports.beta = {
  valueBuckets: [],
  databaseModelName: metricRelations.KEY_STATS,
  id: 'beta',
  label: 'Beta',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'Beta',
}

/**
 * Percent Change
 */
exports.changePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'changePercent',
  label: 'Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '% Change',
}

/**
 * 5 Day Percent Change
 */
exports.changePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'day5ChangePercent',
  label: '5 DayPercent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '5D % Change',
}

/**
 * 50 Day Moving Average
 */
exports.day50MovingAvg = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'day50MovingAvg',
  label: '50 Day Moving Average',
  requiresPlan: [PROFESSIONAL],
  shortLabel: '50D Moving Avg.',
}

/**
 * 200 Day Moving Average
 */
exports.day200MovingAvg = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'day200MovingAvg',
  label: '200 Day Moving Average',
  requiresPlan: [PROFESSIONAL],
  shortLabel: '200D Moving Avg.',
}

/**
 * Dividend Yield
 */
exports.day50MovingAvg = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'dividendYield',
  label: 'Dividend Yield',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'Div. Yield',
}

/**
 * EBITDA
 */
exports.EBITDA = {
  valueBuckets: EBITDAValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'EBITDA',
  label: 'EBITDA',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'EBITDA',
}

/**
 * Enterprise Value
 */
exports.enterpriseValue = {
  valueBuckets: EBITDAValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'enterpriseValue',
  label: 'Enterprise Value',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'Enterprise Value',
}
