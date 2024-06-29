import paywallClient from '../../client'

describe('payout_send_member', () => {
  it('payout_send_member', async () => {
    const data = {
      PayoutProviderKey: 'Papara',
      MerchantUniqueCode: '42222',
      MemberId: 209021,
      Description: 'test açıklaması',
      Amount: 1,
      CurrencyId: 1
    }

    const result = await paywallClient.payout.sendMember(data)
    expect(result).toHaveProperty('Result', true)
  })
})
