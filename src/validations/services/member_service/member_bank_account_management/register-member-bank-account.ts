import Joi from 'joi'

export const Joi_MemberBankAccount_Register = Joi.object().keys({
  MemberId: Joi.number().integer().required(),
  CurrencyId: Joi.number().integer().required(),
  Title: Joi.string().required(),
  Iban: Joi.string().required()
})
