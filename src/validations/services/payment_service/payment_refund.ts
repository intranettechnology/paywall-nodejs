import Joi from 'joi'

export const Joi_PaymentRefund = Joi.object().keys({
  Date: Joi.string().required(),
  MerchantUniqueCode: Joi.string().required()
})
