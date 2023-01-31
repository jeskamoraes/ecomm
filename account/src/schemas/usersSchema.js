const Joi = require('joi');

const userValidations = {
    createOrUpdateValidator: {
        body: Joi.object({
            name: Joi.string().min(3).required(),
            email: Joi.string().required().email(),
            password: Joi.string().required().min(8).max(16),
        })
    }
}

module.exports = userValidations
