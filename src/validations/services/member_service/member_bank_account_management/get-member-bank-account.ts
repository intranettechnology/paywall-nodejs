import Joi from 'joi'

export const Joi_MemberBankAccount_Get = Joi.object().keys({
  memberid: Joi.number().integer().required()
})
