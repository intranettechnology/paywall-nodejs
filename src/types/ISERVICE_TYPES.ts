import { API_TYPES } from './API_TYPES'
import { METHOD_TYPES } from './METHOD_TYPES'
import { PAYWALL_REQUEST_TYPES } from './PAYWALL_REQUEST_TYPES'

export interface ISERVICE_TYPES {
  service: string
  url: string
  method: METHOD_TYPES
  type: PAYWALL_REQUEST_TYPES
  api_type: API_TYPES
}
