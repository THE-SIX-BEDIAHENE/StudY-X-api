import Joi from 'joi'


export const postValidator = Joi.object({
    title: Joi.string().required(),
    slug: Joi.string().required(),
    content: Joi.string().required(),
})