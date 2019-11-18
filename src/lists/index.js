const _ = require('lodash')
const _fp = require('lodash/fp')
const utils = require('../utils')
const metrics = require('../metrics')

exports.heatmapFilters = {
  popular: [
    metrics.latestPrice,
    metrics.changePercent,
    metrics.marketCap,
    metrics.volume,
    // EEON Scores
  ],
  other: [
    metrics.peRatio,
    metrics.open,
    // Dividend Yield
    // 1 Year Percent Change
    // Beta
    // Forward PE Ratio
    // Price to Book
    // Price to Sales
    // Profit Margin
    // Revenue per Employee
    // Revenue per Share
    // YTD Percent Change
  ],
}

exports.heatmapFiltersList = exports.heatmapFilters.popular.concat(
  exports.heatmapFilters.other
)

exports.listTypes = utils.keymirrorUpper({
  SCREENER: null,
  WATCHLIST: null,
})

exports.screenerMetrics = {
  popular: [
    metrics.latestPrice,
    metrics.changePercent,
    metrics.marketCap,
    metrics.peRatio,
    metrics.priceToSales,
    metrics.revenue,
    metrics.ttmEPS,
    metrics.volume,
    // EEONScores
  ],
  other: [
    metrics.avg10Volume,
    metrics.avg30Volume,
    metrics.beta,
    metrics.day200MovingAvg,
    metrics.day50MovingAvg,
    metrics.day5ChangePercent,
    metrics.dividendYield,
    metrics.EBITDA,
    metrics.enterpriseValue,
    metrics.forwardPERatio,
    metrics.month1ChangePercent,
    metrics.month3ChangePercent,
    metrics.month6ChangePercent,
    metrics.pegRatio,
    metrics.previousClose,
    metrics.previousClose,
    metrics.priceToBook,
    metrics.profitMargin,
    metrics.revenuePerEmployee,
    metrics.revenuePerShare,
    metrics.week52High,
    metrics.week52Low,
    metrics.year1ChangePercent,
    metrics.year2ChangePercent,
    metrics.year5ChangePercent,
    metrics.ytdChangePercent,
  ],
}

exports.screenerMetricsList = exports.screenerMetrics.popular.concat(
  exports.screenerMetrics.other
)

exports.isListTypeScreener = (listType) =>
  _.isEqual(listType, exports.listTypes.SCREENER)

exports.isListTypeWatchlist = (listType) =>
  _.isEqual(listType, exports.listTypes.WATCHLIST)

exports.isListScreener = (list = {}) => _.has(list, 'criteria')

exports.isListWatchlist = (list = {}) => _.has(list, 'holdingsCount')
