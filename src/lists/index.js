import _ from 'lodash'
import _fp from 'lodash/fp'
import subscriptionPlans from '../subscriptionPlans'
import { formatNumberNicely } from '../formatNumbers'
import {
  betaValueBuckets,
  dividendYieldValueBuckets,
  earningsYieldValueBuckets,
  EBITDAValueBuckets,
  EEONScoresValueBuckets,
  employeesValueBuckets,
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
  RSIValueBuckets,
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
  DERIVED_SECURITY_METRICS: 'DerivedSecurityMetrics',
  EEON_PERFORMANCE_SCORES: 'EEONPerformanceScores',
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
 * Transforms
 */
export const averageTransform = (value = 0) =>
  formatNumberNicely(value, { average: true })

export const averageCurrencyTransform = (value = 0) =>
  formatNumberNicely(value, { average: true, currency: true, mantissa: 1 })

export const betaTransform = (value = 0) =>
  formatNumberNicely(value, { mantissa: 2 })

export const currencyTransform = (value = 0) =>
  formatNumberNicely(value, { currency: true, mantissa: 2 })

export const percentageTransform = (value = 0) =>
  formatNumberNicely(value, { mantissa: 2, percentage: true })

export const ratioTransform = (value = 0) =>
  formatNumberNicely(value, { mantissa: 2 })

export const volumeTransform = (value = 0) =>
  formatNumberNicely(value, { average: true, totalLength: 4 })

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
  transform: volumeTransform,
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
  transform: volumeTransform,
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
  transform: betaTransform,
}

/**
 * Change
 */
export const change = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.QUOTE,
  id: 'change',
  label: 'Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Change',
  transform: currencyTransform,
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
  transform: percentageTransform,
}

export const currentDebt = {
  valueBuckets: marketCapValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'currentDebt',
  label: 'Current Debt',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Current Debt',
  transform: averageCurrencyTransform,
}

/**
 * 14 Day RSI
 */
export const day14RSI = {
  valueBuckets: RSIValueBuckets,
  databaseModelName: metricRelations.DERIVED_SECURITY_METRICS,
  id: 'day14RSI',
  label: '14 Day RSI',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'RSI',
  transform: averageTransform,
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
  transform: percentageTransform,
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
  transform: percentageTransform,
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
  transform: currencyTransform,
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
  transform: currencyTransform,
}

export const debtToEquity = {
  valueBuckets: peRatioValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'debtToEquity',
  label: 'Debt to Equity',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Debt/Equity',
  transform: ratioTransform,
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
  transform: percentageTransform,
}

/**
 * Earnings Yield
 */
export const earningsYield = {
  valueBuckets: earningsYieldValueBuckets,
  databaseModelName: metricRelations.DERIVED_SECURITY_METRICS,
  id: 'earningsYield',
  label: 'Earnings Yield',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Earnings Yield',
  transform: percentageTransform,
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
  transform: averageCurrencyTransform,
}

/**
 * EEON Growth Score
 */
export const EEONGrowthScore = {
  valueBuckets: EEONScoresValueBuckets,
  databaseModelName: metricRelations.EEON_PERFORMANCE_SCORES,
  id: 'growthScore',
  label: 'EEON Growth Score',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'Growth Score',
  transform: averageTransform,
}

/**
 * EEON Momentum Score
 */
export const EEONMomentumScore = {
  valueBuckets: EEONScoresValueBuckets,
  databaseModelName: metricRelations.EEON_PERFORMANCE_SCORES,
  id: 'momentumScore',
  label: 'EEON Momentum Score',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'Momentum Score',
  transform: averageTransform,
}

/**
 * EEON Profitability Score
 */
export const EEONProfitabilityScore = {
  valueBuckets: EEONScoresValueBuckets,
  databaseModelName: metricRelations.EEON_PERFORMANCE_SCORES,
  id: 'profitabilityScore',
  label: 'EEON Profitability Score',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'Profitability Score',
  transform: averageTransform,
}

/**
 * EEON Rule of 40 Score
 */
export const EEONRuleOf40Score = {
  valueBuckets: EEONScoresValueBuckets,
  databaseModelName: metricRelations.EEON_PERFORMANCE_SCORES,
  id: 'ruleOf40Score',
  label: 'EEON Rule of 40 Score',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'Rule of 40 Score',
  transform: averageTransform,
}

/**
 * EEON Safety Score
 */
export const EEONSafetyScore = {
  valueBuckets: EEONScoresValueBuckets,
  databaseModelName: metricRelations.EEON_PERFORMANCE_SCORES,
  id: 'safetyScore',
  label: 'EEON Safety Score',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'Safety Score',
  transform: averageTransform,
}

/**
 * EEON Value Score
 */
export const EEONValueScore = {
  valueBuckets: EEONScoresValueBuckets,
  databaseModelName: metricRelations.EEON_PERFORMANCE_SCORES,
  id: 'valueScore',
  label: 'EEON Value Score',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'Value Score',
  transform: averageTransform,
}

/**
 * Employees
 */
