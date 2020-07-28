const convertToMS = (value) => value * 1000

export const cachePeriodsInMS = {
  '1m': convertToMS(60),
  '2m': convertToMS(120),
  '3m': convertToMS(180),
  '4m': convertToMS(240),
  '5m': convertToMS(300),
  '15m': convertToMS(900),
  '1h': convertToMS(3600),
  '4h': convertToMS(14400),
  '6h': convertToMS(21600),
  '8h': convertToMS(28800),
  '12h': convertToMS(43200),
  '1D': convertToMS(86400),
  '5D': convertToMS(432000),
  '10D': convertToMS(864000),
  '14D': convertToMS(1209600),
  '1M': convertToMS(2592000),
  '6M': convertToMS(15552000),
}
