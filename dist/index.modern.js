import e from"lodash/get";import a from"lodash/fp/isEqual";import r from"lodash/toUpper";import l from"lodash/fp/toNumber";import t from"lodash/fp/pipe";import s from"lodash/fp/lt";import o from"lodash/isUndefined";import n from"lodash/isNull";import u from"lodash/isFunction";import i from"lodash/isEqual";import c from"lodash/fp/gt";import m from"lodash/fp/complement";import E from"lodash/toLower";import d from"lodash/fp/mapValues";import b from"keymirror";import S from"lodash";import h from"lodash/has";import T from"lodash/divide";import p from"lodash/flatten";import P from"lodash/values";import A from"lodash/multiply";import _ from"lodash/toString";import N from"lodash/isArray";import v from"lodash/fp/every";import g from"lodash/fp/map";import C from"lodash/fp/get";const f=e=>1e3*e;var R={__proto__:null,cachePeriodsInMS:{"1m":f(60),"2m":f(120),"3m":f(180),"4m":f(240),"5m":f(300),"15m":f(900),"1h":f(3600),"4h":f(14400),"6h":f(21600),"8h":f(28800),"12h":f(43200),"1D":f(86400),"5D":f(432e3),"10D":f(864e3),"14D":f(1209600),"1M":f(2592e3),"6M":f(15552e3)}};const M=a("enabled"),y=a("sandbox"),L=(a=process.env)=>y("sandbox",e(a,"IEX_ENVIRONMENT"),!0);var D={__proto__:null,getArenaPassword:(a=process.env)=>e(a,["ARENA_PASSWORD"]),getArenaUsername:(a=process.env)=>e(a,["ARENA_PASSWORD"]),getCloudinaryAPIKey:(a=process.env)=>e(a,["CLOUDINARY_API_KEY"]),getCloudinaryAPISecret:(a=process.env)=>e(a,["CLOUDINARY_API_SECRET"]),getCloudinaryCloudName:(a=process.env)=>e(a,["CLOUDINARY_CLOUD_NAME"]),getDatabaseHost:(a=process.env)=>e(a,["DATABASE_HOST"],"localhost"),getDatabaseName:(a=process.env)=>e(a,["DATABASE_NAME"],"test"),getDatabasePassword:(a=process.env)=>e(a,["DATABASE_PASSWORD"],"password"),getDatabasePort:(a=process.env)=>e(a,["DATABASE_PORT"],"27017"),getDatabaseUsername:(a=process.env)=>e(a,["DATABASE_USERNAME"],"user"),getEEONEnvironment:(a=process.env)=>e(a,["EEON_ENVIRONMENT"],"development"),getIEXPublishableToken:(a=process.env)=>L(a)?e(a,["IEX_SANDBOX_PUBLISHABLE_TOKEN"]):e(a,"IEX_PUBLISHABLE_TOKEN"),getIEXRESTfulBaseURL:(e=process.env)=>L(e)?"https://sandbox.iexapis.com/stable":"https://cloud.iexapis.com/stable",getIEXSecretToken:(a=process.env)=>L(a)?e(a,["IEX_SANDBOX_SECRET_TOKEN"]):e(a,["IEX_SECRET_TOKEN"]),getIEXStreamingBaseURL:(e=process.env)=>L(e)?"https://sandbox-sse.iexapis.com/stable":"https://cloud-sse.iexapis.com/stable",getIEXAPIVersion:()=>"stable",getIntercomAccessToken:(a=process.env)=>e(a,["INTERCOM_ACCESS_TOKEN"]),getRedisHost:(a=process.env)=>e(a,["REDIS_HOST"]),getRedisPassword:(a=process.env)=>e(a,["REDIS_PASSWORD"]),getRedisPort:(a=process.env)=>e(a,["REDIS_PORT"]),getSendgridAPIKey:(a=process.env)=>e(a,["SENDGRID_API_KEY"]),getStockNewsAPIToken:(a=process.env)=>e(a,["STOCK_NEWS_API_API_KEY"]),getStripeBasicPlanId:(a=process.env)=>e(a,["STRIPE_BASIC_PLAN_ID"]),getStripeInvestorPlanId:(a=process.env)=>e(a,["STRIPE_INVESTOR_PLAN_ID"]),getStripeProfessionalPlanId:(a=process.env)=>e(a,["STRIPE_PROFESSIONAL_PLAN_ID"]),getStripeSecretKey:(a=process.env)=>e(a,["STRIPE_SECRET_KEY"]),isStreamingEnabled:(a=process.env)=>M(e(a,["FEATURES_STREAMING"]))};const O=require("numbro");O.registerLanguage({abbreviations:{thousand:"K",million:"M",billion:"B",trillion:"T"},currency:{symbol:"$",position:"prefix",code:"USD"},delimiters:{thousands:",",decimal:"."},languageTag:"en-EEON",ordinal:()=>""}),O.setLanguage("en-EEON");const I=(a,r={})=>{const{currency:l,percentage:t,...s}=r;return n(a)||o(a)||!u(e(a,["toString"]))?"N/A":l?O(a).formatCurrency(s):t?O(a).format({...s,output:"percent"}):O(a).format(s)},B=e=>i(e%2,0),k=t(l,c(0)),V=t(l,s(0)),Y=m(B),q=a(0);var U={__proto__:null,formatChartNumber:e=>{const a=Math.abs(e),r=e<0?"-":"";return a<1e3?a:a<1e6?`${r}${a/1e3}K`:a<1e9?`${r}${a/1e6}M`:a<1e12?`${r}${a/1e9}B`:a<1e15?`${r}${a/1e12}T`:void 0},formatNumberNicely:I,isEven:B,isGreaterThanZero:k,isLessThanZero:V,isOdd:Y,isZero:q,prefixValueWithCurrencySymbol:e=>I(e,{currency:!0}),suffixValueWithPercentSymbol:e=>I(e,{percentage:!0}),unformatNiceNumber:(e="",{unformatter:a}={})=>{if(u(a))return a(e);const l=r(e);if(l.includes("B")){const e=l.replace("B","");return 1e9*O.unformat(e)}return O.unformat(l)}};const w=d(E),K=d(r),F=t(b,w),H=t(b,K);var G={__proto__:null,announceTimes:H({AMC:null,BTO:null,OTHER:null}),periods:F({ANNUAL:null,QUARTERLY:null}),securityTypes:F({AD:null,RE:null,CE:null,SI:null,LP:null,CS:null,ET:null,WT:null,OEF:null,CEF:null,PS:null}),timeframes:{FIVE_DAYS:"5d",FIVE_YEARS:"5y",ONE_MONTH:"1m",ONE_YEAR:"1y",SIX_MONTHS:"6m",THREE_MONTHS:"3m",TWO_YEARS:"2y"},timeRanges:{FIVE_DAYS:"5d",FIVE_YEARS:"5y",ONE_MONTH:"1m",ONE_YEAR:"1Y",SIX_MONTHS:"6M",THREE_MONTHS:"3M",TWO_YEARS:"2Y",YTD:"ytd"},LIVE:"live"},X={__proto__:null,queueNames:b({calculateDerivedSecurityMetrics:null,calculateEEONPerformanceScores:null,calculateMacroIndicators:null,calculateMarketInsights:null,calculateSecurityInsights:null,collectFinancialStatementsUponEarnings:null,fetchUpcomingEvents:null,primeCache:null,runPreMarketJobs:null,runDailyEEONScreenerlists:null,runDailyUserScreenerlists:null,runHourlyEEONScreenerlists:null,runHourlyUserScreenerlists:null,sendRealtimeSecurities:null,sendUserSecurityAlertMessages:null,storeRealtimeData:null,triggerUserSecurityAlerts:null})};const W=F({CANCELED:null,CHARGEABLE:null,CONSUMED:null,FAILED:null,PENDING:null}),x=F({FOREVER:null,ONCE:null,REPEATING:null}),Q=H({BASIC:null,INVESTOR:null});var $={__proto__:null,stripeCardStatuses:W,stripeCouponDurations:x,stripePlans:Q,stripeSubscriptionStatuses:F({ACTIVE:null,CANCELED:null,INCOMPLETED_EXPIRED:null,INCOMPLETE:null,PAST_DUE:null,TRIALING:null,UNPAID:null})};const J=(e,a)=>({formattedValue:I(e,{percentage:!0,mantissa:2}),label:a,value:e}),Z=(e,a)=>({formattedValue:_(A(e,100)),label:a,value:e}),j=(e,a,r={})=>({formattedValue:I(e,{average:!0,...r}),label:a,value:e}),z=(e,a,r={})=>({formattedValue:e,label:a,value:e}),ee=[z(0),z(.5,"Less volatile than market"),z(1,"Moves with Market"),z(1.5,"More volatile than market"),z(2)],ae=[J(0,"No Dividend"),J(.01),J(.02),J(.03,"Pretty good"),J(.04),J(.05),J(.06),J(.07),J(.08)],re=[J(-.5),J(-.4),J(-.3),J(-.2),J(-.1),J(-.05),J(0),J(.05),J(.1),J(.2),J(.3),J(.4),J(.5)],le=[j(0,"Profitable"),j(1e6),j(5e6),j(1e7,"Small"),j(25e6),j(5e7),j(1e8,"Midsized"),j(15e7),j(2e8),j(25e7),j(5e8),j(75e7),j(1e9,"Large"),j(5e9),j(1e10,"Mega"),j(2e10),j(5e10),j(1e10),j(25e9),j(5e10)],te=[Z(0),Z(.1),Z(.2),Z(.3),Z(.4),Z(.5),Z(.6),Z(.7),Z(.8),Z(.9),Z(1)],se=[j(100),j(1e3),j(5e3),j(1e4),j(25e3),j(5e4),j(1e5)],oe={currency:!0},ne=[j(5e7,"Micro-cap",oe),j(1e8,"Tiny-cap",oe),j(5e8,"Small-cap",oe),j(1e9,oe),j(5e9,oe),j(1e10,"Mid-cap",oe),j(5e10,oe),j(1e11,oe),j(2e11,"Large-cap",oe),j(5e11,"Mega-cap",oe)],ue=[j(0),j(1,"Fair value"),j(2),j(3)],ie=[j(0),j(5),j(10),j(15),j(20),j(25),j(30),j(35),j(40)],ce=[J(-.3),J(-.25),J(-.2),J(-.15),J(-.1),J(-.09),J(-.08),J(-.07),J(-.06),J(-.05),J(-.04),J(-.03),J(-.02),J(-.01),J(0),J(.01),J(.02),J(.03),J(.04),J(.05),J(.06),J(.07),J(.08),J(.09),J(.1),J(.15),J(.2),J(.25),J(.3)],me={currency:!0},Ee=[j(10,me),j(15,me),j(20,me),j(25,me),j(30,me),j(40,me),j(50,me),j(75,me),j(100,me),j(150,me),j(200,me),j(250,me),j(500,me),j(750,me),j(1e3,me),j(2e3,me)],de=[j(1,"Low"),j(2),j(3),j(4),j(5,"High"),j(6),j(7),j(8),j(9),j(10)],be=[J(0),J(.1),J(.15),J(.2),J(.25),J(.3),J(.5),J(.75,"🔥")],Se={currency:!0},he=[j(5e7,"Small",Se),j(1e8,null,Se),j(25e7,null,Se),j(5e8,null,Se),j(1e9,null,Se),j(1e10,null,Se),j(25e9,null,Se),j(5e10,null,Se),j(1e11,"Mega",Se)],Te={currency:!0},pe=[j(1e5,null,Te),j(2e5,null,Te),j(3e5,null,Te),j(4e5,null,Te),j(5e5,null,Te),j(75e4,null,Te),j(1e6,null,Te)],Pe={currency:!0},Ae=[j(0,null,Pe),j(5,null,Pe),j(10,null,Pe),j(15,null,Pe),j(25,null,Pe),j(50,null,Pe),j(100,null,Pe),j(250,null,Pe),j(500,null,Pe),j(1e3,null,Pe)],_e=[j(0),j(10),j(20),j(30),j(40),j(50),j(60),j(70),j(80),j(90),j(100)],Ne=[j(0),j(5),j(10),j(15),j(20),j(25),j(30),j(35),j(40),j(45),j(50)],ve=[j(1e5),j(5e5),j(1e6),j(5e6),j(1e7)];var ge={__proto__:null,createPercentageValueBucket:J,createEEONPerformanceScoreValueBucket:Z,createNumericValueBucket:j,createIdentityValueBucket:z,betaValueBuckets:ee,dividendYieldValueBuckets:ae,earningsYieldValueBuckets:re,EBITDAValueBuckets:le,EEONPerformanceScoresValueBuckets:te,employeesValueBuckets:se,marketCapValueBuckets:ne,pegRatioValueBuckets:ue,peRatioValueBuckets:ie,percentageValueBuckets:ce,priceValueBuckets:Ee,priceToBookValueBuckets:de,profitMarginValueBuckets:be,revenueValueBuckets:he,revenuePerEmployeeValueBuckets:pe,revenuePerShareValueBuckets:Ae,RSIValueBuckets:_e,ttmEPSValueBuckets:Ne,volumeValueBuckets:ve};const{BASIC:Ce,INVESTOR:fe}=Q,Re={ADVANCED_STATS:"AdvancedStats",DERIVED_SECURITY_METRICS:"DerivedSecurityMetric",EEON_PERFORMANCE_SCORES:"EEONPerformanceScore",KEY_STATS:"KeyStats",QUOTE:"Quote",TECHNICAL_INDICATORS:"TechnicalIndicator"},Me=(e=0)=>I(e,{average:!0}),ye=(e=0)=>I(e,{average:!0,currency:!0,mantissa:1}),Le=(e=0)=>I(e,{mantissa:2}),De=(e=0)=>I(e,{currency:!0,mantissa:2}),Oe=(e=0)=>I(e,{mantissa:2,percentage:!0}),Ie=(e=0)=>{const a=A(e,100);return I(a,{mantissa:0})},Be=(e=0)=>I(e,{mantissa:2}),ke=(e=0)=>I(e,{average:!0,totalLength:4}),Ve=t(l,e=>T(e,100)),Ye={valueBuckets:ve,databaseModelName:Re.KEY_STATS,id:"avg10Volume",label:"10 Day Average Volume",requiresPlan:[Ce,fe],shortLabel:"10D Avg. Volume",transform:ke},qe={valueBuckets:ve,databaseModelName:Re.KEY_STATS,id:"avg30Volume",label:"30 Day Average Volume",requiresPlan:[Ce,fe],shortLabel:"30D Avg. Volume",transform:ke},Ue={valueBuckets:ee,databaseModelName:Re.KEY_STATS,id:"beta",label:"Beta",requiresPlan:[Ce,fe],shortLabel:"Beta",transform:Le},we={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"change",label:"Change",requiresPlan:[Ce,fe],shortLabel:"Change",transform:De},Ke={valueBuckets:ce,databaseModelName:Re.QUOTE,id:"changePercent",label:"Percent Change",requiresPlan:[Ce,fe],shortLabel:"% Change",transform:Oe},Fe={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"close",label:"Close",requiresPlan:[Ce,fe],shortLabel:"Close",transform:De},He={valueBuckets:ne,databaseModelName:Re.ADVANCED_STATS,id:"currentDebt",label:"Current Debt",requiresPlan:[fe],shortLabel:"Current Debt",transform:ye},Ge={valueBuckets:_e,databaseModelName:Re.TECHNICAL_INDICATORS,id:"day14RSI",label:"14 Day RSI",requiresPlan:[fe],shortLabel:"RSI",transform:Me},Xe={valueBuckets:ce,databaseModelName:Re.KEY_STATS,id:"day30ChangePercent",label:"30 Day Percent Change",requiresPlan:[Ce,fe],shortLabel:"30D % Change",transform:Oe},We={valueBuckets:ce,databaseModelName:Re.KEY_STATS,id:"day5ChangePercent",label:"5 Day Percent Change",requiresPlan:[Ce,fe],shortLabel:"5D % Change",transform:Oe},xe={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"day50MovingAvg",label:"50 Day Moving Average",requiresPlan:[Ce,fe],shortLabel:"50D Moving Avg.",transform:De},Qe={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"day200MovingAvg",label:"200 Day Moving Average",requiresPlan:[Ce,fe],shortLabel:"200D Moving Avg.",transform:De},$e={valueBuckets:ie,databaseModelName:Re.ADVANCED_STATS,id:"debtToEquity",label:"Debt to Equity",requiresPlan:[fe],shortLabel:"Debt/Equity",transform:Be},Je={valueBuckets:ae,databaseModelName:Re.KEY_STATS,id:"dividendYield",label:"Dividend Yield",requiresPlan:[fe],shortLabel:"Div. Yield",transform:Oe},Ze={valueBuckets:re,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"earningsYield",label:"Earnings Yield",requiresPlan:[fe],shortLabel:"Earnings Yield",transform:Oe},je={valueBuckets:le,databaseModelName:Re.ADVANCED_STATS,id:"EBITDA",label:"EBITDA",requiresPlan:[fe],shortLabel:"EBITDA",transform:ye},ze={valueBuckets:te,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"growthScore",label:"EEON Growth Score",requiresPlan:[fe],shortLabel:"Growth Score",transform:Ie,unformatter:Ve},ea={valueBuckets:te,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"momentumScore",label:"EEON Momentum Score",requiresPlan:[fe],shortLabel:"Momentum Score",transform:Ie,unformatter:Ve},aa={valueBuckets:te,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"profitabilityScore",label:"EEON Profitability Score",requiresPlan:[fe],shortLabel:"Profitability Score",transform:Ie,unformatter:Ve},ra={valueBuckets:te,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"ruleOf40Score",label:"EEON Scalability Score",requiresPlan:[fe],shortLabel:"Scalability Score",transform:Ie,unformatter:Ve},la={valueBuckets:te,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"safetyScore",label:"EEON Safety Score",requiresPlan:[fe],shortLabel:"Safety Score",transform:Ie,unformatter:Ve},ta={valueBuckets:te,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"valueScore",label:"EEON Value Score",requiresPlan:[fe],shortLabel:"Value Score",transform:Ie,unformatter:Ve},sa={valueBuckets:se,databaseModelName:Re.KEY_STATS,id:"employees",label:"Employees",requiresPlan:[Ce,fe],shortLabel:"Employees",transform:Me},oa={valueBuckets:le,databaseModelName:Re.ADVANCED_STATS,id:"enterpriseValue",label:"Enterprise Value",requiresPlan:[fe],shortLabel:"Enterprise Value",transform:ye},na={valueBuckets:de,databaseModelName:Re.ADVANCED_STATS,id:"enterpriseValueToRevenue",label:"Enterprise Value to Revenue",requiresPlan:[fe],shortLabel:"Ent. Value to Rev.",transform:Be},ua={valueBuckets:ce,databaseModelName:Re.QUOTE,id:"extendedChangePercet",label:"After Hours Percent Change",requiresPlan:[Ce,fe],shortLabel:"After Hours % Percent",transform:Oe},ia={valueBuckets:ie,databaseModelName:Re.ADVANCED_STATS,id:"forwardPERatio",label:"Forward PE Ratio",requiresPlan:[fe],shortLabel:"For. PE Ratio",transform:Be},ca={valueBuckets:he,databaseModelName:Re.ADVANCED_STATS,id:"grossProfit",label:"Gross Profit",requiresPlan:[fe],shortLabel:"Gross Profit",transform:ye},ma={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"high",label:"High",requiresPlan:[Ce,fe],shortLabel:"High",transform:De},Ea={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"latestPrice",label:"Price",requiresPlan:[Ce,fe],shortLabel:"Price",transform:De},da={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"low",label:"Low",requiresPlan:[Ce,fe],shortLabel:"Low",transform:De},ba={valueBuckets:ne,databaseModelName:Re.QUOTE,id:"marketCap",label:"Market Cap.",requiresPlan:[Ce,fe],shortLabel:"Market Cap.",transform:ye},Sa={valueBuckets:ce,databaseModelName:Re.KEY_STATS,id:"month1ChangePercent",label:"1M Percent Change",requiresPlan:[Ce,fe],shortLabel:"1M % Change",transform:Oe},ha={valueBuckets:ce,databaseModelName:Re.KEY_STATS,id:"month3ChangePercent",label:"3M Percent Change",requiresPlan:[Ce,fe],shortLabel:"3M % Change",transform:Oe},Ta={valueBuckets:ce,databaseModelName:Re.KEY_STATS,id:"month6ChangePercent",label:"6M Percent Change",requiresPlan:[Ce,fe],shortLabel:"6M % Change",transform:Oe},pa={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"open",label:"Open",requiresPlan:[Ce,fe],shortLabel:"Open",transform:De},Pa={valueBuckets:ie,databaseModelName:Re.QUOTE,id:"peRatio",label:"PE Ratio",requiresPlan:[Ce,fe],shortLabel:"PE Ratio",transform:Be},Aa={valueBuckets:ue,databaseModelName:Re.ADVANCED_STATS,id:"pegRatio",label:"PEG Ratio",requiresPlan:[fe],shortLabel:"PEG Ratio",transform:Be},_a={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"previousClose",label:"Previous Close",requiresPlan:[Ce,fe],shortLabel:"Prev. Close",transform:De},Na={valueBuckets:de,databaseModelName:Re.ADVANCED_STATS,id:"priceToBook",label:"Price to Book",requiresPlan:[fe],shortLabel:"P/B",transform:Be},va={valueBuckets:de,databaseModelName:Re.ADVANCED_STATS,id:"priceToSales",label:"Price to Sales",requiresPlan:[fe],shortLabel:"P/S",transform:Be},ga={valueBuckets:be,databaseModelName:Re.ADVANCED_STATS,id:"profitMargin",label:"Profit Margin",requiresPlan:[fe],shortLabel:"Profit Margin",transform:Oe},Ca={valueBuckets:he,databaseModelName:Re.ADVANCED_STATS,id:"revenue",label:"Revenue",requiresPlan:[Ce,fe],shortLabel:"Revenue",transform:ye},fa={valueBuckets:pe,databaseModelName:Re.ADVANCED_STATS,id:"revenuePerEmployee",label:"Revenue per Employee",requiresPlan:[fe],shortLabel:"Revenue/Employee",transform:ye},Ra={valueBuckets:Ae,databaseModelName:Re.ADVANCED_STATS,id:"revenuePerShare",label:"Revenue per Share",requiresPlan:[fe],shortLabel:"Revenue/Share",transform:De},Ma={valueBuckets:he,databaseModelName:Re.KEY_STATS,id:"sharesOutstanding",label:"Shares Outstanding",requiresPlan:[Ce,fe],shortLabel:"Shares",transform:Me},ya={valueBuckets:Ne,databaseModelName:Re.KEY_STATS,id:"ttmTPS",label:"EPS (TTM)",requiresPlan:[fe],shortLabel:"EPS (TTM)",transform:De},La={valueBuckets:he,databaseModelName:Re.ADVANCED_STATS,id:"totalCash",label:"Total Cash",requiresPlan:[fe],shortLabel:"Cash",transform:ye},Da={valueBuckets:he,databaseModelName:Re.ADVANCED_STATS,id:"totalRevenue",label:"Total Revenue",requiresPlan:[fe],shortLabel:"Total Revenue",transform:ye},Oa={valueBuckets:ce,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"ttmReturnOnAssets",label:"Return on Assets (TTM)",requiresPlan:[fe],shortLabel:"ROA (TTM)",transform:Oe},Ia={valueBuckets:ce,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"ttmReturnOnEquity",label:"Return on Equity (TTM)",requiresPlan:[fe],shortLabel:"ROE (TTM)",transform:Oe},Ba={valueBuckets:ve,databaseModelName:Re.QUOTE,id:"volume",label:"Volume",requiresPlan:[Ce,fe],shortLabel:"Volume",transform:ke},ka={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"week52change",label:"52 Week % Change",requiresPlan:[Ce,fe],shortLabel:"52W % Change",transform:Oe},Va={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"week52High",label:"52 Week High",requiresPlan:[Ce,fe],shortLabel:"52W High",transform:De},Ya={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"week52Low",label:"52 Week Low",requiresPlan:[Ce,fe],shortLabel:"52W Low",transform:De},qa={valueBuckets:ce,databaseModelName:Re.KEY_STATS,id:"year1ChangePercent",label:"1Y Percent Change",requiresPlan:[Ce,fe],shortLabel:"1Y % Change",transform:Oe},Ua={valueBuckets:ce,databaseModelName:Re.KEY_STATS,id:"year2ChangePercent",label:"2Y Percent Change",requiresPlan:[Ce,fe],shortLabel:"2Y % Change",transform:Oe},wa={valueBuckets:ce,databaseModelName:Re.KEY_STATS,id:"year5ChangePercent",label:"5Y Percent Change",requiresPlan:[Ce,fe],shortLabel:"5Y % Change",transform:Oe},Ka={valueBuckets:ce,databaseModelName:Re.KEY_STATS,id:"ytdChangePercent",label:"YTD Percent Change",requiresPlan:[Ce,fe],shortLabel:"YTD % Change",transform:Oe},Fa={valueBuckets:ce,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"YoYEPSGrowth",label:"YoY EPS Growth",requiresPlan:[fe],shortLabel:"YoY EPS Grow",transform:Oe},Ha={valueBuckets:ce,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"YoYRevenueGrowth",label:"YoY Revenue Growth",requiresPlan:[fe],shortLabel:"YoY Rev. Grow",transform:Oe},Ga=[Ke,we,Ea,ba,Pa,Ge,Pa],Xa={popular:[Ke,Ea,ba,Pa,Ca,Ge,Ha,Fa],EEONPerformanceScores:[ze,ea,ra,ta,aa,la],performance:[We,Sa,ha,Ta,Ka,qa,Ua,wa,Ue,Ba],profitability:[ga,Oa,Ia],value:[Je,ia,va,Na,Ze,oa,fa,Ra]},Wa=p(P(Xa));var xa={__proto__:null,metricRelations:Re,averageTransform:Me,averageCurrencyTransform:ye,betaTransform:Le,currencyTransform:De,percentageTransform:Oe,percentageValueTransform:Ie,ratioTransform:Be,volumeTransform:ke,EEONPerformanceScoreUnformatter:Ve,avg10Volume:Ye,avg30Volume:qe,beta:Ue,change:we,changePercent:Ke,close:Fe,currentDebt:He,day14RSI:Ge,day30ChangePercent:Xe,day5ChangePercent:We,day50MovingAvg:xe,day200MovingAvg:Qe,debtToEquity:$e,dividendYield:Je,earningsYield:Ze,EBITDA:je,EEONGrowthScore:ze,EEONMomentumScore:ea,EEONProfitabilityScore:aa,EEONRuleOf40Score:ra,EEONSafetyScore:la,EEONValueScore:ta,employees:sa,enterpriseValue:oa,enterpriseValueToRevenue:na,extendedChangePercent:ua,forwardPERatio:ia,grossProfit:ca,high:ma,latestPrice:Ea,low:da,marketCap:ba,month1ChangePercent:Sa,month3ChangePercent:ha,month6ChangePercent:Ta,open:pa,peRatio:Pa,pegRatio:Aa,previousClose:_a,priceToBook:Na,priceToSales:va,profitMargin:ga,revenue:Ca,revenuePerEmployee:fa,revenuePerShare:Ra,sharesOutstanding:Ma,ttmEPS:ya,totalCash:La,totalRevenue:Da,ttmReturnOnAssets:Oa,ttmReturnOnEquity:Ia,volume:Ba,week52change:ka,week52High:Va,week52Low:Ya,year1ChangePercent:qa,year2ChangePercent:Ua,year5ChangePercent:wa,ytdChangePercent:Ka,YoYEPSGrowth:Fa,YoYRevenueGrowth:Ha,alertMetrics:Ga,getAlertMetricById:e=>Ga.find(a=>i(a.id,e))||Ke,screenableMetrics:Xa,screenableMetricsList:Wa,getScreenableMetricById:e=>Wa.find(a=>i(a.id,e))||Ke,listTypes:{EEON_SCREENERLIST:"eeonScreenerlist",EEON_WATCHLIST:"eeonWatchlist",USER_SCREENERLIST:"userScreenerlist",USER_WATCHLIST:"userWatchlist"},isEEONList:(e={})=>!h(e,["userId"]),isUserList:(e={})=>h(e,["userId"]),isListScreener:(e={})=>h(e,"criteria"),isListWatchlist:(e={})=>h(e,"holdingsCount")};const Qa={factors:[{symbol:"MTUM",label:"Momentum",shortLabel:"Momentum",type:"Factor"},{symbol:"VB",label:"Small Cap.",shortLabel:"Small Cap.",type:"Factor"},{symbol:"VIG",label:"Dividend Appreciation",shortLabel:"Div. Apprec.",type:"Factor"},{symbol:"VTV",label:"Value",shortLabel:"Value",type:"Factor"},{symbol:"VUG",label:"Large Cap Growth",shortLabel:"Large Cap. Growth",type:"Factor"},{symbol:"VYM",label:"High Dividend",shortLabel:"High Div.",type:"Factor"}],indices:[{symbol:"SPY",label:"S&P 500",shortLabel:"S&P 500",type:"Index"},{symbol:"DIA",label:"Dow Jones",shortLabel:"Dow Jones",type:"Index"},{symbol:"IWM",label:"Russell 2K",shortLabel:"Russell 2K",type:"Index"},{symbol:"IWF",label:"Russell 1K",shortLabel:"Russell 1K",type:"Index"},{symbol:"QQQ",label:"NASDAQ 100 ",shortLabel:"NASDAQ 100",type:"Index"},{symbol:"VTI",label:"Total Stock Market",shortLabel:"Total Market",type:"Index"}],sectors:[{symbol:"XLB",label:"Materials",shortLabel:"Materials",type:"Sector"},{symbol:"XLE",label:"Energy",shortLabel:"Energy",type:"Sector"},{symbol:"XLF",label:"Financials",shortLabel:"Financials",type:"Sector"},{symbol:"XLI",label:"Industrials",shortLabel:"Industrials",type:"Sector"},{symbol:"XLV",label:"Healthcare",shortLabel:"Healthcare",type:"Sector"},{symbol:"XLC",label:"Communications",shortLabel:"Comms.",type:"Sector"},{symbol:"XLY",label:"Cons. Discretionary",shortLabel:"Cons. Disc.",type:"Sector"},{symbol:"XLP",label:"Cons. Staples",shortLabel:"Cons. Staples",type:"Sector"},{symbol:"XLU",label:"Utilities",shortLabel:"Utilities",type:"Sector"},{symbol:"XLK",label:"Technology",shortLabel:"Tech",type:"Sector"},{symbol:"XLRE",label:"Real Estate",shortLabel:"Real Estate",type:"Sector"},{symbol:"GDX",label:"Gold",shortLabel:"Gold",type:"Sector"}]},$a=[...Qa.indices,...Qa.sectors,...Qa.factors];var Ja={__proto__:null,macros:Qa,macrosList:$a,getMacroBySymbol:e=>S.find($a,{symbol:e})},Za={__proto__:null,equalityPredicates:H({GREATER_THAN:null,LESS_THAN:null})},ja={__proto__:null,scoreKeys:{COMPUTED_COMPOSITE_SCORE:"computedCompositeScore",COMPUTED_GROWTH_SCORE:"computedGrowthScore",COMPUTED_MOMENTUM_SCORE:"computedMomentumScore",COMPUTED_PERFORMANCE_SCORE:"computedPerformanceScore",COMPUTED_PROFITABILITY_SCORE:"computedProfitabilityScore",COMPUTED_RISK_SCORE:"computedRiskScore",COMPUTED_VALUE_SCORE:"computedValueScore"}},za={__proto__:null,capabilities:H({LISTS:null,PEOPLE:null,SECURITIES:null,TAGS:null})},er={__proto__:null,sortOrders:H({ASC:null,DESC:null})};const ar=d(E),rr=d(r),lr=(e=[])=>{if(!N(e))throw new Error("Input is not iterable");return v(e=>N(e)&&i(e.length,2))(e)},tr=e=>g(C(e)),sr=tr("id"),or=tr("symbol"),nr=t(b,ar),ur=t(b,rr);var ir={__proto__:null,eachIsTuple:lr,extractFieldFromList:tr,extractIdsFromList:sr,extractSymbolsFromList:or,hasLength:(e=[])=>{if(!N(e)&&!isString(e))throw new Error("Input must be a number or string");return e.length>0},keymirrorLower:nr,keymirrorUpper:ur,pickWithInitialState:(a={},r=[])=>{if(!N(r)||!lr(r))throw new Error("Selector must be a list of tuples");return r.reduce((r,l)=>{const[t,s]=l;return r[t]=e(a,t,s),r},{})}};export{G as IEX,R as cache,D as environment,U as formatNumbers,X as jobs,xa as lists,Ja as macros,Za as predicates,ja as scores,za as search,er as sorting,$ as subscriptionPlans,ir as utils,ge as valueBuckets};
//# sourceMappingURL=index.modern.js.map
