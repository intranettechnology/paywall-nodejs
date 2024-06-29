import Joi from 'joi'

export const Joi_UpdateApprovePayment = Joi.object().keys({
  PaymentId: Joi.number().required()
})
