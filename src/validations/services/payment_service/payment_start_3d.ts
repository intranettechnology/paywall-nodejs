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

export const Joi_PaymentStart3D = Joi.object().keys({
  PaymentDetail: Joi.object({
    Amount: Joi.number().required(),
    MerchantUniqueCode: Joi.string().max(250).required(),
    CurrencyId: Joi.number().required(),
    MerchantSuccessBackUrl: Joi.string().uri().max(250).required(),
    MerchantFailBackUrl: Joi.string().uri().max(250).required(),
    Installement: Joi.number().required(),
    ChannelId: Joi.number().required(),
    TagId: Joi.number().required(),
    Half3D: Joi.boolean().required(),
    PayWatch: Joi.object(Joi_PayWatch).optional(),
    EndOfTheDay: Joi.number().valid(1, 2, 3, 4).required()
  }).required(),
  Card: Joi.object({
    OwnerName: Joi.string().max(60).custom(convertOwnerNameRegex).required(),
    Number: Joi.string().max(20).required(),
    ExpireMonth: Joi.string().required(),
    ExpireYear: Joi.string().required(),
    Cvv: Joi.string().required(),
    UniqueCode: Joi.string().optional().allow('')
  }).required(),
  Customer: Joi.object({
    FullName: Joi.string().required(),
    Phone: Joi.string().required(),
    Email: Joi.string().email().required(),
    Country: Joi.string().required(),
    City: Joi.string().required(),
    Address: Joi.string().required(),
    IdentityNumber: Joi.string().required(),
    TaxNumber: Joi.string().required()
  }).required(),
  Products: Joi.array().items(
    Joi.object({
      ProductId: Joi.string().required(),
      ProductName: Joi.string().required(),
      ProductCategory: Joi.string().required(),
      ProductDescription: Joi.string().required(),
      ProductAmount: Joi.number().required(),
      MemberId: Joi.number().optional(),
      DiscountOwnerType: Joi.number().required(),
      DiscountType: Joi.number().required(),
      DiscountValue: Joi.number().required(),
      CargoOwnerType: Joi.number().required(),
      CargoCurrencyId: Joi.number().required(),
      CargoCost: Joi.number().required(),
      MemberCustomCommission: Joi.boolean().optional(),
      MemberCommission: Joi.number().optional()
    })
  )
})
