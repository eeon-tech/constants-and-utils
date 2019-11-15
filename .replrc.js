const _ = require('lodash')
const cau = require('./src/index')

const printBreak = () => console.log('\n')

const printDivider = () => console.log('==============================')

/**
 * Configuration for local repl
 */
module.exports = {
  banner: (context) => {
    printDivider()
    console.log(`Hey yo, you're in a REPL`)
    printBreak()
    console.log(
      `Automatically loaded context: ${Object.keys(context).join(', ')}`
    )
    printBreak()
  },
  context: {
    cau,
    lo: _,
  },
  enableAwait: true,
  prompt: () => `repl $ `,
}
