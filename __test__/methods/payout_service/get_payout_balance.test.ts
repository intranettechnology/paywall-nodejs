import paywallClient from '../../client'

describe('get_payout_balance', () => {
  it('get_payout_balance', async () => {
    const data = {
      payoutconnectionid: 14
    }

    const result = await paywallClient.payout.getBalance(data)
    expect(result).toHaveProperty('Result', true)
  })
})
