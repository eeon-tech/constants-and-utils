const { metricRelations } = require('../database')
const subscriptionPlans = require('../subscriptionPlans')
const {
  betaValueBuckets,
  dividendYieldValueBuckets,
  EBITDAValueBuckets,
  marketCapValueBuckets,
  pegRatioValueBuckets,
  peRatioValueBuckets,
  percentageValueBuckets,
  priceValueBuckets,
  priceToBookValueBuckets,
  profitMarginValueBuckets,
  revenueValueBuckets,
  revenuePerEmployeeValueBuckets,
  revenuePerShareValueBuckets,
  ttmEPSValueBuckets,
  volumeValueBuckets,
} = require('../valueBuckets')

/**
 * Stripe plans available
 */
const { BASIC, PROFESSIONAL } = subscriptionPlans.stripePlans

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
  requiresPlan: [BASIC, PROFESSIONAL],
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
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '30D Avg. Volume',
}

/**
 * Beta
 */
exports.beta = {
  valueBuckets: betaValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'beta',
  label: 'Beta',
  requiresPlan: [BASIC, PROFESSIONAL],
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

exports.currentDebt = {
  valueBuckets: marketCapValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'currentDebt',
  label: 'Current Debt',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Current Debt',
}

/**
 * 30 Day Percent Change
 */
exports.day30ChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'day30ChangePercent',
  label: '30 Day Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '30D % Change',
}

/**
 * 5 Day Percent Change
 */
exports.day5ChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'day5ChangePercent',
  label: '5 Day Percent Change',
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
  requiresPlan: [BASIC, PROFESSIONAL],
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
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '200D Moving Avg.',
}

exports.debtToEquity = {
  valueBuckets: peRatioValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'debtToEquity',
  label: 'Debt to Equity',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Debt/Equity',
}

/**
 * Dividend Yield
 */
exports.dividendYield = {
  valueBuckets: dividendYieldValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'dividendYield',
  label: 'Dividend Yield',
  requiresPlan: [BASIC, PROFESSIONAL],
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
  requiresPlan: [BASIC, PROFESSIONAL],
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
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Enterprise Value',
}

/**
 * Enterprise Value to Revenue
 */
exports.enterpriseValueToRevenue = {
  valueBuckets: priceToBookValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'enterpriseValueToRevenue',
  label: 'Enterprise Value to Revenue',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Ent. Value to Rev.',
}

/**
 * Extended Percent Change
 */
exports.extendedChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'extendedChangePercet',
  label: 'After Hours Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'After Hours % Percent',
}

/**
 * Forward PE Ratio
 */
exports.forwardPERatio = {
  valueBuckets: peRatioValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'pegRatio',
  label: 'Forward PE Ratio',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'For. PE Ratio',
}

/**
 * Latest Price
 */
exports.latestPrice = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'latestPrice',
  label: 'Price',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Price',
}

/**
 * Market Cap
 */
exports.marketCap = {
  valueBuckets: marketCapValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'marketCap',
  label: 'Market Cap.',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Market Cap.',
}

/**
 * 1 Month Percent Change
 */
exports.month1ChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'month1ChangePercent',
  label: '1M Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '1M % Change',
}

/**
 * 3 Month Percent Change
 */
exports.month3ChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'month3ChangePercent',
  label: '3M Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '3M % Change',
}

/**
 * 6 Month Percent Change
 */
exports.month6ChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'month6ChangePercent',
  label: '6M Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '6M % Change',
}

/**
 * Open
 */
exports.open = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'open',
  label: 'Open',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Open',
}

/**
 * PE Ratio
 */
exports.peRatio = {
  valueBuckets: peRatioValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'peRatio',
  label: 'PE Ratio',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'PE Ratio',
}

/**
 * PEG Ratio
 */
exports.pegRatio = {
  valueBuckets: pegRatioValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'pegRatio',
  label: 'PEG Ratio',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'PEG Ratio',
}

/**
 * Previous Close
 */
exports.previousClose = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'previousClose',
  label: 'Previous Close',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Prev. Close',
}

/**
 * Price to Book
 */
exports.priceToBook = {
  valueBuckets: priceToBookValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'priceToBook',
  label: 'Price to Book',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'P/B',
}

/**
 * Price to Sales
 */
exports.priceToSales = {
  valueBuckets: priceToBookValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'priceToSales',
  label: 'Price to Sales',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'P/S',
}

/**
 * Profit Margin
 */
exports.profitMargin = {
  valueBuckets: profitMarginValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'profitMargin',
  label: 'Profit Margin',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Profit Margin',
}

/**
 * Revenue
 */
exports.revenue = {
  valueBuckets: revenueValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'revenue',
  label: 'Revenue',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Revenue',
}

/**
 * Revenue Per Employee
 */
exports.revenuePerEmployee = {
  valueBuckets: revenuePerEmployeeValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'revenuePerEmployee',
  label: 'Revenue per Employee',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Revenue/Employee',
}

/**
 * Revenue Per Share
 */
exports.revenuePerShare = {
  valueBuckets: revenuePerShareValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'revenuePerShare',
  label: 'Revenue per Share',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Revenue/Share',
}

/**
 * TTM EPS
 */
exports.ttmEPS = {
  valueBuckets: ttmEPSValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'ttmTPS',
  label: 'EPS (TTM)',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'EPS (TTM)',
}

/**
 * Volume
 */
exports.volume = {
  valueBuckets: volumeValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'volume',
  label: 'Volume',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Volume',
}

/**
 * 52 Week High
 */
exports.week52High = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'week52High',
  label: '52 Week High',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '52W High',
}

/**
 * 52 Week Low
 */
exports.week52Low = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'week52Low',
  label: '52 Week Low',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '52W Low',
}

/**
 * 1 Year Percent Change
 */
exports.year1ChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'year1ChangePercent',
  label: '1Y Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '1Y % Change',
}

/**
 * 2 Year Percent Change
 */
exports.year2ChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'year2ChangePercent',
  label: '2Y Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '2Y % Change',
}

/**
 * 5 Year Percent Change
 */
exports.year5ChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'year5ChangePercent',
  label: '5Y Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '5Y % Change',
}

/**
 * YTD Year Percent Change
 */
exports.ytdChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'ytdChangePercent',
  label: 'YTD Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'YTD % Change',
}
