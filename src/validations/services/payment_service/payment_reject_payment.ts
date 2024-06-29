import Joi from 'joi'

export const Joi_PaymentRejectPayment = Joi.object().keys({
  PaymentId: Joi.number().required()
})
