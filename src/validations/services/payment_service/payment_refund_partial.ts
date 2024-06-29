import Joi from 'joi'

export const Joi_PaymentRefundPartial = Joi.object().keys({
  Date: Joi.string().required(),
  MerchantUniqueCode: Joi.string().required(),
  Amount: Joi.number().required()
})
