import paywallClient from '../../../client'

describe('get_member', () => {
  it('register member to paywall', async () => {
    const data = {
      start: 1,
      length: 10
    }
    const result = await paywallClient.member.get(data)
    expect(result).toHaveProperty('Result', true)
  })
})
