import _ from 'lodash'

export const macros = {
  factors: [
    { symbol: 'IWF', label: 'Growth' },
    { symbol: 'MTUM', label: 'Momentum' },
    { symbol: 'USMV', label: 'Low Volatility' },
    { symbol: 'VB', label: 'Small Cap.' },
    { symbol: 'VIG', label: 'Dividend Appreciation' },
    { symbol: 'VTI', label: 'Total Stock Market' },
    { symbol: 'VTV', label: 'Value' },
    { symbol: 'VUG', label: 'Large Cap Growth' },
    { symbol: 'VYM', label: 'High Dividend' },
  ],
  indices: [
    { symbol: 'SPY', label: 'S&P 500' },
    { symbol: 'DIA', label: 'Dow Jones' },
    { symbol: 'IWM', label: 'Russell 2K' },
    { symbol: 'QQQ', label: 'NASDAQ 100 ' },
  ],
  sectors: [
    { symbol: 'XLB', label: 'Materials' },
    { symbol: 'XLE', label: 'Energy' },
    { symbol: 'XLF', label: 'Financials' },
    { symbol: 'XLI', label: 'Industrials' },
    { symbol: 'XLV', label: 'Healthcare' },
    { symbol: 'XLC', label: 'Communications' },
    { symbol: 'XLY', label: 'Cons. Discretionary' },
    { symbol: 'XLP', label: 'Cons. Staples' },
    { symbol: 'XLU', label: 'Utilities' },
    { symbol: 'XLK', label: 'Technology' },
    { symbol: 'XLRE', label: 'Real Estate' },
  ],
}

export const macrosList = [
  ...macros.factors,
  ...macros.indices,
  ...macros.sectors,
]

export const getMacroBySymbol = (symbol) => _.find(macrosList, { symbol })
