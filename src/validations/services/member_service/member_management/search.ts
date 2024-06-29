import Joi from 'joi'

export const Joi_MemberManagement_Search = Joi.object()
  .keys({
    memberid: Joi.number().integer(),
    memberexternalid: Joi.number().integer()
  })
  .or('memberid', 'memberexternalid')
