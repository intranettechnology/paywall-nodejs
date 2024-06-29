import paywallClient from '../../client'

describe('get_installments', () => {
  it('get_installments', async () => {
    const data = {
      currencyid: 1,
      amount: 500,
      distinctduplicates: false
    }

    const result = await paywallClient.payment.getInstallments(data)
    console.log(result.Body[0].Option)
    expect(result).toHaveProperty('Result', true)
  })
})
