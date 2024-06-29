import { randomUUID } from 'crypto'
import {
  PRODUCTION_ENDPOINTS,
  TEST_ENDPOINTS,
  methods,
  setHeaderMethods
} from './constant'
import { PaywallRouteServices } from './method-routes'
import {
  Bin_Inquiry_INPUT,
  Bin_Inquiry_RESPONSE,
  DEFAULT_SERVICE_RESPONSE,
  Delete_Member_Bank_Account_INPUT,
  ENVIRONMENT_TYPES,
  Get_Balance_Main_INPUT,
  Get_Balance_Main_RESPONSE,
  Get_Installments_INPUT,
  Get_Installments_RESPONSE,
  Get_Member_Bank_Account_INPUT,
  Get_Member_Value_Date_INPUT,
  Get_Member_Value_Date_RESPONSE,
  Get_Payout_Balance_INPUT,
  Get_Payout_Balance_RESPONSE,
  ISERVICE_HEADER,
  Payment_Cancel_INPUT,
  Payment_End_3D_INPUT,
  Payment_Pay_NS_INPUT,
  Payment_Pay_NS_RESPONSE,
  Payment_Query_INPUT,
  Payment_Query_RESPONSE,
  Payment_Refund_INPUT,
  Payment_Refund_Partial_INPUT,
  Payment_Start_3D_INPUT,
  Payment_Start_3D_RESPONSE,
  Payment_Version_Check_INPUT,
  Payment_Version_Check_RESPONSE,
  Payout_Query_INPUT,
  Payout_Query_RESPONSE,
  Payout_Send_Iban_INPUT,
  Payout_Send_Iban_RESPONSE,
  Payout_Send_Member_INPUT,
  Payout_Send_Member_RESPONSE,
  Register_Member_Bank_Account_INPUT,
  Register_Member_Value_Date_INPUT,
  Update_Member_Bank_Account_INPUT,
  User_Delete_INPUT,
  User_Get_INPUT,
  User_Get_RESPONSE,
  User_Register_INPUT,
  User_Register_RESPONSE,
  User_Search_INPUT,
  User_Search_RESPONSE
} from './types'
import { sendRequest } from './utils/send-request'
import { MethodValidations } from './validations'
export class PaywallClient {
  private readonly PUBLIC_CLIENT: string
  private readonly PUBLIC_KEY: string
  private readonly PRIVATE_CLIENT: string
  private readonly PRIVATE_KEY: string
  private readonly ENVIRONMENT: ENVIRONMENT_TYPES

  constructor(props: {
    PUBLIC_CLIENT: string
    PUBLIC_KEY: string
    PRIVATE_CLIENT: string
    PRIVATE_KEY: string
    ENVIRONMENT: ENVIRONMENT_TYPES
  }) {
    this.PUBLIC_CLIENT = props.PUBLIC_CLIENT
    this.PUBLIC_KEY = props.PUBLIC_KEY
    this.PRIVATE_CLIENT = props.PRIVATE_CLIENT
    this.PRIVATE_KEY = props.PRIVATE_KEY
    this.ENVIRONMENT = props.ENVIRONMENT
  }

  private readonly genericMethod = async <T extends Record<string, any>, R>(
    method: (typeof methods)[number],
    type: 'private' | 'public',
    inputs: T
  ): Promise<R> => {
    const urlStart =
      this.ENVIRONMENT === 'prod' ? PRODUCTION_ENDPOINTS : TEST_ENDPOINTS

    const urlEnd = PaywallRouteServices[method].url
    const apiType = PaywallRouteServices[method].api_type
    const url = urlStart[apiType] + urlEnd

    let header: ISERVICE_HEADER = {
      apikeypublic: this.PUBLIC_KEY,
      apiclientpublic: this.PUBLIC_CLIENT
    }

    if (type === 'private') {
      header = {
        apikeyprivate: this.PRIVATE_KEY,
        apiclientprivate: this.PRIVATE_CLIENT
      }
    }

    if (setHeaderMethods.indexOf(method) !== -1)
      header = { ...header, ...inputs }

    const validation = MethodValidations[method]
    if (validation) {
      const { value, error } = validation.validate(inputs)
      if (!!error) {
        return {
          ErrorCode: '-1',
          Message: 'Validation Error: ' + error.details[0].message
        } as R
      }
      inputs = value
    }

    const requestMethod = PaywallRouteServices[method].method
    const response = await sendRequest(url, inputs, header, requestMethod)

    if (response.name === 'PaywallServerError') {
      return {
        ErrorCode: `${response.code}`,
        Message: `${response.message}`
      } as R
    }

    return response.data
  }

