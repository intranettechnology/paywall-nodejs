export interface Get_Member_Value_Date_INPUT {
  memberid: number
}

export interface Get_Member_Value_Date_RESPONSE {
  ErrorCode: number
  Result: boolean
  Message: string
  Body: Get_Member_Value_Date_Body_RESPONSE
}

export interface Get_Member_Value_Date_Body_RESPONSE {
  Id: number
  CalculationType: number
  CalculationValue: number
  Commission: number
}
