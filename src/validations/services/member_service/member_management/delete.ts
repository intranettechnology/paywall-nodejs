import Joi from 'joi'

export const Joi_MemberManagement_Delete = Joi.object()
  .keys({
    Id: Joi.number().integer(),
    MemberExternalId: Joi.string()
  })
  .or('Id', 'MemberExternalId')
