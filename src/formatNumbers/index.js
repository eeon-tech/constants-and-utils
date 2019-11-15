const _ = require('lodash')
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
