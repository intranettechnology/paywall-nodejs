import Joi from 'joi'

export const Joi_GetPayoutBalance = Joi.object().keys({
  payoutconnectionid: Joi.number().required()
})
