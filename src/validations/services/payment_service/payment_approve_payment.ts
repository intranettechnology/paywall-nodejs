import Joi from 'joi'

export const Joi_PaymentApprovePayment = Joi.object().keys({
  PaymentId: Joi.number().required()
})
