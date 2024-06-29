import paywallClient from '../../client'

describe('get_report_approval', () => {
  it('get_report_approval', async () => {
    const data = {
      paymentid: 150
    }

    const result = await paywallClient.public_key.get_report_approval(data)
    expect(result).toHaveProperty('Result', true)
  })
})
