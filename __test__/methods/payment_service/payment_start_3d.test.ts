import paywallClient from '../../client'

describe('payment_start_3d', () => {
  it('payment_start_3d', async () => {
    const data = {
      PaymentDetail: {
        Amount: 9.85,
        MerchantUniqueCode: paywallClient.helpers.generateRandomGUID(),
        CurrencyId: 1,
        MerchantSuccessBackUrl: 'https://merchantsite.site.com/success',
        MerchantFailBackUrl: 'https://merchantsite.site.com/fail',
        Installement: 1,
        ChannelId: 0,
        TagId: 0,
        Half3D: false,
        EndOfTheDay: 3,
        PayWatch: {
          Watch: true,
          WatchMin: 5,
          ActionId: 3,
          PaymentStatus: [{ Id: 2 }, { Id: 5 }],
          WebhookAddress: ''
        }
      },
      Card: {
        OwnerName: `Param Test Kartı 123 !@#$%^&*()_+=[]{};':\"\\|,.<>/?1234567890`,
        Number: '4446763125813623',
        ExpireMonth: '12',
        ExpireYear: '2026',
        Cvv: '000',
        UniqueCode: ''
      },
      Customer: {
        FullName: 'test adem',
        Phone: '5313359549',
        Email: 'enes@xcompany.com',
        Country: 'Country',
        City: 'City',
        Address: 'Address',
        IdentityNumber: 'IdentityNumber',
        TaxNumber: 'TaxNumber'
      },
      Products: [
        {
          ProductId: 'ProductId',
          ProductName: 'ProductName',
          ProductCategory: 'ProductCategory',
          ProductDescription: 'ProductDescription',
          ProductAmount: 9.85,
          MemberId: 210, // Sadece MarketPlace modelinde kullanılır
          DiscountOwnerType: 0,
          DiscountType: 0,
          DiscountValue: 0,
          CargoOwnerType: 0,
          CargoCurrencyId: 0,
          CargoCost: 0,
          MemberCustomCommission: false,
          MemberCommission: 1.1 // Yüzde değeri alır ve yukardaki değer TRUE ise bu değer çalışır
        }
      ]
    }

    const result = await paywallClient.public_key.payment_start_3D(data)
    console.log('result', result)
    // expect(result).toHaveProperty('Result', true)
  })
})
