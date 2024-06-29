import Joi from 'joi'

export const Joi_GetReportEarningProduct = Joi.object().keys({
  paymentid: Joi.number().required()
})
