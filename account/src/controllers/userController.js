const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = class UserController {    
    async registerAccount(req, res) {
        const { email } = req.body;

        try {
            const findUserByEmail = await User.findOne({ email });
            if (findUserByEmail)
                return res.status(400).send({ error: 'User already exists' });

            const userCreated = await User.create(req.body);

            delete userCreated.password;

            return res.status(201).send({ userCreated });
        } catch (err) {
            return res.status(400).send({ error: 'Registration failed.' });
        }
    }

    async generateToken(req, res) {
        const { email, password } = req.body;
        const userFound = await User.findOne({ email }).select('+password');

        if (!userFound)
            return res.status(400).send({ error: 'User or password invalids.' });

        const validatePassword = await bcrypt.compare(password, userFound.password);

        if (!validatePassword)
            return res.status(400).send({ error: 'User or password invalids.' });

        delete userFound.password;

        const token = jwt.sign({ id: userFound.id }, process.env.SECRET, {
            expiresIn: process.env.EXPIRESIN,
        });

        res.status(201).send({ token });
    }
}

