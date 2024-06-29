import axios, { AxiosError, type AxiosRequestConfig } from 'axios'
import { METHOD_TYPES } from '../types'

interface ISendRequestHeader {
  apikeypublic?: string
  apiclientpublic?: string
  apikeyprivate?: string
  apiclientprivate?: string
}

export const sendRequest = async (
  url: string,
  input: unknown,
  header: ISendRequestHeader,
  method_type: METHOD_TYPES
): Promise<any> => {
  const options: AxiosRequestConfig = {
    method: method_type,
    data: input,
    headers: {
      'Content-Type': 'application/json',
      ...header
    }
  }
  const promise = new Promise((resolve) => {
    axios(url, options)
      .catch((err: AxiosError) => {
        const error = {
          name: 'PaywallServerError',
          code: err.code,
          message: err.message
        }
        resolve(error)
      })
      .then((value: any) => {
        resolve(value)
      })
  })

  return await promise
}
