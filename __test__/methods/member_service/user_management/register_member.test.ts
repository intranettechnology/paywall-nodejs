import paywallClient from '../../../client'

describe('register_member', () => {
  it('register member to paywall', async () => {
    const data = {
      IsSubMerchant: true,
      MemberType: 2,
      MemberExternalId: '6111122a181555522444',
      MemberName: 'dtSanalPOS Test',
      MemberTitle: 'Intr1anet Tagwechnology Yazılıma A.S',
      MemberTaxOffice: 'Besiktaas',
      MemberTaxNumber: '4651176944',
      MemberIdentityNumber: '18811406874',
      MemberEmail: 'mem1ber@paywall.one',
      MemberPhone: '5313359549',
      MemberAddress: 'test adresi',
      ContactName: 'Member Namea',
      ContactLastname: 'Lastname',
      BankAccounts: [
        {
          CurrencyId: 1,
          Title: 'Ünvan',
          Iban: 'TR170001500158007313358772'
        }
      ],
      ValueDate: {
        CalculationType: 1,
        CalculationValue: 10,
        Commission: 10
      }
    }
    const result = await paywallClient.member.register(data)
    console.log(result)
    // expect(result).toHaveProperty('Result', false)
  })
})