  private readonly generateDynamicMethod = <
    TInput extends Record<string, any>,
    TOutput
  >(
    methodName: (typeof methods)[number],
    type: 'private' | 'public' = 'public'
  ) => {
    return async (inputs: TInput): Promise<TOutput> => {
      const data = await this.genericMethod<TInput, TOutput>(
        methodName,
        type,
        inputs
      )
      return data
    }
  }

  member = {
    register: this.generateDynamicMethod<
      User_Register_INPUT,
      User_Register_RESPONSE
    >('register_member'),
    update: this.generateDynamicMethod<
      User_Register_INPUT,
      User_Register_RESPONSE
    >('update_member'),
    delete: this.generateDynamicMethod<
      User_Delete_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('delete_member'),
    get: this.generateDynamicMethod<User_Get_INPUT, User_Get_RESPONSE>(
      'get_member'
    ),
    search: this.generateDynamicMethod<User_Search_INPUT, User_Search_RESPONSE>(
      'search_member'
    ),
    registerBankAccount: this.generateDynamicMethod<
      Register_Member_Bank_Account_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('register_member_bank_account'),
    updateBankAccount: this.generateDynamicMethod<
      Update_Member_Bank_Account_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('update_member_bank_account'),
    deleteBankAccount: this.generateDynamicMethod<
      Delete_Member_Bank_Account_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('delete_member_bank_account'),
    getBankAccount: this.generateDynamicMethod<
      Get_Member_Bank_Account_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('get_member_bank_account'),
    getValorComission: this.generateDynamicMethod<
      Get_Member_Value_Date_INPUT,
      Get_Member_Value_Date_RESPONSE
    >('get_member_value_date'),
    setValorComission: this.generateDynamicMethod<
      Register_Member_Value_Date_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('register_member_value_date')
  }

  payment = {
    checkVersion: this.generateDynamicMethod<
      Payment_Version_Check_INPUT,
      Payment_Version_Check_RESPONSE
    >('payment_version_check'),
    startDirect: this.generateDynamicMethod<
      Payment_Pay_NS_INPUT,
      Payment_Pay_NS_RESPONSE
    >('payment_pay_NS'),
    start3D: this.generateDynamicMethod<
      Payment_Start_3D_INPUT,
      Payment_Start_3D_RESPONSE
    >('payment_start_3D'),
    end3D: this.generateDynamicMethod<
      Payment_End_3D_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('payment_end_3D'),
    getInstallments: this.generateDynamicMethod<
      Get_Installments_INPUT,
      Get_Installments_RESPONSE
    >('get_installments'),
    binInquiry: this.generateDynamicMethod<
      Bin_Inquiry_INPUT,
      Bin_Inquiry_RESPONSE
    >('bin_inquiry'),
    refund: this.generateDynamicMethod<
      Payment_Refund_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('payment_refund', 'private'),
    refundPartial: this.generateDynamicMethod<
      Payment_Refund_Partial_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('payment_refund_partial', 'private'),
    cancel: this.generateDynamicMethod<
      Payment_Cancel_INPUT,
      DEFAULT_SERVICE_RESPONSE
    >('payment_cancel', 'private'),
    query: this.generateDynamicMethod<
      Payment_Query_INPUT,
      Payment_Query_RESPONSE
    >('payment_query', 'private')
  }

  payout = {
    getBalance: this.generateDynamicMethod<
      Get_Payout_Balance_INPUT,
      Get_Payout_Balance_RESPONSE
    >('get_payout_balance', 'private'),
    getMainBalance: this.generateDynamicMethod<
      Get_Balance_Main_INPUT,
      Get_Balance_Main_RESPONSE
    >('get_balance_main', 'private'),
    sendIban: this.generateDynamicMethod<
      Payout_Send_Iban_INPUT,
      Payout_Send_Iban_RESPONSE
    >('payout_send_iban', 'private'),
    sendMember: this.generateDynamicMethod<
      Payout_Send_Member_INPUT,
      Payout_Send_Member_RESPONSE
    >('payout_send_member', 'private'),
    query: this.generateDynamicMethod<
      Payout_Query_INPUT,
      Payout_Query_RESPONSE
    >('payout_query', 'private')
  }

  helpers = {
    generateRandomGUID: (): string => {
      return randomUUID()
    }
  }
}

export default PaywallClient
