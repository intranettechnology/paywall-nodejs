import Joi from 'joi'
import { convertOwnerNameRegex } from '../../customs/convertOwnerNameRegex'

const Joi_PayWatch = {
  Watch: Joi.boolean().required(),
  WatchMin: Joi.number().min(5).max(20).required(),
  ActionId: Joi.number().valid(1, 2, 3, 4).required(),
  PaymentStatus: Joi.array().required(),
  WebhookAddress: Joi.string().when('ActionId', {
    is: 4,
    then: Joi.string().uri().required(),
    otherwise: Joi.string().uri().allow('').optional()
  })
}

export const Joi_PaymentPayNS = Joi.object().keys({
  PaymentDetail: {
    Amount: Joi.number().required(),
    MerchantUniqueCode: Joi.string().required(),
    CurrencyId: Joi.number().required(),
    MerchantSuccessBackUrl: Joi.string().required(),
    MerchantFailBackUrl: Joi.string().required(),
    Installement: Joi.number().required(),
    ChannelId: Joi.number().required(),
    TagId: Joi.number().required(),
    PayWatch: Joi.object(Joi_PayWatch).optional(),
    EndOfTheDay: Joi.number().valid(1, 2, 3, 4).required()
  },
  Card: {
    OwnerName: Joi.string().max(60).custom(convertOwnerNameRegex).required(),
    Number: Joi.string().creditCard().required(),
    ExpireMonth: Joi.string().required(),
    ExpireYear: Joi.string().required(),
    Cvv: Joi.string().required(),
    UniqueCode: Joi.string().optional().allow('')
  },
  Customer: {
    FullName: Joi.string().required(),
    Phone: Joi.string().required(),
    Email: Joi.string().email().required(),
    Country: Joi.string().required(),
    City: Joi.string().required(),
    Address: Joi.string().required(),
    IdentityNumber: Joi.string(),
    TaxNumber: Joi.string()
  },
  Products: Joi.array().items(
    Joi.object().keys({
      ProductId: Joi.string().required(),
      ProductName: Joi.string().required(),
      ProductCategory: Joi.string().required(),
      ProductDescription: Joi.string().required(),
      ProductAmount: Joi.number().required(),
      MemberId: Joi.number()
    })
  )
})
