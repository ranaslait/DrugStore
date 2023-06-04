const isBlacklisted = require('./blacklist')

describe('blacklist', () => {
  it('returns false if not blacklisted', async () => {
    const response = await isBlacklisted('example.com')

    expect(response).toBe(false)
  })

  xit('returns true if blacklisted', async () => {
    const response = await isBlacklisted('localhost')

    expect(response).toBe(true)
  })
})