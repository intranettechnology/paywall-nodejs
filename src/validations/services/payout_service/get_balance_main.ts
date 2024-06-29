import Joi from 'joi'

export const Joi_GetBalanceMain = Joi.object().keys({
  currencyid: Joi.number().required()
})
