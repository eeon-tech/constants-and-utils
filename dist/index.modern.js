import e from"lodash/get";import a from"lodash/isEqual";import r from"lodash/fp/isEqual";import l from"lodash/toUpper";import t from"lodash/fp/toNumber";import s from"lodash/fp/pipe";import o from"lodash/fp/lt";import n from"lodash/isUndefined";import u from"lodash/isNull";import i from"lodash/isFunction";import c from"lodash/fp/gt";import m from"lodash/fp/complement";import E from"lodash/toLower";import d from"lodash/fp/mapValues";import b from"keymirror";import S from"lodash";import T from"lodash/has";import h from"lodash/divide";import p from"lodash/flatten";import P from"lodash/values";import A from"lodash/multiply";import _ from"lodash/toString";import v from"lodash/isArray";import N from"lodash/fp/every";import R from"lodash/fp/map";import f from"lodash/fp/get";const M=e=>1e3*e;var y={__proto__:null,cachePeriodsInMS:{"1m":M(60),"2m":M(120),"3m":M(180),"4m":M(240),"5m":M(300),"15m":M(900),"1h":M(3600),"4h":M(14400),"6h":M(21600),"8h":M(28800),"12h":M(43200),"1D":M(86400),"5D":M(432e3),"10D":M(864e3),"14D":M(1209600),"1M":M(2592e3),"6M":M(15552e3)}};const g=r("enabled"),C=(r=process.env)=>a("sandbox",e(r,"IEX_ENVIRONMENT"),!1);var L={__proto__:null,isIEXSandbox:C,getArenaPassword:(a=process.env)=>e(a,["ARENA_PASSWORD"]),getArenaUsername:(a=process.env)=>e(a,["ARENA_PASSWORD"]),getCloudinaryAPIKey:(a=process.env)=>e(a,["CLOUDINARY_API_KEY"]),getCloudinaryAPISecret:(a=process.env)=>e(a,["CLOUDINARY_API_SECRET"]),getCloudinaryCloudName:(a=process.env)=>e(a,["CLOUDINARY_CLOUD_NAME"]),getDatabaseHost:(a=process.env)=>e(a,["DATABASE_HOST"],"localhost"),getDatabaseName:(a=process.env)=>e(a,["DATABASE_NAME"],"test"),getDatabasePassword:(a=process.env)=>e(a,["DATABASE_PASSWORD"],"password"),getDatabasePort:(a=process.env)=>e(a,["DATABASE_PORT"],"27017"),getDatabaseUsername:(a=process.env)=>e(a,["DATABASE_USERNAME"],"user"),getEEONEnvironment:(a=process.env)=>e(a,["EEON_ENVIRONMENT"],"development"),getIEXPublishableToken:(a=process.env)=>C(a)?e(a,["IEX_SANDBOX_PUBLISHABLE_TOKEN"]):e(a,"IEX_PUBLISHABLE_TOKEN"),getIEXRESTfulBaseURL:(e=process.env)=>C(e)?"https://sandbox.iexapis.com/stable":"https://cloud.iexapis.com/stable",getIEXSecretToken:(a=process.env)=>C(a)?e(a,["IEX_SANDBOX_SECRET_TOKEN"]):e(a,["IEX_SECRET_TOKEN"]),getIEXStreamingBaseURL:(e=process.env)=>C(e)?"https://sandbox-sse.iexapis.com/stable":"https://cloud-sse.iexapis.com/stable",getIEXAPIVersion:()=>"stable",getIntercomAccessToken:(a=process.env)=>e(a,["INTERCOM_ACCESS_TOKEN"]),getRedisHost:(a=process.env)=>e(a,["REDIS_HOST"]),getRedisPassword:(a=process.env)=>e(a,["REDIS_PASSWORD"]),getRedisPort:(a=process.env)=>e(a,["REDIS_PORT"]),getSendgridAPIKey:(a=process.env)=>e(a,["SENDGRID_API_KEY"]),getStockNewsAPIToken:(a=process.env)=>e(a,["STOCK_NEWS_API_API_KEY"]),getStripeBasicPlanId:(a=process.env)=>e(a,["STRIPE_BASIC_PLAN_ID"]),getStripeInvestorPlanId:(a=process.env)=>e(a,["STRIPE_INVESTOR_PLAN_ID"]),getStripeProfessionalPlanId:(a=process.env)=>e(a,["STRIPE_PROFESSIONAL_PLAN_ID"]),getStripeSecretKey:(a=process.env)=>e(a,["STRIPE_SECRET_KEY"]),isStreamingEnabled:(a=process.env)=>g(e(a,["FEATURES_STREAMING"]))};const O=require("numbro");O.registerLanguage({abbreviations:{thousand:"K",million:"M",billion:"B",trillion:"T"},currency:{symbol:"$",position:"prefix",code:"USD"},delimiters:{thousands:",",decimal:"."},languageTag:"en-EEON",ordinal:()=>""}),O.setLanguage("en-EEON");const D=(a,r={})=>{const{currency:l,percentage:t,...s}=r;return u(a)||n(a)||!i(e(a,["toString"]))?"N/A":l?O(a).formatCurrency(s):t?O(a).format({...s,output:"percent"}):O(a).format(s)},I=e=>a(e%2,0),B=s(t,c(0)),k=s(t,o(0)),V=m(I),Y=r(0);var q={__proto__:null,formatChartNumber:e=>{const a=Math.abs(e),r=e<0?"-":"";return a<1e3?a:a<1e6?`${r}${a/1e3}K`:a<1e9?`${r}${a/1e6}M`:a<1e12?`${r}${a/1e9}B`:a<1e15?`${r}${a/1e12}T`:void 0},formatNumberNicely:D,isEven:I,isGreaterThanZero:B,isLessThanZero:k,isOdd:V,isZero:Y,prefixValueWithCurrencySymbol:e=>D(e,{currency:!0}),suffixValueWithPercentSymbol:e=>D(e,{percentage:!0}),unformatNiceNumber:(e="",{unformatter:a}={})=>{if(i(a))return a(e);const r=l(e);if(r.includes("B")){const e=r.replace("B","");return 1e9*O.unformat(e)}return O.unformat(r)}};const U=d(E),w=d(l),K=s(b,U),F=s(b,w);var H={__proto__:null,announceTimes:F({AMC:null,BTO:null,OTHER:null}),periods:K({ANNUAL:null,QUARTERLY:null}),securityTypes:K({AD:null,RE:null,CE:null,SI:null,LP:null,CS:null,ET:null,WT:null,OEF:null,CEF:null,PS:null}),timeframes:{FIVE_DAYS:"5d",FIVE_YEARS:"5y",ONE_MONTH:"1m",ONE_YEAR:"1y",SIX_MONTHS:"6m",THREE_MONTHS:"3m",TWO_YEARS:"2y"},timeRanges:{FIVE_DAYS:"5d",FIVE_YEARS:"5y",ONE_MONTH:"1m",ONE_YEAR:"1Y",SIX_MONTHS:"6M",THREE_MONTHS:"3M",TWO_YEARS:"2Y",YTD:"ytd"},LIVE:"live"},G={__proto__:null,queueNames:b({calculateDerivedSecurityMetrics:null,calculateEEONPerformanceScores:null,calculateMacroIndicators:null,calculateMarketInsights:null,calculateSecurityInsights:null,collectFinancialStatementsUponEarnings:null,fetchUpcomingEvents:null,primeCache:null,runPreMarketJobs:null,runDailyEEONScreenerlists:null,runDailyUserScreenerlists:null,runHourlyEEONScreenerlists:null,runHourlyUserScreenerlists:null,sendRealtimeSecurities:null,sendUserSecurityAlertMessages:null,storeRealtimeData:null,triggerUserSecurityAlerts:null})};const X=K({CANCELED:null,CHARGEABLE:null,CONSUMED:null,FAILED:null,PENDING:null}),W=K({FOREVER:null,ONCE:null,REPEATING:null}),x=F({BASIC:null,INVESTOR:null});var Q={__proto__:null,stripeCardStatuses:X,stripeCouponDurations:W,stripePlans:x,stripeSubscriptionStatuses:K({ACTIVE:null,CANCELED:null,INCOMPLETED_EXPIRED:null,INCOMPLETE:null,PAST_DUE:null,TRIALING:null,UNPAID:null})};const $=(e,a)=>({formattedValue:D(e,{percentage:!0,mantissa:2}),label:a,value:e}),J=(e,a)=>({formattedValue:_(A(e,100)),label:a,value:e}),Z=(e,a,r={})=>({formattedValue:D(e,{average:!0,...r}),label:a,value:e}),j=(e,a,r={})=>({formattedValue:e,label:a,value:e}),z=[j(0),j(.5,"Less volatile than market"),j(1,"Moves with Market"),j(1.5,"More volatile than market"),j(2)],ee=[$(0,"No Dividend"),$(.01),$(.02),$(.03,"Pretty good"),$(.04),$(.05),$(.06),$(.07),$(.08)],ae=[$(-.5),$(-.4),$(-.3),$(-.2),$(-.1),$(-.05),$(0),$(.05),$(.1),$(.2),$(.3),$(.4),$(.5)],re=[Z(0,"Profitable"),Z(1e6),Z(5e6),Z(1e7,"Small"),Z(25e6),Z(5e7),Z(1e8,"Midsized"),Z(15e7),Z(2e8),Z(25e7),Z(5e8),Z(75e7),Z(1e9,"Large"),Z(5e9),Z(1e10,"Mega"),Z(2e10),Z(5e10),Z(1e10),Z(25e9),Z(5e10)],le=[J(0),J(.1),J(.2),J(.3),J(.4),J(.5),J(.6),J(.7),J(.8),J(.9),J(1)],te=[Z(100),Z(1e3),Z(5e3),Z(1e4),Z(25e3),Z(5e4),Z(1e5)],se={currency:!0},oe=[Z(5e7,"Micro-cap",se),Z(1e8,"Tiny-cap",se),Z(5e8,"Small-cap",se),Z(1e9,se),Z(5e9,se),Z(1e10,"Mid-cap",se),Z(5e10,se),Z(1e11,se),Z(2e11,"Large-cap",se),Z(5e11,"Mega-cap",se)],ne=[Z(0),Z(1,"Fair value"),Z(2),Z(3)],ue=[Z(0),Z(5),Z(10),Z(15),Z(20),Z(25),Z(30),Z(35),Z(40)],ie=[$(-.3),$(-.25),$(-.2),$(-.15),$(-.1),$(-.09),$(-.08),$(-.07),$(-.06),$(-.05),$(-.04),$(-.03),$(-.02),$(-.01),$(0),$(.01),$(.02),$(.03),$(.04),$(.05),$(.06),$(.07),$(.08),$(.09),$(.1),$(.15),$(.2),$(.25),$(.3)],ce={currency:!0},me=[Z(10,ce),Z(15,ce),Z(20,ce),Z(25,ce),Z(30,ce),Z(40,ce),Z(50,ce),Z(75,ce),Z(100,ce),Z(150,ce),Z(200,ce),Z(250,ce),Z(500,ce),Z(750,ce),Z(1e3,ce),Z(2e3,ce)],Ee=[Z(1,"Low"),Z(2),Z(3),Z(4),Z(5,"High"),Z(6),Z(7),Z(8),Z(9),Z(10)],de=[$(0),$(.1),$(.15),$(.2),$(.25),$(.3),$(.5),$(.75,"🔥")],be={currency:!0},Se=[Z(5e7,"Small",be),Z(1e8,null,be),Z(25e7,null,be),Z(5e8,null,be),Z(1e9,null,be),Z(1e10,null,be),Z(25e9,null,be),Z(5e10,null,be),Z(1e11,"Mega",be)],Te={currency:!0},he=[Z(1e5,null,Te),Z(2e5,null,Te),Z(3e5,null,Te),Z(4e5,null,Te),Z(5e5,null,Te),Z(75e4,null,Te),Z(1e6,null,Te)],pe={currency:!0},Pe=[Z(0,null,pe),Z(5,null,pe),Z(10,null,pe),Z(15,null,pe),Z(25,null,pe),Z(50,null,pe),Z(100,null,pe),Z(250,null,pe),Z(500,null,pe),Z(1e3,null,pe)],Ae=[Z(0),Z(10),Z(20),Z(30),Z(40),Z(50),Z(60),Z(70),Z(80),Z(90),Z(100)],_e=[Z(0),Z(5),Z(10),Z(15),Z(20),Z(25),Z(30),Z(35),Z(40),Z(45),Z(50)],ve=[Z(1e5),Z(5e5),Z(1e6),Z(5e6),Z(1e7)];var Ne={__proto__:null,createPercentageValueBucket:$,createEEONPerformanceScoreValueBucket:J,createNumericValueBucket:Z,createIdentityValueBucket:j,betaValueBuckets:z,dividendYieldValueBuckets:ee,earningsYieldValueBuckets:ae,EBITDAValueBuckets:re,EEONPerformanceScoresValueBuckets:le,employeesValueBuckets:te,marketCapValueBuckets:oe,pegRatioValueBuckets:ne,peRatioValueBuckets:ue,percentageValueBuckets:ie,priceValueBuckets:me,priceToBookValueBuckets:Ee,profitMarginValueBuckets:de,revenueValueBuckets:Se,revenuePerEmployeeValueBuckets:he,revenuePerShareValueBuckets:Pe,RSIValueBuckets:Ae,ttmEPSValueBuckets:_e,volumeValueBuckets:ve};const{BASIC:Re,INVESTOR:fe}=x,Me={ADVANCED_STATS:"AdvancedStats",DERIVED_SECURITY_METRICS:"DerivedSecurityMetric",EEON_PERFORMANCE_SCORES:"EEONPerformanceScore",KEY_STATS:"KeyStats",QUOTE:"Quote",TECHNICAL_INDICATORS:"TechnicalIndicator"},ye=(e=0)=>D(e,{average:!0}),ge=(e=0)=>D(e,{average:!0,currency:!0,mantissa:1}),Ce=(e=0)=>D(e,{mantissa:2}),Le=(e=0)=>D(e,{currency:!0,mantissa:2}),Oe=(e=0)=>D(e,{mantissa:2,percentage:!0}),De=(e=0)=>{const a=A(e,100);return D(a,{mantissa:0})},Ie=(e=0)=>D(e,{mantissa:2}),Be=(e=0)=>D(e,{average:!0,totalLength:4}),ke=s(t,e=>h(e,100)),Ve={valueBuckets:ve,databaseModelName:Me.KEY_STATS,id:"avg10Volume",label:"10 Day Average Volume",requiresPlan:[Re,fe],shortLabel:"10D Avg. Volume",transform:Be},Ye={valueBuckets:ve,databaseModelName:Me.KEY_STATS,id:"avg30Volume",label:"30 Day Average Volume",requiresPlan:[Re,fe],shortLabel:"30D Avg. Volume",transform:Be},qe={valueBuckets:z,databaseModelName:Me.KEY_STATS,id:"beta",label:"Beta",requiresPlan:[Re,fe],shortLabel:"Beta",transform:Ce},Ue={valueBuckets:me,databaseModelName:Me.QUOTE,id:"change",label:"Change",requiresPlan:[Re,fe],shortLabel:"Change",transform:Le},we={valueBuckets:ie,databaseModelName:Me.QUOTE,id:"changePercent",label:"1-day Return",requiresPlan:[Re,fe],shortLabel:"1D %",transform:Oe},Ke={valueBuckets:me,databaseModelName:Me.QUOTE,id:"close",label:"Close",requiresPlan:[Re,fe],shortLabel:"Close",transform:Le},Fe={valueBuckets:oe,databaseModelName:Me.ADVANCED_STATS,id:"currentDebt",label:"Current Debt",requiresPlan:[fe],shortLabel:"Current Debt",transform:ge},He={valueBuckets:Ae,databaseModelName:Me.TECHNICAL_INDICATORS,id:"day14RSI",label:"14 Day RSI",requiresPlan:[fe],shortLabel:"RSI",transform:ye},Ge={valueBuckets:ie,databaseModelName:Me.KEY_STATS,id:"day30ChangePercent",label:"30-day Return",requiresPlan:[Re,fe],shortLabel:"30D %",transform:Oe},Xe={valueBuckets:ie,databaseModelName:Me.KEY_STATS,id:"day5ChangePercent",label:"5-day Return",requiresPlan:[Re,fe],shortLabel:"5D %",transform:Oe},We={valueBuckets:me,databaseModelName:Me.KEY_STATS,id:"day50MovingAvg",label:"50 Day Moving Average",requiresPlan:[Re,fe],shortLabel:"50D Moving Avg.",transform:Le},xe={valueBuckets:me,databaseModelName:Me.KEY_STATS,id:"day200MovingAvg",label:"200 Day Moving Average",requiresPlan:[Re,fe],shortLabel:"200D Moving Avg.",transform:Le},Qe={valueBuckets:ue,databaseModelName:Me.ADVANCED_STATS,id:"debtToEquity",label:"Debt to Equity",requiresPlan:[fe],shortLabel:"Debt / Equity",transform:Ie},$e={valueBuckets:ee,databaseModelName:Me.KEY_STATS,id:"dividendYield",label:"Dividend Yield",requiresPlan:[fe],shortLabel:"Div. Yield",transform:Oe},Je={valueBuckets:ae,databaseModelName:Me.DERIVED_SECURITY_METRICS,id:"earningsYield",label:"Earnings Yield",requiresPlan:[fe],shortLabel:"Earnings Yield",transform:Oe},Ze={valueBuckets:re,databaseModelName:Me.ADVANCED_STATS,id:"EBITDA",label:"EBITDA",requiresPlan:[fe],shortLabel:"EBITDA",transform:ge},je={valueBuckets:le,databaseModelName:Me.EEON_PERFORMANCE_SCORES,id:"growthScore",label:"EEON Growth Score",requiresPlan:[fe],shortLabel:"Growth Score",transform:De,unformatter:ke},ze={valueBuckets:le,databaseModelName:Me.EEON_PERFORMANCE_SCORES,id:"momentumScore",label:"EEON Momentum Score",requiresPlan:[fe],shortLabel:"Momentum Score",transform:De,unformatter:ke},ea={valueBuckets:le,databaseModelName:Me.EEON_PERFORMANCE_SCORES,id:"profitabilityScore",label:"EEON Profitability Score",requiresPlan:[fe],shortLabel:"Profitability Score",transform:De,unformatter:ke},aa={valueBuckets:le,databaseModelName:Me.EEON_PERFORMANCE_SCORES,id:"ruleOf40Score",label:"EEON Scalability Score",requiresPlan:[fe],shortLabel:"Scalability Score",transform:De,unformatter:ke},ra={valueBuckets:le,databaseModelName:Me.EEON_PERFORMANCE_SCORES,id:"safetyScore",label:"EEON Safety Score",requiresPlan:[fe],shortLabel:"Safety Score",transform:De,unformatter:ke},la={valueBuckets:le,databaseModelName:Me.EEON_PERFORMANCE_SCORES,id:"valueScore",label:"EEON Value Score",requiresPlan:[fe],shortLabel:"Value Score",transform:De,unformatter:ke},ta={valueBuckets:te,databaseModelName:Me.KEY_STATS,id:"employees",label:"Employees",requiresPlan:[Re,fe],shortLabel:"Employees",transform:ye},sa={valueBuckets:re,databaseModelName:Me.ADVANCED_STATS,id:"enterpriseValue",label:"Enterprise Value",requiresPlan:[fe],shortLabel:"Ent. Value",transform:ge},oa={valueBuckets:Ee,databaseModelName:Me.ADVANCED_STATS,id:"enterpriseValueToRevenue",label:"Enterprise Value to Revenue",requiresPlan:[fe],shortLabel:"EV/Rev",transform:Ie},na={valueBuckets:ie,databaseModelName:Me.QUOTE,id:"extendedChangePercet",label:"After-hours Return",requiresPlan:[Re,fe],shortLabel:"After-hours %",transform:Oe},ua={valueBuckets:ue,databaseModelName:Me.ADVANCED_STATS,id:"forwardPERatio",label:"Forward PE Ratio",requiresPlan:[fe],shortLabel:"For. PE Ratio",transform:Ie},ia={valueBuckets:Se,databaseModelName:Me.ADVANCED_STATS,id:"grossProfit",label:"Gross Profit",requiresPlan:[fe],shortLabel:"Gross Profit",transform:ge},ca={valueBuckets:me,databaseModelName:Me.QUOTE,id:"high",label:"High",requiresPlan:[Re,fe],shortLabel:"High",transform:Le},ma={valueBuckets:me,databaseModelName:Me.QUOTE,id:"latestPrice",label:"Price",requiresPlan:[Re,fe],shortLabel:"Price",transform:Le},Ea={valueBuckets:me,databaseModelName:Me.QUOTE,id:"low",label:"Low",requiresPlan:[Re,fe],shortLabel:"Low",transform:Le},da={valueBuckets:oe,databaseModelName:Me.QUOTE,id:"marketCap",label:"Market Cap.",requiresPlan:[Re,fe],shortLabel:"Market Cap.",transform:ge},ba={valueBuckets:ie,databaseModelName:Me.KEY_STATS,id:"month1ChangePercent",label:"1-month Return",requiresPlan:[Re,fe],shortLabel:"1M %",transform:Oe},Sa={valueBuckets:ie,databaseModelName:Me.KEY_STATS,id:"month3ChangePercent",label:"3-month Return",requiresPlan:[Re,fe],shortLabel:"3M %",transform:Oe},Ta={valueBuckets:ie,databaseModelName:Me.KEY_STATS,id:"month6ChangePercent",label:"6-month Return",requiresPlan:[Re,fe],shortLabel:"6M %",transform:Oe},ha={valueBuckets:me,databaseModelName:Me.QUOTE,id:"open",label:"Open",requiresPlan:[Re,fe],shortLabel:"Open",transform:Le},pa={valueBuckets:ue,databaseModelName:Me.QUOTE,id:"peRatio",label:"PE Ratio",requiresPlan:[Re,fe],shortLabel:"PE Ratio",transform:Ie},Pa={valueBuckets:ne,databaseModelName:Me.ADVANCED_STATS,id:"pegRatio",label:"PEG Ratio",requiresPlan:[fe],shortLabel:"PEG Ratio",transform:Ie},Aa={valueBuckets:me,databaseModelName:Me.QUOTE,id:"previousClose",label:"Previous Close",requiresPlan:[Re,fe],shortLabel:"Prev. Close",transform:Le},_a={valueBuckets:ve,databaseModelName:Me.QUOTE,id:"previousVolume",label:"Previous Volume",requiresPlan:[Re,fe],shortLabel:"Prev. Volume",transform:Be},va={valueBuckets:Ee,databaseModelName:Me.ADVANCED_STATS,id:"priceToBook",label:"Price to Book",requiresPlan:[fe],shortLabel:"P/B",transform:Ie},Na={valueBuckets:Ee,databaseModelName:Me.ADVANCED_STATS,id:"priceToSales",label:"Price to Sales",requiresPlan:[fe],shortLabel:"P/S",transform:Ie},Ra={valueBuckets:de,databaseModelName:Me.ADVANCED_STATS,id:"profitMargin",label:"Profit Margin",requiresPlan:[fe],shortLabel:"Profit Margin",transform:Oe},fa={valueBuckets:Se,databaseModelName:Me.ADVANCED_STATS,id:"revenue",label:"Revenue",requiresPlan:[Re,fe],shortLabel:"Revenue",transform:ge},Ma={valueBuckets:he,databaseModelName:Me.ADVANCED_STATS,id:"revenuePerEmployee",label:"Revenue per Employee",requiresPlan:[fe],shortLabel:"Revenue / Employee",transform:ge},ya={valueBuckets:Pe,databaseModelName:Me.ADVANCED_STATS,id:"revenuePerShare",label:"Revenue per Share",requiresPlan:[fe],shortLabel:"Revenue / Share",transform:Le},ga={valueBuckets:Se,databaseModelName:Me.KEY_STATS,id:"sharesOutstanding",label:"Shares Outstanding",requiresPlan:[Re,fe],shortLabel:"Shares",transform:ye},Ca={valueBuckets:_e,databaseModelName:Me.KEY_STATS,id:"ttmEPS",label:"EPS (TTM)",requiresPlan:[fe],shortLabel:"EPS (TTM)",transform:Le},La={valueBuckets:Se,databaseModelName:Me.ADVANCED_STATS,id:"totalCash",label:"Total Cash",requiresPlan:[fe],shortLabel:"Cash",transform:ge},Oa={valueBuckets:Se,databaseModelName:Me.ADVANCED_STATS,id:"totalRevenue",label:"Total Revenue",requiresPlan:[fe],shortLabel:"Total Revenue",transform:ge},Da={valueBuckets:ie,databaseModelName:Me.DERIVED_SECURITY_METRICS,id:"ttmReturnOnAssets",label:"Return on Assets (TTM)",requiresPlan:[fe],shortLabel:"ROA (TTM)",transform:Oe},Ia={valueBuckets:ie,databaseModelName:Me.DERIVED_SECURITY_METRICS,id:"ttmReturnOnEquity",label:"Return on Equity (TTM)",requiresPlan:[fe],shortLabel:"ROE (TTM)",transform:Oe},Ba={valueBuckets:ve,databaseModelName:Me.QUOTE,id:"volume",label:"Volume",requiresPlan:[Re,fe],shortLabel:"Volume",transform:Be},ka={valueBuckets:me,databaseModelName:Me.KEY_STATS,id:"week52change",label:"52-week Return",requiresPlan:[Re,fe],shortLabel:"52W %",transform:Oe},Va={valueBuckets:me,databaseModelName:Me.QUOTE,id:"week52High",label:"52 Week High",requiresPlan:[Re,fe],shortLabel:"52W High",transform:Le},Ya={valueBuckets:me,databaseModelName:Me.QUOTE,id:"week52Low",label:"52 Week Low",requiresPlan:[Re,fe],shortLabel:"52W Low",transform:Le},qa={valueBuckets:ie,databaseModelName:Me.KEY_STATS,id:"year1ChangePercent",label:"1-year Return",requiresPlan:[Re,fe],shortLabel:"1Y %",transform:Oe},Ua={valueBuckets:ie,databaseModelName:Me.KEY_STATS,id:"year2ChangePercent",label:"2-year Return",requiresPlan:[Re,fe],shortLabel:"2Y %",transform:Oe},wa={valueBuckets:ie,databaseModelName:Me.KEY_STATS,id:"year5ChangePercent",label:"5-year Return",requiresPlan:[Re,fe],shortLabel:"5Y %",transform:Oe},Ka={valueBuckets:ie,databaseModelName:Me.KEY_STATS,id:"ytdChangePercent",label:"YTD Return",requiresPlan:[Re,fe],shortLabel:"YTD %",transform:Oe},Fa={valueBuckets:ie,databaseModelName:Me.DERIVED_SECURITY_METRICS,id:"YoYEPSGrowth",label:"YoY EPS Growth",requiresPlan:[fe],shortLabel:"YoY EPS Grow",transform:Oe},Ha={valueBuckets:ie,databaseModelName:Me.DERIVED_SECURITY_METRICS,id:"YoYRevenueGrowth",label:"YoY Revenue Growth",requiresPlan:[fe],shortLabel:"YoY Rev. Grow",transform:Oe},Ga=[we,Ue,ma,da,pa,He,pa],Xa={popular:[we,ma,da,pa,fa,He,Ha,Fa],EEONPerformanceScores:[je,ze,aa,la,ea,ra],performance:[Xe,ba,Sa,Ta,Ka,qa,Ua,wa,qe,Ba],profitability:[Ra,Da,Ia],value:[$e,ua,Na,va,Je,sa,Ma,ya]},Wa=p(P(Xa));var xa={__proto__:null,metricRelations:Me,averageTransform:ye,averageCurrencyTransform:ge,betaTransform:Ce,currencyTransform:Le,percentageTransform:Oe,percentageValueTransform:De,ratioTransform:Ie,volumeTransform:Be,EEONPerformanceScoreUnformatter:ke,avg10Volume:Ve,avg30Volume:Ye,beta:qe,change:Ue,changePercent:we,close:Ke,currentDebt:Fe,day14RSI:He,day30ChangePercent:Ge,day5ChangePercent:Xe,day50MovingAvg:We,day200MovingAvg:xe,debtToEquity:Qe,dividendYield:$e,earningsYield:Je,EBITDA:Ze,EEONGrowthScore:je,EEONMomentumScore:ze,EEONProfitabilityScore:ea,EEONRuleOf40Score:aa,EEONSafetyScore:ra,EEONValueScore:la,employees:ta,enterpriseValue:sa,enterpriseValueToRevenue:oa,extendedChangePercent:na,forwardPERatio:ua,grossProfit:ia,high:ca,latestPrice:ma,low:Ea,marketCap:da,month1ChangePercent:ba,month3ChangePercent:Sa,month6ChangePercent:Ta,open:ha,peRatio:pa,pegRatio:Pa,previousClose:Aa,previousVolume:_a,priceToBook:va,priceToSales:Na,profitMargin:Ra,revenue:fa,revenuePerEmployee:Ma,revenuePerShare:ya,sharesOutstanding:ga,ttmEPS:Ca,totalCash:La,totalRevenue:Oa,ttmReturnOnAssets:Da,ttmReturnOnEquity:Ia,volume:Ba,week52change:ka,week52High:Va,week52Low:Ya,year1ChangePercent:qa,year2ChangePercent:Ua,year5ChangePercent:wa,ytdChangePercent:Ka,YoYEPSGrowth:Fa,YoYRevenueGrowth:Ha,alertMetrics:Ga,getAlertMetricById:e=>Ga.find(r=>a(r.id,e))||we,screenableMetrics:Xa,screenableMetricsList:Wa,getScreenableMetricById:e=>Wa.find(r=>a(r.id,e))||we,listTypes:{EEON_SCREENERLIST:"eeonScreenerlist",EEON_WATCHLIST:"eeonWatchlist",USER_SCREENERLIST:"userScreenerlist",USER_WATCHLIST:"userWatchlist"},isEEONList:(e={})=>!T(e,["userId"]),isUserList:(e={})=>T(e,["userId"]),isListScreener:(e={})=>T(e,"criteria"),isListWatchlist:(e={})=>T(e,"holdingsCount")};const Qa={factors:[{symbol:"MTUM",label:"Momentum",shortLabel:"Momentum",type:"Factor"},{symbol:"VB",label:"Small Cap.",shortLabel:"Small Cap.",type:"Factor"},{symbol:"VIG",label:"Dividend Appreciation",shortLabel:"Div. Apprec.",type:"Factor"},{symbol:"VTV",label:"Value",shortLabel:"Value",type:"Factor"},{symbol:"VUG",label:"Large Cap Growth",shortLabel:"Large Cap. Growth",type:"Factor"},{symbol:"VYM",label:"High Dividend",shortLabel:"High Div.",type:"Factor"}],indices:[{symbol:"SPY",label:"S&P 500",shortLabel:"S&P 500",type:"Index"},{symbol:"DIA",label:"Dow Jones",shortLabel:"Dow Jones",type:"Index"},{symbol:"IWM",label:"Russell 2K",shortLabel:"Russell 2K",type:"Index"},{symbol:"IWF",label:"Russell 1K",shortLabel:"Russell 1K",type:"Index"},{symbol:"QQQ",label:"NASDAQ 100 ",shortLabel:"NASDAQ 100",type:"Index"},{symbol:"VTI",label:"Total Stock Market",shortLabel:"Total Market",type:"Index"}],sectors:[{symbol:"XLB",label:"Materials",shortLabel:"Materials",type:"Sector"},{symbol:"XLE",label:"Energy",shortLabel:"Energy",type:"Sector"},{symbol:"XLF",label:"Financials",shortLabel:"Financials",type:"Sector"},{symbol:"XLI",label:"Industrials",shortLabel:"Industrials",type:"Sector"},{symbol:"XLV",label:"Healthcare",shortLabel:"Healthcare",type:"Sector"},{symbol:"XLC",label:"Communications",shortLabel:"Comms.",type:"Sector"},{symbol:"XLY",label:"Cons. Discretionary",shortLabel:"Cons. Disc.",type:"Sector"},{symbol:"XLP",label:"Cons. Staples",shortLabel:"Cons. Staples",type:"Sector"},{symbol:"XLU",label:"Utilities",shortLabel:"Utilities",type:"Sector"},{symbol:"XLK",label:"Technology",shortLabel:"Tech",type:"Sector"},{symbol:"XLRE",label:"Real Estate",shortLabel:"Real Estate",type:"Sector"},{symbol:"GDX",label:"Gold",shortLabel:"Gold",type:"Sector"}]},$a=[...Qa.indices,...Qa.sectors,...Qa.factors];var Ja={__proto__:null,macros:Qa,macrosList:$a,getMacroBySymbol:e=>S.find($a,{symbol:e})},Za={__proto__:null,equalityPredicates:F({GREATER_THAN:null,LESS_THAN:null})},ja={__proto__:null,scoreKeys:{COMPUTED_COMPOSITE_SCORE:"computedCompositeScore",COMPUTED_GROWTH_SCORE:"computedGrowthScore",COMPUTED_MOMENTUM_SCORE:"computedMomentumScore",COMPUTED_PERFORMANCE_SCORE:"computedPerformanceScore",COMPUTED_PROFITABILITY_SCORE:"computedProfitabilityScore",COMPUTED_RISK_SCORE:"computedRiskScore",COMPUTED_VALUE_SCORE:"computedValueScore"}},za={__proto__:null,capabilities:F({LISTS:null,PEOPLE:null,SECURITIES:null,TAGS:null})},er={__proto__:null,sortOrders:F({ASC:null,DESC:null})};const ar=d(E),rr=d(l),lr=(e=[])=>{if(!v(e))throw new Error("Input is not iterable");return N(e=>v(e)&&a(e.length,2))(e)},tr=e=>R(f(e)),sr=tr("id"),or=tr("symbol"),nr=s(b,ar),ur=s(b,rr);var ir={__proto__:null,eachIsTuple:lr,extractFieldFromList:tr,extractIdsFromList:sr,extractSymbolsFromList:or,hasLength:(e=[])=>{if(!v(e)&&!isString(e))throw new Error("Input must be a number or string");return e.length>0},keymirrorLower:nr,keymirrorUpper:ur,pickWithInitialState:(a={},r=[])=>{if(!v(r)||!lr(r))throw new Error("Selector must be a list of tuples");return r.reduce((r,l)=>{const[t,s]=l;return r[t]=e(a,t,s),r},{})}};export{H as IEX,y as cache,L as environment,q as formatNumbers,G as jobs,xa as lists,Ja as macros,Za as predicates,ja as scores,za as search,er as sorting,Q as subscriptionPlans,ir as utils,Ne as valueBuckets};
//# sourceMappingURL=index.modern.js.map
