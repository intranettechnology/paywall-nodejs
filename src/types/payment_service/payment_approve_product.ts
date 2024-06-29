export interface Payment_Approve_Product_INPUT {
  ProductIds: number[]
}

export interface Payment_Approve_Product_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Payment_Approve_Product_Body_RESPONSE
}
export interface Payment_Approve_Product_Body_RESPONSE {
  Success: Payment_Approve_Product_Body_Success_RESPONSE[]
  Fail: unknown[]
}
export interface Payment_Approve_Product_Body_Success_RESPONSE {
  ProductId: number
}
