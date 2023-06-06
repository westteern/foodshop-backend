const Joi = require('joi');

const orderValidationSchema = Joi.object({
  orderList: Joi.object({
    products: Joi.array().required(),
    totalPrice: Joi.number().required(),
  }),
  costumer: Joi.object({
    userName: Joi.string().min(3).max(15).required(),
    userEmail: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
      .required(),
    userPhone: Joi.string().required(),
    userAddress: Joi.string().required(),
  }),
});

module.exports = orderValidationSchema;
