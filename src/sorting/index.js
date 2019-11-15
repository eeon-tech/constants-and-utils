const sequelize = require('sequelize')
const utils = require('../utils')

exports.equalityOperations = {
  GREATER_THAN: [sequelize.Op.gt],
  LESS_THAN: [sequelize.Op.lt],
}

exports.sortOrders = utils.keymirrorUpper({
  ASC: null,
  DESC: null,
})
