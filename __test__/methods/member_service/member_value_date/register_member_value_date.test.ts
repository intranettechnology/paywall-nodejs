import paywallClient from '../../../client'

describe('register_member_value_date', () => {
  it('register member to paywall', async () => {
    const data = {
      MemberId: 14,
      CalculationType: 2, // ADayOfWeek - Haftanın bir günü
      CalculationValue: 4, // Haftanın Perşembe günü
      Commission: 10 // Uygulanacak komisyon
    }
    const result = await paywallClient.member.setValorComission(data)
    expect(result).toHaveProperty('Result', true)
  })
})
