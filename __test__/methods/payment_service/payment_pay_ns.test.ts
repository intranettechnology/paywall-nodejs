import paywallClient from '../../client'

describe('payment_pay_ns', () => {
  it('payment_pay_ns', async () => {
    const data = {
      PaymentDetail: {
        Amount: 1.0,
        MerchantUniqueCode: paywallClient.helpers.generateRandomGUID(),
        CurrencyId: 1,
        MerchantSuccessBackUrl: 'https://www.google.com.tr/search?q=basarili',
        MerchantFailBackUrl: 'https://www.google.com.tr/search?q=basarisiz',
        Installement: 1,
        ChannelId: 0,
        TagId: 0,
        EndOfTheDay: 1
      },
      Card: {
        OwnerName: 'Param Test Kartı',
        Number: '4446763125813623',
        ExpireMonth: '12',
        ExpireYear: '2026',
        Cvv: '000',
        UniqueCode: ''
      },
      Customer: {
        FullName: 'FullName',
        Phone: '5336662211',
        Email: 'enes@xcompany.com',
        Country: 'Country',
        City: 'City',
        Address: 'Address',
        IdentityNumber: 'IdentityNumber',
        TaxNumber: 'TaxNumber'
      },
      Products: [
        {
          ProductId: '1',
          ProductName: 'ProductName',
          ProductCategory: 'ProductCategory',
          ProductDescription: 'ProductDescription',
          ProductAmount: 1.0,
          MemberId: 999
        }
      ]
    }
    const result = await paywallClient.payment.startDirect(data)
    console.log('result', JSON.stringify(result, null, 2))
  })
})
