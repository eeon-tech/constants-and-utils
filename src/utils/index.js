const _ = require('lodash')
const _fp = require('lodash/fp')
const keymirror = require('keymirror')

const convertValuesToLower = _fp.mapValues(_.toLower)

const convertValuesToUpper = _fp.mapValues(_.toUpper)

exports.extractFieldFromList = (field) => _fp.map(_fp.get(field))

exports.extractIdsFromList = exports.extractFieldFromList('id')

exports.extractSymbolsFromList = exports.extractFieldFromList('symbol')

exports.keymirror = keymirror

exports.keymirrorLower = _fp.pipe(keymirror, convertValuesToLower)

exports.keymirrorUpper = _fp.pipe(keymirror, convertValuesToUpper)
