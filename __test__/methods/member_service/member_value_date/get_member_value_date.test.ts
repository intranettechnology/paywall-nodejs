import paywallClient from '../../../client'

describe('get_member_value_date', () => {
  it('get member to paywall', async () => {
    const data = {
      memberid: 1
    }
    const result = await paywallClient.member.getValorComission(data)
    expect(result).toHaveProperty('Result', true)
  })
})
