const _ = require('lodash')
const analytics = require('./index')

/**
 * Fixture
 */
const DIRTY_USER = {
  firstName: 'Test',
  lastName: 'Example',
  email: 'me@example.com',
}

describe('analytics', () => {
  describe('cleanUserFields', () => {
    it('should handle null input', () => {
      const user = analytics.cleanUserFields(null)
      expect(user).toEqual({})
    })

    it('should handle undefined input', () => {
      const user = analytics.cleanUserFields(undefined)
      expect(user).toEqual({})
    })

    it('should handle happy path', () => {
      const expected = {
        $first_name: _.get(DIRTY_USER, ['firstName']),
        $last_name: _.get(DIRTY_USER, ['lastName']),
        $email: _.get(DIRTY_USER, 'email'),
      }
      expect(analytics.cleanUserFields(DIRTY_USER)).toEqual(expected)
    })
  })
})
