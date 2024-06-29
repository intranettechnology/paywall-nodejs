import Joi from 'joi'

export const Joi_PaymentRejectProduct = Joi.object().keys({
  ProductIds: Joi.array().required()
})
