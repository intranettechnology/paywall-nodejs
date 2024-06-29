import Joi from 'joi'
import {
  ibanRegex,
  memberIdentityNumberRegex,
  phoneRegex,
  taxNumberRegex
} from '../../../regex'

export const Joi_MemberManagement_Register = Joi.object().keys({
  IsSubMerchant: Joi.boolean().required(),
  MemberType: Joi.number().integer().valid(1, 2, 3).required(),
  MemberExternalId: Joi.string().required(),
  MemberName: Joi.string().required(),
  MemberTitle: Joi.string().required(),
  MemberTaxOffice: Joi.string().required(),
  MemberTaxNumber: Joi.string().required(),
  MemberIdentityNumber: Joi.string().required(),
  MemberEmail: Joi.string().email().required(),
  MemberPhone: Joi.string().required(),
  MemberAddress: Joi.string().required(),
  ContactName: Joi.string().required(),
  ContactLastname: Joi.string().required(),
  BankAccounts: Joi.array()
    .items(
      Joi.object({
        CurrencyId: Joi.number().integer().required(),
        Title: Joi.string().required(),
        Iban: Joi.string().pattern(new RegExp(ibanRegex)).required()
      })
    )
    .optional(),
  ValueDate: Joi.object({
    CalculationType: Joi.number().integer().required(),
    CalculationValue: Joi.number().required(),
    Commission: Joi.number().required()
  }).optional(),
  SkipIdentityExistCheck: Joi.boolean().optional()
})
