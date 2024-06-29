import { type CustomValidator } from 'joi'

export const convertOwnerNameRegex: CustomValidator = (
  ownerName: string | undefined
) => {
  if (ownerName === undefined) return ownerName
  const res = ownerName
    .trim()
    .replace(/[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s$/, '')
    .split('ş')
    .join('s')
    .split('Ş')
    .join('s')
    .split('ı')
    .join('i')
    .split('İ')
    .join('i')
    .split('ç')
    .join('c')
    .split('Ç')
    .join('c')
    .split('ü')
    .join('u')
    .split('Ü')
    .join('u')
    .split('ö')
    .join('o')
    .split('Ö')
    .join('o')
    .split('ğ')
    .join('g')
    .split('Ğ')
    .join('g')
    .split('i̇')
    .join('i')
    .toLowerCase()

  const regex = new RegExp('^[a-zA-Z ğüşöçıİĞÜŞÖÇ]*$')
  return res
}
