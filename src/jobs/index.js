import keymirror from 'keymirror'

/**
 * Names of the jobs
 */
export const queueNames = keymirror({
  calculateDerivedSecurityMetrics: null,
  calculateEEONPerformanceScores: null,
  calculateMacroIndicators: null,
  calculateMarketInsights: null,
  calculateSecurityInsights: null,
  collectFinancialStatementsUponEarnings: null,
  fetchUpcomingEvents: null,
  primeCache: null,
  runPreMarketJobs: null,
  runDailyEEONScreenerlists: null,
  runDailyUserScreenerlists: null,
  runHourlyEEONScreenerlists: null,
  runHourlyUserScreenerlists: null,
  sendRealtimeSecurities: null,
  sendUserSecurityAlertMessages: null,
  storeRealtimeData: null,
  triggerUserSecurityAlerts: null,
})
