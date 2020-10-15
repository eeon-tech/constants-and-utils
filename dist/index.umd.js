!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("lodash/get"),require("lodash/isEqual"),require("lodash/fp/isEqual"),require("lodash/toUpper"),require("lodash/fp/toNumber"),require("lodash/fp/pipe"),require("lodash/fp/lt"),require("lodash/isUndefined"),require("lodash/isNull"),require("lodash/isFunction"),require("lodash/fp/gt"),require("lodash/fp/complement"),require("lodash/toLower"),require("lodash/fp/mapValues"),require("keymirror"),require("lodash"),require("lodash/has"),require("lodash/divide"),require("lodash/flatten"),require("lodash/values"),require("lodash/multiply"),require("lodash/toString"),require("lodash/isArray"),require("lodash/fp/every"),require("lodash/fp/map"),require("lodash/fp/get")):"function"==typeof define&&define.amd?define(["exports","lodash/get","lodash/isEqual","lodash/fp/isEqual","lodash/toUpper","lodash/fp/toNumber","lodash/fp/pipe","lodash/fp/lt","lodash/isUndefined","lodash/isNull","lodash/isFunction","lodash/fp/gt","lodash/fp/complement","lodash/toLower","lodash/fp/mapValues","keymirror","lodash","lodash/has","lodash/divide","lodash/flatten","lodash/values","lodash/multiply","lodash/toString","lodash/isArray","lodash/fp/every","lodash/fp/map","lodash/fp/get"],a):a((e=e||self).constantsAndUtils={},e.get,e.isEqual,e.fIsEqual,e.toUpper,e.toNumber,e.pipe,e.lt,e.isUndefined,e.isNull,e.isFunction,e.gt,e.complement,e.toLower,e.mapValues,e.keymirror,e.lodash,e.has,e.divide,e.flatten,e.values,e.multiply,e.toString,e.isArray,e.every,e.map,e.fget)}(this,function(e,a,r,t,l,o,n,s,u,i,c,d,E,b,m,S,p,f,h,v,T,P,y,A,O,N,_){a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c,d=d&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d,E=E&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E,b=b&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b,m=m&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m,S=S&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S,p=p&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p,f=f&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f,h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h,v=v&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v,T=T&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T,P=P&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P,y=y&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y,A=A&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A,O=O&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O,N=N&&Object.prototype.hasOwnProperty.call(N,"default")?N.default:N,_=_&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_;var R=function(e){return 1e3*e},g={__proto__:null,cachePeriodsInMS:{"1m":R(60),"2m":R(120),"3m":R(180),"4m":R(240),"5m":R(300),"15m":R(900),"1h":R(3600),"4h":R(14400),"6h":R(21600),"8h":R(28800),"12h":R(43200),"1D":R(86400),"5D":R(432e3),"10D":R(864e3),"14D":R(1209600),"1M":R(2592e3),"6M":R(15552e3)}},M=t("enabled"),C=function(e){return void 0===e&&(e=process.env),r("sandbox",a(e,"IEX_ENVIRONMENT"),!1)},L={__proto__:null,isIEXSandbox:C,getArenaPassword:function(e){return void 0===e&&(e=process.env),a(e,["ARENA_PASSWORD"])},getArenaUsername:function(e){return void 0===e&&(e=process.env),a(e,["ARENA_PASSWORD"])},getCloudinaryAPIKey:function(e){return void 0===e&&(e=process.env),a(e,["CLOUDINARY_API_KEY"])},getCloudinaryAPISecret:function(e){return void 0===e&&(e=process.env),a(e,["CLOUDINARY_API_SECRET"])},getCloudinaryCloudName:function(e){return void 0===e&&(e=process.env),a(e,["CLOUDINARY_CLOUD_NAME"])},getDatabaseHost:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_HOST"],"localhost")},getDatabaseName:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_NAME"],"test")},getDatabasePassword:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_PASSWORD"],"password")},getDatabasePort:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_PORT"],"27017")},getDatabaseUsername:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_USERNAME"],"user")},getEEONEnvironment:function(e){return void 0===e&&(e=process.env),a(e,["EEON_ENVIRONMENT"],"development")},getIEXPublishableToken:function(e){return void 0===e&&(e=process.env),C(e)?a(e,["IEX_SANDBOX_PUBLISHABLE_TOKEN"]):a(e,"IEX_PUBLISHABLE_TOKEN")},getIEXRESTfulBaseURL:function(e){return void 0===e&&(e=process.env),C(e)?"https://sandbox.iexapis.com/stable":"https://cloud.iexapis.com/stable"},getIEXSecretToken:function(e){return void 0===e&&(e=process.env),C(e)?a(e,["IEX_SANDBOX_SECRET_TOKEN"]):a(e,["IEX_SECRET_TOKEN"])},getIEXStreamingBaseURL:function(e){return void 0===e&&(e=process.env),C(e)?"https://sandbox-sse.iexapis.com/stable":"https://cloud-sse.iexapis.com/stable"},getIEXAPIVersion:function(){return"stable"},getIntercomAccessToken:function(e){return void 0===e&&(e=process.env),a(e,["INTERCOM_ACCESS_TOKEN"])},getRedisHost:function(e){return void 0===e&&(e=process.env),a(e,["REDIS_HOST"])},getRedisPassword:function(e){return void 0===e&&(e=process.env),a(e,["REDIS_PASSWORD"])},getRedisPort:function(e){return void 0===e&&(e=process.env),a(e,["REDIS_PORT"])},getSendgridAPIKey:function(e){return void 0===e&&(e=process.env),a(e,["SENDGRID_API_KEY"])},getStockNewsAPIToken:function(e){return void 0===e&&(e=process.env),a(e,["STOCK_NEWS_API_API_KEY"])},getStripeBasicPlanId:function(e){return void 0===e&&(e=process.env),a(e,["STRIPE_BASIC_PLAN_ID"])},getStripeInvestorPlanId:function(e){return void 0===e&&(e=process.env),a(e,["STRIPE_INVESTOR_PLAN_ID"])},getStripeProfessionalPlanId:function(e){return void 0===e&&(e=process.env),a(e,["STRIPE_PROFESSIONAL_PLAN_ID"])},getStripeSecretKey:function(e){return void 0===e&&(e=process.env),a(e,["STRIPE_SECRET_KEY"])},isStreamingEnabled:function(e){return void 0===e&&(e=process.env),M(a(e,["FEATURES_STREAMING"]))}};function D(){return(D=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var I=require("numbro");I.registerLanguage({abbreviations:{thousand:"K",million:"M",billion:"B",trillion:"T"},currency:{symbol:"$",position:"prefix",code:"USD"},delimiters:{thousands:",",decimal:"."},languageTag:"en-EEON",ordinal:function(){return""}}),I.setLanguage("en-EEON");var B=function(e,r){void 0===r&&(r={});var t=r.currency,l=r.percentage,o=function(e,a){if(null==e)return{};var r,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)a.indexOf(r=o[t])>=0||(l[r]=e[r]);return l}(r,["currency","percentage"]);return i(e)||u(e)||!c(a(e,["toString"]))?"N/A":t?I(e).formatCurrency(o):l?I(e).format(D({},o,{output:"percent"})):I(e).format(o)},k=function(e){return r(e%2,0)},V=n(o,d(0)),q=n(o,s(0)),Y=E(k),w=t(0),U={__proto__:null,formatChartNumber:function(e){var a=Math.abs(e),r=e<0?"-":"";return a<1e3?a:a<1e6?""+r+a/1e3+"K":a<1e9?""+r+a/1e6+"M":a<1e12?""+r+a/1e9+"B":a<1e15?""+r+a/1e12+"T":void 0},formatNumberNicely:B,isEven:k,isGreaterThanZero:V,isLessThanZero:q,isOdd:Y,isZero:w,prefixValueWithCurrencySymbol:function(e){return B(e,{currency:!0})},suffixValueWithPercentSymbol:function(e){return B(e,{percentage:!0})},unformatNiceNumber:function(e,a){void 0===e&&(e="");var r=(void 0===a?{}:a).unformatter;if(c(r))return r(e);var t=l(e);if(t.includes("B")){var o=t.replace("B","");return 1e9*I.unformat(o)}return I.unformat(t)}},K=m(b),F=m(l),H=n(S,K),G=n(S,F),j={__proto__:null,announceTimes:G({AMC:null,BTO:null,OTHER:null}),periods:H({ANNUAL:null,QUARTERLY:null}),securityTypes:H({AD:null,RE:null,CE:null,SI:null,LP:null,CS:null,ET:null,WT:null,OEF:null,CEF:null,PS:null}),timeframes:{FIVE_DAYS:"5d",FIVE_YEARS:"5y",ONE_MONTH:"1m",ONE_YEAR:"1y",SIX_MONTHS:"6m",THREE_MONTHS:"3m",TWO_YEARS:"2y"},timeRanges:{FIVE_DAYS:"5d",FIVE_YEARS:"5y",ONE_MONTH:"1m",ONE_YEAR:"1Y",SIX_MONTHS:"6M",THREE_MONTHS:"3M",TWO_YEARS:"2Y",YTD:"ytd"},LIVE:"live"},X={__proto__:null,queueNames:S({calculateDerivedSecurityMetrics:null,calculateEEONPerformanceScores:null,calculateMacroIndicators:null,calculateMarketInsights:null,calculateSecurityInsights:null,collectFinancialStatementsUponEarnings:null,fetchUpcomingEvents:null,primeCache:null,runPreMarketJobs:null,runDailyEEONScreenerlists:null,runDailyUserScreenerlists:null,runHourlyEEONScreenerlists:null,runHourlyUserScreenerlists:null,sendRealtimeSecurities:null,sendUserSecurityAlertMessages:null,storeRealtimeData:null,triggerUserSecurityAlerts:null})},x=H({CANCELED:null,CHARGEABLE:null,CONSUMED:null,FAILED:null,PENDING:null}),W=H({FOREVER:null,ONCE:null,REPEATING:null}),Q=G({BASIC:null,INVESTOR:null}),J={__proto__:null,stripeCardStatuses:x,stripeCouponDurations:W,stripePlans:Q,stripeSubscriptionStatuses:H({ACTIVE:null,CANCELED:null,INCOMPLETED_EXPIRED:null,INCOMPLETE:null,PAST_DUE:null,TRIALING:null,UNPAID:null})},Z=function(e,a){return{formattedValue:B(e,{percentage:!0,mantissa:2}),label:a,value:e}},z=function(e,a){return{formattedValue:y(P(e,100)),label:a,value:e}},$=function(e,a,r){return void 0===r&&(r={}),{formattedValue:B(e,D({average:!0},r)),label:a,value:e}},ee=function(e,a,r){return{formattedValue:e,label:a,value:e}},ae=[ee(0),ee(.5,"Less volatile than market"),ee(1,"Moves with Market"),ee(1.5,"More volatile than market"),ee(2)],re=[Z(0,"No Dividend"),Z(.01),Z(.02),Z(.03,"Pretty good"),Z(.04),Z(.05),Z(.06),Z(.07),Z(.08)],te=[Z(-.5),Z(-.4),Z(-.3),Z(-.2),Z(-.1),Z(-.05),Z(0),Z(.05),Z(.1),Z(.2),Z(.3),Z(.4),Z(.5)],le=[$(0,"Profitable"),$(1e6),$(5e6),$(1e7,"Small"),$(25e6),$(5e7),$(1e8,"Midsized"),$(15e7),$(2e8),$(25e7),$(5e8),$(75e7),$(1e9,"Large"),$(5e9),$(1e10,"Mega"),$(2e10),$(5e10),$(1e10),$(25e9),$(5e10)],oe=[z(0),z(.1),z(.2),z(.3),z(.4),z(.5),z(.6),z(.7),z(.8),z(.9),z(1)],ne=[$(100),$(1e3),$(5e3),$(1e4),$(25e3),$(5e4),$(1e5)],se={currency:!0},ue=[$(5e7,"Micro-cap",se),$(1e8,"Tiny-cap",se),$(5e8,"Small-cap",se),$(1e9,se),$(5e9,se),$(1e10,"Mid-cap",se),$(5e10,se),$(1e11,se),$(2e11,"Large-cap",se),$(5e11,"Mega-cap",se)],ie=[$(0),$(1,"Fair value"),$(2),$(3)],ce=[$(0),$(5),$(10),$(15),$(20),$(25),$(30),$(35),$(40)],de=[Z(-.3),Z(-.25),Z(-.2),Z(-.15),Z(-.1),Z(-.09),Z(-.08),Z(-.07),Z(-.06),Z(-.05),Z(-.04),Z(-.03),Z(-.02),Z(-.01),Z(0),Z(.01),Z(.02),Z(.03),Z(.04),Z(.05),Z(.06),Z(.07),Z(.08),Z(.09),Z(.1),Z(.15),Z(.2),Z(.25),Z(.3)],Ee={currency:!0},be=[$(10,Ee),$(15,Ee),$(20,Ee),$(25,Ee),$(30,Ee),$(40,Ee),$(50,Ee),$(75,Ee),$(100,Ee),$(150,Ee),$(200,Ee),$(250,Ee),$(500,Ee),$(750,Ee),$(1e3,Ee),$(2e3,Ee)],me=[$(1,"Low"),$(2),$(3),$(4),$(5,"High"),$(6),$(7),$(8),$(9),$(10)],Se=[Z(0),Z(.1),Z(.15),Z(.2),Z(.25),Z(.3),Z(.5),Z(.75,"🔥")],pe={currency:!0},fe=[$(5e7,"Small",pe),$(1e8,null,pe),$(25e7,null,pe),$(5e8,null,pe),$(1e9,null,pe),$(1e10,null,pe),$(25e9,null,pe),$(5e10,null,pe),$(1e11,"Mega",pe)],he={currency:!0},ve=[$(1e5,null,he),$(2e5,null,he),$(3e5,null,he),$(4e5,null,he),$(5e5,null,he),$(75e4,null,he),$(1e6,null,he)],Te={currency:!0},Pe=[$(0,null,Te),$(5,null,Te),$(10,null,Te),$(15,null,Te),$(25,null,Te),$(50,null,Te),$(100,null,Te),$(250,null,Te),$(500,null,Te),$(1e3,null,Te)],ye=[$(0),$(10),$(20),$(30),$(40),$(50),$(60),$(70),$(80),$(90),$(100)],Ae=[$(0),$(5),$(10),$(15),$(20),$(25),$(30),$(35),$(40),$(45),$(50)],Oe=[$(1e5),$(5e5),$(1e6),$(5e6),$(1e7)],Ne={__proto__:null,createPercentageValueBucket:Z,createEEONPerformanceScoreValueBucket:z,createNumericValueBucket:$,createIdentityValueBucket:ee,betaValueBuckets:ae,dividendYieldValueBuckets:re,earningsYieldValueBuckets:te,EBITDAValueBuckets:le,EEONPerformanceScoresValueBuckets:oe,employeesValueBuckets:ne,marketCapValueBuckets:ue,pegRatioValueBuckets:ie,peRatioValueBuckets:ce,percentageValueBuckets:de,priceValueBuckets:be,priceToBookValueBuckets:me,profitMarginValueBuckets:Se,revenueValueBuckets:fe,revenuePerEmployeeValueBuckets:ve,revenuePerShareValueBuckets:Pe,RSIValueBuckets:ye,ttmEPSValueBuckets:Ae,volumeValueBuckets:Oe},_e=Q.BASIC,Re=Q.INVESTOR,ge={ADVANCED_STATS:"AdvancedStats",DERIVED_SECURITY_METRICS:"DerivedSecurityMetric",EEON_PERFORMANCE_SCORES:"EEONPerformanceScore",KEY_STATS:"KeyStats",QUOTE:"Quote",TECHNICAL_INDICATORS:"TechnicalIndicator"},Me=function(e){return void 0===e&&(e=0),B(e,{average:!0})},Ce=function(e){return void 0===e&&(e=0),B(e,{average:!0,currency:!0,mantissa:1})},Le=function(e){return void 0===e&&(e=0),B(e,{mantissa:2})},De=function(e){return void 0===e&&(e=0),B(e,{currency:!0,mantissa:2})},Ie=function(e){return void 0===e&&(e=0),B(e,{mantissa:2,percentage:!0})},Be=function(e){void 0===e&&(e=0);var a=P(e,100);return B(a,{mantissa:0})},ke=function(e){return void 0===e&&(e=0),B(e,{mantissa:2})},Ve=function(e){return void 0===e&&(e=0),B(e,{average:!0,totalLength:4})},qe=n(o,function(e){return h(e,100)}),Ye={valueBuckets:Oe,databaseModelName:ge.KEY_STATS,id:"avg10Volume",label:"10 Day Average Volume",requiresPlan:[_e,Re],shortLabel:"10D Avg. Volume",transform:Ve},we={valueBuckets:Oe,databaseModelName:ge.KEY_STATS,id:"avg30Volume",label:"30 Day Average Volume",requiresPlan:[_e,Re],shortLabel:"30D Avg. Volume",transform:Ve},Ue={valueBuckets:ae,databaseModelName:ge.KEY_STATS,id:"beta",label:"Beta",requiresPlan:[_e,Re],shortLabel:"Beta",transform:Le},Ke={valueBuckets:be,databaseModelName:ge.QUOTE,id:"change",label:"Change",requiresPlan:[_e,Re],shortLabel:"Change",transform:De},Fe={valueBuckets:de,databaseModelName:ge.QUOTE,id:"changePercent",label:"1-day Return",requiresPlan:[_e,Re],shortLabel:"1D %",transform:Ie},He={valueBuckets:be,databaseModelName:ge.QUOTE,id:"close",label:"Close",requiresPlan:[_e,Re],shortLabel:"Close",transform:De},Ge={valueBuckets:ue,databaseModelName:ge.ADVANCED_STATS,id:"currentDebt",label:"Current Debt",requiresPlan:[Re],shortLabel:"Current Debt",transform:Ce},je={valueBuckets:ye,databaseModelName:ge.TECHNICAL_INDICATORS,id:"day14RSI",label:"14 Day RSI",requiresPlan:[Re],shortLabel:"RSI",transform:Me},Xe={valueBuckets:de,databaseModelName:ge.KEY_STATS,id:"day30ChangePercent",label:"30-day Return",requiresPlan:[_e,Re],shortLabel:"30D %",transform:Ie},xe={valueBuckets:de,databaseModelName:ge.KEY_STATS,id:"day5ChangePercent",label:"5-day Return",requiresPlan:[_e,Re],shortLabel:"5D %",transform:Ie},We={valueBuckets:be,databaseModelName:ge.KEY_STATS,id:"day50MovingAvg",label:"50 Day Moving Average",requiresPlan:[_e,Re],shortLabel:"50D Moving Avg.",transform:De},Qe={valueBuckets:be,databaseModelName:ge.KEY_STATS,id:"day200MovingAvg",label:"200 Day Moving Average",requiresPlan:[_e,Re],shortLabel:"200D Moving Avg.",transform:De},Je={valueBuckets:ce,databaseModelName:ge.ADVANCED_STATS,id:"debtToEquity",label:"Debt to Equity",requiresPlan:[Re],shortLabel:"Debt / Equity",transform:ke},Ze={valueBuckets:re,databaseModelName:ge.KEY_STATS,id:"dividendYield",label:"Dividend Yield",requiresPlan:[Re],shortLabel:"Div. Yield",transform:Ie},ze={valueBuckets:te,databaseModelName:ge.DERIVED_SECURITY_METRICS,id:"earningsYield",label:"Earnings Yield",requiresPlan:[Re],shortLabel:"Earnings Yield",transform:Ie},$e={valueBuckets:le,databaseModelName:ge.ADVANCED_STATS,id:"EBITDA",label:"EBITDA",requiresPlan:[Re],shortLabel:"EBITDA",transform:Ce},ea={valueBuckets:oe,databaseModelName:ge.EEON_PERFORMANCE_SCORES,id:"growthScore",label:"EEON Growth Score",requiresPlan:[Re],shortLabel:"Growth Score",transform:Be,unformatter:qe},aa={valueBuckets:oe,databaseModelName:ge.EEON_PERFORMANCE_SCORES,id:"momentumScore",label:"EEON Momentum Score",requiresPlan:[Re],shortLabel:"Momentum Score",transform:Be,unformatter:qe},ra={valueBuckets:oe,databaseModelName:ge.EEON_PERFORMANCE_SCORES,id:"profitabilityScore",label:"EEON Profitability Score",requiresPlan:[Re],shortLabel:"Profitability Score",transform:Be,unformatter:qe},ta={valueBuckets:oe,databaseModelName:ge.EEON_PERFORMANCE_SCORES,id:"ruleOf40Score",label:"EEON Scalability Score",requiresPlan:[Re],shortLabel:"Scalability Score",transform:Be,unformatter:qe},la={valueBuckets:oe,databaseModelName:ge.EEON_PERFORMANCE_SCORES,id:"safetyScore",label:"EEON Safety Score",requiresPlan:[Re],shortLabel:"Safety Score",transform:Be,unformatter:qe},oa={valueBuckets:oe,databaseModelName:ge.EEON_PERFORMANCE_SCORES,id:"valueScore",label:"EEON Value Score",requiresPlan:[Re],shortLabel:"Value Score",transform:Be,unformatter:qe},na={valueBuckets:ne,databaseModelName:ge.KEY_STATS,id:"employees",label:"Employees",requiresPlan:[_e,Re],shortLabel:"Employees",transform:Me},sa={valueBuckets:le,databaseModelName:ge.ADVANCED_STATS,id:"enterpriseValue",label:"Enterprise Value",requiresPlan:[Re],shortLabel:"Ent. Value",transform:Ce},ua={valueBuckets:me,databaseModelName:ge.ADVANCED_STATS,id:"enterpriseValueToRevenue",label:"Enterprise Value to Revenue",requiresPlan:[Re],shortLabel:"EV/Rev",transform:ke},ia={valueBuckets:de,databaseModelName:ge.QUOTE,id:"extendedChangePercet",label:"After-hours Return",requiresPlan:[_e,Re],shortLabel:"After-hours %",transform:Ie},ca={valueBuckets:ce,databaseModelName:ge.ADVANCED_STATS,id:"forwardPERatio",label:"Forward PE Ratio",requiresPlan:[Re],shortLabel:"For. PE Ratio",transform:ke},da={valueBuckets:fe,databaseModelName:ge.ADVANCED_STATS,id:"grossProfit",label:"Gross Profit",requiresPlan:[Re],shortLabel:"Gross Profit",transform:Ce},Ea={valueBuckets:be,databaseModelName:ge.QUOTE,id:"high",label:"High",requiresPlan:[_e,Re],shortLabel:"High",transform:De},ba={valueBuckets:be,databaseModelName:ge.QUOTE,id:"latestPrice",label:"Price",requiresPlan:[_e,Re],shortLabel:"Price",transform:De},ma={valueBuckets:be,databaseModelName:ge.QUOTE,id:"low",label:"Low",requiresPlan:[_e,Re],shortLabel:"Low",transform:De},Sa={valueBuckets:ue,databaseModelName:ge.QUOTE,id:"marketCap",label:"Market Cap.",requiresPlan:[_e,Re],shortLabel:"Market Cap.",transform:Ce},pa={valueBuckets:de,databaseModelName:ge.KEY_STATS,id:"month1ChangePercent",label:"1-month Return",requiresPlan:[_e,Re],shortLabel:"1M %",transform:Ie},fa={valueBuckets:de,databaseModelName:ge.KEY_STATS,id:"month3ChangePercent",label:"3-month Return",requiresPlan:[_e,Re],shortLabel:"3M %",transform:Ie},ha={valueBuckets:de,databaseModelName:ge.KEY_STATS,id:"month6ChangePercent",label:"6-month Return",requiresPlan:[_e,Re],shortLabel:"6M %",transform:Ie},va={valueBuckets:be,databaseModelName:ge.QUOTE,id:"open",label:"Open",requiresPlan:[_e,Re],shortLabel:"Open",transform:De},Ta={valueBuckets:ce,databaseModelName:ge.QUOTE,id:"peRatio",label:"PE Ratio",requiresPlan:[_e,Re],shortLabel:"PE Ratio",transform:ke},Pa={valueBuckets:ie,databaseModelName:ge.ADVANCED_STATS,id:"pegRatio",label:"PEG Ratio",requiresPlan:[Re],shortLabel:"PEG Ratio",transform:ke},ya={valueBuckets:be,databaseModelName:ge.QUOTE,id:"previousClose",label:"Previous Close",requiresPlan:[_e,Re],shortLabel:"Prev. Close",transform:De},Aa={valueBuckets:Oe,databaseModelName:ge.QUOTE,id:"previousVolume",label:"Previous Volume",requiresPlan:[_e,Re],shortLabel:"Prev. Volume",transform:Ve},Oa={valueBuckets:me,databaseModelName:ge.ADVANCED_STATS,id:"priceToBook",label:"Price to Book",requiresPlan:[Re],shortLabel:"P/B",transform:ke},Na={valueBuckets:me,databaseModelName:ge.ADVANCED_STATS,id:"priceToSales",label:"Price to Sales",requiresPlan:[Re],shortLabel:"P/S",transform:ke},_a={valueBuckets:Se,databaseModelName:ge.ADVANCED_STATS,id:"profitMargin",label:"Profit Margin",requiresPlan:[Re],shortLabel:"Profit Margin",transform:Ie},Ra={valueBuckets:fe,databaseModelName:ge.ADVANCED_STATS,id:"revenue",label:"Revenue",requiresPlan:[_e,Re],shortLabel:"Revenue",transform:Ce},ga={valueBuckets:ve,databaseModelName:ge.ADVANCED_STATS,id:"revenuePerEmployee",label:"Revenue per Employee",requiresPlan:[Re],shortLabel:"Revenue / Employee",transform:Ce},Ma={valueBuckets:Pe,databaseModelName:ge.ADVANCED_STATS,id:"revenuePerShare",label:"Revenue per Share",requiresPlan:[Re],shortLabel:"Revenue / Share",transform:De},Ca={valueBuckets:fe,databaseModelName:ge.KEY_STATS,id:"sharesOutstanding",label:"Shares Outstanding",requiresPlan:[_e,Re],shortLabel:"Shares",transform:Me},La={valueBuckets:Ae,databaseModelName:ge.KEY_STATS,id:"ttmEPS",label:"EPS (TTM)",requiresPlan:[Re],shortLabel:"EPS (TTM)",transform:De},Da={valueBuckets:fe,databaseModelName:ge.ADVANCED_STATS,id:"totalCash",label:"Total Cash",requiresPlan:[Re],shortLabel:"Cash",transform:Ce},Ia={valueBuckets:fe,databaseModelName:ge.ADVANCED_STATS,id:"totalRevenue",label:"Total Revenue",requiresPlan:[Re],shortLabel:"Total Revenue",transform:Ce},Ba={valueBuckets:de,databaseModelName:ge.DERIVED_SECURITY_METRICS,id:"ttmReturnOnAssets",label:"Return on Assets (TTM)",requiresPlan:[Re],shortLabel:"ROA (TTM)",transform:Ie},ka={valueBuckets:de,databaseModelName:ge.DERIVED_SECURITY_METRICS,id:"ttmReturnOnEquity",label:"Return on Equity (TTM)",requiresPlan:[Re],shortLabel:"ROE (TTM)",transform:Ie},Va={valueBuckets:Oe,databaseModelName:ge.QUOTE,id:"volume",label:"Volume",requiresPlan:[_e,Re],shortLabel:"Volume",transform:Ve},qa={valueBuckets:be,databaseModelName:ge.KEY_STATS,id:"week52change",label:"52-week Return",requiresPlan:[_e,Re],shortLabel:"52W %",transform:Ie},Ya={valueBuckets:be,databaseModelName:ge.QUOTE,id:"week52High",label:"52 Week High",requiresPlan:[_e,Re],shortLabel:"52W High",transform:De},wa={valueBuckets:be,databaseModelName:ge.QUOTE,id:"week52Low",label:"52 Week Low",requiresPlan:[_e,Re],shortLabel:"52W Low",transform:De},Ua={valueBuckets:de,databaseModelName:ge.KEY_STATS,id:"year1ChangePercent",label:"1-year Return",requiresPlan:[_e,Re],shortLabel:"1Y %",transform:Ie},Ka={valueBuckets:de,databaseModelName:ge.KEY_STATS,id:"year2ChangePercent",label:"2-year Return",requiresPlan:[_e,Re],shortLabel:"2Y %",transform:Ie},Fa={valueBuckets:de,databaseModelName:ge.KEY_STATS,id:"year5ChangePercent",label:"5-year Return",requiresPlan:[_e,Re],shortLabel:"5Y %",transform:Ie},Ha={valueBuckets:de,databaseModelName:ge.KEY_STATS,id:"ytdChangePercent",label:"YTD Return",requiresPlan:[_e,Re],shortLabel:"YTD %",transform:Ie},Ga={valueBuckets:de,databaseModelName:ge.DERIVED_SECURITY_METRICS,id:"YoYEPSGrowth",label:"YoY EPS Growth",requiresPlan:[Re],shortLabel:"YoY EPS Grow",transform:Ie},ja={valueBuckets:de,databaseModelName:ge.DERIVED_SECURITY_METRICS,id:"YoYRevenueGrowth",label:"YoY Revenue Growth",requiresPlan:[Re],shortLabel:"YoY Rev. Grow",transform:Ie},Xa=[Fe,Ke,ba,Sa,Ta,je,Ta],xa={popular:[Fe,ba,Sa,Ta,Ra,je,ja,Ga],EEONPerformanceScores:[ea,aa,ta,oa,ra,la],performance:[xe,pa,fa,ha,Ha,Ua,Ka,Fa,Ue,Va],profitability:[_a,Ba,ka],value:[Ze,ca,Na,Oa,ze,sa,ga,Ma]},Wa=v(T(xa)),Qa={__proto__:null,metricRelations:ge,averageTransform:Me,averageCurrencyTransform:Ce,betaTransform:Le,currencyTransform:De,percentageTransform:Ie,percentageValueTransform:Be,ratioTransform:ke,volumeTransform:Ve,EEONPerformanceScoreUnformatter:qe,avg10Volume:Ye,avg30Volume:we,beta:Ue,change:Ke,changePercent:Fe,close:He,currentDebt:Ge,day14RSI:je,day30ChangePercent:Xe,day5ChangePercent:xe,day50MovingAvg:We,day200MovingAvg:Qe,debtToEquity:Je,dividendYield:Ze,earningsYield:ze,EBITDA:$e,EEONGrowthScore:ea,EEONMomentumScore:aa,EEONProfitabilityScore:ra,EEONRuleOf40Score:ta,EEONSafetyScore:la,EEONValueScore:oa,employees:na,enterpriseValue:sa,enterpriseValueToRevenue:ua,extendedChangePercent:ia,forwardPERatio:ca,grossProfit:da,high:Ea,latestPrice:ba,low:ma,marketCap:Sa,month1ChangePercent:pa,month3ChangePercent:fa,month6ChangePercent:ha,open:va,peRatio:Ta,pegRatio:Pa,previousClose:ya,previousVolume:Aa,priceToBook:Oa,priceToSales:Na,profitMargin:_a,revenue:Ra,revenuePerEmployee:ga,revenuePerShare:Ma,sharesOutstanding:Ca,ttmEPS:La,totalCash:Da,totalRevenue:Ia,ttmReturnOnAssets:Ba,ttmReturnOnEquity:ka,volume:Va,week52change:qa,week52High:Ya,week52Low:wa,year1ChangePercent:Ua,year2ChangePercent:Ka,year5ChangePercent:Fa,ytdChangePercent:Ha,YoYEPSGrowth:Ga,YoYRevenueGrowth:ja,alertMetrics:Xa,getAlertMetricById:function(e){return Xa.find(function(a){return r(a.id,e)})||Fe},screenableMetrics:xa,screenableMetricsList:Wa,getScreenableMetricById:function(e){return Wa.find(function(a){return r(a.id,e)})||Fe},listTypes:{EEON_SCREENERLIST:"eeonScreenerlist",EEON_WATCHLIST:"eeonWatchlist",USER_SCREENERLIST:"userScreenerlist",USER_WATCHLIST:"userWatchlist"},isEEONList:function(e){return void 0===e&&(e={}),!f(e,["userId"])},isUserList:function(e){return void 0===e&&(e={}),f(e,["userId"])},isListScreener:function(e){return void 0===e&&(e={}),f(e,"criteria")},isListWatchlist:function(e){return void 0===e&&(e={}),f(e,"holdingsCount")}},Ja={factors:[{symbol:"MTUM",label:"Momentum",shortLabel:"Momentum",type:"Factor"},{symbol:"VB",label:"Small Cap.",shortLabel:"Small Cap.",type:"Factor"},{symbol:"VIG",label:"Dividend Appreciation",shortLabel:"Div. Apprec.",type:"Factor"},{symbol:"VTV",label:"Value",shortLabel:"Value",type:"Factor"},{symbol:"VUG",label:"Large Cap Growth",shortLabel:"Large Cap. Growth",type:"Factor"},{symbol:"VYM",label:"High Dividend",shortLabel:"High Div.",type:"Factor"}],indices:[{symbol:"SPY",label:"S&P 500",shortLabel:"S&P 500",type:"Index"},{symbol:"DIA",label:"Dow Jones",shortLabel:"Dow Jones",type:"Index"},{symbol:"IWM",label:"Russell 2K",shortLabel:"Russell 2K",type:"Index"},{symbol:"IWF",label:"Russell 1K",shortLabel:"Russell 1K",type:"Index"},{symbol:"QQQ",label:"NASDAQ 100 ",shortLabel:"NASDAQ 100",type:"Index"},{symbol:"VTI",label:"Total Stock Market",shortLabel:"Total Market",type:"Index"}],sectors:[{symbol:"XLB",label:"Materials",shortLabel:"Materials",type:"Sector"},{symbol:"XLE",label:"Energy",shortLabel:"Energy",type:"Sector"},{symbol:"XLF",label:"Financials",shortLabel:"Financials",type:"Sector"},{symbol:"XLI",label:"Industrials",shortLabel:"Industrials",type:"Sector"},{symbol:"XLV",label:"Healthcare",shortLabel:"Healthcare",type:"Sector"},{symbol:"XLC",label:"Communications",shortLabel:"Comms.",type:"Sector"},{symbol:"XLY",label:"Cons. Discretionary",shortLabel:"Cons. Disc.",type:"Sector"},{symbol:"XLP",label:"Cons. Staples",shortLabel:"Cons. Staples",type:"Sector"},{symbol:"XLU",label:"Utilities",shortLabel:"Utilities",type:"Sector"},{symbol:"XLK",label:"Technology",shortLabel:"Tech",type:"Sector"},{symbol:"XLRE",label:"Real Estate",shortLabel:"Real Estate",type:"Sector"},{symbol:"GDX",label:"Gold",shortLabel:"Gold",type:"Sector"}]},Za=[].concat(Ja.indices,Ja.sectors,Ja.factors),za={__proto__:null,macros:Ja,macrosList:Za,getMacroBySymbol:function(e){return p.find(Za,{symbol:e})}},$a={__proto__:null,equalityPredicates:G({GREATER_THAN:null,LESS_THAN:null})},er={__proto__:null,capabilities:G({LISTS:null,PEOPLE:null,SECURITIES:null,TAGS:null})},ar={__proto__:null,sortOrders:G({ASC:null,DESC:null})},rr=m(b),tr=m(l),lr=function(e){if(void 0===e&&(e=[]),!A(e))throw new Error("Input is not iterable");return O(function(e){return A(e)&&r(e.length,2)})(e)},or=function(e){return N(_(e))},nr=or("id"),sr=or("symbol"),ur=n(S,rr),ir=n(S,tr),cr={__proto__:null,eachIsTuple:lr,extractFieldFromList:or,extractIdsFromList:nr,extractSymbolsFromList:sr,hasLength:function(e){if(void 0===e&&(e=[]),!A(e)&&!isString(e))throw new Error("Input must be a number or string");return e.length>0},keymirrorLower:ur,keymirrorUpper:ir,pickWithInitialState:function(e,r){if(void 0===e&&(e={}),void 0===r&&(r=[]),!A(r)||!lr(r))throw new Error("Selector must be a list of tuples");return r.reduce(function(r,t){var l=t[0];return r[l]=a(e,l,t[1]),r},{})}};e.IEX=j,e.cache=g,e.environment=L,e.formatNumbers=U,e.jobs=X,e.lists=Qa,e.macros=za,e.predicates=$a,e.scores={__proto__:null,scoreKeys:{COMPUTED_COMPOSITE_SCORE:"computedCompositeScore",COMPUTED_GROWTH_SCORE:"computedGrowthScore",COMPUTED_MOMENTUM_SCORE:"computedMomentumScore",COMPUTED_PERFORMANCE_SCORE:"computedPerformanceScore",COMPUTED_PROFITABILITY_SCORE:"computedProfitabilityScore",COMPUTED_RISK_SCORE:"computedRiskScore",COMPUTED_VALUE_SCORE:"computedValueScore"}},e.search=er,e.sorting=ar,e.subscriptionPlans=J,e.utils=cr,e.valueBuckets=Ne});
//# sourceMappingURL=index.umd.js.map
