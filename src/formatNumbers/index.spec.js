import _ from 'lodash'
import _fp from 'lodash/fp'
import { unformatNiceNumber } from './index'

describe('formatNumbers', () => {
  describe('unformatNiceNumber', () => {
    it('should unformat a percentage', () => {
      expect(unformatNiceNumber('5%')).toEqual(0.05)
      expect(unformatNiceNumber('-10.2%')).toEqual(-0.102)
    })

    it('should unformat a millified number', () => {
      expect(unformatNiceNumber('5M')).toEqual(5000000)
      expect(unformatNiceNumber('10B')).toEqual(10000000000)
    })

    it('should unformat using a custom unformatter', () => {
      expect(
        unformatNiceNumber('10', {
          unformatter: _fp.pipe(_fp.toNumber, (item) => _.divide(item, 100)),
        })
      ).toEqual(0.1)
    })
  })
})
