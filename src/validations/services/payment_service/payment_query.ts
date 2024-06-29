import Joi from 'joi'

export const Joi_PaymentQuery = Joi.object().keys({
  merchantuniquecode: Joi.string().required()
})
