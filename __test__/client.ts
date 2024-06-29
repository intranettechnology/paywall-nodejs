import PaywallClient from '../src'
import {
  ENVIRONMENT,
  PRIVATE_CLIENT,
  PRIVATE_KEY,
  PUBLIC_CLIENT,
  PUBLIC_KEY
} from './prod.constants'

const paywallClient = new PaywallClient({
  ENVIRONMENT,
  PRIVATE_CLIENT,
  PRIVATE_KEY,
  PUBLIC_CLIENT,
  PUBLIC_KEY
})

export default paywallClient
