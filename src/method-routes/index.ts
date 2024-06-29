import { ISERVICE_TYPES } from '../types'

interface PaywallRouteServices {
  [service_name: string]: ISERVICE_TYPES
}

export const PaywallRouteServices: PaywallRouteServices = {
  register_member: {
    service: 'payment_register',
    url: 'api/paywall/member',
    method: 'POST',
    type: 'public',
    api_type: 'MemberAPI'
  },
  update_member: {
    service: 'update_member',
    url: 'api/paywall/member',
    method: 'PUT',
    type: 'public',
    api_type: 'MemberAPI'
  },
  delete_member: {
    service: 'delete_member',
    url: 'api/paywall/member',
    method: 'DELETE',
    type: 'public',
    api_type: 'MemberAPI'
  },
  get_member: {
    service: 'get_member',
    url: 'api/paywall/member',
    method: 'GET',
    type: 'public',
    api_type: 'MemberAPI'
  },
  search_member: {
    service: 'search_member',
    url: 'api/paywall/member/search',
    method: 'GET',
    type: 'public',
    api_type: 'MemberAPI'
  },
  register_member_bank_account: {
    service: 'register_member_bank_account',
    url: 'api/paywall/member/bankaccount',
    method: 'POST',
    type: 'public',
    api_type: 'MemberAPI'
  },
  update_member_bank_account: {
    service: 'update_member_bank_account',
    url: 'api/paywall/member/bankaccount',
    method: 'PUT',
    type: 'public',
    api_type: 'MemberAPI'
  },
  delete_member_bank_account: {
    service: 'delete_member_bank_account',
    url: 'api/paywall/member/bankaccount',
    method: 'DELETE',
    type: 'public',
    api_type: 'MemberAPI'
  },
  get_member_bank_account: {
    service: 'get_member_bank_account',
    url: 'api/paywall/member/bankaccount',
    method: 'GET',
    type: 'public',
    api_type: 'MemberAPI'
  },
  get_member_value_date: {
    service: 'get_member_value_date',
    url: 'api/paywall/member/valuedate',
    method: 'GET',
    type: 'public',
    api_type: 'MemberAPI'
  },
  register_member_value_date: {
    service: 'register_member_value_date',
    url: 'api/paywall/member/valuedate',
    method: 'POST',
    type: 'public',
    api_type: 'MemberAPI'
  },
  payment_version_check: {
    service: 'payment_version_check',
    url: 'api/paywall/payment/version',
    method: 'GET',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  payment_pay_NS: {
    service: 'payment_pay_NS',
    url: 'api/paywall/payment/startdirect',
    method: 'POST',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  payment_start_3D: {
    service: 'payment_start_3D',
    url: 'api/paywall/payment/start3d',
    method: 'POST',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  payment_end_3D: {
    service: 'payment_end_3D',
    url: 'api/paywall/payment/end3d',
    method: 'POST',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  get_installments: {
    service: 'get_installments',
    url: 'api/paywall/installment',
    method: 'GET',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  bin_inquiry: {
    service: 'bin_inquiry',
    url: 'api/paywall/bin/inquiry',
    method: 'GET',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  payment_refund: {
    service: 'payment_refund',
    url: 'api/paywall/private/refund',
    method: 'POST',
    type: 'private',
    api_type: 'PaymentPrivateAPI'
  },
  payment_refund_partial: {
    service: 'payment_refund_partial',
    url: 'api/paywall/private/refund/partial',
    method: 'POST',
    type: 'private',
    api_type: 'PaymentPrivateAPI'
  },
  payment_cancel: {
    service: 'payment_cancel',
    url: 'api/paywall/private/cancel',
    method: 'POST',
    type: 'private',
    api_type: 'PaymentPrivateAPI'
  },
  payment_query: {
    service: 'payment_query',
    url: 'api/paywall/private/query',
    method: 'GET',
    type: 'private',
    api_type: 'PaymentPrivateAPI'
  },
  payment_approve_product: {
    service: 'payment_approve_product',
    url: 'api/paywall/marketplace/approve/product',
    method: 'POST',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  payment_approve_payment: {
    service: 'payment_approve_payment',
    url: 'api/paywall/marketplace/approve/payment',
    method: 'POST',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  payment_reject_product: {
    service: 'payment_reject_product',
    url: 'api/paywall/marketplace/reject/product',
    method: 'POST',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  payment_reject_payment: {
    service: 'payment_reject_payment',
    url: 'api/paywall/marketplace/reject/payment',
    method: 'POST',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  update_approve_product: {
    service: 'update_approve_product',
    url: 'api/paywall/marketplace/approve/product',
    method: 'PUT',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  update_approve_payment: {
    service: 'update_approve_payment',
    url: 'api/paywall/marketplace/approve/payment',
    method: 'PUT',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  get_report_approval: {
    service: 'get_report_approval',
    url: 'api/paywall/marketplace/report/approval',
    method: 'GET',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  get_report_earning_product: {
    service: 'get_report_earning_product',
    url: 'api/paywall/marketplace/report/earning/product',
    method: 'GET',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  get_report_earning_payment: {
    service: 'get_report_earning_payment',
    url: 'api/paywall/marketplace/report/earning/payment',
    method: 'GET',
    type: 'public',
    api_type: 'PaymentAPI'
  },
  get_payout_balance: {
    service: 'get_payout_balance',
    url: 'api/paywall/payout/balance',
    method: 'GET',
    type: 'private',
    api_type: 'PaymentAPI'
  },
  get_balance_main: {
    service: 'get_balance_main',
    url: 'api/paywall/payout/balance/main',
    method: 'GET',
    type: 'private',
    api_type: 'PaymentAPI'
  },
  payout_send_iban: {
    service: 'payout_send_iban',
    url: 'api/paywall/payout/send/iban',
    method: 'POST',
    type: 'private',
    api_type: 'PaymentAPI'
  },
  payout_send_member: {
    service: 'payout_send_member',
    url: 'api/paywall/payout/send/member',
    method: 'POST',
    type: 'private',
    api_type: 'PaymentAPI'
  },
  payout_query: {
    service: 'payout_query',
    url: 'api/paywall/payout/query',
    method: 'GET',
    type: 'private',
    api_type: 'PaymentAPI'
  }
} as const
