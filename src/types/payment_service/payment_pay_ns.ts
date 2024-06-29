export interface Payment_Pay_NS_INPUT {
  PaymentDetail: Payment_Pay_NS_PaymentDetail_INPUT
  Card: Payment_Pay_NS_Card_INPUT
  Customer: Payment_Pay_NS_Customer_INPUT
  Products?: Payment_Pay_NS_Products_INPUT[]
}

export interface Payment_Pay_NS_PaymentDetail_INPUT {
  Amount: number
  MerchantUniqueCode: string
  CurrencyId: number
  MerchantSuccessBackUrl: string
  MerchantFailBackUrl: string
  Installement: number
  ChannelId: number
  TagId: number
  PayWatch?: PayWatch_INPUT
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
export interface Payment_Pay_NS_Card_INPUT {
  OwnerName: string
  Number: string
  ExpireMonth: string
  ExpireYear: string
  Cvv: string
  UniqueCode?: string
}
export interface Payment_Pay_NS_Customer_INPUT {
  FullName: string
  Phone: string
  Email: string
  Country: string
  City: string
  Address: string
  IdentityNumber: string
  TaxNumber: string
}
export interface Payment_Pay_NS_Products_INPUT {
  ProductId: string
  ProductName: string
  ProductCategory: string
  ProductDescription: string
  ProductAmount: number
  MemberId?: number
}
export interface Payment_Pay_NS_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Payment_Pay_NS_Body_RESPONSE
}

export interface Payment_Pay_NS_Body_RESPONSE {
  Payment: {
    PaymentId: number
    ActivityId: number
    UniqueCode: string
    MerchantUniqueKey: string
    Products?: Payment_Pay_NS_Body_Payment_Response_RESPONSE[]
  } | null
}
export interface Payment_Pay_NS_Body_Payment_Response_RESPONSE {
  Id: number
  MemberId: number
  ProductId: string
  ProductName: string
  ProductCategory: string
  ProductDescription: string
  ProductAmount: number
}
