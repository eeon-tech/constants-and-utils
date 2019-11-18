const _ = require('lodash')
const utils = require('../utils')

exports.announceTimes = utils.keymirrorUpper({
  AMC: null,
  BTO: null,
  OTHER: null,
})

exports.periods = utils.keymirrorLower({
  ANNUAL: null,
  QUARTERLY: null,
})

exports.securityTypes = utils.keymirrorLower({
  AD: null, // ADR
  RE: null, // REIT
  CE: null, // Closed end fund
  SI: null, // Secondary Issue
  LP: null, // Limited Partnership
  CS: null, // Common Stock
  ET: null, // ETF
  WT: null, // Warrant
  OEF: null, // Open Ended Fund
  CEF: null, // Closed Ended Fund
  PS: null, // Preferred Stock
})

exports.timeframes = {
  FIVE_DAYS: '5d',
  FIVE_YEARS: '5y',
  ONE_MONTH: '1m',
  ONE_YEAR: '1y',
  SIX_MONTHS: '6m',
  THREE_MONTHS: '3m',
  TWO_YEARS: '2y',
}

exports.timeRanges = {
  FIVE_DAYS: '5d',
  FIVE_YEARS: '5y',
  ONE_MONTH: '1m',
  ONE_YEAR: '1Y',
  SIX_MONTHS: '6M',
  THREE_MONTHS: '3M',
  TWO_YEARS: '2Y',
  YTD: 'ytd',
}

exports.LIVE = 'live'
