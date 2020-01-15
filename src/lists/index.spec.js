const lists = require('./index')

describe('lists', () => {
  describe('getScreenableMetricById', () => {
    it('should retrieve an existing metric', () => {
      expect(lists.getScreenableMetricById(lists.forwardPERatio.id)).toEqual(
        lists.forwardPERatio
      )
      expect(lists.getScreenableMetricById(lists.latestPrice.id)).toEqual(
        lists.latestPrice
      )
    })

    it('should handle a non-existing metric id by defaulting to changePercent', () => {
      expect(lists.getScreenableMetricById('nonexistent')).toEqual(
        lists.changePercent
      )
    })
  })
})
