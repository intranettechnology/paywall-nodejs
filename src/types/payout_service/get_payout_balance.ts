export interface Get_Payout_Balance_INPUT {
  payoutconnectionid: number
}

export interface Get_Payout_Balance_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Get_Payout_Balance_Body_RESPONSE
}
export interface Get_Payout_Balance_Body_RESPONSE {
  Balances: Get_Payout_Balance_Body_Balances_RESPONSE[]
  ProviderDump: string
  ProviderHttpStatus: number
  ProviderConnectedId: number
  ProviderId: number
  ProviderKey: string
  CurrencyId: number
}
export interface Get_Payout_Balance_Body_Balances_RESPONSE {
  TotalBalance: number
  LockedBalance: number
  AvailableBalance: number
}
