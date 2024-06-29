import paywallClient from '../../client'

describe('payment_end_3d', () => {
  it('payment_end_3d', async () => {
    const data = {
      MerchantUniqueCode: 'aaa'
    }

    const result = await paywallClient.payment.end3D(data)
    console.log('result', result)
    // expect(result).toHaveProperty('Result', true)
  })
})
