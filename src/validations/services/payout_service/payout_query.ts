import Joi from 'joi'

export const Joi_PayoutQuery = Joi.object().keys({
  merchantuniquecode: Joi.string().required()
})
