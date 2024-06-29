import Joi from 'joi'

export const Joi_PaymentEnd3D = Joi.object().keys({
  MerchantUniqueCode: Joi.string().required()
})
