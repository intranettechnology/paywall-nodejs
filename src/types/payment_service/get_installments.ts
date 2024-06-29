export interface Get_Installments_INPUT {
  currencyid: number
  amount: number
  binnumber?: string
  distinctduplicates: boolean
}

export interface Get_Installments_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Get_Installments_Body_RESPONSE[]
}
export interface Get_Installments_Body_RESPONSE {
  CardBank?: string
  CardBrand?: string
  CardFamily: string
  CardFamilyId?: number
  CardKind?: string
  CardType?: string
  Options?: Get_Installments_Body_Options_RESPONSE[]
  Option?: Get_Installments_Body_Options_RESPONSE[]
}
export interface Get_Installments_Body_Options_RESPONSE {
  Installment: number
  Commission: number
  Interest: number
  RawAmount: number
  InterestAmount: number
}
