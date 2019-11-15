const _ = require('lodash')
const keymirror = require('keymirror')

exports.authenticationMethods = keymirror({ FACEBOOK: null, GOOGLE: null })

exports.isFacebook = (method) =>
  _.isEqual(exports.authenticationMethods.FACEBOOK, method)

exports.isGoogle = (method) =>
  _.isEqual(exports.authenticationMethods.GOOGLE, method)
