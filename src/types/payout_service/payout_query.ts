export interface Payout_Query_INPUT {
  merchantuniquecode: string
}

export interface Payout_Query_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Payout_Query_Body_RESPONSE
}
export interface Payout_Query_Body_RESPONSE {
  PayoutConnectionId: number
  PayoutProviderKey: string
  PayoutTransactionId: number
  CurrencyId: number
  MerchantUniqueCode: string
  UniqueCode: string
  Amount: number
  Description: string
  ReceiverTitle: string
  ReceiverIban: string
  ReceiverAccountNumber: null | string | number
  ChannelId: number
  Channel: string
  StatusId: number
  Status: string
  TypeId: number
  Type: string
  Ip: string
  DateTime: string
}
