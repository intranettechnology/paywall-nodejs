export interface Bin_Inquiry_INPUT {
  binnumber: string
}

export interface Bin_Inquiry_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Bin_Inquiry_Body_RESPONSE
}
export interface Bin_Inquiry_Body_RESPONSE {
  BinNumber: string
  CardBank: string
  CardBrand: string
  CardFamily: string
  CardKind: string
  CardType: string
}
