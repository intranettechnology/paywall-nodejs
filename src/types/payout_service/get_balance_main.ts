export interface Get_Balance_Main_INPUT {
  currencyid: number
}

export interface Get_Balance_Main_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Get_Balance_Main_Body_RESPONSE
}
export interface Get_Balance_Main_Body_RESPONSE {
  Balances: Get_Balance_Main_Body_Balances_RESPONSE[]
  ProviderDump: string
  ProviderHttpStatus: number
  ProviderConnectedId: number
  ProviderId: number
  ProviderKey: string
  CurrencyId: number
}
export interface Get_Balance_Main_Body_Balances_RESPONSE {
  TotalBalance: number
  LockedBalance: number
  AvailableBalance: number
}
