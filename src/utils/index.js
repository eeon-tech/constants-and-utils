import get from 'lodash/get'
import isArray from 'lodash/isArray'
import isEqual from 'lodash/isEqual'
import toLower from 'lodash/toLower'
import toUpper from 'lodash/toUpper'
import mapValues from 'lodash/fp/mapValues'
import every from 'lodash/fp/every'
import map from 'lodash/fp/map'
import fget from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'
import keymirror from 'keymirror'

const convertValuesToLower = mapValues(toLower)

const convertValuesToUpper = mapValues(toUpper)

export const eachIsTuple = (list = []) => {
  if (!isArray(list)) {
    throw new Error('Input is not iterable')
  }
  return every((item) => isArray(item) && isEqual(item.length, 2))(list)
}

export const extractFieldFromList = (field) => map(fget(field))

export const extractIdsFromList = extractFieldFromList('id')

export const extractSymbolsFromList = extractFieldFromList('symbol')

export const hasLength = (val = []) => {
  if (!isArray(val) && !isString(val)) {
    throw new Error('Input must be a number or string')
  }
  return val.length > 0
}

export const keymirrorLower = pipe(keymirror, convertValuesToLower)

export const keymirrorUpper = pipe(keymirror, convertValuesToUpper)

export const pickWithInitialState = (data = {}, valuesToRetrieve = []) => {
  if (!isArray(valuesToRetrieve) || !eachIsTuple(valuesToRetrieve)) {
    throw new Error('Selector must be a list of tuples')
  }
  return valuesToRetrieve.reduce((acc, valueToRetrieve) => {
    const [key, initialState] = valueToRetrieve
    acc[key] = get(data, key, initialState)
    return acc
  }, {})
}
