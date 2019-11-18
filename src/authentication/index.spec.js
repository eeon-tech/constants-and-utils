const _ = require('lodash')
const authentication = require('./index')

describe('authentication', () => {
  describe('authenticationMethods', () => {
    it('should have necessary keys', () => {
      expect(
        _.has(authentication.authenticationMethods, 'FACEBOOK')
      ).toBeTruthy()
      expect(_.has(authentication.authenticationMethods, 'GOOGLE')).toBeTruthy()
    })
  })

  describe('isFacebook', () => {
    it('should validate the facebook authentication method', () => {
      expect(
        authentication.isFacebook(authentication.authenticationMethods.FACEBOOK)
      ).toBeTruthy()
    })
  })

  describe('isGoogle', () => {
    it('should validate the google authentication method', () => {
      expect(
        authentication.isGoogle(authentication.authenticationMethods.GOOGLE)
      ).toBeTruthy()
    })
  })
})
