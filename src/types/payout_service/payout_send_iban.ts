export interface Payout_Send_Iban_INPUT {
  PayoutProviderKey: string
  MerchantUniqueCode: string
  ReceiverTitle: string
  ReceiverIban: string
  ReceiverIdentity: string
  Description: string
  Amount: number
  CurrencyId: number
  MerchantGroupCode?: string
  CallbackSupport?: boolean
  CallbackAddress?: string
}

export interface Payout_Send_Iban_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Payout_Send_Iban_Body_RESPONSE
}
export interface Payout_Send_Iban_Body_RESPONSE {
  Result: boolean
  PayoutTransactionId: number
  MerchantUniqueCode: string
  UniqueCode: string
  Amount: number
}
