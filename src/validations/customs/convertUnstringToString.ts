import { type CustomValidator } from 'joi'

export const convertUnstringToString: CustomValidator = (value) => {
  const cleanedValue = value
    .trim()
    .replace(/[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s$/, '')
  return cleanedValue
}
