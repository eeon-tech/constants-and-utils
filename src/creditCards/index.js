const _ = require('lodash')
const cardValidator = require('card-validator')

const checkCreditCardNumberValidity = (number = '') => {
  if (!number) return 'Required'
  const { isPotentiallyValid, isValid } = cardValidator.number(number)
  return isValid || isPotentiallyValid ? null : 'Invalid Card Number'
}

const checkExpirationMonthValidity = (month = '') => {
  if (!month) return 'Required'
  const { isPotentiallyValid, isValid } = cardValidator.expirationMonth(month)
  return isValid || isPotentiallyValid ? null : 'Invalid Exp. Month'
}

const checkExpirationYearValidity = (year = '') => {
  if (!year) return 'Required'
  const { isPotentiallyValid, isValid } = cardValidator.expirationYear(year)
  return isValid || isPotentiallyValid ? null : 'Invalid Exp. Year'
}

const checkCVCValidity = (cvc = '') => {
  if (!cvc) return 'Required'
  const { isPotentiallyValid, isValid } = cardValidator.cvv(cvc, 4)
  return isValid || isPotentiallyValid ? null : 'Invalid CVC'
}

exports.validateCreditCard = (card = {}) => {
  const { name = '', number, exp_month, exp_year, cvc } = card
  const errors = {
    name: !name || name.length > 250 ? 'Invalid Cardholder Name' : null,
    number: checkCreditCardNumberValidity(number),
    exp_month: checkExpirationMonthValidity(exp_month),
    exp_year: checkExpirationYearValidity(exp_year),
    cvc: checkCVCValidity(cvc),
  }
  const hasErrors = _.some(_.values(errors), _.identity)
  return hasErrors ? errors : null
}
