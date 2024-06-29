export interface Update_Approve_Payment_INPUT {
  PaymentId: number
}

export interface Update_Approve_Payment_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Update_Approve_Payment_Body_RESPONSE
}
export interface Update_Approve_Payment_Body_RESPONSE {
  Success: Update_Approve_Payment_Body_Success_RESPONSE[]
  Fail: unknown[]
}
export interface Update_Approve_Payment_Body_Success_RESPONSE {
  ProductId: number
}
