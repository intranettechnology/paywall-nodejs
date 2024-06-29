import Joi from 'joi'

export const Joi_MemberValueDate_Get = Joi.object().keys({
  memberid: Joi.number().integer()
})
