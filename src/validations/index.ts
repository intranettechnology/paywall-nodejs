/* eslint-disable max-len */
import type Joi from 'joi'
import { type methods } from '../constant/methods'
import {
  Joi_BinInquiry,
  Joi_GetBalanceMain,
  Joi_GetInstallments,
  Joi_GetPayoutBalance,
  Joi_GetReportApproval,
  Joi_GetReportEarningProduct,
  Joi_MemberBankAccount_Delete,
  Joi_MemberBankAccount_Get,
  Joi_MemberBankAccount_Register,
  Joi_MemberBankAccount_Update,
  Joi_MemberManagement_Delete,
  Joi_MemberManagement_Get,
  Joi_MemberManagement_Register,
  Joi_MemberManagement_Search,
  Joi_MemberManagement_Update,
  Joi_MemberValueDate_Get,
  Joi_MemberValueDate_Register,
  Joi_PaymentApprovePayment,
  Joi_PaymentApproveProduct,
  Joi_PaymentCancel,
  Joi_PaymentEnd3D,
  Joi_PaymentPayNS,
  Joi_PaymentQuery,
  Joi_PaymentRefund,
  Joi_PaymentRefundPartial,
  Joi_PaymentRejectPayment,
  Joi_PaymentRejectProduct,
  Joi_PaymentStart3D,
  Joi_PaymentVersionCheck,
  Joi_PayoutQuery,
  Joi_PayoutSendIban,
  Joi_PayoutSendMember,
  Joi_UpdateApprovePayment,
  Joi_UpdateApproveProduct
} from './services'

/* eslint-enable max-len */

type Validations = {
  [Method in (typeof methods)[number]]: Joi.ObjectSchema
}

const MethodValidations: Validations = {
  register_member: Joi_MemberManagement_Register,
  update_member: Joi_MemberManagement_Update,
  delete_member: Joi_MemberManagement_Delete,
  get_member: Joi_MemberManagement_Get,
  search_member: Joi_MemberManagement_Search,
  register_member_bank_account: Joi_MemberBankAccount_Register,
  update_member_bank_account: Joi_MemberBankAccount_Update,
  delete_member_bank_account: Joi_MemberBankAccount_Delete,
  get_member_bank_account: Joi_MemberBankAccount_Get,
  get_member_value_date: Joi_MemberValueDate_Get,
  register_member_value_date: Joi_MemberValueDate_Register,
  payment_version_check: Joi_PaymentVersionCheck,
  payment_pay_NS: Joi_PaymentPayNS,
  payment_start_3D: Joi_PaymentStart3D,
  payment_end_3D: Joi_PaymentEnd3D,
  get_installments: Joi_GetInstallments,
  bin_inquiry: Joi_BinInquiry,
  payment_refund: Joi_PaymentRefund,
  payment_refund_partial: Joi_PaymentRefundPartial,
  payment_cancel: Joi_PaymentCancel,
  payment_query: Joi_PaymentQuery,
  payment_approve_product: Joi_PaymentApproveProduct,
  payment_approve_payment: Joi_PaymentApprovePayment,
  payment_reject_product: Joi_PaymentRejectProduct,
  payment_reject_payment: Joi_PaymentRejectPayment,
  update_approve_product: Joi_UpdateApproveProduct,
  update_approve_payment: Joi_UpdateApprovePayment,
  get_report_approval: Joi_GetReportApproval,
  get_report_earning_product: Joi_GetReportEarningProduct,
  get_report_earning_payment: Joi_MemberManagement_Register,
  get_payout_balance: Joi_GetPayoutBalance,
  get_balance_main: Joi_GetBalanceMain,
  payout_send_iban: Joi_PayoutSendIban,
  payout_send_member: Joi_PayoutSendMember,
  payout_query: Joi_PayoutQuery
}

export { MethodValidations }
