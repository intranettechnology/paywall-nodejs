export interface User_Search_INPUT {
  memberid?: number
  memberexternalid?: number
}
export interface User_Search_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: null | User_Search_Body_RESPONSE
}

export interface User_Search_Body_RESPONSE {
  Id: number
  IsSubMerchant: boolean
  MemberType: number
  MemberExternalId: string
  MemberName: string
  MemberTitle: string
  MemberTaxOffice: string
  MemberTaxNumber: string
  MemberIdentityNumber: string
  MemberEmail: string
  MemberPhone: string
  MemberAddress: string
  ContactName: string
  ContactLastname: string
  BankAccounts: User_Search_Body_BankAccounts_RESPONSE[]
  ValueDate: User_Search_Body_ValueDate_RESPONSE
  InsertDateTime: string
  UpdateDateTime: string
}

export interface User_Search_Body_BankAccounts_RESPONSE {
  Id: number
  CurrencyId: number
  Currency: string
  Title: string
  Iban: string
}

export interface User_Search_Body_ValueDate_RESPONSE {
  Id: number
  CalculationType: number
  CalculationValue: number
  Commission: number
}
