import _ from 'lodash'

const macroTypes = {
  FACTOR: 'Factor',
  INDEX: 'Index',
  SECTOR: 'Sector',
}

export const macros = {
  factors: [
    {
      symbol: 'MTUM',
      label: 'Momentum',
      shortLabel: 'Momentum',
      type: macroTypes.FACTOR,
    },
    {
      symbol: 'VB',
      label: 'Small Cap.',
      shortLabel: 'Small Cap.',
      type: macroTypes.FACTOR,
    },
    {
      symbol: 'VIG',
      label: 'Dividend Appreciation',
      shortLabel: 'Div. Apprec.',
      type: macroTypes.FACTOR,
    },
    {
      symbol: 'VTV',
      label: 'Value',
      shortLabel: 'Vaue',
      type: macroTypes.FACTOR,
    },
    {
      symbol: 'VUG',
      label: 'Large Cap Growth',
      shortLabel: 'Large Cap. Gro.',
      type: macroTypes.FACTOR,
    },
    {
      symbol: 'VYM',
      label: 'High Dividend',
      shortLabel: 'High Div.',
      type: macroTypes.FACTOR,
    },
  ],
  indices: [
    {
      symbol: 'SPY',
      label: 'S&P 500',
      shortLabel: 'S&P 500',
      type: macroTypes.INDEX,
    },
    {
      symbol: 'DIA',
      label: 'Dow Jones',
      shortLabel: 'Dow Jones',
      type: macroTypes.INDEX,
    },
    {
      symbol: 'IWM',
      label: 'Russell 2K',
      shortLabel: 'Russell 2K',
      type: macroTypes.INDEX,
    },
    {
      symbol: 'IWF',
      label: 'Russell 1K',
      shortLabel: 'Russell 1K',
      type: macroTypes.INDEX,
    },
    {
      symbol: 'QQQ',
      label: 'NASDAQ 100 ',
      shortLabel: 'NASDAQ 100',
      type: macroTypes.INDEX,
    },
    {
      symbol: 'VTI',
      label: 'Total Stock Market',
      shortLabel: 'Total Market',
      type: macroTypes.INDEX,
    },
  ],
  sectors: [
    {
      symbol: 'XLB',
      label: 'Materials',
      shortLabel: 'Materials',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLE',
      label: 'Energy',
      shortLabel: 'Energy',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLF',
      label: 'Financials',
      shortLabel: 'Financials',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLI',
      label: 'Industrials',
      shortLabel: 'Industrials',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLV',
      label: 'Healthcare',
      shortLabel: 'Healthcare',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLC',
      label: 'Communications',
      shortLabel: 'Comms.',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLY',
      label: 'Cons. Discretionary',
      shortLabel: 'Cons. Disc.',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLP',
      label: 'Cons. Staples',
      shortLabel: 'Cons. Staples',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLU',
      label: 'Utilities',
      shortLabel: 'Utilities',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLK',
      label: 'Technology',
      shortLabel: 'Tech',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'XLRE',
      label: 'Real Estate',
      shortLabel: 'Real Estate',
      type: macroTypes.SECTOR,
    },
    {
      symbol: 'GDX',
      label: 'Gold',
      shortLabel: 'Gold',
      type: macroTypes.SECTOR,
    },
  ],
}

export const macrosList = [
  ...macros.indices,
  ...macros.sectors,
  ...macros.factors,
]

export const getMacroBySymbol = (symbol) => _.find(macrosList, { symbol })
