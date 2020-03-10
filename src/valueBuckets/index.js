/**
 * Pre-defined value buckets for Alert and Screener Criteria
 * These are solely values, predicates are separate and can be applied to a bucket
 */
import _ from 'lodash'
import formatNumbers from '../formatNumbers'

export const createPercentageValueBucket = (value, label) => ({
  formattedValue: formatNumbers.formatNumberNicely(value, {
    percentage: true,
    mantissa: 2,
  }),
  label,
  value,
})

export const createEEONPerformanceScoreValueBucket = (value, label) => ({
  formattedValue: _.toString(_.multiply(value, 100)),
  label,
  value,
})

export const createNumericValueBucket = (
  value,
  label,
  priceValueBucketsOverrides = {}
) => ({
  formattedValue: formatNumbers.formatNumberNicely(value, {
    average: true,
    ...priceValueBucketsOverrides,
  }),
  label,
  value,
})

export const betaValueBuckets = [
  createNumericValueBucket(0),
  createNumericValueBucket(0.5, 'Less volatile than market'),
  createNumericValueBucket(1, 'Moves with Market'),
  createNumericValueBucket(1.5, 'More volatile than market'),
  createNumericValueBucket(2),
]

export const dividendYieldValueBuckets = [
  createPercentageValueBucket(0, 'No Dividend'),
  createPercentageValueBucket(0.01),
  createPercentageValueBucket(0.02),
  createPercentageValueBucket(0.03, 'Pretty good'),
  createPercentageValueBucket(0.04),
  createPercentageValueBucket(0.05),
  createPercentageValueBucket(0.06),
  createPercentageValueBucket(0.07),
  createPercentageValueBucket(0.08),
]

export const earningsYieldValueBuckets = [
  createPercentageValueBucket(-0.5),
  createPercentageValueBucket(-0.4),
  createPercentageValueBucket(-0.3),
  createPercentageValueBucket(-0.2),
  createPercentageValueBucket(-0.1),
  createPercentageValueBucket(-0.05),
  createPercentageValueBucket(0),
  createPercentageValueBucket(0.05),
  createPercentageValueBucket(0.1),
  createPercentageValueBucket(0.2),
  createPercentageValueBucket(0.3),
  createPercentageValueBucket(0.4),
  createPercentageValueBucket(0.5),
]

export const EBITDAValueBuckets = [
  createNumericValueBucket(0, 'Profitable'),
  createNumericValueBucket(1000000),
  createNumericValueBucket(5000000),
  createNumericValueBucket(10000000, 'Small'),
  createNumericValueBucket(25000000),
  createNumericValueBucket(50000000),
  createNumericValueBucket(100000000, 'Midsized'),
  createNumericValueBucket(150000000),
  createNumericValueBucket(200000000),
  createNumericValueBucket(250000000),
  createNumericValueBucket(500000000),
  createNumericValueBucket(750000000),
  createNumericValueBucket(1000000000, 'Large'),
  createNumericValueBucket(5000000000),
  createNumericValueBucket(10000000000, 'Mega'),
  createNumericValueBucket(20000000000),
  createNumericValueBucket(50000000000),
  createNumericValueBucket(10000000000),
  createNumericValueBucket(25000000000),
  createNumericValueBucket(50000000000),
]

export const EEONPerformanceScoresValueBuckets = [
  createEEONPerformanceScoreValueBucket(0),
  createEEONPerformanceScoreValueBucket(0.1),
  createEEONPerformanceScoreValueBucket(0.2),
  createEEONPerformanceScoreValueBucket(0.3),
  createEEONPerformanceScoreValueBucket(0.4),
  createEEONPerformanceScoreValueBucket(0.5),
  createEEONPerformanceScoreValueBucket(0.6),
  createEEONPerformanceScoreValueBucket(0.7),
  createEEONPerformanceScoreValueBucket(0.8),
  createEEONPerformanceScoreValueBucket(0.9),
  createEEONPerformanceScoreValueBucket(1),
]

export const employeesValueBuckets = [
  createNumericValueBucket(100),
  createNumericValueBucket(1000),
  createNumericValueBucket(5000),
  createNumericValueBucket(10000),
  createNumericValueBucket(25000),
  createNumericValueBucket(50000),
  createNumericValueBucket(100000),
]

