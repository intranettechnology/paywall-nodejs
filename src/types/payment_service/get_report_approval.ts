export interface Get_Report_Approval_INPUT {
  paymentid: number
}

export interface Get_Report_Approval_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Get_Report_Approval_Body_RESPONSE[]
}
export interface Get_Report_Approval_Body_RESPONSE {
  Approved: unknown[]
  NotApproved: Get_Report_Approval_Body_NotApproved_RESPONSE[]
}
export interface Get_Report_Approval_Body_NotApproved_RESPONSE {
  ProductId: number
}
