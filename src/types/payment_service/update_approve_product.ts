export interface Update_Approve_Product_INPUT {
  ProductIds: number[]
}

export interface Update_Approve_Product_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Update_Approve_Product_Body_RESPONSE
}
export interface Update_Approve_Product_Body_RESPONSE {
  Success: Update_Approve_Product_Body_Success_RESPONSE[]
  Fail: Update_Approve_Product_Body_Fail_RESPONSE[]
}
export interface Update_Approve_Product_Body_Success_RESPONSE {
  ProductId: number
}
export interface Update_Approve_Product_Body_Fail_RESPONSE {
  ProductId: number
  Reason: string
}