const marketCapValueOverrides = { currency: true }
export const marketCapValueBuckets = [
  createNumericValueBucket(50000000, 'Micro-cap', marketCapValueOverrides),
  createNumericValueBucket(100000000, 'Tiny-cap', marketCapValueOverrides),
  createNumericValueBucket(500000000, 'Small-cap', marketCapValueOverrides),
  createNumericValueBucket(1000000000, marketCapValueOverrides),
  createNumericValueBucket(5000000000, marketCapValueOverrides),
  createNumericValueBucket(10000000000, 'Mid-cap', marketCapValueOverrides),
  createNumericValueBucket(50000000000, marketCapValueOverrides),
  createNumericValueBucket(100000000000, marketCapValueOverrides),
  createNumericValueBucket(200000000000, 'Large-cap', marketCapValueOverrides),
  createNumericValueBucket(500000000000, 'Mega-cap', marketCapValueOverrides),
]

export const pegRatioValueBuckets = [
  createNumericValueBucket(0),
  createNumericValueBucket(1, 'Fair value'),
  createNumericValueBucket(2),
  createNumericValueBucket(3),
]

export const peRatioValueBuckets = [
  createNumericValueBucket(0),
  createNumericValueBucket(5),
  createNumericValueBucket(10),
  createNumericValueBucket(15),
  createNumericValueBucket(20),
  createNumericValueBucket(25),
  createNumericValueBucket(30),
  createNumericValueBucket(35),
  createNumericValueBucket(40),
]

export const percentageValueBuckets = [
  createPercentageValueBucket(-0.3),
  createPercentageValueBucket(-0.25),
  createPercentageValueBucket(-0.2),
  createPercentageValueBucket(-0.15),
  createPercentageValueBucket(-0.1),
  createPercentageValueBucket(-0.09),
  createPercentageValueBucket(-0.08),
  createPercentageValueBucket(-0.07),
  createPercentageValueBucket(-0.06),
  createPercentageValueBucket(-0.05),
  createPercentageValueBucket(-0.04),
  createPercentageValueBucket(-0.03),
  createPercentageValueBucket(-0.02),
  createPercentageValueBucket(-0.01),
  createPercentageValueBucket(0),
  createPercentageValueBucket(0.01),
  createPercentageValueBucket(0.02),
  createPercentageValueBucket(0.03),
  createPercentageValueBucket(0.04),
  createPercentageValueBucket(0.05),
  createPercentageValueBucket(0.06),
  createPercentageValueBucket(0.07),
  createPercentageValueBucket(0.08),
  createPercentageValueBucket(0.09),
  createPercentageValueBucket(0.1),
  createPercentageValueBucket(0.15),
  createPercentageValueBucket(0.2),
  createPercentageValueBucket(0.25),
  createPercentageValueBucket(0.3),
]

const priceValueBucketsOverrides = { currency: true }
export const priceValueBuckets = [
  createNumericValueBucket(10, priceValueBucketsOverrides),
  createNumericValueBucket(15, priceValueBucketsOverrides),
  createNumericValueBucket(20, priceValueBucketsOverrides),
  createNumericValueBucket(25, priceValueBucketsOverrides),
  createNumericValueBucket(30, priceValueBucketsOverrides),
  createNumericValueBucket(40, priceValueBucketsOverrides),
  createNumericValueBucket(50, priceValueBucketsOverrides),
  createNumericValueBucket(75, priceValueBucketsOverrides),
  createNumericValueBucket(100, priceValueBucketsOverrides),
  createNumericValueBucket(150, priceValueBucketsOverrides),
  createNumericValueBucket(200, priceValueBucketsOverrides),
  createNumericValueBucket(250, priceValueBucketsOverrides),
  createNumericValueBucket(500, priceValueBucketsOverrides),
  createNumericValueBucket(750, priceValueBucketsOverrides),
  createNumericValueBucket(1000, priceValueBucketsOverrides),
  createNumericValueBucket(2000, priceValueBucketsOverrides),
]

export const priceToBookValueBuckets = [
  createNumericValueBucket(1, 'Low'),
  createNumericValueBucket(2),
  createNumericValueBucket(3),
  createNumericValueBucket(4),
  createNumericValueBucket(5, 'High'),
  createNumericValueBucket(6),
  createNumericValueBucket(7),
  createNumericValueBucket(8),
  createNumericValueBucket(9),
  createNumericValueBucket(10),
]

