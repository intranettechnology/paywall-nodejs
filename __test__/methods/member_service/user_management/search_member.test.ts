import paywallClient from '../../../client'

describe('search_member', () => {
  it('register member to paywall', async () => {
    const data = {
      memberid: 1
    }
    const result = await paywallClient.member.search(data)
    expect(result).toHaveProperty('Result', true)
  })
})
