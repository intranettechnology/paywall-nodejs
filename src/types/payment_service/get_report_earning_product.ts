export interface Get_Report_Earning_Product_INPUT {
  paymentid: number
}

export interface Get_Report_Earning_Product_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Get_Report_Earning_Product_Body_RESPONSE[]
}
export interface Get_Report_Earning_Product_Body_RESPONSE {
  Id: number
  MemberId: number
  ProductId: boolean
  ProductName: string
  ProductCategory: string
  ProductDescription: string
  ProductAmount: number
  IsMarketPlaceSales: true
  Cargo: Get_Report_Earning_Product_Body__Cargo_RESPONSE
  Discount: Get_Report_Earning_Product_Body__Discount_RESPONSE
}
export interface Get_Report_Earning_Product_Body__Cargo_RESPONSE {
  CurrencyId: number
  CargoOwnerType: number
  CargoCost: number
}
export interface Get_Report_Earning_Product_Body__Discount_RESPONSE {
  DiscountOwnerType: number
  DiscountType: number
  DiscountValue: number
}
