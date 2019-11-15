const { defaults } = require('jest-config')

module.exports = {
  ...defaults,
  setupFiles: ['./setupTests.js'],
}
