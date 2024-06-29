import Joi from 'joi'

export const Joi_BinInquiry = Joi.object().keys({
  binnumber: Joi.string().max(6).required()
})
