import Joi from 'joi'
import {
  memberIdentityNumberRegex,
  phoneRegex,
  taxNumberRegex
} from '../../../regex'

export const Joi_MemberManagement_Update = Joi.object().keys({
  Id: Joi.number().integer().required(),
  IsSubMerchant: Joi.boolean().required(),
  MemberType: Joi.number().integer().valid(1, 2, 3).required(),
  MemberExternalId: Joi.string().required(),
  MemberName: Joi.string().required(),
  MemberTitle: Joi.string().required(),
  MemberTaxOffice: Joi.string().required(),
  MemberTaxNumber: Joi.string().pattern(new RegExp(taxNumberRegex)).required(),
  MemberIdentityNumber: Joi.string()
    .pattern(new RegExp(memberIdentityNumberRegex))
    .required(),
  MemberEmail: Joi.string().email().required(),
  MemberPhone: Joi.string().pattern(new RegExp(phoneRegex)).required(),
  MemberAddress: Joi.string().required(),
  ContactName: Joi.string().required(),
  ContactLastname: Joi.string().required()
})
