export interface Payment_Query_INPUT {
  merchantuniquecode: string
}

export interface Payment_Query_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Payment_Query_Body_RESPONSE
}

export interface Payment_Query_Body_RESPONSE {
  Paywall: {
    PaymentId: number
    ActivityId: number
    Status: true
    StatusName: string
    StatusId: number
    TypeName: string
    TypeId: number
    Installment: number
    CurrencyId: number
    CurrencyName: string
    PaymentMethodId: number
    PaymentMethodName: null | string
    PaymentChannelId: number
    PaymentChannelName: null | string
    PaymentTagId: number
    PaymentTagName: null | string
    CardNumber: string
    CardOwnerName: string
    CardBankName: string
    CardBrandName: string
    CardTypeName: string
    CardFamilyName: string
    LastActivityDateTime: string
    PaymentAmount: number
    ActivityAmount: number
    IP: string
  }
}
