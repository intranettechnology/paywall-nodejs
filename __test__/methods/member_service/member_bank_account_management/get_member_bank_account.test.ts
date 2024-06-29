import paywallClient from '../../../client'

describe('get_member_bank_account', () => {
  it('get member to paywall', async () => {
    const data = {
      memberid: 1
    }
    const result = await paywallClient.member.getBankAccount(data)
    expect(result).toHaveProperty('Result', true)
  })
})
