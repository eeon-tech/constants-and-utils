import _ from 'lodash'

const macroTypes = {
  FACTOR: 'Factor',
  INDEX: 'Index',
  SECTOR: 'Sector',
}

export const macros = {
  factors: [
    { symbol: 'IWF', label: 'Growth', type: macroTypes.FACTOR },
    { symbol: 'MTUM', label: 'Momentum', type: macroTypes.FACTOR },
    { symbol: 'USMV', label: 'Low Volatility', type: macroTypes.FACTOR },
    { symbol: 'VB', label: 'Small Cap.', type: macroTypes.FACTOR },
    { symbol: 'VIG', label: 'Dividend Appreciation', type: macroTypes.FACTOR },
    { symbol: 'VTI', label: 'Total Stock Market', type: macroTypes.FACTOR },
    { symbol: 'VTV', label: 'Value', type: macroTypes.FACTOR },
    { symbol: 'VUG', label: 'Large Cap Growth', type: macroTypes.FACTOR },
    { symbol: 'VYM', label: 'High Dividend', type: macroTypes.FACTOR },
  ],
  indices: [
    { symbol: 'SPY', label: 'S&P 500', type: macroTypes.INDEX },
    { symbol: 'DIA', label: 'Dow Jones', type: macroTypes.INDEX },
    { symbol: 'IWM', label: 'Russell 2K', type: macroTypes.INDEX },
    { symbol: 'QQQ', label: 'NASDAQ 100 ', type: macroTypes.INDEX },
  ],
  sectors: [
    { symbol: 'XLB', label: 'Materials', type: macroTypes.SECTOR },
    { symbol: 'XLE', label: 'Energy', type: macroTypes.SECTOR },
    { symbol: 'XLF', label: 'Financials', type: macroTypes.SECTOR },
    { symbol: 'XLI', label: 'Industrials', type: macroTypes.SECTOR },
    { symbol: 'XLV', label: 'Healthcare', type: macroTypes.SECTOR },
    { symbol: 'XLC', label: 'Communications', type: macroTypes.SECTOR },
    { symbol: 'XLY', label: 'Cons. Discretionary', type: macroTypes.SECTOR },
    { symbol: 'XLP', label: 'Cons. Staples', type: macroTypes.SECTOR },
    { symbol: 'XLU', label: 'Utilities', type: macroTypes.SECTOR },
    { symbol: 'XLK', label: 'Technology', type: macroTypes.SECTOR },
    { symbol: 'XLRE', label: 'Real Estate', type: macroTypes.SECTOR },
  ],
}

export const macrosList = [
  ...macros.indices,
  ...macros.sectors,
  ...macros.factors,
]

export const getMacroBySymbol = (symbol) => _.find(macrosList, { symbol })
