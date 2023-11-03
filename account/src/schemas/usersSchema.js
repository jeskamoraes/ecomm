const { celebrate, Joi } = require('celebrate');
const { messages } = require('joi-translation-pt-br');

const userValidations = celebrate({
    body: Joi.object({
        name: Joi.string().required().min(3).max(255),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(8).max(16),
    }),
}, {
    abortEarly: false,
    messages: messages,
}
)

module.exports = userValidations
