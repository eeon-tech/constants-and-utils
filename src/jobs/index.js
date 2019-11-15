const _ = require('lodash')
const _fp = require('lodash/fp')
const utils = require('../utils')

const convertToMS = _fp.multiply(1000)

exports.cleanPeriods = {
  '1D': _.multiply(24, 3600),
}

exports.timePeriodsInMS = {
  '1m': convertToMS(60),
  '1h': convertToMS(3600),
  '1D': convertToMS(86400),
  '5D': convertToMS(432000),
  '10D': convertToMS(864000),
  '1M': convertToMS(2592000),
  '6M': convertToMS(15552000),
}

exports.timezone = 'America/New_York'

exports.queueNames = utils.keymirror({
  calculateEEONPerformanceScores: null,
})
