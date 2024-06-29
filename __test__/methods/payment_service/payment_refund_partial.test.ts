import paywallClient from '../../client'

describe('payment_refund_partial', () => {
  it('payment_refund_partial', async () => {
    const data = {
      Date: '2023-09-21',
      MerchantUniqueCode: '3a995c4e-467c-4dcd-a279-b5f6f6f2cdaf',
      Amount: 1
    }

    const result = await paywallClient.payment.refundPartial(data)
    expect(result).toHaveProperty('Result', true)
  })
})
