const _ = require('lodash')

exports.eventNames = {
  ACCOUNT_CREATED: 'account.created',
  ALERT_CREATED: 'alert.created',
  ALERT_DELETED: 'alert.deleted',
  ALERT_UPDATED: 'alert.updated',
  CHART_TIMEFRAME_UPDATED: 'chart_timeframe.updated',
  CREATE_ACCOUNT_VIEWED: 'created_account.viewed',
  CREATE_PAYMENT_METHOD_VIEWED: 'create_payment_method.viewed',
  DASHBOARD_INSIGHT_VIEWED: 'dashboard_insight.viewed',
  DATA_AGREEMENT_AGREED: 'data_agreement.agreed',
  DATA_AGREEMENT_VIEWED: 'data_agreement.viewed',
  DRILLDOWN_VIEWED: 'drilldown.viewed',
  EEON_PERFORMANCE_SCORE_VIEWED: 'eeon_performance_score.viewed',
  FOLLOWERS_VIEWED: 'followers.viewed',
  HEATMAP_VIEWED: 'heatmap.viewed',
  HEATMAP_FILTER_VIEWED: 'heatmap_filter.viewed',
  INDIVIDUAL_SECURITY_VIEWED: 'individual_security.viewed',
  INDIVIDUAL_SECURITY_FINANCIALS_VIEWED:
    'individual_security_financials.viewed',
  INDIVIDUAL_SECURITY_NEWS_VIEWED: 'individual_security_news.viewed',
  INDIVIDUAL_SECURITY_NEWS_STORY_VIEWED:
    'individual_security_news_story.viewed',
  INDIVIDUAL_SECURITY_OVERVIEW_VIEWED: 'individual_security_overview.viewed',
  INDIVIDUAL_SECURITY_PICKER_ITEM_SELECTED:
    'individual_security_picker_item.selected',
  LATEST_NEWS_STORY_VIEWED: 'latest_news_story.viewed',
  LIST_ACTIONS_VIEWED: 'list_actions.viewed',
  LIST_METADATA_VIEWED: 'list_metadata.viewed',
  LIST_SWITCHER_VIEWED: 'list_switcher.viewed',
  LIST_SWITCHER_LIST_SELECTED: 'list_switcher_list.selected',
  LIST_TYPE_SELECTED: 'list_type.selected',
  MANAGE_PAYMENT_METHODS_VIEWED: 'manage_payment_methods.viewed',
  MANAGE_SCREENER_RULES_VIEWED: 'manage_screener_rules.viewed',
  MANAGE_WATCHLIST_SECURITIES_VIEWED: 'manage_watchlist_securities.viewed',
  MY_PROFILE_VIEWED: 'my_profile.viewed',
  OTHER_USER_VIEWED: 'other_user.viewed',
  PAYMENT_METHOD_CREATED: 'payment_method.created',
  PEER_SECURITY_VIEWED: 'peer_security.viewed',
  PLANS_VIEWED: 'plans.viewed',
  PRIVACY_DISCLAIMER_LINK_VIEWED: 'privacy_disclaimer_link.viewed',
  SCREENER_LIST_CREATED: 'screener_list.created',
  SCREENER_LIST_DELETED: 'screener_list.deleted',
  SCREENER_LIST_FOLLOWED: 'screener_list.followed',
  SCREENER_LIST_TYPE_SELECTED: 'screener_list_type.selected',
  SCREENER_LIST_SHARED: 'screener_list.shared',
  SCREENER_LIST_UNFOLLOWED: 'screener_list.unfollowed',
  SCREENER_LIST_UPDATED: 'screener_list.updated',
  SCREENER_LIST_VIEWED: 'screener_list.viewed',
  SCREENER_METRIC_SELECTED: 'screener_metric.selected',
  SCREENER_PREVIEW_VIEWED: 'screener_preview.viewed',
  SCREENER_UNIVERSE_SELECTED: 'screener_universe.selected',
  SEARCH_QUERY: 'search.query',
  SEARCH_SELECTED: 'search.selected',
  SEARCH_FEATURES_UPDATED: 'search_features.updated',
  SECURITY_INSIGHT_VIEWED: 'security_insight.viewed',
  SETTINGS_VIEWED: 'settings.viewed',
  UPDATE_PROFILE_VIEWED: 'update_profile.viewed',
  WATCHLIST_CREATED: 'watchlist.created',
  WATCHLIST_DELETED: 'watchlist.deleted',
  WATCHLIST_FOLLOWED: 'watchlist.followed',
  WATCHLIST_TYPE_SELECTED: 'watchlist_type.selected',
  WATCHLIST_SHARED: 'watchlist.shared',
  WATCHLIST_UNFOLLOWED: 'watchlist.unfollowed',
  WATCHLIST_UPDATED: 'watchlist.updated',
  WATCHLIST_VIEWED: 'watchlist.viewed',
  WELCOME_VIEWED: 'welcome.viewed',
}

const unsafeFieldsMap = {
  firstName: '$first_name',
  lastName: '$last_name',
  email: '$email',
  createdAt: '$created',
  phone: '$phone',
}

exports.cleanUserFields = (user = {}) => {
  const safeObject = _.entries(user).reduce((acc, [key, value]) => {
    const safeField = _.get(unsafeFieldsMap, key, key)
    acc[safeField] = value
    return acc
  }, {})
  return safeObject
}
