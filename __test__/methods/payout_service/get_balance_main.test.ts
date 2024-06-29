import paywallClient from '../../client'

describe('get_balance_main', () => {
  it('get_balance_main', async () => {
    const data = {
      currencyid: 1
    }

    const result = await paywallClient.payout.getMainBalance(data)
    expect(result).toHaveProperty('Result', true)
  })
})
