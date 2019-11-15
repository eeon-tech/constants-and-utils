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
  '5Y': '5y',
  '2Y': '2y',
  '1Y': '1y',
  '6M': '6m',
  '3M': '3m',
  '1M': '1m',
  '5D': '5d',
}

exports.timeRanges = {
  '1M': '1m',
  '1Y': '1Y',
  '2Y': '2Y',
  '3M': '3M',
  '5D': '5d',
  '5Y': '5y',
  '6M': '6M',
  YTD: 'ytd',
}

exports.LIVE = 'live'
