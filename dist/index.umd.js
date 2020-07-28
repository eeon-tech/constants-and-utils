!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("lodash/get"),require("lodash/fp/isEqual"),require("lodash/toUpper"),require("lodash/fp/toNumber"),require("lodash/fp/pipe"),require("lodash/fp/lt"),require("lodash/isUndefined"),require("lodash/isNull"),require("lodash/isFunction"),require("lodash/isEqual"),require("lodash/fp/gt"),require("lodash/fp/complement"),require("lodash/toLower"),require("lodash/fp/mapValues"),require("keymirror"),require("lodash"),require("lodash/has"),require("lodash/divide"),require("lodash/flatten"),require("lodash/values"),require("lodash/multiply"),require("lodash/toString"),require("lodash/isArray"),require("lodash/fp/every"),require("lodash/fp/map"),require("lodash/fp/get")):"function"==typeof define&&define.amd?define(["exports","lodash/get","lodash/fp/isEqual","lodash/toUpper","lodash/fp/toNumber","lodash/fp/pipe","lodash/fp/lt","lodash/isUndefined","lodash/isNull","lodash/isFunction","lodash/isEqual","lodash/fp/gt","lodash/fp/complement","lodash/toLower","lodash/fp/mapValues","keymirror","lodash","lodash/has","lodash/divide","lodash/flatten","lodash/values","lodash/multiply","lodash/toString","lodash/isArray","lodash/fp/every","lodash/fp/map","lodash/fp/get"],a):a((e=e||self).constantsAndUtils={},e.get,e.isEqual,e.toUpper,e.toNumber,e.pipe,e.lt,e.isUndefined,e.isNull,e.isFunction,e.isEqual$1,e.gt,e.complement,e.toLower,e.mapValues,e.keymirror,e.lodash,e.has,e.divide,e.flatten,e.values,e.multiply,e.toString,e.isArray,e.every,e.map,e.fget)}(this,function(e,a,r,t,l,o,n,s,u,i,c,d,E,b,m,S,p,h,f,v,P,T,y,A,_,O,N){a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c,d=d&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d,E=E&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E,b=b&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b,m=m&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m,S=S&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S,p=p&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p,h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h,f=f&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f,v=v&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v,P=P&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P,T=T&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T,y=y&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y,A=A&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A,_=_&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_,O=O&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O,N=N&&Object.prototype.hasOwnProperty.call(N,"default")?N.default:N;var g=function(e){return 1e3*e},C={__proto__:null,cachePeriodsInMS:{"1m":g(60),"2m":g(120),"3m":g(180),"4m":g(240),"5m":g(300),"15m":g(900),"1h":g(3600),"4h":g(14400),"6h":g(21600),"8h":g(28800),"12h":g(43200),"1D":g(86400),"5D":g(432e3),"10D":g(864e3),"14D":g(1209600),"1M":g(2592e3),"6M":g(15552e3)}},R=r("enabled"),M=r("sandbox"),L=function(e){return void 0===e&&(e=process.env),M("sandbox",a(e,"IEX_ENVIRONMENT"),!0)},D={__proto__:null,getArenaPassword:function(e){return void 0===e&&(e=process.env),a(e,["ARENA_PASSWORD"])},getArenaUsername:function(e){return void 0===e&&(e=process.env),a(e,["ARENA_PASSWORD"])},getCloudinaryAPIKey:function(e){return void 0===e&&(e=process.env),a(e,["CLOUDINARY_API_KEY"])},getCloudinaryAPISecret:function(e){return void 0===e&&(e=process.env),a(e,["CLOUDINARY_API_SECRET"])},getCloudinaryCloudName:function(e){return void 0===e&&(e=process.env),a(e,["CLOUDINARY_CLOUD_NAME"])},getDatabaseHost:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_HOST"],"localhost")},getDatabaseName:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_NAME"],"test")},getDatabasePassword:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_PASSWORD"],"password")},getDatabasePort:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_PORT"],"27017")},getDatabaseUsername:function(e){return void 0===e&&(e=process.env),a(e,["DATABASE_USERNAME"],"user")},getEEONEnvironment:function(e){return void 0===e&&(e=process.env),a(e,["EEON_ENVIRONMENT"],"development")},getIEXPublishableToken:function(e){return void 0===e&&(e=process.env),L(e)?a(e,["IEX_SANDBOX_PUBLISHABLE_TOKEN"]):a(e,"IEX_PUBLISHABLE_TOKEN")},getIEXRESTfulBaseURL:function(e){return void 0===e&&(e=process.env),L(e)?"https://sandbox.iexapis.com/stable":"https://cloud.iexapis.com/stable"},getIEXSecretToken:function(e){return void 0===e&&(e=process.env),L(e)?a(e,["IEX_SANDBOX_SECRET_TOKEN"]):a(e,["IEX_SECRET_TOKEN"])},getIEXStreamingBaseURL:function(e){return void 0===e&&(e=process.env),L(e)?"https://sandbox-sse.iexapis.com/stable":"https://cloud-sse.iexapis.com/stable"},getIEXAPIVersion:function(){return"stable"},getIntercomAccessToken:function(e){return void 0===e&&(e=process.env),a(e,["INTERCOM_ACCESS_TOKEN"])},getRedisHost:function(e){return void 0===e&&(e=process.env),a(e,["REDIS_HOST"])},getRedisPassword:function(e){return void 0===e&&(e=process.env),a(e,["REDIS_PASSWORD"])},getRedisPort:function(e){return void 0===e&&(e=process.env),a(e,["REDIS_PORT"])},getSendgridAPIKey:function(e){return void 0===e&&(e=process.env),a(e,["SENDGRID_API_KEY"])},getStockNewsAPIToken:function(e){return void 0===e&&(e=process.env),a(e,["STOCK_NEWS_API_API_KEY"])},getStripeBasicPlanId:function(e){return void 0===e&&(e=process.env),a(e,["STRIPE_BASIC_PLAN_ID"])},getStripeInvestorPlanId:function(e){return void 0===e&&(e=process.env),a(e,["STRIPE_INVESTOR_PLAN_ID"])},getStripeProfessionalPlanId:function(e){return void 0===e&&(e=process.env),a(e,["STRIPE_PROFESSIONAL_PLAN_ID"])},getStripeSecretKey:function(e){return void 0===e&&(e=process.env),a(e,["STRIPE_SECRET_KEY"])},isStreamingEnabled:function(e){return void 0===e&&(e=process.env),R(a(e,["FEATURES_STREAMING"]))}};function I(){return(I=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var B=require("numbro");B.registerLanguage({abbreviations:{thousand:"K",million:"M",billion:"B",trillion:"T"},currency:{symbol:"$",position:"prefix",code:"USD"},delimiters:{thousands:",",decimal:"."},languageTag:"en-EEON",ordinal:function(){return""}}),B.setLanguage("en-EEON");var k=function(e,r){void 0===r&&(r={});var t=r.currency,l=r.percentage,o=function(e,a){if(null==e)return{};var r,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)a.indexOf(r=o[t])>=0||(l[r]=e[r]);return l}(r,["currency","percentage"]);return u(e)||s(e)||!i(a(e,["toString"]))?"N/A":t?B(e).formatCurrency(o):l?B(e).format(I({},o,{output:"percent"})):B(e).format(o)},V=function(e){return c(e%2,0)},q=o(l,d(0)),Y=o(l,n(0)),w=E(V),U=r(0),K={__proto__:null,formatChartNumber:function(e){var a=Math.abs(e),r=e<0?"-":"";return a<1e3?a:a<1e6?""+r+a/1e3+"K":a<1e9?""+r+a/1e6+"M":a<1e12?""+r+a/1e9+"B":a<1e15?""+r+a/1e12+"T":void 0},formatNumberNicely:k,isEven:V,isGreaterThanZero:q,isLessThanZero:Y,isOdd:w,isZero:U,prefixValueWithCurrencySymbol:function(e){return k(e,{currency:!0})},suffixValueWithPercentSymbol:function(e){return k(e,{percentage:!0})},unformatNiceNumber:function(e,a){void 0===e&&(e="");var r=(void 0===a?{}:a).unformatter;if(i(r))return r(e);var l=t(e);if(l.includes("B")){var o=l.replace("B","");return 1e9*B.unformat(o)}return B.unformat(l)}},F=m(b),H=m(t),G=o(S,F),j=o(S,H),X={__proto__:null,announceTimes:j({AMC:null,BTO:null,OTHER:null}),periods:G({ANNUAL:null,QUARTERLY:null}),securityTypes:G({AD:null,RE:null,CE:null,SI:null,LP:null,CS:null,ET:null,WT:null,OEF:null,CEF:null,PS:null}),timeframes:{FIVE_DAYS:"5d",FIVE_YEARS:"5y",ONE_MONTH:"1m",ONE_YEAR:"1y",SIX_MONTHS:"6m",THREE_MONTHS:"3m",TWO_YEARS:"2y"},timeRanges:{FIVE_DAYS:"5d",FIVE_YEARS:"5y",ONE_MONTH:"1m",ONE_YEAR:"1Y",SIX_MONTHS:"6M",THREE_MONTHS:"3M",TWO_YEARS:"2Y",YTD:"ytd"},LIVE:"live"},x={__proto__:null,queueNames:S({calculateDerivedSecurityMetrics:null,calculateEEONPerformanceScores:null,calculateMacroIndicators:null,calculateMarketInsights:null,calculateSecurityInsights:null,collectFinancialStatementsUponEarnings:null,fetchUpcomingEvents:null,primeCache:null,runPreMarketJobs:null,runDailyEEONScreenerlists:null,runDailyUserScreenerlists:null,runHourlyEEONScreenerlists:null,runHourlyUserScreenerlists:null,sendRealtimeSecurities:null,sendUserSecurityAlertMessages:null,storeRealtimeData:null,triggerUserSecurityAlerts:null})},W=G({CANCELED:null,CHARGEABLE:null,CONSUMED:null,FAILED:null,PENDING:null}),Q=G({FOREVER:null,ONCE:null,REPEATING:null}),J=j({BASIC:null,INVESTOR:null}),Z={__proto__:null,stripeCardStatuses:W,stripeCouponDurations:Q,stripePlans:J,stripeSubscriptionStatuses:G({ACTIVE:null,CANCELED:null,INCOMPLETED_EXPIRED:null,INCOMPLETE:null,PAST_DUE:null,TRIALING:null,UNPAID:null})},$=function(e,a){return{formattedValue:k(e,{percentage:!0,mantissa:2}),label:a,value:e}},z=function(e,a){return{formattedValue:y(T(e,100)),label:a,value:e}},ee=function(e,a,r){return void 0===r&&(r={}),{formattedValue:k(e,I({average:!0},r)),label:a,value:e}},ae=function(e,a,r){return{formattedValue:e,label:a,value:e}},re=[ae(0),ae(.5,"Less volatile than market"),ae(1,"Moves with Market"),ae(1.5,"More volatile than market"),ae(2)],te=[$(0,"No Dividend"),$(.01),$(.02),$(.03,"Pretty good"),$(.04),$(.05),$(.06),$(.07),$(.08)],le=[$(-.5),$(-.4),$(-.3),$(-.2),$(-.1),$(-.05),$(0),$(.05),$(.1),$(.2),$(.3),$(.4),$(.5)],oe=[ee(0,"Profitable"),ee(1e6),ee(5e6),ee(1e7,"Small"),ee(25e6),ee(5e7),ee(1e8,"Midsized"),ee(15e7),ee(2e8),ee(25e7),ee(5e8),ee(75e7),ee(1e9,"Large"),ee(5e9),ee(1e10,"Mega"),ee(2e10),ee(5e10),ee(1e10),ee(25e9),ee(5e10)],ne=[z(0),z(.1),z(.2),z(.3),z(.4),z(.5),z(.6),z(.7),z(.8),z(.9),z(1)],se=[ee(100),ee(1e3),ee(5e3),ee(1e4),ee(25e3),ee(5e4),ee(1e5)],ue={currency:!0},ie=[ee(5e7,"Micro-cap",ue),ee(1e8,"Tiny-cap",ue),ee(5e8,"Small-cap",ue),ee(1e9,ue),ee(5e9,ue),ee(1e10,"Mid-cap",ue),ee(5e10,ue),ee(1e11,ue),ee(2e11,"Large-cap",ue),ee(5e11,"Mega-cap",ue)],ce=[ee(0),ee(1,"Fair value"),ee(2),ee(3)],de=[ee(0),ee(5),ee(10),ee(15),ee(20),ee(25),ee(30),ee(35),ee(40)],Ee=[$(-.3),$(-.25),$(-.2),$(-.15),$(-.1),$(-.09),$(-.08),$(-.07),$(-.06),$(-.05),$(-.04),$(-.03),$(-.02),$(-.01),$(0),$(.01),$(.02),$(.03),$(.04),$(.05),$(.06),$(.07),$(.08),$(.09),$(.1),$(.15),$(.2),$(.25),$(.3)],be={currency:!0},me=[ee(10,be),ee(15,be),ee(20,be),ee(25,be),ee(30,be),ee(40,be),ee(50,be),ee(75,be),ee(100,be),ee(150,be),ee(200,be),ee(250,be),ee(500,be),ee(750,be),ee(1e3,be),ee(2e3,be)],Se=[ee(1,"Low"),ee(2),ee(3),ee(4),ee(5,"High"),ee(6),ee(7),ee(8),ee(9),ee(10)],pe=[$(0),$(.1),$(.15),$(.2),$(.25),$(.3),$(.5),$(.75,"🔥")],he={currency:!0},fe=[ee(5e7,"Small",he),ee(1e8,null,he),ee(25e7,null,he),ee(5e8,null,he),ee(1e9,null,he),ee(1e10,null,he),ee(25e9,null,he),ee(5e10,null,he),ee(1e11,"Mega",he)],ve={currency:!0},Pe=[ee(1e5,null,ve),ee(2e5,null,ve),ee(3e5,null,ve),ee(4e5,null,ve),ee(5e5,null,ve),ee(75e4,null,ve),ee(1e6,null,ve)],Te={currency:!0},ye=[ee(0,null,Te),ee(5,null,Te),ee(10,null,Te),ee(15,null,Te),ee(25,null,Te),ee(50,null,Te),ee(100,null,Te),ee(250,null,Te),ee(500,null,Te),ee(1e3,null,Te)],Ae=[ee(0),ee(10),ee(20),ee(30),ee(40),ee(50),ee(60),ee(70),ee(80),ee(90),ee(100)],_e=[ee(0),ee(5),ee(10),ee(15),ee(20),ee(25),ee(30),ee(35),ee(40),ee(45),ee(50)],Oe=[ee(1e5),ee(5e5),ee(1e6),ee(5e6),ee(1e7)],Ne={__proto__:null,createPercentageValueBucket:$,createEEONPerformanceScoreValueBucket:z,createNumericValueBucket:ee,createIdentityValueBucket:ae,betaValueBuckets:re,dividendYieldValueBuckets:te,earningsYieldValueBuckets:le,EBITDAValueBuckets:oe,EEONPerformanceScoresValueBuckets:ne,employeesValueBuckets:se,marketCapValueBuckets:ie,pegRatioValueBuckets:ce,peRatioValueBuckets:de,percentageValueBuckets:Ee,priceValueBuckets:me,priceToBookValueBuckets:Se,profitMarginValueBuckets:pe,revenueValueBuckets:fe,revenuePerEmployeeValueBuckets:Pe,revenuePerShareValueBuckets:ye,RSIValueBuckets:Ae,ttmEPSValueBuckets:_e,volumeValueBuckets:Oe},ge=J.BASIC,Ce=J.INVESTOR,Re={ADVANCED_STATS:"AdvancedStats",DERIVED_SECURITY_METRICS:"DerivedSecurityMetric",EEON_PERFORMANCE_SCORES:"EEONPerformanceScore",KEY_STATS:"KeyStats",QUOTE:"Quote",TECHNICAL_INDICATORS:"TechnicalIndicator"},Me=function(e){return void 0===e&&(e=0),k(e,{average:!0})},Le=function(e){return void 0===e&&(e=0),k(e,{average:!0,currency:!0,mantissa:1})},De=function(e){return void 0===e&&(e=0),k(e,{mantissa:2})},Ie=function(e){return void 0===e&&(e=0),k(e,{currency:!0,mantissa:2})},Be=function(e){return void 0===e&&(e=0),k(e,{mantissa:2,percentage:!0})},ke=function(e){void 0===e&&(e=0);var a=T(e,100);return k(a,{mantissa:0})},Ve=function(e){return void 0===e&&(e=0),k(e,{mantissa:2})},qe=function(e){return void 0===e&&(e=0),k(e,{average:!0,totalLength:4})},Ye=o(l,function(e){return f(e,100)}),we={valueBuckets:Oe,databaseModelName:Re.KEY_STATS,id:"avg10Volume",label:"10 Day Average Volume",requiresPlan:[ge,Ce],shortLabel:"10D Avg. Volume",transform:qe},Ue={valueBuckets:Oe,databaseModelName:Re.KEY_STATS,id:"avg30Volume",label:"30 Day Average Volume",requiresPlan:[ge,Ce],shortLabel:"30D Avg. Volume",transform:qe},Ke={valueBuckets:re,databaseModelName:Re.KEY_STATS,id:"beta",label:"Beta",requiresPlan:[ge,Ce],shortLabel:"Beta",transform:De},Fe={valueBuckets:me,databaseModelName:Re.QUOTE,id:"change",label:"Change",requiresPlan:[ge,Ce],shortLabel:"Change",transform:Ie},He={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"changePercent",label:"Percent Change",requiresPlan:[ge,Ce],shortLabel:"% Change",transform:Be},Ge={valueBuckets:ie,databaseModelName:Re.ADVANCED_STATS,id:"currentDebt",label:"Current Debt",requiresPlan:[Ce],shortLabel:"Current Debt",transform:Le},je={valueBuckets:Ae,databaseModelName:Re.TECHNICAL_INDICATORS,id:"day14RSI",label:"14 Day RSI",requiresPlan:[Ce],shortLabel:"RSI",transform:Me},Xe={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"day30ChangePercent",label:"30 Day Percent Change",requiresPlan:[ge,Ce],shortLabel:"30D % Change",transform:Be},xe={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"day5ChangePercent",label:"5 Day Percent Change",requiresPlan:[ge,Ce],shortLabel:"5D % Change",transform:Be},We={valueBuckets:me,databaseModelName:Re.KEY_STATS,id:"day50MovingAvg",label:"50 Day Moving Average",requiresPlan:[ge,Ce],shortLabel:"50D Moving Avg.",transform:Ie},Qe={valueBuckets:me,databaseModelName:Re.KEY_STATS,id:"day200MovingAvg",label:"200 Day Moving Average",requiresPlan:[ge,Ce],shortLabel:"200D Moving Avg.",transform:Ie},Je={valueBuckets:de,databaseModelName:Re.ADVANCED_STATS,id:"debtToEquity",label:"Debt to Equity",requiresPlan:[Ce],shortLabel:"Debt/Equity",transform:Ve},Ze={valueBuckets:te,databaseModelName:Re.KEY_STATS,id:"dividendYield",label:"Dividend Yield",requiresPlan:[Ce],shortLabel:"Div. Yield",transform:Be},$e={valueBuckets:le,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"earningsYield",label:"Earnings Yield",requiresPlan:[Ce],shortLabel:"Earnings Yield",transform:Be},ze={valueBuckets:oe,databaseModelName:Re.ADVANCED_STATS,id:"EBITDA",label:"EBITDA",requiresPlan:[Ce],shortLabel:"EBITDA",transform:Le},ea={valueBuckets:ne,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"growthScore",label:"EEON Growth Score",requiresPlan:[Ce],shortLabel:"Growth Score",transform:ke,unformatter:Ye},aa={valueBuckets:ne,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"momentumScore",label:"EEON Momentum Score",requiresPlan:[Ce],shortLabel:"Momentum Score",transform:ke,unformatter:Ye},ra={valueBuckets:ne,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"profitabilityScore",label:"EEON Profitability Score",requiresPlan:[Ce],shortLabel:"Profitability Score",transform:ke,unformatter:Ye},ta={valueBuckets:ne,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"ruleOf40Score",label:"EEON Scalability Score",requiresPlan:[Ce],shortLabel:"Scalability Score",transform:ke,unformatter:Ye},la={valueBuckets:ne,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"safetyScore",label:"EEON Safety Score",requiresPlan:[Ce],shortLabel:"Safety Score",transform:ke,unformatter:Ye},oa={valueBuckets:ne,databaseModelName:Re.EEON_PERFORMANCE_SCORES,id:"valueScore",label:"EEON Value Score",requiresPlan:[Ce],shortLabel:"Value Score",transform:ke,unformatter:Ye},na={valueBuckets:se,databaseModelName:Re.KEY_STATS,id:"employees",label:"Employees",requiresPlan:[ge,Ce],shortLabel:"Employees",transform:Me},sa={valueBuckets:oe,databaseModelName:Re.ADVANCED_STATS,id:"enterpriseValue",label:"Enterprise Value",requiresPlan:[Ce],shortLabel:"Enterprise Value",transform:Le},ua={valueBuckets:Se,databaseModelName:Re.ADVANCED_STATS,id:"enterpriseValueToRevenue",label:"Enterprise Value to Revenue",requiresPlan:[Ce],shortLabel:"Ent. Value to Rev.",transform:Ve},ia={valueBuckets:Ee,databaseModelName:Re.QUOTE,id:"extendedChangePercet",label:"After Hours Percent Change",requiresPlan:[ge,Ce],shortLabel:"After Hours % Percent",transform:Be},ca={valueBuckets:de,databaseModelName:Re.ADVANCED_STATS,id:"forwardPERatio",label:"Forward PE Ratio",requiresPlan:[Ce],shortLabel:"For. PE Ratio",transform:Ve},da={valueBuckets:fe,databaseModelName:Re.ADVANCED_STATS,id:"grossProfit",label:"Gross Profit",requiresPlan:[Ce],shortLabel:"Gross Profit",transform:Le},Ea={valueBuckets:me,databaseModelName:Re.QUOTE,id:"latestPrice",label:"Price",requiresPlan:[ge,Ce],shortLabel:"Price",transform:Ie},ba={valueBuckets:ie,databaseModelName:Re.QUOTE,id:"marketCap",label:"Market Cap.",requiresPlan:[ge,Ce],shortLabel:"Market Cap.",transform:Le},ma={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"month1ChangePercent",label:"1M Percent Change",requiresPlan:[ge,Ce],shortLabel:"1M % Change",transform:Be},Sa={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"month3ChangePercent",label:"3M Percent Change",requiresPlan:[ge,Ce],shortLabel:"3M % Change",transform:Be},pa={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"month6ChangePercent",label:"6M Percent Change",requiresPlan:[ge,Ce],shortLabel:"6M % Change",transform:Be},ha={valueBuckets:me,databaseModelName:Re.QUOTE,id:"open",label:"Open",requiresPlan:[ge,Ce],shortLabel:"Open",transform:Ie},fa={valueBuckets:de,databaseModelName:Re.QUOTE,id:"peRatio",label:"PE Ratio",requiresPlan:[ge,Ce],shortLabel:"PE Ratio",transform:Ve},va={valueBuckets:ce,databaseModelName:Re.ADVANCED_STATS,id:"pegRatio",label:"PEG Ratio",requiresPlan:[Ce],shortLabel:"PEG Ratio",transform:Ve},Pa={valueBuckets:me,databaseModelName:Re.QUOTE,id:"previousClose",label:"Previous Close",requiresPlan:[ge,Ce],shortLabel:"Prev. Close",transform:Ie},Ta={valueBuckets:Se,databaseModelName:Re.ADVANCED_STATS,id:"priceToBook",label:"Price to Book",requiresPlan:[Ce],shortLabel:"P/B",transform:Ve},ya={valueBuckets:Se,databaseModelName:Re.ADVANCED_STATS,id:"priceToSales",label:"Price to Sales",requiresPlan:[Ce],shortLabel:"P/S",transform:Ve},Aa={valueBuckets:pe,databaseModelName:Re.ADVANCED_STATS,id:"profitMargin",label:"Profit Margin",requiresPlan:[Ce],shortLabel:"Profit Margin",transform:Be},_a={valueBuckets:fe,databaseModelName:Re.ADVANCED_STATS,id:"revenue",label:"Revenue",requiresPlan:[ge,Ce],shortLabel:"Revenue",transform:Le},Oa={valueBuckets:Pe,databaseModelName:Re.ADVANCED_STATS,id:"revenuePerEmployee",label:"Revenue per Employee",requiresPlan:[Ce],shortLabel:"Revenue/Employee",transform:Le},Na={valueBuckets:ye,databaseModelName:Re.ADVANCED_STATS,id:"revenuePerShare",label:"Revenue per Share",requiresPlan:[Ce],shortLabel:"Revenue/Share",transform:Ie},ga={valueBuckets:fe,databaseModelName:Re.KEY_STATS,id:"sharesOutstanding",label:"Shares Outstanding",requiresPlan:[ge,Ce],shortLabel:"Shares",transform:Me},Ca={valueBuckets:_e,databaseModelName:Re.KEY_STATS,id:"ttmTPS",label:"EPS (TTM)",requiresPlan:[Ce],shortLabel:"EPS (TTM)",transform:Ie},Ra={valueBuckets:fe,databaseModelName:Re.ADVANCED_STATS,id:"totalCash",label:"Total Cash",requiresPlan:[Ce],shortLabel:"Cash",transform:Le},Ma={valueBuckets:fe,databaseModelName:Re.ADVANCED_STATS,id:"totalRevenue",label:"Total Revenue",requiresPlan:[Ce],shortLabel:"Total Revenue",transform:Le},La={valueBuckets:Ee,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"ttmReturnOnAssets",label:"Return on Assets (TTM)",requiresPlan:[Ce],shortLabel:"ROA (TTM)",transform:Be},Da={valueBuckets:Ee,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"ttmReturnOnEquity",label:"Return on Equity (TTM)",requiresPlan:[Ce],shortLabel:"ROE (TTM)",transform:Be},Ia={valueBuckets:Oe,databaseModelName:Re.QUOTE,id:"volume",label:"Volume",requiresPlan:[ge,Ce],shortLabel:"Volume",transform:qe},Ba={valueBuckets:me,databaseModelName:Re.KEY_STATS,id:"week52change",label:"52 Week % Change",requiresPlan:[ge,Ce],shortLabel:"52W % Change",transform:Be},ka={valueBuckets:me,databaseModelName:Re.QUOTE,id:"week52High",label:"52 Week High",requiresPlan:[ge,Ce],shortLabel:"52W High",transform:Ie},Va={valueBuckets:me,databaseModelName:Re.QUOTE,id:"week52Low",label:"52 Week Low",requiresPlan:[ge,Ce],shortLabel:"52W Low",transform:Ie},qa={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"year1ChangePercent",label:"1Y Percent Change",requiresPlan:[ge,Ce],shortLabel:"1Y % Change",transform:Be},Ya={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"year2ChangePercent",label:"2Y Percent Change",requiresPlan:[ge,Ce],shortLabel:"2Y % Change",transform:Be},wa={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"year5ChangePercent",label:"5Y Percent Change",requiresPlan:[ge,Ce],shortLabel:"5Y % Change",transform:Be},Ua={valueBuckets:Ee,databaseModelName:Re.KEY_STATS,id:"ytdChangePercent",label:"YTD Percent Change",requiresPlan:[ge,Ce],shortLabel:"YTD % Change",transform:Be},Ka={valueBuckets:Ee,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"YoYEPSGrowth",label:"YoY EPS Growth",requiresPlan:[Ce],shortLabel:"YoY EPS Grow",transform:Be},Fa={valueBuckets:Ee,databaseModelName:Re.DERIVED_SECURITY_METRICS,id:"YoYRevenueGrowth",label:"YoY Revenue Growth",requiresPlan:[Ce],shortLabel:"YoY Rev. Grow",transform:Be},Ha=[He,Fe,Ea,ba,fa,je,fa],Ga={popular:[He,Ea,ba,fa,_a,je,Fa,Ka],EEONPerformanceScores:[ea,aa,ta,oa,ra,la],performance:[xe,ma,Sa,pa,Ua,qa,Ya,wa,Ke,Ia],profitability:[Aa,La,Da],value:[Ze,ca,ya,Ta,$e,sa,Oa,Na]},ja=v(P(Ga)),Xa={__proto__:null,metricRelations:Re,averageTransform:Me,averageCurrencyTransform:Le,betaTransform:De,currencyTransform:Ie,percentageTransform:Be,percentageValueTransform:ke,ratioTransform:Ve,volumeTransform:qe,EEONPerformanceScoreUnformatter:Ye,avg10Volume:we,avg30Volume:Ue,beta:Ke,change:Fe,changePercent:He,currentDebt:Ge,day14RSI:je,day30ChangePercent:Xe,day5ChangePercent:xe,day50MovingAvg:We,day200MovingAvg:Qe,debtToEquity:Je,dividendYield:Ze,earningsYield:$e,EBITDA:ze,EEONGrowthScore:ea,EEONMomentumScore:aa,EEONProfitabilityScore:ra,EEONRuleOf40Score:ta,EEONSafetyScore:la,EEONValueScore:oa,employees:na,enterpriseValue:sa,enterpriseValueToRevenue:ua,extendedChangePercent:ia,forwardPERatio:ca,grossProfit:da,latestPrice:Ea,marketCap:ba,month1ChangePercent:ma,month3ChangePercent:Sa,month6ChangePercent:pa,open:ha,peRatio:fa,pegRatio:va,previousClose:Pa,priceToBook:Ta,priceToSales:ya,profitMargin:Aa,revenue:_a,revenuePerEmployee:Oa,revenuePerShare:Na,sharesOutstanding:ga,ttmEPS:Ca,totalCash:Ra,totalRevenue:Ma,ttmReturnOnAssets:La,ttmReturnOnEquity:Da,volume:Ia,week52change:Ba,week52High:ka,week52Low:Va,year1ChangePercent:qa,year2ChangePercent:Ya,year5ChangePercent:wa,ytdChangePercent:Ua,YoYEPSGrowth:Ka,YoYRevenueGrowth:Fa,alertMetrics:Ha,getAlertMetricById:function(e){return Ha.find(function(a){return c(a.id,e)})||He},screenableMetrics:Ga,screenableMetricsList:ja,getScreenableMetricById:function(e){return ja.find(function(a){return c(a.id,e)})||He},listTypes:{EEON_SCREENERLIST:"eeonScreenerlist",EEON_WATCHLIST:"eeonWatchlist",USER_SCREENERLIST:"userScreenerlist",USER_WATCHLIST:"userWatchlist"},isEEONList:function(e){return void 0===e&&(e={}),!h(e,["userId"])},isUserList:function(e){return void 0===e&&(e={}),h(e,["userId"])},isListScreener:function(e){return void 0===e&&(e={}),h(e,"criteria")},isListWatchlist:function(e){return void 0===e&&(e={}),h(e,"holdingsCount")}},xa={factors:[{symbol:"MTUM",label:"Momentum",shortLabel:"Momentum",type:"Factor"},{symbol:"VB",label:"Small Cap.",shortLabel:"Small Cap.",type:"Factor"},{symbol:"VIG",label:"Dividend Appreciation",shortLabel:"Div. Apprec.",type:"Factor"},{symbol:"VTV",label:"Value",shortLabel:"Value",type:"Factor"},{symbol:"VUG",label:"Large Cap Growth",shortLabel:"Large Cap. Growth",type:"Factor"},{symbol:"VYM",label:"High Dividend",shortLabel:"High Div.",type:"Factor"}],indices:[{symbol:"SPY",label:"S&P 500",shortLabel:"S&P 500",type:"Index"},{symbol:"DIA",label:"Dow Jones",shortLabel:"Dow Jones",type:"Index"},{symbol:"IWM",label:"Russell 2K",shortLabel:"Russell 2K",type:"Index"},{symbol:"IWF",label:"Russell 1K",shortLabel:"Russell 1K",type:"Index"},{symbol:"QQQ",label:"NASDAQ 100 ",shortLabel:"NASDAQ 100",type:"Index"},{symbol:"VTI",label:"Total Stock Market",shortLabel:"Total Market",type:"Index"}],sectors:[{symbol:"XLB",label:"Materials",shortLabel:"Materials",type:"Sector"},{symbol:"XLE",label:"Energy",shortLabel:"Energy",type:"Sector"},{symbol:"XLF",label:"Financials",shortLabel:"Financials",type:"Sector"},{symbol:"XLI",label:"Industrials",shortLabel:"Industrials",type:"Sector"},{symbol:"XLV",label:"Healthcare",shortLabel:"Healthcare",type:"Sector"},{symbol:"XLC",label:"Communications",shortLabel:"Comms.",type:"Sector"},{symbol:"XLY",label:"Cons. Discretionary",shortLabel:"Cons. Disc.",type:"Sector"},{symbol:"XLP",label:"Cons. Staples",shortLabel:"Cons. Staples",type:"Sector"},{symbol:"XLU",label:"Utilities",shortLabel:"Utilities",type:"Sector"},{symbol:"XLK",label:"Technology",shortLabel:"Tech",type:"Sector"},{symbol:"XLRE",label:"Real Estate",shortLabel:"Real Estate",type:"Sector"},{symbol:"GDX",label:"Gold",shortLabel:"Gold",type:"Sector"}]},Wa=[].concat(xa.indices,xa.sectors,xa.factors),Qa={__proto__:null,macros:xa,macrosList:Wa,getMacroBySymbol:function(e){return p.find(Wa,{symbol:e})}},Ja={__proto__:null,equalityPredicates:j({GREATER_THAN:null,LESS_THAN:null})},Za={__proto__:null,capabilities:j({LISTS:null,PEOPLE:null,SECURITIES:null,TAGS:null})},$a={__proto__:null,sortOrders:j({ASC:null,DESC:null})},za=m(b),er=m(t),ar=function(e){if(void 0===e&&(e=[]),!A(e))throw new Error("Input is not iterable");return _(function(e){return A(e)&&c(e.length,2)})(e)},rr=function(e){return O(N(e))},tr=rr("id"),lr=rr("symbol"),or=o(S,za),nr=o(S,er),sr={__proto__:null,eachIsTuple:ar,extractFieldFromList:rr,extractIdsFromList:tr,extractSymbolsFromList:lr,hasLength:function(e){if(void 0===e&&(e=[]),!A(e)&&!isString(e))throw new Error("Input must be a number or string");return e.length>0},keymirrorLower:or,keymirrorUpper:nr,pickWithInitialState:function(e,r){if(void 0===e&&(e={}),void 0===r&&(r=[]),!A(r)||!ar(r))throw new Error("Selector must be a list of tuples");return r.reduce(function(r,t){var l=t[0];return r[l]=a(e,l,t[1]),r},{})}};e.IEX=X,e.cache=C,e.environment=D,e.formatNumbers=K,e.jobs=x,e.lists=Xa,e.macros=Qa,e.predicates=Ja,e.scores={__proto__:null,scoreKeys:{COMPUTED_COMPOSITE_SCORE:"computedCompositeScore",COMPUTED_GROWTH_SCORE:"computedGrowthScore",COMPUTED_MOMENTUM_SCORE:"computedMomentumScore",COMPUTED_PERFORMANCE_SCORE:"computedPerformanceScore",COMPUTED_PROFITABILITY_SCORE:"computedProfitabilityScore",COMPUTED_RISK_SCORE:"computedRiskScore",COMPUTED_VALUE_SCORE:"computedValueScore"}},e.search=Za,e.sorting=$a,e.subscriptionPlans=Z,e.utils=sr,e.valueBuckets=Ne});
//# sourceMappingURL=index.umd.js.map
