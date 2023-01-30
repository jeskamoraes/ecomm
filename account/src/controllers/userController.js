const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;
    const verifyEmail = await User.findOne({ email });
    try {
        if(verifyEmail)
        return res.status(400).send({ error: 'User already exists' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed.' })
    }
});

router.post('/token', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    const validatePassword = await bcrypt.compare(password, user.password);

    if(!user)
        return res.status(400).send({ error: 'User or password invalids.' });

    if(!validatePassword)
    return res.status(400).send({ error: 'User or password invalids.' });

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: 14400,
    });

    res.send({ token });
})

module.exports = app => app.use('/accounts', router);