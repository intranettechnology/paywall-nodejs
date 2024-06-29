export interface Payout_Send_Member_INPUT {
  PayoutProviderKey: string
  MerchantUniqueCode: string
  MemberId: number
  Description: string
  Amount: number
  CurrencyId: number
}

export interface Payout_Send_Member_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Payout_Send_Member_Body_RESPONSE
}
export interface Payout_Send_Member_Body_RESPONSE {
  Result: boolean
  PayoutTransactionId: number
  MerchantUniqueCode: string
  UniqueCode: string
  Amount: number
}
