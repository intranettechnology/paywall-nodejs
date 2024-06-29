import paywallClient from '../../../client'

describe('update_member_bank_account', () => {
  it('update member to paywall', async () => {
    const data = {
      Id: 14,
      CurrencyId: 3,
      Title: 'MemberName Lastname',
      Iban: 'TR370006400000123456789876'
    }
    const result = await paywallClient.member.updateBankAccount(data)
    expect(result).toHaveProperty('Result', true)
  })
})
