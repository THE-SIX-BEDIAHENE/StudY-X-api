import Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
})