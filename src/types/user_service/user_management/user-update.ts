export interface User_Update_INPUT {
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
}
export interface User_Update_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: null | User_Update_Body_RESPONSE
}

export interface User_Update_Body_RESPONSE {
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
