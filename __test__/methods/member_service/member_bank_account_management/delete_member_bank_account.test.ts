import paywallClient from '../../../client'

describe('delete_member_bank_account', () => {
  it('delete member to paywall', async () => {
    const data = {
      Id: 14
    }
    const result = await paywallClient.member.deleteBankAccount(data)
    expect(result).toHaveProperty('Result', true)
  })
})