export const profitMarginValueBuckets = [
  createPercentageValueBucket(0),
  createPercentageValueBucket(10),
  createPercentageValueBucket(15),
  createPercentageValueBucket(20),
  createPercentageValueBucket(25),
  createPercentageValueBucket(30),
  createPercentageValueBucket(50),
  createPercentageValueBucket(75, '🔥'),
]

const revenueValueBucketOverrides = { currency: true }
export const revenueValueBuckets = [
  createNumericValueBucket(50000000, 'Small', revenueValueBucketOverrides),
  createNumericValueBucket(100000000, null, revenueValueBucketOverrides),
  createNumericValueBucket(250000000, null, revenueValueBucketOverrides),
  createNumericValueBucket(500000000, null, revenueValueBucketOverrides),
  createNumericValueBucket(1000000000, null, revenueValueBucketOverrides),
  createNumericValueBucket(10000000000, null, revenueValueBucketOverrides),
  createNumericValueBucket(25000000000, null, revenueValueBucketOverrides),
  createNumericValueBucket(50000000000, null, revenueValueBucketOverrides),
  createNumericValueBucket(100000000000, 'Mega', revenueValueBucketOverrides),
]

const revenuePerEmployeeValueBucketOverrides = { currency: true }
export const revenuePerEmployeeValueBuckets = [
  createNumericValueBucket(
    100000,
    null,
    revenuePerEmployeeValueBucketOverrides
  ),
  createNumericValueBucket(
    200000,
    null,
    revenuePerEmployeeValueBucketOverrides
  ),
  createNumericValueBucket(
    300000,
    null,
    revenuePerEmployeeValueBucketOverrides
  ),
  createNumericValueBucket(
    400000,
    null,
    revenuePerEmployeeValueBucketOverrides
  ),
  createNumericValueBucket(
    500000,
    null,
    revenuePerEmployeeValueBucketOverrides
  ),
  createNumericValueBucket(
    750000,
    null,
    revenuePerEmployeeValueBucketOverrides
  ),
  createNumericValueBucket(
    1000000,
    null,
    revenuePerEmployeeValueBucketOverrides
  ),
]

const revenuePerShareValueBucketOverrides = { currency: true }
export const revenuePerShareValueBuckets = [
  createNumericValueBucket(0, null, revenuePerShareValueBucketOverrides),
  createNumericValueBucket(5, null, revenuePerShareValueBucketOverrides),
  createNumericValueBucket(10, null, revenuePerShareValueBucketOverrides),
  createNumericValueBucket(15, null, revenuePerShareValueBucketOverrides),
  createNumericValueBucket(25, null, revenuePerShareValueBucketOverrides),
  createNumericValueBucket(50, null, revenuePerShareValueBucketOverrides),
  createNumericValueBucket(100, null, revenuePerShareValueBucketOverrides),
  createNumericValueBucket(250, null, revenuePerShareValueBucketOverrides),
  createNumericValueBucket(500, null, revenuePerShareValueBucketOverrides),
  createNumericValueBucket(1000, null, revenuePerShareValueBucketOverrides),
]

export const RSIValueBuckets = [
  createNumericValueBucket(0),
  createNumericValueBucket(10),
  createNumericValueBucket(20),
  createNumericValueBucket(30),
  createNumericValueBucket(40),
  createNumericValueBucket(50),
  createNumericValueBucket(60),
  createNumericValueBucket(70),
  createNumericValueBucket(80),
  createNumericValueBucket(90),
  createNumericValueBucket(100),
]

export const ttmEPSValueBuckets = [
  createNumericValueBucket(0),
  createNumericValueBucket(5),
  createNumericValueBucket(10),
  createNumericValueBucket(15),
  createNumericValueBucket(20),
  createNumericValueBucket(25),
  createNumericValueBucket(30),
  createNumericValueBucket(35),
  createNumericValueBucket(40),
  createNumericValueBucket(45),
  createNumericValueBucket(50),
]

export const volumeValueBuckets = [
  createNumericValueBucket(100000),
  createNumericValueBucket(500000),
  createNumericValueBucket(1000000),
  createNumericValueBucket(5000000),
  createNumericValueBucket(10000000),
]
