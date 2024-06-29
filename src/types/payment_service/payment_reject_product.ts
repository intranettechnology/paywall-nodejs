export interface Payment_Reject_Product_INPUT {
  ProductIds: number[]
}

export interface Payment_Reject_Product_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Payment_Reject_Product_Body_RESPONSE
}
export interface Payment_Reject_Product_Body_RESPONSE {
  Success: Payment_Reject_Product_Body_Success_RESPONSE[]
  Fail: Payment_Reject_Product_Body_Fail_RESPONSE[]
}
export interface Payment_Reject_Product_Body_Success_RESPONSE {
  ProductId: number
}
export interface Payment_Reject_Product_Body_Fail_RESPONSE {
  ProductId: number
  Reason: string
}
