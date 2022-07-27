import Joi from "joi";

export const productSchema = Joi.object({
  productName: Joi.string().required(),
  quantity: Joi.number().required(),
  unitPrice: Joi.string().required(),
  status: Joi.string().required(),
  category: Joi.string().required(),
});
