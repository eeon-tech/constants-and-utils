const lists = require('./index')

describe('lists', () => {
  describe('getHeatmapOrdersMetricById', () => {
    it('should retrieve an existing metric', () => {
      expect(lists.getHeatmapOrdersMetricById(lists.forwardPERatio.id)).toEqual(
        lists.forwardPERatio
      )
      expect(lists.getHeatmapOrdersMetricById(lists.latestPrice.id)).toEqual(
        lists.latestPrice
      )
    })

    it('should handle a non-existing metric id by defaulting to changePercent', () => {
      expect(lists.getHeatmapOrdersMetricById('nonexistent')).toEqual(
        lists.changePercent
      )
    })
  })
})
