import _ from 'lodash'
import _fp from 'lodash/fp'
import utils from '../utils'
import subscriptionPlans from '../subscriptionPlans'
import {
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
} from '../valueBuckets'

/**
 * ====================
 * Subscription plans
 * ====================
 */
const { BASIC, PROFESSIONAL } = subscriptionPlans.stripePlans

/**
 * ====================
 * Relating a specific metric to a database model
 * ====================
 */
export const metricRelations = {
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
export const avg10Volume = {
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
export const avg30Volume = {
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
export const beta = {
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
export const changePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'changePercent',
  label: 'Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '% Change',
}

export const currentDebt = {
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
export const day30ChangePercent = {
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
export const day5ChangePercent = {
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
export const day50MovingAvg = {
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
export const day200MovingAvg = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'day200MovingAvg',
  label: '200 Day Moving Average',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '200D Moving Avg.',
}

export const debtToEquity = {
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
export const dividendYield = {
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
export const EBITDA = {
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
export const enterpriseValue = {
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
export const enterpriseValueToRevenue = {
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
export const extendedChangePercent = {
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
export const forwardPERatio = {
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
export const latestPrice = {
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
export const marketCap = {
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
export const month1ChangePercent = {
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
export const month3ChangePercent = {
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
export const month6ChangePercent = {
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
export const open = {
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
export const peRatio = {
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
export const pegRatio = {
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
export const previousClose = {
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
export const priceToBook = {
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
export const priceToSales = {
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
export const profitMargin = {
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
export const revenue = {
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
export const revenuePerEmployee = {
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
export const revenuePerShare = {
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
export const ttmEPS = {
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
export const volume = {
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
export const week52High = {
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
export const week52Low = {
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
export const year1ChangePercent = {
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
export const year2ChangePercent = {
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
export const year5ChangePercent = {
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
export const ytdChangePercent = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'ytdChangePercent',
  label: 'YTD Percent Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'YTD % Change',
}

/**
 * ====================
 * Available sort orders for heatmap
 * ====================
 */
export const heatmapOrders = {
  popular: [
    latestPrice,
    changePercent,
    marketCap,
    volume,
    // EEON Scores
  ],
  other: [
    peRatio,
    open,
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

export const heatmapOrdersList = [
  ...heatmapOrders.popular,
  ...heatmapOrders.other,
]

/**
 * ====================
 * Available filters for screeners
 * ====================
 */
export const screenerMetrics = {
  popular: [
    latestPrice,
    changePercent,
    marketCap,
    peRatio,
    priceToSales,
    revenue,
    ttmEPS,
    volume,
    // EEONScores
  ],
  other: [
    avg10Volume,
    avg30Volume,
    beta,
    day200MovingAvg,
    day50MovingAvg,
    day5ChangePercent,
    dividendYield,
    EBITDA,
    enterpriseValue,
    forwardPERatio,
    month1ChangePercent,
    month3ChangePercent,
    month6ChangePercent,
    pegRatio,
    previousClose,
    previousClose,
    priceToBook,
    profitMargin,
    revenuePerEmployee,
    revenuePerShare,
    week52High,
    week52Low,
    year1ChangePercent,
    year2ChangePercent,
    year5ChangePercent,
    ytdChangePercent,
  ],
}

export const screenerMetricsList = [
  ...screenerMetrics.popular,
  ...screenerMetrics.other,
]

/**
 * List types
 */
export const listTypes = utils.keymirrorUpper({
  SCREENER: null,
  WATCHLIST: null,
})

/**
 * Checks literal string values for type of list
 */
export const isListTypeScreener = (listType) =>
  _.isEqual(listType, listTypes.SCREENER)

/**
 * Checks literal string values for type of list
 */
export const isListTypeWatchlist = (listType) =>
  _.isEqual(listType, listTypes.WATCHLIST)

/**
 * Checks if a list has criteria (and is a Screener)
 */
export const isListScreener = (list = {}) => _.has(list, 'criteria')

/**
 * Checks if a list has a holdings count (and is a Watchlist)
 */
export const isListWatchlist = (list = {}) => _.has(list, 'holdingsCount')
