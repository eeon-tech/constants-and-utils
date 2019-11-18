const _ = require('lodash')
const _fp = require('lodash/fp')
const keymirror = require('keymirror')

const convertValuesToLower = _fp.mapValues(_.toLower)

const convertValuesToUpper = _fp.mapValues(_.toUpper)

exports.eachIsTuple = (list = []) => {
  if (!_.isArray(list)) {
    throw new Error('Input is not iterable')
  }
  return _fp.every((item) => _.isArray(item) && _.isEqual(item.length, 2))(list)
}

exports.extractFieldFromList = (field) => _fp.map(_fp.get(field))

exports.extractIdsFromList = exports.extractFieldFromList('id')

exports.extractSymbolsFromList = exports.extractFieldFromList('symbol')

exports.hasLength = (val = []) => {
  if (!_.isArray(val) && !_.isString(val)) {
    throw new Error('Input must be a number or string')
  }
  return val.length > 0
}

exports.keymirror = keymirror

exports.keymirrorLower = _fp.pipe(keymirror, convertValuesToLower)

exports.keymirrorUpper = _fp.pipe(keymirror, convertValuesToUpper)

exports.pickWithInitialState = (data = {}, valuesToRetrieve = []) => {
  if (!_.isArray(valuesToRetrieve) || !exports.eachIsTuple(valuesToRetrieve)) {
    throw new Error('Selector must be a list of tuples')
  }
  return valuesToRetrieve.reduce((acc, valueToRetrieve) => {
    const [key, initialState] = valueToRetrieve
    acc[key] = _.get(data, key, initialState)
    return acc
  }, {})
}
