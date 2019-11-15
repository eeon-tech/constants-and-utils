const _ = require('lodash')
const pkg = require('./index.js')

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
    lo: _,
    ...pkg,
  },
  enableAwait: true,
  prompt: () => `repl $ `,
}
