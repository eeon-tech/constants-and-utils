const _fp = require('lodash/fp')

const convertToMS = _fp.multiply(1000)

const prefixSystemList = (key) => `systemLists:${key}`

exports.cachePeriodsInMS = {
  '1m': convertToMS(60),
  '15m': convertToMS(900),
  '1h': convertToMS(3600),
  '1D': convertToMS(86400),
  '5D': convertToMS(432000),
  '10D': convertToMS(864000),
  '14D': convertToMS(1209600),
  '1M': convertToMS(2592000),
  '6M': convertToMS(15552000),
}

exports.notableKeys = {
  COMPANY_NEWS: 'companyNews',
  EARNINGS_TODAY: prefixSystemList('earningsToday'),
  IPOS_TODAY: prefixSystemList('IPOsToday'),
  LATEST_NEWS: prefixSystemList('latestNews'),
  LOSERS: prefixSystemList('losers'),
  MOST_ACTIVE: prefixSystemList('mostActive'),
  SECTOR_PERFORMANCE: prefixSystemList('sectorPerformance'),
  WINNERS: prefixSystemList('winners'),
}
