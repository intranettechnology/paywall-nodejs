import Joi from 'joi'

export const Joi_PayoutSendIban = Joi.object().keys({
  PayoutProviderKey: Joi.string().required(),
  MerchantUniqueCode: Joi.string().required(),
  ReceiverTitle: Joi.string().required(),
  ReceiverIban: Joi.string().required(),
  ReceiverIdentity: Joi.string().required(),
  Description: Joi.string().required(),
  Amount: Joi.number().required(),
  CurrencyId: Joi.number().required(),
  MerchantGroupCode: Joi.string().optional().allow(null, ''),
  CallbackSupport: Joi.boolean().optional().allow(null, ''),
  CallbackAddress: Joi.string().optional().allow(null, '')
})
