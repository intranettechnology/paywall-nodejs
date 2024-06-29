import { type CustomValidator } from 'joi'

export const validateCustomDate: CustomValidator = (value, helpers) => {
  const regex = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
  if (!regex.test(value)) {
    return helpers.error('any.invalid')
  }
  return value
}
