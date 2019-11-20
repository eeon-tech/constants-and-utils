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

exports.stripePlans = {
  BASIC: {
    name: 'BASIC',
    id: environment.getStripeBasicPlanId(process.env),
  },
  PROFESSIONAL: {
    name: 'PROFESSIONAL',
    id: environment.getStripeProfessionalPlanId(process.env),
  },
}

exports.getPlanIdForPlanName = (planName) =>
  _.get(exports.stripePlans, [planName, 'id'])

exports.stripeSubscriptionStatuses = utils.keymirrorLower({
  ACTIVE: null,
  CANCELED: null,
  INCOMPLETED_EXPIRED: null,
  INCOMPLETE: null,
  PAST_DUE: null,
  TRIALING: null,
  UNPAID: null,
})
