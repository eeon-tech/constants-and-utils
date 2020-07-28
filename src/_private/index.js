import toLower from 'lodash/toLower'
import toUpper from 'lodash/toUpper'
import mapValues from 'lodash/fp/mapValues'
import pipe from 'lodash/fp/pipe'
import keymirror from 'keymirror'

const convertValuesToLower = mapValues(toLower)

const convertValuesToUpper = mapValues(toUpper)

export const keymirrorLower = pipe(keymirror, convertValuesToLower)

export const keymirrorUpper = pipe(keymirror, convertValuesToUpper)
