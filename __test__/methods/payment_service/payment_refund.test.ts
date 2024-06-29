import paywallClient from '../../client'

describe('payment_refund', () => {
  it('payment_refund', async () => {
    const data = {
      Date: '2023-09-21',
      MerchantUniqueCode: '3a995c4e-467c-4dcd-a279-b5f6f6f2cdaf'
    }

    const result = await paywallClient.payment.refund(data)
    expect(result).toHaveProperty('Result', true)
  })
})
