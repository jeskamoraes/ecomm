import { celebrate, Joi } from 'celebrate';
import messages from 'joi-translation-pt-br';

const productValidations = celebrate({
    body: Joi.object({
        name: Joi.string().required(),
        value: Joi.number().sign('positive').required(),
        quantity: Joi.number().sign('positive').required(),
        category: Joi.string().required(),
        description: Joi.string().min(200).max(500).required(),
        features: Joi.array().min(3).items({
            name: Joi.string().required(),
            description: Joi.string().required()
        }),
        images: Joi.array().min(3).items({
            url: Joi.string().required(),
            description: Joi.string().required()
        }),
    })
}, {
    abortEarly: false,
    messages: messages,
})

export default productValidations;
