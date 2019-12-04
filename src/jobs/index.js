const _ = require('lodash')
const utils = require('../utils')

/**
 * How often should the GC on the Job queue in Redis be run
 */
exports.cleanPeriods = {
  '1D': 3600 * 24,
}

/**
 * In what timezone should the cron-scheduler take effect?
 */
exports.timezone = 'America/New_York'

/**
 * Names of the jobs
 */
exports.queueNames = utils.keymirror({
  calculateEEONPerformanceScores: null,
  calculateMarketInsights: null,
  primeCache: null,
})
