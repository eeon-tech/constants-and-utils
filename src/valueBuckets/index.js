/**
 * Pre-defined value buckets for Alert and Screener Criteria
 * These are solely values, predicates are separate and can be applied to a bucket
 */
const formatNumbers = require('../formatNumbers')

const createPercentageValueBucket = (value) => ({
  label: formatNumbers.formatNumberNicely(value, {
    percentage: true,
    mantissa: 2,
  }),
  value,
})
exports.createPercentageValueBucket = createPercentageValueBucket

const createNumericValueBucket = (value, overrides = {}) => ({
  label: formatNumbers.formatNumberNicely(value, {
    average: true,
    ...overrides,
  }),
  value,
})
exports.createNumericValueBucket = createNumericValueBucket

exports.EBITDAValueBuckets = [
  createNumericValueBucket(1000000),
  createNumericValueBucket(5000000),
  createNumericValueBucket(10000000),
  createNumericValueBucket(25000000),
  createNumericValueBucket(50000000),
  createNumericValueBucket(100000000),
  createNumericValueBucket(150000000),
  createNumericValueBucket(200000000),
  createNumericValueBucket(250000000),
  createNumericValueBucket(500000000),
  createNumericValueBucket(750000000),
  createNumericValueBucket(1000000000),
  createNumericValueBucket(5000000000),
  createNumericValueBucket(10000000000),
  createNumericValueBucket(20000000000),
  createNumericValueBucket(50000000000),
  createNumericValueBucket(10000000000),
  createNumericValueBucket(25000000000),
  createNumericValueBucket(50000000000),
]

exports.percentageValueBuckets = [
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

const overrides = { currency: true }
exports.priceValueBuckets = [
  createNumericValueBucket(10, overrides),
  createNumericValueBucket(15, overrides),
  createNumericValueBucket(20, overrides),
  createNumericValueBucket(25, overrides),
  createNumericValueBucket(30, overrides),
  createNumericValueBucket(40, overrides),
  createNumericValueBucket(50, overrides),
  createNumericValueBucket(75, overrides),
  createNumericValueBucket(100, overrides),
  createNumericValueBucket(125, overrides),
  createNumericValueBucket(150, overrides),
  createNumericValueBucket(175, overrides),
  createNumericValueBucket(200, overrides),
  createNumericValueBucket(225, overrides),
  createNumericValueBucket(250, overrides),
  createNumericValueBucket(300, overrides),
  createNumericValueBucket(350, overrides),
  createNumericValueBucket(400, overrides),
  createNumericValueBucket(450, overrides),
  createNumericValueBucket(500, overrides),
  createNumericValueBucket(550, overrides),
  createNumericValueBucket(600, overrides),
  createNumericValueBucket(650, overrides),
  createNumericValueBucket(700, overrides),
  createNumericValueBucket(750, overrides),
  createNumericValueBucket(800, overrides),
  createNumericValueBucket(850, overrides),
  createNumericValueBucket(900, overrides),
  createNumericValueBucket(950, overrides),
  createNumericValueBucket(1000, overrides),
  createNumericValueBucket(1250, overrides),
  createNumericValueBucket(1500, overrides),
  createNumericValueBucket(1750, overrides),
  createNumericValueBucket(2000, overrides),
  createNumericValueBucket(2500, overrides),
  createNumericValueBucket(3000, overrides),
  createNumericValueBucket(3500, overrides),
  createNumericValueBucket(4000, overrides),
  createNumericValueBucket(5000, overrides),
  createNumericValueBucket(7500, overrides),
  createNumericValueBucket(10000, overrides),
]

exports.volumeValueBuckets = [
  createNumericValueBucket(100000),
  createNumericValueBucket(500000),
  createNumericValueBucket(1000000),
  createNumericValueBucket(5000000),
  createNumericValueBucket(10000000),
  createNumericValueBucket(20000000),
]