export const employees = {
  valueBuckets: employeesValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'employees',
  label: 'Employees',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Employees',
  transform: averageTransform,
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
  transform: averageCurrencyTransform,
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
  transform: ratioTransform,
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
  transform: percentageTransform,
}

/**
 * Forward PE Ratio
 */
export const forwardPERatio = {
  valueBuckets: peRatioValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'forwardPERatio',
  label: 'Forward PE Ratio',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'For. PE Ratio',
  transform: ratioTransform,
}

/**
 * Gross Profit
 */
export const grossProfit = {
  valueBuckets: revenueValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'grossProfit',
  label: 'Gross Profit',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Gross Profit',
  transform: averageCurrencyTransform,
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
  transform: currencyTransform,
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
  transform: averageCurrencyTransform,
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
  transform: percentageTransform,
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
  transform: percentageTransform,
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
  transform: percentageTransform,
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
  transform: currencyTransform,
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
  transform: ratioTransform,
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
  transform: ratioTransform,
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
  transform: currencyTransform,
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
  transform: ratioTransform,
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
  transform: ratioTransform,
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
  transform: percentageTransform,
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
  transform: averageCurrencyTransform,
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
  transform: averageCurrencyTransform,
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
  transform: currencyTransform,
}

/**
 * Shares Outstanding
 */
export const sharesOutstanding = {
  valueBuckets: revenueValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'sharesOutstanding',
  label: 'Shares Outstanding',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Shares',
  transform: averageTransform,
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
  transform: currencyTransform,
}

/**
 * Total Cash
 */
export const totalCash = {
  valueBuckets: revenueValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'totalCash',
  label: 'Total Cash',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Cash',
  transform: averageCurrencyTransform,
}

/**
 * Total Revenue
 */
export const totalRevenue = {
  valueBuckets: revenueValueBuckets,
  databaseModelName: metricRelations.ADVANCED_STATS,
  id: 'totalRevenue',
  label: 'Total Revenue',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'Total Revenue',
  transform: averageCurrencyTransform,
}

/**
 * Return on Assets (TTM)
 */
const ttmReturnOnAssets = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.DERIVED_SECURITY_METRICS,
  id: 'ttmReturnOnAssets',
  label: 'Return on Assets (TTM)',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'ROA (TTM)',
  transform: percentageTransform,
}

/**
 * Return on Assets (TTM)
 */
const ttmReturnOnEquity = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.DERIVED_SECURITY_METRICS,
  id: 'ttmReturnOnEquity',
  label: 'Return on Equity (TTM)',
  requiresPlan: [PROFESSIONAL],
  shortLabel: 'ROE (TTM)',
  transform: percentageTransform,
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
  transform: volumeTransform,
}

/**
 * 52 Week Change
 */
export const week52change = {
  valueBuckets: priceValueBuckets,
  databaseModelName: metricRelations.KEY_STATS,
  id: 'week52cigh',
  label: '52 Week Change',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: '52W Change',
  transform: currencyTransform,
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
  transform: currencyTransform,
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
  transform: currencyTransform,
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
  transform: percentageTransform,
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
  transform: percentageTransform,
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
  transform: percentageTransform,
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
  transform: percentageTransform,
}

/**
 * YoY EPS Growth
 */
export const YoYEPSGrowth = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.DERIVED_SECURITY_METRICS,
  id: 'YoYEPSGrowth',
  label: 'YoY EPS Growth',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'YoY EPS Grow',
  transform: percentageTransform,
}

/**
 * YoY Revenue Growth
 */
const YoYRevenueGrowth = {
  valueBuckets: percentageValueBuckets,
  databaseModelName: metricRelations.DERIVED_SECURITY_METRICS,
  id: 'YoYRevenueGrowth',
  label: 'YoY Revenue Growth',
  requiresPlan: [BASIC, PROFESSIONAL],
  shortLabel: 'YoY Rev. Grow',
  transform: percentageTransform,
}

/**
 * ====================
 * Available Alerting Metrics
 * ====================
 */
export const alertMetrics = {
  latestPrice,
  change,
  changePercent,
  volume,
  marketCap,
  peRatio,
  // EEON Scores
}

export const alertMetricsList = _.toArray(alertMetrics)

export const getAlertMetricById = (id) =>
  alertMetricsList.find((item) => _.isEqual(item.id, id)) || changePercent

export default screenableMetrics = {
  popular: [
    changePercent,
    latestPrice,
    marketCap,
    peRatio,
    day14RSI,
    YoYRevenueGrowth,
    revenue,
  ],
  EEONScores: [
    EEONGrowthScore,
    EEONMomentumScore,
    EEONRuleOf40Score,
    EEONValueScore,
    EEONProfitabilityScore,
    EEONSafetyScore,
  ],
  performance: [
    day5ChangePercent,
    month1ChangePercent,
    month3ChangePercent,
    month6ChangePercent,
    ytdChangePercent,
    year1ChangePercent,
    year2ChangePercent,
    year5ChangePercent,
    beta,
    volume,
  ],
  value: [
    dividendYield,
    forwardPERatio,
    pegRatio,
    priceToSales,
    priceToBook,
    earningsYield,
    enterpriseValue,
    revenuePerEmployee,
    revenuePerShare,
  ],
  profitability: [profitMargin, ttmReturnOnAssets, ttmReturnOnEquity],
  fundamentals: [revenue, totalCash],
}

