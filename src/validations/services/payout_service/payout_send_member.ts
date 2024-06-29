import Joi from 'joi'

export const Joi_PayoutSendMember = Joi.object().keys({
  PayoutProviderKey: Joi.string().required(),
  MerchantUniqueCode: Joi.string().required(),
  MemberId: Joi.number().required(),
  Description: Joi.string().required(),
  Amount: Joi.number().required(),
  CurrencyId: Joi.number().required()
})
