import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Users } from '../models/users.js';

export class UserController {
    async registerAccount(req, res) {
        const user = req.body;
        user.password = await bcrypt.hash(user.password, 10);

        await Users.create(user)
            .then(() => {
                res.status(201).json(user);
            })
            .catch((error) => {
                res.status(400).json({ message: error.message });
            })
    };

    async generateToken(req, res) {
        const user = await Users.findOne({
            attributes: ['id', 'name', 'email', 'password'],
            where: {
                email: req.body.email
            }
        });
        const validatePassword = await bcrypt.compare(req.body.password, user.password);

        if (!user)
            return res.status(400).send({ error: 'User not found.' });

        if (!validatePassword)
            return res.status(400).send({ error: 'Password invalid.' });

        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 14400,
        });

        res.send({ token });
    }
}

