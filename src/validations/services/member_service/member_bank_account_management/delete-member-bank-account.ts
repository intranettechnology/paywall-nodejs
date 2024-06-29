import Joi from 'joi'

export const Joi_MemberBankAccount_Delete = Joi.object().keys({
  Id: Joi.number().integer().required()
})
