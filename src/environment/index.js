import get from 'lodash/get'
import isEqual from 'lodash/fp/isEqual'

const isEnabled = isEqual('enabled')
const isSandbox = isEqual('sandbox')

const isIEXSandbox = (env = process.env) =>
  isSandbox('sandbox', get(env, 'IEX_ENVIRONMENT'), true)

export const getArenaPassword = (env = process.env) =>
  get(env, ['ARENA_PASSWORD'])

export const getArenaUsername = (env = process.env) =>
  get(env, ['ARENA_PASSWORD'])

export const getCloudinaryAPIKey = (env = process.env) =>
  get(env, ['CLOUDINARY_API_KEY'])

export const getCloudinaryAPISecret = (env = process.env) =>
  get(env, ['CLOUDINARY_API_SECRET'])

export const getCloudinaryCloudName = (env = process.env) =>
  get(env, ['CLOUDINARY_CLOUD_NAME'])

export const getDatabaseHost = (env = process.env) =>
  get(env, ['DATABASE_HOST'], 'localhost')

export const getDatabaseName = (env = process.env) =>
  get(env, ['DATABASE_NAME'], 'test')

export const getDatabasePassword = (env = process.env) =>
  get(env, ['DATABASE_PASSWORD'], 'password')

export const getDatabasePort = (env = process.env) =>
  get(env, ['DATABASE_PORT'], '27017')

export const getDatabaseUsername = (env = process.env) =>
  get(env, ['DATABASE_USERNAME'], 'user')

export const getEEONEnvironment = (env = process.env) =>
  get(env, ['EEON_ENVIRONMENT'], 'development')

export const getIEXPublishableToken = (env = process.env) =>
  isIEXSandbox(env)
    ? get(env, ['IEX_SANDBOX_PUBLISHABLE_TOKEN'])
    : get(env, 'IEX_PUBLISHABLE_TOKEN')

export const getIEXRESTfulBaseURL = (env = process.env) =>
  isIEXSandbox(env)
    ? 'https://sandbox.iexapis.com/stable'
    : 'https://cloud.iexapis.com/stable'

export const getIEXSecretToken = (env = process.env) =>
  isIEXSandbox(env)
    ? get(env, ['IEX_SANDBOX_SECRET_TOKEN'])
    : get(env, ['IEX_SECRET_TOKEN'])

export const getIEXStreamingBaseURL = (env = process.env) =>
  isIEXSandbox(env)
    ? 'https://sandbox-sse.iexapis.com/stable'
    : 'https://cloud-sse.iexapis.com/stable'

export const getIEXAPIVersion = () => 'stable'

export const getIntercomAccessToken = (env = process.env) =>
  get(env, ['INTERCOM_ACCESS_TOKEN'])

export const getRedisHost = (env = process.env) => get(env, ['REDIS_HOST'])

export const getRedisPassword = (env = process.env) =>
  get(env, ['REDIS_PASSWORD'])

export const getRedisPort = (env = process.env) => get(env, ['REDIS_PORT'])

export const getSendgridAPIKey = (env = process.env) =>
  get(env, ['SENDGRID_API_KEY'])

export const getStockNewsAPIToken = (env = process.env) =>
  get(env, ['STOCK_NEWS_API_API_KEY'])

export const getStripeBasicPlanId = (env = process.env) =>
  get(env, ['STRIPE_BASIC_PLAN_ID'])

export const getStripeInvestorPlanId = (env = process.env) =>
  get(env, ['STRIPE_INVESTOR_PLAN_ID'])

export const getStripeProfessionalPlanId = (env = process.env) =>
  get(env, ['STRIPE_PROFESSIONAL_PLAN_ID'])

export const getStripeSecretKey = (env = process.env) =>
  get(env, ['STRIPE_SECRET_KEY'])

export const isStreamingEnabled = (env = process.env) =>
  isEnabled(get(env, ['FEATURES_STREAMING']))
