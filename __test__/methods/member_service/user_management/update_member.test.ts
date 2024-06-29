import paywallClient from '../../../client'

describe('register_member', () => {
  it('register member to paywall', async () => {
    const data = {
      Id: 1,
      IsSubMerchant: true,
      MemberType: 1,
      MemberExternalId: '11111211aa111',
      MemberName: 'Intranet Technology',
      MemberTitle: 'Intranet Technology Yazılım A.S',
      MemberTaxOffice: 'Besiktas',
      MemberTaxNumber: '4651176935',
      MemberIdentityNumber: '38350370122',
      MemberEmail: 'member2@paywall.one',
      MemberPhone: '5554443311',
      MemberAddress: 'test adresi',
      ContactName: 'MemberName',
      ContactLastname: 'Lastname'
    }
    const result = await paywallClient.member.update(data)
    expect(result).toHaveProperty('Result', true)
  })
})
