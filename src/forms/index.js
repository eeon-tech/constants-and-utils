const _ = require('lodash')
const { form } = require('joi-errors-for-forms')

const convertLabelToSentence = (value = '') => _.startCase(_.camelCase(value))

const transform = form({
  'any.required': ({ label }) => `${convertLabelToSentence(label)} is required`,
})

exports.formifyValidationErrors = (errors = {}) => transform(errors)
