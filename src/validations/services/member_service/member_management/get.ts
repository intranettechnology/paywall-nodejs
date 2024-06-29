import Joi from 'joi'

export const Joi_MemberManagement_Get = Joi.object().keys({
  start: Joi.number().integer(),
  length: Joi.number().integer()
})
