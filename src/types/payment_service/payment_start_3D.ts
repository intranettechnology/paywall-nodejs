export interface Payment_Start_3D_INPUT {
  PaymentDetail: Payment_Start_3D_PaymentDetail_INPUT
  Card: Payment_Start_3D_CardDetail_INPUT
  Customer: Payment_Start_3D_Customer_INPUT
  Products: Payment_Start_3D_Products_INPUT[]
}

export interface Payment_Start_3D_PaymentDetail_INPUT {
  Amount: number
  MerchantUniqueCode: string
  CurrencyId: number
  MerchantSuccessBackUrl: string
  MerchantFailBackUrl: string
  Installement: number
  ChannelId: number
  TagId: number
  Half3D: boolean
  PayWatch: PayWatch_INPUT
  EndOfTheDay: number
}

interface PayWatch_INPUT {
  Watch: boolean
  WatchMin: number
  ActionId: number
  PaymentStatus: PaymentStatus_INPUT[]
  WebhookAddress?: string
}
 interface PaymentStatus_INPUT {
  Id: number
}

export interface Payment_Start_3D_CardDetail_INPUT {
  OwnerName: string
  Number: string
  ExpireMonth: string
  ExpireYear: string
  Cvv: string
  UniqueCode?: string
}
export interface Payment_Start_3D_Customer_INPUT {
  FullName: string
  Phone: string
  Email: string
  Country: string
  City: string
  Address: string
  IdentityNumber: string
  TaxNumber: string
}
export interface Payment_Start_3D_Products_INPUT {
  ProductId: string
  ProductName: string
  ProductCategory: string
  ProductDescription: string
  ProductAmount: number
  MemberId: number
  DiscountOwnerType: number
  DiscountType: number
  DiscountValue: number
  CargoOwnerType: number
  CargoCurrencyId: number
  CargoCost: number
  MemberCustomCommission: boolean
  MemberCommission: number
}

export interface Payment_Start_3D_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Payment_Start_3D_Body_RESPONSE
}

export interface Payment_Start_3D_Body_RESPONSE {
  Message: string | null
  RedirectUrl: string
  Payment: Payment_Start_3D_Body_Payment_RESPONSE
}
export interface Payment_Start_3D_Body_Payment_RESPONSE {
  PaymentId: number
  ActivityId: number
  UniqueCode: string
  MerchantUniqueKey: string
}
