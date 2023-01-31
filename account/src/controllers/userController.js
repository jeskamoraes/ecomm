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

            const user = await User.create(req.body);

            delete user.password;

            return res.send({ user })
        } catch (err) {
            return res.status(400).send({ error: 'Registration failed.' })
        }
    }

    async generateToken(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        const validatePassword = await bcrypt.compare(password, user.password);

        if (!user)
            return res.status(400).send({ error: 'User or password invalids.' });

        if (!validatePassword)
            return res.status(400).send({ error: 'User or password invalids.' });

        delete user.password;

        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: process.env.EXPIRESIN,
        });

        res.send({ token });
    }
}

