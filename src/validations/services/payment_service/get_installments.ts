import Joi from 'joi'

export const Joi_GetInstallments = Joi.object().keys({
  currencyid: Joi.number().required(),
  amount: Joi.number().required(),
  binnumber: Joi.string().optional(),
  distinctduplicates: Joi.boolean().required()
})
