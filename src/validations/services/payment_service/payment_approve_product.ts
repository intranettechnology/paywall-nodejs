import Joi from 'joi'

export const Joi_PaymentApproveProduct = Joi.object().keys({
  ProductIds: Joi.array().required()
})
