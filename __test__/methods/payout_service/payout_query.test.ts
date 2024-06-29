import paywallClient from '../../client'

describe('payout_query', () => {
  it('payout_query', async () => {
    const data = {
      merchantuniquecode: '3a995c4e-467c-4dcd-a279-b5f6f6f2cdaf'
    }

    const result = await paywallClient.payout.query(data)
    console.log(result)
    expect(result).toHaveProperty('Result', true)
  })
})
