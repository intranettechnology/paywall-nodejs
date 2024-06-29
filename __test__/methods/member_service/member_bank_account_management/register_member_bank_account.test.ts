import paywallClient from '../../../client'

describe('register_member_bank_account', () => {
  it('register member to paywall', async () => {
    const data = {
      MemberId: 14,
      CurrencyId: 3,
      Title: 'MemberName Lastname',
      Iban: 'TR370006400000123456789876'
    }
    const result = await paywallClient.member.registerBankAccount(data)
    expect(result).toHaveProperty('Result', true)
  })
})
