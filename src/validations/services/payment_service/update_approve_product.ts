import Joi from 'joi'

export const Joi_UpdateApproveProduct = Joi.object().keys({
  ProductIds: Joi.array().required()
})
