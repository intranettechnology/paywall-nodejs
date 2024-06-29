import paywallClient from '../../client'

describe('payment_query', () => {
  it('payment_query', async () => {
    const data = {
      merchantuniquecode: '3a995c4e-467c-4dcd-a279-b5f6f6f2cdaf'
    }

    const result = await paywallClient.payment.query(data)
    expect(result).toHaveProperty('Result', true)
  })
})
