import Joi from 'joi'

export const Joi_GetReportApproval = Joi.object().keys({
  paymentid: Joi.number().required()
})
