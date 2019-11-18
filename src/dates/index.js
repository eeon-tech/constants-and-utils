const moment = require('moment')

exports.getTimestampOfFirstDayOfNextMonth = () =>
  moment()
    .add(1, 'months')
    .startOf('month')
    .unix()

exports.getTimestampOfFirstDayMultipleMonthsFromNow = ({ months }) =>
  moment()
    .add(months, 'months')
    .startOf('month')
    .unix()

exports.getTimestampOfMultipleDaysFromNow = ({ days }) =>
  moment()
    .add(days, 'days')
    .startOf('day')
    .unix()
