import paywallClient from '../../client'

describe('bin_inquiry', () => {
  it('bin_inquiry', async () => {
    const data = {
      binnumber: '444678'
    }
    const result = await paywallClient.payment.binInquiry(data)
    console.log('result', result)
    // expect(result).toHaveProperty('Result', true)
  })
})
