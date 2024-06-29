export interface Payment_Approve_Payment_INPUT {
  PaymentId: number
}

export interface Payment_Approve_Payment_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Payment_Approve_Payment_Body_RESPONSE
}
export interface Payment_Approve_Payment_Body_RESPONSE {
  Success: Payment_Approve_Payment_Body_Success_RESPONSE[]
  Fail: unknown[]
}
export interface Payment_Approve_Payment_Body_Success_RESPONSE {
  ProductId: number
}
