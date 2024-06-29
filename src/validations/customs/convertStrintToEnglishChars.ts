import { type CustomValidator } from 'joi'

export const convertTR2EN: CustomValidator = (value, helpers) => {
  if (value === undefined) return value
  return value
    .split('ş')
    .join('s')
    .split('Ş')
    .join('S')
    .split('ı')
    .join('i')
    .split('İ')
    .join('I')
    .split('ç')
    .join('c')
    .split('Ç')
    .join('C')
    .split('ü')
    .join('u')
    .split('Ü')
    .join('U')
    .split('ö')
    .join('o')
    .split('Ö')
    .join('O')
    .split('ğ')
    .join('g')
    .split('Ğ')
    .join('G')
}
