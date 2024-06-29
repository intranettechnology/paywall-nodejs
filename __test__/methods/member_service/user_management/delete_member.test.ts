import paywallClient from '../../../client'

describe('delete_member', () => {
  it('register member to paywall', async () => {
    const data = {
      Id: 1
    }
    const result = await paywallClient.member.delete(data)
    expect(result).toHaveProperty('Result', true)
  })
})
