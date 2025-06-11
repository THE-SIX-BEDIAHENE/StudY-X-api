import Joi from 'joi'


export const projectValidator = Joi.object({
    title: Joi.string().required(),
    slug: Joi.string().required(),
    description: Joi.string().required(),
})