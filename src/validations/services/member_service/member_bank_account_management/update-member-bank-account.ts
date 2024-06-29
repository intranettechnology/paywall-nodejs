import Joi from 'joi'

export const Joi_MemberBankAccount_Update = Joi.object().keys({
  Id: Joi.number().integer().required(),
  CurrencyId: Joi.number().integer().required(),
  Title: Joi.string().required(),
  Iban: Joi.string().required()
})
