import { keymirrorLower, keymirrorUpper } from '../_private'

export const stripeCardStatuses = keymirrorLower({
  CANCELED: null,
  CHARGEABLE: null,
  CONSUMED: null,
  FAILED: null,
  PENDING: null,
})

export const stripeCouponDurations = keymirrorLower({
  FOREVER: null,
  ONCE: null,
  REPEATING: null,
})

export const stripePlans = keymirrorUpper({
  BASIC: null,
  INVESTOR: null,
})

export const stripeSubscriptionStatuses = keymirrorLower({
  ACTIVE: null,
  CANCELED: null,
  INCOMPLETED_EXPIRED: null,
  INCOMPLETE: null,
  PAST_DUE: null,
  TRIALING: null,
  UNPAID: null,
})
