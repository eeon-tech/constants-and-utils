const _ = require('lodash')
const _fp = require('lodash/fp')
const numbro = require('numbro')

/**
 * Creates EEON-specific parsing language
 * See spec: https://numbrojs.com/languages.html
 */
numbro.registerLanguage({
  abbreviations: {
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T',
  },
  currency: {
    symbol: '$',
    position: 'prefix',
    code: 'USD',
  },
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  languageTag: 'en-EEON',
  ordinal: () => '',
})
numbro.setLanguage('en-EEON')

/**
 * ECharts formatter doesn't support use of external libs so we have our own little formatter
 */
exports.formatChartNumber = (rawValue) => {
  const value = Math.abs(rawValue)
  const ONE_THOUSAND = 1000
  const ONE_MILLION = 1000000
  const ONE_BILLION = 1000000000
  const ONE_TRILLION = 1000000000000
  const ONE_QUADRILLION = 1000000000000000
  const prefix = rawValue < 0 ? '-' : ''
  if (value < ONE_THOUSAND) {
    return value
  }
  if (value < ONE_MILLION) {
    return `${prefix}${value / ONE_THOUSAND}K`
  }
  if (value < ONE_BILLION) {
    return `${prefix}${value / ONE_MILLION}M`
  }
  if (value < ONE_TRILLION) {
    return `${prefix}${value / ONE_BILLION}B`
  }
  if (value < ONE_QUADRILLION) {
    return `${prefix}${value / ONE_TRILLION}T`
  }
}

/**
 * Takes a number and formats it nicely into a human-readable string
 * e.g. 38400000000 --> 38.4B
 */
exports.formatNumberNicely = (value, args = {}) => {
  const { currency, percentage, ...rest } = args

  if (currency) {
    return numbro(value).formatCurrency(rest)
  }

  if (percentage) {
    return numbro(value).format({ ...rest, output: 'percent' })
  }

  return numbro(value).format(rest)
}

exports.isEven = (value) => _.isEqual(value % 2, 0)

exports.isGreaterThanZero = _fp.pipe(_fp.toNumber, _fp.gt(0))

exports.isLessThanZero = _fp.pipe(_fp.toNumber, _fp.lt(0))

exports.isOdd = _fp.complement(exports.isEven)

exports.isZero = _fp.isEqual(0)

exports.prefixValueWithCurrencySymbol = (value) =>
  exports.formatNumberNicely(value, { currency: true })

exports.suffixValueWithPercentSymbol = (value) =>
  exports.formatNumberNicely(value, { percentage: true })

/**
 * Takes a string and unformats it into a raw number
 * e.g. 38B --> 38000000000
 */
exports.unformatNiceNumber = (value = '') => {
  const uppercased = _.toUpper(value)

  // We have to do this because of the Byte formatter in Numbro
  const isBillions = uppercased.includes('B')

  if (isBillions) {
    const trimmed = uppercased.replace('B', '')
    const unformatted = numbro.unformat(trimmed)
    return unformatted * 1000000000
  }

  return numbro.unformat(uppercased)
}
