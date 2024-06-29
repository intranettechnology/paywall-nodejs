import Joi from 'joi'

export const Joi_PaymentCancel = Joi.object().keys({
  Date: Joi.string().required(),
  MerchantUniqueCode: Joi.string().required()
})