/**
 * ====================
 * Available sort orders for heatmap
 * ====================
 */
export const heatmapOrders = {
  popular: [
    changePercent,
    // relativeStrength,
    latestPrice,
    marketCap,
    peRatio,
    // revenueGrowth
  ],
  EEONScores: [],
  performance: [
    day5ChangePercent,
    month1ChangePercent,
    month3ChangePercent,
    month6ChangePercent,
    ytdChangePercent,
    year1ChangePercent,
    year2ChangePercent,
    year5ChangePercent,
    beta,
    volume,
  ],
  analysts: [
    // % buy
    // valuation %
    forwardPERatio,
    // forwardPriceToSales
  ],
  value: [
    peRatio,
    priceToSales,
    // earningsYield https://www.google.com/search?q=earnings+yield&oq=earnings+yield&aqs=chrome..69i57j0l7.1861j1j7&sourceid=chrome&ie=UTF-8
    enterpriseValue,
    revenuePerEmployee,
    revenuePerShare,
    pegRatio,
    // EV/Revenue
    priceToBook,
    dividendYield,
  ],
  growth: [
    // revenueGrowth
    // epsGrowth
  ],
  profitability: [
    profitMargin,
    // ROE
    // ROA
  ],
  fundamentals: [
    revenue,
    // netIncome
    // totalDebt,
    // cashFlowOps,
    employees,
    totalCash,
    // operatingExpense
    // Research & Development
    // Total Assets
  ],
  sentiment: [
    // social
    // putToCallRatio
  ],
}

export const heatmapOrdersList = [
  ...heatmapOrders.popular,
  ...heatmapOrders.EEONScores,
  ...heatmapOrders.performance,
  ...heatmapOrders.analysts,
  ...heatmapOrders.value,
  ...heatmapOrders.growth,
  ...heatmapOrders.profitability,
  ...heatmapOrders.fundamentals,
  ...heatmapOrders.sentiment,
]

export const getHeatmapOrdersMetricById = (id) =>
  heatmapOrdersList.find((item) => _.isEqual(item.id, id)) || changePercent

/**
 * ====================
 * Available filters for screeners
 * ====================
 */
export const screenerMetrics = {
  popular: [
    changePercent,
    // relativeStrength
    latestPrice,
    marketCap,
    peRatio,
    // revenueGrowth
  ],
  EEONScores: [],
  performance: [
    day5ChangePercent,
    month1ChangePercent,
    month3ChangePercent,
    month6ChangePercent,
    ytdChangePercent,
    year1ChangePercent,
    year2ChangePercent,
    year5ChangePercent,
    beta,
    volume,
  ],
  analysts: [
    // % buy
    // valuation %
    forwardPERatio,
    // forwardPriceToSales
  ],
  value: [
    peRatio,
    priceToSales,
    // earningsYield https://www.google.com/search?q=earnings+yield&oq=earnings+yield&aqs=chrome..69i57j0l7.1861j1j7&sourceid=chrome&ie=UTF-8
    enterpriseValue,
    revenuePerEmployee,
    revenuePerShare,
    pegRatio,
    // EV/Revenue
    priceToBook,
    dividendYield,
  ],
  growth: [
    // revenueGrowth
    // epsGrowth
  ],
  profitability: [
    profitMargin,
    // ROE
    // ROA
  ],
  fundamentals: [
    revenue,
    // netIncome
    // totalDebt,
    // cashFlowOps,
    employees,
    totalCash,
    // operatingExpense
    // Research & Development
    // Total Assets
  ],
  sentiment: [
    // social
    // putToCallRatio
  ],
}

export const screenerMetricsList = [
  ...screenerMetrics.popular,
  ...screenerMetrics.EEONScores,
  ...screenerMetrics.performance,
  ...screenerMetrics.analysts,
  ...screenerMetrics.value,
  ...screenerMetrics.growth,
  ...screenerMetrics.profitability,
  ...screenerMetrics.fundamentals,
  ...screenerMetrics.sentiment,
]

export const getScreenerMetricById = (id) =>
  screenerMetricsList.find((item) => _.isEqual(item.id, id)) || changePercent

/**
 * List types
 */
export const listTypes = {
  EEON_SCREENERLIST: 'eeonScreenerlist',
  EEON_WATCHLIST: 'eeonWatchlist',
  USER_SCREENERLIST: 'userScreenerlist',
  USER_WATCHLIST: 'userWatchlist',
}

/**
 * Checks if a list is an EEON list
 */
export const isEEONList = (list = {}) => !_.has(list, ['userId'])

/**
 * Checks if a list is a User list
 */
export const isUserList = (list = {}) => _.has(list, ['userId'])

/**
 * Checks if a list has criteria (and is a Screener)
 */
export const isListScreener = (list = {}) => _.has(list, 'criteria')

/**
 * Checks if a list has a holdings count (and is a Watchlist)
 */
export const isListWatchlist = (list = {}) => _.has(list, 'holdingsCount')
