export interface User_Register_INPUT {
  IsSubMerchant: boolean
  MemberType?: number
  MemberExternalId: string
  MemberName: string
  MemberTitle: string
  MemberTaxOffice?: string
  MemberTaxNumber?: string
  MemberIdentityNumber: string
  MemberEmail: string
  MemberPhone: string
  MemberAddress: string
  ContactName: string
  ContactLastname: string
  BankAccounts?: User_Register_BankAccounts_INPUT[]
  ValueDate?: User_Register_ValueDate_INPUT
  SkipIdentityExistCheck?: boolean
}

export interface User_Register_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: User_Register_Body_RESPONSE | null
}

export interface User_Register_BankAccounts_INPUT {
  CurrencyId: number
  Title: string
  Iban: string
}

export interface User_Register_ValueDate_INPUT {
  CalculationType: number
  CalculationValue: number
  Commission: number
}

export interface User_Register_Body_RESPONSE {
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
  InsertDateTime: string
}
