import Joi from 'joi'

export const Joi_MemberValueDate_Register = Joi.object().keys({
  MemberId: Joi.number().integer(),
  CalculationType: Joi.number().integer(),
  CalculationValue: Joi.number().integer(),
  Commission: Joi.number().integer()
})
