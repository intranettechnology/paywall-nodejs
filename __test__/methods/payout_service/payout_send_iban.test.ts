import paywallClient from '../../client'

describe('payout_send_iban', () => {
  it('payout_send_iban', async () => {
    const data = {
      Amount: 1,
      CurrencyId: 1,
      Description: '',
      ReceiverIban: 'TR1111',
      ReceiverTitle: '',
      ReceiverIdentity: '',
      PayoutProviderKey: 'vepara',
      MerchantUniqueCode: ''
    }
    const result = await paywallClient.payout.sendIban(data)
    console.log(result)
  })
})
