const prefixSystemList = (key) => `systemLists:${key}`

exports.notableKeys = {
  COMPANY_NEWS: 'companyNews',
  EARNINGS_TODAY: prefixSystemList('earningsToday'),
  LATEST_NEWS: prefixSystemList('latestNews'),
  LOSERS: prefixSystemList('losers'),
  MOST_ACTIVE: prefixSystemList('mostActive'),
  SECTOR_PERFORMANCE: prefixSystemList('sectorPerformance'),
  WINNERS: prefixSystemList('winners'),
}
