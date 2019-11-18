const jobs = require('./index')

describe('jobs', () => {
  describe('cleanPeriods', () => {
    it('should remain consistent', () => {
      expect(jobs.cleanPeriods).toMatchSnapshot()
    })
  })

  describe('timezone', () => {
    it('should remain consistent', () => {
      expect(jobs.timezone).toMatchSnapshot()
    })
  })

  describe('queueNames', () => {
    it('should remain consistent', () => {
      expect(jobs.queueNames).toMatchSnapshot()
    })
  })
})
