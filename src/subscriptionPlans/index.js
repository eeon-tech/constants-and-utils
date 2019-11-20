const environment = require('../environment')
const utils = require('../utils')

exports.stripeCardStatuses = utils.keymirrorLower({
  CANCELED: null,
  CHARGEABLE: null,
  CONSUMED: null,
  FAILED: null,
  PENDING: null,
})

exports.stripeCouponDurations = utils.keymirrorLower({
  FOREVER: null,
  ONCE: null,
  REPEATING: null,
})

exports.stripePlans = utils.keymirrorUpper({
  BASIC: null,
  PROFESSIONAL: null,
})

exports.stripeSubscriptionStatuses = utils.keymirrorLower({
  ACTIVE: null,
  CANCELED: null,
  INCOMPLETED_EXPIRED: null,
  INCOMPLETE: null,
  PAST_DUE: null,
  TRIALING: null,
  UNPAID: null,
})
