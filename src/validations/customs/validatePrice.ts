/* eslint disable no-duplicate-imports */
import type Joi from 'joi'
import { type ErrorReport } from 'joi'
/* eslint enable no-duplicate-imports */

export const validateCustomPrice = (
  value: string,
  helper: Joi.CustomHelpers<any>
): string | ErrorReport => {
  try {
    const priceAsNumber = Number(value.split(',').join(''))
    if (
      !Number.isNaN(priceAsNumber) &&
      Math.round(priceAsNumber) === priceAsNumber &&
      priceAsNumber !== 0
    ) {
      return value
    }
    return helper.error('any.invalid')
  } catch (err) {
    return helper.error('any.invalid')
  }
}
