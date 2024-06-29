import paywallClient from '../../client'

describe('payment_version_check', () => {
  it('payment_version_check', async () => {
    const result = await paywallClient.payment.checkVersion({})
    expect(result).toHaveProperty('Result', true)
  })
})
