const _ = require('lodash')
const _fp = require('lodash/fp')

const isEnabled = _fp.isEqual('enabled')

const isIEXSandbox = (env = process.env) =>
  _.isEqual('sandbox', _.get(env, 'IEX_ENVIRONMENT'), true)

exports.getArenaPassword = (env = process.env) => _.get(env, ['ARENA_PASSWORD'])

exports.getArenaUsername = (env = process.env) => _.get(env, ['ARENA_PASSWORD'])

exports.getCloudinaryAPIKey = (env = process.env) =>
  _.get(env, ['CLOUDINARY_API_KEY'])

exports.getCloudinaryAPISecret = (env = process.env) =>
  _.get(env, ['CLOUDINARY_API_SECRET'])

exports.getCloudinaryCloudName = (env = process.env) =>
  _.get(env, ['CLOUDINARY_CLOUD_NAME'])

exports.getDatabaseHost = (env = process.env) =>
  _.get(env, ['DATABASE_HOST'], 'localhost')

exports.getDatabaseName = (env = process.env) =>
  _.get(env, ['DATABASE_NAME'], 'test')

exports.getDatabasePassword = (env = process.env) =>
  _.get(env, ['DATABASE_PASSWORD'], 'password')

exports.getDatabasePort = (env = process.env) =>
  _.get(env, ['DATABASE_PORT'], '27017')
;(exports.getDatabaseUsername = (env = process.env) => _),
  get(env, ['DATABASE_USERNAME'], 'user')

exports.getIEXPublishableToken = (env = process.env) =>
  isIEXSandbox(env)
    ? _.get(env, ['IEX_SANDBOX_PUBLISHABLE_TOKEN'])
    : _.get(env, 'IEX_PUBLISHABLE_TOKEN')

exports.getIEXRESTfulBaseURL = (env = process.env) =>
  isIEXSandbox(env)
    ? 'https://sandbox.iexapis.com/stable'
    : 'https://cloud.iexapis.com/stable'

exports.getIEXSecretToken = (env = process.env) =>
  isIEXSandbox(env)
    ? _.get(env, ['IEX_SANDBOX_SECRET_TOKEN'])
    : _.get(env, ['IEX_SECRET_TOKEN'])

exports.getIEXStreamingBaseURL = (env = process.env) =>
  isIEXSandbox(env)
    ? 'https://sandbox-sse.iexapis.com/stable'
    : 'https://cloud-sse.iexapis.com/stable'

exports.getIEXAPIVersion = () => 'stable'

exports.getIntercomAccessToken = (env = process.env) =>
  _.get(env, ['INTERCOM_ACCESS_TOKEN'])

exports.getRedisHost = (env = process.env) => _.get(env, ['REDIS_HOST'])

exports.getRedisPassword = (env = process.env) => _.get(env, ['REDIS_PASSWORD'])

exports.getRedisPort = (env = process.env) => _.get(env, ['REDIS_PORT'])

exports.getSendgridAPIKey = (env = process.env) =>
  _.get(env, ['SENDGRID_API_KEY'])

exports.getStockNewsAPIToken = (env = process.env) =>
  _.get(env, ['STOCK_NEWS_API_API_KEY'])

exports.getStripeBasicPlanId = (env = process.env) =>
  _.get(env, ['STRIPE_BASIC_PLAN_ID'])

exports.getStripeProfessionalPlanId = (env = process.env) =>
  _.get(env, ['STRIPE_PROFESSIONAL_PLAN_ID'])

exports.getStripeSecretKey = (env = process.env) =>
  _.get(env, ['STRIPE_SECRET_KEY'])

exports.isStreamingEnabled = (env = process.env) =>
  isEnabled(_.get(env, ['FEATURES_STREAMING']))
