import Joi from "joi";
const Schema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9, ]/)
    .max(30),
  username: Joi.string()
    .pattern(/^[a-zA-Z0-9, ]/)
    .max(30),
  email: Joi.string().email(),
  address: Joi.object().allow(""),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/),
  website: Joi.string().allow(""),
  company: Joi.object().allow(""),
});

export { Schema };
